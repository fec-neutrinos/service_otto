const db = require('../db/db');

exports.dropRelatedProductsTable = () => {
  return db.RelatedProducts.remove({});
}

exports.getProducts = (category) => {
  const query = db.RelatedProducts.find({category: category});
  return query.limit(8).exec();
}

exports.insertManyProducts = (products) => {
  return db.RelatedProducts.insertMany(products);
}

