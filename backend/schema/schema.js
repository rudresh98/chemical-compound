const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/db");

const ChemicalSchema = sequelize.define("compounds", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  CompoundName: {
    type: DataTypes.STRING,
  },
  CompounrDescription: {
    type: DataTypes.TEXT,
  },
  strImageSource: {
    type: DataTypes.STRING,
  },
  strImageAttribution: {
    type: DataTypes.STRING,
  },
  dateModified: {
    type: DataTypes.DATEONLY,
  },
});
// sequelize.sync(() => console.log("model sync successfully"));
module.exports = ChemicalSchema;
