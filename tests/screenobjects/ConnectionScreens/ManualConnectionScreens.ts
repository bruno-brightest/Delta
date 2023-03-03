import AppScreen from "../AppScreen";

class ManualConnectionScreen extends AppScreen {
  constructor() {
    super();
  }

  // Manual Transaction: Screen with asset types
  get manualConnectionGoBackBtn() {
    return "id=io.getdelta.android:id/action-button";
  }
  get manualConnectionCrypto() {
    return "id=io.getdelta.android:id/screen.transaction.select.options.option-0.asset-type-button";
  }
  get manualConnectionStocks() {
    return "id=io.getdelta.android:id/screen.transaction.select.options.option-1.asset-type-button";
  }
  get manualConnectionIndices() {
    return "id=io.getdelta.android:id/screen.transaction.select.options.option-2.asset-type-button";
  }
  get manualConnectionFunds() {
    return "id=io.getdelta.android:id/screen.transaction.select.options.option-3.asset-type-button";
  }
  get manualConnectionForex() {
    return "id=io.getdelta.android:id/screen.transaction.select.options.option-4.asset-type-button";
  }
  get manualConnectionNFT() {
    return "id=io.getdelta.android:id/screen.transaction.select.options.option-5.asset-type-button";
  }

  // Search screen for assets
  get tradingPairSearchInput() {
    return "id=io.getdelta.android:id/input";
  }
  get manualConnectionSearchInput() {
    return "id=io.getdelta.android:id/screen.transaction.search.head.asset-search.input";
  }
  get searchCancel() {
    return "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]";
  }
  get searchAssetList() {
    return "id=io.getdelta.android:id/screen.transaction.search.results.list";
  }
  get searchAssetListItemFirst() {
    return "id=io.getdelta.android:id/screen.transaction.search.results.list.asset-0.button.pressable";
  }
  searchAssetListItemByIndex(i: string) {
    return `id=io.getdelta.android:id/screen.transaction.search.results.list.asset-${i}.button.pressable`;
  }

  // Manual transaction: configuration screen
  get manualTransactionBuyOption() {
    return "id=io.getdelta.android:id/screen.transaction.manual.tab-switcher.BUY.button";
  }
  get manualTransactionSellOption() {
    return "id=io.getdelta.android:id/screen.transaction.manual.tab-switcher.SELL.button";
  }
  get manualTransactionTransferOption() {
    return "idio.getdelta.android:id/screen.transaction.manual.tab-switcher.TRANSFER.button";
  }
  get manualExchangeRate() {
    return "id=io.getdelta.android:id/screen.transaction.manual.form.exchange.data-input.select-button-with-value";
  }
  get manualDateTime() {
    return "id=io.getdelta.android:id/screen.transaction.manual.form.datetime.data-input.datetime";
  }
  get manualTransactionTradingPair() {
    return "id=io.getdelta.android:id/screen.transaction.manual.form.pair.data-input.select-button-with-value";
  }
  get tradingPairBTCforEUR() {
    return "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]";
  }
  get manualBuyPrice() {
    return "id=io.getdelta.android:id/screen.transaction.manual.form.price.data-input.text";
  }
  get manualSetRate() {
    return "id=io.getdelta.android:id/screen.transaction.manual.form.price-mode.data-input.text.dropdown";
  }
  get manualAmountBought() {
    return "id=io.getdelta.android:id/screen.transaction.manual.form.amount.data-input.text";
  }
  get manualExchangeFee() {
    return "id=io.getdelta.android:id/screen.transaction.manual.form.transaction-fee.fee.data-input.text";
  }
  get manualDeductHoldingsToggle() {
    return "id=io.getdelta.android:id/screen.transaction.manual.form.deduct-from-holdings.sync.data-input.switch";
  }
  get manualTransactionNotes() {
    return "id=io.getdelta.android:id/screen.transaction.manual.form.notes.data-input.text";
  }
  get manualTransactionAddBtn() {
    return "id=io.getdelta.android:id/screen.transaction.manual.form.add-or-update.submit-button.full-width-button";
  }
  get closeEditTransactionScreenBtn() {
    return "id=io.getdelta.android:id/action-button";
  }

  // Stocks manual connection fields
  get adjustedBuyPriceStocks() {
    return "id=io.getdelta.android:id/screen.transaction.manual.form.price.data-input.text";
  }
  get amountBoughtStocks() {
    return "id=io.getdelta.android:id/screen.transaction.manual.form.amount.data-input.text";
  }

  // Screen after finishing a manual transaction

  get imDoneBtn() {
    return "id=io.getdelta.android:id/screen.transaction.manual.form.add-or-update.submit-button.full-width-button";
  }

  // SELECTORS
  setSelector(platform: string) {
    this.selector = "id=io.getdelta." + platform + ":id/screen.onboardings";
  }
  private getSelector() {
    return this.selector;
  }
}

export default new ManualConnectionScreen();
