import AppScreen from '../AppScreen';

class ConnectionsMainScreen extends AppScreen {

    constructor() {
        super();
    }

    // Connection List
    get exchangesConnectionAmount() {return 'id=io.getdelta.android:id/screen.connections.exchanges.toggle-panel.toggle.amount-connected-label'; }
    get walletsConnectionAmount() { return 'id=io.getdelta.android:id/screen.connections.wallets.toggle-panel.toggle.amount-connected-label'; }
    get brokersConnectionAmount() { return 'id=io.getdelta.android:id/screen.connections.brokers.toggle-panel.toggle.amount-connected-label'; }
    get syncAllConnectionsBtn() { return '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]'; }

    // Import Options
    get importAllTransactions() { return 'id=io.getdelta.android:id/screen.select.list.item-0.data-input.select-button'; }
    get importAllTransactionsSinceDate() { return 'id=io.getdelta.android:id/screen.select.list.item-1.data-input.select-button'; }
    get importNewTransactionsOnly() { return 'id=io.getdelta.android:id/screen.select.list.item-2.data-input.select-button'; }
    get importBalancesOnly() { return 'id=io.getdelta.android:id/screen.select.list.item-3.data-input.select-button'; }
    get importOptionsGoBackBtn() { return 'id=io.getdelta.android:id/screen.select.header.back.action-button'; }

    // WebView Elements
    get googleAcceptBtn() { return 'id=com.android.chrome:id/terms_accept'; }
    get googleNoThanksBtn() { return 'id=com.android.chrome:id/negative_button'; }
    get loginWithEToroBtn() { return '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.widget.FrameLayout[2]/android.webkit.WebView/android.view.View/android.widget.Button'; }
    get acceptEToroNoticeBtn() { return 'id=io.getdelta.android:id/primary-button'; }
    
    // SELECTORS
    setSelector(platform: string) {
        this.selector = 'id=io.getdelta.'+ platform +':id/screen.onboardings';
    }
    private getSelector() { return this.selector; }



}

export default new ConnectionsMainScreen();


