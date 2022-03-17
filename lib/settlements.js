"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const convertor_1 = __importDefault(require("./convertor"));
const items_1 = __importDefault(require("./items"));
;
class settlements extends items_1.default {
    constructor() {
        super(...arguments);
        this.settlements = {
            get: (options) => {
                if (options === null || options === void 0 ? void 0 : options.id)
                    return this.get('/settlements/' + (options === null || options === void 0 ? void 0 : options.id));
                else
                    return this.get('/settlements', convertor_1.default.getOptions(options));
            },
            details: (settlementId) => this.get('/settlements/' + settlementId),
            getInstantSettlements: (options) => this.get('/settlements/ondemand', convertor_1.default.getOptions(options)),
            detail: (settlementId) => this.get('/settlements/' + settlementId),
            recon: (options) => this.get('/settlements/recon/combined', options),
            create: (options) => this.post('/settlements/ondemand', options)
        };
    }
}
;
exports.default = settlements;
