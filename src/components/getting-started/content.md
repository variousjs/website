# 开始

这里主要介绍 VariousJS 的基础概念及相关资源。

## 了解 VariousJS

使用 VariousJS 前需要一定的应用构建及 `react` 基础，并了解 [AMD](https://github.com/amdjs/amdjs-api/blob/master/AMD.md) 模块化规范

### 基本原则

VariousJS 基于 [RequireJS](https://requirejs.org/)，组件的加载处理由 RequireJS 提供，VariousJS 提供组件间联系的桥梁，并基于 `react` / `react-dom` 提供组件控制及页面路由能力。

- VariousJS 核心并不参与应用打包构建，而是通过 cdn script 方式引入
- VariousJS 由加载器和核心功能两部分组成，加载器主要负责引入核心功能，而核心功能提供相应的基础能力
- 使用 VariousJS 可以任意使用打包构建工具构建功能组件（基于 react），唯一要求是输出 AMD（UMD） 格式
- 使用 VariousJS 只要提供了 AMD 导出的组件，通过一定的配置，就可以生成一个 web 应用，并且整个过程不需要再进行打包构建

### 示例教程

可以尝试通过 [教程](/tutorial) 一步步创建一个简单的 VariousJS 应用

## 脚手架

VariousJS 提供开箱即用的脚手架（基于 webpack），可以快速构建页面应用。脚手架没有进行黑魔法封装，都是裸露的基本配置。
脚手架默认集成 `TypeScript`，`ESlint`。集成 `@variousjs/various` 用于 VariousJS API，属性相关提示

```bash
# 创建
$ npm init @variousjs

# 初始化安装依赖
$ npm i

# 开发
$ npm start

# 构建
$ npm run build

# 代码检查
$ npm run lint
```

由于组件互相独立开发测试，可以使用一些零配置工具进行开发测试，例如 [TSDX](https://tsdx.io)，或者 [Falco](https://github.com/fratercula/falco)

如果使用自定义构建工具开发 VariousJS 应用，需要注意以下

### 组件要求

组件必须为 AMD（UMD） 导出的 React 组件。只要符合要求的组件都可以加载，甚至可以是第三方组件，所以组件需要打包成 AMD 格式（UMD 也可以），但是不能指定 `library name`，如果指定了可能会造成找不到组件错误

```js
module.exports = {
  // ...,
  output: {
    // ...,
    libraryTarget: 'amd', // 指定 amd 格式
    // ...,
  },
  // 如果定义了依赖组件，注意需要 externals 配置添加排除
  externals: {
    antd: {
      root: 'antd',
      amd: 'antd',
    },
    // ...
  }，
  // ...
}
```

### 内置依赖

VariousJS 内置一些底层依赖，需要在配置 `externals`，其他组件开发可以直接使用

- react
- react-dom
- @variousjs/various：包含状态/通信支持

### 组件开发

由于多个组件由 RequireJS 引入，这时候在开发时候 webpack-dev-server 会在多个组件重复加载热更新 js，造成热更新失效或者出错问题。所以需要进行一些处理，例如分离 webpack 配置

```json
"start": "webpack --progress --config webpack.component.config.js & webpack serve --config webpack.entry.config.js --progress"
```

### Polyfill

考虑到组件代码共享及减少重复代码加载，VariousJS 核心 js 已经将浏览器兼容 Polyfill 包含，所以组件构建适合需要注意不需要添加额外的 Polyfill 支持

### 兼容性

现代浏览器

## CDN 链接

如基本原则所说明，VariousJS 由加载器及核心组件组成，并且需要 CDN 方式引入。不过页面引入时候只需要引入加载器即可。加载器会自动引入核心功能组件。但需要保证 js 资源在同一个目录

```html
<script src="https://cdn.jsdelivr.net/npm/@variousjs/various/dist/index.js"></script>

<!-- 或者使用 unpkg -->
<script src="https://unpkg.com/@variousjs/various/dist/index.js"></script>
```
