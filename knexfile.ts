import type { Knex } from "knex";
import getDatabaseUrl from "./server/src/config/getDatabaseUrl";

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "postgresql",
    connection: getDatabaseUrl(process.env.NODE_ENV || "development"),

    migrations: {
      directory: "./server/src/db/migrations"
    }
  },

  staging: {
    client: "postgresql",
    connection: getDatabaseUrl(process.env.NODE_ENV || "development"),
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./server/src/db/migrations",
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "postgresql",
    connection: getDatabaseUrl(process.env.NODE_ENV || "development"),
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './server/src/db/migrations',
      tableName: "knex_migrations"
    }
  }

};

module.exports = config;
