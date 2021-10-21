import React, { FC } from 'react'
import { Typography, Divider } from 'antd'
import Hl from 'highlighter'
import csses from './component.less'

const { Title, Paragraph } = Typography
const wp = `// 排除 antd 打包
externals: {
  antd: {
    root: 'antd',
    amd: 'antd',
  }
}`
const hl = `<!-- 引入 antd 样式 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/antd@4.16.13/dist/antd.min.css" />
<script>
var config = {
  // ...,
  dependencies: {
    // antd 依赖 moment
    moment: 'https://cdn.jsdelivr.net/npm/moment@2.29.1/min/moment.min.js',
    antd: 'https://cdn.jsdelivr.net/npm/antd@4.16.13/dist/antd-with-locales.min.js',

    // ...,
  },
  // ...,
}
</script>`
const antd = `import { Button } from 'antd'

export default () => (
  <Button>Button</Button>
)`
const ts = `// react 提供了 @types/react，可以直接安装 typescript 提示
// 但是 antd 没有提供（以前版本提供了 @types/antd，但后面没有维护了）
// 这里自定义 declaration.d.ts 文件
declare module 'antd' {
  import { ComponentType } from 'react'

  export const Button: ComponentType<any>
}`

const H: FC = () => {
  return (
    <div className={csses.container}>
      <Typography>
        <Title level={2}>依赖组件</Title>
        <Paragraph>依赖组件通常是多组件共用的组件，为了避免代码重复打包，减少加载而公共出来的组件。通常可以是以下类型</Paragraph>
        <ul>
          <li>UI 组件库，例如 “antd” 组件库，提供基础 UI 组件</li>
          <li>工具类，例如 “lodash”，“moment.js”，提供基础能力支持</li>
          <li>根据项目情况封装的基础组件，例如基础网络请求，封装一定的验证配置请求库</li>
        </ul>

        <Divider />

        <Paragraph>以下为集成 “antd” 依赖组件例子</Paragraph>
        <Title level={5}>webpack 配置</Title>
        <Paragraph>webpack 需要配置 externals，避免重复打包浪费</Paragraph>
        <Hl code={wp} language="javascript" />
        <Title level={5}>模板配置</Title>
        <Paragraph>模板配置即 VariousJS 配置，加载 “antd” 进来，供其他组件使用</Paragraph>
        <Hl language="html" code={hl} />
        <Title level={5}>组件使用</Title>
        <Paragraph>经过以上处理，其他组件可以直接使用 “antd” 了</Paragraph>
        <Hl language="jsx" code={antd} />
        <Title level={5}>TypeScript 提示</Title>
        <Paragraph>由于并没有安装 “antd” 而直接使用，这时候 TypeScript 会提示不存在模块，解决方式可以是直接安装 “antd”。或者自定义 types</Paragraph>
        <Hl language="typescript" code={ts} />
      </Typography>
    </div>
  )
}

export default H
