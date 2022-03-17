"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const convertor_1 = __importDefault(require("./convertor"));
const settlements_1 = __importDefault(require("./settlements"));
;
class razorpay extends settlements_1.default {
    constructor() {
        super(...arguments);
        this.refunds = {
            get: (options) => {
                if (options === null || options === void 0 ? void 0 : options.refundId)
                    return this.get('/refunds/' + (options === null || options === void 0 ? void 0 : options.refundId));
                else
                    return this.get('/refunds', convertor_1.default.getOptions(options));
            },
            details: (refundId) => this.get('/refunds/' + refundId),
            refundPayment: this.payments.refundPayment,
            update: (refundId, notes) => this.update('/refunds/' + refundId, { notes })
        };
    }
}
;
exports.default = razorpay;
