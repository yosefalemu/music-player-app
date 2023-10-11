const mongoose = require("mongoose");

const TrackSchema = new mongoose.Schema(
  {
    title: String,
    artist: String,
    imageUrl: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("TrackSchema", TrackSchema);
