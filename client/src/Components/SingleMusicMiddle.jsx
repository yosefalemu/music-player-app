import React from "react";
import styled from "styled-components";
import UserNavBar from "./UserNavBar";

const SingleMusicMiddleContainer = styled.div`
  flex: 2;
  width: 100%;
  background-color: #222222;
  height: 85vh;
  margin: 8px 7px;
  border-radius: 10px;
  position: relative;
`;
const SingleMusicMiddleFirst = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  background-color: #333333;
`;

const SingleMusicMiddle = () => {
  return (
    <SingleMusicMiddleContainer>
      <SingleMusicMiddleFirst>
        <UserNavBar />
      </SingleMusicMiddleFirst>
    </SingleMusicMiddleContainer>
  );
};

export default SingleMusicMiddle;
