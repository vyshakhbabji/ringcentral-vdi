export default class PeerConnection {
    public configuration: any;

    public constructor(configuration) {
        this.configuration = configuration;
    }
    public createPeerConnection(){
        console.log('[rcStack logger]: Creating new peerConnection from rcStack');
        return new RTCPeerConnection(this.configuration);
    }
}

export {PeerConnection};
