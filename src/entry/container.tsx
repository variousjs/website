import React, { Component, ComponentType, createRef } from 'react'
import { ContainerProps } from '@variousjs/various'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Config } from '../types'
import csses from './entry.less'

class Container extends Component<ContainerProps<Config>> {
  leftRef = createRef<HTMLDivElement>()

  componentDidMount() {
    document.documentElement.classList.remove('loading')

    const { hash } = window.location
    setTimeout(() => {
      document.querySelector(decodeURIComponent(hash))?.scrollIntoView({
        behavior: 'smooth'
      })
    }, 1000)

    const { pushState, replaceState } = window.history
    window.history.pushState = (...args) => {
      pushState.apply(window.history, args)
      this.leftRef.current?.scrollTo(0, 0)
    }
    window.history.replaceState = (...args) => {
      replaceState.apply(window.history, args)
      this.leftRef.current?.scrollTo(0, 0)
    }
  }

  onMDClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as Element
    if (target.tagName === 'A') {
      e.preventDefault()
      const href = target.getAttribute('href')

      if (href?.includes('http')) {
        window.open(href)
        return
      }

      const [first, ...extra] = href || ''
      const extraLink = extra.join('')

      if (first === '#'){
        document.querySelector(`#${decodeURIComponent(extraLink)}`)?.scrollIntoView({
          behavior: 'smooth'
        })
        setTimeout(() => {
          window.location.hash = href!
        }, 300)
        return
      }

      if (first === '/') {
        window.open(href!)
      }
    }
  }

  render() {
    const { $component, $config } = this.props
    const Header = $component('header')
    const Nav = $component('nav')
    const NavLink = $component('nav-link')

    return (
      <div className={csses.container}>
        <Router>
          <div className={csses.header}>
            <Header />
          </div>

          <div className={csses.content}>
            <div ref={this.leftRef} className={csses.left}>
              <div style={{ minHeight: '100%' }} onClick={this.onMDClick}>
                <Switch>
                  {
                    $config.pages.map(({ path, components }) => {
                      const cs = () => components.map((name) => {
                        const C = $component(name)
                        return (<C key={name} />)
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
                </Switch>
              </div>
              <NavLink />
            </div>

            <div className={csses.right}>
              <Nav />
            </div>
          </div>
        </Router>
      </div>
    )
  }
}

export default Container
