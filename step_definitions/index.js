'use strict';
const expect=require('chai').expect;
const world = require('../support/world');
const EC = protractor.ExpectedConditions;
const DEFAULT_STEP_TIMEOUT = 60 * 1000;

module.exports = function () {

    this.Given(/^I am on Intro page$/, () => {
        return world.introPage.openPage();
    });

    this.Then(/^I click "(.*)" button$/, () => {
        return world.introPage.joinButton.click();
    });

    this.Then(/^"(.*)" form should be visible$/, () => {
        return browser.wait(EC.visibilityOf(world.joinForm.joinForm), DEFAULT_STEP_TIMEOUT);
    });

    this.Then(/^I enter first and last name$/, () => {
        return world.joinForm.flName.sendKeys('John John');
    });
    this.Then(/^I enter email address$/, () => {
        let now = new Date();
        return world.joinForm.email.sendKeys('test'+now.getTime()+'@gmail.com');
    });
    this.Then(/^I enter password$/, () => {
        return world.joinForm.password.sendKeys('12345qwerty');
    });
    this.Then(/^I click Join with email button/, () => {
        return world.joinForm.joinButton.click();
    });

    this.Then(/^I click Download button$/, () => {
        return world.homePage.downloadButton.click();
    });

    this.Then(/^Page title should be "(.*)"$/, (title) => {
       return browser.getTitle().then((text)=>{
           return expect(text).to.equal(title);
        });
    });



};