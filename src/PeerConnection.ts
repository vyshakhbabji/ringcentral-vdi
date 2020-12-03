export default class PeerConnection {
    public configuration: any;

    public constructor(configuration) {
        this.configuration = configuration;
    }
    public createPeerConnection(){
        console.error('creating new pc');
        return new RTCPeerConnection(this.configuration);
    }
}

export {PeerConnection};
