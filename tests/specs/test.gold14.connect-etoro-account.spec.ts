import OnboardingScreen from "../screenobjects/OnboardingScreen";
import NavItems from "../screenobjects/NavItems";
import PortfolioScreen from "../screenobjects/PortfolioScreen";
import ConnectionsMainScreen from "../screenobjects/ConnectionScreens/ConnectionsMainScreen";
import EToroLoginPage from "../pageobjects/eToroLoginPage";
import DeltaLoginPage from "../pageobjects/DeltaLoginPage";
import SettingsScreen from "../screenobjects/SettingsScreen";
import ImportOptionsScreen from "../screenobjects/ImportOptionsScreen";

const user = {
  username: "GetTested",
  password: "Delta@9000",
  email: "semayor255@dineroa.com",
};

describe("GOLD 14: As a user I want to connect an etoro account", () => {
  before(async () => {
    if (driver.isIOS) {
      OnboardingScreen.setSelector("ios");
    } else {
      OnboardingScreen.setSelector("android");
    }
  });

  // it('should open Delta and be able to click \'Let\'s do this!\'', async () => {
  //     await OnboardingScreen.isDisplayed(OnboardingScreen.letsDoThisButton);
  //     await OnboardingScreen.tapOnElement(OnboardingScreen.letsDoThisButton);
  // });

  // it('should click the \'Skip\' button on the top right', async () => {
  //     await OnboardingScreen.isDisplayed(OnboardingScreen.skipTopRightButton);
  //     await OnboardingScreen.tapOnElement(OnboardingScreen.skipTopRightButton);
  // });

  // it('should load the confirmation pup-up for skipping the onboarding', async () => {
  //     await OnboardingScreen.isDisplayed(OnboardingScreen.skipButtonPopUp);
  // })

  // it('should confirm by clicking \'Skip, I\'ll figure out later\'', async () => {
  //     await OnboardingScreen.tapOnElement(OnboardingScreen.skipButtonPopUp);
  // });

  it("should click the third icon: triangle and redirect to the portfolio screen", async () => {
    await NavItems.tapOnElement(NavItems.portfolioTab);
  });

  /**
   * If portfolio exists, use addOtherPortfolioBtn
   */
  it("should click the + icon to add a new Portfolio", async () => {
    await PortfolioScreen.isDisplayed(PortfolioScreen.addOtherPortfolioBtn);
    await PortfolioScreen.tapOnElement(PortfolioScreen.addOtherPortfolioBtn);
  });

  it("should click on the 'Connect eToro account' option", async () => {
    await PortfolioScreen.tapOnElement(PortfolioScreen.connectEToro);
  });

  it("should click on the 'I Understand' button at the eToro notice screen ", async () => {
    await ConnectionsMainScreen.isDisplayed(
      ConnectionsMainScreen.acceptEToroNoticeBtn
    );
    await ConnectionsMainScreen.tapOnElement(
      ConnectionsMainScreen.acceptEToroNoticeBtn
    );
  });

  it("should load a webview of Delta allowing to login with eToro", async () => {
    await DeltaLoginPage.isDisplayed(DeltaLoginPage.signInWithEToroButton);
  });

  it("should be able to click 'Log in with eTORO'", async () => {
    await DeltaLoginPage.tapOnElement(DeltaLoginPage.signInWithEToroButton);
  });

  it("should load a webview of eToro allowing to login", async () => {
    await EToroLoginPage.isDisplayed(EToroLoginPage.eToroImage);
  });

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

  it("should be able to click 'Validate' on Import Options screen", async () => {
    await ImportOptionsScreen.tapOnElement(ImportOptionsScreen.validateButton);
  });

  it("should open the settings menu", async () => {
    await NavItems.tapOnElement(NavItems.marketsTab);
    await NavItems.tapOnElement(NavItems.hamburgerIcon);
    await NavItems.tapOnElement(NavItems.settingsIcon);
  });

  after(async () => {
    driver.deleteAllCookies();
    driver.reset();
  });
});
