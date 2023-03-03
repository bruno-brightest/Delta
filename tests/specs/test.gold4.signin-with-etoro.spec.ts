import OnboardingScreen from "../screenobjects/OnboardingScreen";
import EToroLoginPage from "../pageobjects/eToroLoginPage";
import NavItems from "../screenobjects/NavItems";
import SettingsScreen from "../screenobjects/SettingsScreen";
import DeviceLimitScreen from "../screenobjects/DeviceLimitScreen";
import NewsScreen from "../screenobjects/NewsScreen";

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

  //   it("should load the onboarding screen and click 'Sign In'", async () => {
  //     await OnboardingScreen.isDisplayed(OnboardingScreen.signInTopRight);
  //     await OnboardingScreen.tapOnElement(OnboardingScreen.signInTopRight);
  //   });

  //   it("should be able to click 'Log in with eTORO'", async () => {
  //     await EToroLoginPage.isDisplayed(EToroLoginPage.loginWitheToro);
  //     await EToroLoginPage.tapOnElement(EToroLoginPage.loginWitheToro);
  //   });

  //Dit gaat niet nodig zijn want de pagina herkent gegevens al!!!

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

  //   it("should be able to click 'Open Delta'", async () => {
  //     await EToroLoginPage.isDisplayed(EToroLoginPage.openDeltaButton);

  //     await EToroLoginPage.tapOnElement(EToroLoginPage.openDeltaButton);
  //   });

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

  it("should open Delta and be able to click 'Let's do this!'", async () => {
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
