import React from 'react'
import { getConfig } from '@variousjs/various'
import { Link, useLocation } from 'react-router-dom'
import { Config } from '../../types'
import csses from './index.less'

const N = () => {
  const $config = getConfig() as Config
  const navs = $config.nav
  const { pathname: path } = useLocation()
  const index = navs.findIndex((item) => item.path === (path === '/' ? '/docs' : path))

  if (index === -1) {
    return null
  }

  const nav = {
    prev: navs[index - 1],
    next: navs[index + 1],
  }

  return (
    <div className={csses.links}>
      {
        nav.prev ? (
          <div>
            <p>上一篇</p>
            <Link to={nav.prev.path}>{nav.prev.name}</Link>
          </div>
        ) : <span />
      }
      {
        nav.next ? (
          <div>
            <p>下一篇</p>
            <Link to={nav.next.path}>{nav.next.name}</Link>
          </div>
        ) : <span />
      }
    </div>
  )
}

export default N
