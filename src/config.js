require('dotenv').config({
  path: process.env.NODE_ENV == 'test' ? '.env.test' : '.env'
})
const { env } = process
module.exports = {
  NODE_ENV: env.NODE_ENV,
  NODE_LOG: env.NODE_LOG || false,
  SERVER: {
    host: env.SERVER_HOST,
    port: env.SERVER_PORT
  },
  SEQUELIZE: {
    username: env.PG_USERNAME,
    password: env.PG_PASSWORD,
    database: env.PG_DATABASE,
    host: env.PG_HOST,
    port: env.PG_PORT,
    dialect: env.DB_DIALECT,
    storage: './test/db/database_test.sqlite',
    charset: 'utf8',
    logging: false,
    dialectOptions:{
      requestTimeout: 300000,
      connectTimeout: 300000
    },
    define: {
      timestamps: false,
    }
  },
  ENCRYPT: {
    secret: env.ENCRYPT_SECRET,
    algorithm: env.ENCRYPT_ALGORITHM
  },
}