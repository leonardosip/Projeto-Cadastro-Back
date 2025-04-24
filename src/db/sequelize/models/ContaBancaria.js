const { validate } = require("../../../modules/conta_bancaria/DTO/createDTO")


module.exports = (sequelize, DataTypes) => {
  return sequelize.define('ContaBancaria', {
    id: {
      type : DataTypes.INTEGER,
      autoIncrement : true,
      primaryKey : true, 
      validate: false 
    },
    nome:{
      allowNull: false,
      type : DataTypes.STRING,
    },
    saldo : {
      allowNull : false, 
      type:DataTypes.DOUBLE
    },
    criado_em :{
      allowNull:false,
      type : DataTypes.DATE,
      defaultValue : DataTypes.NOW
    },
    alterado_em : {
      allowNull:false,
      type : DataTypes.DATE,
      defaultValue : DataTypes.NOW
    }
  },{
    timestamps: true,
    createdAt: 'criado_em',
    updatedAt : 'alterado_em',
    tableName : 'conta_bancaria'
  })
}