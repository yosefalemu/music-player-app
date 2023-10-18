import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { DELETE_ALBUM_START } from "../Redux-toolkit/types/albumType";
import { closeDeleteAlbumModal } from "../Redux-toolkit/slice/deleteAlbumModal";

const DeleteAlbumModalContainer = styled.div`
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

const DeleteAlbumModalWrapper = styled.div`
  background-color: #fff;
  padding: 15px;
  width: 20%;
  height: fit-content;
  border-radius: 0px 0px 0px 0px;
  display: flex;
  flex-direction: column;
`;

const DeleteAlbumModalTop = styled.div`
  text-align: center;
  margin-bottom: 25px;
`;

const DeleteAlbumModalTopText = styled.p`
  font-size: 24px;
  margin: 0px;
`;

const DeleteAlbumModalBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const DeleteAlbumModalButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
`;

const DeleteAlbumModalButton = styled.button`
  padding: 11px 13px;
  color: #fff;
  font-weight: 600;
  text-transform: uppercase;
  background: ${(props) => props.bgColor};
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  margin-top: 0.6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
`;

const DeleteAlbumModal = () => {
  const dispatch = useDispatch();

  const handleCloseAlbumModalClick = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(closeDeleteAlbumModal());
    }
  };

  const { albumForDelete, errorAlbum } = useSelector((state) => state.album);
  const [deleteButtonClicked, setDeleteButtonClicked] = useState(false);
  const [cancelButtonClicked, setCancelButtonClicked] = useState(false);

  const handleDeleteButton = () => {
    dispatch({ type: DELETE_ALBUM_START, deleteId: albumForDelete });
    setDeleteButtonClicked(true);
  };
  const handleCancelButton = () => {
    setCancelButtonClicked(true);
  };
  useEffect(() => {
    if (deleteButtonClicked && !errorAlbum) {
      window.location.reload();
    }
  }, [deleteButtonClicked, errorAlbum]);
  useEffect(() => {
    if (cancelButtonClicked && !errorAlbum) {
      window.location.reload();
    }
  }, [cancelButtonClicked, errorAlbum]);
  return (
    <DeleteAlbumModalContainer onClick={handleCloseAlbumModalClick}>
      <DeleteAlbumModalWrapper>
        <DeleteAlbumModalTop>
          <DeleteAlbumModalTopText>Are you sure?</DeleteAlbumModalTopText>
        </DeleteAlbumModalTop>
        <DeleteAlbumModalBottom>
          <DeleteAlbumModalButtonContainer>
            <DeleteAlbumModalButton
              bgColor="#20c997"
              onClick={handleCancelButton}
            >
              cancel
            </DeleteAlbumModalButton>
            <DeleteAlbumModalButton bgColor="red" onClick={handleDeleteButton}>
              delete
            </DeleteAlbumModalButton>
          </DeleteAlbumModalButtonContainer>
        </DeleteAlbumModalBottom>
      </DeleteAlbumModalWrapper>
    </DeleteAlbumModalContainer>
  );
};

export default DeleteAlbumModal;
