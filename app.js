const express = require("express");

const path = require("path");
const Routes = require("./src/routes");

const app = express();

app.set("views", path.join(__dirname, "src/pages"));

app.use(express.static(__dirname));

app.set("view engine", "ejs");

app.use("/", Routes.index);

app.listen(3000, () => console.log("Conectado"));
