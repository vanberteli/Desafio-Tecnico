const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ClientSchema = new Schema({
  id: ObjectId,
  email: String,
  name: String
});

const ClientModel = mongoose.model('clients', ClientSchema);

module.exports = ClientModel;