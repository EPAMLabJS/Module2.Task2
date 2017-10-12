'use strict';

class JoinForm{
    constructor(){
        this.joinForm=element(by.css('.flip_box_card.js-toggles.join_form.front')).$('#join_form');
        this.flName=element(by.id('signup_name'));
        this.password=element(by.id('signup_password'));
        this.email=this.joinForm.$('#signup_email');
        this.joinButton=this.joinForm.$('.iris_btn.iris_btn--lg.iris_btn--positive');
    }
}
module.exports=JoinForm;
