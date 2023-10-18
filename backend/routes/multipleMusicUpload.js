const path = require("path");
const express = require("express");
const multer = require("multer");
const router = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, path.join(__dirname, "../public/assets/tracks"));
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage });

router.post("/", upload.array("musicFiles", 20), (req, res) => {
  const filenames = req.files.map((file) => file.filename);
  res.json(filenames);
});

module.exports = router;
