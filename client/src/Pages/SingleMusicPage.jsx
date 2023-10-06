import React from "react";
import styled from "styled-components";
import MainDisplayFooter from "../Components/MainDisplayFooter";
import MainDisplayTopLeft from "../Components/MainDisplayTopLeft";
import SingleMusicMiddle from "../Components/SingleMusicMiddle";
import MainDisplayTopRight from "../Components/MainDisplayTopRight";

const MainDisplayContainer = styled.div`
  z-index: 1;
`;
const MainDisplayWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #111111;
  position: relative;
  z-index: 2;
`;
const MainDisplayTop = styled.div`
  display: flex;
`;
const MainDisplayBottom = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
`;
const SingleMusicPage = () => {
  return (
    <MainDisplayContainer>
      <MainDisplayWrapper>
        <MainDisplayTop>
          <MainDisplayTopLeft />
          <SingleMusicMiddle />
          <MainDisplayTopRight />
        </MainDisplayTop>
        <MainDisplayBottom>
          <MainDisplayFooter />
        </MainDisplayBottom>
      </MainDisplayWrapper>
    </MainDisplayContainer>
  );
};

export default SingleMusicPage;
