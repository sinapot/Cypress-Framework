const { downloadFile } = require('cypress-downloadfile/lib/addPlugin');
const { isFileExist, findFiles } = require('cy-verify-downloads');
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://automationpractice.com/index.php',
    experimentalSessionAndOrigin: true,
    failOnStatusCode: false,
    reporter: 'junit',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {downloadFile})
      on('task', { isFileExist, findFiles })
    },
  },
});
