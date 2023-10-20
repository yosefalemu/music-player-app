import React from "react";
import styled from "styled-components";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { useNavigate } from "react-router-dom";

const MainDisplayThirdBottomEachItem = styled.div`
  width: 30.6%;
  display: flex;
  flex-direction: column;
  background-color: #333333;
  padding-bottom: 5px;
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
  object-fit: cover;
`;
const MainDisplayThirdBottomTextContainer = styled.div`
  width: calc(100% - 50px);
  text-align: left;
  padding: 5px 25px;
`;
const MainDisplayThirdBottomAlbumName = styled.h1`
  color: white;
  font-size: 32px;
  margin: 0px;
  font-family: "Arial", sans-serif;
  margin-bottom: 5px;
`;
const MainDisplayThirdBottomArtistName = styled.p`
  color: whitesmoke;
  margin: 0px;
  font-size: 22px;
  font-family: "Arial", sans-serif;
`;
const MainDisplayThirdBottomPlayIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 10%;
`;

const AlbumContainer = ({ album }) => {
  console.log("album component");
  console.log(album);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const imageUrl = PF + "images/";
  console.log(imageUrl);
  console.log(`${imageUrl}${album.albumImageUrl}`);
  const navigate = useNavigate();
  const handleAlbumClick = (id) => {
    navigate(`/singlemusic/${id}`);
  };
  return (
    <MainDisplayThirdBottomEachItem onClick={() => handleAlbumClick(album._id)}>
      <MainDisplayThirdBottomImage src={`${imageUrl}${album.albumImageUrl}`} />
      <MainDisplayThirdBottomTextContainer>
        <MainDisplayThirdBottomAlbumName>
          {album.title}
        </MainDisplayThirdBottomAlbumName>
        <MainDisplayThirdBottomArtistName>
          {album.artist}
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
