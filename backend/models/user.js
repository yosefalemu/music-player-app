const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "please provide first name"],
      minlength: 3,
      maxlength: 50,
    },
    middlename: {
      type: String,
      required: [true, "please provide middle name"],
      minlength: 3,
      maxlength: 50,
    },
    lastname: {
      type: String,
      required: [true, "please provide last name"],
      minlength: 3,
      maxlength: 50,
    },
    email: {
      type: String,
      required: [true, "please provide email"],
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "please provide valid email",
      ],
      unique: true,
    },
    username: {
      type: String,
      required: [true, "please provide the username"],
      minlength: 3,
      maxlength: 50,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    password: {
      type: String,
      required: [true, "please provide password"],
      minlength: 6,
    },
    avatar: {
      type: String,
      required: [true, "please provide profile picture"],
    },
  },
  { timestamps: true }
);
UserSchema.pre("save", async function () {
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  } catch (error) {
    throw new Error("Failed to hash password");
  }
});

UserSchema.methods.createJWT = function () {
  try {
    return jwt.sign(
      { userId: this._id, username: this.username },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_LIFETIME }
    );
  } catch (error) {
    return new Error("can't create JWT");
  }
};
UserSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

module.exports = mongoose.model("UserSchema", UserSchema);
