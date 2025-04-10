import { defineConfig } from 'cypress'

export default defineConfig({
  viewportHeight: 2000,
  viewportWidth: 1920,
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    // Configure your E2E tests here
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,ts}",
    watchForFileChanges: false
  },
  env: {
    "fullName": "Ligija Vitolina",
    "email": "ligijaliva@gmail.com"
  },
  reporter: 'cypress-mochawesome-reporter',
})