import OnboardingScreen from "../screenobjects/OnboardingScreen";

describe('GOLD 3: As an user I want to skip the onboarding flow', () => {
    before(async () => {
        if (driver.isIOS) {
            OnboardingScreen.setSelector('ios')
        } else {
            OnboardingScreen.setSelector('android');
        }
    });

    it('should open Delta and be able to click \'Let\'s do this!\'', async () => {
        await OnboardingScreen.isDisplayed(OnboardingScreen.letsDoThisButton);
        await OnboardingScreen.tapOnElement(OnboardingScreen.letsDoThisButton);
    });

    it('should click the \'Skip\' button on the top right', async () => {
        await OnboardingScreen.isDisplayed(OnboardingScreen.skipTopRightButton);
        await OnboardingScreen.tapOnElement(OnboardingScreen.skipTopRightButton);
    });

    it('should load the confirmation pup-up for skipping the onboarding', async () => {
        await OnboardingScreen.isDisplayed(OnboardingScreen.skipButtonPopUp);
    })

    it('should confirm by clicking \'Skip, I\'ll figure out later\'', async () => {
        await OnboardingScreen.tapOnElement(OnboardingScreen.skipButtonPopUp);
    });

    after(async () => {
        driver.deleteAllCookies();
        driver.reset();
    });

});
