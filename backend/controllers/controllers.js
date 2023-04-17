const chemicalModel = require("../models/models");

exports.getChemicalList = async (req, res) => {
  try {
    const data = await chemicalModel.getChemicalList();
    if (data.length === 0) {
      res.status(204).json({
        msg: "No data available",
        data,
        length: data.length,
        status: 204,
      });
    } else {
      res.status(200).json({
        msg: "SUCCESS",
        data,
        length: data.length,
        status: 200,
      });
    }
  } catch (error) {
    res.status(500).json({
      msg: error.message,
      data: [],
      total: 0,
      status: 500,
    });
  }
};
exports.getChemicalListDetails = async (req, res) => {
  const { id } = req.query;
  try {
    const data = await chemicalModel.getChemicalListDetails(id);
    if (data.length === 0) {
      res.status(204).json({
        msg: "No data available",
        data,
        length: data.length,
        status: 204,
      });
    } else {
      res.status(200).json({
        msg: "SUCCESS",
        data,
        length: data.length,
        status: 200,
      });
    }
  } catch (error) {
    res.status(500).json({
      msg: error.message,
      data: [],
      total: 0,
      status: 500,
    });
  }
};
exports.getEditChemicalList = async (req, res) => {
  const { CompoundName, id, dateModified, CompounrDescription } = req.body;
  console.log(CompoundName);
  try {
    const data = await chemicalModel.getChemicalEditDetails(
      CompoundName,
      id,
      dateModified,
      CompounrDescription
    );
    if (data.length === 0) {
      res.status(204).json({
        msg: "No data available",
        data,
        length: data.length,
        status: 204,
      });
    } else {
      res.status(200).json({
        msg: "SUCCESS",
        data,
        length: data.length,
        status: 200,
      });
    }
  } catch (error) {
    res.status(500).json({
      msg: error.message,
      data: [],
      total: 0,
      status: 500,
    });
  }
};
