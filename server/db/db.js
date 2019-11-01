const mongoose = require('mongoose');

mongoose.connect('mongodb://mongodb:27017/relatedproducts', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

const db = mongoose.connection;

const relatedProductsSchema = new mongoose.Schema({
  category: String,
  productname: {type: String},
  productid: {type: String, unique: true},
  discounted: Boolean,
  price: Number,
  discountprice: Number,
  comments: Number,
  productssold: Number,
  shippingmethod: String,
  imageurl: String,
  newproduct: Boolean,
  discountdaysleft: Number,
  producturl: String,
  isdropproduct: Boolean,
  rating: Number,
  reviews: Number
});

const RelatedProducts = mongoose.model('RelatedProducts', relatedProductsSchema);

exports.RelatedProducts = RelatedProducts;
exports.db = db;
