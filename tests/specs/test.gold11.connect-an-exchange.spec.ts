import SelectorsGold11 from "../ios/screenobjects/locatorsGold11";
import PortfolioScreen from "../screenobjects/PortfolioScreen";
import OnboardingPage from "../Pages/onboarding-page";

describe("GOLD 11: As a user I want to connect to exchange account", () => {
  before(async () => {
    if (driver.isIOS) {
      SelectorsGold11.setSelector("ios");
    } else {
      SelectorsGold11.setSelector("android");
    }
  });

  // it("should open Delta and be able to skip the onboarding", async function () {
  //   await OnboardingPage.skipOnboarding();
  // });

  it("should click the third icon: triangle and redirect to the portfolio screen", async () => {
    await SelectorsGold11.tapOnElement(SelectorsGold11.portfolioTab);
  });

  /* If device already has an portfolio, change to: addOtherPortfolioBtn*/
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

  it("should click on the 'Connect Exchange Account' option", async () => {
    await SelectorsGold11.tapOnElement(SelectorsGold11.connectExchangeAcc);
  });

  it("should click on the 'Gemini' option", async () => {
    await SelectorsGold11.waitForElement(SelectorsGold11.binanceExchangeLink);
    // await SelectorsGold11.swipeUp();
    // await SelectorsGold11.swipeUp();
    // await SelectorsGold11.swipeUp();
    await SelectorsGold11.tapOnElement(SelectorsGold11.geminiExchangeLink);
  });

  it("should click on the 'I Understand' button on the API Notice page", async () => {
    await SelectorsGold11.tapOnElement(
      SelectorsGold11.apiLimitationNoticeIUnderstand
    );
  });

  it("should fill in the correct connection name", async () => {
    await SelectorsGold11.tapAndSetValue(
      SelectorsGold11.exchangeConnectionName,
      "testConnectGemini"
    );
  });

  it("should fill in the correct connection 'API Key'", async () => {
    await SelectorsGold11.tapAndSetValue(
      SelectorsGold11.exchangeConnectionKeyInput,
      "account-YHHYRruTYxnkSxTWbQzA"
    );
  });

  it("should fill in the correct connection 'API Secret'", async () => {
    await SelectorsGold11.tapAndSetValue(
      SelectorsGold11.exchangeConnectionSecretInput,
      "fPJs5UdPy2XJ9dEhUikJkMrrk9G"
    );
    await SelectorsGold11.tapOnElement(SelectorsGold11.emptyTap);
  });

  it("should click the 'Import settings' link", async () => {
    await SelectorsGold11.tapOnElement(
      SelectorsGold11.exchangeConnectionImportOptions
    );
  });

  it("should click the 'Import all transactions' option", async () => {
    await SelectorsGold11.tapOnElement(SelectorsGold11.importAllTransactions);
  });

  it("should click the 'Add Connection' button", async () => {
    await SelectorsGold11.tapOnElement(
      SelectorsGold11.exchangeConnectionAddButton
    );
  });

  it("should load and connect to Gemini, exchange connection is now 1", async () => {
    await SelectorsGold11.waitForElement(
      SelectorsGold11.exchangesConnectionAmount
    );
    await SelectorsGold11.expectToHaveValue(
      SelectorsGold11.exchangesConnectionAmount,
      "1 connected"
    );
  });

  after(async () => {
    driver.deleteAllCookies();
    driver.reset();
  });
});
