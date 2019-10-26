const mockdata = require('../db/mockdata');
const products = require('../models/products');
const mongoose = require('mongoose');
const fetch = require('node-fetch');
import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Main from '../../client/src/js/components/Main';


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
      });
    })
    .then(() => {
      return products.getProducts('backpacks').then((data) => {
        expect(data).toHaveLength(8);
      });
    })
    .then(() => {
      return mongoose.disconnect();
    })
    .then(() => {
      done();
    });
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
    });
});

test('should get OK response from the API', (done) => {
  return fetch('http://localhost:3010/category/knives')
    .then((result) => {
      expect(((result.status >= 200) && (result.status < 300))).toBe(true);
      done();
    });
});

describe('Test Client', function() {
  it('should render app component without throwing an error', function() {
    expect(shallow(<Main />).contains(<div className="spacer-for-main-container"></div>)).toBe(true);
  });

  // it('should be selectable by class "foo"', function() {
  //   expect(shallow(<Foo />).is('.foo')).toBe(true);
  // });

  // it('should mount in a full DOM', function() {
  //   expect(mount(<Foo />).find('.foo').length).toBe(1);
  // });

  // it('should render to static HTML', function() {
  //   expect(render(<Foo />).text()).toEqual('Bar');
  // });
});

