# 教程

这里将从零开始创建一个基于 VariousJS 的网站应用。该应用非常简单，但会包含大部分 VariousJS 的功能

<!-- toc -->

## 前期准备

开始之前需要了解 React 相关，以及应用构建打包工具，例如 webpack 等。另外需要明白 VariousJS 的组件体系，以及配置核心由主组件/功能呢组件构成。
应用打包可以使用 VariousJS 模版打包或者自行配置，需要注意以下两点

- 应用需要打包成 amd 格式
- 需要将 `react` / `react-dom` / `@variousjs/various` 构建排除

为了快速构建教程所需要的组件应用，这里使用一个简单打包工具，简单配置即可进行应用打包。

### 使用 Falco

Falco 是一个简单的应用打包工具，通过简单配置即可进行应用打包，并且可以自动安装依赖。以下安装 Falco

```bash
$ npm i @fratercula/falco -g
```

全局安装完成，即可进行应用打包。但教程的应用需要一些特殊定制，所以需要在使用目录添加配置 `falco.config.js`

```js
const path = require('path')

module.exports = {
  entry: {
    // 指定应用打包入口，随着教程，这里需要相应进行改动
    a: path.resolve(__dirname, './a.js'),
  },
  // 需要将 react，react-dom，@variousjs/various 进行打包排除
  externals: [
    {
      name: 'react',
      root: 'React',
      amd: 'react',
    },
    {
      name: 'react-dom',
      root: 'ReactDOM',
      amd: 'react-dom',
    },
    {
      name: '@variousjs/various',
      root: 'Various',
      amd: '@variousjs/various',
    },
    // 教程 cdn 方式使用 antd / react-router-dom，所以这里需要构建排除
    {
      name: 'antd',
      root: 'antd',
      amd: 'antd',
    },
    {
      name: 'react-router-dom',
      root: 'ReactRouterDOM',
      amd: 'react-router-dom',
    },
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    // 指定打包成 amd 格式
    libraryTarget: 'amd',
  },
  // 不需要任何 polyfill，因为 variousjs 默认都包含了
  targets: { esmodules: true },
  mode: 'production',
  sourceMap: false,
}
```

添加完配置文件，就可以进行应用打包了。以下命令执行后就在在 `dist` 目录生成打包后应用

```bash
$ falco -c
```

## 主组件

主组件承载全局数据及控制页面组件展示，以及页面路由定义相关

### 全局数据

创建 `store.js`，并设定全局值 `user`

```js
export default {
  user: {
    name: 'various',
  },
}
```

### 控制数据

全局数据不能直接修改，需要创建 `actions.js`，用于操控数据变化

```js
export default {
  async setName({ emit, getStore }, { value }) {
    const next = await new Promise((r) => setTimeout(r, 1000, value))
    const { user } = getStore()
    user.name = next
    emit({ user })
  },
  // 虽然能够直接通过 $store 获取数据，但这里还是可以进行一些简单数据处理
  async getName({ getStore }) {
    const { user } = getStore()
    return user.name
  },
}
```

### 错误提示组件

用于对组件加载/运行期间的错误友好提示，统一进行处理，创建 `error.jsx`

```jsx
import React from 'react'
import { Alert } from 'antd'

export default function Error({ message, type }) {
  return (
    <Alert
      message="Error"
      description={`[${type}]:${message || '组件错误'}`}
      type="error"
      style={{ marginTop: 30 }}
    />
  )
}
```

### 加载提示组件

创建 `loader.jsx`，用于统一的展示组件加载提示

```jsx
import React from 'react'
import { Spin } from 'antd'

export default function Loader() {
  return (
    <Spin />
  )
}
```

### 容器组件

容器组件定义页面路由，及页面布局。理论上可以根据配置定义页面各种各样的样式。这里创建最简单的页面结构，接入的组件只需要按顺序排布即可。另外也创建路由相关，创建 `container.jsx`

