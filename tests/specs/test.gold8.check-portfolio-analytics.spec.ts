import OnboardingScreen from "../screenobjects/OnboardingScreen";
import NavItems from "../screenobjects/NavItems";
import MarketsScreen from "../screenobjects/MarketsScreen";
import NewsScreen from "../screenobjects/NewsScreen";
import OnboardingPage from "../Pages/onboarding-page";
describe("GOLD 8: As a user I want to check my portfolio analytics", () => {
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

  it("should wait until the Overview page is loaded", async () => {
    if (await NewsScreen.isDisplayed(NewsScreen.closeEmptyTap)) {
      await NavItems.tapOnElement(NavItems.marketsTab);
    }
    await MarketsScreen.isDisplayed(MarketsScreen.overviewTab);
  });

  it("should open the menu by clicking on the hamburger icon", async () => {
    await NavItems.tapOnElement(NavItems.hamburgerIcon);
  });

  it("should load and click on the 'Portfolio Insights' button in the menu", async () => {
    await NavItems.isDisplayed(NavItems.portfolioInsights);
    await NavItems.tapOnElement(NavItems.portfolioInsights);
  });

  it("should load the 'Portfolio Insights' screen", async () => {
    await NavItems.isDisplayed(NavItems.portfolioInsightsHeader);
  });

  after(async () => {
    driver.deleteAllCookies();
    driver.reset();
  });
});
