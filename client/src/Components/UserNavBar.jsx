import React from "react";
import styled from "styled-components";
import SpeakerIcon from "@mui/icons-material/Speaker";
import SettingsIcon from "@mui/icons-material/Settings";

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
`;
const UserNavBarRight = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const UserNavBarRightText = styled.h1`
  color: white;
  margin-right: 20px;
  font-size: 18px;
  font-weight: 500;
`;
const UserNavBarRightImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 30px;
`;
const UserNavBar = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <UserNavBarContainer>
      <UserNavBarWrapper>
        <UserNavBarLeft>
          <SpeakerIcon style={{ fontSize: "40px", color: "white" }} />
          <UserNavBarLeftText>AddisMusic</UserNavBarLeftText>
        </UserNavBarLeft>
        <UserNavBarRight>
          <UserNavBarRightText>Yosef Alemu</UserNavBarRightText>
          <UserNavBarRightImage src={`${PF}tilahun.jpg`} />
          <SettingsIcon style={{ fontSize: "40px", color: "white" }} />
        </UserNavBarRight>
      </UserNavBarWrapper>
    </UserNavBarContainer>
  );
};

export default UserNavBar;
