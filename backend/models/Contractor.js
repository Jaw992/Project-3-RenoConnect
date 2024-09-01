const mongoose = require("mongoose");

const contractorSchema = new mongoose.Schema({
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
  company: {type: String, require: true},
  companyUEN: String,
});

contractorSchema.set("toJSON", {
  tranform: (document, returnObject) => {
    delete returnObject.hashPassword;
  },
});


module.exports = mongoose.model("Contractor", contractorSchema);