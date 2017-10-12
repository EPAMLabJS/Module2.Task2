'use strict';

class Intro{
    constructor(){
        this.url='https://vimeo.com/cameo';
        this.openPage=function () {
           return browser.get(this.url);
        };
        this.menuBar=element(by.css('.topnav_menu_desktop_main'));
        this.joinButton=this.menuBar.$$('.topnav_menu_join.js-topnav_menu_auth').first();

        this.loginButton=this.menuBar.$('.topnav_desktop_menu_items:nth-child(2)');
    }
}
module.exports=Intro;