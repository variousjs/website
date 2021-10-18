import React, { FC } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/dist/esm/styles/prism'

type P = {
  code: string,
  language: string,
}

const H: FC<P> = (props) => {
  const { code, language } = props
  return (
    <SyntaxHighlighter customStyle={{ marginBottom: 30 }} language={language} style={base16AteliersulphurpoolLight}>
      {code}
    </SyntaxHighlighter>
  )
}

export default H
