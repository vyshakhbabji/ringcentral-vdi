export function getUserMedia(constraints) {
    console.error('from index getUJSermedia')
    return navigator.mediaDevices.getUserMedia(constraints);
}

export function enumerateDevices() {
    return navigator.mediaDevices.enumerateDevices();
}

export function mediaDevices() {
    return navigator.mediaDevices;
}

export function getDisplayMedia(constraints) {
    const mediaDevices = navigator.mediaDevices as any;
    return mediaDevices.getDisplayMedia(constraints);
}

export function mapVDIAudioElement(element) {
    console.log('mapVDIAudioElement :not implemented');
    return element;
}

export function mapVDIVideoElement(element) {
    console.log('mapVDIVideoElement :not implemented');
    return element;
}

export function addScreenClip(param) {
    console.log('addScreenClip :not implemented');
    return null;
}

export function removeScreenClip(param) {
    console.log('removeScreenClip :not implemented');
    return null;
}