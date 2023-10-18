import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { setPlayingMusic } from "../Redux-toolkit/slice/playingSlice";

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
  padding: 0px 20px;
`;

const MainDisplayFooterLeftImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 20px;
  border-radius: 5px;
  object-fit: cover;
`;

const MainDisplayFooterLeftMusicDetail = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainDisplayFooterLeftMusicTitle = styled.h1`
  margin: 0;
  font-family: "Arial", sans-serif;
  text-transform: capitalize;
`;

const MainDisplayFooterLeftMusicianName = styled.p`
  margin: 0;
  color: #666666;
  font-weight: 600;
  font-family: "Arial", sans-serif;
  text-transform: capitalize;
`;

const MainDisplayFooterMiddle = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainDisplayFooterMiddleContainer = styled.audio``;

const MainDisplayFooterRight = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: right;
  padding: 0px 40px;
`;

const MainDisplayFooter = () => {
  const dispatch = useDispatch();
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const musicUrl = PF + "tracks/";
  const imageUrl = PF + "images/";
  const {
    currentTrack,
    currentImageUrl,
    currentTrackName,
    currentTrackArtist,
  } = useSelector((state) => state.track);
  const audioRef = useRef(null);

  const { currentPlayingMusic, currentTime } = useSelector(
    (state) => state.playingMusic
  );

  // Handle time update
  const handleTimeUpdate = () => {
    if (audioRef.current && isFinite(audioRef.current.currentTime)) {
      dispatch(
        setPlayingMusic({
          currentPlayingMusic: currentPlayingMusic,
          currentTime: audioRef.current.currentTime,
        })
      );
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = `${musicUrl}${currentPlayingMusic}`;
      audioRef.current.load();
      audioRef.current.addEventListener("timeupdate", handleTimeUpdate);

      // Set currentTime if available
      if (!isNaN(currentTime) && isFinite(currentTime)) {
        audioRef.current.currentTime = currentTime;
      }

      audioRef.current.play().catch((error) => {
        console.error("Failed to play audio:", error);
      });
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
      }
    };
  }, [currentPlayingMusic]);

  return (
    <MainDisplayFooterContainer>
      <MainDisplayFooterWrapper>
        <MainDisplayFooterLeft>
          <MainDisplayFooterLeftImage
            src={`${imageUrl}${currentImageUrl}`}
            alt="IMAGE NOT AVAILABLE"
          />
          <MainDisplayFooterLeftMusicDetail>
            <MainDisplayFooterLeftMusicTitle>
              {currentTrackName}
            </MainDisplayFooterLeftMusicTitle>
            <MainDisplayFooterLeftMusicianName>
              {currentTrackArtist}
            </MainDisplayFooterLeftMusicianName>
          </MainDisplayFooterLeftMusicDetail>
        </MainDisplayFooterLeft>
        <MainDisplayFooterMiddle>
          <MainDisplayFooterMiddleContainer controls ref={audioRef}>
            <source
              src={`${musicUrl}${currentTrack}`}
              type="audio/mpeg"
            ></source>
          </MainDisplayFooterMiddleContainer>
        </MainDisplayFooterMiddle>
        <MainDisplayFooterRight>
          <LibraryMusicIcon
            style={{
              fontSize: "30px",
              marginRight: "20px",
              color: "#555555",
              transition: "color 0.3s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.target.style.color = "white")}
            onMouseLeave={(e) => (e.target.style.color = "#555555")}
          />
          <QueueMusicIcon
            style={{
              fontSize: "30px",
              marginRight: "20px",
              color: "#555555",
              transition: "color 0.3s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.target.style.color = "white")}
            onMouseLeave={(e) => (e.target.style.color = "#555555")}
          />
          <HeadphonesIcon
            style={{
              fontSize: "30px",
              marginRight: "20px",
              color: "#555555",
              transition: "color 0.3s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.target.style.color = "white")}
            onMouseLeave={(e) => (e.target.style.color = "#555555")}
          />
          <VolumeUpIcon
            style={{
              fontSize: "30px",
              marginRight: "20px",
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
