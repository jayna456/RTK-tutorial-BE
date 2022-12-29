const { signUpUser, loginUser } = require("../services/user.service");

const signUp = async (req, res) => {
  try {
    const result = await signUpUser(req.body);

    if (result.code === 200) {
      res.status(200).json({
        code: 200,
        success: true,
        data: {
          token: result.token,
          user: result.newUser,
        },
      });
    }
  } catch (error) {
    res.status(500).json({
      code: 500,
      success: false,
      message: error.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const result = await loginUser(req.body);

    if (result.code === 200) {
      res.status(200).json({
        code: 200,
        success: true,
        data: {
          token: result.token,
          user: result.foundUser,
        },
      });
    }
  } catch (error) {
    res.status(500).json({
      code: 500,
      success: false,
      message: error.message,
    });
  }
};

module.exports = { signUp, login };
