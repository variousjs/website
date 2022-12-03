# 国际化

VariousJS 自带国际化功能，且使用起来非常简单

<!-- toc -->

## 定义语言及语言包

组件使用国际化功能前必须先定义当前语言及对应多语言文案

### 语言包 JSON 例子

```json
{
  "title": "Title",
  "hello": "Hello, {name}, {name2}"
}
```

### 主体组件 store 定义当前语言

```ts
export default {
  locale: 'zh',
}
```

### 主体组件 actions 定义语言切换获取方法

```ts
import { Actions } from '@variousjs/various'
import { Store } from './types'

const actions: Actions<Store> = {
  async setLocale({ emit }, { value }) {
    emit({ locale: value })
  },

  async getLocale({ getStore }) {
    return getStore().locale
  },
}

export default actions
```

### 组件定义国际化配置

```ts
import React, { Component, FC } from 'react'
import { Ii8n } from '@variousjs/various'
import Zh from './i18n/zh.json'
import En from './i18n/en.json'

// Class Component
export class C extends Component {
  static $i18n: Ii8n = () => ({
    localeKey: 'locale', // 指定语言 key，对应 store 字段
    resources: { // 指定国际化语言
      zh: Zh,
      en: En,
    },
  })

  render() {
    // ...
  }
}

// FC
const F: FC & { $i18n: Ii8n } = () => {
  return (
    // ...
  )
}
F.$i18n = () => ({
  localeKey: 'locale',
  resources: {
    zh: Zh,
    en: En,
  },
})

export const T = F
```

## 展示多语言

定义好语言及多语言后，就可以使用多语言函数了

```ts
type $t = (key: string, params?: Record<string, string | number>) => string | undefined
```

### 例子
