import React, { FC } from 'react'
import csses from  './markdown.less'

const M: FC<{ children: string }> = ({ children }) => (
  <div className={`${csses.md} markdown-body`} dangerouslySetInnerHTML={{ __html: children }} />
)

export default M
