import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import csses from './entry.module.less'

export default class C extends Component {
  render() {
    const { $component, $config } = this.props
    const Top = $component('top')

    return (
      <div className={csses.container}>
        <Router>
          <div className={csses.top}>
            <Top />
          </div>

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
