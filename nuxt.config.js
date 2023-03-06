export default {
  server: {
    host: '0.0.0.0'
  },

    head: {
      htmlAttrs: {
        lang: 'ru'
      },
      title: 'Сервис кузовного ремонта в Томске',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Компания - Autoshic, специализируется, на кузовном ремонте легковых автомобилей. В нашу команду, проходят специалисты с многолетним опытом, для того чтобы мы могли гарантировать качество нашим клиентам.' },
        { name: 'keywords', content: 'автосервис, кузовной ремонт, ремонт машин, томск, автосервис в томске, ремонт машин в томске, кузовной ремонт в томске' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      script: [
        {
          hid: 'captcha', 
          src: 'https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit',
          async: true,
          defer: true,
        },
        {
          hid: 'scrollTrigger',
          src: 'https://cdnjs.cloudflare.com/ajax/libs/ScrollTrigger/1.0.6/ScrollTrigger.min.js'
        },
        {
          hid: 'gsap',
          src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js'
        },
      ]
    },

    css: [
      '@/assets/styles/fonts.scss',
      '@/assets/styles/default.scss',
      '@/assets/styles/containers.scss',
    ],

    plugins: [
    ],

    components: true,

    buildModules: [
    ],

    modules: [
      [
        '@nuxtjs/yandex-metrika', { 
          id: '92587720',
           webvisor: true 
        }
      ],
      '@nuxtjs/robots',
      '@nuxtjs/sitemap',
    ],


    axios: {
      baseURL: '/',
    },

    build: {
      transpile: ['gsap']
    },

    loading: '~/components/default/loading.vue',

    serverMiddleware: [
    // Will register file from project server-middleware directory to handle /server-api/* requests
      { path: "/server-api", handler: "~/server-middleware/index.js" },
    ],
}
