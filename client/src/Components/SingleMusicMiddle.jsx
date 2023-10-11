import React, { useEffect, useState } from "react";
import styled from "styled-components";
import UserNavBar from "./UserNavBar";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";

const SingleMusicMiddleContainer = styled.div`
  flex: 4;
  width: 100%;
  border-radius: 10px;
  height: 85vh;
  margin: 8px 7px;
  position: relative;
`;
const SingleMusicMiddleTopContainer = styled.div`
  background: linear-gradient(to bottom, #ff0000, #660000 38%, #111111);
  border-radius: 10px 10px 0px 0px;
  height: 45vh;
`;
// first element styling start here
const SingleMusicMiddleFirst = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
`;
// second element styling begin
const SingleMusicMiddleSecond = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 15px;
`;
const SingleMusicMiddleSecondImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 30px;
`;
const SingleMusicMiddleSecondTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SingleMusicMiddleSecondText = styled.h1`
  font-size: 60px;
  color: white;
  margin: 0px;
`;
const SingleMusicMiddleSecondViewers = styled.p`
  color: white;
  font-size: 24px;
`;
// styling of bottom container begin
const SingleMusicMiddleBottomContainer = styled.div`
  background: linear-gradient(to bottom, #660000, #222222);
  height: 45vh;
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: gray #f1f1f1;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }
  &::-webkit-scrollbar-thumb {
    background-color: gray;
    border-radius: 5px;
  }
`;
//styling of third element begin
const SingleMusicMiddleThird = styled.div`
  display: flex;
  padding: 10px 25px;
  align-items: center;
`;
const SingleMusicMiddleFollowButton = styled.button`
  width: fit-content;
  margin-left: 30px;
  padding: 10px 25px;
  color: white;
  font-weight: 700;
  font-size: 18px;
  border-radius: 30px;
  cursor: pointer;
  background-color: transparent;
  border: 0.3px solid #20c997;
  &:hover {
    font-size: 24px;
  }
`;
//styling of the fourth element begin here
const SingleMusicMiddleFourth = styled.div`
  padding: 10px 15px;
  margin-bottom: 55px;
`;
const SingleMusicMiddleFourthTitle = styled.h1`
  color: white;
`;
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
const SingleMusicMiddleFourthImage = styled.img`
  width: 55px;
  height: 55px;
  object-fit: cover;
  margin-right: 15px;
`;
const SingleMusicMiddleFourthName = styled.h3`
  color: white;
  font-size: 24px;
  margin-right: 200px;
`;
const SingleMusicMiddleFourthViews = styled.h3`
  color: white;
  margin-right: 70px;
`;
const SingleMusicMiddleFourthLength = styled.h3`
  color: white;
`;
const SingleMusicFourthPlayNumber = styled.div`
  display: flex;
  align-items: center;
  font-size: 45px;
  margin-right: 15px;
  color: #20c997;
  cursor: pointer;
  transition: font-size 0.2s ease-in-out;

  .play-icon {
    display: none;
  }

  &:hover {
    font-size: 55px;

    .number {
      display: none;
    }

    .play-icon {
      display: block;
    }
  }
`;

const SingleMusicMiddle = () => {
  console.log("single music middle");

  return (
    <SingleMusicMiddleContainer>
      <SingleMusicMiddleTopContainer>
        <SingleMusicMiddleFirst>
          <UserNavBar />
        </SingleMusicMiddleFirst>
        <SingleMusicMiddleSecond>
          <SingleMusicMiddleSecondImage />
          <SingleMusicMiddleSecondTextContainer>
            <SingleMusicMiddleSecondText>
              Artist Name
            </SingleMusicMiddleSecondText>
            <SingleMusicMiddleSecondViewers>
              Album Title
            </SingleMusicMiddleSecondViewers>
          </SingleMusicMiddleSecondTextContainer>
        </SingleMusicMiddleSecond>
      </SingleMusicMiddleTopContainer>
      <SingleMusicMiddleBottomContainer>
        <SingleMusicMiddleThird>
          <PauseCircleIcon
            style={{
              fontSize: "65px",
              margin: "0px",
              color: "#20c997",
              cursor: "pointer",
              transition: "font-size 0.2s ease-in-out",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.fontSize = "75px";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.fontSize = "65px";
            }}
          />
          <SingleMusicMiddleFollowButton>Follow</SingleMusicMiddleFollowButton>
        </SingleMusicMiddleThird>
        {/* {Array.isArray(albumTracks) ? (
          <SingleMusicMiddleFourth>
            <SingleMusicMiddleFourthTitle>
              Music List
            </SingleMusicMiddleFourthTitle>
            {albumTracks.map((track) => (
              <SingleMusicMiddleList track={track} key={track} />
            ))}
          </SingleMusicMiddleFourth>
        ) : (
          <div>Album Tracks is a string, not an array.</div>
        )} */}
      </SingleMusicMiddleBottomContainer>
    </SingleMusicMiddleContainer>
  );
};

export default SingleMusicMiddle;
