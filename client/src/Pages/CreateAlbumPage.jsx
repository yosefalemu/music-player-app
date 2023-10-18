import React, { useEffect, useState } from "react";
import styled from "styled-components";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import { closeAdminModal } from "../Redux-toolkit/slice/adminModal";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UPLOAD_MULTIPLE_MUSIC_START } from "../Redux-toolkit/types/uploadMultipleMusicType";
import { UPLOAD_IMAGE_START } from "../Redux-toolkit/types/uploadType";
import { UPLOAD_ALBUM_IMAGE_START } from "../Redux-toolkit/types/uploadAlbumImageType";
import { CREATE_ALBUM_START } from "../Redux-toolkit/types/albumType";
import ClipLoader from "react-spinners/ClipLoader";
import { Howl } from "howler";
import { removeUploadError } from "../Redux-toolkit/slice/uploadSlice";
import { removeUploadingMultipleMusicError } from "../Redux-toolkit/slice/uploadMultipleMusicSlice";
import { removeUploadingAlbumImageError } from "../Redux-toolkit/slice/uploadAlbumImageSlice";

const CreateAlbumContainer = styled.div`
  background: #333333;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Arial", sans-serif;
  position: relative;
`;
const CreateAlbumWrapper = styled.div`
  width: 50%;
  height: 75%;
`;
const CreateAlbumTitle = styled.h1`
  margin: 0px;
  text-align: center;
  margin-bottom: 40px;
  font-size: 35px;
  color: white;
`;
const CreateAlbumInputContainer = styled.div`
  padding: 10px 50px;
  display: flex;
  flex-direction: column;
`;
const CreateAlbumEachInputItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;
const CreateAlbumLabel = styled.p`
  margin: 0px;
  font-size: 24px;
  width: 35%;
  color: white;
`;
const CreateAlbumInputComponent = styled.input`
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
const AlbumCreateButtonContainer = styled.div`
  margin-top: 20px;
  text-align: center;
`;
const AlbumCreateButton = styled.button`
  text-align: center;
  padding: 10px 35px;
  font-size: 16px;
  color: #fff;
  font-weight: 600;
  text-transform: uppercase;
  background: #666666;
  border: none;
  border-radius: 5px;
  outline: 0;
  cursor: pointer;
  margin-top: 0.6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: opacity 0.2s, background-color 0.2s;

  &:hover {
    opacity: 0.9;
    background-color: #555555;
  }
