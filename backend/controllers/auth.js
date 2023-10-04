const { StatusCodes } = require("http-status-codes");
const UserSchema = require("../models/user");
const { BadRequestError, UnauthenticatedError } = require("../errors");

const register = async (req, res) => {
  const { firstname, middlename, lastname, email, username, password, avatar } =
    req.body;

  if (!firstname) {
    throw new BadRequestError("First name is required...");
  } else if (!middlename) {
    throw new BadRequestError("Middle name is required...");
  } else if (!lastname) {
    throw new BadRequestError("Last name is required...");
  } else if (!email) {
    throw new BadRequestError("Email is required...");
  } else if (!username) {
    throw new BadRequestError("Username is required...");
  } else if (!password) {
    throw new BadRequestError("Password is required...");
  } else if (!avatar) {
    throw new BadRequestError("Avatar is required...");
  }
  const user = await UserSchema.create(req.body);
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({ user });
};
const login = async (req, res) => {
  const { email, password } = req.body;
  if ((!email, !password)) {
    throw new BadRequestError("please provide email and password");
  }
  const user = await UserSchema.findOne({ email });
  if (!user) {
    throw new UnauthenticatedError("Invalid creditials");
  }
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("wrong password");
  }
  const token = user.createJWT();
  logedUser = {
    _id: user._id,
    firstname: user.firstname,
    middlename: user.middlename,
    lastname: user.lastname,
    username: user.username,
    email: user.email,
    avatar: user.avatar,
    isadmin: user.isadmin,
    token,
  };
  res.status(StatusCodes.OK).json(logedUser);
};
module.exports = { register, login };
