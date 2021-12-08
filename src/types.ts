import store from './entry/store'

export type Store = typeof store
export type Config = {
  pages: {
    path: string[] | string,
    components: string[],
  }[],
  menu: {
    name: string,
    path: string,
  }[],
  nav: {
    name: string,
    path?: string,
    children?: {
      name: string,
      path: string,
    }[],
  }[],
}
