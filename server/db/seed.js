const products = require('../models/products');
const download = require('download');
const mockdata = require('./mockdata');

const generateImages = (number) => {
  const imagesArr = [];
  for (let i = 0; i < number; i++) {
    imagesArr.push(download('https://picsum.photos/200', './server/images', {filename: `image${i}.jpg`}));
  }
  return Promise.all(imagesArr);
};

products.dropRelatedProductsTable()
  .then((result) => {
    console.log('successfully removed records from database');
    return products.insertManyProducts(mockdata.generateProducts());
  })
  .then((result) => {
    console.log('fresh records written to db');
    // return generateImages(100);
  })
  .then((result) => {
    console.log('completed downloading images to local disk');
    process.exit();
  })
  .catch((err) => {
    console.log('error in seeding operation', err);
    process.exit();
  });


