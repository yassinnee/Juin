"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('config', () => ({
    port: parseInt(process.env.PORT, 10) || 5432,
    nodenv: process.env.NODE_ENV,
}));
//# sourceMappingURL=app.config.js.map