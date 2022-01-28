import React, { FC } from 'react'
import { ComponentProps } from '@variousjs/various'
import { NavLink } from 'react-router-dom'
import Icon from '../../svg/top.svg'
import { Config } from '../../types'
import csses from './index.less'

export const N: FC<ComponentProps<{}, Config>> = ({ $config }) => {
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

export const T: FC = () => {
  const onTop = () => {
    document.querySelector('#top')?.scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (
    <div
      onClick={onTop}
      className={csses.top}
    >
      <Icon width="27" height="27" />
    </div>
  )
}
