const TrackSchema = require("../models/track");
const { BadRequestError } = require("../errors");

// @desc    Create Track
// @route   POST /api/v1/track
// @access  Admin
const createTrack = async (req, res) => {
  const { title, artist, imageurl, track } = req.body;
  if (!title || !artist || !imageurl || !track) {
    throw new BadRequestError("All fields are required");
  }
  const trackCreated = await TrackSchema.create(req.body);
  res.status(200).json(trackCreated);
};

// @desc   Get Single Track
// @route   GET /api/v1/track/:id
// @access  Public
const getTrack = async (req, res) => {
  const trackId = req.params.id;
  const track = await TrackSchema.findById(trackId);
  if (!track) {
    throw new BadRequestError(`No track with id ${trackId}`);
  }
  res.status(200).json(track);
};

// @desc    Get All Track
// @route   GET /api/v1/track
// @access  Public
const getAllTracks = async (req, res) => {
  const tracks = await TrackSchema.find({});
  res.status(200).json(tracks);
};

// @desc    Update Single Track
// @route   PATCH /api/v1/track/:id
// @access  Admin
const updateTrack = async (req, res) => {
  const trackId = req.params.id;
  const updatedTrack = await TrackSchema.findByIdAndUpdate(trackId, req.body, {
    runValidators: true,
    new: true,
  });
  if (!updatedTrack) {
    throw new BadRequestError(
      `There is no track with id ${trackId} to be updated`
    );
  }
  res.status(200).json(updatedTrack);
};

// @desc    Delete Single Track
// @route   DELETE /api/v1/track/:id
// @access  Admin
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
