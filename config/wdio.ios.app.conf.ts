import { join } from "path";
import config from "./wdio.shared.local.appium.conf";

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
    {
        // The defaults you need to have in your config
        platformName: "iOS",
        maxInstances: 1,

        deviceName: "iPhone 13",
        platformVersion: "16.0",
        orientation: "PORTRAIT",
        automationName: "XCUITest",
        // The path to the app
        app: join(
            process.cwd(),
            "./apps/Delta.zip"
        ),
        autoAcceptAlerts: true,
        newCommandTimeout: 60,
    },
];

exports.config = config;
