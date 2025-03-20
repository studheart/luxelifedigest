import { defineNuxtConfig } from 'nuxt/config'
import { repositoryName } from './slicemachine.config.json'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4
  },

  devtools: { enabled: true },

  app: {
    head: {
      title: 'Luxe Life Digest - Your Ultimate Blog',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Discover the best in lifestyle, travel, and wellness with Luxe Life Digest.'
        },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
    }
  },

  css: [
    '~/styles/global.css',
    '@fontsource/inter/400.css',
    '@fontsource/inter/600.css',
    '@fontsource/libre-baskerville/400.css',
    '@fontsource/libre-baskerville/400-italic.css',
    '@fontsource/libre-baskerville/700.css'
  ],

  modules: [
    '@nuxtjs/prismic',
    '@nuxtjs/tailwindcss'
  ],

  prismic: {
    endpoint: `https://${repositoryName}.cdn.prismic.io/api/v2`,
    preview: '/api/preview',
    clientConfig: {
      routes: [
        {
          type: "page",
          path: "/:uid",
        },
        {
          type: "article",
          path: "/articles/:uid",
        },
      ]
    }
  },

  compatibilityDate: '2025-01-06',
})
