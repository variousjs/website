declare module '*.less' {
  const resource: Record<string, string>
  export = resource
}

declare module '*.md' {
  const resource: string
  export = resource
}
