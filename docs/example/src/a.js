import React from 'react'
import { Card, Button, message } from 'antd'
import { useParams } from 'react-router-dom'

const A = (props) => {
  const { id } = useParams()

  return (
    <div style={{ marginTop: 30 }}>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        actions={[
          <Button
            key="next"
            onClick={() => props.$dispatch('b', 'setValue', 1)}
          >
            B
          </Button>,
          <Button
            key="store"
            type="primary"
            onClick={async () => {
              await props.$dispatch('store', 'setName', `${Math.random().toFixed(2)}`)
              message.info('changed')
            }}
          >
            Store
          </Button>
        ]}
      >
        <Card.Meta
          title="Route Params"
          description={id}
        />
      </Card>
    </div>
  )
}

// 提供 getName 方法
A.getName = (e) => message.info(e)

export default A
