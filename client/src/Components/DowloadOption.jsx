import React from "react";
import styled from "styled-components";
import WindowIcon from "@mui/icons-material/Window";
import AppleIcon from "@mui/icons-material/Apple";
import ComputerIcon from "@mui/icons-material/Computer";

const Container = styled.div`
  width: 100%;
  height: 400px;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 80%;
`;
const Title = styled.h1`
  margin-bottom: 100px;
  text-align: center;
  position: relative;
  font-family: "Arial", sans-serif;
  color: #555555;
`;
const ItemMainContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  color: #ffffff;
  &:hover {
    background-color: white;
    color: #555555;
    padding: 10px 15px;
    border-radius: 10px;
  }
`;
const Underline = styled.div`
  width: 150px;
  height: 5px;
  background-color: #20c997;
  position: absolute;
  bottom: -20px;
  left: 50%;
  border-radius: 15px;
  transform: translateX(-50%);
`;
const Description = styled.p`
  font-size: 22px;
  font-family: "Arial", sans-serif;
`;
const DowloadOption = () => {
  return (
    <Container>
      <Wrapper>
        <Title>
          Dowload the app and get the service offline
          <Underline />
        </Title>
        <ItemMainContainer>
          <ItemContainer>
            <WindowIcon style={{ fontSize: "70px", color: "#0078D4" }} />
            <Description>Dowload with window</Description>
          </ItemContainer>
          <ItemContainer>
            <AppleIcon style={{ fontSize: "70px", color: "#8E8E93" }} />
            <Description>Dowload with Mac</Description>
          </ItemContainer>
          <ItemContainer>
            <ComputerIcon style={{ fontSize: "70px", color: "#54C22C" }} />
            <Description>Dowload with linux</Description>
          </ItemContainer>
        </ItemMainContainer>
      </Wrapper>
    </Container>
  );
};

export default DowloadOption;
