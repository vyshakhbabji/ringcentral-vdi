export default class VideoManager {
    public videoWidth = 0;
    public videoHeight = 0;
    public isLoaded = false;
    public connectionState = 'disconnected';
    public dispose = false;
    public disposeTimer: any = null;

    private _sinkId: any = '';

    get sinkId(): any {
        return this._sinkId;
    }

    set sinkId(value: any) {
        this._sinkId = value;
    }

    private _srcObject: any = null;

    get srcObject(): any {
        return this._srcObject;
    }

    set srcObject(value: any) {
        this._srcObject = value;
    }

    private _src: any = null;

    get src(): any {
        return this._src;
    }

    set src(value: any) {
        this._src = value;
    }

    private _onconnectionstatechange;

    set onconnectionstatechange(value) {
        this._onconnectionstatechange = value;
    }

    private _onloadedmetadata;

    set onloadedmetadata(value) {
        this._onloadedmetadata = value;
    }

    public play() {
        console.log('.play() called');
    }

    public pause() {
        console.log('.pause() called');
    }

    public removeSreenClip() {}

    public addScreenClip() {}

    public setFrame() {}

    public disconnect() {}

    public connectTo() {}

    public setupOnVideoFrameChanged() {}
}

export {VideoManager};
