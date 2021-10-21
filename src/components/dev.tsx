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
const ins = `$ cd <dir>
$ npm init @variousjs
$ npm i

# 开发
$ npm start

# 构建
$ npm run build`
const fl = `├── LICENSE
├── README.md
├── demo
|  ├── dist             # 构建目录
│  └── index.html       # 模板
├── node_modules
├── package-lock.json
├── package.json
├── src
│  ├── components       # 组件
│  ├── declaration.d.ts
│  ├── entry            # 入口组件
│  └── types.ts
├── tsconfig.json
├── webpack.base.config.js
├── webpack.component.config.js
└── webpack.entry.config.js`
const st = `"start": "webpack --progress --config webpack.component.config.js & webpack serve --config webpack.entry.config.js --progress"`
const ex = `externals: {
  antd: {
    root: 'antd',
    amd: 'antd',
  },
  highlighter: {
    root: 'highlighter',
    amd: 'highlighter',
  },
}`

const H: FC = () => {
  return (
    <div className={csses.container}>
      <Typography>
        <Title level={2}>开发说明</Title>
        <Paragraph>VariousJS 需要需要提供 html 模板，容器组件应配置即可生成一个网站。但有以下的限制及配置说明</Paragraph>

        <Title level={3}>脚手架</Title>
        <Paragraph>由于 VariosuJS 的组件开发及打包跟普通开发有很多不一样的地方，这里提供脚手架，可以快速开始组件开发</Paragraph>
        <Paragraph>安装 VariousJS 非常方便简单</Paragraph>
        <Hl language="bash" code={ins} />
        <Paragraph>脚手架默认集成 TypeScript，ESlint。安装 “@variousjs/various” 用于 VariousJS 编写提示</Paragraph>
        <Hl language="bash" code={fl} />
        <Paragraph>由于多组件开发，webpack 配置会有多入口，开发时候命令会特殊处理，避免多入口导致 dev server 重复加载问题</Paragraph>
        <Hl language="json" code={st} />
        <Paragraph>如果定义了依赖组件，请注意需要 webpack externals 配置添加排除</Paragraph>
        <Hl language="javascript" code={ex} />

        <Divider />

        <Paragraph>如果使用自定义构建工具开发 VariousJS 组件，需要注意以下说明</Paragraph>

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
        <Paragraph>由于多个组件由 RequireJS 引入，这时候 webpack dev 模式的配置不能使用平常入口加载模式，需要入口特殊配置，不然可能导致失效或者重复加载热更新 js 等错误情况</Paragraph>

        <Title level={4}>浏览器 Polyfill</Title>
        <Paragraph>考虑到组件代码共享及减少重复代码加载，VariousJS 核心 js 已经将浏览器兼容 Polyfill 包含，所以组件构建适合需要注意不需要添加额外的 Polyfill 支持</Paragraph>
      </Typography>
    </div>
  )
}

export default H
