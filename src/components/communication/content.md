# 组件通信

由于组件完全独立分离，组件间需要一些互相联系的方式，VariousJS 提供简便易用的通信机制，组件间可以方便进行通信联系

提供的通信方式有两种：方法调用及广播消息

<!-- toc -->

## 方法调用

方法调用的方式为一个组件提供方法，由另外一个组件进行调用，调用后可以返回内容或者进行一些操作。是被动的通信方式

### 方法提供

方法调用的前提是被调用的组件提供方法，以下为提供方法方式

#### 主体组件

通过全局数据定义及方法提供通信方法

```ts
// store.ts 定义全局数据
export default {
  user: {
    name: 'various',
  },
}

// actions.ts 定义全局数据操作方法
import { Actions } from '@variousjs/various'
import store from './store'

type Store = typeof store

const actions: Actions<Store> = {
  async setName({ emit, getStore }, { value }) {
    await new Promise((r) => setTimeout(r, 1000))
    const { user } = getStore()
    user.name = value
    emit({ user })
  },
}

export default actions
```

通过以上数据及方法定义，全局提供了 `setName` 方法，其他组件可以访问该方法修改全局数据 `user`

#### 功能组件

功能组件有两种形式，`Function Component` 及 `Class Component`。两种方式的组件提供调用方法并不一样，并且要考虑组件的数据安全性，其他组件不能随意访问内部数据

Function Component 通过定义静态属性方法提供

```tsx
import React, { FC } from 'react'
import { Invoker } from '@variousjs/various'

const A: FC & & { getName: Invoker } = () => (<div>A</div>)

A.getName = () => 'A'

export default A
```

Class Component 通过定义静态方法 `static` 提供

```tsx
import React, { Component } from 'react'
import { Invoker } from '@variousjs/various'

export default class A extends Component {
  static getName: Invoker = () => 'A'

  render() {
    return (<div>A</div>)
  }
}
```

组件 A 两种方式都提供了方法 `getName` 调用，其实底层都是提供属性方法的形式。这样处理保证了组件内部数据不被外部直接访问

### 调用方法

调用其他组件方法时候必须先知道对方组件提供的方法情况

```ts
// type 通信类型：store(全局) / 组件名字
// method 方法：调用全局或者其他组件提供的方法
// value 值：传递的参数
type $dispatch = (type: string, method: string, value?: any) => Promise<any>
```

例如根据上面例子组件提供的方法，可以有以下调用方式

```tsx
import React, { FC, useEffect } from 'react'
import { ComponentsProps } from '@variousjs/various'

const C: FC<ComponentProps> = (props) => {
  useEffect(() => {
    // 改变全局数据
    props.$dispatch('store', 'setName', 'C')
      .then(() => {
        // ...
      })

    // 获取 A 组件提供的值
    props.$dispatch('A', 'setName').then(() => {
      console.log(name)
    })

    // 改变 B 组件的状态
    props.$dispatch('B', 'updateValue', 'C')
  }, [])

  return (<div>C</div>)
}

export default C
```

### 状态改变

通过定义属性形式提供调用方法，保证了组件内部数据安全性，但有个问题是如何通信改变其他组件的自身状态？答案是使用状态管理

VariousJS 提供了状态组件 `Store`，基于 [nycticorax](https://github.com/fratercula/nycticorax)，类似 `Redux` 的用法，用于组件状态管理

```tsx
import React, { Component } from 'react'
import { ComponentProps, Store, Connect as CT, Invoker } from '@variousjs/various'

type Store = { value: string }
type Connect = CT<Store>

const { createStore, connect, emit } = new Store<S>()

createStore({ value: 'B' })

class B extends Component<Connect> {
  static updateValue: Invoker = async ({ value }) => {
    await new Promise((r) => setTimeout(r, 1000))
    emit({ value }, true)
  }

  render() {
    const { value } = this.props

    return (
      <div>当前值：{value}</div>
    )
  }
}

export default connect('value')(B)
```

以上例子 B 组件提供了 `updateValue` 给其他组件调用改变自身数据状态

## 广播消息

此方式是一个组件直接进行广播消息，传递相关参数，其他组件可以进行消息监听获取参数。是主动的通信方式

### 主动广播

组件进行广播消息没有什么限制

```ts
// name：事件名字，用于区分
// value：传递的参数
type $postMessage = (name: string, value?: any) => void
```

以下例子，点击按钮组件就广播了一个名字为 `m` 的消息，并且传递了参数 `hello world`

```tsx
import React, { FC } from 'react'
import { ComponentProps } from '@variousjs/various'

const A: FC<ComponentProps> = (props) => {
  const onMsg = () => {
    props.$postMessage('m', 'hello world')
  }

  return (
    <div>
      <button onClick={onMsg}>广播消息</button>
    </div>
  )
}
```

### 监听消息

其他组件要进行监听消息，必须定义静态方法 `$onMessage`。请注意组件无法监听到自己广播的消息

```ts
export type OnMessage = (message: {
  type: string,
  name: string,
  value?: any,
}) => void
```

监听消息返回的参数中可以获取到当前广播消息的组件名字

```tsx
import React, { FC } from 'react'
import { MessageInvoker } from '@variousjs/various'

const A: FC = () => {
  return (
    <div>
      <button onClick={onMsg}>广播消息</button>
    </div>
  )
}

A.$onMessage: MessageInvoker = (m) => {
  console.log(m)
}

export default A
```
