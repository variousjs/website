import React from 'react'
import { Alert } from 'antd'

export default function Error({ $message, $type }) {
  return (
    <Alert
      message="Error"
      description={`[${$type}]: ${$message || '组件错误'}`}
      type="error"
      style={{ marginTop: 30 }}
    />
  )
}
