# React Native Router Flux with MobX Starter

This starter/boilerplate/example is a simple way to start a react native app with some basic screens including login, home and notifications as well as a custom drawer with a list of items which allow you to change the color theme of the app.   

* UI Components by [Nativebase](https://nativebase.io)
* Routing by [RNRF](https://github.com/aksonov/react-native-router-flux)
* State Management by [MobX](https://mobx.io/)

## Prepare your project

```bash
# Install dependencies
yarn

# Change the name in package.json, index.js, app.json. 
# Then generate android and ios folders (do not overwrite .babelrc when asked)
react-native upgrade
react-native link

```

## Android development

```bash
# Run on your connected device
npm run android


# Build debug apk 
# Bundle it first
react-native bundle --dev false --platform android --entry-file index.js --bundle-output ./android/app/build/intermediates/assets/debug/index.android.bundle --assets-dest ./android/app/build/intermediates/res/merged/debug

# Build 
cd android
gradlew assembleDebug

# Install via usb to your device
adb install android/app/build/outputs/apk/debug/app-debug.apk

```