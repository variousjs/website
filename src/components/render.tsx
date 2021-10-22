import React, { FC } from 'react'
import { Typography, Alert } from 'antd'
import Hl from 'highlighter'
import csses from './component.less'

const { Title, Paragraph } = Typography
const re = `type $render = (params: {
  name: string,                   // 组件名字
  url?: string,                   // 组件 url（如果页面已经定义组件，则可以不提供此参数）
  module?: string,                // 渲染模块（如果组件提供了多个子模块）
  props?: { [key: string]: any }, // 传递参数
  target: Element | null,         // 渲染节点
  onMounted?: () => void,         // 加载完成回调
}) => () => void // 组件卸载方法`
const ex = `this.unMount = $render({
  name: 'switch',
  // 引用第三方组件
  url: 'https://unpkg.com/react-ios-switch@0.1.19/build/bundle.js',
  target: document.querySelector('#y'),
  props: { checked: true },
  onMounted: () => {
    console.log('ready')
  },
})`
const ret = `componentWillUnmount() {
  if (this.unMount) {
    this.unMount()
  }
}`

const H: FC = () => {
  return (
    <div className={csses.container}>
      <Typography>
        <Title level={2}>动态加载</Title>
        <Paragraph>容器组件及功能组件都拥有动态加载组件能力，提供这个方法可以更加灵活自定义页面功能，并且动态加载的组件一样可以访问全局数据，也拥有组件通信能力</Paragraph>
        <Alert message="动态加载的组件没有这个方法" type="warning" />
        <Hl code={re} language="ts" />
        <Paragraph>参考例子</Paragraph>
        <Hl language="tsx" code={ex} />
        <Alert message="请注意动态加载组件后，一定要在当前组件卸载时候调用加载返回的卸载方法" type="warning" />
        <Hl language="tsx" code={ret} />
      </Typography>
    </div>
  )
}

export default H
