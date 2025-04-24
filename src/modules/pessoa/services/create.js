const DTO = require('./../DTO/createDTO')
const validateDTO = require('./../../../libs/validateDTO')
const { Pessoa } = require('./../../../db/sequelize')

const run = async ({ data, transaction }) => {
  await validateDTO(DTO, data)

  const pessoa = await Pessoa.create(data,{transaction})
  return pessoa
}

module.exports = run;