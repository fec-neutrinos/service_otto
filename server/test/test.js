const seed = require('../seed');
const products = require('../models/products')

test('should generate 100 fake products', () => {
  // expect(seed.generateProducts()).toBeNotNull();
  expect(seed.generateProducts()).toHaveLength(100);
});

test('should retrieve records from the database', (done) => {
  return products.getProducts('belts').then((data) => {
    expect(data).toHaveLength(8);
    done();
  });
});

