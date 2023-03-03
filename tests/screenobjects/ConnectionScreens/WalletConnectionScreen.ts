import AppScreen from "../AppScreen";

class WalletConnectionScreen extends AppScreen {
  constructor() {
    super();
  }

  // Navigation items
  get goBackBtnConnections() {
    return "id=io.getdelta.android:id/screen.connect-wac.header.back.material-icon.action-button";
  }
  get infoBtn() {
    return "id=io.getdelta.android:id/screen.connect-wac.header.info.material-icon.action-button";
  }

  // Wallet Connection: wallet types
  get connectMetaMaskBtn() {
    return "id=io.getdelta.android:id/screen.connect-wac.list.header.connect-wallet.metamask-button.pressable";
  }
  get() {
    return "id=io.getdelta.android:id/";
  }
  get connectEToroWalletBtn() {
    return "id=io.getdelta.android:id/screen.connect-wac.list.header.connect-wallet.etoro-button";
  }
  get connectWalletConnectBtn() {
    return "id=io.getdelta.android:id/screen.connect-wac.list.header.connect-wallet.wallet-connect-button.pressable";
  }
  get manualWalletConnectionList() {
    return "id=io.getdelta.android:id/screen.connect-wac.list";
  }
  get manualWalletConnectionItem() {
    return `id=io.getdelta.android:id/screen.connect-wac.list.item-8.data-input.select-button-with-asset-icon`;
  }
  get optionConnectETHWallet() {
    return "id=io.getdelta.android:id/screen.connect-wac.list.item-9.data-input.select-button-with-asset-icon";
  }

  // Wallet Connection: configuration screen
  get walletConnectionName() {
    return "id=io.getdelta.android:id/screen.manage-wallet-connection.form.name.data-input.text";
  }
  get walletConnectionPublicAddress() {
    return "id=io.getdelta.android:id/screen.manage-wallet-connection.form.wallet-address.data-input.text";
  }
  get walletConnectionPortfolioImport() {
    return "id=io.getdelta.android:id/screen.manage-wallet-connection.form.portfolio.data-input.select-button-with-value";
  }
  get walletConnectionImportOptions() {
    return "id=io.getdelta.android:id/screen.manage-wallet-connection.form.import-type.data-input.select-button-with-value";
  }
  get walletConnectionImportNFToggle() {
    return "id=io.getdelta.android:id/screen.manage-wallet-connection.form.import-nfts.data-input.switch";
  }
  get walletConnectionNotifyToggle() {
    return "id=io.getdelta.android:id/screen.manage-wallet-connection.form.notify-future-transactions.data-input.switch";
  }
  get walletConnectionAddButton() {
    return "id=io.getdelta.android:id/screen.manage-wallet-connection.form.confirm.submit-button.full-width-button";
  }

  // SELECTORS
  setSelector(platform: string) {
    this.selector = "id=io.getdelta." + platform + ":id/screen.onboardings";
  }
  private getSelector() {
    return this.selector;
  }
}

export default new WalletConnectionScreen();
