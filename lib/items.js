"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const convertor_1 = __importDefault(require("./convertor"));
const payments_1 = __importDefault(require("./payments"));
const isValid = (value, type) => {
    return value && typeof value === type;
};
;
class items extends payments_1.default {
    constructor() {
        super(...arguments);
        this.items = {
            get: (options) => {
                if (options === null || options === void 0 ? void 0 : options.itemId)
                    return this.get('/items/' + (options === null || options === void 0 ? void 0 : options.itemId));
                else
                    return this.get('/items', convertor_1.default.getOptions(options));
            },
            details: (itemId) => this.get('/items/' + itemId),
            create: (data) => this.post('/items', data),
            update: (itemId, data) => this.update('/items/' + itemId, data),
            delete: (itemId) => this.delete('/items', itemId)
        };
    }
}
;
exports.default = items;
