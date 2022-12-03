# API

VariousJS 的 API 及 TS 类型都由 `@variousjs/various` 包提供

<!-- toc -->

## 全局 API

### createComponent

根据组件名字创建一个新的 React 组件，该组件名字必须在页面配置 `components` 已经定义

```ts
const createComponent = (name: string) => React.ComponentType<{
  $silent?: boolean, // 安静模式，不使用全局加载组件及出错组件
  [key: string]: any,
}>
```

示例

```ts
import React, { useMemo } from 'react'
import { createComponent } from '@variousjs/various'

export default () => {
  const T = useMemo(() => createComponent('component-t'), [])

  return (
    <T />
  )
}
```

### 自定义参数

自定义参数可以被组件获取到，通常用于定义页面结构，路由相关。通过自定义配置可以生成各种页面结构

通常为了以后页面扩展，会配置页面布局模板参数，根据参数进行页面/组件排布控制

```html
<!doctype html>
<html>
<head>
<meta charset="UTF-8" />
<title> VariousJS </title>
<script>
var VARIOUS_CONFIG = {
  root: '#root',
  entry: './dist/entry.js',
  dependencies: {
    // 依赖定义
    moment: 'https://cdn.jsdelivr.net/npm/moment@2.29.1/min/moment.min.js',
    antd: 'https://cdn.jsdelivr.net/npm/antd@4.16.13/dist/antd-with-locales.min.js',
  },
  components: {
    // 组件定义
    introduction: './dist/introduction.js',
  },

  // 以下属于自定义属性
  nav: [
    {
      name: '简介',
      path: '/',
    },
    {
      name: '基础说明',
      children: [
        {
          name: '# Getting started',
          path: '/doc',
        },
      ],
    },
    {
      name: 'API 说明',
      children: [
        {
          name: '# Integration',
          path: '/api',
        },
      ],
    },
  ],

  pages: [
    {
      path: ['/'],
      components: ['introduction'],
    },
  ],
}
</script>
</head>
<body>
<div id="root"></div>
<!-- 引入 RequireJS -->
<script src="https://cdn.jsdelivr.net/npm/requirejs@2.3.6/require.js"></script>
<!-- 引入 VariousJS 加载器 -->
<script src="https://cdn.jsdelivr.net/npm/@variousjs/various/dist/index.js"></script>
</body>
</html>
```
