/* 
 * This is the parent screen where needed actions are defined. When creating a new screen it should extend the AppScreen.
 * These screen then will inherit all the methods defined in this class.
 * The methods (actions) are constructed with wrappers around the 'WebDriverIO' methods provided by the framework. 
 * The most used actions are already defined, but if necessary to create
 * new actions in the future, please refer to: https://webdriver.io/docs/api for the documentation. 
 */

export default class AppScreen {
    protected selector: string;

    constructor () {
        this.selector = '';
    }

    // Bottom Screen Widget - present in all screens (Android)
    get bottomWidgetAndroid() { return 'id=android:id/navigationBarBackground'; }

    /**
     * Wait for the screen to be visible
     *
     * @param {boolean} isShown
     */
    async waitForIsShown (isShown = true): Promise<boolean | void> {
        return $(this.selector).waitForDisplayed({
            reverse: !isShown,
        });
    }


    /**
     * Wait for an element to be visible
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

    /**
     * Get the text inside an element - works best with 'TextView' locators
     *
     * @param {string} el
     * 
     */
    async elementInsideText(el: string) {
        const element = $(el);
        await element.getText();
    }

    /**
     * Extract HTML without the tags from an element
     *
     * @param {string} el
     * 
     */
    async elementInsideHTMLNoTags(el: string) {
        const element = $(el);
        await element.getHTML(false);
        
    }

    /**
     * Transform the inside text of 2 elements to numbers
     * Then check wether the number inside el1 is greater or equal to number inside el2
     * The element should be a 'TextView' containing numbers 
     * If no numbers present, it will return 'undefined' which will fail the step/script
     *
     * @param {string} el1
     * @param {string} el1
     * 
     */
    async shouldBeGreaterNumber(el1: string, el2: string) {
        const element1 = $(el1);
        const elementText1 = String(element1.getText());
        const elementNumber1 = Number(elementText1.replace(/\D/g, ""));

        const element2 = $(el2);
        const elementText2 = String(element2.getText());
        const elementNumber2 = Number(elementText2.replace(/\D/g, ""));

        expect(elementNumber1).toBeGreaterThanOrEqual(elementNumber2);
        
    }

    

    /**
     * Clear the value defined inside an input field
     *
     * @param {string} el
     * 
     */
    async emptyInput(el: string) {
        await $(el).clearValue();
    }

    /**
     * Expect an element to have a text containing the given parameter string, works best with 'TextView' locators
     * 
     * @param {string} el
     * 
     */
    async expectToHaveValue(el: string, param: string) {
        await expect($(el)).toHaveTextContaining(param);
    }


    /**
     * Expect the text inside of an element to have at least one of the (text)values defined in the array, works best with 'TextView' locators
     * 
     * @param {string} el
     * @param {string[]} values
     * 
     */
    async containsAtleastOneValue(el: string, values: string[]) {
        await expect($(el)).toHaveTextContaining(values);
    }


    /**
     * Expect an element not to have a value containing the given parameter, works best with 'TextView' locators
     *
     * @param {string} el
     * 
     */
    async expectNotToHaveValue(el: string, param: string) {
        await expect($(el)).not.toHaveTextContaining(param);
    }

    /**
     * Expect an element to exist on the screen
     *
     * @param {string} el
     * 
     */
    async elementExists(el: string) {
        await $(el).isExisting();
    }


    /**
     * Expect an element to not exist on a certain screen
     *
     * @param {string} el
     * 
     */
    async elementDoesNotExist(el: string) {
        await expect($(el)).not.toBeExisting();
    }


    /**
     * Expect an element to not be null 
     *
     * @param {string} el
     * 
     */
    async isNotEmpty(el: string) {
        await expect($(el)).not.toBeNull();
    }


    /**
     * Pause for a certain time, defined in milliseconds
     * Not optimal to wait for an element, use WaitForElement() instead
     * 
     * @param {number} milliseconds
     * 
     */
    async sleep(milliseconds: number) {
        await driver.pause(milliseconds);
    }


    /**
     * Tap on screen according to coordinates (x,y)
     *
     * @param {number} x
     * @param {number} y
     */
    async tapOnCoordinates(x: number, y: number) {
        await driver.touchAction({
        action: 'tap',
        x: x,
        y: y
    })
    }


    /**
     * Wait until an element is clickable, with a time-out defined in milliseconds
     *
     * @param {string} el
     * @param {number} timeOut
     * 
     */
    async canBeClicked(el: string, timeOut: number) {
        await $(el).waitForClickable({ timeout: timeOut });
    }
    

