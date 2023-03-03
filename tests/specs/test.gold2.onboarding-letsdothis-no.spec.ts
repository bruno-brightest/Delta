import OnboardingScreen from "../screenobjects/OnboardingScreen";

describe('GOLD 2: As a user I want to follow the onboarding flow (No)', () => {
    before(async () => {
        if (driver.isIOS) {
            OnboardingScreen.setSelector('ios')
        } else {
            OnboardingScreen.setSelector('android');
        }
    });

    it('should open Delta and be able to click \'Let\'s Do This\' button', async () => {
        await OnboardingScreen.isDisplayed(OnboardingScreen.letsDoThisButton);
        await OnboardingScreen.tapOnElement(OnboardingScreen.letsDoThisButton);
    });

    it('should load the YES / NO view', async () => {
        await OnboardingScreen.isDisplayed(OnboardingScreen.noToTrackInvestmentsButton);
    });

    it('should click \'No don\'t track investments\' button', async () => {
        await OnboardingScreen.tapOnElement(OnboardingScreen.noToTrackInvestmentsButton);
    });

    
    it('should uncheck assets: Crypto and Stocks', async () => {
        await OnboardingScreen.tapOnElement(OnboardingScreen.assetPickerCrypto);
        await OnboardingScreen.tapOnElement(OnboardingScreen.assetPickerStocks);
    });

    it('should check assets: Forex and NFTs', async () => {
        await OnboardingScreen.tapOnElement(OnboardingScreen.assetPickerForex);
        await OnboardingScreen.tapOnElement(OnboardingScreen.assetPickerNFTs);
    });

    it('should click on the \'Continue\' button', async () => {
        await OnboardingScreen.tapOnElement(OnboardingScreen.assetsContinueBtn);
    });

    it('should click on the search icon and fill in BTC', async () => {
        await OnboardingScreen.tapOnElement(OnboardingScreen.followAssetsSearchBarClick);   
        await OnboardingScreen.tapAndSetValue(OnboardingScreen.followAssetSearchBarInput, 'BTC');
    });

    /**
     *  BTC is by default favorited, therefore tap twice to simulate adding to favorites
     */
    it('should wait on the results and favorite the right asset', async () => {
        await OnboardingScreen.isDisplayed(OnboardingScreen.followAssetFirstResult);
        await OnboardingScreen.tapOnElement(OnboardingScreen.followAssetFirstResult);
        await OnboardingScreen.tapOnElement(OnboardingScreen.followAssetFirstResult);
    });

    it('should clear the searchbar input field', async () => {
        await OnboardingScreen.emptyInput(OnboardingScreen.followAssetSearchBarInput);

    });

    it('should click on the search icon and fill in ETH', async () => {
        await OnboardingScreen.tapAndSetValue(OnboardingScreen.followAssetSearchBarInput, 'ETH');
    });

    it('should wait on the results and favorite the right asset', async () => {
        await OnboardingScreen.isDisplayed(OnboardingScreen.followAssetFirstResult);
        await OnboardingScreen.tapOnElement(OnboardingScreen.followAssetFirstResult);
        await OnboardingScreen.tapOnElement(OnboardingScreen.followAssetFirstResult);
    });

    it('should clear the searchbar input field', async () => {
        await OnboardingScreen.emptyInput(OnboardingScreen.followAssetSearchBarInput);

    });

    it('should click on the search icon and fill in TSLA', async () => { 
        await OnboardingScreen.tapAndSetValue(OnboardingScreen.followAssetSearchBarInput, 'TSLA');
    });

    it('should wait on the results and favorite the right asset', async () => {
        await OnboardingScreen.isDisplayed(OnboardingScreen.followAssetFirstResult);
        await OnboardingScreen.tapOnElement(OnboardingScreen.followAssetFirstResult);
        await OnboardingScreen.tapOnElement(OnboardingScreen.followAssetFirstResult);
    });

    it('should clear the searchbar input field', async () => {
        await OnboardingScreen.emptyInput(OnboardingScreen.followAssetSearchBarInput);

    });

    it('should click on the search icon and fill in AAPL', async () => {
        await OnboardingScreen.tapAndSetValue(OnboardingScreen.followAssetSearchBarInput, 'AAPL');
    });

    it('should close search and click on the \'Continue\' button', async () => {
        await OnboardingScreen.tapOnElement(OnboardingScreen.closeSearchBtn);
        await OnboardingScreen.waitForElement(OnboardingScreen.followAssetContinueBtn);
        await OnboardingScreen.tapOnElement(OnboardingScreen.followAssetContinueBtn);
    });

    it('should wait for \'Let\'s explore Delta\' button and click on it', async () => {
        await OnboardingScreen.isDisplayed(OnboardingScreen.finishOnboardingBtn);
        await OnboardingScreen.tapOnElement(OnboardingScreen.finishOnboardingBtn);
    });

    after(async () => {
        driver.deleteAllCookies();
        driver.reset();
    });

});
