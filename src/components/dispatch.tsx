import React, { FC } from 'react'
import { Typography, Divider } from 'antd'
import Hl from 'highlighter'
import csses from './component.less'

const { Title, Paragraph } = Typography
const ty = `// type 通信类型：store(全局) / 组件名字
// method 方法：调用全局或者其他组件提供的方法
// value 值：传递的参数
type $dispatch = (type: string, method: string, value?: any) => unknown`
const gl = `// S 为全局数据类型
type Nycticorax<S> = {
  getStore: () => S,
  dispatch: (next: Partial<S>) => void,
}

type Actions<S = {}> = {
  [name: string]: (nycticorax: Nycticorax<S>, ...args: any[]) => unknown,
}

const actions: Actions<Store> = {
  // 提供 setName 方法
  async setName({ dispatch, getStore }, value) {
    await new Promise((r) => setTimeout(r, 1000))
    const { user } = getStore()
    user.name = value
    dispatch({ user })
  },
}

export default actions`
const ff = `import React, { FC, Component } from 'react'
import { ComponentProps } from '@variousjs/various'
import { Store } from '../types'

const H: FC<ComponentProps<Store>> & { [key: string]: any } = (props) => {
  return (
    <p>
      mounted:
      {props.$mounted.join(', ')}
    </p>
  )
}
// FC 组件可以直接添加属性方法
H.getName = () => 'name'

class C extends Component<ComponentProps<Store>> {
  // Class 组件可以通过 static 方法提供
  static getName = () => 'name'

  render() {
    return (<div />)
  }
}

export C
export H`

const H: FC = () => {
  return (
    <div className={csses.container}>
      <Typography>
        <Title level={2}>组件通信</Title>
        <Paragraph>此方法用于组件与全局通信，也可以组件间通信</Paragraph>
        <Hl code={ty} language="ts" />

        <Title level={4}>调用方法提供</Title>
        <Paragraph>通信需要对应组件或者全局提供调用方法</Paragraph>
        <Paragraph>全局方法由容器组件的 actions 提供</Paragraph>
        <Hl code={gl} language="ts" />
        <Paragraph>由以上提供全局方法，那么其他组件可以这样调用</Paragraph>
        <Hl language="ts" code="await this.props.$dispatch('store', 'setName', 'various')" />

        <Divider />

        <Paragraph>功能组件调用方法提供方式根据组件类型有一定区分</Paragraph>
        <Paragraph>为了保证组件的数据安全，调用方法都不能直接访问组件实例数据</Paragraph>
        <Hl code={ff} language="tsx" />
        <Paragraph>以上两种方式都提供了 “getName” 方法调用</Paragraph>
        <Hl language="ts" code="const name = this.props.$dispatch('c', 'getName')" />
      </Typography>
    </div>
  )
}

export default H
