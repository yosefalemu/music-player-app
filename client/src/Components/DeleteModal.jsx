import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { closeDeleteModal } from "../Redux-toolkit/slice/deleteModal";
import { useSelector } from "react-redux";
import { DELETE_SINGLE_TRACK } from "../Redux-toolkit/types/trackType";

const DeleteModalContainer = styled.div`
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

const DeleteModalWrapper = styled.div`
  background-color: #fff;
  padding: 15px;
  width: 20%;
  height: fit-content;
  border-radius: 0px 0px 0px 0px;
  display: flex;
  flex-direction: column;
`;

const DeleteModalTop = styled.div`
  text-align: center;
  margin-bottom: 25px;
`;

const DeleteModalTopText = styled.p`
  font-size: 24px;
  margin: 0px;
`;

const DeleteModalBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const DeleteModalButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
`;

const DeleteModalButton = styled.button`
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

const DeleteModal = () => {
  console.log("delete modal");
  const dispatch = useDispatch();

  const handleCloseModalClick = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(closeDeleteModal());
    }
  };
  const { trackForDelete, errorSingleTrack } = useSelector(
    (state) => state.track
  );
  const [deleteButtonClicked, setDeleteButtonClicked] = useState(false);
  const [cancelButtonClicked, setCancelButtonClicked] = useState(false);

  const handleDeleteButton = () => {
    dispatch({ type: DELETE_SINGLE_TRACK, deleteId: trackForDelete });
    setDeleteButtonClicked(true);
  };
  const handleCancelButton = () => {
    setCancelButtonClicked(true);
  };
  useEffect(() => {
    if (deleteButtonClicked && !errorSingleTrack) {
      window.location.reload();
    }
  }, [deleteButtonClicked, errorSingleTrack]);
  useEffect(() => {
    if (cancelButtonClicked && !errorSingleTrack) {
      window.location.reload();
    }
  }, [cancelButtonClicked, errorSingleTrack]);
  return (
    <DeleteModalContainer onClick={handleCloseModalClick}>
      <DeleteModalWrapper>
        <DeleteModalTop>
          <DeleteModalTopText>Are you sure?</DeleteModalTopText>
        </DeleteModalTop>
        <DeleteModalBottom>
          <DeleteModalButtonContainer>
            <DeleteModalButton bgColor="#20c997" onClick={handleCancelButton}>
              cancel
            </DeleteModalButton>
            <DeleteModalButton bgColor="red" onClick={handleDeleteButton}>
              delete
            </DeleteModalButton>
          </DeleteModalButtonContainer>
        </DeleteModalBottom>
      </DeleteModalWrapper>
    </DeleteModalContainer>
  );
};

export default DeleteModal;
