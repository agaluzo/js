'use strict';

const BasePage = require("./BasePage");

class AboutPage extends BasePage{
    constructor (){
        super();

        this.ContactLabel = element(by.css(".header-content"));
        this.FirstNameField = element(by.name("first_name"));
        this.SubmitButton = element(by.id("fscf_submit1"));
        this.ErrorMessage = element(by.id("fscf_form_error1"));
        this.Coo = element(by.id("cn-accept-cookie"));






    };
}

module.exports = AboutPage;