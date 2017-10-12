'use strict';
const world = require('../support/world');

module.exports = function () {
    const DEFAULT_STEP_TIMEOUT = 60 * 1000;
    this.setDefaultTimeout(DEFAULT_STEP_TIMEOUT);
    const EC = protractor.ExpectedConditions;

    this.Before({tags: ['@logged']}, () => {
        return world.introPage.openPage()
            .then(() => {
                 world.introPage.loginButton.click();
                return browser.wait(EC.visibilityOf(world.loginForm.loginForm), DEFAULT_STEP_TIMEOUT);
            }).then(() => {
                return world.loginForm.email.sendKeys('testingcucumber@gmail.com');
            }).then(() => {
                return world.loginForm.password.sendKeys('12345qwerty');
            }).then(() => {
                return world.loginForm.loginButton.click();
            }).then(()=>{
                return browser.wait(EC.visibilityOf(world.userForm.userMenu), DEFAULT_STEP_TIMEOUT);
            });
    });

    this.After({tags: ['@logout']}, () => {
        return world.introPage.openPage()
            .then(() => {
                return browser.actions().mouseMove(world.userForm.userMenu).perform()
            }).then(() => {
                return world.userForm.logout.click();
            }).then(() => {
                return browser.sleep(3000);
            });

    });

};