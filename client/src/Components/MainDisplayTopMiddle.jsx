import React from "react";
import styled from "styled-components";
import UserNavBar from "./UserNavBar";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
// import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import { Link } from "react-router-dom";

const MainDisplayTopMiddleContainer = styled.div`
  flex: 2;
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
const MainDisplaySecondItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0px auto;
  width: 100%;
`;
const MainDisplaySecondEachItem = styled.div`
  height: 120px;
  width: 50%;
  position: relative;
`;
const MainDisplaySecondEachItemWrapper = styled.div`
  margin: 10px;
  height: 100px;
  background-color: #333333;
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: #444444;
  }
  .icon {
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 0.2s ease-in-out, transform 0.3s ease-in-out;
  }
  &:hover .icon {
    opacity: 1;
    transform: translateY(0);
  }
`;
const MainDisplaySecondImage = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 10px 0px 0px 10px;
`;
const MainDisplaySecondText = styled.h3`
  color: white;
  margin: 0px;
`;
const MainDisplayTopSecondIcon = styled.div``;

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

const MainDisplayThirdBottomEachItem = styled.div`
  width: 30.6%;
  display: flex;
  flex-direction: column;
  background-color: #333333;
  margin: 10px;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  .icon {
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 0.2s ease-in-out, transform 0.3s ease-in-out;
  }
  &:hover {
    background-color: #444444;
  }
  &:hover .icon {
    opacity: 1;
    transform: translateY(0);
  }
`;
const MainDisplayThirdBottomImage = styled.img`
  margin-top: 30px;
  width: 170px;
  height: 170px;
  object-fit: cover;
  border-radius: 10px;
`;
const MainDisplayThirdBottomTextContainer = styled.div``;
const MainDisplayThirdBottomAlbumName = styled.h1`
  color: white;
`;
const MainDisplayThirdBottomArtistName = styled.p`
  color: whitesmoke;
`;
const MainDisplayThirdBottomPlayIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 10%;
`;

