import AppScreen from '../AppScreen';

class BrokerConnectionScreen extends AppScreen {

    constructor() {
        super();
    }

    // Broker Connection Screen
    get brokerSearchInput() { return 'id=io.getdelta.android:id/input'; }
    get brokerSearchCancel() { return '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]'; }
    get brokerSearchList() { return '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView'; }
    get brokerSearcFirstResult() { return '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup'; }
    get brokerNoticeUnderstandBtn() { return 'id=io.getdelta.android:id/primary-button'; }
    get brokerNoticeCancelBtn() { return 'id=io.getdelta.android:id/secondary-button'; }
    

    // SELECTORS
    setSelector(platform: string) {
        this.selector = 'id=io.getdelta.'+ platform +':id/screen.onboardings';
    }
    private getSelector() { return this.selector; }



}

export default new BrokerConnectionScreen();


