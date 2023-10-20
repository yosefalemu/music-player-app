import React, { useEffect, useState } from "react";
import styled from "styled-components";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeAdminModal } from "../Redux-toolkit/slice/adminModal";
import { UPLOAD_SINGLE_MUSIC_START } from "../Redux-toolkit/types/uploadSingleMusic";
import { UPLOAD_IMAGE_START } from "../Redux-toolkit/types/uploadType";
import { CREATE_SINGLE_TRACK } from "../Redux-toolkit/types/trackType";
import { useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import { removeUploadingSingleMusicError } from "../Redux-toolkit/slice/uploadSingleMusicSlice";
import { removeUploadError } from "../Redux-toolkit/slice/uploadSlice";
import { removeCreateSingleTrackError } from "../Redux-toolkit/slice/trackSlice";

const CreateTrackContainer = styled.div`
  background: #333333;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Arial", sans-serif;
  position: relative;
`;
const CreateTrackWrapper = styled.div`
  width: 37%;
  height: 60%;
`;
const CreateTrackTitle = styled.h1`
  margin: 0px;
  text-align: center;
  margin-bottom: 40px;
  font-size: 35px;
  color: white;
`;
const CreateTrackInputContainer = styled.div`
  padding: 10px 50px;
  display: flex;
  flex-direction: column;
`;
const CreateTrackEachInputItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;
const CreateTrackLabel = styled.p`
  margin: 0px;
  font-size: 24px;
  width: 35%;
  color: white;
`;
const CreateTrackInputComponent = styled.input`
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
const TrackCreateButtonContainer = styled.div`
  margin-top: 20px;
  text-align: center;
`;
const TrackCreateButton = styled.button`
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
    opacity: 0.9;
    background-color: #555555;
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
const GetAllTrackButton = styled.button`
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

const CreateTrackPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [trackTitle, setTrackTitle] = useState("");
  const [artistName, setArtistName] = useState("");
  const [trackGenre, setTrackGenre] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    dispatch(removeUploadingSingleMusicError());
    dispatch(removeUploadError());
    dispatch(removeCreateSingleTrackError());
  }, [dispatch]);

  const { singleMusic, loadingSingleTrackUpload, errorUploadingSingleTrack } =
    useSelector((state) => state.uploadSingleMusic);
  const { loadingUploadingImage, errorImage, image } = useSelector(
    (state) => state.upload
  );
  const { errorSingleTrack, loadingSingleTrack } = useSelector(
    (state) => state.track
  );

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

  const handleTrackUpload = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    const formData = new FormData();
    formData.append("singletrack", file);
    const sendMusic = formData.get("singletrack");
    dispatch({ type: UPLOAD_SINGLE_MUSIC_START, sendMusic });
  };

  const handleCreateTrack = () => {
    const track = {
      title: trackTitle,
      artist: artistName,
      genre: trackGenre,
      imageurl: image,
      track: singleMusic,
    };
    dispatch({ type: CREATE_SINGLE_TRACK, track });
    setButtonClicked(true);
  };

  const handleBackClick = () => {
    dispatch(closeAdminModal());
    navigate("/maindisplay");
  };

  return (
    <CreateTrackContainer>
      <CreateTrackWrapper>
        <CreateTrackTitle>Create Track</CreateTrackTitle>
        {(loadingSingleTrackUpload ||
          loadingUploadingImage ||
          loadingSingleTrack) && (
          <LoadingComponent>
            <ClipLoader
              color={"#36d7b7"}
              loading={[
                loadingSingleTrackUpload,
                loadingUploadingImage,
                loadingSingleTrack,
              ]}
              size={70}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </LoadingComponent>
        )}
        <CreateTrackInputContainer>
          {errorUploadingSingleTrack && (
            <ErrorComponent>Error while uploading the track</ErrorComponent>
          )}
          {errorImage && (
            <ErrorComponent>
              Error while uploading the track image
            </ErrorComponent>
          )}
          {errorSingleTrack && (
            <ErrorComponent>Error while creating a track</ErrorComponent>
          )}
          {buttonClicked &&
            !errorSingleTrack &&
            !errorImage &&
            !errorUploadingSingleTrack && (
              <SuccessComponent>Track created successfully</SuccessComponent>
            )}
          {buttonClicked &&
            !errorSingleTrack &&
            !errorImage &&
            !errorUploadingSingleTrack && (
              <GetAllTrackButton onClick={() => navigate("/alltracks")}>
                <EastIcon />
              </GetAllTrackButton>
            )}
          <CreateTrackEachInputItem>
            <CreateTrackLabel>Track Title</CreateTrackLabel>
            <CreateTrackInputComponent
              name="tracktitle"
              type="text"
              onChange={(e) => setTrackTitle(e.target.value)}
            />
          </CreateTrackEachInputItem>
          <CreateTrackEachInputItem>
            <CreateTrackLabel>Artist Name</CreateTrackLabel>
            <CreateTrackInputComponent
              name="trackartist"
              type="text"
              onChange={(e) => setArtistName(e.target.value)}
            />
          </CreateTrackEachInputItem>
          <CreateTrackEachInputItem>
            <CreateTrackLabel>Track Genre</CreateTrackLabel>
            <CreateTrackInputComponent
              name="trackgenre"
              type="text"
              onChange={(e) => setTrackGenre(e.target.value)}
            />
          </CreateTrackEachInputItem>
          <CreateTrackEachInputItem>
            <CreateTrackLabel>Track Image</CreateTrackLabel>
            <CreateTrackInputComponent
              name="trackimage"
              type="file"
              onChange={handleImageUpload}
            />
          </CreateTrackEachInputItem>
          <CreateTrackEachInputItem>
            <CreateTrackLabel>Track</CreateTrackLabel>
            <CreateTrackInputComponent
              name="singletrack"
              type="file"
              accept=".mp3"
              onChange={handleTrackUpload}
            />
          </CreateTrackEachInputItem>
        </CreateTrackInputContainer>
        <TrackCreateButtonContainer
          onClick={handleCreateTrack}
          disabled={
            loadingSingleTrackUpload ||
            loadingUploadingImage ||
            loadingSingleTrack
          }
        >
          <TrackCreateButton>Create</TrackCreateButton>
        </TrackCreateButtonContainer>
      </CreateTrackWrapper>
      <BackButton onClick={handleBackClick}>
        <WestIcon />
      </BackButton>
    </CreateTrackContainer>
  );
};

export default CreateTrackPage;
