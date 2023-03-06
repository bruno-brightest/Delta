import OnboardingScreen from "../screenobjects/OnboardingScreen";
import NavItems from "../screenobjects/NavItems";
import MarketsScreen from "../screenobjects/MarketsScreen";
import OnboardingPage from "../Pages/onboarding-page";

describe("GOLD 6: As a user I want to try the pro version for free (until paywall)", () => {
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
    await MarketsScreen.isDisplayed(MarketsScreen.deltaLogo);
  });

  it("should open the menu by clicking on the hamburger icon", async () => {
    await NavItems.tapOnElement(NavItems.hamburgerIcon);
  });

  // it('should be able to click the settings button', async () => {
  //     await NavItems.tapOnElement(NavItems.settingsIcon);
  // });

  // it('should be able to click the \'Try for free!\' button ', async () => {
  //     await SettingsScreen.tapOnElement(SettingsScreen.tryForFreeBtn);
  // });

  //   it("If present, the popup should be closed ", async () => {
  //     await SettingsScreen.isDisplayed(SettingsScreen.oopsOKbtn);
  //     await SettingsScreen.tapOnElement(SettingsScreen.oopsOKbtn);
  //   });

  after(async () => {
    driver.deleteAllCookies();
    driver.reset();
  });
});
