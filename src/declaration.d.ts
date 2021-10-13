// 这里直接配置 antd 依赖库，因为 antd 是 amd 依赖进来并不参与打包
// 不过也可以直接安装 antd 依赖，但只是用了 typescript 提示
declare module 'antd' {
  import { ComponentType, Component } from 'react'

  export const Spin: ComponentType<any>
  export const Divider: ComponentType<any>
  export const Skeleton: ComponentType<any>
  export const Badge: ComponentType<any>
  export const Alert: ComponentType<any>
  export const Button: ComponentType<any>
  export class Radio extends Component<any> {
    static Group: ComponentType<any>
    static Button: ComponentType<any>
  }
  export class Card extends Component<any> {
    static Meta: ComponentType<any>
  }

  export class Menu extends Component<any> {
    static SubMenu: ComponentType<any>
    static Item: ComponentType<any>
  }

  export class Descriptions extends Component<any> {
    static Item: ComponentType<any>
  }

  export class Typography extends Component<any> {
    static Title: ComponentType<any>
    static Paragraph: ComponentType<any>
    static Text: ComponentType<any>
    static Link: ComponentType<any>
  }

  export const message: {
    info: (i: string) => void
  }
}

declare module '*.less' {
  const resource: Record<string, string>
  export = resource
}
