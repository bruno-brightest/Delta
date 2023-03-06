import OnboardingScreen from "../screenobjects/OnboardingScreen";
import EToroLoginPage from "../pageobjects/eToroLoginPage";
import NavItems from "../screenobjects/NavItems";
import SettingsScreen from "../screenobjects/SettingsScreen";
import DeviceLimitScreen from "../screenobjects/DeviceLimitScreen";
import NewsScreen from "../screenobjects/NewsScreen";
import OnboardingPage from "../Pages/onboarding-page";

const user = {
  username: "brunobrightest@gmail.com",
  password: "syksE8-pizpes-xiqmaz",
  email: "brunobrightest@gmail.com",
};

//Gebruiker moet uitgelogd zijn!

describe("GOLD 4: As a user I want to be able to log in on my existing account ( on the onboarding screen )", () => {
  before(async () => {
    if (driver.isIOS) {
      OnboardingScreen.setSelector("ios");
    } else {
      OnboardingScreen.setSelector("android");
    }
  });
  // VIA ONBOARDING

  // it("should load the onboarding screen and be able to sign in with Etoro", async () => {
  //   await OnboardingPage.onboardingWithEtoro();
  // });

  //   /* Logout other devices */
  //   it("should click 'Logout other devices'", async () => {
  //     if (
  //       await DeviceLimitScreen.isDisplayed(
  //         DeviceLimitScreen.logoutOtherDevicesButton
  //       )
  //     ) {
  //       await DeviceLimitScreen.tapOnElement(
  //         DeviceLimitScreen.logoutOtherDevicesButton
  //       );
  //     }
  //   });
  /* End logout other devices */

  //VIA HAMBURGERMENU => EERST ONBOARDING SKIPPEN

  // it("should open Delta and be able to skip the onboarding", async function () {
  //   await OnboardingPage.skipOnboarding();
  // });

  it("schould open hamburger menu and click on sign in", async () => {
    await NavItems.tapOnElement(NavItems.marketsTab);
    await NavItems.tapOnElement(NavItems.hamburgerIcon);

    await NavItems.isDisplayed(NavItems.signInIcon);
    await NavItems.tapOnElement(NavItems.signInIcon);
  });

  it("should be able to click 'Log in with eTORO'", async () => {
    await EToroLoginPage.isDisplayed(EToroLoginPage.loginWitheToro);
    await EToroLoginPage.tapOnElement(EToroLoginPage.loginWitheToro);
  });

  it("should be able to click 'Open Delta'", async () => {
    await EToroLoginPage.isDisplayed(EToroLoginPage.openDeltaButton);

    await EToroLoginPage.tapOnElement(EToroLoginPage.openDeltaButton);
  });

  it("should display the correct eToro username", async () => {
    await NewsScreen.isDisplayed(NewsScreen.closeEmptyTap);
    await NavItems.isDisplayed(NavItems.Username);
  });

  after(async () => {
    driver.deleteAllCookies();
    driver.reset();
  });
});
