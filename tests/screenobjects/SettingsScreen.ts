import AppScreen from "./AppScreen";

class SettingsScreen extends AppScreen {
  constructor() {
    super();
  }

  // NAV ITEMS SETTINGS SCREEN
  get goBackBtn() {
    return "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup";
  }

  // SETTINGS SCREEN
  get signInUpBtn() {
    return "id=io.getdelta.android:id/screen.settings.sso.login.sign-up.secondary-button";
  }
  get tryForFreeBtn() {
    return "id=io.getdelta.android:id/screen.settings.pro-upsell.banner.try-for-free.primary-button";
  }
  get tryForFreeBtnAlt() {
    return "id=io.getdelta.android:id/screen.settings.pro-upsell.banner.learn-more.primary-button";
  }
  get oopsOKbtn() {
    return "id=android:id/button1";
  }
  private get closeBtnPaywallScreen() {
    return "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup";
  }
  private get restorePurchaseBtn() {
    return "id=io.getdelta.android:id/screen.settings.pro-upsell.banner.restore-purchases.primary-button";
  }
  private get redeemCodeBtn() {
    return "id=io.getdelta.android:id/screen.settings.pro-upsell.banner.redeem-code.primary-button";
  }
  private get generalBtn() {
    return "id=io.getdelta.android:id/screen.settings.settings-list.module.button-0";
  }
  private get viewOptionsBtn() {
    return "id=io.getdelta.android:id/screen.settings.settings-list.module.button-1";
  }
  private get calculationsBtn() {
    return "id=io.getdelta.android:id/screen.settings.settings-list.module.button-2";
  }
  private get notificationsBtn() {
    return "id=io.getdelta.android:id/screen.settings.settings-list.module.button-3";
  }
  private get connectionsBtn() {
    return "id=io.getdelta.android:id/screen.settings.settings-list.module.button-4";
  }
  private get securityBtn() {
    return "id=io.getdelta.android:id/screen.settings.settings-list.module.button-5";
  }
  get devicesDataBtn() {
    return "id=io.getdelta.android:id/screen.settings.settings-list.module.button-6";
  }
  private get supportBtn() {
    return "id=io.getdelta.android:id/screen.settings.settings-list.module.button-7";
  }
  get eToroAccountName() {
    return "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.widget.TextView[11]";
  }

  // DEVICES & DATA OPTION
  get fullTransactionHistoryBtn() {
    return "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[8]";
  }
  get firstTransactionItem() {
    return "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]";
  }
  get updateTransactionBtn() {
    return "id=io.getdelta.android:id/submit-button.full-width-button";
  }

  // EDIT TRANSACTION SCREEN
  get sentToField() {
    return "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]";
  }
  get dateTimeField() {
    return "id=io.getdelta.android:id/data-input.datetime";
  }
  get amountField() {
    return "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.EditText";
  }
  get closeEditTransactionScreenBtn() {
    return "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup";
  }
  get firstTransactionBottomText() {
    return "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[3]";
  }

  // DEVICES & DATA SCREEN
  get deviceNameField() {
    return "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]";
  }
  get transferData() {
    return "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]";
  }
  get syncData() {
    return "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[5]";
  }
  get generateRecoveryCode() {
    return "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[6]";
  }
  get restoreFromCode() {
    return "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[7]";
  }
  get fullTransactionHistory() {
    return "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[8]";
  }

  // Transaction History Screen
  get transactionHistoryInput() {
    return "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup[1]/android.widget.EditText";
  }
  get transactionHistoryList() {
    return "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup[2]/android.widget.ScrollView";
  }
  get deleteTransactionBtn() {
    return "id=io.getdelta.android:id/action-button";
  }

  setSelector(platform: string) {
    this.selector = "id=io.getdelta." + platform + ":id/screen.onboardings";
  }
  private getSelector() {
    return this.selector;
  }
}

export default new SettingsScreen();
