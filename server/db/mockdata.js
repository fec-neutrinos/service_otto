const faker = require('faker');

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

exports.generateProducts = generateProducts;