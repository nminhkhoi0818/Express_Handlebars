const controller = {};
const { emotions } = require("../data");

controller.show = (req, res) => {
  res.render("task1", { emotions });
};

module.exports = controller;
