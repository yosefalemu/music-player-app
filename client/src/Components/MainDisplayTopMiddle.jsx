import React, { useState, useEffect } from "react";
import styled from "styled-components";
import UserNavBar from "./UserNavBar";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import { Link } from "react-router-dom";
import AlbumComponent from "./AlbumComponent";

const MainDisplayTopMiddleContainer = styled.div`
  flex: 4;
  width: 100%;
  background-color: #222222;
  height: 85vh;
  margin: 8px 7px;
  border-radius: 10px;
  position: relative;
`;
const MainDisplatTopMiddleFirst = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  background-color: #333333;
`;
const MainDisplatTopMiddleAllComponentContainer = styled.div`
  height: 75vh;
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

const MainDisplayTopMiddleSecond = styled.div`
  padding: 0px 15px;
  margin-bottom: 20px;
`;
const MainDisplaySecondMainText = styled.h1`
  color: white;
`;
const MainDisplayTopMiddleMainInput = styled.input`
  width: 90%;
  height: 30px;
  font-size: 24px;
  padding: 5px 35px;
  border: none;
  border-radius: 10px;
  color: #555555;
  &:focus {
    outline: none;
  }
`;
//Third Component style start here
const MainDisplayTopMiddleThird = styled.div`
  margin: 10px 0px;
`;
const MainDisplayTopMiddleThirdTop = styled.div`
  margin-top: 30px;
  padding: 0px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
`;
const MainDisplayTopMiddleThirdTopText = styled.h1`
  color: white;
`;
const MainDisplayTopMiddleThirdTopLink = styled(Link)`
  text-decoration: none;
  color: #666666;
  &:hover {
    text-decoration: underline;
    color: white;
  }
`;
const MainDisplayTopMiddleThirdBottom = styled.div`
  padding: 0px 15px;
  display: flex;
  flex-wrap: wrap;
`;

const MainDisplayTopMiddle = () => {
  console.log("main display top middle");

  return (
    <MainDisplayTopMiddleContainer>
      <MainDisplatTopMiddleFirst>
        <UserNavBar />
      </MainDisplatTopMiddleFirst>
      <MainDisplatTopMiddleAllComponentContainer>
        {/* second component start here */}
        <MainDisplayTopMiddleSecond>
          <MainDisplaySecondMainText>Good afternoon</MainDisplaySecondMainText>
          <MainDisplayTopMiddleMainInput
            placeholder="Search for albums"
            // onChange={(e) => setSearch(e.target.value)}
          />
        </MainDisplayTopMiddleSecond>

        {/* third component start here */}
        <MainDisplayTopMiddleThird>
          <MainDisplayTopMiddleThirdTop>
            <MainDisplayTopMiddleThirdTopText>
              Popular albums
            </MainDisplayTopMiddleThirdTopText>
            <MainDisplayTopMiddleThirdTopLink>
              Show more
            </MainDisplayTopMiddleThirdTopLink>
          </MainDisplayTopMiddleThirdTop>
          <MainDisplayTopMiddleThirdBottom>
            {/* {albums?.map((album) => (
              <AlbumComponent key={album._id} album={album} />
            ))} */}
          </MainDisplayTopMiddleThirdBottom>
        </MainDisplayTopMiddleThird>
        {/* forth component start here */}

        {/* fifth component start here */}
      </MainDisplatTopMiddleAllComponentContainer>
    </MainDisplayTopMiddleContainer>
  );
};

export default MainDisplayTopMiddle;
