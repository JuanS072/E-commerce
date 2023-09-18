const mongoose = require('mongoose');
const {Schema} = mongoose;
const ClientsSchema = new Schema({
      cantidad: {
        type: Number,
        required: true,
      }
});

const ClientsModels = mongoose.model('Clients', ClientsSchema);

module.exports = ClientsModels;