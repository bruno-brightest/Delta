import MarketsScreen from "../screenobjects/MarketsScreen";
import OnboardingScreen from "../screenobjects/OnboardingScreen";
import NewsScreen from "../screenobjects/NewsScreen";
import NavItems from "../screenobjects/NavItems";
import AssetDetailScreen from "../screenobjects/AssetDetailScreen";

describe("GOLD 7: As a user I want to search (global) an asset and see the details", () => {
  before(async () => {
    if (driver.isIOS) {
      MarketsScreen.setSelector("ios");
    } else {
      MarketsScreen.setSelector("android");
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

  it("should click on the searchbar", async () => {
    if (await NewsScreen.isDisplayed(NewsScreen.closeEmptyTap)) {
      await NavItems.tapOnElement(NavItems.searchButton);
    }
  });

  it("should fill in an asset variable and show the results", async () => {
    await NavItems.tapAndSetValue(NavItems.globalSearchInput, "Luna");
  });

  it("should wait for the results to appear and click on the right asset (should be first)", async () => {
    await NavItems.isDisplayed(NavItems.globalSearchFirstResult);
    await NavItems.tapOnElement(NavItems.globalSearchFirstResult);
  });

  it("should wait to appear and click on the asset price", async () => {
    await AssetDetailScreen.isDisplayed(AssetDetailScreen.assetPriceDetails);
    await AssetDetailScreen.tapOnElement(AssetDetailScreen.assetPriceDetails);
  });

  it("should change the currency on the asset price", async () => {
    await AssetDetailScreen.expectToHaveValue(
      AssetDetailScreen.assetPriceDetails,
      "€"
    );
  });

  after(async () => {
    driver.deleteAllCookies();
    driver.reset();
  });
});
