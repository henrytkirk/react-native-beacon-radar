"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAuthorizationStatus = getAuthorizationStatus;
exports.getBluetoothState = getBluetoothState;
exports.initializeBluetoothManager = initializeBluetoothManager;
exports.isBluetoothEnabled = isBluetoothEnabled;
exports.requestAlwaysAuthorization = requestAlwaysAuthorization;
exports.requestWhenInUseAuthorization = requestWhenInUseAuthorization;
exports.startForegroundService = startForegroundService;
exports.startRadar = startRadar;
exports.startScanning = startScanning;
exports.stopForegroundService = stopForegroundService;
exports.stopScanning = stopScanning;
var _reactNative = require("react-native");
const LINKING_ERROR = `The package 'react-native-beacon-radar' doesn't seem to be linked. Make sure: \n\n` + _reactNative.Platform.select({
  ios: "- You have run 'pod install'\n",
  default: ''
}) + '- You rebuilt the app after installing the package\n' + '- You are not using Expo Go\n';
const BeaconRadar = _reactNative.NativeModules.BeaconRadar ? _reactNative.NativeModules.BeaconRadar : new Proxy({}, {
  get() {
    throw new Error(LINKING_ERROR);
  }
});
function startScanning(uuid, config) {
  return BeaconRadar.startScanning(uuid, config);
}
function stopScanning() {
  return BeaconRadar.stopScanning();
}
function startForegroundService() {
  return BeaconRadar.startForegroundService();
}
function stopForegroundService() {
  return BeaconRadar.stopForegroundService();
}
function requestAlwaysAuthorization() {
  return BeaconRadar.requestAlwaysAuthorization();
}
function requestWhenInUseAuthorization() {
  return BeaconRadar.requestWhenInUseAuthorization();
}
function getAuthorizationStatus() {
  return BeaconRadar.getAuthorizationStatus();
}
function isBluetoothEnabled() {
  return BeaconRadar.isBluetoothEnabled();
}
function getBluetoothState() {
  return BeaconRadar.getBluetoothState();
}
function startRadar(config) {
  if (_reactNative.Platform.OS === 'android') {
    return BeaconRadar.startRadar(config);
  } else {
    console.warn('startRadar is only available on Android');
    return;
  }
}
function initializeBluetoothManager() {
  return BeaconRadar.initializeBluetoothManager();
}
//# sourceMappingURL=index.js.map