import React, { Component } from 'react'
import { Store } from '@variousjs/various'
import { Descriptions } from 'antd'

const {
  createStore,
  connect,
  dispatch,
  getStore,
} = new Store()

createStore({ value: 0 })

class X extends Component {
  // 提供 setValue 方法
  static setValue = async (value) => {
    const store = getStore()
    dispatch({ value: value + store.value }, true)
  }

  render() {
    const { user } = this.props.$store
    const { value } = this.props

    return (
      <Descriptions
        style={{ marginTop: 30 }}
        bordered
        title="B"
        size="small"
      >
        <Descriptions.Item label="Store">{user.name}</Descriptions.Item>
        <Descriptions.Item label="Value">{value}</Descriptions.Item>
      </Descriptions>
    )
  }
}

export default connect('value')(X)
