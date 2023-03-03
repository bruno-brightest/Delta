import OnboardingScreen from "../screenobjects/OnboardingScreen";
import ManualConnectionScreen from "../screenobjects/ConnectionScreens/ManualConnectionScreens"
import PortfolioScreen from "../screenobjects/PortfolioScreen";

describe('GOLD 1: As an user I want to follow the onboarding flow - Yes', () => {
    before(async () => {
        if (driver.isIOS) {
            OnboardingScreen.setSelector('ios')
        } else {
            OnboardingScreen.setSelector('android');
        }
    });

    it('should open Delta and be able to click \'Let\'s Do This\'', async () => {
        await OnboardingScreen.isDisplayed(OnboardingScreen.letsDoThisButton);
        await OnboardingScreen.tapOnElement(OnboardingScreen.letsDoThisButton);
    });

    it('should load the YES / NO view', async () => {
        await OnboardingScreen.isDisplayed(OnboardingScreen.yesToTrackInvestmentsButton);
    });

    it('should be able to click \'Yes\'', async () => {
        await OnboardingScreen.tapOnElement(OnboardingScreen.yesToTrackInvestmentsButton);
    });

    it('should be able to click \'Add a transaction manually\'', async () => {
        await OnboardingScreen.isDisplayed(OnboardingScreen.addManualTransaction);
        await OnboardingScreen.tapOnElement(OnboardingScreen.addManualTransaction);
    });

    it('should load the \'Asset Type\'', async () => {
        await OnboardingScreen.isDisplayed(OnboardingScreen.addCrypto);
    })

    it('should be able to click \'Crypto\'', async () => {
        await OnboardingScreen.tapOnElement(OnboardingScreen.addCrypto);
    });

    it('should be able to fill in \'BTC\'', async () => {
        await OnboardingScreen.tapAndSetValue(OnboardingScreen.searchBar, 'BTC');
    });

    it('should click the first option', async () => {
        await OnboardingScreen.tapOnElement(OnboardingScreen.firstSearchResult);
    });

    it('should click \'Trading Pair\' option on the Manual Transaction Config Screen', async () => {   
        await ManualConnectionScreen.tapOnElement(ManualConnectionScreen.manualTransactionTradingPair);
    });

    it('should search for \'BTC/EUR\' trading pair', async () => {   
        await ManualConnectionScreen.tapAndSetValue(ManualConnectionScreen.tradingPairSearchInput, 'EUR');
    });

    it('should click on the first result', async () => {   
        await ManualConnectionScreen.tapOnElement(ManualConnectionScreen.tradingPairBTCforEUR);
    });

    it('should fill in the buy price of the asset', async () => {   
        await ManualConnectionScreen.tapAndSetValue(ManualConnectionScreen.manualBuyPrice, '25000');
    });

    it('should fill in the amount bought of the asset', async () => {   
        await ManualConnectionScreen.tapAndSetValue(ManualConnectionScreen.manualAmountBought, '2');
    });

    it('should click on the \'Add Transaction\' button', async () => {   
        await ManualConnectionScreen.tapOnElement(ManualConnectionScreen.manualTransactionAddBtn)
    });

    it('should click on the \'I\'m done\' button', async () => {   
        await ManualConnectionScreen.tapOnElement(ManualConnectionScreen.imDoneBtn)
    });

    it('should wait for \'Let\'s explore Delta\' button and click on it', async () => {
        await OnboardingScreen.isDisplayed(OnboardingScreen.continueOnboardingBtn);
        await OnboardingScreen.tapOnElement(OnboardingScreen.continueOnboardingBtn);
    });

    it('should open the portfolio screen containing the previously made transaction', async () => {
        await PortfolioScreen.isDisplayed(PortfolioScreen.portfolioValueTextView1);
        await PortfolioScreen.tapOnElement(PortfolioScreen.portfolioValueTextView1);
    });

    after(async () => {
        driver.deleteAllCookies();
        driver.reset();
    });

});
