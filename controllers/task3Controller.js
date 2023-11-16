const controller = {};
const { categories, products } = require("../data");

controller.show = (req, res) => {
  const productsType = req.query.category
    ? products.filter((product) => product.category == req.query.category)
    : products;
  res.render("task3", { categories, productsType });
};

module.exports = controller;
