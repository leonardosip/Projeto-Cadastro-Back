'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('vendas',{
      id: {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        primaryKey : true, 
      },
      pessoa_id:{
        allowNull : false,
        type : Sequelize.INTEGER,
        references: {
          model : "pessoas",
          key : "id"
        }
      },
      produto_id:{
        allowNull : false,
        type : Sequelize.INTEGER,
        references:{
          model: "produtos",
          key: "id"
        }
      },
      conta_bancaria_id:{
        allowNull : false,
        type : Sequelize.INTEGER,
        references : {
          model : "conta_bancaria",
          key : "id"
        }
      },
      valor : {
        allowNull : false,
        type : Sequelize.DOUBLE
      },
      criado_em: { 
        allowNull: false,
        type : Sequelize.DATE,
        defaultValue : new Date()
      },
      alterado_em : {
        allowNull : false , 
        type : Sequelize.DATE,
        defaultValue : new Date()
      }
    })
  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('vendas')
  }
};
