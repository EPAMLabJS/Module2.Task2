'use strict';

class ITunes {
    constructor() {

        this.contentPage=element(by.id('content'));
        this.lastUpdate=element(by.css('.release-date>span:nth-child(2)'));
        this.version=element(by.css('.list>li:nth-child(4)>span:nth-child(2)'));
        this.size=element(by.css('.list>li:nth-child(5)'));
    }
}
module.exports = ITunes;