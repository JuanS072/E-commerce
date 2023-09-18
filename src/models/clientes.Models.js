const mongoose = require('mongoose');
const {Schema} = mongoose;
const ClientsSchema = new Schema({
      name: {
        type: String,
        required: true,
      }
});

const ClientsModels = mongoose.model('clients', ClientsSchema);

module.exports = ClientsModels;