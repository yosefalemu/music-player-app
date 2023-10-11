const express = require("express");
const router = express.Router();

const {
  createAlbum,
  getAlbum,
  getAlbums,
  updateAlbum,
  deleteAlbum,
} = require("../controllers/album");

router.route("/").post(createAlbum).get(getAlbums);
router.route("/:id").get(getAlbum).patch(updateAlbum).delete(deleteAlbum);

module.exports = router;
