import { join } from "path";
import config from "./wdio.shared.local.appium.conf";

// ============
// Specs
// ============
config.specs = ["./tests/specs/**/*.spec.ts"];

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
  {
    // The defaults you need to have in your config
    platformName: "Android",
    maxInstances: 1,

    "appium:deviceName": "Xiaomi 2107113SG",
    "appium:platformVersion": "12.0",
    "appium:orientation": "PORTRAIT",
    "appium:automationName": "UiAutomator2",
    // The path to the app
    "appium:app": join(process.cwd(), "./apps/Delta.apk"),
    "appium:autoAcceptAlerts": true,
    //'appium:autoGrantPermissions': true,
    // 'appWaitActivity': 'io.getdelta.android/com.delta.MainActivity',
    "appium:newCommandTimeout": 240,
    path: "/wd/hub",
  },
];

exports.config = config;
