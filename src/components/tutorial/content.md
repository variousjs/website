# VariousJS 教程

这里将从零开始创建一个基于 VariousJS 的网站应用。该应用非常简单，但会包含大部分 VariousJS 的功能

## 前期准备

开始之前需要了解 React 相关，以及应用构建打包工具，例如 webpack 等。应用打包可以使用 VariousJS 模版打包或者自行配置，但需要注意以下两点

- 应用需要打包成 amd 格式
- 需要将 react / react-dom / @variousjs/various 构建排除

为了快速构建教程所需要的组件应用，这里使用一个简单打包工具，简单配置即可进行应用打包。

### 安装 Falco

Falco 是一个简单的应用打包工具，通过简单配置即可进行应用打包，并且可以自动安装依赖。以下安装 Falco

```bash
$ npm i @fratercula/falco -g
```

全局安装完成，只需要在使用目录添加配置 `falco.config.js` 即可进行应用打包

```js
const path = require('path')

module.exports = {
  entry: {
    // 指定应用打包入口，随着教程，这里需要相应进行改动
    a: path.resolve(__dirname, './a.js'),
  },
  // 需要将 react，react-dom，VariousJS 进行打包排除
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
      root: 'various',
      amd: '@variousjs/various',
    },
    // 使用 umd 格式的 antd UI 组件库，所以这里需要构建排除
    {
      name: 'antd',
      root: 'antd',
      amd: 'antd',
    },
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    // 指定 amd 格式
    libraryTarget: 'amd',
  },
  targets: { esmodules: true },
  mode: 'production',
  sourceMap: false,
}
```

添加完配置文件，就可以进行应用打包了。以下命令执行后就在在 `dist` 目录生成打包后应用

```bash
$ falco -c
```

## 创建主组件

主应用承载全局数据及控制页面组件展示，以及页面路由定义相关

### 定义全局数据

创建 `store.js`，并设定全局值 `user`

```js
export default {
  user: {
    name: 'various',
  },
}
```

### 控制全局数据

全局数据不能直接修改，需要创建 `actions.js`，用于操控数据变化

```js
export default {
  async setName({ dispatch, getStore }, value) {
    const next = await new Promise((r) => setTimeout(r, 1000, value))
    const { user } = getStore()
    user.name = next
    dispatch({ user })
  }
}
```

### 定义错误提示组件

错误提示针对组件加载/运行期间的错误友好提示，统一进行处理，创建 `error.jsx`

```jsx
import React from 'react'
import { Alert } from 'antd'

export default ({ message, type }) => (
  <Alert
    message="Error"
    description={`[${type}]:${message || '组件错误'}`}
    type="error"
    style={{ marginTop: 30 }}
  />
)
```

### 定义加载提示组件

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

### 创建组件容器

容器定义页面路由，及页面布局。理论上可以根据配置定义页面各种各样的样式。这里创建最简单的页面结构，接入的组件只需要按顺序排布即可。另外定义两个页面路由。以下创建 `container.jsx`

```js
import React, { Component } from 'react'
import { Router, Route } from '@variousjs/various'
import { Radio, Badge, Button } from 'antd'

export class extends Component {
  state = {
    path: '/'
  }

  onRouterChange = (e) => {
    this.props.$router.history.push(e.target.value)
    this.setState({ path: e.target.value })
  }

  componentDidMount() {
    this.setState({ path: this.props.$router.location.pathname })
  }

  render() {
    const { $component, $config, $store } = this.props

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
      <div className="container">
        <div className="top">
          <Radio.Group
            size="large"
            value={this.state.path}
            onChange={this.onRouterChange}
            buttonStyle="solid"
          >
            {
              $config.links.map(({ path, name }) => (
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
              count={$store.user.name}
            />
            <Button
              style={{ marginLeft: 10 }}
              onClick={() => this.props.$dispatch('a', 'getName', 'A')}
            >
              Click A
            </Button>
          </div>
        </div>

        <Router>
          {
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

## 创建功能组件

功能组件负责某一部分功能，应该尽量的独立。这里创建两个功能组件 `a.js`，`b.js`。并且两个组件都非常简单

### A 组件

A 组件展示全局数据，以及提供方法给 B 组件 / 主组件调用，进行通信

```js
import React from 'react'
import { Card, Button, message } from 'antd'

const A = (props) => {
  const id = props.$router?.match.params.id

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

A.getName = (e) => message.info(e)

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

B 组件会跟 A 组件 / 全局进行通信。创建 `b.js`

```js
import React from 'react'

export default ({ $dispatch }) => {
  return (
    <div>
      <h3>B</h3>
      <button onClick={() => {
        $dispatch('store', 'setValue', 1)
      }}>修改全局</button>

      <button onClick={() => {
        const name = $dispatch('a', 'getName')
        console.log(name)
      }}>获取 A 组件值</button>
    </div>
  )
}
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

## 创建应用页面

准备了主应用及功能组件，这时候可以配置页面了

```html
<!doctype html>
<html>
<head>
<meta charset="UTF-8" />
<title> VariousJS </title>
</head>
<body>
<div id="root"></div>
<!-- requirejs -->
<script src="https://cdn.jsdelivr.net/npm/requirejs@2.3.6/require.js"></script>
<!-- variousjs -->
<script src="https://cdn.jsdelivr.net/npm/@variousjs/various@0.2.0/dist/index.js"></script>
<script>
var config = {
  root: '#root',
  entry: 'path/to/entry.js',
  routerMode: 'hash',
  dependencies: {
    // 内置依赖，如果不定义会默认使用 unpkg cdn 链接
    react: 'https://cdn.jsdelivr.net/npm/react@17.0.2/umd/react.production.min.js',
    'react-dom': 'https://cdn.jsdelivr.net/npm/react-dom@17.0.2/umd/react-dom.production.min.js',
  },
  components: {
    // 组件定义
    a: 'path/to/a.js',
    b: 'path/to/b.js',
  },

  // 以下属于自定义属性
  pages: [
    {
      path: '/',
      components: ['a', 'b']
    },
    // 指定一个路由，但使用了不存在的组件
    {
      path: '/error',
      components: ['error'],
    },
  ],
  links: [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Error',
      path: '/error',
    },
  ],
}

var various = new window.Various(config)

various.onError = function(e) {
  console.log(e)
  document.write(e.message)
}

various.start()
</script>

</body>
</html>
```
