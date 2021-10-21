import React, { FC } from 'react'
import { Typography, Alert } from 'antd'
import Hl from 'highlighter'
import csses from './component.less'

const { Title, Paragraph } = Typography

const H: FC = () => {
  return (
    <div className={csses.container}>
      <Typography>
        <Title level={2}>组件属性</Title>
        <Paragraph>容器组件及功能组件都能获取某些属性字段，例如全局数据，页面路由等</Paragraph>

        <Title level={4}>$mounted</Title>
        <Paragraph>此属性可以直接获取当前页面已经加载完成的组件。使用场景在组件依赖场景，判断另外一个组件是否完成加载</Paragraph>
        <Hl language="ts" code="$mounted: string[]" />

        <Title level={4}>$config</Title>
        <Paragraph>此属性为用户自定义配置属性</Paragraph>

        <Title level={4}>$store</Title>
        <Paragraph>此属性为全局数据</Paragraph>

        <Title level={4}>$router</Title>
        <Paragraph>此属性为页面路由参数，即 react-router 路由参数</Paragraph>
        <Alert message="动态加载的组件没有这个参数" type="warning" />
        <Alert style={{ marginTop: 10 }} message="容器组件的路由参数 match.params 属性为空" type="warning" />
        <Hl language="ts" code="$router?: RouteComponentProps<{ [key: string]: string }>" />

        <Title level={4}>Router</Title>
        <Paragraph>此属性为页面路由包裹组件，页面路由定义必须作为子组件。只有在容器组件提供</Paragraph>
        <Hl language="ts" code="ComponentType<{ children?: ReactNode }>" />
      </Typography>
    </div>
  )
}

export default H
