import { config } from '../wdio.shared.conf';
import * as dotenv from 'dotenv';

dotenv.config()

// =============================
// Browserstack specific config
// =============================
// User configuration
config.user = process.env.BROWSERSTACK_USER || 'BROWSERSTACK_USER';
config.key = process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY';
// Use browserstack service
config.services = ['browserstack'];

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
    {
        // Set your BrowserStack config
        debug: false,
        maxInstances: 1,

        // Set URL of the application under test
        app: process.env.BROWSERSTACK_APP_ID || 'BROWSERSTACK_APP_ID',

        // Specify device and os_version for testing
        device: "iPhone 14",
        os_version: "16.0",

        // Set other BrowserStack capabilities
        projectName: 'delta-ios',
        buildName: `ios-${process.env.GITHUB_RUN_ID}`,
        name: 'delta-ios-test',

        // Disable popups
        safariAllowPopups: true
    },
];

exports.config = config;