```jsx
import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import csses from './entry.module.less'

export default class C extends Component {
  render() {
    const { $component, $config } = this.props
    // 页面顶部作为一个独立的组件，会在后面定义说明
    const Top = $component('top')

    // 假设有以下配置
    // {
    //   ...
    //   pages: [
    //     {
    //       path: '/',
    //       components: ['a'],
    //     },
    //     ...
    //   ],
    //   links: [
    //     {
    //       name: 'Home',
    //       path: '/',
    //     },
    //     ...
    //   ],
    // }

    return (
      <div className={csses.container}>
        <Router>
          <div className={csses.top}>
            <Top />
          </div>
          {
            // 根据配置生成路由结构
            $config.pages.map(({ path, components }) => {
              const cs = () => components.map((name) => {
                const C = $component(name)
                return (
                  <div
                    key={name}
                    style={{ display: 'inline-block', width: 300, verticalAlign: 'top' }}
                  >
                    <C />
                  </div>
                )
              })

              return (
                <Route
                  key={path}
                  exact
                  path={path}
                  component={cs}
                />
              )
            })
          }
        </Router>
      </div>
    )
  }
}
```

创建样式文件 `entry.module.less`

```css
.container {
  background: #fff;
  padding: 50px;
}
.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
```

### 构建主组件

创建好以上文件，接下来创建主应用入口 `entry.js`

```js
export { default as actions } from './actions'
export { default as store } from './store'
export { default as Container } from './container'
export { default as Loader } from './loader'
export { default as Error } from './error'
```

接下来修改 `falco.config.js` 的 `entry` 配置，就可以构建主主组件了。会生成 `dist/entry.js`

```js
{
  // ...
  entry: {
    entry: path.resolve(__dirname, './entry.js'),
  },
  // ...
}
```

## 功能组件

功能组件负责某一部分功能，应该尽量的独立。这里创建两个功能组件 `a.js`，`b.js`。组件都非常简单。另外页面顶部也作为一个功能组件

### Top 顶部组件

顶部组件提供路由跳转，并调用 A 组件提供的 `getName` 方法

```jsx
import React, { useState, useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { Radio, Badge, Button } from 'antd'

const T = (props) => {
  const { pathname } = useLocation()
  const history = useHistory()
  const [path, setPath] = useState('')

  useEffect(() => {
    setPath(pathname)
  }, [])

  const onRouterChange = (e) => {
    history.push(e.target.value)
    setPath(e.target.value)
  }

  return (
    <>
    <Radio.Group
      size="large"
      value={path}
      onChange={onRouterChange}
      buttonStyle="solid"
    >
      {
        props.$config.links.map(({ path, name }) => (
          <Radio.Button key={path} value={path}>
            {name}
          </Radio.Button>
        ))
      }
    </Radio.Group>
    <div>
      Store:
      <Badge
        style={{ marginLeft: 10 }}
        count={props.$store.user.name}
      />
        <Button
          style={{ marginLeft: 10 }}
          onClick={() => props.$dispatch('a', 'getName', 'Card')}
        >
          Card Name
        </Button>
      </div>
    </>
  )
}

export default T
```

接下来修改 `falco.config.js` 的 `entry` 配置，即可打包 Top 组件，生成 `dist/top.js`

```js
{
  // ...
  entry: {
    top: path.resolve(__dirname, './top.js'),
  },
  // ...
}
```

### A 组件

A 组件提供方法给其他组件调用，进行通信

```jsx
import React from 'react'
import { Card, Button, message } from 'antd'
import { useParams } from 'react-router-dom'

const A = (props) => {
  const { id } = useParams()

  return (
    <div className="container">
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        actions={[
          <Button
            key="next"
            onClick={() => props.$dispatch('b', 'setValue', 1)}
          >
            B
          </Button>,
          <Button
            key="store"
            type="primary"
            onClick={async () => {
              await props.$dispatch('store', 'setName', `${Math.random().toFixed(2)}`)
              message.info('changed')
            }}
          >
            Store
          </Button>
        ]}
      >
        <Card.Meta
          title="Route Params"
          description={id}
        />
      </Card>
    </div>
  )
}

// 提供 getName 方法
A.getName = ({ value }) => message.info(value)

export default A
```

