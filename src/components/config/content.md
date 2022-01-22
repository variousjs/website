# 配置

VariousJS 核心不参与应用打包，类似 RequireJS 的加载配置，使用 script 方式引入，通过配置启动应用

### 内置参数

需要页面定义 `VARIOUS_CONFIG` 参数并配置相关参数，约定一些参数用于配制组件，主体组件及路由相关

```ts
interface Config {
  dependencies?: { [key: string]: string },
  components: { [key: string]: string },
  entry: string,
  root?: string,
}
```

- dependencies：定义依赖组件名及加载路径
- components：定义功能组件名及加载路径
- entry：主体组件加载路径
- root：应用渲染节点（默认 #root）

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
  routerMode: 'hash',
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
