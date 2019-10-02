const products = require('../models/products');

exports.getProductsFromCategory = (req, res) => {
  const category = req.params.categoryId;
  console.log(`getting product from category ${category}`);
  products.getProducts(category)
    .then((results) => {
      res.status(200).send(results);
    })
    .catch((err) => {
      res.status(500).send(err);
    })
};

exports.postProducts = (req, res) => {
  const products = req.body;
  products.insertManyProducts(products)
    .then((results) => {
      res.status(201).send(results)
    })
    .catch((err) => {
      res.status(500).send(err);
    })
};