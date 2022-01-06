import React from 'react'
import LoadingIcon from '../svg/three-dots.svg'
import csses from './entry.less'

export default function Loader() {
  return (
    <div className={csses.loader}>
      <LoadingIcon fill="#555" width="24" height="6" />
    </div>
  )
}
