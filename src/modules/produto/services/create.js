const DTO = require('./../DTO/createDTO')
const validateDTO = require('./../../../libs/validateDTO')
const { Produto } = require('./../../../db/sequelize')

const run = async ({ data, transaction }) => {
  await validateDTO(DTO, data)

  const produto = await Produto.create(data,{transaction})

  return produto
}

module.exports = run;