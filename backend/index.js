const chalk = require("chalk");
const express = require("express");
const logger = require("morgan");
const app = express();
const cors = require("cors");
const routes = require("./routes/routes");
const db = require("./db/db");
const PORT = process.env.PORT || 3000;
const corsOption = {
  origin: ["http://localhost:5100", "http://localhost:5100/"],
};
app.use(cors(corsOption));
app.use(logger("dev"));
app.use(express.json());
app.use(routes);
app.listen(PORT, () => {
  console.log(chalk.green("server is running at"), chalk.bgBlueBright(PORT));
});
