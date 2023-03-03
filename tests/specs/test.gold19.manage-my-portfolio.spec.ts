import OnboardingScreen from "../screenobjects/OnboardingScreen";
import PortfolioScreen from "../screenobjects/PortfolioScreen";
import ManualConnectionScreen from "../screenobjects/ConnectionScreens/ManualConnectionScreens";

describe("GOLD 19: As a user I want to be able to manage my portfolio", () => {
  before(async () => {
    if (driver.isIOS) {
      OnboardingScreen.setSelector("ios");
    } else {
      OnboardingScreen.setSelector("android");
    }
  });

  /**
   * Begin of Delta loading screen (YES flow)
   */
  it("should open Delta and be able to click 'Let's Do This'", async () => {
    await OnboardingScreen.isDisplayed(OnboardingScreen.letsDoThisButton);
    await OnboardingScreen.tapOnElement(OnboardingScreen.letsDoThisButton);
  });

  it("should load the YES / NO view", async () => {
    await OnboardingScreen.isDisplayed(
      OnboardingScreen.yesToTrackInvestmentsButton
    );
  });

  it("should be able to click 'Yes'", async () => {
    await OnboardingScreen.tapOnElement(
      OnboardingScreen.yesToTrackInvestmentsButton
    );
  });

  it("should be able to click 'Add a transaction manually'", async () => {
    await OnboardingScreen.isDisplayed(OnboardingScreen.addManualTransaction);
    await OnboardingScreen.tapOnElement(OnboardingScreen.addManualTransaction);
  });

  it("should load the 'Asset Type'", async () => {
    await OnboardingScreen.isDisplayed(OnboardingScreen.addCrypto);
  });

  it("should be able to click 'Crypto'", async () => {
    await OnboardingScreen.tapOnElement(OnboardingScreen.addCrypto);
  });

  it("should be able to fill in 'BTC'", async () => {
    await OnboardingScreen.tapAndSetValue(OnboardingScreen.searchBar, "BTC");
  });

  it("should click the first option", async () => {
    await OnboardingScreen.tapOnElement(OnboardingScreen.firstSearchResult);
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
      "25000"
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

  // it("should click on the 'I'm done' button", async () => {
  //   await ManualConnectionScreen.tapOnElement(ManualConnectionScreen.imDoneBtn);
  // });

  it("should wait for 'Let's explore Delta' button and click on it", async () => {
    await OnboardingScreen.isDisplayed(OnboardingScreen.continueOnboardingBtn);
    await OnboardingScreen.tapOnElement(OnboardingScreen.continueOnboardingBtn);
  });

  it("should open the portfolio screen containing the previously made transaction", async () => {
    await PortfolioScreen.isDisplayed(PortfolioScreen.portfolioValueTextView1);
    await PortfolioScreen.tapOnElement(PortfolioScreen.portfolioValueTextView1);
  });
  /**
   * End of Delta loading screen
   */

  it("should click the + icon to add a new Portfolio", async () => {
    await PortfolioScreen.isDisplayed(PortfolioScreen.addOtherPortfolioBtn);
    await PortfolioScreen.tapOnElement(PortfolioScreen.addOtherPortfolioBtn);
  });

  it("should click on the 'Add Manual Transaction' option", async () => {
    await PortfolioScreen.tapOnElement(PortfolioScreen.connectManually);
  });

  it("should choose the Stock asset type for manual connection", async () => {
    await ManualConnectionScreen.tapOnElement(
      ManualConnectionScreen.manualConnectionStocks
    );
  });

  it("should click and search for an Crypto asset to be added", async () => {
    await ManualConnectionScreen.tapAndSetValue(
      ManualConnectionScreen.manualConnectionSearchInput,
      "AAPL"
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

  it("should fill in transaction details and finish the transaction", async () => {
    await ManualConnectionScreen.tapAndSetValue(
      ManualConnectionScreen.adjustedBuyPriceStocks,
      "4592"
    );
    await ManualConnectionScreen.tapAndSetValue(
      ManualConnectionScreen.amountBoughtStocks,
      "1"
    );
  });

  it("should finish the transaction", async () => {
    await ManualConnectionScreen.tapOnElement(
      ManualConnectionScreen.manualTransactionAddBtn
    );
  });

  it("should click on 'I'm done' button", async () => {
    await ManualConnectionScreen.isDisplayed(ManualConnectionScreen.imDoneBtn);
    await ManualConnectionScreen.tapOnElement(ManualConnectionScreen.imDoneBtn);
  });

  it("should display stocks transactions grouped together on the 'PortfolioScreen'", async () => {
    await PortfolioScreen.isDisplayed(PortfolioScreen.stocksHeaderText);
    await PortfolioScreen.expectToHaveValue(
      PortfolioScreen.stocksHeaderText,
      "STOCKS"
    );
  });

  it("should navigate and display crypto transactions grouped together on the 'PortfolioScreen'", async () => {
    await PortfolioScreen.tapOnElement(
      PortfolioScreen.portfolioPreviousScreenBtn
    );
    await PortfolioScreen.sleep(3000);
    await PortfolioScreen.isDisplayed(PortfolioScreen.cryptoHeaderText);
    await PortfolioScreen.expectToHaveValue(
      PortfolioScreen.cryptoHeaderText,
      "CRYPTO"
    );
  });

  it("should display the filter options after clicking on the filter button", async () => {
    await PortfolioScreen.tapOnElement(
      PortfolioScreen.portfolioFilterOptionsBtn
    );
    await PortfolioScreen.sleep(2000);
    await PortfolioScreen.tapOnElement(PortfolioScreen.cryptoHeaderText);
  });

  it("should be able to type in the searchbar", async () => {
    await PortfolioScreen.tapOnElement(
      PortfolioScreen.portfolioFilterHoldingsBtn
    );
    await PortfolioScreen.tapAndSetValue(
      PortfolioScreen.portfolioFilterOptionsInput,
      "test holdings filter"
    );
    await PortfolioScreen.tapOnElement(
      PortfolioScreen.portolioFilterHoldingsCancelBtn
    );
  });

  it("should be able to connect a new portfolio (all options are available)", async () => {
    await PortfolioScreen.isDisplayed(PortfolioScreen.addOtherPortfolioBtn);
    await PortfolioScreen.tapOnElement(PortfolioScreen.addOtherPortfolioBtn);
    await PortfolioScreen.isDisplayed(PortfolioScreen.connectExchangeAcc);
    await PortfolioScreen.isDisplayed(PortfolioScreen.connectEToro);
    await PortfolioScreen.isDisplayed(PortfolioScreen.connectManually);
    await PortfolioScreen.isDisplayed(PortfolioScreen.connectBrokerAcc);
  });

  after(async () => {
    driver.deleteAllCookies();
    driver.reset();
  });
});
