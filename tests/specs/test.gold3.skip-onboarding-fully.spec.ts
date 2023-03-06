import OnboardingScreen from "../screenobjects/OnboardingScreen";

describe("GOLD 3: As an user I want to skip the onboarding flow", () => {
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

  after(async () => {
    driver.deleteAllCookies();
    driver.reset();
  });
});
