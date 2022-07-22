import React, { FC } from 'react'
import { ErrorProps } from '@variousjs/various'
import csses from './entry.less'

const errorComponent: FC<ErrorProps> = ({ $reload, $type, $message }) => (
  <div className={csses.error}>
    <div>{$type}: {$message || '组件错误'}</div>
    {
      $reload && <button style={{ marginTop: 10 }} onClick={$reload}>刷新</button>
    }
  </div>
)

export default errorComponent
