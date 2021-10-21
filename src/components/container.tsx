import React, { FC } from 'react'
import { Typography, Divider, Alert, Table } from 'antd'
import Hl from 'highlighter'
import csses from './component.less'

const { Title, Paragraph, Link } = Typography
const et = `// 分别是 全局数据/全局数据操作/页面定义组件/加载提示组件/错误提示组件
export { default as store } from './store'
export { default as actions } from './actions'
export { default as Container } from './container'
export { default as Loader } from './loader'
export { default as Error } from './error'`
const st = `// store.ts
export default {
  user: {
    name: 'various',
  },
}`
const ac = `// actions.ts
import { Actions } from '@variousjs/various'
import store from './store'

type Store = typeof store

const actions: Actions<Store> = {
  async setName({ dispatch, getStore }, value) {
    await new Promise((r) => setTimeout(r, 1000))
    const { user } = getStore()
    user.name = value
    dispatch({ user })
  },
}

export default actions`
const ct = `import { RouteComponentProps } from 'react-router-dom'
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

export interface ContainerProps<S = {}, C = {}> {
  Router: ComponentType<{ children?: ReactNode }>,          // 路由组件
  $config: Readonly<C>,                                     // 自定义配置
  // 根据组件配置的名字生成 React 组件
  $component: (name: string) => ComponentType<{
    silent?: boolean,
    [key: string]: any,
  }>,
  $store: Readonly<S>,                                      // 全局数据
  $mounted: string[],                                       // 页面当前加载的组件
  $dispatch: $dispatch,                                     // 组件/全局通信方法
  $render: $render,                                         // 动态加载组件方法
  $preload: $preload,                                       // 组件预加载方法
  $router: RouteComponentProps<{ [key: string]: string }>,  // 当前页面路由参数
}`
const ctx = `import React, { Component, ComponentType } from 'react'
import { Route, Link } from 'react-router-dom'
import { ContainerProps } from '@variousjs/various'
import store from './store'

type Store = typeof store
type Config = {
  pages: {
    path: string[] | string,
    components: string[],
  }[],
}

class Container extends Component<ContainerProps<Store, Config>> {
  render() {
    const { Router, $component, $config, $router } = this.props

    return (
      <Router>
        {
          $config.pages.map(({ path, components }) => {
            const cs = () => components.map((name) => {
              const C = $component(name)
              return (
                <div key={name}>
                  <C />
                </div>
              )
            })

            return (
              <Route
                key={Array.isArray(path) ? path.join() : path}
                exact
                path={path}
                component={cs as unknown as ComponentType}
              />
            )
          })
        }
      </Router>
    )
  }
}

export default Container`
const es = `export interface ErrorProps {
  reload?: () => void,
  type: 'LOADING_ERROR' | 'DEPENDENCIES_LOADING_ERROR' | 'NOT_DEFINED' | 'INVALID_COMPONENT' | 'SCRIPT_ERROR' | 'ROUTER_ERROR' | 'CONTAINER_ERROR',
  message?: string,
}`
const col = [
  {
    title: '类型',
    dataIndex: 'type',
  },
  {
    title: '描述',
    dataIndex: 'desc',
  },
  {
    title: '是否可以重新加载',
    dataIndex: 'reloadable',
  },
]
const data = [
  { type: 'LOADING_ERROR', desc: '组件加载失败', reloadable: 'yes' },
  { type: 'DEPENDENCIES_LOADING_ERROR', desc: '组件依赖加载失败', reloadable: 'yes' },
  { type: 'NOT_DEFINED', desc: '组件未定义', reloadable: 'no' },
  { type: 'INVALID_COMPONENT', desc: '错误的组件类型', reloadable: 'no' },
  { type: 'SCRIPT_ERROR', desc: '组件运行出错了', reloadable: 'yes' },
  { type: 'ROUTER_ERROR', desc: '页面路由出错', reloadable: 'no' },
  { type: 'CONTAINER_ERROR', desc: '容器组件出错了', reloadable: 'no' },
]
const er = `import React, { FC } from 'react'
import { Alert, Button } from 'antd'
import { ErrorProps } from '@variousjs/various'

const errorComponent: FC<ErrorProps> = ({ reload, type, message }) => (
  <>
    <Alert
      message="Error"
      description={message || '组件错误'}
      type="error"
    />
    {
      reload && <Button onClick={reload}>刷新</Button>
    }
  </>
)

export default errorComponent`
const ld = `import React from 'react'
import { Skeleton } from 'antd'

export default function Loader() {
  return (
    <div style={{ padding: '32px 48px 60px' }}>
      <Skeleton active />
    </div>
  )
}`
const cst = `// ...
const C = $component(name)
return (
  <div key={name}>
    <C slient />
  </div>
)
// ...`

const H: FC = () => {
  return (
    <div className={csses.container}>
      <Typography>
        <Title level={2}>容器组件</Title>
        <Paragraph>容器组件用于定义页面结构，全局数据，控制组件加载。可以根据自定义配置生成各种类型页面</Paragraph>
        <Paragraph>容器组件需要导出以下模块</Paragraph>
        <Hl language="ts" code={et} />

        <Title level={4}>全局数据</Title>
        <Paragraph>全局数据可以被所有组件访问，通常用于存储需要被全局访问数据，例如用户验证信息</Paragraph>
        <Hl language="ts" code={st} />

        <Divider />

        <Title level={4}>数据操作</Title>
        <Paragraph>定义访问全局数据方法（数据处理），同时提供改变全局数据方法。数据操作基于 <Link target="_blank" href="https://github.com/fratercula/nycticorax">nycticorax</Link></Paragraph>
        <Hl code={ac} language="ts" />

        <Divider />

        <Title level={4}>页面定义</Title>
        <Paragraph>页面定义组件用于根据自定义配置生成页面结构，页面路由相关。其方法定义如下</Paragraph>
        <Hl language="ts" code={ct} />
        <Paragraph>页面自定义例子，根据 pages 配置生成路由配置</Paragraph>
        <Alert message="请注意定义页面路由时候一定要用 VariousJS 提供的 Router 组件包裹，不然会引起问题。其他 Route/Link 之类组件可以使用 “React-Router” 提供的" type="warning" />
        <Hl language="tsx" code={ctx} />

        <Divider />

        <Title level={4}>错误提示</Title>
        <Paragraph>错误提示针对组件加载/运行期间的错误友好提示，并提供重新加载方法</Paragraph>
        <Hl language="ts" code={es} />
        <Paragraph>参考例子</Paragraph>
        <Hl language="tsx" code={er} />
        <Paragraph>错误类型定义</Paragraph>
        <Table bordered size="small" dataSource={data} columns={col} pagination={false} />

        <Divider />

        <Title level={4}>加载提示</Title>
        <Paragraph>组件都是动态按需加载，需要一个友好的加载提示。参考例子</Paragraph>
        <Hl language="tsx" code={ld} />
        <Paragraph>运行组件使用自定义加载，只需要在定义生成的组件配置 slient 参数即可，这时候组件的加载及出错都不会有提示，需要组件自行处理</Paragraph>
        <Hl code={cst} language="tsx" />
      </Typography>
    </div>
  )
}

export default H
