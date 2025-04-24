'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('produtos',{
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nome:{
        allowNull: false,
        type : Sequelize.STRING,
      },
      grupo:{
        allowNull: false,
        type:Sequelize.STRING
      },
      sub_grupo:{
        allowNull: false,
        type: Sequelize.STRING
      },
      valor : {
        allowNull : false, 
        type:Sequelize.DOUBLE
      },
      criado_em :{
        allowNull:false,
        type : Sequelize.DATE,
        defaultValue : new Date()
      },
      alterado_em : {
        allowNull:false,
        type : Sequelize.DATE,
        defaultValue : new Date()
      }


    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('produtos')
  }
};
