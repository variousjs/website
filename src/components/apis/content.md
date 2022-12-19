# API

VariousJS 的 API 及 TS 类型都由 `@variousjs/various` 包提供

<!-- toc -->

## 全局 API

以下 API 可全局使用

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
import { Store, Dispatch } from '@variousjs/various'

type State = { value: string }

const { createStore, connect, emit } = new Store<State>()
```

## 组件 API

此类 API 只能在组件内使用


```ts
// 普通组件 API
interface ComponentProps<Store = {}> {
  $store: Readonly<Store>,
  $dispatch: (name: string, method: string, value?: any) => Promise<any>,
  $postMessage: (event: string, value?: any) => void,
  $t: (key: string, params?: Record<string, string | number>) => string,
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
// name 通信组件：store(全局) / 组件名字
// method 方法：调用全局或者其他组件提供的方法
// value 值：传递的参数
type $dispatch = (name: string, method: string, value?: any) => Promise<any>
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
// event: 广播事件名
// value：广播事件值
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

```ts
type $t = (key: string, params?: Record<string, string | number>) => string
```

示例

```tsx
import React, { Component } from 'react'
import { ComponentProps, Ii8n } from '@variousjs/various'
import Zh from './i18n/zh.json'
import En from './i18n/en.json'

export default class C extends Component<ComponentProps> {
  static $i18n: Ii8n = () => ({
    localeKey: 'locale',
    resources: {
      zh: Zh,
      en: En,
    },
  })

  render() {
    const { $t } = this.props

    return (
      <div>
        {$t('name', { value: 1 })}
      </div>
    )
  }
}
```

### $reload

此方法只在全局错误组件提供，用于重试加载当前组件，使用前需判断是否存在

```ts
type $reload = () => void
```

示例

```tsx
import React, { FC } from 'react'
import { ErrorProps } from '@variousjs/various'

const errorComponent: FC<ErrorProps> = (props) => {
  const { $reload } = props
  return (
    <>
      {
        $reload && (
        <button
          type="button"
          onClick={$reload}
        >
          刷新
        </button>
        )
      }
    </>
  )
}

export default errorComponent
```

### $type

此属性只有在全局错误组件提供，说明当前组件错误类型

```ts
type $type = 'LOADING_ERROR' | 'DEPENDENCIES_LOADING_ERROR' | 'NOT_DEFINED' | 'INVALID_COMPONENT' | 'SCRIPT_ERROR' | 'CONTAINER_ERROR'
```

类型说明

| 类型                       | 描述             | 是否可以重新加载 |
|----------------------------|------------------|------------------|
| LOADING_ERROR              | 组件加载失败     | yes              |
| DEPENDENCIES_LOADING_ERROR | 组件依赖加载失败 | yes              |
| NOT_DEFINED                | 组件未定义       | no               |
| INVALID_COMPONENT          | 错误的组件类型   | no               |
| SCRIPT_ERROR               | 组件运行出错了   | yes              |
| CONTAINER_ERROR            | 容器组件出错了   | no               |

### $message

此属性只有在全局错误组件提供，说明当前组件错误详细信息

```ts
type $message = string
```

## 组件静态属性

以下都是组件的静态属性类型提供，静态属性是 VariousJS 组件的重要功能提供：组件通信，国际化等

### I18n

此属性用于国际化配置提供，对应组件的静态属性名: $i18n

```ts
// localeKey: 指定当前国际化语言绑定的全局 store key
// resources: 国际化文案
type Ii8n = () => {
  localeKey: string,
  resources: Record<string, Record<string, string>>,
}
```

示例

```tsx
import React, { FC, useState } from 'react'
import { ComponentProps, Ii8n } from '@variousjs/various'
import Zh from './i18n/zh.json'
import En from './i18n/en.json'

/*
json example
{
  "title": "Title",
  "hello": "Hello, {name}, {name2}"
}
*/

const F: FC<ComponentProps> & { $i18n: Ii8n } = (props) => {
  const { $t, $dispatch } = props
  const [lang, setLang] = useState('')
  const getLang = async () => {
    const current: string = await $dispatch('store', 'getLocale')
    setLang(current)
  }

  return (
    <div>
      <span>{$t('title', {})}</span>
      <button onClick={() => $dispatch('store', 'setLocale', 'zh-CN')}>Set Locale</Button>
      <button onClick={getLang}>Get Locale</button>
    </div>
  )
}

F.$i18n = () => ({
  localeKey: 'locale',
  resources: {
    zh: Zh,
    en: En,
  },
})

export default F
```

### Invoker

用于定义组件通信方法，定义被其他组件调用的方法

```ts
// value: 调用的值
// trigger: 调用来源组件名
type Invoker = (value: any, trigger: string) => any
```

示例

```tsx
import React, { Component } from 'react'
import { Invoker } from '@variousjs/various'

export default class extends Component {
  // 提供一个 `updateValue 方法`
  static updateValue: Invoker = async (value, trigger) => {
    await new Promise((r) => setTimeout(r, 100))
    console.log(value, trigger)
  }

  render() {
    return (
      <div>A</div>
    )
  }
}
```

### MessageInvoker

定义监听其他组件有广播的消息，对应属性名: $onMessage

```ts
// event: 消息事件名
// component: 广播消息组件名
// value: 消息值
type MessageInvoker = (
  message: { event?: string, component?: string, value?: any },
) => any
```

示例

```tsx
import React, { FC } from 'react'
import { ComponentProps, Store, MessageInvoker } from '@variousjs/various'

type State = { component: string, event: string, value: any }

const { createStore, connect, emit } = new Store<State>()

createStore({ component: '', event: '', value: undefined })

const G: FC<State> & { $onMessage: MessageInvoker } = (props) => (
  <div>
    <span>{props.component}</span>
    <span>{props.event}</span>
    <span>{props.value}</span>
  </div>
)

G.$onMessage = (message) => {
  // 监听其他组件广播的消息，并传递给当前组件
  // 由于静态属性不能访问组件实例，所以需要借用状态管理能力
  emit(message)
}

export default connect('component', 'event', 'value')(G)
```

## 其他

### Actions

定义改变全局数据方法类型

```ts
// nycticorax: https://github.com/fratercula/nycticorax
// value: 调用值
// trigger: 调用组件名
type Dispatch<T> = (
  nycticorax: { getStore: () => T, emit: (next: Partial<T>) => void },
  value: any,
  trigger: string,
) => Promise<any>

type Actions<S = {}> = Record<string, Dispatch<S>>
```

示例

```ts
import { Actions } from '@variousjs/various'

type State = { locale: string }

const actions: Actions<State> = {
  async setLocale({ emit }, value) {
    emit({ locale: value })
  },

  async getLocale({ getStore }) {
    return getStore().locale
  },
}

export default actions
```
