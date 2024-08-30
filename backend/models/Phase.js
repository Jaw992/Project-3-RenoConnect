const mongoose = require("mongoose");

const changeLogSchema = new mongoose.Schema({
   oldTaskDescription: String,
   newTaskDescription: String,
   oldStartDate: Date,
   newStartDate: Date,
   oldEndDate: Date,
   newEndDate: Date,
   createOn: Date,
   reviewStatus: { type: String, enum: ["Pending", "Approved"]},
});

const phaseSchema = new mongoose.Schema({
   phaseName: String,
   task: String,
   taskDescription: String,
   startDate: Date,
   endDate: Date,
   createOn: Date,
   project: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
   changeLog: [changeLogSchema],
});

module.exports = mongoose.model("Phase", phaseSchema);