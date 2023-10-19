import React, { useState } from "react";
import styled from "styled-components";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import {
  setCurrentImageUrl,
  setCurrentTrackName,
  setCurrentArtistName,
} from "../Redux-toolkit/slice/trackSlice";
import { useDispatch } from "react-redux";
import { setPlayingMusic } from "../Redux-toolkit/slice/playingSlice";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const SingleMusicMiddleListContainer = styled.div``;
const SingleMusicFourthEachItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 15px;
  border-radius: 10px;
  position: relative;

  &:hover {
    background-color: #333333;
    .play-icon {
      display: block;
    }

    .number {
      display: none;
    }
  }
`;
const SingleMusicMiddleInfoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0% 4%;
`;
const SingleImageContainer = styled.div`
  flex: 1;
`;
const SingleMusicMiddleFourthImage = styled.img`
  width: 55px;
  height: 55px;
  object-fit: cover;
  margin-right: 15px;
`;
const SingleMusicMiddleFourthName = styled.h3`
  flex: 5;
  color: white;
  font-size: 24px;
  font-weight: 500;
  text-transform: capitalize;
  font-family: "Arial", sans-serif;
`;
const SingleMusicMiddleFourthLength = styled.h3`
  flex: 1;
  color: white;
  font-family: "Arial", sans-serif;
`;
const SingleMusicMiddleFourthIconContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;
const SingleMusicFourthPlayNumber = styled.div`
  display: flex;
  align-items: center;
  font-size: 45px;
  color: #20c997;
  cursor: pointer;
  transition: font-size 0.2s ease-in-out;

  .play-icon {
    display: none;
  }

  &:hover {
    .number {
      display: none;
    }

    .play-icon {
      display: block;
    }
  }
`;

const SingleMusicMiddleList = (props) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const imageUrl = PF + "images/";
  const { track, trackUrl, trackCounter, artist } = props;
  const dispatch = useDispatch();

  const [hovering, setHovering] = useState(false);

  return (
    <SingleMusicMiddleListContainer>
      <SingleMusicFourthEachItem
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        onClick={() => {
          dispatch(
            setPlayingMusic({ currentPlayingMusic: track.file, currentTime: 0 })
          );
          dispatch(setCurrentImageUrl(trackUrl));
          dispatch(setCurrentTrackName(track.title));
          dispatch(setCurrentArtistName(artist));
        }}
      >
        <SingleMusicFourthPlayNumber>
          <span className={`number ${hovering ? "hidden" : ""}`}>
            {trackCounter}
          </span>
          <PlayCircleFilledWhiteIcon
            className={`play-icon ${hovering ? "" : "hidden"}`}
            style={{
              fontSize: "45px",
              color: "#20c997",
              cursor: "pointer",
            }}
          />
        </SingleMusicFourthPlayNumber>
        <SingleMusicMiddleInfoContainer>
          <SingleImageContainer>
            <SingleMusicMiddleFourthImage src={`${imageUrl}${trackUrl}`} />
          </SingleImageContainer>
          <SingleMusicMiddleFourthName>
            {track.title}
          </SingleMusicMiddleFourthName>
          <SingleMusicMiddleFourthLength>
            {track.duration}
          </SingleMusicMiddleFourthLength>
          <SingleMusicMiddleFourthIconContainer>
            <FavoriteIcon
              style={{
                fontSize: "35px",
                marginRight: "20px",
                color: "#fff",
                transition: "color 0.3s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.target.style.color = "red")}
              onMouseLeave={(e) => (e.target.style.color = "#fff")}
            />
            <MoreHorizIcon
              style={{
                fontSize: "35px",
                marginRight: "20px",
                color: "#fff",
                transition: "color 0.3s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.target.style.color = "red")}
              onMouseLeave={(e) => (e.target.style.color = "#fff")}
            />
          </SingleMusicMiddleFourthIconContainer>
        </SingleMusicMiddleInfoContainer>
      </SingleMusicFourthEachItem>
    </SingleMusicMiddleListContainer>
  );
};

export default SingleMusicMiddleList;
