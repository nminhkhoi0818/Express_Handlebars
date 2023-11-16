const controller = {};
const { zodiacs } = require("../data");

controller.show = (req, res) => {
  res.render("task4", { zodiacs });
};

controller.view = (req, res) => {
  let zodiacInfo = zodiacs.filter((zodiac) => zodiac.name == req.params.name);
  res.render("task4-details", { zodiacInfo });
};

module.exports = controller;
