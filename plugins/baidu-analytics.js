import { useHead } from '#app'

export default defineNuxtPlugin(nuxtApp => {
  useHead({
    script: [
      {
        src: 'https://hm.baidu.com/hm.js?923df49593ecb9d842d76329a97b19ee',
        async: true
      }
    ]
  })
})
