import React, { FC } from 'react'
import { ComponentProps, NavLink, Link } from '@variousjs/various'
import ExternalIcon from '../../svg/external-link.svg'
import { Config } from '../../types'
import csses from './index.less'

const H: FC<ComponentProps<{}, Config>> = ({ $config }) => {
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
      </div>
    </div>
  )
}

export default H
