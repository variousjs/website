const rehype = require('rehype')
const RehypeHighlight = require('rehype-highlight')
const unified = require('unified')
const RemarkParse = require('remark-parse')
const RemarkHTML = require('remark-html')

module.exports = async (md) => {
  const html = await unified()
    .use(RemarkParse)
    .use(RemarkHTML)
    .process(md)

  const parseHtml = await rehype()
    .data('settings', { fragment: true })
    .use(RehypeHighlight)
    .process(String(html))

  return String(parseHtml)
}
