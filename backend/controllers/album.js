const AlbumSchema = require("../models/album");
const { BadRequestError } = require("../errors");
const album = require("../models/album");

// create album
const createAlbum = async (req, res) => {
  const { title, artist, genre, imageUrl, tracks } = req.body;
  if (!title || !artist || !genre || !imageUrl || !tracks) {
    throw new BadRequestError("all fields are required");
  }
  const album = await AlbumSchema.create(req.body);
  res.status(200).json(album);
};
//get single album
const getAlbum = async (req, res) => {
  const albumId = req.params.id;
  console.log(albumId);
  try {
    const album = await AlbumSchema.findById(albumId);
    if (!album) {
      throw new BadRequestError(`There is no album with id ${albumId}`);
    }
    res.status(200).json(album);
  } catch (error) {
    console.log(error);
  }
};
//get all albums
const getAlbums = async (req, res) => {
  const album = await AlbumSchema.find({});
  res.status(200).json(album);
};
//update album
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
