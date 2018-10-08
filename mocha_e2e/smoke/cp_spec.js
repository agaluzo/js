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



        await world.HomePage.Header.ContactButton.click()


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
              // browser.executeScript("arguments[0].scrollIntoView();", world.ContactPage.SubmitButton);

await contactButton.click();
const a = await world.ContactPage.ErrorMessage.getText();
return  expect(a).to.be.equal('Please make corrections below and try again.');
                /*contactButton.click().then(() => {
                    return world.ContactPage;
                }).then(contactPage => {
                    return contactPage.ErrorMessage.getText()
                }).then(text => {
                    expect(text).to.be.equal('Please make corrections below and try again.');
                });*/
            });
           // const url = await browser.getCurrentUrl();
/*            const button = world.HomePage.Header.ContactButton
           await button.click();
         //   await contactButton.click();
            const pageTitle = await browser.getTitle();
            const label =  await world.ContactPage.ContactLabel;
            return expect(pageTitle.getText()).to.be.equal('Contact us')*/;


/*        it(`verify that Home Page title is equal to the 'Exadel | Global Enterprise Software & Tech Solutions'`, async () => {
            const pageTitle = await browser.getTitle();

            return expect(pageTitle).to.be.equal('Contact Us | Exadel');
        });*/
    });

    /*    describe("ELEMENTS VISIBILITY", () => {
            outline(HomePageBlocks, (blocks) => {
                it(`${blocks.Block} should be in viewport with all when user is scrolling down`, async () => {
                    outline(blocks.BlockElements, (elements) => {
                        utils.scrollerToTheElement(`HomePage > ${blocks.Block}`);
                        if (elements.EC === "viewport") {
                            utils.isInViewPort(`HomePage > ${elements.Element}`);
                        } else {
                            browser.wait(utils.ECHelper(parser.parser(`HomePage > ${elements.Element}`), `${elements.EC}`), CUSTOM_TIMEOUT, `${elements.Element} is not ${elements.EC}`);
                        }
                    });
                });
            });
        });*/
});
