const DTO = require('./../DTO/createDTO')
const validateDTO = require('./../../../libs/validateDTO')
const { Produto } = require('./../../../db/sequelize')

const run = async({params,data,transaction}) => { 
  await validateDTO(DTO, data)

  let produto = await Produto.findOne({
    where:{
      id:params.id
    }
  })

  if(!produto)throw 'Produto nao encontrado'

  await Produto.update(data, {
    where:{
      id:params.id
    },transaction
  })

  return await Produto.findOne({
    where:{
      id : params.id
    },transaction
  })
}
module.exports = run