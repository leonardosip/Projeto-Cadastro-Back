'use strict';

const { INTEGER, STRING } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('pessoas',{
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
      },
      nome:{
        allowNull:false,
        type:Sequelize.STRING
      },
      idade : {
        allowNull :false,
        type : Sequelize.INTEGER
      },
      numero : { 
        allowNull:false,
        type : Sequelize.STRING
      },
      cpf : {
        allowNull : false ,
        type : Sequelize.STRING
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
    await queryInterface.dropTable('pessoas')
  }
};
