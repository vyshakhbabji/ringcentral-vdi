# ringcentral-vdi

## About
A thin wrapper lbrary which wraps subset of browser apis , RTCPeerConnection API and VDI VM Manager apis which will be further customized for running on VDI environment by adding custom feature/functionality to support webRTC media redirection

## Installation

```ssh
git clone https://github.com/vyshakhbabji/ringcentral-vdi.git
npm run-scipt build
```

## Usage
```
import * as rcStack from "[path]/ringcentral-vdi/VDIWebRTC";
or
const rcStack = require('[path]/ringcentral-vdi/VDIWebRTC')
```
## APIs Available to use

getUserMedia
  ```
  rcStack
    .getUserMedia(constraints)
    .then((streams: any) => {
     ...
    })
    .catch((e: any) => {
      ...
    });
```

enumerateDevices
```
rcstack.enumerateDevices();
```

mediaDevices

```
rcstack.mediaDevices();
```

getDisplayMedia
```
  rcStack
    .getDisplayMedia(constraints)
    .then((streams: any) => {
     ...
    })
    .catch((e: any) => {
      ...
    });
```

mapVDIAudioElement
```
rcstack.mapVDIAudioElement(remoteAudioElement);
```

mapVDIVideoElement
```
rcstack.mapVDIVideoElement(remoteVideoElement);
```

peerConnection

```
this.peerConnection = new rcStack.PeerConnection(options.rtcConfiguration).createPeerConnection();
```

VMManager API usage:
```
    rcStack.startRedirection();
    rcStack.onConnected();
    rcStack.onDisconnected();
    rcStack.onConnectionChange();
    rcStack.waitForRedirection();
    rcStack.stopRedirection();
    rcStack.restartRedirection();
    rcStack.redirectionStatus();
    rcStack.setRemoteSessionInformation();
    rcStack.setRedirectionFeatures();
    rcStack.getRedirectionFeatures();
    rcStack.ifFeatureOn();
    rcStack.vmEventManager();
```