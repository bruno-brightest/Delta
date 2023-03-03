import OnboardingScreen from "../screenobjects/OnboardingScreen";
import NavItems from "../screenobjects/NavItems"
import MarketsScreen from "../screenobjects/MarketsScreen"
import FollowingScreen from "../screenobjects/FollowingScreen";


describe('as a user I want to try the pro version for free (until paywall)', () => {
    before(async () => {
        if (driver.isIOS) {
            OnboardingScreen.setSelector('ios');
        } else {
            OnboardingScreen.setSelector('android');
        }
    });

    /*it('should be able to click \'Let\'s do this!\'', async () => {
        await OnboardingScreen.waitForElement(OnboardingScreen.letsDoThisButton);
        await OnboardingScreen.tapOnElement(OnboardingScreen.letsDoThisButton);
    });

    it('should click the \'Skip\' button on the top right', async () => {
        await OnboardingScreen.waitForElement(OnboardingScreen.skipTopRightButton);
        await OnboardingScreen.tapOnElement(OnboardingScreen.skipTopRightButton);
    });

    it('should load the confirmation pup-up for skipping the onboarding', async () => {
        await OnboardingScreen.waitForElement(OnboardingScreen.skipButtonPopUp);
    })

    it('should confirm by clicking \'Skip, I\'ll figure out later\'', async () => {
        await OnboardingScreen.tapOnElement(OnboardingScreen.skipButtonPopUp);
    });*/

    
    //If device has to follow onboarding still; uncomment the above steps and comment this step!
    it('should deny the notifications permission alert', async () => {
        await NavItems.tapOnElement(NavItems.denyNotificationsBtn);
    });
    

    it('should wait until the Overview page is loaded', async () => {
        await MarketsScreen.waitForElement(MarketsScreen.deltaLogo);
    });
    
    it('should click on the following tab', async () => {
        await NavItems.tapOnElement(NavItems.followingTab);

    });

    it('should click on the following tab', async () => {
        await FollowingScreen.tapOnElement(FollowingScreen.filterOptions);

        
    });

    it('should click on the following tab', async () => {
        await FollowingScreen.waitForElement(FollowingScreen.filterAlphabetically);
        await FollowingScreen.tapOnElement(FollowingScreen.filterAlphabetically);
        
        
    });


    after(async () => {
        driver.deleteAllCookies();
    });

});
