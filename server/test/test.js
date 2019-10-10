const mockdata = require('../db/mockdata');
const products = require('../models/products');
const mongoose = require('mongoose');
const fetch = require('node-fetch');

test('should generate 100 fake products to be loaded in the db', () => {
  expect(mockdata.generateProducts()).toHaveLength(100);

});

test('should retrieve qty 8 records from directly from the database for three categories', (done) => {
  return products.getProducts('belts').then((data) => {
    expect(data).toHaveLength(8);
  })
  .then(() => {
    return products.getProducts('knives').then((data) => {
      expect(data).toHaveLength(8);
    })
  })
  .then(() => {
    return products.getProducts('backpacks').then((data) => {
      expect(data).toHaveLength(8);
    })
  })
  .then(() => {
    return mongoose.disconnect()
  })
  .then(() => {
    done();
  })
});

test('should test the get related products api', (done) => {
  return fetch('http://localhost:3010/category/knives')
  .then((result) => {
    return result.json();
  })
  .then((data) => {
    expect(data).toHaveLength(8);
  })
  .then(() => {
    done();
  })
});

test('should get OK response from the API', (done) => {
  return fetch('http://localhost:3010/category/knives')
  .then((result) => {
    expect(((result.status >= 200) && (result.status < 300))).toBe(true);
    done();
  })
});

