const { validate } = require("../../../modules/produto/DTO/createDTO")

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Produto', {
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
    grupo:{
      allowNull: false,
      type:DataTypes.STRING
    },
    sub_grupo:{
      allowNull: false,
      type: DataTypes.STRING
    },
    valor : {
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
    tableName : 'produtos'
  })
}