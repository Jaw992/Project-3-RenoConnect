const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    projectId: {type: String, requrie: true, unique: true},
    projectName: String,
    startDate: Date,
    endDate: Date,
    projectAddress: String,
    projectPhaseCount: Number,
    projectDownPayment: Number,
    projectPaymentReceived: Number,
    projectTotalCost: Number,
    projectStatus: { type: String, enum: ["Active", "Completed"] },
    customer: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
    contractor: { type: mongoose.Schema.Types.ObjectId, ref: "Contractor" },
});

module.exports = mongoose.model("Project", projectSchema);