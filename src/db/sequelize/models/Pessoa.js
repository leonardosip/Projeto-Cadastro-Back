module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define('Pessoa', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true,
      validate : false 
    },
    nome:{
      allowNull:false,
      type:DataTypes.STRING
    },
    idade : {
      allowNull :false,
      type : DataTypes.INTEGER
    },
    numero : { 
      allowNull:false,
      type : DataTypes.STRING
    },
    cpf : {
      allowNull : false ,
      type : DataTypes.STRING
    },
    criado_em: { 
      allowNull: false,
      type : DataTypes.DATE,
      defaultValue : DataTypes.NOW
    },
    alterado_em : {
      allowNull : false , 
      type : DataTypes.DATE,
      defaultValue : DataTypes.NOW
    }
  },{
    timestamps : true , 
    createdAt : 'criado_em' , 
    updatedAt : 'alterado_em',
    tableName : 'pessoas'
  })

  model.associate = (models) => {
    model.hasMany(models.Venda, {foreignKey: "pessoa_id", as : "vendas"})
  }
  return model 
}