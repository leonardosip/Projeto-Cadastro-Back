const Joi = require('joi')

module.exports = Joi.object({
  nome: Joi.string().required(),
  saldo: Joi.number().required()
}).required().unknown(true)