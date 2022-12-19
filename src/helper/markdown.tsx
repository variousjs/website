import React, { FC } from 'react'
import csses from  './markdown.less'

type Data = {
  content: string,
  toc: string,
}

const M: FC<{ data: Data }> = ({ data }) => (
  <>
    <div
      className={`${csses.md} markdown-body`}
      dangerouslySetInnerHTML={{ __html: data.content }}
    />
    {
    data.toc ? <div className={csses.toc}>
      <div
        className={`${csses.list} markdown-body`}
        dangerouslySetInnerHTML={{ __html: data.toc }}
      />
    </div> : null
    }
  </>
)

export default M
