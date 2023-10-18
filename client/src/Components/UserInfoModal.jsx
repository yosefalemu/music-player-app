import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { closeModal } from "../Redux-toolkit/slice/modalSlice";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import FolderSpecialIcon from "@mui/icons-material/FolderSpecial";
import FavoriteIcon from "@mui/icons-material/Favorite";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import EditNoteIcon from "@mui/icons-material/EditNote";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

const UserInfoModalContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

const UserInfoModalWrapper = styled.div`
  background-color: #fff;
  padding: 15px;
  width: 20%;
  border-radius: 0px 0px 0px 20px;
  border: 2px solid white;
  height: fit-content;
  display: flex;
  flex-direction: column;
`;

const UserInfoModalEachItem = styled.div`
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

const UserInfoModalEachItemText = styled.p`
  font-size: 24px;
  margin: 0px;
  padding: 0px;
  color: white;
`;

const UserInfoModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCloseModalClick = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(closeModal());
    }
  };
  const handleLogOut = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <UserInfoModalContainer onClick={handleCloseModalClick}>
      <UserInfoModalWrapper>
        <UserInfoModalEachItem bgColor="#20c997">
          <AccountBoxIcon
            style={{ fontSize: "34px", marginRight: "20px", color: "white" }}
          />
          <UserInfoModalEachItemText>View Profile</UserInfoModalEachItemText>
        </UserInfoModalEachItem>
        <UserInfoModalEachItem bgColor="#20c997">
          <EditNoteIcon
            style={{ fontSize: "34px", marginRight: "20px", color: "white" }}
          />
          <UserInfoModalEachItemText>Update Profile</UserInfoModalEachItemText>
        </UserInfoModalEachItem>
        <UserInfoModalEachItem bgColor="#20c997">
          <QueueMusicIcon
            style={{ fontSize: "34px", marginRight: "20px", color: "white" }}
          />
          <UserInfoModalEachItemText>Playlist</UserInfoModalEachItemText>
        </UserInfoModalEachItem>
        <UserInfoModalEachItem bgColor="#20c997">
          <FavoriteIcon
            style={{ fontSize: "34px", marginRight: "20px", color: "white" }}
          />
          <UserInfoModalEachItemText>Favorites</UserInfoModalEachItemText>
        </UserInfoModalEachItem>
        <UserInfoModalEachItem bgColor="#20c997">
          <FolderSpecialIcon
            style={{ fontSize: "34px", marginRight: "20px", color: "white" }}
          />
          <UserInfoModalEachItemText>Saved Music</UserInfoModalEachItemText>
        </UserInfoModalEachItem>
        <UserInfoModalEachItem bgColor="red">
          <LogoutIcon
            style={{ fontSize: "34px", marginRight: "20px", color: "white" }}
          />
          <UserInfoModalEachItemText onClick={handleLogOut}>
            LogOut User
          </UserInfoModalEachItemText>
        </UserInfoModalEachItem>
      </UserInfoModalWrapper>
    </UserInfoModalContainer>
  );
};

export default UserInfoModal;
