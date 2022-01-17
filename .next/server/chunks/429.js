"use strict";
exports.id = 429;
exports.ids = [429];
exports.modules = {

/***/ 429:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
__webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = void 0;
var _key, _key1;
const responseSymbol = Symbol('response');
__webpack_unused_export__ = responseSymbol;
const passThroughSymbol = Symbol('passThrough');
__webpack_unused_export__ = passThroughSymbol;
const waitUntilSymbol = Symbol('waitUntil');
__webpack_unused_export__ = waitUntilSymbol;
class FetchEvent {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(_request){
        this[_key] = [];
        this[_key1] = false;
    }
    respondWith(response) {
        if (!this[responseSymbol]) {
            this[responseSymbol] = Promise.resolve(response);
        }
    }
    passThroughOnException() {
        this[passThroughSymbol] = true;
    }
    waitUntil(promise) {
        this[waitUntilSymbol].push(promise);
    }
}
__webpack_unused_export__ = FetchEvent;
_key = waitUntilSymbol;
_key1 = passThroughSymbol;

//# sourceMappingURL=fetch-event.js.map

/***/ })

};
;