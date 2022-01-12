# 组件 API

VariousJS 环境下，功能组件，容器组件都有一些 API 可以直接使用

### $component

根据已经定义的组件名字生成可渲染的组件，用于灵活自定义页面结构及功能

```ts
import { ComponentType } from 'react'

type $component = (name: string) => ComponentType<{
  silent?: boolean,
  [key: string]: any,
}>
```

> 注意：此方法只有在容器组件提供

生成的组件可以传递参数，如果传入 `$slient` 参数，则表示改组件为静默组件，不显示默认的加载及出错提示

```tsx
import React, { Component, ComponentType } from 'react'
import { ContainerProps } from '@variousjs/various'

class Container extends Component<ContainerProps> {
  render() {
    const { $component } = this.props
    const A = $component('a')

    return (
      <A
        // 静默组件
        $slient
        value={1}
      />
    )
  }
}

export default Container
```

### $dispatch

此方法用于组件与全局通信，也可以组件间互相通信

```ts
// type 通信类型：store(全局) / 组件名字
// method 方法：调用全局或者其他组件提供的方法
// value 值：传递的参数
type $dispatch = (type: string, method: string, value?: any) => unknown
```

可以在功能组件及全局组件使用。通信需要对应组件或者全局提供调用方法

```tsx
import React, { FC } from 'react'
import { ComponentProps } from '@variousjs/various'

const A: FC<ComponentProps> = (props) => {
  const onB = () => {
    props.$dispatch('B', 'setName', 'b')
  }
  const onStore = async () => {
    const v = await props.$dispatch('store', 'getValue')
    console.log(v)
  }

  return (
    <div>
      <button onClick={onB}>与 B 组件通信</button>
      <button onClick={onStore}>与全局通信</button>
    </div>
  )
}
```

### $render

功能组件及容器组件都拥有动态加载组件能力，提供这个方法可以更加灵活自定义页面功能，并且动态加载的组件一样可以访问全局数据，也拥有通信能力

可以利用此功能，在正式环境进行在控制范围的组件测试

```ts
type $render = (params: {
  name: string,                   // 组件名字
  url?: string,                   // 组件 url（如果页面已经定义组件，则可以不提供此参数）
  module?: string,                // 渲染模块（如果组件提供了多个子模块）
  props?: { [key: string]: any }, // 传递参数
  target: Element | null,         // 渲染节点
  onMounted?: () => void,         // 加载完成回调
}) => () => void // 组件卸载方法
```

> 注意：动态加载进来的组件不存在此方法

```tsx
import React, { Component } from 'react'
import { ContainerProps } from '@variousjs/various'

class Container extends Component<ContainerProps> {
  componentDidMount() {
    if (!this.props.$render) {
      return
    }

    this.unMount = this.props.$render({
      name: 'switch',
      // 引用第三方组件
      url: 'https://unpkg.com/react-ios-switch@0.1.19/build/bundle.js',
      target: document.querySelector('#switch'),
      props: { checked: true },
      onMounted: () => {
        console.log('switch ready')
      },
    })
  }

  componentWillUnmount() {
    // 注意进行组件卸载
    if (this.unMount) {
      this.unMount()
    }
  }

  render() {
    return (
      <div id="switch" />
    )
  }
}
```

### $preload

此方法可以预先加载已经定义好的组件，只需要输入组件名字即可，并可以判断是否完成预加载。支持在功能组件及容器组件使用

```ts
type $preload = (names: string[]) => Promise<void>
```

> 注意：预加载的组件必须在页面配置中已经定义

```tsx
import React, { FC } from 'react'
import { ComponentProps } from '@variousjs/various'

const A: FC<ComponentProps> = (props) => {
  const onPre = () => {
    if (props.$preload) {
      await props.$preload(['b'])
      console.log('preload B done')
    }
  }

  return (
    <div>
      <button onClick={onPre}>预加载 B 组件</button>
    </div>
  )
}
```
