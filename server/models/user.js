let mongoose = require("mongoose");

let userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: false,
  },
  isInstructor: {
    type: Boolean,
    default: false,
  },

},
{
  timestamps: true
});

let User = mongoose.model("User", userSchema);

module.exports = {
  User,
};
