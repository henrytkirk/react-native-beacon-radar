export declare function startScanning(uuid: string, config: any): any;
export declare function stopScanning(): any;
export declare function startForegroundService(): any;
export declare function stopForegroundService(): any;
export declare function requestAlwaysAuthorization(): Promise<{
    status: string;
}>;
export declare function requestWhenInUseAuthorization(): Promise<{
    status: string;
}>;
export declare function getAuthorizationStatus(): Promise<{
    status: string;
}>;
export declare function isBluetoothEnabled(): Promise<boolean>;
export declare function getBluetoothState(): Promise<string>;
export declare function startRadar(config: any): any;
export declare function initializeBluetoothManager(): any;
//# sourceMappingURL=index.d.ts.map