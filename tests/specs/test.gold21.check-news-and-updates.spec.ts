import OnboardingScreen from "../screenobjects/OnboardingScreen";
import NavItems from "../screenobjects/NavItems";
import NewsScreen from "../screenobjects/NewsScreen";
import AssetDetailScreen from "../screenobjects/AssetDetailScreen";
import OnboardingPage from "../Pages/onboarding-page";

describe("GOLD 21: As a user I want to be able to check news", () => {
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
  it("should click and navigate to 'News' tab", async () => {
    await NavItems.isDisplayed(NavItems.newsTab);
    await NavItems.tapOnElement(NavItems.newsTab);
  });

  it("should click on the filter button", async () => {
    await NewsScreen.isDisplayed(NewsScreen.newsFilterBtn);
    await NewsScreen.tapOnElement(NewsScreen.newsFilterBtn);
  });

  it("should select 'Stocks' and 'Dow Jones' as filter options", async () => {
    await NewsScreen.isDisplayed(NewsScreen.newsFilterStocksOption);
    await NewsScreen.tapOnElement(NewsScreen.newsFilterStocksOption);
    await NewsScreen.isDisplayed(NewsScreen.newsFilterDowJones);
    await NewsScreen.tapOnElement(NewsScreen.newsFilterDowJones);
    await NewsScreen.sleep(1000);
  });

  it("should close the filter options", async () => {
    await NewsScreen.tapOnElement(NewsScreen.closeNewsFilterBtn);
  });

  it("refresh the news tab", async () => {
    await NavItems.tapOnElement(NavItems.followingTab);
    await NavItems.tapOnElement(NavItems.newsTab);
    await NewsScreen.swipeVertically(10, 50);
  });

  it("should click on the featured asset and check wether gets redirected to the asset detail screen", async () => {
    await NewsScreen.isDisplayed(NewsScreen.newsArticleFeaturedAsset1);
    await NewsScreen.tapOnElement(NewsScreen.newsArticleFeaturedAsset1);
  });

  it("should close the asset detail screen", async () => {
    await AssetDetailScreen.sleep(1000);
    await AssetDetailScreen.isDisplayed(AssetDetailScreen.assetPriceDetails);
    await AssetDetailScreen.tapOnElement(AssetDetailScreen.closeBtn);
  });

  it("should click on the article", async () => {
    await NewsScreen.isDisplayed(NewsScreen.newsTopArticle);
    await NewsScreen.tapOnElement(NewsScreen.newsTopArticle);
  });

  it("should scroll down the article", async () => {
    await NewsScreen.sleep(1000);
    await NewsScreen.swipeUp();
    await NewsScreen.swipeUp();
    await NewsScreen.swipeUp();
    await NewsScreen.swipeUp();
    await NewsScreen.swipeUp();
    await NewsScreen.swipeUp();
    await NewsScreen.swipeUp();
    await NewsScreen.swipeUp();
    await NewsScreen.swipeUp();
    await NewsScreen.swipeUp();
    await NewsScreen.swipeUp();
    await NewsScreen.swipeUp();
    await NewsScreen.swipeUp();
    await NewsScreen.swipeUp();
    await NewsScreen.swipeUp();
    await NewsScreen.swipeUp();
    await NewsScreen.swipeUp();
    await NewsScreen.swipeUp();
  });

  it("should check if the share button is available", async () => {
    await NewsScreen.tapOnElement(NewsScreen.newsArticleShareBtn);
    await NewsScreen.sleep(1000);
    await NewsScreen.tapOnElement(NewsScreen.cancelBtn);
  });

  it("should change the article format", async () => {
    await NewsScreen.isDisplayed(NewsScreen.newsArticleFormatOption1);
    await NewsScreen.tapOnElement(NewsScreen.newsArticleFormatOption1);
    await NewsScreen.sleep(1000);
  });

  it("should close the news screen", async () => {
    await NewsScreen.isDisplayed(NewsScreen.newsCloseBtn);
    await NewsScreen.tapOnElement(NewsScreen.newsCloseBtn);
  });

  it("should navigate to the 'Following' screen", async () => {
    await NavItems.isDisplayed(NavItems.followingTab);
    await NavItems.tapOnElement(NavItems.followingTab);
  });

  after(async () => {
    driver.deleteAllCookies();
    driver.reset();
  });
});
