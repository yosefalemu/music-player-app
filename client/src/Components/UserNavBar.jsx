import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SpeakerIcon from "@mui/icons-material/Speaker";
import SettingsIcon from "@mui/icons-material/Settings";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../Redux-toolkit/slice/modalSlice";
import { openAdminModal } from "../Redux-toolkit/slice/adminModal";

const UserNavBarContainer = styled.div`
  height: 10vh;
`;
const UserNavBarWrapper = styled.div`
  height: 100%;
  padding: 5px 25px;
  display: flex;
  align-items: center;
`;

const UserNavBarLeft = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const UserNavBarLeftText = styled.h1`
  color: white;
  font-family: "Arial", sans-serif;
`;
const UserNavBarRight = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const UserNavBarRightText = styled.h1`
  color: white;
  margin-right: 15px;
  font-size: 24px;
  font-weight: 500;
  font-family: "Arial", sans-serif;
`;
const UserNavBarRightImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 30px;
`;
const UserNavBarRightButton = styled.button`
  font-size: 18px;
  color: white;
  background-color: #20c997;
  margin-right: 30px;
  padding: 5px 15px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-family: "Arial", sans-serif;
  &:hover {
    border-radius: 50px;
  }
`;

const UserNavBar = () => {
  console.log("user nav bar");
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const imageUrl = PF + "images/";

  const [profilePicture, setProfilePicture] = useState("");
  const dispatch = useDispatch();
  const { avatar, username, isadmin } = useSelector((state) => state.user.user);
  useEffect(() => {
    if (!avatar) {
      setProfilePicture("defaultProfile.jpg");
    } else {
      setProfilePicture(avatar);
    }
  }, [avatar]);

  const handleClick = () => {
    dispatch(openModal());
  };
  const handleAdminButtonClick = () => {
    dispatch(openAdminModal());
  };

  return (
    <UserNavBarContainer>
      <UserNavBarWrapper>
        <UserNavBarLeft>
          <SpeakerIcon style={{ fontSize: "40px", color: "white" }} />
          <UserNavBarLeftText>AddisMusic</UserNavBarLeftText>
        </UserNavBarLeft>
        <UserNavBarRight>
          <UserNavBarRightText>{username}</UserNavBarRightText>
          {isadmin && (
            <UserNavBarRightButton onClick={handleAdminButtonClick}>
              Admin
            </UserNavBarRightButton>
          )}
          <UserNavBarRightImage src={`${imageUrl}${profilePicture}`} />
          <SettingsIcon
            style={{ fontSize: "40px", color: "white" }}
            onClick={handleClick}
          />
        </UserNavBarRight>
      </UserNavBarWrapper>
    </UserNavBarContainer>
  );
};

export default UserNavBar;
