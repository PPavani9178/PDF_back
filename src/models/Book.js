
const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  filePath: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Book', BookSchema);
