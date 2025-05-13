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
    'nuxt-particles',
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

  plugins: [
    '~/plugins/baidu-analytics.js'
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
      title: "立虎科技 - 专业的软件开发与数字化转型服务商",
      meta: [
        { name: 'description', content: "立虎科技是专注于企业数字化转型的软件开发服务商，提供企业级应用开发、移动应用、Web开发等全方位技术服务，助力企业提升运营效率和竞争力。" },
        { name: 'keywords', content: "立虎科技,软件开发,企业级应用,移动应用开发,数字化转型,西安软件公司" },
        { property: 'og:title', content: "立虎科技 - 专业的软件开发与数字化转型服务商" },
        { property: 'og:description', content: "立虎科技是专注于企业数字化转型的软件开发服务商，提供企业级应用开发、移动应用、Web开发等全方位技术服务，助力企业提升运营效率和竞争力。" },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://www.lihutech.com' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: "立虎科技 - 专业的软件开发与数字化转型服务商" },
        { name: 'twitter:description', content: "立虎科技是专注于企业数字化转型的软件开发服务商，提供企业级应用开发、移动应用、Web开发等全方位技术服务。" },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
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

  compatibilityDate: '2024-09-27',
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ["legacy-js-api"],
        },
      },
    },
  }
})