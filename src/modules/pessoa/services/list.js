const {Pessoa} = require ('./../../../db/sequelize')

const run = async() => {
  let pessoas = await Pessoa.findAll()
  return pessoas
}
module.exports = run