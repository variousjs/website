import React, { Component, ComponentType } from 'react'
import { Route, Link } from 'react-router-dom'
import { ContainerProps } from '@variousjs/various'
import { Menu } from 'antd'
import { Store, Config } from '../types'
import csses from './entry.less'

class Container extends Component<ContainerProps<Store, Config>> {
  state = {
  }

  onRouterChange = (e: any) => {
    this.props.$router.history.push(e.target.value)
    this.setState({ path: e.target.value })
  }

  render() {
    const { Router, $component, $config, $router } = this.props

    return (
      <div className={csses.container}>
        <div className={csses.header}>
          <div className={csses.logo}>VariousJS</div>
          <div className={csses.nav}>
            {/* <Link to="/">文档</Link> */}
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
              defaultSelectedKeys={[$router.location.pathname]}
              defaultOpenKeys={['0', '1', '2']}
              style={{ width: '100%' }}
            >
              {
                $config.nav.map((item, i) => {
                  if (item.path) {
                    return (
                      <Menu.Item key={item.path}>
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
                        item.children?.map((route) => (
                          <Menu.Item key={route.path}>
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
            <Router>
              {
                $config.pages.map(({ path, components }) => {
                  const cs = () => components.map((name) => {
                    const C = $component(name)
                    return (
                      <div key={name}>
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
