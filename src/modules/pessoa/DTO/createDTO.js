const Joi = require('joi')

module.exports = Joi.object({
  nome: Joi.string().required(),
  idade: Joi.number().required(),
  numero : Joi.string().required(),
  cpf : Joi.string().required()
}).required()