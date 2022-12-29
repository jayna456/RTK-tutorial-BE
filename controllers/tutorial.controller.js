const {
  create,
  read,
  update,
  deleteData,
  searchTutorial,
} = require("../services/tutorial.service");

const createTutorial = async (req, res) => {
  const result = await create(req.body);

  if (result) {
    res.status(200).json({
      code: 200,
      success: true,
      data: result,
    });
  } else {
    res.status(500).json({
      code: 500,
      success: false,
      message: "something went wrong!",
    });
  }
};

const readTutorial = async (req, res) => {
  const result = await read();

  res.status(200).json({
    code: 200,
    success: true,
    data: result,
  });
};

const updateTutorial = async (req, res) => {
  const result = await update(req.params.id, req.body);

  if (result) {
    res.status(200).json({
      code: 200,
      success: true,
      data: result,
    });
  } else {
    res.status(500).json({
      code: 500,
      success: false,
      message: "something went wrong",
    });
  }
};

const deleteTutorial = async (req, res) => {
  const result = await deleteData(req.params.id);

  if (result) {
    res.status(200).json({
      code: 200,
      success: true,
      data: result,
    });
  } else {
    res.status(500).json({
      code: 500,
      success: false,
      message: "something went wrong",
    });
  }
};

const searchByTitle = async (req, res) => {
  const result = await searchTutorial(req.params.text);

  res.status(200).json({
    code: 200,
    success: true,
    data: result,
  });
};

module.exports = {
  createTutorial,
  readTutorial,
  updateTutorial,
  deleteTutorial,
  searchByTitle,
};
