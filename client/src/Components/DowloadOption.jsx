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
    color: black;
    padding: 10px 15px;
    border-radius: 10px;
  }
`;
const Description = styled.p`
  font-size: 22px;
`;
const DowloadOption = () => {
  return (
    <Container>
      <Wrapper>
        <ItemContainer>
          <WindowIcon style={{ fontSize: "70px", color: "#1775bb" }} />
          <Description>Dowload with window</Description>
        </ItemContainer>
        <ItemContainer>
          <AppleIcon style={{ fontSize: "70px", color: "gray" }} />
          <Description>Dowload with Mac</Description>
        </ItemContainer>
        <ItemContainer>
          <ComputerIcon style={{ fontSize: "70px", color: "blue" }} />
          <Description>Dowload with linux</Description>
        </ItemContainer>
      </Wrapper>
    </Container>
  );
};

export default DowloadOption;
