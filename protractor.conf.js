//var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

// An example configuration file
exports.config = {
    // The address of a running selenium server.
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'firefox'
    },


    specs: ['spec1.js']

};

