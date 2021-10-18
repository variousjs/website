import React, { FC } from 'react'
import { Typography, Divider } from 'antd'
import Hl from 'highlighter'
import csses from './component.less'

const { Title, Paragraph } = Typography

const wp = `// webpack 打包参考
module.exports = {
  // ...,
  output: {
    // ...,
    libraryTarget: 'amd', // 指定 amd 格式
    // ...,
  },
  // ...,
}`

const H: FC = () => {
  return (
    <div className={csses.container}>
      <Typography>
        <Title level={2}>开发说明</Title>
        <Paragraph>VariousJS 需要需要提供 html 模板，容器组件应配置即可生成一个网站。但有以下的限制及配置说明</Paragraph>

        <Title level={4}>组件限制</Title>
        <Paragraph>组件必须为 AMD 模式的 React 组件。只要符合要求的组件都可以加载，甚至可以是第三方组件</Paragraph>

        <Title level={4}>内置依赖</Title>
        <Paragraph>VariousJS 内置一些底层依赖，其他组件开发可以直接使用</Paragraph>
        <ul>
          <li>React</li>
          <li>React-DOM</li>
          <li>React-Router-DOM</li>
          <li>nycticorax: <a rel="noreferrer" target="_blank" href="https://github.com/fratercula/nycticorax">https://github.com/fratercula/nycticorax</a></li>
        </ul>

        <Title level={4}>组件打包</Title>
        <Paragraph>组件需要打包成 AMD 格式（UMD 也可以），但是不能指定 library name，如果指定了可能会造成找不到组件错误</Paragraph>
        <Hl language="javascript" code={wp} />

        <Title level={4}>组件开发</Title>
        <Paragraph>由于组件都是 RequireJS 引入，这时候 webpack dev 模式的配置不能使用平常入口加载模式，需要一定的配置，不然可能导致失效或者重复加载热更新 js 等错误情况</Paragraph>
      </Typography>
    </div>
  )
}

export default H
