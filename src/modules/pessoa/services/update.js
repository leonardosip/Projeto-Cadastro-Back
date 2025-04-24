const DTO = require('./../DTO/createDTO')
const validateDTO = require('./../../../libs/validateDTO')
const { Pessoa } = require('./../../../db/sequelize')

const run = async({params,data,transaction}) => { 
  await validateDTO(DTO, data)

  let pessoa = await Pessoa.findOne({
    where:{
      id:params.id
    }
  })

  if(!pessoa)throw 'Pessoa nao encontrado'

  await Pessoa.update(data, {
    where:{
      id:params.id
    },transaction
  })

  return await Pessoa.findOne({
    where:{
      id : params.id
    },transaction
  })
}
module.exports = run