'use strict';

class LoginForm{
    constructor(){
        this.loginForm=element(by.css('.flip_box_card.js-toggles.login_form.front')).$('#login_form');
        this.password=this.loginForm.$('#login_password');
        this.email=this.loginForm.$('#signup_email');
        this.loginButton=this.loginForm.$('.iris_btn.iris_btn--lg.iris_btn--positive');
    }
}
module.exports=LoginForm;