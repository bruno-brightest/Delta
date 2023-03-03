export default class TabBar {
    static async openHome () {
        await $('//android.widget.FrameLayout[@content-desc="selected, , tab, 1 out of 5"]/android.widget.ImageView').click();
    }

    static async openFollowing () {
        await $('//android.widget.FrameLayout[@content-desc=", tab, 2 out of 5"]/android.widget.ImageView').click();
    }

    static async openPortfolio () {
        await $('//android.widget.FrameLayout[@content-desc=", tab, 3 out of 5"]/android.widget.ImageView').click();
    }

    static async openNews () {
        await $('//android.widget.FrameLayout[@content-desc=", tab, 4 out of 5"]/android.widget.ImageView').click();
    }

    static async openAlerts () {
        await $('//android.widget.FrameLayout[@content-desc=", tab, 5 out of 5"]/android.widget.ImageView').click();
    }

    static async waitForTabBarShown ():Promise<boolean|void> {
        return $('//android.widget.FrameLayout[@content-desc="selected, , tab, 1 out of 5"]/android.widget.ImageView').waitForDisplayed({
            timeout: 20000,
        });
    }
}
