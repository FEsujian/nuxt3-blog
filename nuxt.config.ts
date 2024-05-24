/** @format */

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    host: '0.0.0.0',
    port: 3001,
  },
  devtools: { enabled: true },
  css: [
    '~/assets/styles/index.scss',
    'vue-final-modal/style.css',
    'animate.css/animate.min.css',
  ],
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt-lucide-icons',
    'nuxt-icon',
    'nuxt-particles',
    '@nuxt/content',
    'floating-vue/nuxt',
    '@formkit/auto-animate/nuxt',
    '@nuxtjs/strapi',
    [
      'nuxt-mail',
      {
        message: {
          to: '744929434@qq.com', // 收件人邮箱
        },
        smtp: {
          host: 'smtp.qq.com', // SMTP 服务器地址
          port: 25, // SMTP 服务器端口
          auth: {
            user: '744929434@qq.com',
            pass: 'yvutvjifcdbgbeje',
          },
        },
      },
    ],
  ],
  lucide: {
    namePrefix: 'Icon',
  },
  strapi: {
    url: process.env.STRAPI_URL || 'http://localhost:1337',
    prefix: '/api',
    admin: '/admin',
    version: 'v4',
    cookie: {},
    cookieName: 'strapi_jwt',
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0',
      title: "FEsujian前端技术",
      meta: [{ name: 'description', content: "FESujian" }],
    },
  },
  colorMode: {
    preference: 'system',
    fallback: 'light',
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'nuxt-color-mode',
  },
  i18n: {
    strategy: 'prefix_and_default', // 添加路由前缀的方式
    locales: ['en', 'zh'], //配置语种
    defaultLocale: 'zh', // 默认语种
    vueI18n: './i18n.config.ts', // 通过vueI18n配置
  },
})
