const mongoose = require("mongoose");

const AlbumSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  genre: String,
  imageUrl: String,
  tracks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "MusicSchema",
    },
  ],
});
module.exports = mongoose.model("AlbumSchema", AlbumSchema);
