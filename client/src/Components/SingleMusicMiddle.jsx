import React, { useEffect } from "react";
import styled from "styled-components";
import UserNavBar from "./UserNavBar";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { GET_SINGLE_ALBUM } from "../Redux-toolkit/types/albumType";
import SingleMusicMiddleList from "./SingleMusicMiddleList";

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
  padding: 0px 30px;
`;

const SingleMusicMiddleSecondText = styled.h1`
  font-size: 60px;
  color: white;
  margin: 0px;
  font-family: "Arial", sans-serif;
`;
const SingleMusicMiddleSecondTitle = styled.p`
  margin: 0px;
  color: white;
  font-size: 24px;
  margin: 10px 30px;
  font-family: "Arial", sans-serif;
`;
const SingleMusicMiddleSecondGeners = styled.p`
  margin: 0px;
  color: white;
  margin: 10px 30px;
  font-size: 24px;
  text-transform: capitalize;
  font-family: "Arial", sans-serif;
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
  border: 2px solid #20c997;
  font-family: "Arial", sans-serif;
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
  font-family: "Arial", sans-serif;
`;

const SingleMusicMiddle = () => {
  console.log("single music middle");
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const imageUrl = PF + "images/";

  let trackCounter = 0;
  const dispatch = useDispatch();
  const params = useParams();
  const albumForEdit = params.id;

  useEffect(() => {
    dispatch({ type: GET_SINGLE_ALBUM, albumForEdit });
  }, [albumForEdit, dispatch]);

  const { title, artist, genre, albumImageUrl, trackImageUrl, tracks } =
    useSelector((state) => state.album.album);

  return (
    <SingleMusicMiddleContainer>
      <SingleMusicMiddleTopContainer>
        <SingleMusicMiddleFirst>
          <UserNavBar />
        </SingleMusicMiddleFirst>
        <SingleMusicMiddleSecond>
          <SingleMusicMiddleSecondImage src={`${imageUrl}${albumImageUrl}`} />
          <SingleMusicMiddleSecondTextContainer>
            <SingleMusicMiddleSecondText>{artist}</SingleMusicMiddleSecondText>
            <SingleMusicMiddleSecondTitle>{title}</SingleMusicMiddleSecondTitle>
            <SingleMusicMiddleSecondGeners>
              {genre}
            </SingleMusicMiddleSecondGeners>
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
        <SingleMusicMiddleFourth>
          <SingleMusicMiddleFourthTitle>
            Music List
          </SingleMusicMiddleFourthTitle>
          {tracks?.map((track) => {
            trackCounter++;
            return (
              <SingleMusicMiddleList
                track={track}
                trackUrl={trackImageUrl}
                key={track}
                trackCounter={trackCounter}
                artist={artist}
              />
            );
          })}
        </SingleMusicMiddleFourth>
      </SingleMusicMiddleBottomContainer>
    </SingleMusicMiddleContainer>
  );
};

export default SingleMusicMiddle;
