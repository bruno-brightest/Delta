import OnboardingScreen from "../screenobjects/OnboardingScreen";
import NavItems from "../screenobjects/NavItems";
import PortfolioScreen from "../screenobjects/PortfolioScreen";
import WalletConnectionScreen from "../screenobjects/ConnectionScreens/WalletConnectionScreen";
import ConnectionsMainScreen from "../screenobjects/ConnectionScreens/ConnectionsMainScreen";
import NewsScreen from "../screenobjects/NewsScreen";

describe("GOLD 10: As a user I want to connect to wallet", () => {
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
    if (await NewsScreen.isDisplayed(NewsScreen.closeEmptyTap)) {
      await NavItems.tapOnElement(NavItems.portfolioTab);
    }
  });

  /**
   *  If already added a portfolio, change to addOtherPortfolioBtn
   */
  it("should click the + icon to add a new Portfolio", async () => {
    await PortfolioScreen.isDisplayed(PortfolioScreen.addOtherPortfolioBtn);
    await PortfolioScreen.tapOnElement(PortfolioScreen.addOtherPortfolioBtn);
  });

  it("should click on the 'Connect wallet' option", async () => {
    await PortfolioScreen.tapOnElement(PortfolioScreen.connectWallet);
  });

  it("should swipe down", async () => {
    await PortfolioScreen.isDisplayed(PortfolioScreen.portfolioFrame);
    await PortfolioScreen.isDisplayed(PortfolioScreen.walletListWebView);
    //await PortfolioScreen.swipeUp(); --> uitvoeren door zelf te swipen
  });

  it("should click on 'Ethereum Wallet' option", async () => {
    await WalletConnectionScreen.tapOnElement(
      WalletConnectionScreen.manualWalletConnectionItem
    );
  });

  it("should fill in the Public Wallet Address", async () => {
    await WalletConnectionScreen.tapAndSetValue(
      WalletConnectionScreen.walletConnectionPublicAddress,
      "tomvh.eth"
    );
  });

  it("should click on 'Add Connection' button", async () => {
    await WalletConnectionScreen.tapOnElement(
      WalletConnectionScreen.walletConnectionAddButton
    );
  });

  it("should load and connect the Ethereum wallet, connection is now 1", async () => {
    await ConnectionsMainScreen.isDisplayed(
      ConnectionsMainScreen.walletsConnectionAmount
    );
    await ConnectionsMainScreen.expectToHaveValue(
      ConnectionsMainScreen.walletsConnectionAmount,
      "1 connected"
    );
  });

  after(async () => {
    driver.deleteAllCookies();
    driver.reset();
  });
});
