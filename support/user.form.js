'use strict';

class UserForm{
    constructor(){
        this.userMenu=element(by.css('#topnav_menu_avatar'));
        this.logout=element(by.css('.topnav_desktop_menu_items_dropdown_item_log_out'));
    }
}
module.exports=UserForm;