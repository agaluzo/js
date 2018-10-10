const expect = require('chai').expect;
const world = require('../../po/world');
const EC = protractor.ExpectedConditions;
const CUSTOM_TIMEOUT = 15 * 1000;
const parser = require('../../step_definitions/utils/poParser');
const utils = require('../../step_definitions/utils/utils');
const MemoryObject = require('../../step_definitions/memory/memory');
const outline = require("../../outline/outline");
const HomePageBlocks = require("../../test_date/homePage.json");

describe("HOME PAGE", () => {

    beforeEach(async () => {

         await browser.manage().deleteAllCookies();
        await browser.get(browser.baseUrl);
        await world.HomePage.Header.ContactButton.click()

    });

    describe("Contact page VERIFICATION", () => {


        it(`verify that 'Contact us' label is displayed`, async () => {
            const con = await world.ContactPage.ContactLabel;
            con.getText().then(text => {
                expect(text).to.be.equal('Contact us');
            });
        });

        it(`verify error message`, async () => {

            const contactButton =  await world.ContactPage.SubmitButton;
            browser.executeScript("arguments[0].scrollIntoView();", world.ContactPage.SubmitButton);
            contactButton.click();
            const a =  world.ContactPage.ErrorMessage;
            const error = await  a.getText();
            return  expect(error).to.be.equal('Please make corrections below and try again.');

        });

    });


});
