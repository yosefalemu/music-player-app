const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please provide the name"],
      minlength: [3, "name must be minimum length of 3"],
      maxlength: [50, "name must be maximum length of 50"],
    },
    username: {
      type: String,
      required: [true, "please provide the username"],
      minlength: [6, "username must be minimum length of 6"],
      unique: true,
    },
    phonenumber: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      required: [true, "please provide the email"],
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "please provide valid email",
      ],
      unique: true,
    },
    password: {
      type: String,
      minlength: [6, "password must be minimum length of 6"],
      required: [true, "please provide the password"],
    },
    avatar: {
      type: String,
      default: "",
    },
    emailverified: {
      type: Boolean,
      default: false,
    },
    token: {
      type: String,
      default: "",
    },
    isadmin: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    return next(error);
  }
});

UserSchema.methods.createJWT = function () {
  return jwt.sign(
    { userId: this._id, username: this.username },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_LIFETIME }
  );
};

UserSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model("UserSchema", UserSchema);
