import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { closeEditModal } from "../Redux-toolkit/slice/editModal";
import { useSelector, useDispatch } from "react-redux";
import { GET_SINGLE_ALBUM } from "../Redux-toolkit/types/albumType";
import { UPLOAD_SINGLE_MUSIC_START } from "../Redux-toolkit/types/uploadSingleMusic";
import { UPLOAD_IMAGE_START } from "../Redux-toolkit/types/uploadType";
import { UPLOAD_ALBUM_IMAGE_START } from "../Redux-toolkit/types/uploadAlbumImageType";
import ClipLoader from "react-spinners/ClipLoader";
import { removeUploadingSingleMusicError } from "../Redux-toolkit/slice/uploadSingleMusicSlice";
import {
  removeUploadError,
  setUploadIntially,
} from "../Redux-toolkit/slice/uploadSlice";
import { removeCreateSingleTrackError } from "../Redux-toolkit/slice/trackSlice";
import { closeEditAlbumModal } from "../Redux-toolkit/slice/editAlbumModal";
import { Howl } from "howler";
import { UPLOAD_MULTIPLE_MUSIC_START } from "../Redux-toolkit/types/uploadMultipleMusicType";
import { UPDATE_ALBUM_START } from "../Redux-toolkit/types/albumType";
import { setIntialAlbumImageUpload } from "../Redux-toolkit/slice/uploadAlbumImageSlice";
import { removeAlbumImageUploadError } from "../Redux-toolkit/slice/uploadAlbumImageSlice";
import { removeAlbumUpdateError } from "../Redux-toolkit/slice/albumSlice";

const EditAlbumModalContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
  z-index: 10;
`;

const EditAlbumModalWrapper = styled.div`
  background-color: #fdf9f3;
  padding: 40px 15px 70px 15px;
  width: 35%;
  height: fit-content;
  border-radius: 30px 0px 30px 0px;
`;

const EditAlbumModalTitle = styled.h1`
  text-align: center;
  position: relative;
`;

const Underline = styled.div`
  width: 150px;
  height: 5px;
  background-color: #20c997;
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
`;
const EditAlbumModalInputContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
`;
const EditAlbumModalEachInputItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;
const EditAlbumModalLabel = styled.p`
  margin: 0px;
  font-size: 24px;
  width: 45%;
`;
const EditAlbumModalInput = styled.input`
  width: 65%;
  padding: 5px;
  font-size: 16px;
  border: none;
  padding: 11px 13px;
  background: #f9f9fa;
  color: #333;
  border-radius: 4px;
  outline: 0;
  border: 1px solid rgba(245, 245, 245, 0.7);
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  &:focus,
  &:hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`;
const EditAlbumModalButton = styled.button`
  text-align: center;
  padding: 10px 35px;
  font-size: 16px;
  color: #fff;
  font-weight: 600;
  text-transform: uppercase;
  background: #1a9988;
  border: none;
  border-radius: 5px;
  outline: 0;
  cursor: pointer;
  margin-top: 0.6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: opacity 0.2s, background-color 0.2s;

  &:hover {
    opacity: 0.9;
    background-color: #1a9988;
  }
`;
const LoadingComponent = styled.div`
  text-align: center;
`;
const ErrorComponent = styled.div`
  background-color: red;
  color: white;
  font-size: 24px;
  padding: 5px 15px;
  margin-bottom: 30px;
`;

