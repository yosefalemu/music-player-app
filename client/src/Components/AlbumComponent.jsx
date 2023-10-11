import React, { useEffect } from "react";
import styled from "styled-components";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

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
  border-radius: 10px;
`;
const MainDisplayThirdBottomTextContainer = styled.div`
  width: 100%;
  text-align: left;
`;
const MainDisplayThirdBottomAlbumName = styled.h1`
  color: white;
  font-size: 22px;
  margin: 10px;
  text-align: left;
`;
const MainDisplayThirdBottomArtistName = styled.p`
  color: whitesmoke;
  margin: 0px;
  margin: 10px;
`;
const MainDisplayThirdBottomPlayIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 10%;
`;

const AlbumContainer = () => {
  return (
    <MainDisplayThirdBottomEachItem>
      <MainDisplayThirdBottomImage  />
      <MainDisplayThirdBottomTextContainer>
        <MainDisplayThirdBottomAlbumName>
          Title
        </MainDisplayThirdBottomAlbumName>
        <MainDisplayThirdBottomArtistName>
         Artist Name
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
  );
};

export default AlbumContainer;
