let mongoose = require("mongoose");
const { User } = require("./user");

let userProfileSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    school: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

let UserProfile = mongoose.model("UserProfile", userProfileSchema);

module.exports = {
  UserProfile,
};
