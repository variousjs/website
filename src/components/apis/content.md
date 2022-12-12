# API

VariousJS 的 API 及 TS 类型都由 `@variousjs/various` 包提供

<!-- toc -->

## 全局 API

### createComponent

根据组件名字创建一个新的 React 组件，该组件名字必须在页面配置 `components` 已经定义

```ts
const createComponent: (name: string) => React.ComponentType<{
  $silent?: boolean, // 安静模式，不使用全局加载组件及出错组件
  [key: string]: any,
}>
```

示例

```ts
import React, { useMemo } from 'react'
import { createComponent } from '@variousjs/various'

export default () => {
  const T = useMemo(() => createComponent('component-t'), [])

  return (
    <T />
  )
}
```

### renderComponent

根据组件配置或者指定组件路径生成一个 React 组件，并渲染到指定的页面 dom 节点

```ts
const renderComponent: (params: {
  name: string,                 // 组件名字，如果不指定 url 配置，则使用页面组件配置
  url?: string,                 // 组件 url 地址，如果指定则替换页面组件配置
  module?: string,              // 使用组件导出的模块
  props?: Record<string, any>,  // 组件属性
  target: Element | null,       // 渲染节点
  onMounted?: () => void,       // 组件加载成功事件
}) => () => void                // 返回移除组件方法
```

示例

```tsx
import React, { Component } from 'react'
import { renderComponent } from '@variousjs/various'

export default class extends Component {
  private unMount: () => void

  omponentWillUnmount() {
    if (this.unMount) {
      this.unMount()
    }
  }

  onMount = () => {
    this.unMount = renderComponent({
      name: 'component-b',
      target: document.querySelector('#dom'),
      props: {
        text: 'text',
      },
      onMounted: () => {
        console.log('success')
      },
    })
  }

  render() {
    return (
      <>
        <div id="dom" />
        <button onClick={this.onMount}>Render</button>
      </>
    )
  }
}
```

### getEnv

获取当前运行环境 `development` ｜ `production`。环境由页面配置定义

```ts
const getEnv: () => 'development' | 'production'
```

### getConfig

获取当前页面配置参数

```ts
const getConfig: () => Record<string, any>
```

### onComponentMounted

监听一个或多个组件加载成功事件，返回移除监听事件方法

```ts
const onComponentMounted: (name: string | string[], callback: () => void) => () => void
```

示例

```ts
import { useEffect } from 'react'
import { onComponentMounted } from '@variousjs/various'

export default () => {
  useEffect(() => {
    const un = onComponentMounted(['component-a'], () => {
      console.log('loaded')
    })
    return un
  }, [])

  return null
}
```

### preloadComponents

预加载指定的组件

```ts
const preloadComponents: (names: string[]) => Promise<void>
```

### getMountedComponents

获取当前页面装载的组件（注意不是加载完成的组件）

```ts
const getMountedComponents: () => string[]
```

### isComponentLoaded

判断某个组件是否已经加载完成（不一定在当前页面装载）

```ts
const isComponentLoaded: (name: string) => boolean
```

## 状态管理

VariousJS 核心基于 [nycticorax](https://github.com/fratercula/nycticorax) 同时 nycticorax 也是状态容器，提供状态管理。所以 VariousJS 提供 `Store` 对象用于管理组件的状态

```ts
import { Store } from '@variousjs/various'

type State = { value: string }

const { createStore, connect, emit } = new Store<State>()
```

## 组件 API

此类 API 只能在组件内使用，组件必须为 React 组件


```ts
// 普通组件 API
interface ComponentProps<Store = {}> {
  $store: Readonly<Store>,
  $dispatch: (type: string, method: string, value?: any) => Promise<any>,
  $postMessage: (name: string, value?: any) => void,
  $t: (key: string, params?: Record<string, string | number>) => string | undefined,
}

// 错误组件 API
interface ErrorProps<Store = {}> {
  $reload?: () => void,
  $type: 'LOADING_ERROR' | 'DEPENDENCIES_LOADING_ERROR' | 'NOT_DEFINED' | 'INVALID_COMPONENT' | 'SCRIPT_ERROR' | 'CONTAINER_ERROR',
  $message?: string,
  $store: Readonly<Store>,
}

// 加载组件 API
interface LoaderProps<Store = {}> {
  $store: Readonly<Store>,
}
```

### $store

获取当前配置的全局数据，全局数据可以通过配置定义的 actions 改变全局数据

示例

```tsx
import React, { FC } from 'react'
import { ComponentProps } from '@variousjs/various'

interface State { value: string }

const R: FC<ComponentProps<State>> = (props) => (
  <div>{props.$store.value}</div>
)

export default R
```

### $dispatch

调用其他组件方法或者全局定义的方法，调用之前需知道具体组件名及事件名

```ts
// type 通信类型：store(全局) / 组件名字
// method 方法：调用全局或者其他组件提供的方法
// value 值：传递的参数
type $dispatch = (type: string, method: string, value?: any) => Promise<any>
```

示例

```tsx
import React, { Component } from 'react'
import { ComponentProps } from '@variousjs/various'

export default class extends Component<ComponentProps> {
  dispatch = async () => {
    const next = await this.props.$dispatch('component-a', 'getValue')
    console.log(next)
  }

  render() {
    return (
      <button onClick={this.dispatch}>Dispatch</button>
    )
  }
}
```

### $postMessage

此方法用于组件广播事件，其他组件可以进行消息监听获取广播消息

```ts
// name 方法名：调用全局或者其他组件提供的方法
// value 值：传递的参数
type $postMessage = (name: string, value?: any) => void
```

示例

```tsx
import React, { Component } from 'react'
import { ComponentProps } from '@variousjs/various'

export default class extends Component<ComponentProps> {
  onMessage = () => {
    this.props.$postMessage('some-method', { value: 'data' })
  }

  render() {
    return (
      <button onClick={this.onMessage}>PostMessage</button>
    )
  }
}
```

### $t

国际化函数，使用前需定义国际化文案
