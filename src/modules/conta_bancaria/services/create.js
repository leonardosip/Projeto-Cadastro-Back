const DTO = require('./../DTO/createDTO')
const validateDTO = require('./../../../libs/validateDTO')
const { ContaBancaria } = require('./../../../db/sequelize')

const run = async ({ data, transaction }) => {
  await validateDTO(DTO, data)

  const conta_bancaria = await ContaBancaria.create(data,{transaction})
  return conta_bancaria
}

module.exports = run;