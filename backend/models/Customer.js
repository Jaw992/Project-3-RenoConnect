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
  name: {type: String, required: true},
  contact: {type: String, required: true},
  email: {type: String, required: true},
  project: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
});

customerSchema.set("toJSON", {
  tranform: (document, returnObject) => {
    delete returnObject.hashPassword;
  },
});

module.exports = mongoose.model("Customer", customerSchema);