const MainDisplayTopMiddle = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <MainDisplayTopMiddleContainer>
      <MainDisplatTopMiddleFirst>
        <UserNavBar />
      </MainDisplatTopMiddleFirst>
      <MainDisplatTopMiddleAllComponentContainer>
        {/* second component start here */}
        <MainDisplayTopMiddleSecond>
          <MainDisplaySecondMainText>Good afternoon</MainDisplaySecondMainText>
          <MainDisplaySecondItemContainer>
            <MainDisplaySecondEachItem>
              <MainDisplaySecondEachItemWrapper>
                <MainDisplaySecondImage src={`${PF}tilahun.jpg`} />
                <MainDisplaySecondText>Tilahun Gesese</MainDisplaySecondText>
                <MainDisplayTopSecondIcon>
                  <div className="icon">
                    <PlayCircleIcon
                      style={{
                        fontSize: "65px",
                        margin: "0px",
                        color: "#20c997",
                      }}
                    />
                  </div>
                </MainDisplayTopSecondIcon>
              </MainDisplaySecondEachItemWrapper>
            </MainDisplaySecondEachItem>
            <MainDisplaySecondEachItem>
              <MainDisplaySecondEachItemWrapper>
                <MainDisplaySecondImage src={`${PF}tilahun.jpg`} />
                <MainDisplaySecondText>Tilahun Gesese</MainDisplaySecondText>
                <MainDisplayTopSecondIcon>
                  <div className="icon">
                    <PlayCircleIcon
                      style={{
                        fontSize: "65px",
                        margin: "0px",
                        color: "#20c997",
                      }}
                    />
                  </div>
                </MainDisplayTopSecondIcon>
              </MainDisplaySecondEachItemWrapper>
            </MainDisplaySecondEachItem>
            <MainDisplaySecondEachItem>
              <MainDisplaySecondEachItemWrapper>
                <MainDisplaySecondImage src={`${PF}tilahun.jpg`} />
                <MainDisplaySecondText>Tilahun Gesese</MainDisplaySecondText>
                <MainDisplayTopSecondIcon>
                  <div className="icon">
                    <PlayCircleIcon
                      style={{
                        fontSize: "65px",
                        margin: "0px",
                        color: "#20c997",
                      }}
                    />
                  </div>
                </MainDisplayTopSecondIcon>
              </MainDisplaySecondEachItemWrapper>
            </MainDisplaySecondEachItem>
            <MainDisplaySecondEachItem>
              <MainDisplaySecondEachItemWrapper>
                <MainDisplaySecondImage src={`${PF}tilahun.jpg`} />
                <MainDisplaySecondText>Tilahun Gesese</MainDisplaySecondText>
                <MainDisplayTopSecondIcon>
                  <div className="icon">
                    <PlayCircleIcon
                      style={{
                        fontSize: "65px",
                        margin: "0px",
                        color: "#20c997",
                      }}
                    />
                  </div>
                </MainDisplayTopSecondIcon>
              </MainDisplaySecondEachItemWrapper>
            </MainDisplaySecondEachItem>
          </MainDisplaySecondItemContainer>
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
            <MainDisplayThirdBottomEachItem>
              <MainDisplayThirdBottomImage src={`${PF}dawittsige.jpg`} />
              <MainDisplayThirdBottomTextContainer>
                <MainDisplayThirdBottomAlbumName>
                  Zene Zema
                </MainDisplayThirdBottomAlbumName>
                <MainDisplayThirdBottomArtistName>
                  Dawit Tsige
                </MainDisplayThirdBottomArtistName>
              </MainDisplayThirdBottomTextContainer>
              <MainDisplayThirdBottomPlayIcon>
                <div className="icon">
                  <PlayCircleIcon
                    style={{
                      fontSize: "65px",
                      margin: "0px",
                      color: "#20c997",
                    }}
                  />
                </div>
              </MainDisplayThirdBottomPlayIcon>
            </MainDisplayThirdBottomEachItem>
            <MainDisplayThirdBottomEachItem>
              <MainDisplayThirdBottomImage src={`${PF}dawittsige.jpg`} />
              <MainDisplayThirdBottomTextContainer>
                <MainDisplayThirdBottomAlbumName>
                  Zene Zema
                </MainDisplayThirdBottomAlbumName>
                <MainDisplayThirdBottomArtistName>
                  Dawit Tsige
                </MainDisplayThirdBottomArtistName>
              </MainDisplayThirdBottomTextContainer>
              <MainDisplayThirdBottomPlayIcon>
                <div className="icon">
                  <PlayCircleIcon
                    style={{
                      fontSize: "65px",
                      margin: "0px",
                      color: "#20c997",
                    }}
                  />
                </div>
              </MainDisplayThirdBottomPlayIcon>
            </MainDisplayThirdBottomEachItem>
            <MainDisplayThirdBottomEachItem>
              <MainDisplayThirdBottomImage src={`${PF}dawittsige.jpg`} />
              <MainDisplayThirdBottomTextContainer>
                <MainDisplayThirdBottomAlbumName>
                  Zene Zema
                </MainDisplayThirdBottomAlbumName>
                <MainDisplayThirdBottomArtistName>
                  Dawit Tsige
                </MainDisplayThirdBottomArtistName>
              </MainDisplayThirdBottomTextContainer>
              <MainDisplayThirdBottomPlayIcon>
                <div className="icon">
                  <PlayCircleIcon
                    style={{
                      fontSize: "65px",
                      margin: "0px",
                      color: "#20c997",
                    }}
                  />
                </div>
              </MainDisplayThirdBottomPlayIcon>
            </MainDisplayThirdBottomEachItem>
            <MainDisplayThirdBottomEachItem>
              <MainDisplayThirdBottomImage src={`${PF}dawittsige.jpg`} />
              <MainDisplayThirdBottomTextContainer>
                <MainDisplayThirdBottomAlbumName>
                  Zene Zema
                </MainDisplayThirdBottomAlbumName>
                <MainDisplayThirdBottomArtistName>
                  Dawit Tsige
                </MainDisplayThirdBottomArtistName>
              </MainDisplayThirdBottomTextContainer>
              <MainDisplayThirdBottomPlayIcon>
                <div className="icon">
                  <PlayCircleIcon
                    style={{
                      fontSize: "65px",
                      margin: "0px",
                      color: "#20c997",
                    }}
                  />
                </div>
              </MainDisplayThirdBottomPlayIcon>
            </MainDisplayThirdBottomEachItem>
            <MainDisplayThirdBottomEachItem>
              <MainDisplayThirdBottomImage src={`${PF}dawittsige.jpg`} />
              <MainDisplayThirdBottomTextContainer>
                <MainDisplayThirdBottomAlbumName>
                  Zene Zema
                </MainDisplayThirdBottomAlbumName>
                <MainDisplayThirdBottomArtistName>
                  Dawit Tsige
                </MainDisplayThirdBottomArtistName>
              </MainDisplayThirdBottomTextContainer>
              <MainDisplayThirdBottomPlayIcon>
                <div className="icon">
                  <PlayCircleIcon
                    style={{
                      fontSize: "65px",
                      margin: "0px",
                      color: "#20c997",
                    }}
                  />
                </div>
              </MainDisplayThirdBottomPlayIcon>
            </MainDisplayThirdBottomEachItem>
            <MainDisplayThirdBottomEachItem>
              <MainDisplayThirdBottomImage src={`${PF}dawittsige.jpg`} />
              <MainDisplayThirdBottomTextContainer>
                <MainDisplayThirdBottomAlbumName>
                  Zene Zema
                </MainDisplayThirdBottomAlbumName>
                <MainDisplayThirdBottomArtistName>
                  Dawit Tsige
                </MainDisplayThirdBottomArtistName>
              </MainDisplayThirdBottomTextContainer>
              <MainDisplayThirdBottomPlayIcon>
                <div className="icon">
                  <PlayCircleIcon
                    style={{
                      fontSize: "65px",
                      margin: "0px",
                      color: "#20c997",
                    }}
                  />
                </div>
              </MainDisplayThirdBottomPlayIcon>
            </MainDisplayThirdBottomEachItem>
          </MainDisplayTopMiddleThirdBottom>
        </MainDisplayTopMiddleThird>
        {/* forth component start here */}

        <MainDisplayTopMiddleThird>
          <MainDisplayTopMiddleThirdTop>
            <MainDisplayTopMiddleThirdTopText>
              Amharic fresh new music
            </MainDisplayTopMiddleThirdTopText>
            <MainDisplayTopMiddleThirdTopLink>
              Show more
            </MainDisplayTopMiddleThirdTopLink>
          </MainDisplayTopMiddleThirdTop>
          <MainDisplayTopMiddleThirdBottom>
            <MainDisplayThirdBottomEachItem>
              <MainDisplayThirdBottomImage src={`${PF}dawittsige.jpg`} />
              <MainDisplayThirdBottomTextContainer>
                <MainDisplayThirdBottomAlbumName>
                  Zene Zema
                </MainDisplayThirdBottomAlbumName>
                <MainDisplayThirdBottomArtistName>
                  Dawit Tsige
                </MainDisplayThirdBottomArtistName>
              </MainDisplayThirdBottomTextContainer>
              <MainDisplayThirdBottomPlayIcon>
                <div className="icon">
                  <PlayCircleIcon
                    style={{
                      fontSize: "65px",
                      margin: "0px",
                      color: "#20c997",
                    }}
                  />
                </div>
              </MainDisplayThirdBottomPlayIcon>
            </MainDisplayThirdBottomEachItem>
            <MainDisplayThirdBottomEachItem>
              <MainDisplayThirdBottomImage src={`${PF}dawittsige.jpg`} />
              <MainDisplayThirdBottomTextContainer>
                <MainDisplayThirdBottomAlbumName>
                  Zene Zema
                </MainDisplayThirdBottomAlbumName>
                <MainDisplayThirdBottomArtistName>
                  Dawit Tsige
                </MainDisplayThirdBottomArtistName>
              </MainDisplayThirdBottomTextContainer>
              <MainDisplayThirdBottomPlayIcon>
                <div className="icon">
                  <PlayCircleIcon
                    style={{
                      fontSize: "65px",
                      margin: "0px",
                      color: "#20c997",
                    }}
                  />
                </div>
              </MainDisplayThirdBottomPlayIcon>
            </MainDisplayThirdBottomEachItem>
            <MainDisplayThirdBottomEachItem>
              <MainDisplayThirdBottomImage src={`${PF}dawittsige.jpg`} />
              <MainDisplayThirdBottomTextContainer>
                <MainDisplayThirdBottomAlbumName>
                  Zene Zema
                </MainDisplayThirdBottomAlbumName>
                <MainDisplayThirdBottomArtistName>
                  Dawit Tsige
                </MainDisplayThirdBottomArtistName>
              </MainDisplayThirdBottomTextContainer>
              <MainDisplayThirdBottomPlayIcon>
                <div className="icon">
                  <PlayCircleIcon
                    style={{
                      fontSize: "65px",
                      margin: "0px",
                      color: "#20c997",
                    }}
                  />
                </div>
              </MainDisplayThirdBottomPlayIcon>
            </MainDisplayThirdBottomEachItem>
            <MainDisplayThirdBottomEachItem>
              <MainDisplayThirdBottomImage src={`${PF}dawittsige.jpg`} />
              <MainDisplayThirdBottomTextContainer>
                <MainDisplayThirdBottomAlbumName>
                  Zene Zema
                </MainDisplayThirdBottomAlbumName>
                <MainDisplayThirdBottomArtistName>
                  Dawit Tsige
                </MainDisplayThirdBottomArtistName>
              </MainDisplayThirdBottomTextContainer>
              <MainDisplayThirdBottomPlayIcon>
                <div className="icon">
                  <PlayCircleIcon
                    style={{
                      fontSize: "65px",
                      margin: "0px",
                      color: "#20c997",
                    }}
                  />
                </div>
              </MainDisplayThirdBottomPlayIcon>
            </MainDisplayThirdBottomEachItem>
            <MainDisplayThirdBottomEachItem>
              <MainDisplayThirdBottomImage src={`${PF}dawittsige.jpg`} />
              <MainDisplayThirdBottomTextContainer>
                <MainDisplayThirdBottomAlbumName>
                  Zene Zema
                </MainDisplayThirdBottomAlbumName>
                <MainDisplayThirdBottomArtistName>
                  Dawit Tsige
                </MainDisplayThirdBottomArtistName>
              </MainDisplayThirdBottomTextContainer>
              <MainDisplayThirdBottomPlayIcon>
                <div className="icon">
                  <PlayCircleIcon
                    style={{
                      fontSize: "65px",
                      margin: "0px",
                      color: "#20c997",
                    }}
                  />
                </div>
              </MainDisplayThirdBottomPlayIcon>
            </MainDisplayThirdBottomEachItem>
            <MainDisplayThirdBottomEachItem>
              <MainDisplayThirdBottomImage src={`${PF}dawittsige.jpg`} />
              <MainDisplayThirdBottomTextContainer>
                <MainDisplayThirdBottomAlbumName>
                  Zene Zema
                </MainDisplayThirdBottomAlbumName>
                <MainDisplayThirdBottomArtistName>
                  Dawit Tsige
                </MainDisplayThirdBottomArtistName>
              </MainDisplayThirdBottomTextContainer>
              <MainDisplayThirdBottomPlayIcon>
                <div className="icon">
                  <PlayCircleIcon
                    style={{
                      fontSize: "65px",
                      margin: "0px",
                      color: "#20c997",
                    }}
                  />
                </div>
              </MainDisplayThirdBottomPlayIcon>
            </MainDisplayThirdBottomEachItem>
          </MainDisplayTopMiddleThirdBottom>
        </MainDisplayTopMiddleThird>

        {/* fifth component start here */}
        <MainDisplayTopMiddleThird>
          <MainDisplayTopMiddleThirdTop>
            <MainDisplayTopMiddleThirdTopText>
              English fresh new music
            </MainDisplayTopMiddleThirdTopText>
            <MainDisplayTopMiddleThirdTopLink>
              Show more
            </MainDisplayTopMiddleThirdTopLink>
          </MainDisplayTopMiddleThirdTop>
          <MainDisplayTopMiddleThirdBottom>
            <MainDisplayThirdBottomEachItem>
              <MainDisplayThirdBottomImage src={`${PF}dawittsige.jpg`} />
              <MainDisplayThirdBottomTextContainer>
                <MainDisplayThirdBottomAlbumName>
                  Zene Zema
                </MainDisplayThirdBottomAlbumName>
                <MainDisplayThirdBottomArtistName>
                  Dawit Tsige
                </MainDisplayThirdBottomArtistName>
              </MainDisplayThirdBottomTextContainer>
              <MainDisplayThirdBottomPlayIcon>
                <div className="icon">
                  <PlayCircleIcon
                    style={{
                      fontSize: "65px",
                      margin: "0px",
                      color: "#20c997",
                    }}
                  />
                </div>
              </MainDisplayThirdBottomPlayIcon>
            </MainDisplayThirdBottomEachItem>
            <MainDisplayThirdBottomEachItem>
              <MainDisplayThirdBottomImage src={`${PF}dawittsige.jpg`} />
              <MainDisplayThirdBottomTextContainer>
                <MainDisplayThirdBottomAlbumName>
                  Zene Zema
                </MainDisplayThirdBottomAlbumName>
                <MainDisplayThirdBottomArtistName>
                  Dawit Tsige
                </MainDisplayThirdBottomArtistName>
              </MainDisplayThirdBottomTextContainer>
              <MainDisplayThirdBottomPlayIcon>
                <div className="icon">
                  <PlayCircleIcon
                    style={{
                      fontSize: "65px",
                      margin: "0px",
                      color: "#20c997",
                    }}
                  />
                </div>
              </MainDisplayThirdBottomPlayIcon>
            </MainDisplayThirdBottomEachItem>
            <MainDisplayThirdBottomEachItem>
              <MainDisplayThirdBottomImage src={`${PF}dawittsige.jpg`} />
              <MainDisplayThirdBottomTextContainer>
                <MainDisplayThirdBottomAlbumName>
                  Zene Zema
                </MainDisplayThirdBottomAlbumName>
                <MainDisplayThirdBottomArtistName>
                  Dawit Tsige
                </MainDisplayThirdBottomArtistName>
              </MainDisplayThirdBottomTextContainer>
              <MainDisplayThirdBottomPlayIcon>
                <div className="icon">
                  <PlayCircleIcon
                    style={{
                      fontSize: "65px",
                      margin: "0px",
                      color: "#20c997",
                    }}
                  />
                </div>
              </MainDisplayThirdBottomPlayIcon>
            </MainDisplayThirdBottomEachItem>
            <MainDisplayThirdBottomEachItem>
              <MainDisplayThirdBottomImage src={`${PF}dawittsige.jpg`} />
              <MainDisplayThirdBottomTextContainer>
                <MainDisplayThirdBottomAlbumName>
                  Zene Zema
                </MainDisplayThirdBottomAlbumName>
                <MainDisplayThirdBottomArtistName>
                  Dawit Tsige
                </MainDisplayThirdBottomArtistName>
              </MainDisplayThirdBottomTextContainer>
              <MainDisplayThirdBottomPlayIcon>
                <div className="icon">
                  <PlayCircleIcon
                    style={{
                      fontSize: "65px",
                      margin: "0px",
                      color: "#20c997",
                    }}
                  />
                </div>
              </MainDisplayThirdBottomPlayIcon>
            </MainDisplayThirdBottomEachItem>
            <MainDisplayThirdBottomEachItem>
              <MainDisplayThirdBottomImage src={`${PF}dawittsige.jpg`} />
              <MainDisplayThirdBottomTextContainer>
                <MainDisplayThirdBottomAlbumName>
                  Zene Zema
                </MainDisplayThirdBottomAlbumName>
                <MainDisplayThirdBottomArtistName>
                  Dawit Tsige
                </MainDisplayThirdBottomArtistName>
              </MainDisplayThirdBottomTextContainer>
              <MainDisplayThirdBottomPlayIcon>
                <div className="icon">
                  <PlayCircleIcon
                    style={{
                      fontSize: "65px",
                      margin: "0px",
                      color: "#20c997",
                    }}
                  />
                </div>
              </MainDisplayThirdBottomPlayIcon>
            </MainDisplayThirdBottomEachItem>
            <MainDisplayThirdBottomEachItem>
              <MainDisplayThirdBottomImage src={`${PF}dawittsige.jpg`} />
              <MainDisplayThirdBottomTextContainer>
                <MainDisplayThirdBottomAlbumName>
                  Zene Zema
                </MainDisplayThirdBottomAlbumName>
                <MainDisplayThirdBottomArtistName>
                  Dawit Tsige
                </MainDisplayThirdBottomArtistName>
              </MainDisplayThirdBottomTextContainer>
              <MainDisplayThirdBottomPlayIcon>
                <div className="icon">
                  <PlayCircleIcon
                    style={{
                      fontSize: "65px",
                      margin: "0px",
                      color: "#20c997",
                    }}
                  />
                </div>
              </MainDisplayThirdBottomPlayIcon>
            </MainDisplayThirdBottomEachItem>
          </MainDisplayTopMiddleThirdBottom>
        </MainDisplayTopMiddleThird>
      </MainDisplatTopMiddleAllComponentContainer>
    </MainDisplayTopMiddleContainer>
  );
};

export default MainDisplayTopMiddle;
