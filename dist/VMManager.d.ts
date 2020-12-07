export default class VMManager {
    configuration: any;
    constructor(configuration: any);
    startRedirection(): void;
    onConnected(): void;
    onDisconnected(): void;
    onConnectionChange(): void;
    waitForRedirection(): void;
    stopRedirection(): void;
    restartRedirection(): void;
    redirectionStatus(): void;
    setRemoteSessionInformation(): void;
    setRedirectionFeatures(): void;
    getRedirectionFeatures(): void;
    isFeatureOn(): void;
    vmEventManager(): void;
    initVMManager(): void;
}
export { VMManager };
