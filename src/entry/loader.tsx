import React from 'react'
import { Skeleton } from 'antd'

export default function Loader() {
  return (
    <div style={{ padding: '32px 48px 60px' }}>
      <Skeleton active />
    </div>
  )
}
