const Marked = require('@acyort/markdown')
const toc = require('markdown-toc')

const marker = new Marked()

module.exports = async (md) => {
  const t = marker.render(toc(md).content)

  return {
    content: marker.render(md, {
      getHeadingId(text) {
        return text.toLowerCase().replace(/\./g, '').split(' ').join('-')
      },
    }),
    toc: t,
  }
}
