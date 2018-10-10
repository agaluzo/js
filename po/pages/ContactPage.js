'use strict';

const BasePage = require("./BasePage");

class ContactPage extends BasePage{
    constructor (){
        super();

        this.ContactLabel = element(by.css(".header-content"));
        this.SubmitButton = element(by.id("fscf_submit1"));
        this.ErrorMessage = element(by.id("fscf_form_error1"));


    };
}

module.exports = ContactPage;