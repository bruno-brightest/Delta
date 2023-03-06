import OnboardingScreen from "../screenobjects/OnboardingScreen";
import PortfolioScreen from "../screenobjects/PortfolioScreen";
import onboardingPage from "../Pages/onboarding-page";

describe("GOLD 1: As an user I want to follow the onboarding flow - Yes", () => {
  before(async () => {
    if (driver.isIOS) {
      OnboardingScreen.setSelector("ios");
    } else {
      OnboardingScreen.setSelector("android");
    }
  });

  it("should open Delta and be able to follow the Yes flow", async function () {
    await onboardingPage.onboardingYesFlow();
  });

  it("should open the portfolio screen containing the previously made transaction", async () => {
    await PortfolioScreen.isDisplayed(PortfolioScreen.portfolioValueTextView1);
    await PortfolioScreen.tapOnElement(PortfolioScreen.portfolioValueTextView1);
  });

  after(async () => {
    driver.deleteAllCookies();
    driver.reset();
  });
});
