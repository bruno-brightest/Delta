import OnboardingScreen from "../screenobjects/OnboardingScreen";
import NavItems from "../screenobjects/NavItems";
import AlertsScreen from "../screenobjects/AlertsScreen";
import onboardingPage from "../Pages/onboarding-page";

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
  // it("should open Delta and be able to follow the Yes flow", async function () {
  //   await onboardingPage.onboardingYesFlow();
  // });

  // it("should open the portfolio screen containing the previously made transaction", async () => {
  //   await PortfolioScreen.isDisplayed(PortfolioScreen.portfolioValueTextView1);
  //   await PortfolioScreen.tapOnElement(PortfolioScreen.portfolioValueTextView1);
  // });

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
