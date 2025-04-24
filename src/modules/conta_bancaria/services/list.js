const {ContaBancaria} = require ('./../../../db/sequelize')

const run = async() => {
  let conta_bancaria = await ContaBancaria.findAll()
  return conta_bancaria
}
module.exports = run