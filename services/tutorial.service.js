const { Op } = require("sequelize");
const Models = require("../models/index");

const create = async (data) => {
  return await Models.tutorial.create(data);
};

const read = async () => {
  return await Models.tutorial.findAll();
};

const update = async (id, data) => {
  return await Models.tutorial.update(
    { title: data.title, description: data.description },
    {
      where: {
        id: id,
      },
    }
  );
};

const deleteData = async (id) => {
  return await Models.tutorial.destroy({ where: { id: id } });
};

const searchTutorial = async (text) => {
  return await Models.tutorial.findAll({
    where: {
      title: {
        [Op.like]: `%${text}%`,
      },
    },
  });
};

module.exports = { create, read, update, deleteData, searchTutorial };
