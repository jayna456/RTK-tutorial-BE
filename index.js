const express = require("express");
const Sequlize = require("sequelize");
const cors = require("cors");

const tutorialRoute = require("./routes/tutorial.route");
const userRoute = require("./routes/user.route");

require("dotenv").config();
const PORT = process.env.PORT || 8000;
const app = express();

const sequelize = new Sequlize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    dialect: "mysql",
    host: process.env.HOST,
    pool: {
      max: 5,
      min: 0,
      idle: 10 * 1000,
      acquire: 80 * 1000,
    },
  }
);

app.use(cors());
app.use(express.json());
app.use("/", tutorialRoute);
app.use("/user", userRoute);

sequelize
  .authenticate()
  .then(() => console.log("connection has been established successfully"))
  .catch((error) => console.log("Error => ", error.message));

app.listen(PORT, () => console.log("server is listening on port ", PORT));
