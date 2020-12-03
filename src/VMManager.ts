export default class VMManager {
    public configuration: any;

    public constructor(configuration) {
        this.configuration = configuration;
    }

    public startRedirection() {
        console.error('creating new pc');
    }

    public onConnected() {

    }
    public onDisconnected() {}
    public onConnectionChange() {}
    public waitForRedirection() {}
    public stopRedirection() {}
    public restartRedirection() {}
    public redirectionStatus() {}
    public setRemoteSessionInformation() {}
    public setRedirectionFeatures() {}
    public getRedirectionFeatures() {}
    public ifFeatureOn() {}
    public vmEventManager() {}
}
export {VMManager};