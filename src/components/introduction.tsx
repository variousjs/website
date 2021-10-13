import React, { FC } from 'react'
import { Typography, Divider } from 'antd'
import csses from './component.less'

const H: FC = () => (
  <div className={csses.container}>
    <Typography>
      <Typography.Title level={2}>VariousJS 简介</Typography.Title>
      <Typography.Paragraph>VariousJS 是一个基于 RequireJS + React 的一个运行框架。提供灵活的组件加载及通信能力，提高多组件合作及复用效率的一种方案。</Typography.Paragraph>
      <Typography.Paragraph>需要特别说明的是，VariousJS 并不是微前端框架。它并不是为了解决多业务多系统项目合并在一起的问题。</Typography.Paragraph>

      <Typography.Title level={3}>设计理念</Typography.Title>
      <Typography.Paragraph>VariousJS 是提供一种解决组件开发/加载/复用麻烦的问题解决方案</Typography.Paragraph>
      <Typography.Title level={5}>一切皆为组件</Typography.Title>
      <Typography.Paragraph>在 VariousJS 体系下，任何页面/功能/小部件都可以认为是一个组件</Typography.Paragraph>
      <Typography.Title level={5}>独立解耦</Typography.Title>
      <Typography.Paragraph>组件代码独立，独立开发，互不干扰。不推崇 monorepo 方式管理代码，避免项目越大越复杂</Typography.Paragraph>

      <Divider />

      <Typography.Title level={3}>特性</Typography.Title>
      <Typography.Paragraph>VariousJS 提供一个动态加载组件环境，并提供方便的通信机制。可以类比为微信及微信小程序关系，提供的环境类比微信主体，组件则可以类比成小程序</Typography.Paragraph>
      <Typography.Title level={5}>独立</Typography.Title>
      <Typography.Paragraph>组件可以类比小程序，开发/测试/部署都是完全独立的</Typography.Paragraph>
      <Typography.Title level={5}>按需加载</Typography.Title>
      <Typography.Paragraph>基于 RequireJS，天然支持组件按需加载，只有当前页面用到的组件才会加载，并且已加载组件不会重复加载</Typography.Paragraph>
      <Typography.Title level={5}>动态加载</Typography.Title>
      <Typography.Paragraph>允许动态加载组件，甚至可以加载第三方 React 组件。类比小程序的使用，只需要指定组件 js URL 地址即可加载进来</Typography.Paragraph>
      <Typography.Title level={5}>预加载</Typography.Title>
      <Typography.Paragraph>可以预先加载组件资源，提升用户体验</Typography.Paragraph>
      <Typography.Title level={5}>通信</Typography.Title>
      <Typography.Paragraph>强大的通信机制，允许组件与全局间互相通信，同时也支持组件间互相通信</Typography.Paragraph>
      <Typography.Title level={5}>组件共享</Typography.Title>
      <Typography.Paragraph>基于 RequireJS 模块共享机制，组件都可以共享使用</Typography.Paragraph>
      <Typography.Title level={5}>容错机制</Typography.Title>
      <Typography.Paragraph>组件间各自独立，都有独立的错误判断机制及重试机制，组件的错误并不会影响其他。类比小程序出错并不会影响微信主体。这一点保证线上发布的安全稳定性</Typography.Paragraph>
      <Typography.Title level={5}>快速接入</Typography.Title>
      <Typography.Paragraph>在 VariousJS 环境下，组件的接入是非常方便的，只需要指定组件配置即可，不需要重新构建。另外发布/回滚切换版本号也是直接修改配置即可。基于此特性，组件还可以对用户进行版本灰度控制。保证线上发布安全</Typography.Paragraph>
      <Typography.Paragraph>另外基于这个快速接入不需要重新构建特性，其他基于 VariousJS 系统也非常方便接入组件，组件升级等操作</Typography.Paragraph>

      <Divider />

      <Typography.Title level={3}>技术栈限制</Typography.Title>
      <Typography.Paragraph>由于 VariousJS 基于 RequireJS + React，所以对应的有以下限制</Typography.Paragraph>
      <Typography.Paragraph>
        <ul>
          <li>所有组件必须为 React 组件</li>
          <li>所有组件必须构建打包成 AMD（UMD）格式</li>
        </ul>
      </Typography.Paragraph>
    </Typography>
  </div>
)

export default H
