const routes = require("express").Router();
const {
  getChemicalList,
  getChemicalListDetails,
  getEditChemicalList,
} = require("../controllers/controllers");
routes.get("/chemicalcompunds", getChemicalList);
routes.get("/chemicalcompundsdetails", getChemicalListDetails);
routes.patch("/editchecmicalcompounddetails", getEditChemicalList);
module.exports = routes;
