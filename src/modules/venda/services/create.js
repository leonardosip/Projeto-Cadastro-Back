const DTO = require('./../DTO/createDTO')
const validateDTO = require('./../../../libs/validateDTO')
const { Venda, Pessoa, Produto, ContaBancaria } = require('./../../../db/sequelize')


const run = async ({ data, transaction }) => {
  await validateDTO(DTO, data)

  const pessoa = await Pessoa.findOne({ where: { id: data.pessoa_id } })
  if (!pessoa) throw "Pessoa nao encontrada"

  const produto = await Produto.findOne({ where: { id: data.produto_id } })
  if (!produto) throw "Produto nao encontrado"

  const conta_bancaria = await ContaBancaria.findOne({ where: { id: data.conta_bancaria_id } })
  if (!conta_bancaria) throw "Conta Bancaria nao encontrada"

  let novoSaldo = conta_bancaria.saldo + data.valor

  await ContaBancaria.update({
    saldo: novoSaldo, 
    alterado_em: new Date()
  },{
    where:{
      id: conta_bancaria.id
    },
    transaction
  })

  const venda = await Venda.create(data, { transaction })

  return venda
}

module.exports = run;