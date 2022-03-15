let mongoose = require("mongoose");

let userSchema = mongoose.Schema({
  emailAddress: {
    type: String,
    required: true,
  },
  password: {
    type: Date,
    required: false,
  },
  dateCreated: {
    type: Date,
    required: true,
  },
  isInstructor: {
    type: Boolean,
    default: false,
  },
});

let User = mongoose.model("User", userSchema);

module.exports = {
  User,
};
