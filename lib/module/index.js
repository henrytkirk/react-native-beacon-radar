import { NativeModules, Platform } from 'react-native';
const LINKING_ERROR = `The package 'react-native-beacon-radar' doesn't seem to be linked. Make sure: \n\n` + Platform.select({
  ios: "- You have run 'pod install'\n",
  default: ''
}) + '- You rebuilt the app after installing the package\n' + '- You are not using Expo Go\n';
const BeaconRadar = NativeModules.BeaconRadar ? NativeModules.BeaconRadar : new Proxy({}, {
  get() {
    throw new Error(LINKING_ERROR);
  }
});
export function startScanning(uuid, config) {
  return BeaconRadar.startScanning(uuid, config);
}
export function stopScanning() {
  return BeaconRadar.stopScanning();
}
export function startForegroundService() {
  return BeaconRadar.startForegroundService();
}
export function stopForegroundService() {
  return BeaconRadar.stopForegroundService();
}
export function requestAlwaysAuthorization() {
  return BeaconRadar.requestAlwaysAuthorization();
}
export function requestWhenInUseAuthorization() {
  return BeaconRadar.requestWhenInUseAuthorization();
}
export function getAuthorizationStatus() {
  return BeaconRadar.getAuthorizationStatus();
}
export function isBluetoothEnabled() {
  return BeaconRadar.isBluetoothEnabled();
}
export function getBluetoothState() {
  return BeaconRadar.getBluetoothState();
}
export function startRadar(config) {
  if (Platform.OS === 'android') {
    return BeaconRadar.startRadar(config);
  } else {
    console.warn('startRadar is only available on Android');
    return;
  }
}
export function initializeBluetoothManager() {
  return BeaconRadar.initializeBluetoothManager();
}
//# sourceMappingURL=index.js.map