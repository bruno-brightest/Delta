import AppScreen from './AppScreen';

class OnboardingScreen extends AppScreen {

    constructor() {
        super();
    }

    /**
     * Set selector
     * @param platform
     */
    setSelector(platform: string) {
        this.selector = 'id=io.getdelta.' + platform + ':id/screen.onboardings';
    }

    /**
     * Get selector
     * @private
     */
    private getSelector() {
        return this.selector;
    }


    // START SCREEN
    get letsDoThisButton() {
        return 'id=io.getdelta.android:id/screen.onboarding.start.continue.primary-button';
    }

    get onboardingContinueBtn() {
        return 'id=io.getdelta.android:id/screen.onboarding.start.continue.primary-button';
    }

    get goBackButton() {
        return 'id=io.getdelta.android:id/screen.onboarding.back.button';
    }

    get signInTopRight() {
        return 'id=io.getdelta.android:id/screen.onboarding.start.sign-in.button';
    }

    get closeSearchBtn() {
        return 'id=io.getdelta.android:id/screen.onboarding.following.close-button';
    }

    // ONBOARDING VERFICATION SCREEN
    get skipTopRightButton() {
        return 'id=io.getdelta.android:id/screen.onboarding.skip.button';
    }

    get yesToTrackInvestmentsButton() {
        return 'id=io.getdelta.android:id/screen.onboarding.current-investment-state.has-investments.response-button';
    }

    get noToTrackInvestmentsButton() {
        return 'id=io.getdelta.android:id/screen.onboarding.current-investment-state.no-investments.response-button';
    }


    // UPDATE ALERTS SCREEN
    get yesToUpdate() {
        return 'id=io.getdelta.android:id/screen.onboarding.notifications.yes.response-button';
    }

    get noToUpdate() {
        return 'id=io.getdelta.android:id/screen.onboarding.notifications.no.response-button';
    }

    // SKIP ONBOARDING VERIFICATION POP-UP
    private get signInButtonPopUp() {
        return 'id=android:id/button1';
    }

    private get continueIntroductionButton() {
        return 'id=android:id/button2';
    }

    public get skipButtonPopUp() {
        return 'id=android:id/button3';
    }

    // ONBOARDING: ADD TRANSACTIONS OPTIONS
    private get connectWallet() {
        return 'id=io.getdelta.android:id/screen.onboarding.portfolio-build-options.option-0.button';
    }

    private get connectExchangeAcc() {
        return 'id=io.getdelta.android:id/screen.onboarding.portfolio-build-options.option-1.button';
    }

    private get connectBrokerAcc() {
        return 'id=io.getdelta.android:id/screen.onboarding.portfolio-build-options.option-2.button';
    }

    get addManualTransaction() {
        return 'id=io.getdelta.android:id/screen.onboarding.portfolio-build-options.option-3.button';
    }

    private get eToroAcc() {
        return 'id=io.getdelta.android:id/screen.onboarding.portfolio-build-options.option-4.button';
    }

    // ONBOARDING: ADD ASSETS OPTIONS
    get addCrypto() {
        return 'id=io.getdelta.android:id/screen.transaction.select.options.option-0.asset-type-button';
    }

    get addStocks() {
        return 'id=io.getdelta.android:id/screen.transaction.select.options.option-1.asset-type-button';
    }

    get addIndices() {
        return 'id=io.getdelta.android:id/screen.transaction.select.options.option-2.asset-type-button';
    }

    get addFunds() {
        return 'id=io.getdelta.android:id/screen.transaction.select.options.option-3.asset-type-button';
    }

    get addForex() {
        return 'id=io.getdelta.android:id/screen.transaction.select.options.option-4.asset-type-button';
    }

    get addNFT() {
        return 'id=io.getdelta.android:id/screen.transaction.select.options.option-5.asset-type-button';
    }

    // ONBOARDING: SEARCH ASSETS (TESTCASE NR1 GOLD)
    get searchBarAssets() {
        return 'id=io.getdelta.android:id/input';
    }

    get searchBar() { 
        return 'id=io.getdelta.android:id/screen.transaction.search.head.asset-search.input';
    }
    
    get firstSearchResult() {
        return 'id=io.getdelta.android:id/screen.transaction.search.results.list.asset-0.button.pressable';
    }

    get optionBTC() {
        return '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup';
    }

    get tradingPair() {
        return '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]';
    }

    get tradingBTCforEUR() {
        return '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.TextView[1]';
    }

