# 组件属性

组件能够直接获取一些属性，例如配置参数，全局数据等

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

获取全局状态数据，只可以在功能组件使用

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
