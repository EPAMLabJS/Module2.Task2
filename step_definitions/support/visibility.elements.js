/**
 * Created by olga on 7.12.16.
 */
const world = require('../../support/world');
const expect=require('chai').expect;

module.exports.checkVisible = function (elem) {
    let elmTop;
    let elmButtom;
    let screenSize;
    let elmts=world.homePage.allElements;
    let found;

    for (let key in elmts){
        if (key==elem){
            found=elmts[key];
        }
    };
    browser.executeScript('return window.innerHeight').then((num)=>{
        screenSize=num;
    });
    return browser.executeScript("return document.querySelector('"+found+"').getBoundingClientRect()")
        .then((size)=>{
            elmButtom=size.bottom;
            elmTop=size.top;
            if ((elmTop<0)&&(elmButtom<screenSize)){
                return false;
            } else{
                return true;
            }
        });
};

