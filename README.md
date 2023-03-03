# @getdelta/mobile-app-tests

This is the codebase of the mobile app tests.

[![Tests](https://github.com/getdelta/mobile-app-tests/actions/workflows/main.yml/badge.svg)](https://github.com/getdelta/mobile-app-tests/actions/workflows/main.yml) [![Code Quality](https://github.com/getdelta/mobile-app-tests/actions/workflows/code_quality.yml/badge.svg)](https://github.com/getdelta/mobile-app-tests/actions/workflows/code_quality.yml)

### Tests

```
npm run android:e2e
```
```
npm run ios:e2e
```

Run one specific test
```
npm run android:e2e -- --spec=test.gold4.signin-with-etoro.spec.ts
```

## Links
Detox vs Appium
```
https://blog.codecentric.de/en/2020/07/detox-vs-appium-a-comparison-of-react-native-testing-frameworks/
```
Blog on Accessibility IDs
```
https://dev.to/nextlevelbeard/an-end-to-the-abuse-of-accessibility-ids-5d2j
```
App Activity on Android 
```
https://support.testsigma.com/support/solutions/articles/32000019977-how-to-find-app-package-and-app-activity-of-your-android-app
```

### Commands
```
$ANDROID_HOME/emulator/emulator -netdelay none -netspeed full -no-snapshot-load -avd Pixel_5_API_33 -dns-server 8.8.8.8
```
