import React, { FC } from 'react'
import { Typography, Divider } from 'antd'
import Hl from 'highlighter'
import csses from './component.less'
import Md from '../helper/markdown'
import md from './test.md'

const { Title, Paragraph } = Typography
const html = `<!doctype html>
<html>
<head>
<meta charset="UTF-8" />
<title> VariousJS </title>
</head>
<body>
<div id="root"></div>
<script src="https://cdn.jsdelivr.net/npm/requirejs@2.3.6/require.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@variousjs/various/dist/index.js"></script>
<script>
var config = {
  root: '#root',
  entry: './dist/entry.js',
  routerMode: 'hash',
  dependencies: {
    // 依赖定义
    moment: 'https://cdn.jsdelivr.net/npm/moment@2.29.1/min/moment.min.js',
    antd: 'https://cdn.jsdelivr.net/npm/antd@4.16.13/dist/antd-with-locales.min.js',
  },
  components: {
    // 组件定义
    introduction: './dist/introduction.js',
  },

  // 以下属于自定义属性
  nav: [
    {
      name: '简介',
      path: '/',
    },
    {
      name: '基础说明',
      children: [
        {
          name: '# Getting started',
          path: '/doc',
        },
        {
          name: '# Authorization',
          path: '/doc1',
        },
      ],
    },
    {
      name: 'API 说明',
      children: [
        {
          name: '# Integration',
          path: '/api',
        },
      ],
    },
  ],

  pages: [
    {
      path: ['/'],
      components: ['introduction'],
    },
  ],
}

var various = new window.Various(config)

various.onError = function(e) {
  console.log(e)
  document.write(e.message)
}

// 初始化
various.start()
</script>

</body>
</html>`

const tf = `interface Config {
  dependencies?: { [key: string]: string }, // 依赖组件定义
  components: { [key: string]: string }, // 功能组件定义
  entry?: string, // 容器组件定义
  routerMode?: 'browser' | 'hash', // react-router 路由模式
  root?: string, // 应用渲染页面节点
}`

const H: FC = () => {
  return (
    <div className={csses.container}>
      <Md>{md}</Md>
      {/* <div dangerouslySetInnerHTML={{ __html: md }} /> */}
      <Typography>
        <Title level={2}>基础概念</Title>
        <Paragraph>在 VariousJS 体系下，一切功能，依赖，页面都可以认为是一个组件，虽然底层构建模式都是一直的 AMD 模式，但有一定的区别</Paragraph>

        <Title level={3}>组件说明</Title>
        <Paragraph>组件类型可以大概分为三类，对应提供不同的能力</Paragraph>
        <Title level={5}>容器组件</Title>
        <Paragraph>容器组件是全局页面定义组件，包括页面路由定义，如何放置组件定义等。另外定义提供全局数据访问。可以根据配置生成各种自定义页面。此容器组件为必须提供</Paragraph>
        <Title level={5}>依赖组件</Title>
        <Paragraph>依赖组件即公共（共享）组件，例如 ‘antd’ 基础 UI 组件库，高亮代码组件等。引入依赖组件减少重复加载的浪费。VariousJS 已经内置 ‘React’，‘ReactDOM’，‘ReactRouterDOM’ 等基础依赖，其他组件可以直接使用</Paragraph>
        <Title level={5}>功能组件</Title>
        <Paragraph>功能组件是一个独立的组件，不耦合其他组件，可以单独运行。可以非常简单，可以是一个小按钮，也可以非常复杂，甚至可以是一个页面。这些功能组件可以被配置由容器组件进行路由分配放置到对应位置提供功能</Paragraph>

        <Divider />

        <Title level={3}>页面结构</Title>
        <Paragraph>因为 VariousJS 基于 RequireJS，所以其核心并不参与应用打包，只需要页面 script 引入即可。并提供一些参数配置</Paragraph>
        <Hl code={html} language="html" />

        <Divider />

        <Title level={3}>参数配置</Title>
        <Paragraph>容器组件可以读取自定义配置参数，另外需要定义组件配置，以下为内置参数配置说明</Paragraph>
        <Hl code={tf} language="typescript" />
      </Typography>
    </div>
  )
}

export default H
