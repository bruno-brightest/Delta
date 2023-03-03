import OnboardingScreen from "../screenobjects/OnboardingScreen";
import NavItems from "../screenobjects/NavItems";
import MarketsScreen from "../screenobjects/MarketsScreen";

describe("GOLD 18: As an user I want to be able to sort the different asset types on the market screens", () => {
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

  it("should tap on the Markets tab", async () => {
    await NavItems.isDisplayed(NavItems.marketsTab);
    await NavItems.tapOnElement(NavItems.marketsTab);
  });

  it("should  open 'Indices' market overview", async () => {
    await MarketsScreen.isDisplayed(MarketsScreen.indicesTab);
    await MarketsScreen.tapOnElement(MarketsScreen.indicesTab);
  });

  it("should click on the filter options button and open the view", async () => {
    await MarketsScreen.sleep(1000);
    await MarketsScreen.tapOnElement(MarketsScreen.indicesFilterBtn);
    await MarketsScreen.sleep(1000);
    await MarketsScreen.tapOnElement(MarketsScreen.indicesFilterBtn);
  });

  it("should open the 'Crypto' market overview", async () => {
    await MarketsScreen.sleep(1000);
    await MarketsScreen.isDisplayed(MarketsScreen.cryptoTab);
    await MarketsScreen.tapOnElement(MarketsScreen.cryptoTab);
  });

  it("should click on the filter options button and open the view", async () => {
    await MarketsScreen.isDisplayed(MarketsScreen.cryptoFilterBtn);
    await MarketsScreen.tapOnElement(MarketsScreen.cryptoFilterBtn);
  });

  it("should order by 'Highest Price'", async () => {
    await MarketsScreen.sleep(2000);
    await MarketsScreen.isDisplayed(MarketsScreen.filterByHighestPrice);
    await MarketsScreen.tapOnElement(MarketsScreen.filterByHighestPrice);
  });

  it("should check wether the asset with the highest price is the first one", async () => {
    await MarketsScreen.sleep(2000);
    await MarketsScreen.isDisplayed(MarketsScreen.assetPrice1);
    await MarketsScreen.isDisplayed(MarketsScreen.assetPrice2);
    await MarketsScreen.shouldBeGreaterNumber(
      MarketsScreen.assetPrice1,
      MarketsScreen.assetPrice2
    );
  });

  it("should click on the filter options button and open the view", async () => {
    await MarketsScreen.sleep(1000);
    await MarketsScreen.isDisplayed(MarketsScreen.cryptoFilterBtn);
    await MarketsScreen.tapOnElement(MarketsScreen.cryptoFilterBtn);
  });

  it("should order by 'Highest Cap'", async () => {
    await MarketsScreen.isDisplayed(MarketsScreen.filterByHighestCap);
    await MarketsScreen.tapOnElement(MarketsScreen.filterByHighestCap);
  });

  it("should check wether the asset with the highest cap is the first one", async () => {
    await MarketsScreen.sleep(2000);
    await MarketsScreen.isDisplayed(MarketsScreen.assetCap1);
    await MarketsScreen.isDisplayed(MarketsScreen.assetCap2);
    await MarketsScreen.shouldBeGreaterNumber(
      MarketsScreen.assetCap1,
      MarketsScreen.assetCap2
    );
  });

  it("should click on the filter options button and open the view", async () => {
    await MarketsScreen.sleep(1000);
    await MarketsScreen.isDisplayed(MarketsScreen.cryptoFilterBtn);
    await MarketsScreen.tapOnElement(MarketsScreen.cryptoFilterBtn);
  });

  it("should open the 'NFT' market overview", async () => {
    await MarketsScreen.isDisplayed(MarketsScreen.nftTab);
    await MarketsScreen.tapOnElement(MarketsScreen.nftTab);
  });

  it("should click on the filter options button and open the view", async () => {
    await MarketsScreen.sleep(2000);
    await MarketsScreen.isDisplayed(MarketsScreen.nftFilterBtn);
    await MarketsScreen.tapOnElement(MarketsScreen.nftFilterBtn);
  });

  it("should order by 'Highest Value'", async () => {
    await MarketsScreen.sleep(1000);
    await MarketsScreen.isDisplayed(MarketsScreen.filterByHighestVolume);
    await MarketsScreen.tapOnElement(MarketsScreen.filterByHighestVolume);
  });

  it("should check wether the asset with the highest price is the first one", async () => {
    await MarketsScreen.sleep(1000);
    await MarketsScreen.isDisplayed(MarketsScreen.assetPrice1);
    await MarketsScreen.isDisplayed(MarketsScreen.assetPrice2);
    await MarketsScreen.shouldBeGreaterNumber(
      MarketsScreen.assetPrice1,
      MarketsScreen.assetPrice2
    );
  });

  after(async () => {
    driver.deleteAllCookies();
    driver.reset();
  });
});
