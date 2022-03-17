"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const convertor_1 = __importDefault(require("./convertor"));
const orders_1 = __importDefault(require("./orders"));
const isValid = (value, type) => {
    return value && typeof value === type;
};
;
class payments extends orders_1.default {
    constructor() {
        super(...arguments);
        this.payments = {
            get: (options) => {
                if (options === null || options === void 0 ? void 0 : options.paymentId)
                    return this.get('/payments/' + (options === null || options === void 0 ? void 0 : options.paymentId));
                else
                    return this.get('/payments', convertor_1.default.getOptions(options));
            },
            details: (paymentId) => this.get('/payments/' + paymentId),
            update: (paymentId, notes) => {
                return new Promise((resolve, reject) => {
                    if (isValid(paymentId, "string") && isValid(notes, "object")) {
                        this.update('/payments/' + paymentId, { notes }).then((result) => {
                            return resolve(result);
                        }).catch((error) => reject(error));
                    }
                    else if (!isValid(paymentId, 'string')) {
                        return reject({ error: true, message: 'Payment ID must be a string' });
                    }
                    else if (!isValid(notes, 'object')) {
                        return reject({ error: true, message: 'Notes must be an object' });
                    }
                });
            },
            capture: (paymentId, amount, currency) => {
                return new Promise((resolve, reject) => {
                    if (paymentId && isValid(amount, 'number') && isValid(currency, 'string')) {
                        this.post('/payments/' + paymentId + '/capture', { amount, currency })
                            .then((result) => resolve(result)).catch((error) => reject(error));
                    }
                    else if (!paymentId) {
                        return reject({ error: true, message: 'Payment Id is required parameter.' });
                    }
                    else if (!isValid(amount, 'number')) {
                        return reject({ error: true, message: 'Amount is required parameter.' });
                    }
                    else if (!isValid(currency, 'string')) {
                        return reject({ error: true, message: 'Currency is required parameter.' });
                    }
                });
            },
            refundPayment: (paymentId, options) => {
                return new Promise((resolve, reject) => {
                    if (isValid(paymentId, "string")) {
                        if (options && !(options === null || options === void 0 ? void 0 : options.speed)) {
                            return reject({ error: true, message: 'Speed is required parameter' });
                        }
                        ;
                        this.post('/payments/' + paymentId + '/refund', options !== null && options !== void 0 ? options : {})
                            .then((result) => resolve(result)).catch((error) => reject(error));
                    }
                    else {
                        return reject({ error: true, message: 'Payment Id is required parameter' });
                    }
                });
            },
            refunds: (paymentId, options) => {
                return this.get('/payments/' + paymentId + '/refunds', convertor_1.default.getOptions(options));
            },
            getRefundDetails: (paymentId, refundId) => {
                return this.get(`/payments/${paymentId}/refunds/${refundId}`);
            }
        };
    }
}
;
exports.default = payments;
