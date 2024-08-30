const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  hashedPassword: {
    type: String,
    required: true,
  },
  name: {type: String, require: true},
  contact: {type: Number, require: true},
  email: {type: String, require: true},
});

module.exports = mongoose.model("Customer", customerSchema);