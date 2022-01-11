import React, { Component, ComponentType, createRef } from 'react'
import { ContainerProps, Route, Router } from '@variousjs/various'
import { Store, Config } from '../types'
import csses from './entry.less'

class Container extends Component<ContainerProps<Store, Config>> {
  leftRef = createRef<HTMLDivElement>()

  unListen: () => void

  componentDidMount() {
    document.documentElement.classList.remove('loading')
    this.unListen = this.props.$router.history.listen(() => {
      this.leftRef.current?.scrollTo(0, 0)
    })
  }

  componentWillUnmount() {
    this.unListen && this.unListen()
  }

  onMDClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as Element
    if (target.tagName === 'A') {
      const href = target.getAttribute('href')
      if (href?.slice(0, 1) !== '#') {
        e.preventDefault()
        window.open(href as string)
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
        <div className={csses.header}>
          <Header />
        </div>

        <div
          className={csses.content}
          onClick={this.onMDClick}
        >
          <div ref={this.leftRef} className={csses.left}>
            <Router>
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
            </Router>
            <NavLink />
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
