import React, { FC } from 'react'
import { Typography } from 'antd'
import Hl from 'highlighter'
import csses from './component.less'

const { Title, Paragraph } = Typography
const t = `type $component = (name: string) => ComponentType<{
  silent?: boolean,
  [key: string]: any,
}>`
const s = `const C = $component(name)
return (
  <div key={name}>
    <C silent ps={flase} />
  </div>
)`

const H: FC = () => {
  return (
    <div className={csses.container}>
      <Typography>
        <Title level={2}>组件生成</Title>
        <Paragraph>该方法只在容器组件提供，根据已经定义的组件名字生成可渲染的组件。用于灵活自定义页面结构及功能</Paragraph>
        <Hl language="ts" code={t} />
        <Paragraph>生成的组件可以传递参数，如果传入 “silent” 参数，则表示改组件为静默组件，不显示默认的加载及出错提示。参考例子</Paragraph>
        <Hl code={s} language="tsx" />
      </Typography>
    </div>
  )
}

export default H
