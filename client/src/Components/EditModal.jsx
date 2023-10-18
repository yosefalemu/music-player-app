import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { closeEditModal } from "../Redux-toolkit/slice/editModal";
import { useSelector, useDispatch } from "react-redux";
import {
  GET_SINGLE_TRACK,
  UPDATE_SINGLE_TRACK,
} from "../Redux-toolkit/types/trackType";
import { UPLOAD_SINGLE_MUSIC_START } from "../Redux-toolkit/types/uploadSingleMusic";
import { UPLOAD_IMAGE_START } from "../Redux-toolkit/types/uploadType";
import ClipLoader from "react-spinners/ClipLoader";
import { removeUploadingSingleMusicError } from "../Redux-toolkit/slice/uploadSingleMusicSlice";
import { removeUploadError } from "../Redux-toolkit/slice/uploadSlice";
import { removeCreateSingleTrackError } from "../Redux-toolkit/slice/trackSlice";
import { setUploadIntially } from "../Redux-toolkit/slice/uploadSlice";
import { setIntialMusicUpload } from "../Redux-toolkit/slice/uploadSingleMusicSlice";

const EditModalContainer = styled.div`
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

const EditModalWrapper = styled.div`
  background-color: #fdf9f3;
  padding: 40px 15px 70px 15px;
  width: 30%;
  height: fit-content;
  border-radius: 30px 0px 30px 0px;
`;

const EditModalTitle = styled.h1`
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
const CreateTrackInputContainer = styled.div`
  padding: 10px;
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
const TrackCreateButton = styled.button`
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

const EditModal = () => {
  const dispatch = useDispatch();
  const handleCloseModalClick = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(closeEditModal());
    }
  };

  const { trackForEdit, singleTrack, errorSingleTrack, loadingSingleTrack } =
    useSelector((state) => state.track);

  const { singleMusic, loadingSingleTrackUpload, errorUploadingSingleTrack } =
    useSelector((state) => state.uploadSingleMusic);
  const { loadingUploadingImage, errorImage, image } = useSelector(
    (state) => state.upload
  );

  useEffect(() => {
    dispatch({ type: GET_SINGLE_TRACK, trackForEdit });
  }, [trackForEdit]);

  useEffect(() => {
    dispatch(removeUploadingSingleMusicError());
    dispatch(removeUploadError());
    dispatch(removeCreateSingleTrackError());
    dispatch(setUploadIntially());
    dispatch(setIntialMusicUpload());
  }, []);

  const [artistName, setArtistName] = useState("");
  const [trackTitle, setTrackTitle] = useState("");
  const [trackGenre, setTrackGenre] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);

  //handel image upload
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

  //handle track upload
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

  //handle edit button
  const handleEditButton = (e) => {
    e.preventDefault();
    const track = {
      title: trackTitle || singleTrack.title,
      artist: artistName || singleTrack.artist,
      genre: trackGenre || singleTrack.genre,
      imageurl: image || singleTrack.imageurl,
      track: singleMusic || singleTrack.track,
    };
    const updateTrack = { id: trackForEdit, track };
    dispatch({ type: UPDATE_SINGLE_TRACK, updateTrack });
    setButtonClicked(true);
  };

  useEffect(() => {
    if (
      buttonClicked &&
      !errorSingleTrack &&
      !errorUploadingSingleTrack &&
      !errorImage
    ) {
      dispatch(closeEditModal());
      window.location.reload();
    }
  }, [buttonClicked, errorSingleTrack, artistName]);
  return (
    <EditModalContainer onClick={handleCloseModalClick}>
      <EditModalWrapper>
        <EditModalTitle>
          Edit Track
          <Underline />
        </EditModalTitle>
        <CreateTrackInputContainer>
          {(loadingSingleTrackUpload ||
            loadingUploadingImage ||
            loadingSingleTrack) && (
            <LoadingComponent>
              <ClipLoader
                color={"#36d7b7"}
                size={70}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </LoadingComponent>
          )}
          {errorUploadingSingleTrack && (
            <ErrorComponent>Error while uploading single track</ErrorComponent>
          )}
          {errorImage && (
            <ErrorComponent>Error while uploading track image</ErrorComponent>
          )}
          {errorSingleTrack && (
            <ErrorComponent>Error while creating track</ErrorComponent>
          )}
          <CreateTrackEachInputItem>
            <CreateTrackLabel>Track Title</CreateTrackLabel>
            <CreateTrackInputComponent
              name="tracktitle"
              type="text"
              placeholder={singleTrack.title}
              onChange={(e) => setTrackTitle(e.target.value)}
            />
          </CreateTrackEachInputItem>
          <CreateTrackEachInputItem>
            <CreateTrackLabel>Artist Name</CreateTrackLabel>
            <CreateTrackInputComponent
              name="trackartist"
              type="text"
              placeholder={singleTrack.artist}
              onChange={(e) => setArtistName(e.target.value)}
            />
          </CreateTrackEachInputItem>
          <CreateTrackEachInputItem>
            <CreateTrackLabel>Genere</CreateTrackLabel>
            <CreateTrackInputComponent
              name="trackartist"
              type="text"
              placeholder="genere"
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
          <TrackCreateButton
            onClick={handleEditButton}
            disabled={
              loadingSingleTrackUpload ||
              loadingUploadingImage ||
              loadingSingleTrack
            }
          >
            Edit
          </TrackCreateButton>
        </CreateTrackInputContainer>
      </EditModalWrapper>
    </EditModalContainer>
  );
};

export default EditModal;
