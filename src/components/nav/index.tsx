import React, { FC } from 'react'
import { ComponentProps } from '@variousjs/various'
import { NavLink } from 'react-router-dom'
import { Config } from '../../types'
import csses from './index.less'

const H: FC<ComponentProps<{}, Config>> = ({ $config }) => {
  return (
    <div className={csses.menu}>
      {
        $config.nav.map((item) => {
          return (
            <NavLink
              exact
              activeClassName={csses.active}
              key={item.path}
              to={item.path}
            >
              {item.name}
            </NavLink>
          )
        })
      }
    </div>
  )
}

export default H
