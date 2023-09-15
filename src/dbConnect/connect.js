const mongoose = require('mongoose')
const password = 'hN0VqNyqNaI1iW2A'
const dbname = 'E-commerce'
const uri = `mongodb+srv://juancarlossequeira07:${password}@juan.g7hhwxb.mongodb.net/${dbname}?retryWrites=true&w=majority`

module.exports = () => mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})