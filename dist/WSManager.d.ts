export default class WSManager {
    configuration: any;
    constructor(configuration: any);
    connectToWS(): void;
    disconnectToWS(): void;
    onWSError(): void;
    sendWSMessage(): void;
    reconnectToWS(): void;
    onWSConnect(): void;
    onWSDisconnect(): void;
    onRedirectionSuccess(): void;
}
export { WSManager };
