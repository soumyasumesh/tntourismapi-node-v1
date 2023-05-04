const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("tourism", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = { sequelize };
