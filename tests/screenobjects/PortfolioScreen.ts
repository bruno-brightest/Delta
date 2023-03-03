import AppScreen from "./AppScreen";

class PortfolioScreen extends AppScreen {
  constructor() {
    super();
  }

  // PORTFOLIO SCREEN
  get portfolioFrame() {
    return "id=android:id/content";
  }
  get addFirstPortfolioBtn() {
    return "id=io.getdelta.android:id/screen.portfolio.empty.add-transaction.portfolio-fab.floating-button";
  }
  get addOtherPortfolioBtn() {
    return "id=io.getdelta.android:id/screen.portfolio.add-transaction.portfolio-fab.floating-button";
  }
  get addOtherPortfolioWhileLoading() {
    return "id=io.getdelta.android:id/portfolio-fab.floating-button";
  }
  private get buyBitcoinBtn() {
    return "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/androidx.drawerlayout.widget.DrawerLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]";
  }
  get searchIconPortfolio() {
    return "id=io.getdelta.android:id/screen.portfolio.header.search.action-button";
  }
  get sidemenuPortfolio() {
    return "id=io.getdelta.android:id/screen.portfolio.header.sidemenu.action-button";
  }
  get portfolioNextScreenBtn() {
    return "id=io.getdelta.android:id/screen.portfolio.header.contols.right.button";
  }
  get portfolioPreviousScreenBtn() {
    return "id=io.getdelta.android:id/screen.portfolio.header.contols.left.button";
  }
  get portfolioValueTextView1() {
    return "id=io.getdelta.android:id/screen.portfolio.asset-overview-0.balance-header.worth.label";
  }
  get portfolioValueClick1() {
    return "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/androidx.drawerlayout.widget.DrawerLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup";
  }

  get holdingOverviewHeaderText() {
    return "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/androidx.drawerlayout.widget.DrawerLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[1]";
  }
  get cryptoHeaderText() {
    return "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/androidx.drawerlayout.widget.DrawerLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[1]";
  }
  get ntfsHeaderText() {
    return "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/androidx.drawerlayout.widget.DrawerLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[1]";
  }
  get stocksHeaderText() {
    return "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/androidx.drawerlayout.widget.DrawerLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[1]";
  }

  get portfolioFilterOptionsBtn() {
    return "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/androidx.drawerlayout.widget.DrawerLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[1]";
  }
  get portfolioFilterHoldingsBtn() {
    return "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/androidx.drawerlayout.widget.DrawerLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]";
  }
  get portfolioFilterOptionsInput() {
    return "io.getdelta.android:id/input";
  }
  get portolioFilterHoldingsCancelBtn() {
    return "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/androidx.drawerlayout.widget.DrawerLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]";
  }

  // CONNECTION TYPES LIST SCREEN
  get connectWallet() {
    return "id=io.getdelta.android:id/screen.transaction-select-way.list.option-0.button";
  }
  get connectExchangeAcc() {
    return "id=io.getdelta.android:id/screen.transaction-select-way.list.option-1.button";
  }
  get connectBrokerAcc() {
    return "id=io.getdelta.android:id/screen.transaction-select-way.list.option-2.button";
  }
  get connectManually() {
    return "id=io.getdelta.android:id/screen.transaction-select-way.list.option-3.button";
  }
  get connectEToro() {
    return "id=io.getdelta.android:id/screen.transaction-select-way.list.option-4.button";
  }
  get manageAvailableCash() {
    return "id=io.getdelta.android:id/screen.transaction-select-way.list.manage-available-cash.open-available-cash.full-width-button";
  }
  get closeConnectionLisBtn() {
    return "id=io.getdelta.android:id/screen.transaction-select-way.header.close.action-button";
  }

  // TYPES OF WALLET CONNECTIONS
  get walletListWebView() {
    return "id=io.getdelta.android:id/screen.connect-wac.list";
  }

  // empty tap
  get nonClickableViewWalletList() {
    return "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.TextView";
  }

  // SELECTORS
  setSelector(platform: string) {
    this.selector = "id=io.getdelta." + platform + ":id/screen.onboardings";
  }
  private getSelector() {
    return this.selector;
  }
}

export default new PortfolioScreen();
