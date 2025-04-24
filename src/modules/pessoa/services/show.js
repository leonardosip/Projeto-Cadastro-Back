const {Pessoa, Venda, Produto, ContaBancaria} = require ('./../../../db/sequelize')

const run = async({params}) => {
  let pessoa = await Pessoa.findOne({
    where:{
      id:params.id
    },
    include : { 
      model : Venda, as : "vendas",
      attributes : ["id", "valor"],
      include : [
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
      ]
    }
  })

  if(!pessoa)throw 'Pessoa nao encontrada'
  return pessoa
}
module.exports = run