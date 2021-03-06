'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('techs', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      dev_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'devs', key: 'id' },
      },
      name: { type: Sequelize.STRING, allowNull: false },
      created_at: { type: Sequelize.DATE, allowNull: false },
      updated_at: { type: Sequelize.DATE, allowNull: false },
    });
  },

  down: async (queryInterface, Sequelize) => queryInterface.dropTable('techs'),
};
