const {Venda, Pessoa ,Produto, ContaBancaria } = require ('./../../../db/sequelize')

const run = async({params}) => {
  let venda = await Venda.findOne({
    where:{
      id:params.id
    },
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

  if(!venda)throw 'Venda nao encontrada'
  return venda
}
module.exports = run