const EditAlbumModal = () => {
  console.log("edit album modal");
  const dispatch = useDispatch();
  const handleCloseModalClick = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(closeEditAlbumModal());
    }
  };

  const { loadingAlbum, errorAlbum, albumForEdit, album } = useSelector(
    (state) => state.album
  );
  useEffect(() => {
    dispatch({ type: GET_SINGLE_ALBUM, albumForEdit });
    dispatch(setUploadIntially());
    dispatch(setIntialAlbumImageUpload());
    dispatch(removeUploadError());
    dispatch(removeAlbumImageUploadError());
    dispatch(removeAlbumUpdateError());
  }, [albumForEdit]);

  const { loadingUploadingImage, errorImage, image } = useSelector(
    (state) => state.upload
  );

  const { albumImage, loadingAlbumImageUpload, errorUploadingAlbumImage } =
    useSelector((state) => state.uploadAlbumImage);
  const {
    loadingMultipleTrackUpload,
    errorUploadingMultipleTrack,
    multipleMusic,
  } = useSelector((state) => state.uploadMultipleMusic);

  const [artistName, setArtistName] = useState("");
  const [albumTitle, setAlbumTitle] = useState("");
  const [albumGenre, setAlbumGenre] = useState("");
  const [albumTrackTitles, setAlbumTrackTitles] = useState([]);
  const [albumTrackDurations, setAlbumTracksDurations] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);

  //handele image fro album's tracks
  const handleImageUpload = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    const formData = new FormData();
    formData.append("image", file);
    const sendImage = formData.get("image");
    dispatch({ type: UPLOAD_IMAGE_START, sendImage });
  };

  //handle image uploads for the album tracks
  const handleAlbumTrackImageUpload = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    const formData = new FormData();
    formData.append("image", file);
    const sendImage = formData.get("image");
    dispatch({ type: UPLOAD_ALBUM_IMAGE_START, sendImage });
  };

  //handle track upload
  const handleAlbumTracksUpload = async (e) => {
    e.preventDefault();
    const files = e.target.files;
    if (!files || files.length === 0) {
      return;
    }

    const formData = new FormData();
    const durationPromises = [];

    for (const file of files) {
      const title = file.name;

      const sound = new Howl({
        src: [URL.createObjectURL(file)],
        format: ["mp3", "ogg", "wav"],
      });

      const durationPromise = new Promise((resolve) => {
        sound.once("load", () => {
          const duration = sound.duration();
          formData.append("duration", duration);
          resolve();
        });
      });

      durationPromises.push(durationPromise);
      formData.append("musicFiles", file);
      formData.append("title", title);
    }

    // Wait for all duration promises to resolve
    await Promise.all(durationPromises);

    const musicFiles = formData.getAll("musicFiles");
    const trackTitles = formData.getAll("title");
    const tracksDurations = formData.getAll("duration");

    const trackDurationsInMinutes = tracksDurations.map((durationInSeconds) => {
      const minutes = Math.floor(durationInSeconds / 60);
      const seconds = (durationInSeconds % 60).toFixed(0);
      return `${minutes}:${seconds}`;
    });
    setAlbumTrackTitles(trackTitles);
    setAlbumTracksDurations(trackDurationsInMinutes);

    // Now you can dispatch or perform further actions
    dispatch({ type: UPLOAD_MULTIPLE_MUSIC_START, musicFiles });
  };

  const trackList = albumTrackTitles?.map((title, index) => ({
    title,
    duration: albumTrackDurations[index],
    file: multipleMusic[index],
  }));

  const tracksToUse = trackList.length ? trackList : album.tracks;

  const handleEditButton = (e) => {
    e.preventDefault();
    const newAlbum = {
      title: albumTitle || album.title,
      artist: artistName || album.artist,
      genre: albumGenre || album.genre,
      albumImageUrl: image || album.albumImageUrl,
      trackImageUrl: albumImage || album.trackImageUrl,
      tracks: tracksToUse,
    };
    const editAlbum = { id: albumForEdit, newAlbum };
    dispatch({ type: UPDATE_ALBUM_START, editAlbum });
    setButtonClicked(true);
  };

  useEffect(() => {
    if (
      buttonClicked &&
      !errorUploadingMultipleTrack &&
      !errorUploadingAlbumImage &&
      !errorImage &&
      !errorAlbum
    ) {
      window.location.reload();
    }
  }, [buttonClicked]);
  return (
    <EditAlbumModalContainer onClick={handleCloseModalClick}>
      <EditAlbumModalWrapper>
        <EditAlbumModalTitle>
          Edit Album
          <Underline />
        </EditAlbumModalTitle>
        <EditAlbumModalInputContainer>
          {(loadingUploadingImage ||
            loadingAlbumImageUpload ||
            loadingMultipleTrackUpload ||
            loadingAlbum) && (
            <LoadingComponent>
              <ClipLoader
                color={"#36d7b7"}
                size={70}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </LoadingComponent>
          )}
          {errorUploadingMultipleTrack && (
            <ErrorComponent>
              Error while uploading multiple tracks
            </ErrorComponent>
          )}
          {errorImage && (
            <ErrorComponent>Error while uploading album image</ErrorComponent>
          )}
          {errorUploadingAlbumImage && (
            <ErrorComponent>
              Error while uploading album's track images
            </ErrorComponent>
          )}
          {errorAlbum && (
            <ErrorComponent>Error while creating an album</ErrorComponent>
          )}
          <EditAlbumModalEachInputItem>
            <EditAlbumModalLabel>Album Title</EditAlbumModalLabel>
            <EditAlbumModalInput
              name="tracktitle"
              type="text"
              placeholder={album.title}
              onChange={(e) => setAlbumTitle(e.target.value)}
            />
          </EditAlbumModalEachInputItem>
          <EditAlbumModalEachInputItem>
            <EditAlbumModalLabel>Artist Name</EditAlbumModalLabel>
            <EditAlbumModalInput
              name="trackartist"
              type="text"
              placeholder={album.artist}
              onChange={(e) => setArtistName(e.target.value)}
            />
          </EditAlbumModalEachInputItem>
          <EditAlbumModalEachInputItem>
            <EditAlbumModalLabel>Album Genere</EditAlbumModalLabel>
            <EditAlbumModalInput
              name="trackartist"
              type="text"
              placeholder={album.genre}
              onChange={(e) => setAlbumGenre(e.target.value)}
            />
          </EditAlbumModalEachInputItem>
          <EditAlbumModalEachInputItem>
            <EditAlbumModalLabel>Album Image</EditAlbumModalLabel>
            <EditAlbumModalInput
              name="trackimage"
              type="file"
              onChange={handleImageUpload}
            />
          </EditAlbumModalEachInputItem>
          <EditAlbumModalEachInputItem>
            <EditAlbumModalLabel>Album Track Image</EditAlbumModalLabel>
            <EditAlbumModalInput
              name="trackimage"
              type="file"
              onChange={handleAlbumTrackImageUpload}
            />
          </EditAlbumModalEachInputItem>
          <EditAlbumModalEachInputItem>
            <EditAlbumModalLabel> Albums Tracks</EditAlbumModalLabel>
            <EditAlbumModalInput
              name="singletrack"
              type="file"
              accept=".mp3"
              multiple
              onChange={handleAlbumTracksUpload}
            />
          </EditAlbumModalEachInputItem>
          <EditAlbumModalButton
            onClick={handleEditButton}
            disabled={
              loadingUploadingImage ||
              loadingAlbumImageUpload ||
              loadingMultipleTrackUpload ||
              loadingAlbum
            }
          >
            Edit
          </EditAlbumModalButton>
        </EditAlbumModalInputContainer>
      </EditAlbumModalWrapper>
    </EditAlbumModalContainer>
  );
};

export default EditAlbumModal;
