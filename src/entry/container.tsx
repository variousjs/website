import React, { Component, ComponentType, createRef } from 'react'
import { createComponent, getConfig } from '@variousjs/various'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Config } from '../types'
import csses from './entry.less'

const startScroll = (t?: number) => {
  const { hash } = window.location
  if (hash) {
    setTimeout(() => {
      document.querySelector(decodeURIComponent(hash))?.scrollIntoView({
        behavior: 'smooth'
      })
    }, t || 1000)
  }
}

class Container extends Component {
  config = getConfig() as Config

  leftRef = createRef<HTMLDivElement>()

  componentDidMount() {
    document.documentElement.classList.remove('loading')

    startScroll()

    window.addEventListener('popstate', () => startScroll(300))

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
    const $config = this.config
    const Header = createComponent('header')
    const Nav = createComponent('nav.N')
    const Top = createComponent('nav.T')
    const Mark = createComponent('nav.M')
    const NavLink = createComponent('nav-link')

    return (
      <div className={csses.container}>
        <Router>
          <Mark $silent />
          <div className={csses.header}>
            <Header />
          </div>

          <div ref={this.leftRef} className={csses.content}>
            <div>
              <div className={csses.left}>
                <div id="top" />
                <div className={csses.router} onClick={this.onMDClick}>
                  <Switch>
                    {
                      $config.pages.map(({ path, components }) => {
                        const cs = () => components.map((name) => {
                          const C = createComponent(name)
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
                <Top $silent />
              </div>
            </div>
          </div>
        </Router>
      </div>
    )
  }
}

export default Container
