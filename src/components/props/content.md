# 属性

组件能够直接获取一些属性，例如路由参数，全局数据等

### $mounted

获取当前已加载的组件列表，可以用于判断通信组件是否已经加载完成

```ts
type $mounted = string[]
```

可以在功能组件，容器组件中使用

```tsx
import React, { Component, FC } from 'react'
import { ComponentProps, ContainerProps } from '@variousjs/various'

// 功能组件 A
const A: FC<ComponentProps> = (props) => {
  const { $mounted } = props
  return (
    <div>
      当前已加载组件: {$mounted.join(', ')}
    </div>
  )
}

// 主体组件：容器组件
class Container extends Component<ContainerProps> {
  render() {
    const { $mounted } = this.props

    return (
      <div>
        A 组件加载完成：{$mounted.includes('a') ? 'yes' : 'no'}
      </div>
    )
  }
}
```

### $config

获取应用自定义属性，可以在功能组件及容器组件使用。通常用于获取路由参数定义

```tsx
import React, { Component } from 'react'
import { ContainerProps } from '@variousjs/various'

type Config = {
  menu: {
    label: string,
    icon: string,
    path: string,
  }[],
  routes: {
    path: string[] | string,
    components: string[][],
  }[],
}

class Container extends Component<ContainerProps<{}, Config>> {
  render() {
    const { menu, routes } = this.props.$config

    return (
      <div>...</div>
    )
  }
}
```

### $store

获取全局状态数据，可以在功能组件及容器组件使用

```tsx
import React, { FC } from 'react'
import { ComponentProps } from '@variousjs/various'

const store = { globalNum: 9 }

type Store = typeof store

// 功能组件 A
const A: FC<ComponentProps<Store>> = (props) => {
  const { globalNum } = props.$store

  return (
    <div>...</div>
  )
}
```

### $router

获取当前路由参数，由 react-router 提供，可以在功能组件，容器组件使用

```ts
import { RouteComponentProps } from 'react-router-dom'

type $router = RouteComponentProps<{ [key: string]: string }>
```

> 注意：容器组件不能获取当前路由 `match` 相关参数。但能获取 location，history 等参数

```tsx
import React, { FC } from 'react'
import { ComponentProps } from '@variousjs/various'

const A: FC<ComponentProps> = (props) => {
  const { $router } = props

  console.log($router)
  /*
  {
    history,
    location,
    match,
    ...
  }
  */

  return (
    <div>...</div>
  )
}
```
