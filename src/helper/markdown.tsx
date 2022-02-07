import React, { FC } from 'react'
import Icon from '../svg/list.svg'
import csses from  './markdown.less'

type Data = {
  content: string,
  toc: string,
}

const M: FC<{ data: Data }> = ({ data }) => (
  <>
    {
    data.toc ? <div className={csses.toc}>
      <div className={csses.icon}>
        <Icon width="26" height="26" />
      </div>
      <div
        className={`${csses.list} markdown-body`}
        dangerouslySetInnerHTML={{ __html: data.toc }}
      />
    </div> : null
    }
    <div
      className={`${csses.md} markdown-body`}
      dangerouslySetInnerHTML={{ __html: data.content }}
    />
  </>
)

export default M
