import OnboardingScreen from "../screenobjects/OnboardingScreen";
import NavItems from "../screenobjects/NavItems";
import AlertsScreen from "../screenobjects/AlertsScreen";
import ManualConnectionScreen from "../screenobjects/ConnectionScreens/ManualConnectionScreens";
import PortfolioScreen from "../screenobjects/PortfolioScreen";

describe("GOLD 22: As an user I want to check the notification tab and be redirected to the asset", () => {
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

  // it('should click on the \'I\'m done\' button', async () => {
  //     await ManualConnectionScreen.tapOnElement(ManualConnectionScreen.imDoneBtn)
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

  /* If  autoGranPermissions is off, then the following step can be uncommented
    it('should allow the notifications permission alert', async () => {
        await NavItems.tapOnElement(NavItems.allowNotificationsBtn);
    });*/

  it("should click and navigate to 'Alerts' tab", async () => {
    await NavItems.isDisplayed(NavItems.alertsTab);
    await NavItems.tapOnElement(NavItems.alertsTab);
  });

  it("should be redirected to the notifications screen", async () => {
    await AlertsScreen.isDisplayed(AlertsScreen.notificationsBellIcon);
  });

  it("should open the notifications settings menu", async () => {
    await AlertsScreen.isDisplayed(AlertsScreen.notificationsBellIcon);
    await AlertsScreen.tapOnElement(AlertsScreen.notificationsBellIcon);
  });

  it("should display the different alerts options, which should be working", async () => {
    await AlertsScreen.isDisplayed(AlertsScreen.signifUpdateToggle);
    await AlertsScreen.tapOnElement(AlertsScreen.signifUpdateToggle);
    await AlertsScreen.tapOnElement(AlertsScreen.signifUpdateToggle);
    await AlertsScreen.tapOnElement(AlertsScreen.endOfDayUpdateToggle);
    await AlertsScreen.tapOnElement(AlertsScreen.endOfDayUpdateToggle);
  });

  it("should open the 'Weekly Markets Summary' and check wether the toggle is working", async () => {
    await AlertsScreen.swipeUp();
    await AlertsScreen.tapOnElement(AlertsScreen.weeklySummarySelect);
    await AlertsScreen.expectToHaveValue(
      AlertsScreen.weeklySummaryHeader,
      "Weekly Markets Summary"
    );
    await AlertsScreen.tapOnElement(AlertsScreen.switchWeeklyMarketsSummary);
    await AlertsScreen.tapOnElement(AlertsScreen.switchWeeklyMarketsSummary);
    await AlertsScreen.tapOnElement(AlertsScreen.goBackToSettings);
  });

  it("should close the notifications settings menu", async () => {
    await AlertsScreen.isDisplayed(AlertsScreen.closeNotificationSettings);
    await AlertsScreen.tapOnElement(AlertsScreen.closeNotificationSettings);
    await AlertsScreen.isDisplayed(AlertsScreen.notificationsBellIcon);
  });

  after(async () => {
    driver.deleteAllCookies();
    driver.reset();
  });
});
