"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const dotenv_1 = require("dotenv");
const typeorm_1 = require("typeorm");
(0, dotenv_1.config)();
const configService = new config_1.ConfigService();
const dataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: configService.get('DB_HOST'),
    port: parseInt(configService.get('DB_PORT'), 10),
    username: configService.get('DB_USER'),
    password: configService.get('DB_PASSWORD'),
    database: configService.get('DB_NAME'),
    entities: [`${__dirname}/../src/**/entities/*.entity.{js,ts}`],
    synchronize: false,
    logging: configService.get('NODE_ENV') === 'development' || configService.get('NODE_ENV') === 'test',
    migrations: [`${__dirname}/migrations/*.{js,ts}`],
    migrationsTableName: 'migrations',
});
exports.default = dataSource;
//# sourceMappingURL=typeorm.config.js.map