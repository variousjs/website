declare module '*.less' {
  const resource: Record<string, string>
  export = resource
}

declare module '*.md' {
  const resource: string
  export = resource
}

declare module '*.svg' {
  import { ComponentType } from 'react'
  const resource: ComponentType<any>
  export = resource
}