接下来修改 `falco.config.js` 的 `entry` 配置，即可打包 A 组件，生成 `dist/a.js`

```js
{
  // ...
  entry: {
    a: path.resolve(__dirname, './a.js'),
  },
  // ...
}
```

### B 组件

B 组件提供方法给其他组件调用改变自身状态，其中 Store 使用可以参考 [nycticorax](https://github.com/fratercula/nycticorax)

```jsx
import React, { Component } from 'react'
import { Store } from '@variousjs/various'
import { Descriptions } from 'antd'

const {
  createStore,
  connect,
  emit,
  getStore,
} = new Store()

createStore({ value: 0 })

class X extends Component {
  // 提供 setValue 方法
  static setValue = async ({ value }) => {
    const store = getStore()
    emit({ value: value + store.value }, true)
  }

  render() {
    const { user } = this.props.$store
    const { value } = this.props

    return (
      <Descriptions
        style={{ marginTop: 30 }}
        bordered
        title="B"
        size="small"
      >
        <Descriptions.Item label="Store">{user.name}</Descriptions.Item>
        <Descriptions.Item label="Value">{value}</Descriptions.Item>
      </Descriptions>
    )
  }
}

export default connect('value')(X)
```

接下来修改 `falco.config.js` 的 `entry` 配置，即可打包 B 组件，生成 `dist/b.js`

```js
{
  // ...
  entry: {
    b: path.resolve(__dirname, './b.js'),
  },
  // ...
}
```

## 应用页面

准备了主应用及功能组件，这时候可以配置页面了，在 dist 目录同级创建 `index.html`，添加相应配置即可生成页面

```html
<!doctype html>
<html>
<head>
<meta charset="UTF-8" />
<title> VariousJS </title>
<!-- antd 样式 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/antd@4.16.13/dist/antd.compact.min.css" />
<script>
var VARIOUS_CONFIG = {
  root: '#root',
  entry: './dist/entry.js',
  routerMode: 'hash',
  dependencies: {
    // 内置依赖，如果不定义会默认使用 unpkg cdn 链接
    react: 'https://cdn.jsdelivr.net/npm/react@17.0.2/umd/react.production.min.js',
    'react-dom': 'https://cdn.jsdelivr.net/npm/react-dom@17.0.2/umd/react-dom.production.min.js',

    // 依赖定义，antd 依赖 moment
    'react-router-dom': 'https://cdn.jsdelivr.net/npm/react-router-dom@5.3.0/umd/react-router-dom.min.js',
    moment: 'https://cdn.jsdelivr.net/npm/moment@2.29.1/min/moment.min.js',
    antd: 'https://cdn.jsdelivr.net/npm/antd@4.16.13/dist/antd-with-locales.min.js',
  },
  components: {
    // 组件定义
    a: './dist/a.js',
    b: './dist/b.js',
    top: './dist/top.js',
  },

  // 以下属于自定义属性
  pages: [
    {
      path: ['/', '/com/:id'],
      components: ['a', 'b']
    },
    {
      path: '/error',
      // 定义不存在的组件，测试错误情况
      components: ['error'],
    },
  ],
  links: [
    {
      name: 'Router `/`',
      path: '/',
    },
    {
      name: 'Router `/com/5`',
      path: '/com/5',
    },
    {
      name: 'Router `error`',
      path: '/error',
    },
  ],
}
</script>
<script src="https://cdn.jsdelivr.net/npm/requirejs@2.3.6/require.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@variousjs/various@1.0.0/dist/index.js"></script>
</head>
<body>
<div id="root"></div>
</body>
</html>
```

## 完成应用

接着创建 web 服务，访问 `index.html` 即可查看网站应用了，这里提供一个 [DEMO](/example/)

此外可以源码可以在 `https://github.com/variousjs/website/tree/master/docs/example` 查看
