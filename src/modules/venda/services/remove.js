const {Venda, ContaBancaria} = require ('../../../db/sequelize')

const run = async ({params, transaction}) => {

  let venda = await Venda.findOne({
    where:{
      id:params.id
    }
  })

  const conta_bancaria = await ContaBancaria.findOne({ where: { id: venda.conta_bancaria_id } })

  let novoSaldo = conta_bancaria.saldo - venda.valor

  await ContaBancaria.update({
    saldo: novoSaldo, 
    alterado_em: new Date()
  },{
    where:{
      id: conta_bancaria.id
    },
    transaction
  })

  await Venda.destroy({
    where:{
      id: params.id
    },
    transaction
  })

  return 'Deletado com sucesso'
}

module.exports = run 