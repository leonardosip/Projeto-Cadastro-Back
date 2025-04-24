const { SEQUELIZE } = require('../../config')
module.exports = {
  username: SEQUELIZE.username,
  password: SEQUELIZE.password,
  database: SEQUELIZE.database,
  host: SEQUELIZE.host,
  port: SEQUELIZE.port,
  dialect: SEQUELIZE.dialect,
  storage: SEQUELIZE.storage,
  charset: SEQUELIZE.charset,
  logging: SEQUELIZE.logging,
  define: {
    underscored: true,
    underscoredAll: true
  },
  dialectOptions: SEQUELIZE.dialectOptions,
  pool: {
    max: 20,
    min: 0,
    acquire: 120000,
    idle: 5000
  }
}