import OnboardingScreen from "../screenobjects/OnboardingScreen";
import MarketsScreen from "../screenobjects/MarketsScreen";
import NavItems from "../screenobjects/NavItems";
import FollowingScreen from "../screenobjects/FollowingScreen";
import NewsScreen from "../screenobjects/NewsScreen";
import onboardingPage from "../Pages/onboarding-page";

describe("GOLD 9: As an user I want to follow my favorite assets", () => {
  before(async () => {
    if (driver.isIOS) {
      OnboardingScreen.setSelector("ios");
    } else {
      OnboardingScreen.setSelector("android");
    }
  });

  // it("should open Delta and be able to follow the NO flow", async function () {
  //   await onboardingPage.onboardingNoFlow();
  // });

  it("should click and navigate to the Markets tab", async () => {
    if (await NewsScreen.isDisplayed(NewsScreen.closeEmptyTap)) {
      await NavItems.tapOnElement(NavItems.marketsTab);
    }
  });

  it("should click on the searchbar", async () => {
    await MarketsScreen.tapOnElement(MarketsScreen.marketsSearchIcon);
  });

  it("should fill in an asset in the searchbar", async () => {
    await NavItems.tapAndSetValue(NavItems.globalSearchInput, "Luna");
  });

  it("should wait for the results to appear and favorite the right asset (should be first)", async () => {
    await NavItems.isDisplayed(NavItems.globalSearchResultStarByIndex("0"));
    await NavItems.tapOnElement(NavItems.globalSearchResultStarByIndex("0"));
  });

  it("should close the search", async () => {
    await NavItems.tapOnElement(NavItems.cancelSearch);
  });

  it("should click on the Overview tab", async () => {
    await MarketsScreen.tapOnElement(MarketsScreen.overviewTab);
  });

  it("should toggle 'Only show followed assets'", async () => {
    await MarketsScreen.tapOnElement(MarketsScreen.toggleOnlyFollowedAssets);
  });

  it("should swipe until the 'Show All' button is visible", async () => {
    await MarketsScreen.swipeVertically(35, 10);
  });

  it("should display the list of previously followed assets", async () => {
    await FollowingScreen.isDisplayed(FollowingScreen.followedAsset1);
    await FollowingScreen.containsAtleastOneValue(
      FollowingScreen.followedAsset1,
      ["AAPL", "BTC", "ETH", "LUNA", "TSLA", "XRP"]
    );
    await FollowingScreen.containsAtleastOneValue(
      FollowingScreen.followedAsset1,
      ["AAPL", "BTC", "ETH", "LUNA", "TSLA", "XRP"]
    );
    // await FollowingScreen.containsAtleastOneValue(
    //   FollowingScreen.followedAsset2,
    //   ["AAPL", "BTC", "ETH", "LUNA", "TSLA", "XRP"]
    // );
    // await FollowingScreen.containsAtleastOneValue(
    //   FollowingScreen.followedAsset3,
    //   ["AAPL", "BTC", "ETH", "LUNA", "TSLA", "XRP"]
    // );
    // await FollowingScreen.containsAtleastOneValue(
    //   FollowingScreen.followedAsset4,
    //   ["AAPL", "BTC", "ETH", "LUNA", "TSLA", "XRP"]
    // );
    // await FollowingScreen.containsAtleastOneValue(
    //   FollowingScreen.followedAsset5,
    //   ["AAPL", "BTC", "ETH", "LUNA", "TSLA", "XRP"]
    // );
  });

  after(async () => {
    driver.deleteAllCookies();
    driver.reset();
  });
});
