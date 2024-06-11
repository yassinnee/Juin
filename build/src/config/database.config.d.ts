declare const _default: (() => {
    type: string;
    host: string;
    username: string;
    password: string;
    port: number;
    database: string;
    entities: string[];
    synchronize: boolean;
    logging: boolean;
    migrations: string[];
    migrationsTableName: string;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    type: string;
    host: string;
    username: string;
    password: string;
    port: number;
    database: string;
    entities: string[];
    synchronize: boolean;
    logging: boolean;
    migrations: string[];
    migrationsTableName: string;
}>;
export default _default;
