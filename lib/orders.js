"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = __importDefault(require("./api"));
const convertor_1 = __importDefault(require("./convertor"));
;
class orders extends api_1.default {
    constructor() {
        super(...arguments);
        this.orders = {
            get: (options) => {
                if (options === null || options === void 0 ? void 0 : options.orderId)
                    return this.get('/orders/' + (options === null || options === void 0 ? void 0 : options.orderId));
                else
                    return this.get('/orders', convertor_1.default.orderOptions(options));
            },
            details: (orderId) => this.get('/orders/' + orderId),
            create: (data) => this.post('/orders', data),
            peyments: (orderId) => this.get('/orders/' + orderId + '/payments'),
            update: (orderId, notes) => this.update('/orders/' + orderId, { notes })
        };
    }
}
;
exports.default = orders;
