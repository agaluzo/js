const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const should = chai.should();

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
        await browser.manage().deleteAllCookies();
        await browser.get(browser.baseUrl);

    });

    describe("About PAGE", () => {


        it(`Verify length of About drop-down`, async () => {
            browser.executeScript("arguments[0].style.backgroundColor = '" + "red" + "'", world.HomePage.Header.AboutButton)
            browser.actions().mouseMove(world.HomePage.Header.AboutButton).perform();
            const items = await world.HomePage.Header.AboutDropdownItems;
            return items.should.have.lengthOf(4);
        });

        it(`Verify that About drop-down contains Career option`, async () => {
            browser.executeScript("arguments[0].style.backgroundColor = '" + "red" + "'", world.HomePage.Header.AboutButton)
            browser.actions().mouseMove(world.HomePage.Header.AboutButton).perform();
            const items = world.HomePage.Header.AboutDropdownItems;
            const text = await items.getText()
            console.log(text)
            return text.should.to.contain("Careers");

        });

    });


});
