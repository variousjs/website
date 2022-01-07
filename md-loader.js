const Marked = require('@acyort/markdown')

const marker = new Marked()

module.exports = async (md) => {
  return marker.render(md)
}
