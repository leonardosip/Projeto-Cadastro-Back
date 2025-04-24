const {Venda} = require ('../../../db/sequelize')

const run = async ({params, transaction}) => {
  await Venda.destroy({
    where:{
      id: params.id
    },
    transaction
  })

  return 'Deletado com sucesso'
}

module.exports = run 