const express = require("express");

const router = express.Router();

const Routes = {
  index: router.get("/", async (req, res) => {
    res.render("home");
  }),
  about: router.get("/about", async (req, res) => {
    res.render("about");
  }),
  contact: router.get("/contact", async (req, res) => {
    res.render("contact");
  }),
};

module.exports = Routes;
