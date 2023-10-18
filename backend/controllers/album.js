const AlbumSchema = require("../models/album");
const { BadRequestError } = require("../errors");
const album = require("../models/album");

// @desc    Create SingleAlbum
// @route   POST /api/v1/album
// @access  Admin
const createAlbum = async (req, res) => {
  const { title, artist, genre, albumImageUrl, trackImageUrl, tracks } =
    req.body;
  if (
    !title ||
    !artist ||
    !genre ||
    !albumImageUrl ||
    !trackImageUrl ||
    !tracks
  ) {
    throw new BadRequestError("all fields are required");
  }
  const album = await AlbumSchema.create(req.body);
  res.status(200).json(album);
};
// @desc    Get Single Album
// @route   GET /api/v1/album/:id
// @access  Public
const getAlbum = async (req, res) => {
  const albumId = req.params.id;

  const album = await AlbumSchema.findById(albumId);
  if (!album) {
    throw new BadRequestError(`There is no album with id ${albumId}`);
  }
  res.status(200).json(album);
};
// @desc    Get All Album
// @route   GET /api/v1/album
// @access  Public
const getAlbums = async (req, res) => {
  const album = await AlbumSchema.find({});
  res.status(200).json(album);
};
// @desc    Update Single Album
// @route   PATCH /api/v1/album
// @access  admin
const updateAlbum = async (req, res) => {
  const albumId = req.params.id;

  const album = await AlbumSchema.findByIdAndUpdate(albumId, req.body, {
    runValidators: true,
    new: true,
  });

  if (!album) {
    throw new BadRequestError(`There is album with id ${albumId}`);
  }
  res.status(200).json(album);
};
// @desc    Delete Single Album
// @route   DELETE /api/v1/album/:id
// @access  Admin
const deleteAlbum = async (req, res) => {
  const albumId = req.params.id;
  const deletedAlbum = await AlbumSchema.findByIdAndDelete(albumId);
  if (!deletedAlbum) {
    throw new BadRequestError(
      `There is album with id ${albumId} to be deleted`
    );
  }
  res.status(200).json(deletedAlbum);
};

module.exports = { createAlbum, getAlbum, getAlbums, updateAlbum, deleteAlbum };
