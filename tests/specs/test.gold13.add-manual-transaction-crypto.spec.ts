import OnboardingScreen from "../screenobjects/OnboardingScreen";
import NavItems from "../screenobjects/NavItems";
import PortfolioScreen from "../screenobjects/PortfolioScreen";
import ManualConnectionScreen from "../screenobjects/ConnectionScreens/ManualConnectionScreens";

describe("GOLD 13: As a user I want to add manual transaction", () => {
  before(async () => {
    if (driver.isIOS) {
      OnboardingScreen.setSelector("ios");
    } else {
      OnboardingScreen.setSelector("android");
    }
  });

  // it('should open Delta and be able to click \'Let\'s do this!\'', async () => {
  //     if(await OnboardingScreen.isDisplayed(OnboardingScreen.letsDoThisButton)) {
  //         await OnboardingScreen.tapOnElement(OnboardingScreen.letsDoThisButton);
  //     }
  // });

  // it('should click the \'Skip\' button on the top right', async () => {
  //     if(await OnboardingScreen.isDisplayed(OnboardingScreen.skipTopRightButton)) {
  //         await OnboardingScreen.tapOnElement(OnboardingScreen.skipTopRightButton);
  //     }
  // });

  // it('should load the confirmation pup-up for skipping the onboarding', async () => {
  //     await OnboardingScreen.isDisplayed(OnboardingScreen.skipButtonPopUp);
  // })

  // it('should confirm by clicking \'Skip, I\'ll figure out later\'', async () => {
  //     if(await OnboardingScreen.isDisplayed(OnboardingScreen.skipButtonPopUp)) {
  //         await OnboardingScreen.tapOnElement(OnboardingScreen.skipButtonPopUp)
  //     }
  // });

  it("should click the third icon: triangle and redirect to the portfolio screen", async () => {
    await NavItems.tapOnElement(NavItems.portfolioTab);
  });

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

  it("should click on the 'Add Manual Transaction' option", async () => {
    await PortfolioScreen.tapOnElement(PortfolioScreen.connectManually);
  });

  it("should choose the Crypto asset type for manual connection", async () => {
    await ManualConnectionScreen.tapOnElement(
      ManualConnectionScreen.manualConnectionCrypto
    );
  });

  it("should click and search for an Crypto asset to be added", async () => {
    await ManualConnectionScreen.tapAndSetValue(
      ManualConnectionScreen.manualConnectionSearchInput,
      "BTC"
    );
  });

  it("should click the first option", async () => {
    await ManualConnectionScreen.isDisplayed(
      ManualConnectionScreen.searchAssetListItemFirst
    );
    await ManualConnectionScreen.tapOnElement(
      ManualConnectionScreen.searchAssetListItemFirst
    );
  });

  it("should click 'Trading Pair' option on the Manual Transaction Config Screen", async () => {
    await ManualConnectionScreen.tapOnElement(
      ManualConnectionScreen.manualTransactionTradingPair
    );
  });

  it("should search for 'BTC/EUR' trading pair", async () => {
    await ManualConnectionScreen.tapAndSetValue(
      ManualConnectionScreen.tradingPairSearchInput,
      "EUR"
    );
  });

  it("should click on the first result", async () => {
    await ManualConnectionScreen.tapOnElement(
      ManualConnectionScreen.tradingPairBTCforEUR
    );
  });

  it("should fill in the buy price of the asset", async () => {
    await ManualConnectionScreen.tapAndSetValue(
      ManualConnectionScreen.manualBuyPrice,
      "15000"
    );
  });

  it("should fill in the amount bought of the asset", async () => {
    await ManualConnectionScreen.tapAndSetValue(
      ManualConnectionScreen.manualAmountBought,
      "2"
    );
  });

  it("should click on the 'Add Transaction' button", async () => {
    await ManualConnectionScreen.tapOnElement(
      ManualConnectionScreen.manualTransactionAddBtn
    );
  });

  it("should click on the 'I'm done' button", async () => {
    await ManualConnectionScreen.tapOnElement(ManualConnectionScreen.imDoneBtn);
  });

  it("should navigate to 'Portfolio' tab", async () => {
    await NavItems.tapOnElement(NavItems.portfolioTab);
  });

  it("should display the portfolio value and the add button is for a not-first connection", async () => {
    await PortfolioScreen.isDisplayed(PortfolioScreen.addOtherPortfolioBtn);
  });

  after(async () => {
    driver.deleteAllCookies();
    driver.reset();
  });
});
