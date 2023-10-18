const mongoose = require("mongoose");

const TrackSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "please provide the title"],
      minlength: [3, "min length for the title is three"],
    },
    artist: {
      type: String,
      required: [true, "please provide tha artist name"],
      minlength: [3, "the min length for the artist name is three"],
    },
    genre: {
      type: String,
      required: [true, "please provide the genere"],
      minlength: [3, "the min length for the genere is three"],
    },
    imageurl: {
      type: String,
      default: "",
    },
    track: {
      type: String,
      required: [true, "please provide the track"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("TrackSchema", TrackSchema);
