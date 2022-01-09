# FAQ

以下是使用 VariousJS 可能遇到的问题

### 使用的第三方插件或者组件没有提供 AMD 导出？

可以引入插件自行导出 AMD 格式，例如 [react-syntax-highlighter](https://unpkg.com/browse/react-syntax-highlighter@15.4.5/dist/) 只有 `commonjs`，及 `es modules` 导出，但可以这样导出 AMD 格式

```tsx
import React, { FC } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/dist/esm/styles/prism'

type P = {
  code: string,
  language: string,
}

const H: FC<P> = (props) => {
  const { code, language } = props
  return (
    <SyntaxHighlighter language={language} style={base16AteliersulphurpoolLight}>
      {code}
    </SyntaxHighlighter>
  )
}

export default H
```

### 如何设置 `antd` 依赖的 `moment` 为中文？

可以参考以下对 `moment` 的依赖引入进行一些修改

1. 修改中文语言的 `moment` 核心引入方式，原 [zh-cn](https://unpkg.com/browse/moment@2.29.1/locale/zh-cn.js) 语言包引入 `moment` 是相对路径方式 `../moment`，需要改成 `moment`，因为 VariousJS 环境下，直接引入 `moment` 了。修改后参考 https://github.com/variousjs/various/blob/master/docs/zh-cn.js

2. 在 VariousJS 配置中 `dependencies` 添加刚刚修改后的中文语言包

```js
var VARIOUS_CONFIG = {
  // ...
  dependencies: {
    moment: 'https://cdn.jsdelivr.net/npm/moment@2.29.1/min/moment.min.js',
    moment_zhCN: './zh-cn.js',
    // ...
  },
  // ...
```

3. 接下来，需要对 `moment` 进行中文语言初始化，在主体组件进行初始化

```ts
import moment from 'moment'
import 'moment_zhCN'

moment.locale('zh-cn')

export { default as actions } from './dispatcher'
export { default as store } from './store'
export { default as Container } from './container'
export { default as Loader } from './loading'
export { default as Error } from './error'
```

### 依赖的插件没有 ts 类型提示？

因为插件/组件的使用都是 `cdn` 链接引入，并没有本地安装，所以不能 ts 类型提示，解决办法就是安装对应插件依赖。除了这个方式，还可以自行定义 ts 类型

```ts
// declaration.d.ts

declare module 'antd' {
  import { ComponentType, Component } from 'react'

  export const Button: ComponentType<any>
  export class Collapse extends Component<any> {
    static Panel: ComponentType<any>
  }
  export const locales: { [key: string]: any }
}
```