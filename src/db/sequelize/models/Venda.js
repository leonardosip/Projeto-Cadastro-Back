const { ForeignKeyConstraintError } = require("sequelize")
const { validate } = require("../../../modules/conta_bancaria/DTO/createDTO")


module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define('Venda', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      validate: false
    },
    pessoa_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: "pessoas",
        key: "id"
      }
    },
    produto_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: "produtos",
        key: "id"
      }
    },
    conta_bancaria_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: "conta_bancaria",
        key: "id"
      }
    },
    valor : {
      allowNull : false, 
      type:DataTypes.DOUBLE
    },
    criado_em: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    alterado_em: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    timestamps: true,
    createdAt: 'criado_em',
    updatedAt: 'alterado_em',
    tableName: 'vendas'
  })

  model.associate = (models) => {
    model.belongsTo(models.Pessoa, {foreignKey:"pessoa_id", as: "pessoa"})
    model.belongsTo(models.Produto, {foreignKey:"produto_id", as: "produto"})
    model.belongsTo(models.ContaBancaria, {foreignKey:"conta_bancaria_id", as: "conta_bancaria"})
  }
  return model
}