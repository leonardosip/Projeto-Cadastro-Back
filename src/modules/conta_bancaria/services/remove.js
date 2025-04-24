const {ContaBancaria} = require ('../../../db/sequelize')

const run = async ({params, transaction}) => {
  await ContaBancaria.destroy({
    where:{
      id: params.id
    },
    transaction
  })

  return 'Deletado com sucesso'
}

module.exports = run 