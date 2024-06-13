import { Config } from 'next-i18n-router/dist/types'

const i18nConfig: Config = {
  locales: ['en', 'fr', 'es'],
  defaultLocale: 'en',
  serverSetCookie: 'never',
}

export default i18nConfig
