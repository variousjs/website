# 开始

这里主要介绍 VariousJS 的基础概念及相关资源。

## 了解 VariousJS

使用 VariousJS 前需要一定的应用构建及 `react` 基础，并了解 AMD 模块化规范

### 基本原则

VariousJS 基于 RequireJS，组件的加载处理由 RequireJS 提供，VariousJS 提供组件间联系的桥梁，并基于 `react` / `react-router` 提供组件控制及页面路由能力。

- VariousJS 核心并不参与应用打包构建，而是通过 cdn script 方式引入
- VariousJS 由加载器和核心功能两部分组成，加载器主要负责引入核心功能，而核心功能提供相应的基础能力
- 使用 VariousJS 可以任意使用打包构建工具构建功能组件（基于 react），唯一要求是输出 AMD（UMD） 格式
- 使用 VariousJS 只要提供了相应的 AMD 规范组件，通过一定的配置，就可以生成一个 web 应用，并且整个过程不需要再进行打包构建

### 示例教程

可以尝试通过 [教程](#tutorial) 一步步创建一个简单的 VariousJS 应用

## 脚手架

VariousJS 提供开箱即用的脚手架（typescript + webpack），可以快速构建页面应用。脚手架没有进行黑魔法封装，都是裸露的基本配置。

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

## CDN 链接

如基本原则所说明，VariousJS 由加载器及核心组件组成，并且需要 CDN 方式引入。不过页面引入时候只需要引入加载器即可。加载器会自动引入核心功能组件。但需要保证 js 资源在同一个目录

```html
<script src="https://cdn.jsdelivr.net/npm/@variousjs/various@0.3.0/dist/index.js"></script>

<!-- 或者使用 unpkg -->
<script src="https://unpkg.com/@variousjs/various@0.3.0/dist/index.js"></script>
```
