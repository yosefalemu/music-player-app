const jwt = require("jsonwebtoken");
const { UnauthenticatedError } = require("../errors");
const UserSchema = require("../models/user");

const authMiddleWare = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnauthenticatedError("authentication invalid");
  }
  try {
    const token = authHeader.split(" ")[1];
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    // req.user = { userId: payload.userId, name: payload.name };
    req.user = await UserSchema.findById(payload.userId).select("-password");
    next();
  } catch (error) {
    throw new UnauthenticatedError("authentication invalid");
  }
};

module.exports = authMiddleWare;