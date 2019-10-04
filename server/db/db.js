const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/relatedproducts', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

const db = mongoose.connection;
db.once('open', function() {
  console.log('db connection open');
});

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
  isdropproduct: Boolean
});

const RelatedProducts = mongoose.model('RelatedProducts', relatedProductsSchema);

exports.RelatedProducts = RelatedProducts;
