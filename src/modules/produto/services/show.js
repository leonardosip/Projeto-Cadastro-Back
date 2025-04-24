const {Produto} = require ('./../../../db/sequelize')

const run = async({params}) => {
  let produto = await Produto.findOne({
    where:{
      id:params.id
    }
  })

  if(!produto)throw 'Produto nao encontrado'
  return produto
}
module.exports = run