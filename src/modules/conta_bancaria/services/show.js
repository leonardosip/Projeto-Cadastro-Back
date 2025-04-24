const {ContaBancaria} = require ('./../../../db/sequelize')

const run = async({params}) => {
  let conta_bancaria = await ContaBancaria.findOne({
    where:{
      id:params.id
    }
  })

  if(!conta_bancaria)throw 'conta bancaria nao encontrada'
  return conta_bancaria
}
module.exports = run