const {Produto} = require ('./../../../db/sequelize')

const run = async() => {
  let produtos = await Produto.findAll()
  return produtos
}
module.exports = run