const Models = require("../models");
const user = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signUpUser = async (userData) => {
  const foundUser = await Models.User.findOne({
    where: { email: userData.email },
    raw: true,
  });

  if (foundUser) {
    return {
      code: 409,
      success: false,
      errorMessage: "User already exist with this email",
    };
  } else {
    userData.password = bcrypt.hashSync(userData.password, 10);
    const newUser = await Models.User.create(userData);

    const tokenObj = {
      id: newUser.id,
      email: newUser.email,
      password: newUser.password,
    };

    const token = jwt.sign(tokenObj, "SECRET", { expiresIn: "1h" });

    return {
      code: 200,
      token,
      newUser,
    };
  }
};

const loginUser = async (userData) => {
  const foundUser = await Models.User.findOne({
    where: { email: userData.email },
    raw: true,
  });

  if (foundUser) {
    if (bcrypt.compareSync(userData.password, foundUser.password)) {
      const tokenObj = {
        id: foundUser.id,
        email: foundUser.email,
        password: foundUser.password,
      };

      const token = jwt.sign(tokenObj, "SECRET", { expiresIn: "1h" });

      return {
        code: 200,
        token,
        foundUser,
      };
    } else {
      return {
        code: 409,
        success: false,
        errorMessage: "Password does not match",
      };
    }
  } else {
    return {
      code: 409,
      success: false,
      errorMessage: "No user found with this email",
    };
  }
};

module.exports = { signUpUser, loginUser };
