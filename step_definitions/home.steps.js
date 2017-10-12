'use strict';
const expect=require('chai').expect;
const world = require('../support/world');
const visible=require('./support/visibility.elements');

module.exports = function () {


    this.Given(/^I am on Home page$/, () => {
        return world.homePage.openPage();
    });

    this.Then(/^'(.*)' should be visible$/, (elem) => {
        return visible.checkVisible(elem).then((result)=>{
            return expect(result).to.equal(true);
        });
    });

    this.Then(/^I scroll down '(.*)' time\(s\)$/, (time) => {
        let counter=200*time;
        return browser.executeScript('window.scrollBy(0,'+counter+')');
    });

    this.Then(/^'(.*)' should be invisible$/, (elem) => {
        return visible.checkVisible(elem).then((result)=>{
            return expect(result).to.equal(false);
        });
    });
};