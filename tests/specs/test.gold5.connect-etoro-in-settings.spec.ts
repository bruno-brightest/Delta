import OnboardingScreen from "../screenobjects/OnboardingScreen";
import NavItems from "../screenobjects/NavItems";
import EToroLoginPage from "../pageobjects/eToroLoginPage";
import DeltaLoginPage from "../pageobjects/DeltaLoginPage";
import SettingsScreen from "../screenobjects/SettingsScreen";
import DeviceLimitScreen from "../screenobjects/DeviceLimitScreen";
import NewsScreen from "../screenobjects/NewsScreen";

const user = {
  username: "GetTested",
  password: "Delta@9000",
  email: "semayor255@dineroa.com",
};

describe("GOLD 5: As a user I want to connect an eToro account - Settings", () => {
  before(async () => {
    if (driver.isIOS) {
      OnboardingScreen.setSelector("ios");
    } else {
      OnboardingScreen.setSelector("android");
    }
  });

  it("should open Delta and click on 'Let's Do This'", async () => {
    await OnboardingScreen.isDisplayed(OnboardingScreen.letsDoThisButton);
    await OnboardingScreen.tapOnElement(OnboardingScreen.letsDoThisButton);
  });

  it("should click the 'Skip' button on the top right", async () => {
    await OnboardingScreen.isDisplayed(OnboardingScreen.skipTopRightButton);
    await OnboardingScreen.tapOnElement(OnboardingScreen.skipTopRightButton);
  });

  it("should load the confirmation pup-up for skipping the onboarding", async () => {
    await OnboardingScreen.isDisplayed(OnboardingScreen.skipButtonPopUp);
  });

  it("should confirm by clicking 'Skip, I'll figure out later'", async () => {
    await OnboardingScreen.tapOnElement(OnboardingScreen.skipButtonPopUp);
  });

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
