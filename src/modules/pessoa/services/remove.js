const {Pessoa} = require ('../../../db/sequelize')

const run = async ({params, transaction}) => {
  await Pessoa.destroy({
    where:{
      id: params.id
    },
    transaction
  })

  return 'Deletado com sucesso'
}

module.exports = run 