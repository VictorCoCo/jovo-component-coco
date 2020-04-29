"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jovo_framework_1 = require("jovo-framework");
const config_1 = require("./src/config");
const handler_1 = require("./src/handler");
class GetPhoneNumber extends jovo_framework_1.ComponentPlugin {
    constructor(config) {
        super(config);
        this.config = config_1.Config;
        this.pathToI18n = './src/i18n/';
        this.name = 'jovo-component-get-phone-number';
        this.handler = {
            [this.name]: handler_1.phoneNumberHandler
        };
    }
}
exports.GetPhoneNumber = GetPhoneNumber;
//# sourceMappingURL=index.js.map