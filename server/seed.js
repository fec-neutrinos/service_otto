const faker = require('faker');
const products = require('./models/products');
const download = require('download');
const AWS = require('aws-sdk');
AWS.config.loadFromPath('./config.json');
const s3 = new AWS.S3({apiVersion: '2006-03-01'});

const generateProducts = () => {
  const urlPrefix = 'https://fec-otto.s3.amazonaws.com/image';
  let products = [];
  let shippingmethod = ['Free USA Shipping', 'Free USA Shipping and Returns', ''];
  let category = ['belts', 'knives', 'backpacks'];

  for (let i = 0; i < 100; i++) {
    let product = {
      category: category[Math.floor((Math.random() * 3))],
      productname: faker.commerce.productName(),
      productid: faker.random.uuid(),
      discounted: faker.random.boolean(),
      price: faker.random.number({max: 2500, min: 50}),
      comments: faker.random.number(),
      productssold: faker.random.number({max: 1500}),
      shippingmethod: shippingmethod[Math.floor((Math.random() * 3))],
      imageurl: `${urlPrefix}${i}.jpg`,
      newproduct: faker.random.boolean(),
      discountdaysleft: faker.random.number({max: 15}),
      isdropproduct: faker.random.boolean(),
      reviews: faker.random.number({max: 1500}),
      rating: faker.random.number({max: 5, min: 2.5})
    };
    product.producturl = `/buy/${product.productname.split(' ').join('-').toLowerCase()}`;
    product.discountprice = faker.random.number({max: product.price - 100, min: 1})
    products.push(product);
  }
  return products;
};

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
    return products.insertManyProducts(generateProducts());
  })
  .then((result) => {
    console.log('fresh records written to db');
    return generateImages(100);
  })
  .then((result) => {
    console.log('completed downloading images to local disk');
    process.exit();
  })
  .catch((err) => {
    console.log('error in seeding operation', err);
    process.exit();
  });


