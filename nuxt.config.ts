// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2024-11-01',

  app: {
    head: {
      title: 'Aspiry — Sua marca pessoal, finalmente no lugar certo',
      htmlAttrs: { lang: 'pt-BR' },
      meta: [
        { charset: 'UTF-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        {
          name: 'description',
          content:
            'Envie seu CV e LinkedIn. A Aspiry analisa tudo, encontra seus diferenciais reais e gera os ativos que fazem recrutadores te notarem.',
        },
      ],
      link: [],
    },
  },

  css: ['~/assets/css/main.css'],

  typescript: {
    strict: true,
  },
})
