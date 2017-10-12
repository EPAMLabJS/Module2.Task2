'use strict';

class Home {
    constructor() {
        this.url = 'https://vimeo.com/cameo';
        this.openPage = function () {
            return browser.get(this.url);
        };
        this.menuBar = element(by.css('.topnav_menu_desktop_main'));

        this.desktop = element(by.css('#topnav_desktop'));
        this.phonePicture = element(by.css('.phone_picture.animated'));
        this.downloadButton=element(by.css('.button.download'));

        this.allElements = {
            'desktop': '#intro',
            'phonePicture': '.phone_picture.animated',
            'sliding':'.sliding_pictures',
            'video_ctrl':'.video_controls',
            'features':'.features_wrapper',
            'video':'.background_video',
            'soundtracks':'#soundtracks>div.content_wrapper',
            'videolist':'.video_item',
            'creators':'#creators>div>div'
        };

    }
}
module.exports = Home;
