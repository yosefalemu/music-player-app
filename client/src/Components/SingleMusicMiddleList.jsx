import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import { useDispatch } from "react-redux";

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

const SingleMusicMiddleList = () => {
  const dispatch = useDispatch();
  const [hovering, setHovering] = useState(false);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <SingleMusicMiddleListContainer>
      <SingleMusicFourthEachItem
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <SingleMusicFourthPlayNumber>
          <span className={`number ${hovering ? "hidden" : ""}`}>1</span>
          <PlayCircleFilledWhiteIcon
            className={`play-icon ${hovering ? "" : "hidden"}`}
            style={{
              fontSize: "45px",
              marginRight: "15px",
              color: "#20c997",
              cursor: "pointer",
            }}
          />
        </SingleMusicFourthPlayNumber>
        <SingleMusicMiddleFourthImage src={`${PF}neway.jpg`} />
        <SingleMusicMiddleFourthName>Neway Debebe</SingleMusicMiddleFourthName>
        <SingleMusicMiddleFourthViews>
          456,345 views
        </SingleMusicMiddleFourthViews>
        <SingleMusicMiddleFourthLength>4:34</SingleMusicMiddleFourthLength>
      </SingleMusicFourthEachItem>
    </SingleMusicMiddleListContainer>
  );
};

export default SingleMusicMiddleList;
