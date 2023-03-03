import OnboardingScreen from "../screenobjects/OnboardingScreen";
import NavItems from "../screenobjects/NavItems";
import MarketsScreen from "../screenobjects/MarketsScreen";
import AssetDetailScreen from "../screenobjects/AssetDetailScreen";

describe("GOLD 20: As a user I want to be able to check the graphs history in the ads", () => {
  before(async () => {
    if (driver.isIOS) {
      OnboardingScreen.setSelector("ios");
    } else {
      OnboardingScreen.setSelector("android");
    }
  });

  // it('should open Delta and be able to click \'Let\'s do this!\'', async () => {
  //     if(await OnboardingScreen.isDisplayed(OnboardingScreen.letsDoThisButton)) {
  //         await OnboardingScreen.tapOnElement(OnboardingScreen.letsDoThisButton);
  //     }
  // });

  // it('should click the \'Skip\' button on the top right', async () => {
  //     if(await OnboardingScreen.isDisplayed(OnboardingScreen.skipTopRightButton)) {
  //         await OnboardingScreen.tapOnElement(OnboardingScreen.skipTopRightButton);
  //     }
  // });

  // it('should load the confirmation pup-up for skipping the onboarding', async () => {
  //     await OnboardingScreen.isDisplayed(OnboardingScreen.skipButtonPopUp);
  // })

  // it('should confirm by clicking \'Skip, I\'ll figure out later\'', async () => {
  //     if(await OnboardingScreen.isDisplayed(OnboardingScreen.skipButtonPopUp)) {
  //         await OnboardingScreen.tapOnElement(OnboardingScreen.skipButtonPopUp)
  //     }
  // });

  it("should click on the searchbar", async () => {
    await MarketsScreen.tapOnElement(MarketsScreen.marketsSearchIcon);
  });

  it("should fill in an asset variable and show the results", async () => {
    await NavItems.tapAndSetValue(NavItems.globalSearchInput, "ethereum");
  });

  it("should wait for the results to appear and click on the right asset (should be first)", async () => {
    await NavItems.isDisplayed(NavItems.globalSearchFirstResult);
    await NavItems.tapOnElement(NavItems.globalSearchFirstResult);
  });

  it("should be directed to the asset detail screen", async () => {
    await AssetDetailScreen.isDisplayed(AssetDetailScreen.assetItemStarDetails);
    await AssetDetailScreen.swipeToLeft();
  });

  it("should tap on historical data of 6 months button and change the chart", async () => {
    await AssetDetailScreen.isDisplayed(AssetDetailScreen.assetPriceDetails);
    const currentValue = await AssetDetailScreen.elementInsideText(
      AssetDetailScreen.assetPriceDetails
    );
    const currentValueAsString = String(currentValue);
    await AssetDetailScreen.isDisplayed(AssetDetailScreen.assetGraph6M);
    await AssetDetailScreen.tapOnElement(AssetDetailScreen.assetGraph6M);
    await AssetDetailScreen.expectNotToHaveValue(
      AssetDetailScreen.assetPriceDetails,
      currentValueAsString
    );
  });

  it("should tap and open the full screen chart", async () => {
    await AssetDetailScreen.sleep(1000);
    await AssetDetailScreen.tapOnElement(
      AssetDetailScreen.graphGoFullScreenBtn
    );
    await AssetDetailScreen.sleep(1000);
  });

  it("should be able to swipe horizontally on the chart, while it displays time-related data", async () => {
    await AssetDetailScreen.swipeToLeft();
    await AssetDetailScreen.sleep(1000);
    await AssetDetailScreen.swipeToLeft();
  });

  it("should click on the candle icon", async () => {
    await AssetDetailScreen.tapOnElement(AssetDetailScreen.assetGraphCandle);
  });

  it("should check if the graph has changed", async () => {
    await AssetDetailScreen.elementDoesNotExist(
      AssetDetailScreen.assetHistoricalPriceText
    );
  });

  it("should close the full graph view", async () => {
    await AssetDetailScreen.tapOnElement(
      AssetDetailScreen.graphGoSmallScreenBtn
    );
    await AssetDetailScreen.isDisplayed(AssetDetailScreen.assetItemStarDetails);
  });

  it("should scroll down to the news section", async () => {
    // await AssetDetailScreen.swipeUp();
    // await AssetDetailScreen.swipeUp();
    // await AssetDetailScreen.swipeUp(); -> zelf swipen
    await AssetDetailScreen.swipeVertically(35, 10);
  });

  it("should click on 'Show more' and load extra news articles", async () => {
    await AssetDetailScreen.isDisplayed(AssetDetailScreen.assetNewsShowMoreBtn);
    await AssetDetailScreen.tapOnElement(
      AssetDetailScreen.assetNewsShowMoreBtn
    );
    // here should come isDisplayed for the new articles, but because they have no XPATH & this is very fragile: a sleep will be incorperated until ID's are added
    await AssetDetailScreen.sleep(2000);
  });

  after(async () => {
    driver.deleteAllCookies();
    driver.reset();
  });
});
