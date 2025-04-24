'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = { 
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('conta_bancaria',{
      id: {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        primaryKey : true, 
      },
      nome:{
        allowNull: false,
        type : Sequelize.STRING,
      },
      saldo : {
        allowNull : false, 
        type:Sequelize.DOUBLE
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
    await queryInterface.dropTable('conta_bancaria')
  }
};
