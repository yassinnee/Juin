"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('database', () => ({
    type: 'postgres',
    host: process.env.NODE_ENV === 'test'
        ? process.env.DB_HOST_TEST
        : process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT),
    database: process.env.DB_NAME,
    entities: [`${__dirname}/../**/*.entity.{js,ts}`],
    synchronize: false,
    logging: process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test',
    migrations: [`${__dirname}/../src/migrations/*.{js,ts}`],
    migrationsTableName: 'migrations_typeorm',
}));
//# sourceMappingURL=database.config.js.map