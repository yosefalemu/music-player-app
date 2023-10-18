import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { closeAdminModal } from "../Redux-toolkit/slice/adminModal";
import CollectionsIcon from "@mui/icons-material/Collections";
import ArtTrackIcon from "@mui/icons-material/ArtTrack";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import { useNavigate } from "react-router-dom";

const AdminModalContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  background: rgba(0, 0, 0, 0.6);
  z-index: 10;
`;
const AdminModalWrapper = styled.div`
  background-color: #fff;
  padding: 15px;
  width: 20%;
  height: fit-content;
  border-radius: 0px 0px 0px 20px;
  display: flex;
  flex-direction: column;
`;
const AdminModalEachItem = styled.div`
  display: flex;
  padding: 15px 20px;
  align-items: center;
  justify-content: left;
  background-color: ${(props) => props.bgColor || "red"};
  border-radius: 15px;
  margin-bottom: 15px;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 5px #20c997;
  }
`;
const AdminModalEachItemText = styled.p`
  font-size: 24px;
  margin: 0px;
  padding: 0px;
  color: white;
`;

const AdminModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleCloseModalClick = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(closeAdminModal());
    }
  };
  return (
    <AdminModalContainer onClick={handleCloseModalClick}>
      <AdminModalWrapper>
        <AdminModalEachItem
          bgColor="#20c997"
          onClick={() => navigate("/allalbums")}
        >
          <CollectionsIcon
            style={{ fontSize: "34px", marginRight: "20px", color: "white" }}
          />
          <AdminModalEachItemText>All albums</AdminModalEachItemText>
        </AdminModalEachItem>
        <AdminModalEachItem
          bgColor="#20c997"
          onClick={() => navigate("/alltracks")}
        >
          <ArtTrackIcon
            style={{ fontSize: "34px", marginRight: "20px", color: "white" }}
          />
          <AdminModalEachItemText>All tracks</AdminModalEachItemText>
        </AdminModalEachItem>
        <AdminModalEachItem
          bgColor="#20c997"
          onClick={() => navigate("/createtrack")}
        >
          <NoteAddIcon
            style={{ fontSize: "34px", marginRight: "20px", color: "white" }}
          />
          <AdminModalEachItemText>Create track</AdminModalEachItemText>
        </AdminModalEachItem>
        <AdminModalEachItem
          bgColor="#20c997"
          onClick={() => navigate("/createalbum")}
        >
          <CreateNewFolderIcon
            style={{ fontSize: "34px", marginRight: "20px", color: "white" }}
          />
          <AdminModalEachItemText>Create Album</AdminModalEachItemText>
        </AdminModalEachItem>
      </AdminModalWrapper>
    </AdminModalContainer>
  );
};

export default AdminModal;
