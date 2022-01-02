import React, { Component, ComponentType } from 'react'
import { ContainerProps, Route, Link, Router } from '@variousjs/various'
import { Store, Config } from '../types'
import csses from './entry.less'

class Container extends Component<ContainerProps<Store, Config>> {
  render() {
    const { $component, $config } = this.props

    return (
      <div className={csses.container}>
        <div className={csses.header}>
          <div className={csses.logo}>VariousJS</div>
          <div className={csses.nav}>
            {
              $config.menu.map((item) => (
                <Link key={item.path} to={item.path}>{item.name}</Link>
              ))
            }
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
            <div className={csses.menu}>
              {
                $config.nav.map((item) => {
                  return (
                    <div key={item.path}>
                      <Link to={item.path}>
                        {item.name}
                      </Link>
                    </div>
                  )
                })
              }
            </div>
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
