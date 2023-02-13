const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ProductSchema = new Schema({
  id: ObjectId,
  title: String,
  brand: String,
  price: Number,
  image: String,
  reviewScore: String
});

const ProductModel = mongoose.model('products', ProductSchema);

module.exports = ProductModel;