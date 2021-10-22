import React, { FC } from 'react'
import { Typography } from 'antd'
import Hl from 'highlighter'
import csses from './component.less'

const { Title, Paragraph } = Typography
const c = `onPreload = async () => {
  const { $preload } = this.props
  if ($preload) {
    await $preload(['mmmmmm'])
    console.log('preload mmmmmm')
  }
}`

const H: FC = () => {
  return (
    <div className={csses.container}>
      <Typography>
        <Title level={2}>预加载组件</Title>
        <Paragraph>提高组件体验，提供预先加载已经定义好的组件</Paragraph>
        <Paragraph>预加载方法只需要输入组件名字即可，并可以感知是否已经加载完成</Paragraph>
        <Hl code="type $preload = (names: string[]) => Promise<void>" language="ts" />
        <Paragraph>参考例子</Paragraph>
        <Hl code={c} language="ts" />
      </Typography>
    </div>
  )
}

export default H
