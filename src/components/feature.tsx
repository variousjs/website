import React, { FC } from 'react'
import { Typography } from 'antd'
import Hl from 'highlighter'
import csses from './component.less'

const { Title, Paragraph } = Typography
const p = `import { RouteComponentProps } from 'react-router-dom'
import { ComponentType, ReactNode } from 'react'

type $dispatch = (type: string, method: string, value?: any) => unknown
type $render = (params: {
  name: string,
  url?: string,
  module?: string,
  props?: { [key: string]: any },
  target: Element | null,
  onMounted?: () => void,
}) => () => void
type $preload = (names: string[]) => Promise<void>

// 泛型，S 为全局数据类型定义，C 为自定义属性
export interface ComponentProps<S = {}, C = {}> {
  $config: Readonly<C>,                                     // 自定义配置
  $mounted: string[],                                       // 当前页面已加载组件
  $router?: RouteComponentProps<{ [key: string]: string }>, // 页面路由参数（动态组件无此属性）
  $store: Readonly<S>,                                      // 全局数据
  $dispatch: $dispatch,                                     // 组件/全局通信方法
  $render?: $render,                                        // 动态加载组件方法（动态组件无此方法）
  $preload?: $preload,                                      // 组件预加载方法（动态组件无此方法）
}`
const ex = `import React, { FC, useCallback } from 'react'
import { Button } from 'antd'
import { ComponentProps } from '@variousjs/various'
import store from './store'

type Store = typeof store

const H: FC<ComponentProps<Store>> = (props) => {
  const onSet = useCallback(async () => {
    await props.$dispatch('store', 'updateUserName', 'various')
  }, [props])

  return (
    <div>
      <p>
        全局值:
        {props.$store.user.name}
      </p>
      <p>
        mounted:
        {props.$mounted.join(', ')}
      </p>
      <Button onClick={onSet}>更新全局</Button>
    </div>
  )
}

export default H`

const H: FC = () => {
  return (
    <div className={csses.container}>
      <Typography>
        <Title level={2}>功能组件</Title>
        <Paragraph>功能组件可以是一个小按钮，也可以是一个页面，独立功能不耦合其他组件，但可以跟全局或者其他组件通信产生联系，由主容器组件加载及控制展示</Paragraph>
      </Typography>
      <Hl language="ts" code={p} />
      <Paragraph>参考例子</Paragraph>
      <Hl code={ex} language="tsx" />
    </div>
  )
}

export default H
