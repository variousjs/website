import React, { FC } from 'react'
import { ComponentProps, Link } from '@variousjs/various'
import { Config } from '../../types'
import csses from './index.less'

const H: FC<ComponentProps<{}, Config>> = ({ $config }) => {
  return (
    <div className={csses.menu}>
      {
        $config.nav.map((item) => {
          return (
            <div key={item.path}>
              <Link to={item.path}>
                {item.name}
              </Link>
            </div>
          )
        })
      }
    </div>
  )
}

export default H
