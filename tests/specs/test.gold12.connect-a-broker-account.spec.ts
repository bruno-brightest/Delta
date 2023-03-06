import OnboardingScreen from "../screenobjects/OnboardingScreen";
import NavItems from "../screenobjects/NavItems";
import PortfolioScreen from "../screenobjects/PortfolioScreen";
import dagSiteLoginPage from "../pageobjects/degiroLoginPage";
import BrokerConnectionScreen from "../screenobjects/ConnectionScreens/BrokerConnectionScreen";
import degiroLoginPage from "../pageobjects/degiroLoginPage";
import OnboardingPage from "../Pages/onboarding-page";

/**
 * This test should be run on a device which id is added to Dag Site database
 */
describe("GOLD 12: As a user I want to connect to a broker", () => {
  before(async () => {
    if (driver.isIOS) {
      OnboardingScreen.setSelector("ios");
    } else {
      OnboardingScreen.setSelector("android");
    }
  });

  // it("should open Delta and be able to skip the onboarding", async function () {
  //   await OnboardingPage.skipOnboarding();
  // });

  it("should click the third icon: triangle and redirect to the portfolio screen", async () => {
    await NavItems.isDisplayed(NavItems.portfolioTab);
    await NavItems.tapOnElement(NavItems.portfolioTab);
  });

  /* If device already has a portfolio; change to addOtherPortfolioBtn*/
  it("should click the + icon to add a new Portfolio", async () => {
    if (
      await PortfolioScreen.isDisplayed(PortfolioScreen.addOtherPortfolioBtn)
    ) {
      await PortfolioScreen.tapOnElement(PortfolioScreen.addOtherPortfolioBtn);
    } else {
      await PortfolioScreen.isDisplayed(PortfolioScreen.addFirstPortfolioBtn);
      await PortfolioScreen.tapOnElement(PortfolioScreen.addFirstPortfolioBtn);
    }
  });

  it("should click on the 'Connect Broker Account' option", async () => {
    await PortfolioScreen.tapOnElement(PortfolioScreen.connectBrokerAcc);
  });

  it("should tap and set correct value in the searchbar ", async () => {
    await BrokerConnectionScreen.tapAndSetValue(
      BrokerConnectionScreen.brokerSearchInput,
      "Degiro"
    );
  });

  it("should click on the correct search result (should be first one)", async () => {
    await BrokerConnectionScreen.tapOnElement(
      BrokerConnectionScreen.brokerSearcFirstResult
    );
    await BrokerConnectionScreen.tapOnElement(
      BrokerConnectionScreen.brokerSearcFirstResult
    );
  });

  it("should click 'I Understand' button", async () => {
    await BrokerConnectionScreen.tapOnElement(
      BrokerConnectionScreen.brokerNoticeUnderstandBtn
    );
  });

  it("should fill in correct data for Degiro and click 'Submit'", async () => {
    await degiroLoginPage.isDisplayed(degiroLoginPage.degiroScreen);
    await degiroLoginPage.isDisplayed(degiroLoginPage.degiroUsername);
    await degiroLoginPage.tapAndSetValue(
      degiroLoginPage.degiroUsername,
      "brightestBruno"
    );
    await degiroLoginPage.tapAndSetValue(
      degiroLoginPage.degiroPassword,
      "syksE8-pizpes-xiqmaz!"
    );
    await degiroLoginPage.tapOnElement(degiroLoginPage.degiroSubmitBtn);
  });

  it("should wait for and click on the 'Save & Finish' button", async () => {
    await degiroLoginPage.isDisplayed(degiroLoginPage.degiroAccountBtn);
    await degiroLoginPage.tapOnElement(degiroLoginPage.degiroAccountBtn);

    await degiroLoginPage.isDisplayed(degiroLoginPage.degiroFinish);
    await degiroLoginPage.tapOnElement(degiroLoginPage.degiroFinish);
  });

  it("should wait for and click on the 'confirm & import' button", async () => {
    await degiroLoginPage.isDisplayed(degiroLoginPage.confirmBtn);
    await degiroLoginPage.tapOnElement(degiroLoginPage.confirmBtn);

    await degiroLoginPage.isDisplayed(degiroLoginPage.nextBtn);
    await degiroLoginPage.tapOnElement(degiroLoginPage.nextBtn);

    await degiroLoginPage.isDisplayed(degiroLoginPage.connectionBtn);
    await degiroLoginPage.tapOnElement(degiroLoginPage.connectionBtn);
  });

  it("check connection", async () => {
    await degiroLoginPage.isDisplayed(degiroLoginPage.degiroConnection);
    await degiroLoginPage.tapOnElement(degiroLoginPage.degiroConnection);
  });

  after(async () => {
    driver.deleteAllCookies();
    driver.reset();
  });
});
