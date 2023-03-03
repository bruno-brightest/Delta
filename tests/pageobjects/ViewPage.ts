export default class ViewPage {

    /**
     * Wait for the element to be visible
     *
     * @param {string} el
     */
    async waitForElement(el: string) {
        await $(el).waitForDisplayed();
    }

    /**
     * boolean isDisplayed
     *
     * @param {string} el
     */
    async isDisplayed(el: string) {
        return await $(el).isDisplayed;
    }

    /**
     * Tap on an element
     *
     * @param {string} el
     */
    async tapOnElement(el: string) {
        await $(el).click();
    }

    /**
     * Tap and set a value for an element
     *
     * @param {string} el
     * @param {string} value
     */
    async tapAndSetValue(el: string, value: string) {
        await $(el).click();
        await $(el).setValue(value);
    }
}