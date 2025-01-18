const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '6z8smf',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity: false,
    testIsolation:false,
    viewportWidth: 1900, 
    viewportHeight: 1200,
    defaultCommandTimeout: 200000,
    pageLoadTimeout:90000,
  },
});
