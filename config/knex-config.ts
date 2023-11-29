import { Knex } from "knex";
import dotenv from "dotenv";

dotenv.config({ path: "../../.env" });

interface IKnexConfig {
    [key: string]: Knex.Config;
}

const knexConfig: IKnexConfig = {
    development: {
        client: "postgresql",
        connection: {
            database: "qeeexkex",
            user: "qeeexkex",
            password: "EPSXZfDdCa_FM1bucYKGcMkzrcmQ8kOl",
            host: "satao.db.elephantsql.com",
        },
        pool: {
            min: 3,
            max: 5,
        },
        migrations: {
            tableName: "knex_migrations",
        },
        seeds: {
            directory: "./seeds",
            extension: "ts",
        },
    },

    production: {
        client: "postgresql",
        connection: {
            database: "qeeexkex",
            user: "qeeexkex",
            password: "EPSXZfDdCa_FM1bucYKGcMkzrcmQ8kOl",
            host: "satao.db.elephantsql.com",
        },
        pool: {
            min: 3,
            max: 5,
        },
        migrations: {
            tableName: "knex_migrations",
        },
        seeds: {
            directory: "./seeds",
            extension: "ts",
        },
    },
};

export default knexConfig;
