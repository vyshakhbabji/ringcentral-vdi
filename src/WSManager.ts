export default class WSManager {
    public configuration: any;

    public constructor(configuration) {
        this.configuration = configuration;
    }

    public connectToWS() {}
    public disconnectToWS() {}
    public onWSError() {}
    public sendWSMessage() {}
    public reconnectToWS(){}

    /*Event Handling */
    public onWSConnect() {}
    public onWSDisconnect() {}
    public onRedirectionSuccess() {}
}
export {WSManager};