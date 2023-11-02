import knex from "knex";
import knexConfig from "./knexfile";

const database = knex(
    process.env.NODE_ENV === "PRODUCTION" ? knexConfig.production : knexConfig.development
);

export default database;
