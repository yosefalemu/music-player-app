import React from "react";
import styled, { keyframes } from "styled-components";

const PF = process.env.REACT_APP_PUBLIC_FOLDER;
const backgroundImageUrl = `${PF}background1.jpg`;

const Container = styled.div`
  background-image: url(${backgroundImageUrl});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: calc(100vh - 66px);
  position: relative;
`;

const BackgroundOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100vh - 66px);
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding-top: 100px;
`;

const TextContainer = styled.div`
  height: 400px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const fadeIn = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const WellCome = styled.p`
  font-size: 54px;
  color: white;
  font-weight: 800;
  margin: 0;
`;

const MovableText = styled.p`
  font-size: 54px;
  color: white;
  font-weight: 800;
  margin: 0;
  display: inline;
  & span {
    display: inline-block;
    animation: ${fadeIn} 3s linear infinite;
    animation-fill-mode: forwards;
  }
  & span:nth-child(1) {
    animation-delay: 0s;
  }
  & span:nth-child(2) {
    animation-delay: 0.2s;
  }
  & span:nth-child(3) {
    animation-delay: 0.4s;
  }
  & span:nth-child(4) {
    animation-delay: 0.6s;
  }
  & span:nth-child(5) {
    animation-delay: 0.8s;
  }
  & span:nth-child(6) {
    animation-delay: 1s;
  }
  & span:nth-child(7) {
    animation-delay: 1.2s;
  }
  & span:nth-child(8) {
    animation-delay: 1.4s;
  }
  & span:nth-child(9) {
    animation-delay: 1.6s;
  }
  & span:nth-child(10) {
    animation-delay: 1.8s;
  }
  & span:nth-child(11) {
    animation-delay: 2s;
  }
  & span:nth-child(12) {
    animation-delay: 2.2s;
  }
  & span:nth-child(13) {
    animation-delay: 2.4s;
  }
  & span:nth-child(14) {
    animation-delay: 2.6s;
  }
`;

const Landing = () => {
  return (
    <Container>
      <BackgroundOverlay />
      <Wrapper>
        <TextContainer>
          <WellCome>Welcome</WellCome>
          <MovableText>
            <span>T</span>
            <span>o</span>
            <span> </span>
            <span>A</span>
            <span>d</span>
            <span>d</span>
            <span>i</span>
            <span>s</span>
            <span> </span>
            <span>M</span>
            <span>u</span>
            <span>s</span>
            <span>i</span>
            <span>c</span>
          </MovableText>
        </TextContainer>
      </Wrapper>
    </Container>
  );
};

export default Landing;
