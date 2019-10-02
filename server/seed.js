const faker = require('faker');
const products = require('./models/products');

const generateProducts = () => {
  let products = [];
  let shippingmethod = ['Free USA Shipping', 'Free USA Shipping and Returns', ''];
  let category = ['belts', 'knives', 'backpacks'];

  for (let i = 0; i < 100; i++) {
    let product = {
      category: category[Math.floor((Math.random() * 3))],
      productname: faker.commerce.productName(),
      productid: faker.random.uuid(),
      discounted: faker.random.boolean(),
      price: faker.commerce.price(),
      discountprice: faker.commerce.price(),
      comments: faker.random.number(),
      productssold: faker.random.number({max: 1500}),
      shippingmethod: shippingmethod[Math.floor((Math.random() * 3))],
      imageurl: faker.image.imageUrl(),
      newproduct: faker.random.boolean(),
      discountdaysleft: faker.random.number({max: 15}),
      isdropproduct: faker.random.boolean()
    }
    product.producturl = `http://localhost:3010/buy/${product.productname.split(' ').join('-').toLowerCase()}`
    products.push(product);
  }
  return products;
}

products.dropRelatedProductsTable()
  .then((result) => {
    console.log(`successfully removed database records ${result}`)
    return products.insertManyProducts(generateProducts())
  })
  .then((result) => {
    console.log('fresh records written to db', result);
    process.exit();
  })
  .catch((err) => {
    console.log('error in seeding operation', err);
    process.exit();
  })


