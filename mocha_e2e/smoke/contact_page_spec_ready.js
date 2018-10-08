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

        // await browser.manage().deleteAllCookies();
        await browser.get(browser.baseUrl);
        console.log("11---1111111111--------------------------------")

        console.log("1-------111111111111111111111111111111111111111----------------------------")
        await world.HomePage.Header.ContactButton.click()
        console.log("1-------22222222222222----------------------------")

    });

    describe("PAGE TITLE AND URL VERIFICATION", () => {



        it(`verify that 'Contact us' label is displayed`, async () => {

            const con = await world.ContactPage.ContactLabel;

            con.getText().then(text => {

                expect(text).to.be.equal('Contact us');
            });
        });

        it(`verify that 'Contact us' label is displayed`, async () => {

            const contactButton =  await world.ContactPage.SubmitButton;
            await contactButton.click();
            const a = await world.ContactPage.ErrorMessage.getText();
            return  expect(a).to.be.equal('Please make corrections below and try again.');

        });

    });


});
