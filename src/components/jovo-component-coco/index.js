"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jovo_framework_1 = require("jovo-framework");
const config_1 = require("./src/config");
const handler_1 = require("./src/handler");
class CoCo extends jovo_framework_1.ComponentPlugin {
    constructor(config) {
        super(config);
        this.config = config_1.Config;
        this.pathToI18n = './src/i18n/';
        this.name = 'jovo-component-coco';
        this.handler = {
            [this.name]: handler_1.CoCoHandler
        };
    }
}
exports.CoCo = CoCo;
//# sourceMappingURL=index.js.map