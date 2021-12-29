# 通信

VariousJS 提供简便易用的通信机制，并可以保证组件的安全性，不能随意访问其他组件的数据情况

## 提供方法

被通信组件需要提供方法供其他组件访问，各组件的提供方式有一些差异

### 主体组件

主体组件有且只有一个，通过全局数据定义及方法提供通信方法

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
  async setName({ dispatch, getStore }, value) {
    await new Promise((r) => setTimeout(r, 1000))
    const { user } = getStore()
    user.name = value
    dispatch({ user })
  },
}

export default actions
```

通过以上数据及方法定义，主体组件提供了 `setName` 方法，其他组件可以访问该方法修改全局数据 `user`

### 功能组件

功能组件有两种形式，`Function Component` 及 `Class Component`。两种方式的组件提供调用方法并不一样，并且要考虑组件的数据安全性，其他组件不能随意访问内部数据

Function Component 通过定义属性提供调用方法

```tsx
import React, { FC } from 'react'

const A: FC = () => (<div>A</div>)

A.getName = () => 'A'

export default A
```

Class Component 通过定义 `static` 方法提供

```tsx
import React, { Component } from 'react'

export default class A extends Component {
  static getName = () => 'A'

  render() {
    return (<div>A</div>)
  }
}
```

组件 A 两种方式都提供了方法 `getName` 调用，其实底层都是提供属性方法的形式。这样处理保证了组件内部数据的安全性

### 改变状态

通过定义属性形式提供调用方法，保证了组件内部数据安全性，但有个问题是如何通信改变其他组件的自身状态？答案是使用状态管理

VariousJS 提供了状态组件 `Store`，基于 基于 [nycticorax](https://github.com/fratercula/nycticorax)，类似 `Redux` 的用法，用于组件状态管理

```tsx
import React, { Component } from 'react'
import { ComponentProps, Store, Connect as CT } from '@variousjs/various'

type Store = { value: string }
type Connect = CT<Store>

const { createStore, connect, dispatch } = new Store<S>()

createStore({ value: 'B' })

class B extends Component<Connect> {
  static updateValue = async (value: string) => {
    await new Promise((r) => setTimeout(r, 1000))
    dispatch({ value }, true)
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

## 调用方法

与其他组件通信调用其方法必须先知道对方组件提供的方法情况

```ts
// type 通信类型：store(全局) / 组件名字
// method 方法：调用全局或者其他组件提供的方法
// value 值：传递的参数
type $dispatch = (type: string, method: string, value?: any) => unknown
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
    const name = props.$dispatch('A', 'setName')
    console.log(name)

    // 改变 B 组件的状态
    props.$dispatch('B', 'updateValue', 'C')
  }, [])

  return (<div>C</div>)
}

export default C
```
