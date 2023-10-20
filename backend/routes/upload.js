const path = require("path");
const express = require("express");
const multer = require("multer");
const router = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, path.join(__dirname, "../public/assets/images"));
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage });

router.post("/", upload.single("image"), (req, res) => {
  console.log(req.file);
  res.send(`${req.file.filename}`);
});

module.exports = router;
