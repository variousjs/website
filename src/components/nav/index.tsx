import React, { FC } from 'react'
import { ComponentProps, Store, Connect as CT, } from '@variousjs/various'
import { NavLink } from 'react-router-dom'
import Icon from '../../svg/top.svg'
import Close from '../../svg/close.svg'
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

type S = { visible: boolean }
type Connect = CT<S>

const { createStore, connect, dispatch } = new Store<S>()

createStore({ visible: false })

const Mc: FC<Connect & ComponentProps<{}, Config>> & { open: () => void } = (props) => {
  const { $config, visible } = props
  const close = () => dispatch({ visible: false })

  return (
    <div className={`${csses.mark} ${visible ? csses.ms : ''}`}>
      <div onClick={close} className={csses.close}>
        <Close />
      </div>
      <div className={csses.mi}>
        <div className={csses.mt}>
          {
            $config.menu.map((item) => (
              <NavLink
                exact
                activeClassName={csses.ma}
                key={item.path}
                to={item.path}
                onClick={close}
              >
                {item.name}
              </NavLink>
            ))
          }
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/variousjs/various"
          >
            GitHub
          </a>
        </div>
        <div className={csses.mb}>
          {
            $config.nav.map((item) => (
              <NavLink
                exact
                activeClassName={csses.ma}
                key={item.path}
                to={item.path}
                onClick={close}
              >
                {item.name}
              </NavLink>
            ))
          }
        </div>
      </div>
    </div>
  )
}

Mc.open = () => {
  dispatch({ visible: true })
}

export const M = connect('visible')(Mc)
