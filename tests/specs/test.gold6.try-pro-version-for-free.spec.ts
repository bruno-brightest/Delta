import OnboardingScreen from "../screenobjects/OnboardingScreen";
import NavItems from "../screenobjects/NavItems";
import SettingsScreen from "../screenobjects/SettingsScreen";
import MarketsScreen from "../screenobjects/MarketsScreen";

describe("GOLD 6: As a user I want to try the pro version for free (until paywall)", () => {
  before(async () => {
    if (driver.isIOS) {
      OnboardingScreen.setSelector("ios");
    } else {
      OnboardingScreen.setSelector("android");
    }
  });

  it("should open Delta and be able to click 'Lets Do This'", async () => {
    if (await OnboardingScreen.isDisplayed(OnboardingScreen.letsDoThisButton)) {
      await OnboardingScreen.tapOnElement(OnboardingScreen.letsDoThisButton);
    }
  });

  it("should skip the onboarding process by tapping 'Skip' button", async () => {
    if (
      await OnboardingScreen.isDisplayed(OnboardingScreen.skipTopRightButton)
    ) {
      await OnboardingScreen.tapOnElement(OnboardingScreen.skipTopRightButton);
    }
  });

  it("should be able to click 'Skip it, I'll figure it out'", async () => {
    if (await OnboardingScreen.isDisplayed(OnboardingScreen.skipButtonPopUp)) {
      await OnboardingScreen.tapOnElement(OnboardingScreen.skipButtonPopUp);
    }
  });

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
