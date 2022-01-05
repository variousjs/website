import React, { Component, ComponentType } from 'react'
import { ContainerProps, Route, Router } from '@variousjs/various'
import { Store, Config } from '../types'
import csses from './entry.less'

class Container extends Component<ContainerProps<Store, Config>> {
  render() {
    const { $component, $config } = this.props
    const Header = $component('header')
    const Nav = $component('nav')

    return (
      <div className={csses.container}>
        <Header />

        <div className={csses.content}>
          <div className={csses.left}>
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

          <div className={csses.right}>
            <Nav />
          </div>
        </div>
      </div>
    )
  }
}

export default Container
