import OnboardingScreen from "../screenobjects/OnboardingScreen";
import NavItems from "../screenobjects/NavItems";
import EToroLoginPage from "../pageobjects/eToroLoginPage";
import DeltaLoginPage from "../pageobjects/DeltaLoginPage";
import NewsScreen from "../screenobjects/NewsScreen";
import OnboardingPage from "../Pages/onboarding-page";

const user = {
  username: "brunobrightest@gmail.com",
  password: "syksE8-pizpes-xiqmaz",
  email: "brunobrightest@gmail.com",
};

describe("GOLD 5: As a user I want to connect an eToro account - Settings", () => {
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

  it("should click on the 'Sign in/Sign up' button", async () => {
    await NavItems.tapOnElement(NavItems.hamburgerIcon);
    await NavItems.isDisplayed(NavItems.signInIcon);
    await NavItems.tapOnElement(NavItems.signInIcon);
  });

  //   it("should click on the 'Sign in/Sign up' button", async () => {
  //     await SettingsScreen.isDisplayed(SettingsScreen.signInUpBtn);
  //     await SettingsScreen.tapOnElement(SettingsScreen.signInUpBtn);
  //   });

  it("should load a webview of Delta allowing to login with eToro", async () => {
    await DeltaLoginPage.isDisplayed(DeltaLoginPage.signInWithEToroButton);
  });

  it("should be able to click 'Log in with eTORO'", async () => {
    await DeltaLoginPage.tapOnElement(DeltaLoginPage.signInWithEToroButton);
  });

  //   it("should load a webview of eToro allowing to login", async () => {
  //     if (!(await EToroLoginPage.isDisplayed(EToroLoginPage.eToroImage))) {
  //       driver.pause(5000);
  //       await EToroLoginPage.tapOnElement(EToroLoginPage.loginWitheToro);
  //     }
  //   });

  //   it("should be able to fill in user details", async () => {
  //     await EToroLoginPage.tapAndSetValue(EToroLoginPage.username, user.username);
  //     await EToroLoginPage.tapAndSetValue(EToroLoginPage.password, user.password);
  //   });

  //   it("should be able to click sign in", async () => {
  //     await EToroLoginPage.tapOnElement(EToroLoginPage.signInButton);
  //   });

  it("should be able to click 'Open Delta'", async () => {
    await EToroLoginPage.isDisplayed(EToroLoginPage.openDeltaButton);

    await EToroLoginPage.tapOnElement(EToroLoginPage.openDeltaButton);
  });

  /* Logout other devices */
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

  //   it("should open the settings menu", async () => {
  //     await NavItems.tapOnElement(NavItems.marketsTab);
  //     await NavItems.tapOnElement(NavItems.hamburgerIcon);
  //     await NavItems.tapOnElement(NavItems.settingsIcon);
  //   });

  it("should display the correct eToro username", async () => {
    await NewsScreen.isDisplayed(NewsScreen.closeEmptyTap);
    await NavItems.isDisplayed(NavItems.Username);
  });

  after(async () => {
    driver.deleteAllCookies();
    driver.reset();
  });
});
