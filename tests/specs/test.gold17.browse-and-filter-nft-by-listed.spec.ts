import OnboardingScreen from "../screenobjects/OnboardingScreen";
import MarketsScreen from "../screenobjects/MarketsScreen";
import OnboardingPage from "../Pages/onboarding-page";

describe("GOLD 17: As a user I want to browse the NFT category  + Filter on listed ", () => {
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

  it("should click and navigate to 'NFTs' tab", async () => {
    await MarketsScreen.tapOnElement(MarketsScreen.nftTab);
  });

  it("should click and navigate to 'NFT Explorer' tab", async () => {
    await MarketsScreen.sleep(1000);
    await MarketsScreen.isDisplayed(MarketsScreen.nftExplorerBtn);
    await MarketsScreen.tapOnElement(MarketsScreen.nftExplorerBtn);
  });

  it("should click and navigate to 'Browse NFT' tab", async () => {
    await MarketsScreen.sleep(1000);
    await MarketsScreen.isDisplayed(MarketsScreen.browseNTFsBtn);
    await MarketsScreen.tapOnElement(MarketsScreen.browseNTFsBtn);
  });

  it("should click and filter 'Listed NFTs' (Buy Now)", async () => {
    await MarketsScreen.isDisplayed(MarketsScreen.nftBuyNowBtn);
    await MarketsScreen.tapOnElement(MarketsScreen.nftBuyNowBtn);
  });

  it("should click on the first listed NFT", async () => {
    await MarketsScreen.sleep(1000);
    await MarketsScreen.isDisplayed(MarketsScreen.nftBrowserFirstItem);
    await MarketsScreen.tapOnElement(MarketsScreen.nftBrowserFirstItem);
  });

  it("should display the NFT details screen", async () => {
    await MarketsScreen.sleep(1000);
    await MarketsScreen.isDisplayed(MarketsScreen.nftDetailsPriceTap);
    await MarketsScreen.isDisplayed(MarketsScreen.nftDetailsPriceText);
  });

  it("should tap on the price and change course to EURO", async () => {
    await MarketsScreen.isDisplayed(MarketsScreen.nftDetailsPriceTap);
    await MarketsScreen.tapOnElement(MarketsScreen.nftDetailsPriceTap);
    await MarketsScreen.expectToHaveValue(
      MarketsScreen.nftDetailsPriceText,
      "???"
    );
    await MarketsScreen.sleep(1000);
  });

  it("should swipe down until the NFT details are in view", async () => {
    // await MarketsScreen.swipeUp();
    // await MarketsScreen.swipeUp();
    await MarketsScreen.isDisplayed(MarketsScreen.nftDetailsTokenStandard);
  });

  it("should display the necessary information", async () => {
    await MarketsScreen.isNotEmpty(MarketsScreen.nftDetailsTokenStandard);
    await MarketsScreen.isNotEmpty(MarketsScreen.nftDetailsTokenID);
    await MarketsScreen.isNotEmpty(MarketsScreen.nftDetailsBlockchain);
    await MarketsScreen.isNotEmpty(MarketsScreen.nftDetailsContract);
    await MarketsScreen.isNotEmpty(MarketsScreen.nftDetailsAbout);
  });

  after(async () => {
    driver.deleteAllCookies();
    driver.reset();
  });
});
