const Marked = require('@acyort/markdown')
const toc = require('markdown-toc')

const marker = new Marked()

module.exports = async (md) => {
  const { json } = toc(md)

  return {
    content: marker.render(md),
    toc: json,
  }
}
