import { defineNuxtConfig } from 'nuxt'
const webpack = require('webpack')

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  builder: 'webpack',
  css: [
    'vue-toastification/dist/index.css'
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],
  },
  define: {
    'process.env': {}
  },
  hooks: {
    'webpack:config'(configs) {
      configs[0].resolve.fallback = {
        assert: require.resolve('assert/'),
        stream: require.resolve('stream-browserify'),
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
        os: require.resolve('os-browserify/browser'),
        url: require.resolve('url/'),
      }
      configs[0].plugins.push(
        new webpack.ProvidePlugin({
          process: 'process/browser',
        }),
      )
      configs[0].plugins.push(
        new webpack.ProvidePlugin({
          Buffer: ['buffer', 'Buffer'],
        }),
      )
    },
  },
  meta: {
    link: [
      { // Bootstrap
        //rel: "stylesheet",
        //href: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
      }
    ],
    script: [
      {
        //src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
      }
    ]
  },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss'
  ],
  target: "static"
})
