import React, { FC } from 'react'
import csses from  './markdown.less'

type Data = {
  content: string,
  toc: string,
}

const M: FC<{ data: Data }> = ({ data }) => (
  <div>
    <div
      dangerouslySetInnerHTML={{ __html: data.toc }}
    />
    <div
      className={`${csses.md} markdown-body`} dangerouslySetInnerHTML={{ __html: data.content }}
    />
  </div>
)

export default M
