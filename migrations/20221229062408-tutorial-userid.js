"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn("tutorials", "userId", {
      type: Sequelize.INTEGER,
      // references: {
      //   model: {
      //     tableName: "User",
      //   },
      // },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("tutorials", "userId");
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
