// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    host: 'localhost',
    port: 3001
  },
  devtools: { enabled: true },
  css: [
    "~/assets/styles/index.scss",
    "vue-final-modal/style.css",
    'animate.css/animate.min.css'
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
    '@formkit/auto-animate/nuxt',
    '@nuxtjs/strapi',
    ['nuxt-mail', {
      message: {
        to: '744929434@qq.com', // 收件人邮箱
      },
      smtp: {
        host: "smtp.qq.com", // SMTP 服务器地址
        port: 25, // SMTP 服务器端口
        auth: {
          user: '744929434@qq.com',
          pass: 'yvutvjifcdbgbeje'
        },
      },
    }],
  ],
  lucide: {
    namePrefix: 'Icon'
  },
  strapi: {
    url: process.env.STRAPI_URL || 'http://localhost:1337',
    prefix: '/api',
    admin: '/admin',
    version: 'v4',
    cookie: {},
    cookieName: 'strapi_jwt'
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1.0",
      title: "FE sujian's Blog",
      meta: [{ name: "description", content: "FE Sujian's Blog" }],
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
    storageKey: 'nuxt-color-mode'
  }
})
