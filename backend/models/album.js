const mongoose = require("mongoose");

const AlbumSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide the album title"],
  },
  artist: {
    type: String,
    required: [true, "Please provide the artist name"],
  },
  genre: {
    type: String,
    required: [true, "Please provide the album genre"],
  },
  albumImageUrl: {
    type: String,
    required: [true, "Please provide the image URL"],
  },
  trackImageUrl: {
    type: String,
    required: [true, "please provide the image for the tracks"],
  },
  tracks: [
    {
      title: {
        type: String,
        required: [true, "Please provide the track title"],
      },
      duration: {
        type: String,
        required: [true, "Please provide the track duration"],
      },
      file: {
        type: String,
        required: [true, "please provide the track file"],
      },
    },
  ],
});

module.exports = mongoose.model("AlbumSchema", AlbumSchema);
