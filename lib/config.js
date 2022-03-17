"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Razorpay = require('razorpay');
class config {
    constructor(authorization) {
        this.call = (path, options) => {
            return new Promise((resolev, reject) => {
                var _a, _b;
                if (this.instance && typeof this.instance == "object") {
                    const paths = path.split('/');
                    const newInstance = (_b = (_a = this.instance) === null || _a === void 0 ? void 0 : _a[paths[0]]) === null || _b === void 0 ? void 0 : _b[paths[1]];
                    const _hasInstance = newInstance && typeof newInstance == "function";
                    if (_hasInstance) {
                        newInstance(options).then((result) => {
                            return resolev(result);
                        }).catch((error) => reject(Object.assign({ error: true, status_code: error === null || error === void 0 ? void 0 : error.statusCode }, error === null || error === void 0 ? void 0 : error.error)));
                    }
                    else {
                        return reject({ error: true, description: `${paths[1]} function is not exist in ${paths[0]} object.` });
                    }
                }
                else {
                    return reject({ error: true, description: 'Authorization failed. Please check your key_id & key_secret' });
                }
            });
        };
        this.update = (path, id, notes) => {
            return new Promise((resolev, reject) => {
                var _a, _b;
                if (this.instance && typeof this.instance == "object") {
                    const paths = path.split('/');
                    const newInstance = (_b = (_a = this.instance) === null || _a === void 0 ? void 0 : _a[paths[0]]) === null || _b === void 0 ? void 0 : _b[paths[1]];
                    const _hasInstance = newInstance && typeof newInstance == "function";
                    if (_hasInstance) {
                        newInstance(id, { notes }).then((result) => {
                            return resolev(result);
                        }).catch((error) => reject(Object.assign({ error: true, status_code: error === null || error === void 0 ? void 0 : error.statusCode }, error === null || error === void 0 ? void 0 : error.error)));
                    }
                    else {
                        return reject({ error: true, description: `${paths[1]} function is not exist in ${paths[0]} object.` });
                    }
                }
                else {
                    return reject({ error: true, description: 'Authorization failed. Please check your key_id & key_secret' });
                }
            });
        };
        this.post = (path, id, options) => {
            return new Promise((resolev, reject) => {
                var _a, _b;
                if (this.instance && typeof this.instance == "object") {
                    const paths = path.split('/');
                    const newInstance = (_b = (_a = this.instance) === null || _a === void 0 ? void 0 : _a[paths[0]]) === null || _b === void 0 ? void 0 : _b[paths[1]];
                    const _hasInstance = newInstance && typeof newInstance == "function";
                    if (_hasInstance) {
                        newInstance(id, options).then((result) => {
                            return resolev(result);
                        }).catch((error) => reject(Object.assign({ error: true, status_code: error === null || error === void 0 ? void 0 : error.statusCode }, error === null || error === void 0 ? void 0 : error.error)));
                    }
                    else {
                        return reject({ error: true, description: `${paths[1]} function is not exist in ${paths[0]} object.` });
                    }
                }
                else {
                    return reject({ error: true, description: 'Authorization failed. Please check your key_id & key_secret' });
                }
            });
        };
        this.capture = (paymentId, amount, currency) => {
            return new Promise((resolev, reject) => {
                var _a, _b;
                if (this.instance && typeof this.instance == "object") {
                    const newInstance = (_b = (_a = this.instance) === null || _a === void 0 ? void 0 : _a.payments) === null || _b === void 0 ? void 0 : _b.capture;
                    const _hasInstance = newInstance && typeof newInstance == "function";
                    if (_hasInstance) {
                        newInstance(paymentId, amount, currency).then((result) => {
                            return resolev(result);
                        }).catch((error) => reject(Object.assign({ error: true, status_code: error === null || error === void 0 ? void 0 : error.statusCode }, error === null || error === void 0 ? void 0 : error.error)));
                    }
                    else {
                        return reject({ error: true, description: `Capture function is not exist in payments object.` });
                    }
                }
                else {
                    return reject({ error: true, description: 'Authorization failed. Please check your key_id & key_secret' });
                }
            });
        };
        if ((authorization === null || authorization === void 0 ? void 0 : authorization.key_id) && (authorization === null || authorization === void 0 ? void 0 : authorization.key_secret)) {
            this.instance = new Razorpay(authorization);
        }
        ;
    }
    ;
}
;
exports.default = config;
