import React, { FC } from 'react'
import { ComponentProps, Link } from '@variousjs/various'
import { Config } from '../../types'
import csses from './index.less'

const H: FC<ComponentProps<{}, Config>> = ({ $config }) => {
  return (
    <div className={csses.header}>
      <div className={csses.logo}>VariousJS</div>
      <div className={csses.nav}>
        {
          $config.menu.map((item) => (
            <Link key={item.path} to={item.path}>{item.name}</Link>
          ))
        }
        <a
          rel="noreferrer"
          target="_blank"
          href="https://github.com/variousjs/various"
          className={csses.github}
        >
          GitHub
        </a>
      </div>
    </div>
  )
}

export default H
