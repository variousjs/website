import React, { Component } from 'react'
import { Router, Route } from '@variousjs/various'
import { Radio, Badge, Button } from 'antd'
import csses from './entry.module.less'

export default class C extends Component {
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

    return (
      <div className={csses.container}>
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
