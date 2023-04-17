const moment = require("moment");
const ChemicalSchema = require("../schema/schema");
const chalk = require("chalk");
const chemicalModel = {};

chemicalModel.getChemicalList = async () => {
  try {
    const data = await ChemicalSchema.findAll();
    return data;
  } catch (error) {
    console.error(chalk.red(error.message));
    return error;
  }
};
chemicalModel.getChemicalListDetails = async (id) => {
  try {
    const data = await ChemicalSchema.findByPk(id);
    return data;
  } catch (error) {
    console.error(chalk.red(error.message));
    return error;
  }
};
chemicalModel.getChemicalEditDetails = async (
  CompoundName,
  id,
  dateModified,
  CompounrDescription
) => {
  try {
    const data = await ChemicalSchema.update(
      { CompoundName, dateModified, CompounrDescription },
      { where: { id } }
    );
    return data;
  } catch (error) {
    console.error(chalk.red(error.message));
    return error;
  }
};
module.exports = chemicalModel;
