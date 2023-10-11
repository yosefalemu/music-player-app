import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const MainDisplayTopRightContainer = styled.div`
  flex: 1;
  background-color: yellow;
  width: 100%;
  background-color: #222222;
  height: 85vh;
  margin: 8px 7px;
  border-radius: 10px;
  padding: 15px 15px;
`;
const MainDisplayTopRightTop = styled.div``;
const MainDisplayTopRightBottom = styled.div``;
const TopRightFirst = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TopRightLink = styled(Link)`
  font-size: 24px;
  color: white;
`;
const TopRightSecond = styled.div`
  text-align: center;
  margin: 15px 0px;
`;
const TopRightSecondImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 15px;
`;

const TopRightThird = styled.div`
  background-color: #555555;
  display: flex;
  align-items: center;
  padding: 5px 15px;
  height: fit-content;
  padding: 30px 20px;
  border-radius: 10px;
  margin-bottom: 15px;
`;
const TopRightThirdLeft = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  margin-right: 50px;
`;
const TopRightThirdLeftName = styled.h1`
  color: white;
  margin: 0px;
`;
const TopRightThirdLeftMusic = styled.h4`
  color: white;
  margin: 0px;
`;
const TopRightThirdRight = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const TopRightFourth = styled.div`
  background-color: #555555;
  display: flex;
  flex-direction: column;
  padding: 5px 15px;
  height: 17vh;
  border-radius: 10px;
  margin-bottom: 15px;
`;
const TopRightFourthHeader = styled.h3`
  color: white;
  margin: 0px;
  height: 30%;
`;
const TopRightFourthItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 70%;
`;
const TopRightFourthItemImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 20px;
`;
const TopRightFourthDescription = styled.div``;
const TopRightFourthName = styled.h1`
  margin: 0px;
  color: white;
`;
const TopRightFourthTitle = styled.p`
  margin: 0px;
  color: white;
`;

const MainDisplayTopRight = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  console.log("main display top right");
  return (
    <MainDisplayTopRightContainer>
      <MainDisplayTopRightTop>
        <TopRightFirst>
          <TopRightLink>Neway Debebe</TopRightLink>
          <CloseIcon style={{ color: "white", fontSize: "28px" }} />
        </TopRightFirst>
        <TopRightSecond>
          <TopRightSecondImage src={`${PF}neway.jpg`} />
        </TopRightSecond>
        <TopRightThird>
          <TopRightThirdLeft>
            <TopRightThirdLeftName>Neway Debebe</TopRightThirdLeftName>
            <TopRightThirdLeftMusic>Ye fkr gedam</TopRightThirdLeftMusic>
          </TopRightThirdLeft>
          <TopRightThirdRight>
            <FavoriteBorderIcon style={{ color: "white", fontSize: "28px" }} />
            <MoreHorizIcon style={{ color: "white", fontSize: "28px" }} />
          </TopRightThirdRight>
        </TopRightThird>
        <TopRightFourth>
          <TopRightFourthHeader>Next music</TopRightFourthHeader>
          <TopRightFourthItem>
            <TopRightFourthItemImage src={`${PF}rophnan.jpeg`} />
            <TopRightFourthDescription>
              <TopRightFourthName>Rophnan</TopRightFourthName>
              <TopRightFourthTitle>Sekela</TopRightFourthTitle>
            </TopRightFourthDescription>
          </TopRightFourthItem>
        </TopRightFourth>
      </MainDisplayTopRightTop>
    </MainDisplayTopRightContainer>
  );
};

export default MainDisplayTopRight;
