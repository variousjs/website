# 核心 & 加载器

VariousJS 由核心及加载器两部分构成。应用页面引入加载器，由加载器加载核心功能，再由核心功能初始化页面组件相关，并加载其他组件

### 加载器

加载器用于加载 VariousJS 核心，应用主体组件，以及 react / react-dom，并加载浏览器 polyfill。依赖 RequireJS，需要 script 方式引入

```html
<!-- 引入 RequireJS -->
<script src="https://cdn.jsdelivr.net/npm/requirejs@2.3.6/require.js"></script>
<!-- 引入 VariousJS 加载器 -->
<script src="https://cdn.jsdelivr.net/npm/@variousjs/various/dist/index.js"></script>
```

引入后，提供 `window.Various` 对象，用于初始化 VariousJS 应用环境，并提供 `onError`, `start` 方法

```html
<script>
// 相关配置
var config = { /* ... */ }
var various = new window.Various(config)

// 出错处理（通常是初始化错误）
various.onError = function(e) {
  console.log(e)
  document.write(e.message)
}

// 启动应用
various.start()
</script>
```

### 核心组件

核心组件 `@variousjs/various` 由加载器加载，并不需要显式在页面中指定引入。核心组件也是 AMD 模式导出，所以实际上核心组件也可以认为是一个依赖组件
核心组件用于初始化主体组件，提供路由，状态功能支持，并导出 TypeScript 类型

### 路由相关

路由基于 `react-router@4`，可以使用以下方法/组件

```js
import {
  Router,
  Route,
  Link,
  generatePath,
  Redirect,
  Prompt,
  NavLink,
  matchPath,
  Switch,
} from '@variousjs/various'
```

其中除了 `Router` 为路由容器组件，没有任何参数设置，路由能力必须使用此组件。此外其余方法都是 `react-router` 的直接导出

### 状态组件

状态组件基于 [nycticorax](https://github.com/fratercula/nycticorax)，用于组件内状态管理，通常用于组件件通信改变自身状态。

```js
import { Store } from '@variousjs/various'

const {
  createStore,
  connect,
  dispatch,
  getStore,
} = new Store()
```

### TypeScript 类型

定义了 VariousJS 的一些组件属性及 API 类型

```ts
import {
  // 状态方法及属性
  Connect,
  Dispatch,

  // 组件属性及方法
  ComponentProps,
  ErrorProps,
  ContainerProps,

  // 全局数据操作属性
  Actions,
} from '@variousjs/various'
```
