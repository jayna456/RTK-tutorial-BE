"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tutorial extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tutorial.belongsTo(models.User, {
        foreignKey: "userId",
        as: "User",
      });
    }
  }
  tutorial.init(
    {
      title: DataTypes.STRING(100),
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "tutorial",
    }
  );
  return tutorial;
};