    get buyPrice() {
        return '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.EditText';
    }

    get chooseAmount() {
        return '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[5]/android.widget.EditText';
    }

    get addTransactionButton() {
        return '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[8]/android.view.ViewGroup';
    }

    get imDoneButton() {
        return '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[4]';
    }

    // ONBOARDING: Asset Types Screen
    get assetTypesGroup() {
        return 'id=io.getdelta.android:id/screen.onboarding.asset-type-picker.tab';
    }

    get assetPickerCrypto() {
        return 'id=io.getdelta.android:id/screen.onboarding.asset-type-picker.asset-type-item-0.checkbox';
    }

    get assetPickerStocks() {
        return 'id=io.getdelta.android:id/screen.onboarding.asset-type-picker.asset-type-item-1.checkbox';
    }

    get assetPickerFunds() {
        return 'id=io.getdelta.android:id/screen.onboarding.asset-type-picker.asset-type-item-2.checkbox';
    }

    get assetPickerNFTs() {
        return 'id=io.getdelta.android:id/screen.onboarding.asset-type-picker.asset-type-item-3.checkbox';
    }

    get assetPickerForex() {
        return 'id=io.getdelta.android:id/screen.onboarding.asset-type-picker.asset-type-item-4.checkbox';
    }

    get assetPickerCommodities() {
        return 'id=io.getdelta.android:id/screen.onboarding.asset-type-picker.asset-type-item-5.checkbox';
    }

    get assetPickerFutures() {
        return 'id=io.getdelta.android:id/screen.onboarding.asset-type-picker.asset-type-item-6.checkbox';
    }

    get assetPickerOptions() {
        return 'id=io.getdelta.android:id/screen.onboarding.asset-type-picker.asset-type-item-7.checkbox';
    }

    get assetPickerBonds() {
        return 'id=io.getdelta.android:id/screen.onboarding.asset-type-picker.asset-type-item-8.checkbox';
    }

    get assetsContinueBtn() {
        return 'id=io.getdelta.android:id/screen.onboarding.asset-type-picker.continue.primary-button';
    }

    // ONBOARDING: FOLLOWING ASSETS
    get followAssetsSearchBarClick() {
        return 'id=io.getdelta.android:id/screen.onboarding.following.assets-search.input';
    }

    get followAssetSearchBarInput() {
        return 'id=io.getdelta.android:id/screen.onboarding.following.assets-search.input';
    }

    // replace asset-0 with asset-(index)
    followAssetSearchResultsByIndex(i: string) {
        return `id=io.getdelta.android:id/screen.onboarding.following.asset-${i}.item`;
    }

    get followAssetFirstResult() {
        return `id=io.getdelta.android:id/screen.onboarding.following.asset-0.item`;
    }

    get followAssetSearchResultsFUllList() {
        return 'id=io.getdelta.android:id/screen.onboarding.following.assets-search.list';
    }

    /* 
    get followAssetStarIcon() {
        return '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView[3]';
    }
    
    ---Not neccesary, in onboarding>FollowAssetScreen clicking on the result view will Favorite the asset---

    */

    

    get followAssetContinueBtn() {
        return 'id=io.getdelta.android:id/screen.onboarding.following.continue.primary-button';
    }

    get followAssetBTC() {
        return 'id=io.getdelta.android:id/screen.onboarding.following.asset-1.item';
    }

    get followAssetAMZN() {
        return 'id=io.getdelta.android:id/screen.onboarding.following.asset-8.item';
    }

    get followAssetMETA() {
        return 'id=io.getdelta.android:id/screen.onboarding.following.asset-9.item';
    }

    get followAssetMSFT() {
        return 'id=io.getdelta.android:id/screen.onboarding.following.asset-12.item';
    }

    get followAssetSPX() {
        return 'id=io.getdelta.android:id/screen.onboarding.following.asset-28.item';
    }

    get followAssetDJI() {
        return 'id=io.getdelta.android:id/screen.onboarding.following.asset-29.item';
    }
    
    get followAssetNDX() {
        return 'id=io.getdelta.android:id/screen.onboarding.following.asset-30.item';
    }

    get finishOnboardingBtn () {
        return 'id=io.getdelta.android:id/screen.onboarding.finish.continue.primary-button';
    }

    get continueOnboardingBtn () {
        return 'id=io.getdelta.android:id/continue.primary-button';
    }

}

export default new OnboardingScreen();
