import { Knex } from 'knex';
import dotenv from "dotenv";

dotenv.config({path: '../../.env'});

interface IKnexConfig {
    [key: string]: Knex.Config;
}

const knexConfig : IKnexConfig  = {
    development: {
        client: 'postgresql',
        connection: {
            database: "qeeexkex",
            user: "qeeexkex",
            password: "pdZejt6Ltz978YESL1ArzJb9RXly-k2F",
            host: "satao.db.elephantsql.com",
        },
        pool: {
            min: 3,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        },
        seeds: {
          directory: './seeds',
          extension: 'ts'
        },
    },

    production: {
        client: 'postgresql',
        connection: {
            database: "qeeexkex",
            user: "qeeexkex",
            password: "pdZejt6Ltz978YESL1ArzJb9RXly-k2F",
            host: "satao.db.elephantsql.com",
        },
        pool: {
            min: 3,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    },
};

export default knexConfig