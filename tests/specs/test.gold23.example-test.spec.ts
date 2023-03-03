import AssetDetailScreen from "../screenobjects/AssetDetailScreen";
import NavItems from "../screenobjects/NavItems";
import OnboardingScreen from "../screenobjects/OnboardingScreen";

describe("GOLD 23: As an user, I want to test searchbar in homescreen", () => {
  before(async () => {
    if (driver.isIOS) {
      OnboardingScreen.setSelector("ios");
    } else {
      OnboardingScreen.setSelector("android");
    }
  });

  it("should open Delta and be able to click 'Let's do this!'", async () => {
    await OnboardingScreen.isDisplayed(OnboardingScreen.letsDoThisButton);
    await OnboardingScreen.tapOnElement(OnboardingScreen.letsDoThisButton);
  });

  it("should be redirected to the HomeScreen and the searchbar", async () => {
    await NavItems.isDisplayed(NavItems.searchButton);
    await NavItems.tapOnElement(NavItems.searchButton);
  });

  it("should be redirected to the HomeScreen and the searchbar", async () => {
    await NavItems.isDisplayed(NavItems.searchInput);
    await NavItems.tapAndSetValue(NavItems.searchInput, "BTC");
  });

  it("should tap on the BTC option, which is the second one", async () => {
    await NavItems.isDisplayed(NavItems.globalSearchSecondResult);
    await NavItems.tapOnElement(NavItems.globalSearchSecondResult);
  });

  it("should be on the BTC Asset Detail Screen and open the Transactions tab", async () => {
    await AssetDetailScreen.isDisplayed(
      AssetDetailScreen.assetDetailTransactionsTab
    );
    await AssetDetailScreen.tapOnElement(
      AssetDetailScreen.assetDetailTransactionsTab
    );
  });

  it("should be on the B Transactions tab", async () => {
    await AssetDetailScreen.isDisplayed(
      AssetDetailScreen.addFirstTransactionText
    );
    await AssetDetailScreen.tapOnElement(
      AssetDetailScreen.addFirstTransactionText
    );
  });

  after(async () => {
    driver.deleteAllCookies();
    driver.reset();
  });
});
