import React, { FC } from 'react'
import './markdown.less'

const M: FC<{ children: string }> = ({ children }) => (
  <div dangerouslySetInnerHTML={{ __html: children }} />
)

export default M
