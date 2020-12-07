(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VDIWebrtc"] = factory();
	else
		root["VDIWebrtc"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(2), exports);
__exportStar(__webpack_require__(3), exports);
var BrowserAPIManager_1 = __webpack_require__(4);
Object.defineProperty(exports, "getUserMedia", { enumerable: true, get: function () { return BrowserAPIManager_1.getUserMedia; } });
Object.defineProperty(exports, "enumerateDevices", { enumerable: true, get: function () { return BrowserAPIManager_1.enumerateDevices; } });
Object.defineProperty(exports, "addScreenClip", { enumerable: true, get: function () { return BrowserAPIManager_1.addScreenClip; } });
Object.defineProperty(exports, "getDisplayMedia", { enumerable: true, get: function () { return BrowserAPIManager_1.getDisplayMedia; } });
Object.defineProperty(exports, "mapVDIAudioElement", { enumerable: true, get: function () { return BrowserAPIManager_1.mapVDIAudioElement; } });
Object.defineProperty(exports, "mapVDIVideoElement", { enumerable: true, get: function () { return BrowserAPIManager_1.mapVDIVideoElement; } });
Object.defineProperty(exports, "mediaDevices", { enumerable: true, get: function () { return BrowserAPIManager_1.mediaDevices; } });
Object.defineProperty(exports, "removeScreenClip", { enumerable: true, get: function () { return BrowserAPIManager_1.removeScreenClip; } });
__exportStar(__webpack_require__(5), exports);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PeerConnection = void 0;
var PeerConnection = /** @class */ (function () {
    function PeerConnection(configuration) {
        this.configuration = configuration;
    }
    PeerConnection.prototype.createPeerConnection = function () {
        console.log('[rcStack logger]: Creating new peerConnection from rcStack');
        return new RTCPeerConnection(this.configuration);
    };
    return PeerConnection;
}());
exports.PeerConnection = PeerConnection;
exports.default = PeerConnection;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.VMManager = void 0;
var VMManager = /** @class */ (function () {
    function VMManager(configuration) {
        this.configuration = configuration;
    }
    VMManager.prototype.startRedirection = function () {
        console.log('[rcStack logger]: redirection not implemented');
    };
    VMManager.prototype.onConnected = function () {
    };
    VMManager.prototype.onDisconnected = function () { };
    VMManager.prototype.onConnectionChange = function () { };
    VMManager.prototype.waitForRedirection = function () { };
    VMManager.prototype.stopRedirection = function () { };
    VMManager.prototype.restartRedirection = function () { };
    VMManager.prototype.redirectionStatus = function () { };
    VMManager.prototype.setRemoteSessionInformation = function () { };
    VMManager.prototype.setRedirectionFeatures = function () { };
    VMManager.prototype.getRedirectionFeatures = function () { };
    VMManager.prototype.isFeatureOn = function () { };
    VMManager.prototype.vmEventManager = function () { };
    VMManager.prototype.initVMManager = function () {
        console.log('[rcStack logger]:Setting up CEF VMManager... \nLoading VMManager...');
        var userAgent = navigator.userAgent;
        console.log('[rcStack logger]: The app is running on CEF Browser. The userAgent is ', userAgent);
        this.startRedirection();
    };
    return VMManager;
}());
exports.VMManager = VMManager;
exports.default = VMManager;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.removeScreenClip = exports.addScreenClip = exports.mapVDIVideoElement = exports.mapVDIAudioElement = exports.getDisplayMedia = exports.mediaDevices = exports.enumerateDevices = exports.getUserMedia = void 0;
function getUserMedia(constraints) {
    console.warn('[rcStack logger]: loading getUserMedia from rcStack...');
    return navigator.mediaDevices.getUserMedia(constraints);
}
exports.getUserMedia = getUserMedia;
function enumerateDevices() {
    console.log('[rcStack logger]: loading enumerate devices List from rcStack...');
    return navigator.mediaDevices.enumerateDevices();
}
exports.enumerateDevices = enumerateDevices;
function mediaDevices() {
    console.log('[rcStack logger]: Loading mediaDevices from rcStack...');
    return navigator.mediaDevices;
}
exports.mediaDevices = mediaDevices;
function getDisplayMedia(constraints) {
    console.log('[rcStack logger]: Loading getDisplayMedia from rcStack...');
    var mediaDevices = navigator.mediaDevices;
    return mediaDevices.getDisplayMedia(constraints);
}
exports.getDisplayMedia = getDisplayMedia;
function mapVDIAudioElement(element) {
    console.log('mapVDIAudioElement: not implemented');
    return element;
}
exports.mapVDIAudioElement = mapVDIAudioElement;
function mapVDIVideoElement(element) {
    console.log('[rcStack logger]: mapVDIVideoElement: not implemented');
    return element;
}
exports.mapVDIVideoElement = mapVDIVideoElement;
function addScreenClip(param) {
    console.log('[rcStack logger]: addScreenClip :not implemented');
    return null;
}
exports.addScreenClip = addScreenClip;
function removeScreenClip(param) {
    console.log('[rcStack logger]: removeScreenClip :not implemented');
    return null;
}
exports.removeScreenClip = removeScreenClip;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.WSManager = void 0;
var WSManager = /** @class */ (function () {
    function WSManager(configuration) {
        this.configuration = configuration;
    }
    WSManager.prototype.connectToWS = function () { };
    WSManager.prototype.disconnectToWS = function () { };
    WSManager.prototype.onWSError = function () { };
    WSManager.prototype.sendWSMessage = function () { };
    WSManager.prototype.reconnectToWS = function () { };
    /*Event Handling */
    WSManager.prototype.onWSConnect = function () { };
    WSManager.prototype.onWSDisconnect = function () { };
    WSManager.prototype.onRedirectionSuccess = function () { };
    return WSManager;
}());
exports.WSManager = WSManager;
exports.default = WSManager;


/***/ })
/******/ ]);
});