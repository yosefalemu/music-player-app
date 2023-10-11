const TrackSchema = require("../models/track");
const { BadRequestError } = require("../errors");

//create track
const createTrack = async (req, res) => {
  const { title, artist, imageUrl } = req.body;
  if (!title || !artist || !imageUrl) {
    throw new BadRequestError("all fields are required");
  }
  const track = await TrackSchema.create(req.body);
  res.status(200).json(track);
};
//get track
const getTrack = async (req, res) => {
  try {
    const trackId = req.params.id;
    const track = await TrackSchema.findById(trackId);
    if (!track) {
      throw BadRequestError(`No track with id ${trackId}`);
    }
    res.status(200).json(track);
  } catch (error) {
    console.log(error);
  }
};

//get all tracks
const getAllTracks = async (req, res) => {
  const tracks = await TrackSchema.find({});
  res.status(200).json(tracks);
};
//update track
const updateTrack = async (req, res) => {
  const trackId = req.params.id;
  try {
    const updatedTrack = await TrackSchema.findByIdAndUpdate(
      trackId,
      req.body,
      {
        runValidators: true,
        new: true,
      }
    );
    if (!updatedTrack) {
      throw new BadRequestError(
        `There is no track with id ${trackId} to be updated`
      );
    }
    res.status(200).json(updatedTrack);
  } catch (error) {
    console.error("Error updating track:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//delete track
const deleteTrack = async (req, res) => {
  const trackId = req.params.id;
  const deletedTrack = await TrackSchema.findByIdAndDelete(trackId);
  if (!deletedTrack) {
    throw new BadRequestError(
      `There is no track with id ${trackId} to be deleted`
    );
  }
  res.status(200).json(deletedTrack);
};
module.exports = {
  createTrack,
  getTrack,
  getAllTracks,
  updateTrack,
  deleteTrack,
};
