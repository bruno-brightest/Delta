import AppScreen from "./AppScreen";

class NavItems extends AppScreen {
  constructor() {
    super();
  }

  // Main Nav Items
  get searchButton() {
    return "id=io.getdelta.android:id/screen.markets.header.search.action-button";
  }
  get searchInput() {
    return "id=io.getdelta:id/input";
  }
  get hamburgerIcon() {
    return "id=io.getdelta.android:id/screen.markets.header.sidemenu.action-button";
  }

  // Global Search locators
  get globalSearchInput() {
    return "id=io.getdelta.android:id/screen.global-search.header.asset-search.input";
  }
  get globalSearchResultList() {
    return "id=io.getdelta.android:id/screen.global-search.results.list";
  }
  globalSearchResultByIndex(i: string) {
    return `id=io.getdelta.android:id/screen.global-search.results.list.item-${i}.asset-detail.button`;
  }
  globalSearchResultStarByIndex(i: string) {
    return `id=io.getdelta.android:id/screen.global-search.results.list.item-${i}.follow.action-button`;
  }
  get globalSearchSecondResult() {
    return "io.getdelta.android:id/screen.global-search.results.list.item-1.asset-detail.button";
  }
  get globalSearchFirstResult() {
    return "id=io.getdelta.android:id/screen.global-search.results.list.item-0.asset-detail.button";
  }
  get globalSearchFirstResultStar() {
    return "id=io.getdelta.android:id/screen.global-search.results.list.item-0.follow.action-button";
  }
  get cancelSearch() {
    return "id=io.getdelta.android:id/screen.global-search.header.asset-search.cancel.button";
  }
  defaultListItemStar(i: string) {
    return `id=io.getdelta.android:id/screen.global-search.empty.list.item-${i}.follow.action-button`;
  }
  defaultListItem(i: string) {
    return `id=io.getdelta.android:id/screen.global-search.empty.list.item-${i}.asset-detail.button`;
  }

  // Default list for Global Search
  get defaultListSearch() {
    return "id=io.getdelta.android:id/screen.global-search.empty.list";
  }
  defaultListItemByIndex(i: string) {
    return `id=io.getdelta.android:id/screen.global-search.empty.list.item-${i}.follow.action-button`;
  }
  defaultListItemStarByIndex(i: string) {
    return `id=io.getdelta.android:id/screen.global-search.empty.list.item-${i}.asset-detail.button`;
  }

  // Main Tabs
  get bottomTabs() {
    return "id=io.getdelta.android:id/bottomTabs";
  }
  get marketsTab() {
    return "~selected, , tab, 1 out of 5";
  }
  get followingTab() {
    return "~, tab, 2 out of 5";
  }
  get portfolioTab() {
    return "~, tab, 3 out of 5";
  }
  get newsTab() {
    return "~, tab, 4 out of 5";
  }
  get alertsTab() {
    return "~, tab, 5 out of 5";
  }

  // Open hamburger menu items
  get signInIcon() {
    return "id=io.getdelta.android:id/screen.sidemenu.sso.login.pressable";
  }

  get Username() {
    return "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/androidx.drawerlayout.widget.DrawerLayout/android.view.ViewGroup[2]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.widget.TextView[3]";
  }
  get settingsIcon() {
    return "id=io.getdelta.android:id/screen.sidemenu.footer.settings.pressable";
  }
  get upgradeToPro() {
    return "id=io.getdelta.android:id/screen.sidemenu.header.pro-status.upgrade-button";
  }
  private get totalWorth() {
    return "io.getdelta.android:id/screen.sidemenu.header.total-worth.label";
  }
  private get toggleVisibilityBtn() {
    return "io.getdelta.android:id/screen.sidemenu.header.percentage-holdings.button";
  }
  private get mainPortfolio() {
    return "id=io.getdelta.android:id/screen.sidemenu.portfolio-list.flatlist.portfolio-item-0.button";
  }
  private get addNewPortfolio() {
    return "id=io.getdelta.android:id/screen.sidemenu.portfolio-list.flatlist.footer.portfolio-add.link-button";
  }

  private get connectionsBtn() {
    return "id=io.getdelta.android:id/screen.sidemenu.portfolio-list.flatlist.footer.connections.link-button";
  }
  get editPortfolioNameBtn() {
    return "id=io.getdelta.android:id/screen.sidemenu.portfolio-list.flatlist.header.edit-button";
  }
  private get editPortfolioNamePen() {
    return "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/androidx.drawerlayout.widget.DrawerLayout/android.view.ViewGroup[2]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[5]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.TextView";
  }
  get editPortfolioNameInput() {
    return "id=io.getdelta.android:id/custom";
  }
  get editPortfolioNameSumbit() {
    return "id=android:id/button1";
  }
  get editPortfolioNameCancel() {
    return "id=android:id/button2";
  }

  private get livePrices() {
    return "id=io.getdelta.android:id/screen.sidemenu.controls.live-prices.button";
  }
  private get nftExplorer() {
    return "io.getdelta.android:id/screen.sidemenu.controls.nft-explorer.button";
  }
  get portfolioInsights() {
    return "id=io.getdelta.android:id/screen.sidemenu.navigation.item.portfolio-insights.pressable";
  }
  get portfolioInsightsHeader() {
    return "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView";
  }
  get tryProCloseBtn() {
    return "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup";
  }

  // Notifications pop-up items
  get notificationPermissionContainer() {
    return "id=com.android.permissioncontroller:id/content_container";
  }
  get allowNotificationsBtn() {
    return "id=com.android.permissioncontroller:id/permission_allow_button";
  }
  get denyNotificationsBtn() {
    return "id=com.android.permissioncontroller:id/permission_deny_button";
  }
  get popUpDismissBtn() {
    return "io.getdelta.android:id/overlay.toast.dismiss-button";
  }

  // SELECTORS
  setSelector(platform: string) {
    this.selector = "id=io.getdelta." + platform + ":id/screen.onboardings";
  }
  private getSelector() {
    return this.selector;
  }
}

export default new NavItems();
