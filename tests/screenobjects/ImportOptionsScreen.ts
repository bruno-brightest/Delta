import AppScreen from './AppScreen';


class ImportOptionsScreen extends AppScreen {

    constructor() {
        super();
    }

    get validateButton() { return '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]'; }


}

export default new ImportOptionsScreen();


