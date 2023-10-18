const UserSchema = require("../models/user");
const { BadRequestError, UnauthenticatedError } = require("../errors");
const sendEmail = require("../utils/sendEmail");

// @desc    Register a new user
// @route   POST /api/v1/users/register
// @access  Public
const createUser = async (req, res) => {
  const { name, username, email, password } = req.body;
  if (!name || !username || !email || !password) {
    throw new BadRequestError("Please provide all required fields.");
  }
  const userExists = await UserSchema.findOne({
    $or: [{ email }, { username }],
  });
  if (userExists) {
    if (userExists.username === username) {
      throw new BadRequestError("Username is already taken.");
    } else {
      throw new BadRequestError("Email is already taken.");
    }
  }
  const user = await UserSchema.create(req.body);
  if (user) {
    const token = user.createJWT();
    user.token = token;
    await user.save();
    const verificationLink = `http://localhost:3000/${user._id}/verifyemail/${token}`;
    await sendEmail(user.email, "Verify Email", verificationLink);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      username: user.username,
      email: user.email,
      profilepicture: user.profilepicture,
      token,
    });
  } else {
    res.status(400);
    throw new BadRequestError("Invalid user data.");
  }
};

// @desc    Login user
// @route   POST /api/v1/user/login
// @access  Public
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Email and password are required.");
  }
  const user = await UserSchema.findOne({ email });
  if (!user) {
    throw new UnauthenticatedError("Invalid credentials.");
  }
  const validPassword = await user.comparePassword(password);
  if (validPassword) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      username: user.username,
      email: user.email,
      avatar: user.avatar,
      isadmin: user.isadmin,
      emailverified: user.emailverified,
      token: user.token,
    });
  } else {
    throw new UnauthenticatedError("Wrong password.");
  }
};

// @desc    Verify User Email
// @route   PATCH /api/v1/user/:id/verify-email/:token
// @access  Public
const verifyEmail = async (req, res) => {
  const user = await UserSchema.findOne({
    _id: req.params.id,
    token: req.params.token,
  });
  if (user) {
    const updatedUser = await UserSchema.findByIdAndUpdate(
      req.params.id,
      { emailverified: true },
      { runValidators: true, new: true }
    );
    if (!updatedUser) {
      throw new UnauthenticatedError(
        "Something went wrong while updating the user."
      );
    }
    const userWithoutPassword = { ...updatedUser.toObject() };
    delete userWithoutPassword.password;
    res.status(200).json(userWithoutPassword);
  } else {
    throw new UnauthenticatedError("Invalid credentials.");
  }
};

// @desc    Get All Users
// @route   POST /api/v1
// @access  Public
const getAllUsers = async (req, res) => {
  try {
    const { currentUserId } = req.body;
    const users = await UserSchema.find({ _id: { $ne: currentUserId } });
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error." });
  }
};

module.exports = {
  createUser,
  loginUser,
  verifyEmail,
  getAllUsers,
};
