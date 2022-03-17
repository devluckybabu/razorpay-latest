"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const url = "https://api.razorpay.com/v1";
const headers = { "Content-Type": "application/json", "Accept": "application/json" };
const getParams = (data) => {
    if (data && typeof data == "object") {
        const params = Object.entries(data).map(([key, value]) => `${key}=${value}`).join("&");
        return '?' + params;
    }
    ;
    return '';
};
class API {
    constructor(auth) {
        this.get = (route, options) => {
            return new Promise((resolve, reject) => {
                const params = getParams(options);
                axios_1.default.get(url + route + params, {
                    headers,
                    auth: {
                        username: this.username,
                        password: this.password
                    }
                }).then((result) => resolve(result === null || result === void 0 ? void 0 : result.data)).catch((error) => { var _a, _b; return reject((_b = (_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.error); });
            });
        };
        this.post = (route, data) => {
            return new Promise((resolve, reject) => {
                axios_1.default.post(url + route, data, {
                    headers,
                    auth: {
                        username: this.username,
                        password: this.password
                    }
                }).then((result) => resolve(result === null || result === void 0 ? void 0 : result.data)).catch((error) => { var _a, _b; return reject((_b = (_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.error); });
            });
        };
        this.update = (route, data) => {
            return new Promise((resolve, reject) => {
                axios_1.default.patch(url + route, data, {
                    headers,
                    auth: {
                        username: this.username,
                        password: this.password
                    }
                }).then((result) => resolve(result === null || result === void 0 ? void 0 : result.data)).catch((error) => { var _a, _b; return reject((_b = (_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.error); });
            });
        };
        this.delete = (route, id) => {
            return new Promise((resolve, reject) => {
                axios_1.default.delete(url + route + '/' + id, {
                    headers,
                    auth: {
                        username: this.username,
                        password: this.password
                    }
                }).then((result) => resolve(result === null || result === void 0 ? void 0 : result.data))
                    .catch((error) => { var _a, _b; return reject((_b = (_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.error); });
            });
        };
        this.username = auth.key_id;
        this.password = auth.key_secret;
    }
    ;
}
;
exports.default = API;
