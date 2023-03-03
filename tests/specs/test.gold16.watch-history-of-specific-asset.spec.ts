import OnboardingScreen from "../screenobjects/OnboardingScreen";
import NavItems from "../screenobjects/NavItems";
import PortfolioScreen from "../screenobjects/PortfolioScreen";
import ManualConnectionScreen from "../screenobjects/ConnectionScreens/ManualConnectionScreens";
import MarketsScreen from "../screenobjects/MarketsScreen";
import AssetDetailScreen from "../screenobjects/AssetDetailScreen";

describe("GOLD 16: As a user I want to see my purchase/sell history - specific asset details screen (ads)", () => {
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
      "45796"
    );
  });

  it("should fill in the amount bought of the asset", async () => {
    await ManualConnectionScreen.tapAndSetValue(
      ManualConnectionScreen.manualAmountBought,
      "3"
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

  it("should navigate to 'Markets' tab", async () => {
    await NavItems.tapOnElement(NavItems.marketsTab);
  });

  it("should click on the searchbar", async () => {
    await MarketsScreen.tapOnElement(MarketsScreen.marketsSearchIcon);
  });

  it("should fill in an asset variable and show the results", async () => {
    await NavItems.tapAndSetValue(NavItems.globalSearchInput, "bitcoin");
  });

  it("should wait for the results to appear and click on the right asset (should be first)", async () => {
    await NavItems.isDisplayed(NavItems.globalSearchFirstResult);
    await NavItems.tapOnElement(NavItems.globalSearchFirstResult);
  });

  it("should navigate to the 'Transactions' screen by clicking on the tab", async () => {
    await AssetDetailScreen.tapOnElement(
      AssetDetailScreen.assetDetailTransactionsTab
    );
  });

  it("should leave the 'Transactions' screen", async () => {
    await AssetDetailScreen.tapOnElement(AssetDetailScreen.goBackButton);
  });

  it("should fill in an asset variable and show the results", async () => {
    await NavItems.tapAndSetValue(NavItems.globalSearchInput, "TSLA");
  });

  it("should wait for the results to appear and click on the right asset (should be first)", async () => {
    await NavItems.isDisplayed(NavItems.globalSearchFirstResult);
    await NavItems.tapOnElement(NavItems.globalSearchFirstResult);
  });

  it("should navigate to the 'Transactions' screen by clicking on the tab", async () => {
    await AssetDetailScreen.tapOnElement(
      AssetDetailScreen.assetDetailTransactionsTab
    );
  });

  it("should display no transactions", async () => {
    await AssetDetailScreen.expectToHaveValue(
      AssetDetailScreen.addFirstTransactionText,
      "Add your first TSLA transaction"
    );
  });

  after(async () => {
    driver.deleteAllCookies();
    driver.reset();
  });
});
