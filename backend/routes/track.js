const express = require("express");
const router = express.Router();

const {
  createTrack,
  getTrack,
  getAllTracks,
  updateTrack,
  deleteTrack,
} = require("../controllers/track");

router.route("/").post(createTrack).get(getAllTracks);
router.route("/:id").get(getTrack).patch(updateTrack).delete(deleteTrack);

module.exports = router;
