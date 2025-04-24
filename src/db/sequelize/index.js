const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('./config')
const basename = path.basename(__filename)
const models = path.join(__dirname, 'models')
let db = null
if (!db) {
  db = {}
  const sequelize = new Sequelize(config.database, config.username, config.password, config)
  fs.readdirSync(models)
    .filter((file) => {
      return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    })
    .forEach((file) => {
      const model = require(path.join(models, file))(sequelize, Sequelize.DataTypes)
      db[model.name] = model
    })
  Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
      db[modelName].associate(db)
    }
  })
  db.sequelize = sequelize
  db.Sequelize = Sequelize
}
module.exports = db