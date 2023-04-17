const { Sequelize } = require("sequelize");
const config = require("../config/config");
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
});
sequelize
  .authenticate()
  .then(() => {
    console.log("db connection successfully.");
  })
  .catch((err) => {
    console.error(err.message);
  });
const db = {
  sequelize,
  Sequelize,
};
module.exports = db;
