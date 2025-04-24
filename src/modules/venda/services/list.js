const {Venda, Pessoa, Produto, ContaBancaria} = require ('./../../../db/sequelize')

const run = async() => {
  let vendas = await Venda.findAll({
    include:[
      {
        model: Pessoa,
        as : "pessoa",
        attributes : ["id","nome"]
      },
      {
        model : Produto,
        as : "produto",
        attributes : ["id","nome"]
      },
      {
        model : ContaBancaria,
        as : "conta_bancaria",
        attributes : ["id","nome"]
      }
    ],
    attributes: ["id", "valor", "criado_em", "alterado_em"]

  })
  return vendas
}
module.exports = run