    /**
     * Simulate a standard swipe up
     * 
     * NOTE: The second action of wait is needed for the swipe to register correctly, even if it is 0!
     * 
     */
    async swipeUp() {
        

        // Coordinates config based on ratios of the screen windowSize. 
        const {height} = await driver.getWindowSize();
        const anchorPercentage = 50
        const startPointPercentage = 50
        const endPointPercentage = 10

        const anchor = height * anchorPercentage / 100
        const startPoint = height * startPointPercentage / 100
        const endPoint = height * endPointPercentage / 100

        // collection of touchActions needed for a correct swipe
        // Press on start point, wait 0s, moveTo endPoint , release
        driver.touchPerform([
            {
                action: 'press',
                options: {
                    x: anchor,
                    y: startPoint
                }
            },
            {
                action: 'wait',
                options: {
                    ms: 0
                }
            },
            {
                action: 'moveTo',
                options: {
                    x: anchor,
                    y: endPoint
                }
            },
            {
                action: 'release'
            }
        ])
    }

    /**
     * Simulate a standard swipe down
     * 
     * NOTE: The second action of wait is needed for the swipe to register correctly, even if it is 0!
     * 
     */
    async swipeDown() {
        

        // Coordinates config based on ratios of the screen windowSize. 
        const {height} = await driver.getWindowSize();
        const anchorPercentage = 50
        const startPointPercentage = 10
        const endPointPercentage = 50

        const anchor = height * anchorPercentage / 100
        const startPoint = height * startPointPercentage / 100
        const endPoint = height * endPointPercentage / 100

        // collection of touchActions needed for a correct swipe
        // Press on start point, wait 0s, moveTo endPoint , release
        driver.touchPerform([
            {
                action: 'press',
                options: {
                    x: anchor,
                    y: startPoint
                }
            },
            {
                action: 'wait',
                options: {
                    ms: 0
                }
            },
            {
                action: 'moveTo',
                options: {
                    x: anchor,
                    y: endPoint
                }
            },
            {
                action: 'release'
            }
        ])
    }


    /**
     * Simulate a standard swipe to the left
     * 
     * NOTE: The second action of wait is needed for the swipe to register correctly, even if it is 0!
     * 
     */
    async swipeToLeft() {
        //ait $(elToBeClicked).click();

        // Coordinates config
        const {height} = await driver.getWindowSize();
        const anchorPercentage = 50
        const startPointPercentage = 10
        const endPointPercentage = 80

        const anchor = height * anchorPercentage / 100
        const startPoint = height * startPointPercentage / 100
        const endPoint = height * endPointPercentage / 100

        // Swipe action
        // Press on start point, wait 0s, moveTo endPoint , release
        driver.touchPerform([
            {
                action: 'longPress',
                options: {
                    x: startPoint,
                    y: anchor
                }
            },
            {
                action: 'wait',
                options: {
                    ms: 1000
                }
            },
            {
                action: 'moveTo',
                options: {
                    x: endPoint,
                    y: anchor
                }
            },
            {
                action: 'release'
            }
        ])
    }

    /**
     * Swipes vertically from a given start point to and endpoint
     * NOTE: The second action of wait is needed for the swipe to register correctly, even if it is 0!
     * NOTE: To swipe up the start point percentage should be higher than the end point percentage & the opposite for a swipe down
     * 
     * @param {number} startpointprct
     * @param {number} endpointprct
     * 
     */
    async swipeVertically(startpointprct: number, endpointprct: number) {
        

        // Coordinates config
        const {height} = await driver.getWindowSize();
        const anchorPercentage = 50
        const startPointPercentage = startpointprct
        const endPointPercentage = endpointprct

        const anchor = height * anchorPercentage / 100
        const startPoint = height * startPointPercentage / 100
        const endPoint = height * endPointPercentage / 100

        // Swipe action
        // Press on start point, wait 0s, moveTo endPoint , release
        driver.touchPerform([
            {
                action: 'press',
                options: {
                    x: anchor,
                    y: startPoint
                }
            },
            {
                action: 'wait',
                options: {
                    ms: 0
                }
            },
            {
                action: 'moveTo',
                options: {
                    x: anchor,
                    y: endPoint
                }
            },
            {
                action: 'release'
            }
        ])
    }

    /**
     * Swipes horizontally from a given start point to and endpoint
     * NOTE: The second action of wait is needed for the swipe to register correctly, even if it is 0!
     * NOTE: To swipe right the start point percentage should be higher than the end point percentage & the opposite for a swipe down
     * 
     * @param {number} startpointprct
     * @param {number} endpointprct
     * 
     */
    async swipeHorizontally(startpointprct: number, endpointprct: number) {
        

        // Coordinates config
        const {height} = await driver.getWindowSize();
        const anchorPercentage = 50
        const startPointPercentage = startpointprct
        const endPointPercentage = endpointprct

        const anchor = height * anchorPercentage / 100
        const startPoint = height * startPointPercentage / 100
        const endPoint = height * endPointPercentage / 100

        // Swipe action
        // Press on start point, wait 0s, moveTo endPoint , release
        driver.touchPerform([
            {
                action: 'longPress',
                options: {
                    x: startPoint,
                    y: anchor
                }
            },
            {
                action: 'wait',
                options: {
                    ms: 1000
                }
            },
            {
                action: 'moveTo',
                options: {
                    x: endPoint,
                    y: anchor
                }
            },
            {
                action: 'release'
            }
        ])
    }
    
}