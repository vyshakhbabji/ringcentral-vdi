export default class AudioManager {
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

    public play() {
        console.log('.play() called');
    }

    public pause() {
        console.log('.pause() called');
    }
}

export {AudioManager};
