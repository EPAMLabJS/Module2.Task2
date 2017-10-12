/**
 * Created by Volha_Shut on 12/7/2016.
 */
'use strict';
const path = require("path");
exports.config = {
    directConnect: true,
    // Base URL for application server
    baseUrl: 'https://vimeo.com/cameo',
    capabilities: {
        browserName: 'chrome',
        platform: "Windows 10",
        maxDuration: 10800
    },
    specs: [
        './features/*.feature'
    ],
    onPrepare: function () {
        browser.waitForAngularEnabled(false); //if your app is not angular
        browser.driver.manage().window().maximize(); //full screen mode
    },
    cucumberOpts: {
        require: [path.resolve('./step_definitions/**.js')],
        format: ['json:output/cucumber.json'],
        tags: ['@important']
    },
    allScriptsTimeout: 200000,
    getPageTimeout: 100000,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework')
};