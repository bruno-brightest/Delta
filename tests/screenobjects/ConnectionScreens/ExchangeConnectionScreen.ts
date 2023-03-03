import AppScreen from '../AppScreen';

class ExchangeConnectionScreen extends AppScreen {

    constructor() {
        super();
    }

    // List of exchanges
    get exchangeList() { return 'id=io.getdelta.android:id/screen.connect-eac.header.exchange-accounts-connections.list'; }
    get binanceExchangeLink() { return 'id=io.getdelta.android:id/screen.connect-eac.header.exchange-accounts-connections.list.item-0.data-input.select-button-with-exchange-icon'; }
    get geminiExchangeLink() { return 'id=io.getdelta.android:id/screen.connect-eac.header.exchange-accounts-connections.list.item-17.data-input.select-button-with-exchange-icon'; }
    exchangeListItemByIndex(i:string) : string {return `io.getdelta.android:id/screen.connect-eac.header.exchange-accounts-connections.list.item-${i}.data-input.select-button-with-exchange-icon`; }
    
    // API notice screen
    get apiLimitationNoticeIUnderstand() { return 'id=io.getdelta.android:id/screen.connect-eac-limitation.i-understand.primary-button'; }
    get apiLimitationNoticeCancel() { return 'id=io.getdelta.android:id/screen.connect-eac-limitation.cancel.secondary-button'; }
    
    // Exchange connection configuration screen
    get exchangeConnectionImportDest() { return 'id=io.getdelta.android:id/screen.connect-eac-edd-edit.form.portfolio.data-input.select-button-with-value'; }
    get exchangeConnectionName() { return 'id=io.getdelta.android:id/screen.connect-eac-edd-edit.form.name.data-input.text'; }
    get exchangeConnectionKeyInput() { return 'id=io.getdelta.android:id/screen.connect-eac-edd-edit.form.auth-descriptor-0.data-input.text'; }
    get exchangeConnectionSecretInput() { return 'id=io.getdelta.android:id/screen.connect-eac-edd-edit.form.auth-descriptor-1.data-input.text'; }
    get exchangeConnectionDepositsToggle() { return 'id=io.getdelta.android:id/screen.connect-eac-edd-edit.form.import-transfers.data-input.switch'; }
    get exchangeConnectionImportOptions() { return 'id=io.getdelta.android:id/screen.connect-eac-edd-edit.form.import-type.data-input.select-button-with-value'; }
    get exchangeConnectionNotifyToggle() { return 'id=io.getdelta.android:id/screen.connect-eac-edd-edit.form.notify-future-transactions.data-input.switch'; }
    get exchangeConnectionAddButton() { return 'id=io.getdelta.android:id/screen.connect-eac-edd-edit.form.confirm.primary-button'; }
    get exchangeConnectionGoBackBtn() { return 'id=io.getdelta.android:id/io.getdelta.android:id/screen.connect-eac-edd-edit.header.back.action-button'; }
    get emptyTap() { return '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[1]'; }
    
    // SELECTORS
    setSelector(platform: string) {
        this.selector = 'id=io.getdelta.'+ platform +':id/screen.onboardings';
    }
    private getSelector() { return this.selector; }



}

export default new ExchangeConnectionScreen();


