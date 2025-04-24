const DTO = require('./../DTO/createDTO')
const validateDTO = require('./../../../libs/validateDTO')
const { ContaBancaria } = require('./../../../db/sequelize')

const run = async({params,data,transaction}) => { 
  await validateDTO(DTO, data)

  let conta_bancaria = await ContaBancaria.findOne({
    where:{
      id:params.id
    }
  })

  if(!conta_bancaria)throw 'Conta Bancaria nao encontrado'

  await ContaBancaria.update(data, {
    where:{
      id:params.id
    },transaction
  })

  return await ContaBancaria.findOne({
    where:{
      id : params.id
    },transaction
  })
}
module.exports = run