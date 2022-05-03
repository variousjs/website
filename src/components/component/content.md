# 组件体系

在 VariousJS 体系下，一切功能，依赖，甚至页面都可以认为是一个 React 组件。每个组件都是独立进行构建打包输出的。
虽然都是 AMD 规范导出的组件，但还是有一定的区别。根据组件提供的能力划分，总体上可以分为三类组件。

<!-- toc -->

## 主体组件

主体组件有且只有一个，用于配置整个应用，控制应用的运行。可以使用 [react-router](https://github.com/remix-run/react-router) 等定义页面路由，控制页面布局，控制其他组件的展示。另外也提供全局数据配置，数据共享机制等

主体组件需要提供模块

- 全局数据定义
- 全局数据操作方法
- 容器组件
- 加载提示组件
- 错误提示组件

```js
export { default as store } from './store'
export { default as actions } from './actions'
export { default as Container } from './container'
export { default as Loader } from './loader'
export { default as Error } from './error'
```

### 全局数据定义

全局数据可以被所有组件访问，通常用于存储需要被全局访问数据，例如用户验证信息

```ts
// store.ts
export default {
  user: {
    name: 'various',
  },
}
```

### 全局数据操作方法

定义操作全局数据方法（数据处理），数据操作基于 [nycticorax](https://github.com/fratercula/nycticorax)

```ts
// actions.ts
import { Actions } from '@variousjs/various'
import store from './store'

type Store = typeof store

const actions: Actions<Store> = {
  // value 为调用值，trigger 为调用组件名
  async setName({ emit, getStore }, { value, trigger }) {
    await new Promise((r) => setTimeout(r, 1000))
    const { user } = getStore()
    user.name = value
    emit({ user })
  },
}

export default actions
```

### 容器组件

容器组件用于根据自定义配置生成页面结构，页面路由相关，并且负责其他组件的加载控制。通过这种形式，生成新的页面，添加新的功能，可以不需要主应用重新构建打包

```tsx
// container.tsx
import React, { Component, ComponentType } from 'react'
import { ContainerProps } from '@variousjs/various'
// 请注意将 react-router-dom 作为一个依赖 externals 排除
import { HashRouter as Router, Route, Link } from 'react-router-dom'
type Config = {
  pages: {
    path: string[] | string,
    components: string[],
  }[],
}

class Container extends Component<ContainerProps<Config>> {
  render() {
    const { $component, $config } = this.props

    return (
      <Router>
        {
          $config.pages.map(({ path, components }) => {
            const cs = () => components.map((name) => {
              const C = $component(name)
              return (
                <div key={name}>
                  <C />
                </div>
              )
            })

            return (
              <Route
                key={Array.isArray(path) ? path.join() : path}
                exact
                path={path}
                component={cs as unknown as ComponentType}
              />
            )
          })
        }
      </Router>
    )
  }
}

export default Container
```

### 加载提示组件

组件都是动态加载，所以需要一个友好的加载提示。加载提示组件会在组件加载完成后被移除

```tsx
// loader.tsx
import React from 'react'
import { Skeleton } from 'antd'

export default function Loader() {
  return (
    <div style={{ padding: '32px 48px 60px' }}>
      <Skeleton active />
    </div>
  )
}
```

如果希望组件使用自定义加载，只需要在页面定义组件生成的组件配置 `$slient` 参数即可，这时候组件的加载及出错都不会有提示，需要组件自行处理

```tsx
// ...
const C = $component('name')
return (
  <div key={'name'}>
    <C $slient />
  </div>
)
// ...
```

### 错误提示组件

当组件加载/运行期间出现问题，并不会导致全局应用或者其他组件受到影响，但需要一个友好的错误提示

```ts
interface ErrorProps {
  reload?: () => void,
  type: 'LOADING_ERROR' | 'DEPENDENCIES_LOADING_ERROR' | 'NOT_DEFINED' | 'INVALID_COMPONENT' | 'SCRIPT_ERROR' | 'ROUTER_ERROR' | 'CONTAINER_ERROR',
  message?: string,
}
```

错误提示组件有重新加载方法，但并不是所有错误都可以重新加载。以下为错误类型定义及是否可以重新加载

| 类型                       | 描述             | 是否可以重新加载 |
|----------------------------|------------------|------------------|
| LOADING_ERROR              | 组件加载失败     | yes              |
| DEPENDENCIES_LOADING_ERROR | 组件依赖加载失败 | yes              |
| NOT_DEFINED                | 组件未定义       | no               |
| INVALID_COMPONENT          | 错误的组件类型   | no               |
| SCRIPT_ERROR               | 组件运行出错了   | yes              |
| ROUTER_ERROR               | 页面路由出错     | no               |
| CONTAINER_ERROR            | 容器组件出错了   | no               |

```tsx
import React, { FC } from 'react'
import { Alert, Button } from 'antd'
import { ErrorProps } from '@variousjs/various'

const errorComponent: FC<ErrorProps> = ({ reload, type, message }) => (
  <>
    <Alert
      message="Error"
      description={message || '组件错误'}
      type="error"
    />
    {
      reload && <Button onClick={reload}>刷新</Button>
    }
  </>
)

export default errorComponent
```

## 功能组件

功能组件由主体组件加载并控制展示，独立不耦合其他组件，可以单独使用并提供相应能力。可以非常简单，是一个小按钮，也可以非常复杂，甚至可以是一个路由页面。遵循独立运行原则，独立的开发测试，打包及发布。功能组件可以与主体组件通信，也可以跟其他组件通信

```tsx
import React, { FC } from 'react'
import { Button } from 'antd'
import { ComponentProps } from '@variousjs/various'
import store from './store'

type Store = typeof store

const H: FC<ComponentProps<Store>> = (props) => {
  const onSet = async () => {
    // 改变主体组件的全局数据
    await props.$dispatch('store', 'setName', 'various')
  }

  return (
    <div>
      <p>
        全局值:
        {props.$store.user.name}
      </p>
      <Button onClick={onSet}>更新全局</Button>
    </div>
  )
}

export default H
```

## 依赖组件

依赖组件即共享组件，提供一些公共的能力，让其他组件可以直接使用，避免重复引入造成浪费。例如 [antd](https://ant.design) 组件库。通常以下场景都可以作为依赖组件

- UI 组件库，例如 “antd” 组件库，提供基础 UI 组件
- 工具类，例如 “lodash”，“moment.js”，提供基础能力支持
- 根据项目情况封装的基础组件，例如基础网络请求，封装一定的验证配置请求库

Various 已经内置 `react`, `react-dom` 的依赖，可以直接使用。请注意如果使用了依赖组件，那么进行构建打包时候需要将依赖进行排除，以 webpack 为例子

```js
// 排除 antd 打包
// ...
externals: {
  antd: {
    root: 'antd',
    amd: 'antd',
  }
}
// ...
```
