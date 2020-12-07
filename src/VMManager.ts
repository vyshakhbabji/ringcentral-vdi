export default class VMManager {
    public configuration: any;

    public constructor(configuration) {
        this.configuration = configuration;
    }

    public startRedirection() {
        console.log('[rcStack logger]: redirection not implemented');
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
    public isFeatureOn() {}
    public vmEventManager() {}
    public initVMManager(){
        console.log('[rcStack logger]:Setting up CEF VMManager... \nLoading VMManager...')
        var userAgent  = navigator.userAgent;
        console.log('[rcStack logger]: The app is running on CEF Browser. The userAgent is ', userAgent);
        this.startRedirection();
    }
}
export {VMManager};