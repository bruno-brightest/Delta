import OnboardingScreen from "../screenobjects/OnboardingScreen";
import NavItems from "../screenobjects/NavItems";
import SettingsScreen from "../screenobjects/SettingsScreen";
import MarketsScreen from "../screenobjects/MarketsScreen";
import ManualConnectionScreen from "../screenobjects/ConnectionScreens/ManualConnectionScreens";
import PortfolioScreen from "../screenobjects/PortfolioScreen";

describe("GOLD 15: As a user I want to see my purchase/sell history - settings", () => {
  before(async () => {
    if (driver.isIOS) {
      OnboardingScreen.setSelector("ios");
    } else {
      OnboardingScreen.setSelector("android");
    }
  });

  // it('should open Delta and be able to click \'Let\'s do this!\'', async () => {
  //     await OnboardingScreen.isDisplayed(OnboardingScreen.letsDoThisButton);
  //     await OnboardingScreen.tapOnElement(OnboardingScreen.letsDoThisButton);
  // });

  // it('should click the \'Skip\' button on the top right', async () => {
  //     await OnboardingScreen.isDisplayed(OnboardingScreen.skipTopRightButton);
  //     await OnboardingScreen.tapOnElement(OnboardingScreen.skipTopRightButton);
  // });

  // it('should load the confirmation pup-up for skipping the onboarding', async () => {
  //     await OnboardingScreen.isDisplayed(OnboardingScreen.skipButtonPopUp);
  // })

  // it('should confirm by clicking \'Skip, I\'ll figure out later\'', async () => {
  //     await OnboardingScreen.tapOnElement(OnboardingScreen.skipButtonPopUp);
  // });

  //   it("should wait until the Overview page is loaded", async () => {
  //     await MarketsScreen.isDisplayed(MarketsScreen.deltaLogo);
  //   });
  it("should click the third icon: triangle and redirect to the portfolio screen", async () => {
    await NavItems.tapOnElement(NavItems.portfolioTab);
  });

  it("should click the + icon to add a new Portfolio", async () => {
    await PortfolioScreen.isDisplayed(PortfolioScreen.addOtherPortfolioBtn);
    await PortfolioScreen.tapOnElement(PortfolioScreen.addOtherPortfolioBtn);
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
    await ManualConnectionScreen.sleep(3000);
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

  it("should click on Markets tab", async () => {
    await NavItems.tapOnElement(NavItems.marketsTab);
  });

  it("should open the menu by clicking on the hamburger icon", async () => {
    await NavItems.tapOnElement(NavItems.hamburgerIcon);
  });

  it("should be able to click the settings button", async () => {
    await NavItems.tapOnElement(NavItems.settingsIcon);
  });

  // it("should scroll down until 'Devices & Data ' is visible", async () => {
  //   await SettingsScreen.swipeUp();
  // });

  it("should click on 'Devices & Data' option", async () => {
    //await SettingsScreen.swipeUp();
    //if
    await SettingsScreen.tapOnElement(SettingsScreen.devicesDataBtn);
  });

  it("should click on the 'Full Transaction History' button", async () => {
    await SettingsScreen.tapOnElement(SettingsScreen.fullTransactionHistoryBtn);
  });

  it("should direct to a screen containing all the transactions", async () => {
    await SettingsScreen.waitForElement(SettingsScreen.firstTransactionItem);
  });

  it("should display the previously made transaction and click on it", async () => {
    await SettingsScreen.tapOnElement(SettingsScreen.firstTransactionItem);
  });

  it("should edit the bought amount", async () => {
    await ManualConnectionScreen.tapAndSetValue(
      ManualConnectionScreen.manualAmountBought,
      "5"
    );
  });

  it("should click on 'Update Transaction'", async () => {
    await ManualConnectionScreen.tapOnElement(
      ManualConnectionScreen.manualTransactionAddBtn
    );
  });

  it("should close the edit transaction screen", async () => {
    await ManualConnectionScreen.sleep(3000);
    await ManualConnectionScreen.tapOnElement(
      ManualConnectionScreen.closeEditTransactionScreenBtn
    );
  });

  it("should navigate back  'Full Transaction History' to refresh the transaction item", async () => {
    await SettingsScreen.tapOnElement(SettingsScreen.fullTransactionHistoryBtn);
  });

  it("should check wether the transaction item details are updated", async () => {
    await SettingsScreen.sleep(3000);
    await SettingsScreen.isDisplayed(SettingsScreen.firstTransactionItem);
    await SettingsScreen.expectToHaveValue(
      SettingsScreen.firstTransactionBottomText,
      "5"
    );
  });

  after(async () => {
    driver.deleteAllCookies();
    driver.reset();
  });
});
