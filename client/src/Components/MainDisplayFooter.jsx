import React from "react";
import styled from "styled-components";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import RepeatIcon from "@mui/icons-material/Repeat";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

const MainDisplayFooterContainer = styled.div`
  height: 15vh;
  width: 100vw;
  background-color: #111111;
  color: white;
`;
const MainDisplayFooterWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 10px;
  display: flex;
`;
const MainDisplayFooterLeft = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const MainDisplayFooterLeftImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
  border-radius: 5px;
  object-fit: cover;
`;
const MainDisplayFooterLeftMusicDetail = styled.div`
  display: flex;
  flex-direction: column;
`;
const MainDisplayFooterLeftMusicTitle = styled.h1`
  margin: 0;
`;
const MainDisplayFooterLeftMusicianName = styled.p`
  margin: 0;
  color: #666666;
  font-weight: 600;
`;
const MainDisplayFooterMiddle = styled.div`
  flex: 1;
`;
const MainDisplayFooterMiddleTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const MainDisplayFooterMiddleBottom = styled.div``;

const MainDisplayFooterRight = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainDisplayFooter = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const imageUri = `${PF}zeritu.jpg`;
  return (
    <MainDisplayFooterContainer>
      <MainDisplayFooterWrapper>
        <MainDisplayFooterLeft>
          <MainDisplayFooterLeftImage
            src={imageUri}
            alt="IMAGE NOT AVAILABLE"
          />
          <MainDisplayFooterLeftMusicDetail>
            <MainDisplayFooterLeftMusicTitle>
              Yene Konjo
            </MainDisplayFooterLeftMusicTitle>
            <MainDisplayFooterLeftMusicianName>
              Zeritu Kebede
            </MainDisplayFooterLeftMusicianName>
          </MainDisplayFooterLeftMusicDetail>
        </MainDisplayFooterLeft>
        <MainDisplayFooterMiddle>
          <MainDisplayFooterMiddleTop>
            <ShuffleIcon
              style={{
                fontSize: "45px",
                marginRight: "15px",
                color: "#555555",
                transition: "color 0.3s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.target.style.color = "white")}
              onMouseLeave={(e) => (e.target.style.color = "#555555")}
            />
            <SkipPreviousIcon
              style={{
                fontSize: "45px",
                marginRight: "15px",
                color: "#555555",
                transition: "color 0.3s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.target.style.color = "white")}
              onMouseLeave={(e) => (e.target.style.color = "#555555")}
            />
            <PlayCircleFilledWhiteIcon
              style={{
                fontSize: "45px",
                marginRight: "15px",
                color: "#555555",
                transition: "color 0.3s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.target.style.color = "white")}
              onMouseLeave={(e) => (e.target.style.color = "#555555")}
            />
            <PauseCircleIcon
              style={{
                fontSize: "45px",
                marginRight: "15px",
                color: "#555555",
                transition: "color 0.3s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.target.style.color = "white")}
              onMouseLeave={(e) => (e.target.style.color = "#555555")}
            />
            <SkipNextIcon
              style={{
                fontSize: "45px",
                marginRight: "15px",
                color: "#555555",
                transition: "color 0.3s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.target.style.color = "white")}
              onMouseLeave={(e) => (e.target.style.color = "#555555")}
            />
            <RepeatIcon
              style={{
                fontSize: "45px",
                marginRight: "15px",
                color: "#555555",
                transition: "color 0.3s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.target.style.color = "white")}
              onMouseLeave={(e) => (e.target.style.color = "#555555")}
            />
          </MainDisplayFooterMiddleTop>
          <MainDisplayFooterMiddleBottom></MainDisplayFooterMiddleBottom>
        </MainDisplayFooterMiddle>
        <MainDisplayFooterRight>
          <LibraryMusicIcon
            style={{
              fontSize: "25px",
              marginRight: "15px",
              color: "#555555",
              transition: "color 0.3s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.target.style.color = "white")}
            onMouseLeave={(e) => (e.target.style.color = "#555555")}
          />
          <QueueMusicIcon
            style={{
              fontSize: "25px",
              marginRight: "15px",
              color: "#555555",
              transition: "color 0.3s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.target.style.color = "white")}
            onMouseLeave={(e) => (e.target.style.color = "#555555")}
          />
          <HeadphonesIcon
            style={{
              fontSize: "25px",
              marginRight: "15px",
              color: "#555555",
              transition: "color 0.3s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.target.style.color = "white")}
            onMouseLeave={(e) => (e.target.style.color = "#555555")}
          />
          <VolumeUpIcon
            style={{
              fontSize: "25px",
              marginRight: "15px",
              color: "#555555",
              transition: "color 0.3s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.target.style.color = "white")}
            onMouseLeave={(e) => (e.target.style.color = "#555555")}
          />
        </MainDisplayFooterRight>
      </MainDisplayFooterWrapper>
    </MainDisplayFooterContainer>
  );
};

export default MainDisplayFooter;