`;
const BackButton = styled.button`
  position: absolute;
  top: 100px;
  left: 300px;
  text-align: center;
  padding: 10px 35px;
  font-size: 16px;
  color: #fff;
  font-weight: 600;
  text-transform: uppercase;
  background: #666666;
  border: none;
  border-radius: 5px;
  outline: 0;
  cursor: pointer;
  margin-top: 0.6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);

  &:hover {
    background: #555555;
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
const SuccessComponent = styled.div`
  background-color: #1a9988;
  text-align: center;
  color: white;
  font-size: 24px;
  padding: 5px 15px;
  margin-bottom: 30px;
`;
const GetAllAlbumButton = styled.button`
  position: absolute;
  top: 100px;
  right: 300px;
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

  &:hover {
    opacity: 0.9;
    background-color: #1a9988;
  }
`;

const CreateAlbumPage = () => {
  console.log("create album page");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleBackClick = () => {
    dispatch(closeAdminModal());
    navigate("/maindisplay");
  };
  useEffect(() => {
    removeUploadError();
    removeUploadingMultipleMusicError();
    removeUploadingAlbumImageError();
  }, []);
  const {
    loadingMultipleTrackUpload,
    errorUploadingMultipleTrack,
    multipleMusic,
  } = useSelector((state) => state.uploadMultipleMusic);

  const { image, loadingUploadingImage, errorImage } = useSelector(
    (state) => state.upload
  );

  const { albumImage, loadingAlbumImageUpload, errorUploadingAlbumImage } =
    useSelector((state) => state.uploadAlbumImage);
  const { loadingAlbum, errorAlbum } = useSelector((state) => state.album);

  const [albumTitle, setAlbumTitle] = useState("");
  const [artistName, setArtistName] = useState("");
  const [albumGenre, setAlbumGenre] = useState("");
  const [albumTrackTitles, setAlbumTrackTitles] = useState([]);
  const [albumTrackDurations, setAlbumTracksDurations] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);

  // handle album tracks uploads
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

  //handle image upload for the album image
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
  //handle uploading album tracks image
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

  //create track detail for the album

  const trackList = albumTrackTitles?.map((title, index) => ({
    title,
    duration: albumTrackDurations[index],
    file: multipleMusic[index],
  }));

  //handle album create
  const handleCreateAlbum = (e) => {
    e.preventDefault();
    const album = {
      title: albumTitle,
      artist: artistName,
      genre: albumGenre,
      albumImageUrl: image,
      trackImageUrl: albumImage,
      tracks: trackList,
    };
    dispatch({ type: CREATE_ALBUM_START, album });
    setButtonClicked(true);
  };

  return (
    <CreateAlbumContainer>
      <CreateAlbumWrapper>
        <CreateAlbumTitle>Create Album</CreateAlbumTitle>
        {(loadingMultipleTrackUpload ||
          loadingUploadingImage ||
          loadingAlbumImageUpload ||
          loadingAlbum) && (
          <LoadingComponent>
            <ClipLoader
              color={"#36d7b7"}
              loading={[loadingMultipleTrackUpload, loadingUploadingImage]}
              size={70}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </LoadingComponent>
        )}
        <CreateAlbumInputContainer>
          {errorUploadingMultipleTrack && (
            <ErrorComponent>
              Error while uploading the album tracks
            </ErrorComponent>
          )}
          {errorImage && (
            <ErrorComponent>
              Error while uploading an album image
            </ErrorComponent>
          )}
          {errorUploadingAlbumImage && (
            <ErrorComponent>Error while uploading tracks image</ErrorComponent>
          )}
          {errorAlbum && (
            <ErrorComponent>Error while creating an album</ErrorComponent>
          )}
          {buttonClicked &&
            !errorUploadingMultipleTrack &&
            !errorImage &&
            !errorUploadingAlbumImage &&
            !errorAlbum &&
            !loadingAlbum && (
              <SuccessComponent>Album created successfully</SuccessComponent>
            )}
          {buttonClicked &&
            !errorUploadingMultipleTrack &&
            !errorImage &&
            !errorUploadingAlbumImage &&
            !errorAlbum &&
            !loadingAlbum && (
              <GetAllAlbumButton onClick={() => navigate("/allalbums")}>
                <EastIcon />
              </GetAllAlbumButton>
            )}
          <CreateAlbumEachInputItem>
            <CreateAlbumLabel>Album Title</CreateAlbumLabel>
            <CreateAlbumInputComponent
              name="albumtitle"
              type="text"
              onChange={(e) => setAlbumTitle(e.target.value)}
            />
          </CreateAlbumEachInputItem>
          <CreateAlbumEachInputItem>
            <CreateAlbumLabel>Artist Name</CreateAlbumLabel>
            <CreateAlbumInputComponent
              name="albumname"
              type="text"
              onChange={(e) => setArtistName(e.target.value)}
            />
          </CreateAlbumEachInputItem>
          <CreateAlbumEachInputItem>
            <CreateAlbumLabel>Album Genre</CreateAlbumLabel>
            <CreateAlbumInputComponent
              name="albumgenre"
              type="text"
              onChange={(e) => setAlbumGenre(e.target.value)}
            />
          </CreateAlbumEachInputItem>
          <CreateAlbumEachInputItem>
            <CreateAlbumLabel>Album Image</CreateAlbumLabel>
            <CreateAlbumInputComponent
              name="image"
              type="file"
              onChange={handleImageUpload}
            />
          </CreateAlbumEachInputItem>
          <CreateAlbumEachInputItem>
            <CreateAlbumLabel>Album Track Image</CreateAlbumLabel>
            <CreateAlbumInputComponent
              name="image"
              type="file"
              onChange={handleAlbumTrackImageUpload}
            />
          </CreateAlbumEachInputItem>
          <CreateAlbumEachInputItem>
            <CreateAlbumLabel>Album Tracks</CreateAlbumLabel>
            <CreateAlbumInputComponent
              name="musicFiles"
              type="file"
              multiple
              onChange={handleAlbumTracksUpload}
            />
          </CreateAlbumEachInputItem>
        </CreateAlbumInputContainer>
        <AlbumCreateButtonContainer
          onClick={handleCreateAlbum}
          disabled={
            loadingUploadingImage ||
            loadingAlbumImageUpload ||
            loadingMultipleTrackUpload ||
            loadingAlbum
          }
        >
          <AlbumCreateButton>Create</AlbumCreateButton>
        </AlbumCreateButtonContainer>
      </CreateAlbumWrapper>
      <BackButton onClick={handleBackClick}>
        <WestIcon />
      </BackButton>
    </CreateAlbumContainer>
  );
};

export default CreateAlbumPage;
