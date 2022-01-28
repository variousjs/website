declare module '*.less' {
  const resource: Record<string, string>
  export = resource
}

declare module '*.md' {
  const resource: { content: string, toc: string }
  export = resource
}

declare module '*.svg' {
  import { ComponentType } from 'react'
  const resource: ComponentType<any>
  export = resource
}
