import OnboardingScreen from "../screenobjects/OnboardingScreen";
import EToroLoginPage from "../pageobjects/eToroLoginPage";
import ManualConnectionScreen from "../screenobjects/ConnectionScreens/ManualConnectionScreens";

const user = {
  username: "brunobrightest@gmail.com",
  password: "syksE8-pizpes-xiqmaz",
  email: "brunobrightest@gmail.com",
};

class OnboardingPage {
  public async onboardingWithEtoro() {
    await OnboardingScreen.isDisplayed(OnboardingScreen.signInTopRight);
    await OnboardingScreen.tapOnElement(OnboardingScreen.signInTopRight);
    //klik op 'Login with Etoro
    await EToroLoginPage.isDisplayed(EToroLoginPage.loginWitheToro);
    await EToroLoginPage.tapOnElement(EToroLoginPage.loginWitheToro);

    //pagina laden van Etoro
    if (!(await EToroLoginPage.isDisplayed(EToroLoginPage.eToroImage))) {
      driver.pause(5000);
      await EToroLoginPage.tapOnElement(EToroLoginPage.loginWitheToro);
    }

    //gegevens invullen
    await EToroLoginPage.tapAndSetValue(EToroLoginPage.username, user.username);
    await EToroLoginPage.tapAndSetValue(EToroLoginPage.password, user.password);

    await EToroLoginPage.tapOnElement(EToroLoginPage.signInButton);

    // Open Delta button
    await EToroLoginPage.isDisplayed(EToroLoginPage.openDeltaButton);
    await EToroLoginPage.tapOnElement(EToroLoginPage.openDeltaButton);
  }

  public async skipOnboarding() {
    await OnboardingScreen.isDisplayed(OnboardingScreen.letsDoThisButton);
    await OnboardingScreen.tapOnElement(OnboardingScreen.letsDoThisButton);

    //klik op de skip button
    await OnboardingScreen.isDisplayed(OnboardingScreen.skipTopRightButton);
    await OnboardingScreen.tapOnElement(OnboardingScreen.skipTopRightButton);

    //confirmation
    await OnboardingScreen.isDisplayed(OnboardingScreen.skipButtonPopUp);
    await OnboardingScreen.tapOnElement(OnboardingScreen.skipButtonPopUp);
  }

  public async onboardingNoFlow() {
    await OnboardingScreen.isDisplayed(OnboardingScreen.letsDoThisButton);
    await OnboardingScreen.tapOnElement(OnboardingScreen.letsDoThisButton);

    await OnboardingScreen.isDisplayed(
      OnboardingScreen.noToTrackInvestmentsButton
    );

    await OnboardingScreen.tapOnElement(
      OnboardingScreen.noToTrackInvestmentsButton
    );

    await OnboardingScreen.tapOnElement(OnboardingScreen.assetPickerNFTs);

    await OnboardingScreen.tapOnElement(OnboardingScreen.assetsContinueBtn);

    await OnboardingScreen.isDisplayed(OnboardingScreen.followAssetBTC);
    await OnboardingScreen.swipeVertically(20, 10);

    await OnboardingScreen.isDisplayed(OnboardingScreen.followAssetContinueBtn);
    await OnboardingScreen.tapOnElement(
      OnboardingScreen.followAssetContinueBtn
    );

    await OnboardingScreen.isDisplayed(OnboardingScreen.finishOnboardingBtn);
    await OnboardingScreen.tapOnElement(OnboardingScreen.finishOnboardingBtn);
  }

  public async onboardingYesFlow() {
    await OnboardingScreen.isDisplayed(OnboardingScreen.letsDoThisButton);
    await OnboardingScreen.tapOnElement(OnboardingScreen.letsDoThisButton);

    //klik op YES
    await OnboardingScreen.isDisplayed(
      OnboardingScreen.yesToTrackInvestmentsButton
    );
    await OnboardingScreen.tapOnElement(
      OnboardingScreen.yesToTrackInvestmentsButton
    );

    //voeg transactie toe
    await OnboardingScreen.isDisplayed(OnboardingScreen.addManualTransaction);
    await OnboardingScreen.tapOnElement(OnboardingScreen.addManualTransaction);

    //kies asset type
    await OnboardingScreen.isDisplayed(OnboardingScreen.addCrypto);
    await OnboardingScreen.tapOnElement(OnboardingScreen.addCrypto);
    await OnboardingScreen.tapAndSetValue(OnboardingScreen.searchBar, "BTC");
    await OnboardingScreen.tapOnElement(OnboardingScreen.firstSearchResult);
    await ManualConnectionScreen.tapOnElement(
      ManualConnectionScreen.manualTransactionTradingPair
    );
    await ManualConnectionScreen.tapAndSetValue(
      ManualConnectionScreen.tradingPairSearchInput,
      "EUR"
    );
    await ManualConnectionScreen.tapOnElement(
      ManualConnectionScreen.tradingPairBTCforEUR
    );
    await ManualConnectionScreen.tapAndSetValue(
      ManualConnectionScreen.manualBuyPrice,
      "25000"
    );
    await ManualConnectionScreen.tapAndSetValue(
      ManualConnectionScreen.manualAmountBought,
      "2"
    );
    await ManualConnectionScreen.tapOnElement(
      ManualConnectionScreen.manualTransactionAddBtn
    );
    //Done button
    await ManualConnectionScreen.tapOnElement(ManualConnectionScreen.imDoneBtn);

    await OnboardingScreen.isDisplayed(OnboardingScreen.continueOnboardingBtn);
    await OnboardingScreen.tapOnElement(OnboardingScreen.continueOnboardingBtn);
  }
}

export default new OnboardingPage();
