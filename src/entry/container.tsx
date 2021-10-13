import React, { Component, ComponentType } from 'react'
import { Route, Link } from 'react-router-dom'
import { ContainerProps } from '@variousjs/various'
import { Radio, Badge, Button, Menu } from 'antd'
import { Store, Config } from '../types'
import csses from './entry.less'

class Container extends Component<ContainerProps<Store, Config>> {
  state = {
    path: '/'
  }

  onRouterChange = (e: any) => {
    this.props.$router.history.push(e.target.value)
    this.setState({ path: e.target.value })
  }

  componentDidMount() {
    this.setState({ path: this.props.$router.location.pathname })
  }

  render() {
    const { Router, $component, $config, $store } = this.props

    return (
      <div className={csses.container}>
        <div className={csses.header}>
          <div className={csses.logo}>VariousJS</div>
          {/* <div className={csses.search}></div> */}
          <div className={csses.nav}>
            <Link to="start">文档</Link>
            <Link to="release">更新日志</Link>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/variousjs/various"
              className={csses.github}
            >
              GitHub
            </a>
          </div>
        </div>

        <div className={csses.content}>
          <div className={csses.left}>
            <Menu
              className={csses.menu}
              mode="inline"
              style={{ width: '100%' }}
            >
              {
                $config.nav.map((item, i) => {
                  if (item.path) {
                    return (
                      <Menu.Item key={i}>
                        <Link to={item.path}>
                          {item.name}
                        </Link>
                      </Menu.Item>
                    )
                  }

                  return (
                    <Menu.SubMenu
                      key={i}
                      title={item.name}
                    >
                      {
                        item.children?.map((route, j) => (
                          <Menu.Item key={j}>
                            <Link to={route.path}>
                              {route.name}
                            </Link>
                          </Menu.Item>
                        ))
                      }
                    </Menu.SubMenu>
                  )
                })
              }
          </Menu>
          </div>

          <div className={csses.right}>
            <div className={csses.top}>
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
                  onClick={() => this.props.$dispatch('card', 'getName', 'Card')}
                >
                  Card Name
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
                      key={Array.isArray(path) ? path.join() : path}
                      exact
                      path={path}
                      component={cs as unknown as ComponentType}
                    />
                  )
                })
              }
            </Router>
          </div>
        </div>
      </div>
    )
  }
}

export default Container
