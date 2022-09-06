import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'https://automatenow.io/sandbox-automation-testing-practice-website/',
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    env: {
      login_url: 'https://automatenow.io/sandbox-automation-testing-practice-website/',
      username: '',
      password: ''
    }
  },
})
