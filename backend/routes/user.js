const express = require("express");
const router = express.Router();
const {
  createUser,
  loginUser,
  verifyEmail,
  getAllUsers,
} = require("../controllers/user");

router.route("/register").post(createUser);
router.route("/login").post(loginUser);
router.route("/:id/verifyemail/:token").patch(verifyEmail);
router.route("/").post(getAllUsers);

module.exports = router;
