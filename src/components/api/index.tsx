import React, { FC } from 'react'
import Md from '../../helper/markdown'
import md from './content.md'

const H: FC = () => {
  return (
    <Md data={md} />
  )
}

export default H
