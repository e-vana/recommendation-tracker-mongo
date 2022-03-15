let mongoose = require("mongoose");
const { User } = require("./user");
const { UserProfile } = require("./userProfile");

let letterSchema = mongoose.Schema(
  {
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
      required: true,
    },
    profile: {
      type: mongoose.Schema.Types.ObjectId,
      ref: UserProfile,
      required: true,
    },
    studentFirstName: {
      type: String,
      required: true,
    },
    studentLastName: {
      type: String,
      required: true,
    },
    studentEmail: {
      type: String,
      required: true,
    },
    isPending: {
      type: Boolean,
      default: true,
    },
    markedAsSent: {
      type: Boolean,
      default: false,
    },
    studentLetterSchool: {
      type: String,
    },
    studentLetterProgram: {
      type: String,
    },
    studentLetterNotes: {
      type: String,
    },
    studentLetterOther: {
      type: String,
    },
    studentLetterSubmissionDueDate: {
      type: Date,
    },
  },
  { timestamps: true }
);

let Letter = mongoose.model("Letter", letterSchema);

module.exports = {
  Letter,
};
