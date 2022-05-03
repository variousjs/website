export default {
  async setName({ emit, getStore }, { value }) {
    const next = await new Promise((r) => setTimeout(r, 1000, value))
    const { user } = getStore()
    user.name = next
    emit({ user })
  },
  // 虽然能够直接通过 $store 数据，但这里还是可以进行一些简单数据处理
  async getName({ getStore }) {
    const { user } = getStore()
    return user.name
  },
}
