import AppScreen from "../../screenobjects/AppScreen";

class SelectorsGold11 extends AppScreen {

    constructor() {
        super();
    }

    // ONBOARDING SCREEN
    get letsDoThisButton() { return 'id=io.getdelta.android:id/screen.onboarding.start.continue.primary-button'; }

    get skipTopRightButton() { return 'id=io.getdelta.android:id/screen.onboarding.skip.button'; }

    public get skipButtonPopUp() { return 'id=android:id/button3'; }

    // NAV ITEMS 
    get portfolioTab() { return '~, tab, 3 out of 5' ; }
    get emptyTap() { return '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[1]'; }
    
    // PORTFOLIO SCREEN
    get addFirstPortfolioBtn() { return 'id=io.getdelta.android:id/screen.portfolio.empty.add-transaction.portfolio-fab.floating-button'; }
    get connectExchangeAcc() { return 'id=io.getdelta.android:id/screen.transaction-select-way.list.option-1.button'; }

    // EXCHANGES LIST
    get exchangeList() { return 'id=screen.connect-eac.header.exchange-accounts-connections.list'; }
    get binanceExchangeLink() { return 'id=screen.connect-eac.header.exchange-accounts-connections.list.item-0.data-input.select-button-with-exchange-icon'; }
    get geminiExchangeLink() { return 'id=screen.connect-eac.header.exchange-accounts-connections.list.item-17.data-input.select-button-with-exchange-icon'; }
    exchangeListItemByIndex(i:string) : string {return `id=screen.connect-eac.header.exchange-accounts-connections.list.item-${i}.data-input.select-button-with-exchange-icon`; }
    
    // API NOTICE SCREEN
    get apiLimitationNoticeIUnderstand() { return 'id=screen.connect-eac-limitation.i-understand.primary-button'; }
    get apiLimitationNoticeCancel() { return 'id=screen.connect-eac-limitation.cancel.secondary-button'; }
    
    // EXCHANGE CONNECTION CONFIG SCREEN
    get exchangeConnectionImportDest() { return 'id=screen.connect-eac-edd-edit.form.portfolio.data-input.select-button-with-value'; }
    get exchangeConnectionName() { return 'id=screen.connect-eac-edd-edit.form.name.data-input.text'; }
    get exchangeConnectionKeyInput() { return 'id=screen.connect-eac-edd-edit.form.auth-descriptor-0.data-input.text'; }
    get exchangeConnectionSecretInput() { return 'id=screen.connect-eac-edd-edit.form.auth-descriptor-1.data-input.text'; }
    get exchangeConnectionDepositsToggle() { return 'id=screen.connect-eac-edd-edit.form.import-transfers.data-input.switch'; }
    get exchangeConnectionImportOptions() { return 'id=screen.connect-eac-edd-edit.form.import-type.data-input.select-button-with-value'; }
    get exchangeConnectionNotifyToggle() { return 'id=screen.connect-eac-edd-edit.form.notify-future-transactions.data-input.switch'; }
    get exchangeConnectionAddButton() { return 'id=screen.connect-eac-edd-edit.form.confirm.primary-button'; }
    get exchangeConnectionGoBackBtn() { return 'id=screen.connect-eac-edd-edit.header.back.action-button'; }
    get importAllTransactions() { return 'id=screen.select.list.item-0.data-input.select-button'; }
    
    // CONNECTIONS MAIN SCREEN
    get exchangesConnectionAmount() {return 'id=io.getdelta.android:id/screen.connections.exchanges.toggle-panel.toggle.amount-connected-label'; }
    get walletsConnectionAmount() { return 'id=io.getdelta.android:id/screen.connections.wallets.toggle-panel.toggle.amount-connected-label'; }
    get brokersConnectionAmount() { return 'id=io.getdelta.android:id/screen.connections.brokers.toggle-panel.toggle.amount-connected-label'; }


    // SELECTORS
    setSelector(platform: string) {
        this.selector = 'id=io.getdelta.'+ platform +':id/';
    }
    private getSelector() { return this.selector; }



}

export default new SelectorsGold11();


