import React, { FC } from 'react'
import { ErrorProps } from '@variousjs/various'

const errorComponent: FC<ErrorProps> = ({ reload, type, message }) => (
  <>
    <p>{type}: {message || '组件错误'}</p>
    {
      reload && <button onClick={reload}>刷新</button>
    }
  </>
)

export default errorComponent
