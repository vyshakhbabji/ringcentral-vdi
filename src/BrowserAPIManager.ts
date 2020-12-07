export function getUserMedia(constraints) {
    console.warn('[rcStack logger]: loading getUserMedia from rcStack...')
    return navigator.mediaDevices.getUserMedia(constraints);
}

export function enumerateDevices() {
    console.log('[rcStack logger]: loading enumerate devices List from rcStack...');
    return navigator.mediaDevices.enumerateDevices();
}

export function mediaDevices() {
    console.log('[rcStack logger]: Loading mediaDevices from rcStack...');
    return navigator.mediaDevices;
}

export function getDisplayMedia(constraints) {
    console.log('[rcStack logger]: Loading getDisplayMedia from rcStack...');
    const mediaDevices = navigator.mediaDevices as any;
    return mediaDevices.getDisplayMedia(constraints);
}

export function mapVDIAudioElement(element) {
    console.log('mapVDIAudioElement: not implemented');
    return element;
}

export function mapVDIVideoElement(element) {
    console.log('[rcStack logger]: mapVDIVideoElement: not implemented');
    return element;
}

export function addScreenClip(param) {
    console.log('[rcStack logger]: addScreenClip :not implemented');
    return null;
}

export function removeScreenClip(param) {
    console.log('[rcStack logger]: removeScreenClip :not implemented');
    return null;
}