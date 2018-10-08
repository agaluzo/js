const expect = require('chai').expect;
const world = require('../../po/world');
const EC = protractor.ExpectedConditions;
const CUSTOM_TIMEOUT = 15 * 1000;
const parser = require('../../step_definitions/utils/poParser');
const utils = require('../../step_definitions/utils/utils');
const MemoryObject = require('../../step_definitions/memory/memory');
const outline = require("../../outline/outline");
const HomePageBlocks = require("../../test_date/homePage.json");

describe("About PAGE", () => {

    beforeEach(async () => {

        // await browser.manage().deleteAllCookies();
        await browser.get(browser.baseUrl);
        console.log("11---1111111111--------------------------------")



    });

    describe("PAGE TITLE AND URL VERIFICATION", () => {





        it(`verify that 'Contact us' label is displayed`, async () => {
            console.log("1-----------------------------------")
            browser.actions().mouseMove(world.HomePage.Header.NewsButton).mouseMove(world.HomePage.ReadMoreButton).click().perform();

        });

    });


});
