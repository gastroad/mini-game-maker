import { defineConfig } from 'cypress'

export default defineConfig({
  component: {
    "supportFile": false,
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
  e2e: {
    baseUrl: 'http://localhost:3000',
  },

})