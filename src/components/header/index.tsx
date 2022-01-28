import React, { FC } from 'react'
import { ComponentProps } from '@variousjs/various'
import { NavLink, Link } from 'react-router-dom'
import ExternalIcon from '../../svg/external-link.svg'
import MenuIcon from '../../svg/menu.svg'
import { Config } from '../../types'
import csses from './index.less'

const H: FC<ComponentProps<{}, Config>> = ({ $config, $dispatch }) => {
  return (
    <div className={csses.header}>
      <div className={csses.inner}>
        <Link className={csses.logo} to="/">VariousJS</Link>
        <div className={csses.nav}>
          {
            $config.menu.map((item) => (
              <NavLink
                exact
                activeClassName={csses.active}
                key={item.path}
                to={item.path}
              >
                {item.name}
              </NavLink>
            ))
          }
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/variousjs/various"
            className={csses.github}
          >
            <span>GitHub</span>
            <ExternalIcon width="10" height="10" fill="#c5c5c5" />
          </a>
        </div>
        <div onClick={() => $dispatch('nav.M', 'open')} className={csses.menu}>
          <MenuIcon fill="#fff" />
        </div>
      </div>
    </div>
  )
}

export default H
