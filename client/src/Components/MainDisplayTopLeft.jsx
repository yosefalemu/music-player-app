import React, { useEffect, useState } from "react";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import AddIcon from "@mui/icons-material/Add";
import EastIcon from "@mui/icons-material/East";
import ListIcon from "@mui/icons-material/List";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DownloadIcon from "@mui/icons-material/Download";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_ALL_TRACKS } from "../Redux-toolkit/types/trackType";
import {
  setCurrentImageUrl,
  setCurrentTrackName,
  setCurrentArtistName,
} from "../Redux-toolkit/slice/trackSlice";
import { setPlayingMusic } from "../Redux-toolkit/slice/playingSlice";
const MainDisplayTopLeftContainer = styled.div`
  flex: 2;
  height: 85vh;
  margin: 8px 7px;
  border-radius: 10px;
  margin-bottom: 30px;
`;
const MainDisplayTopLeftTop = styled.div`
  height: 13vh;
  background-color: blue;
  background-color: #222222;
  margin-bottom: 10px;
  padding: 20px 5px;
`;
const MainDisplayTopLeftHomeItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
`;
const MainDisplayTopLeftSearchItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
`;
const MainDisplayTopLeftHomeText = styled.h1`
  margin: 0px;
  color: white;
  font-size: 24px;
  padding-top: 7px;
`;
const MainDisplayTopLeftSearchText = styled.h1`
  margin: 0px;
  font-size: 24px;
  color: ${(props) => (props.issearchhovered === "true" ? "white" : "#555555")};
`;
const MainDisplayTopLeftBottom = styled.div`
  height: 65vh;
  background-color: #222222;
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
const MainDisplayTopLeftBottomWrapper = styled.div`
  padding: 15px;
`;
const BottomFirst = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const BottomFirstLeft = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const BottomFirstRight = styled.div``;
const BottomFirstText = styled.h3`
  margin: 0px;
  color: ${(props) => (props.ishovered === "true" ? "white" : "#555555")};
`;
const BottomSecond = styled.div`
  display: flex;
  margin-top: 8px;
`;
const BottomSecondPlaylistButton = styled.button`
  background-color: #444444;
  border: none;
  padding: 8px 10px;
  border-radius: 15px;
  color: white;
  font-size: 16px;
  margin-right: 15px;
  &:hover {
    background-color: #666666;
  }
`;
const BottomSecondArtistButton = styled.button`
  background-color: #444444;
  border: none;
  padding: 8px 10px;
  border-radius: 15px;
  color: white;
  font-size: 16px;
  margin-right: 15px;
  &:hover {
    background-color: #666666;
  }
`;
const BottomThird = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  position: relative;
  height: 35px;
`;
const BottomThridSearchInputContainer = styled.div`
  flex: 2;
`;
const BottomThirdSearchInput = styled.input`
  height: 32px;
  border: none;
  padding: 0px 40px;
  font-size: 18px;
  width: 150px;
  border-radius: 7px;
  background-color: #333333;
  color: #666666;
  display: ${(props) =>
    props.searchiconvisible === "false" ? "block" : "none"};
  &:focus {
    outline: none;
  }
`;
const BottomThirdRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: right;
  align-items: center;
`;
const BottomThirdRightText = styled.h3`
  font-size: 18px;
  cursor: pointer;
  margin: 0px;
  margin-right: 10px;
  color: ${(props) =>
    props.isrecentsearchhovered === "true" ? "white" : "#555555"};
`;
const BottomFourth = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 0px 5px 10px;
  margin-top: 15px;
`;
const BottomFourthEachItem = styled.div`
  display: flex;
  padding: 8px 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 10px;
  background-color: #333333;
  &:hover {
    background-color: #444444;
  }
`;
const ImageContainer = styled.img`
  flex: 1;
  width: 70px;
  height: 70px;
  border-radius: 5px;
  margin-right: 15px;
  object-fit: cover;
`;
const BottomFourthRight = styled.div`
  flex: 3;
  diplay: flex;
  flex-direction: column;
  padding: 15px 5px;
  overflow-x: hidden;
`;
const BottomFourthRightArtistName = styled.h3`
  color: white;
  margin: 0px;
  text-transform: capitalize;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 5px;
  font-family: "Arial", sans-serif;
`;
const BottomFourthRightDescription = styled.p`
  margin: 0;
  color: gray;
  font-size: 18px;
  font-weight: 700;
  text-transform: capitalize;
  font-family: "Arial", sans-serif;
`;
const BottomFourthIconContainer = styled.div`
  flex: 0.5;
  display: flex;
  align-items: center;
`;

const MainDisplayTopLeft = () => {
  console.log("Main display top left");
  const dispatch = useDispatch();
  const [ishovered, setIsHovered] = useState(false);
  const [issearchhovered, setIsSearchHovered] = useState(false);
  const [isrecentsearchhovered, setIsRecentSearchHovered] = useState(false);
  const [searchiconvisible, setSearchIconVisible] = useState(false);

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const imageUrl = PF + "images/";

  useEffect(() => {
    dispatch({ type: FETCH_ALL_TRACKS });
  }, []);

  const { allTrack } = useSelector((state) => state.track);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleSearchMouseEnter = () => {
    setIsSearchHovered(true);
  };
  const handleSearchMouseLeave = () => {
    setIsSearchHovered(false);
  };
  const handleRecentSerachMouseEnter = () => {
    setIsRecentSearchHovered(true);
  };
  const handleRecentSerachMouseLeave = () => {
    setIsRecentSearchHovered(false);
  };
  const handleSearchIconClick = () => {
    setSearchIconVisible(!searchiconvisible);
  };
  return (
    <MainDisplayTopLeftContainer>
      <MainDisplayTopLeftTop>
        <MainDisplayTopLeftHomeItem>
          <HomeIcon
            style={{ fontSize: "40px", marginRight: "15px", color: "white" }}
          />
          <MainDisplayTopLeftHomeText>Home</MainDisplayTopLeftHomeText>
        </MainDisplayTopLeftHomeItem>
        <MainDisplayTopLeftSearchItem
          onMouseEnter={handleSearchMouseEnter}
          onMouseLeave={handleSearchMouseLeave}
        >
          <SearchIcon
            style={{
              fontSize: "40px",
              marginRight: "15px",
              color: issearchhovered ? "white" : "#555555",
              transition: "color 0.3s",
            }}
          />
          <MainDisplayTopLeftSearchText
            issearchhovered={issearchhovered ? "true" : "false"}
          >
            Search
          </MainDisplayTopLeftSearchText>
        </MainDisplayTopLeftSearchItem>
      </MainDisplayTopLeftTop>
      <MainDisplayTopLeftBottom>
        <MainDisplayTopLeftBottomWrapper>
          <BottomFirst>
            <BottomFirstLeft
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <LibraryMusicIcon
                style={{
                  fontSize: "40px",
                  marginRight: "15px",
                  color: ishovered ? "white" : "#555555",
                  transition: "color 0.3s",
                }}
              />
              <BottomFirstText ishovered={ishovered ? "true" : "false"}>
                Your Library
              </BottomFirstText>
            </BottomFirstLeft>
            <BottomFirstRight>
              <AddIcon
                style={{
                  fontSize: "40px",
                  marginRight: "15px",
                  color: "#555555",
                  transition: "color 0.3s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => (e.target.style.color = "white")}
                onMouseLeave={(e) => (e.target.style.color = "#555555")}
              />
              <EastIcon
                style={{
                  fontSize: "40px",
                  marginRight: "15px",
                  color: "#555555",
                  transition: "color 0.3s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => (e.target.style.color = "white")}
                onMouseLeave={(e) => (e.target.style.color = "#555555")}
              />
            </BottomFirstRight>
          </BottomFirst>
          <BottomSecond>
            <BottomSecondPlaylistButton>Playlists</BottomSecondPlaylistButton>
            <BottomSecondArtistButton>Artists</BottomSecondArtistButton>
          </BottomSecond>
          <BottomThird>
            <BottomThridSearchInputContainer>
              <SearchIcon
                style={{
                  position: "absolute",
                  top: "2",
                  left: "4",
                  fontSize: "32px",
                  color: "#555555",
                }}
                onClick={handleSearchIconClick}
              />
              <BottomThirdSearchInput
                searchiconvisible={searchiconvisible ? "true " : "false"}
                placeholder="Search your list"
              />
            </BottomThridSearchInputContainer>
            <BottomThirdRight
              onMouseEnter={handleRecentSerachMouseEnter}
              onMouseLeave={handleRecentSerachMouseLeave}
            >
              <BottomThirdRightText
                isrecentsearchhovered={isrecentsearchhovered ? "true" : "false"}
              >
                Recents
              </BottomThirdRightText>
              <ListIcon
                style={{
                  fontSize: "30px",
                  color: isrecentsearchhovered ? "white" : "#555555",
                  transition: "color 0.3s",
                }}
              />
            </BottomThirdRight>
          </BottomThird>
          <BottomFourth>
            {allTrack?.map((track) => (
              <BottomFourthEachItem
                key={track._id}
                onClick={() => {
                  dispatch(
                    setPlayingMusic({
                      currentPlayingMusic: track.track,
                      currentTime: 0,
                    })
                  );
                  dispatch(setCurrentImageUrl(track.imageurl));
                  dispatch(setCurrentTrackName(track.title));
                  dispatch(setCurrentArtistName(track.artist));
                }}
              >
                <ImageContainer
                  src={`${imageUrl}${track.imageurl}`}
                  alt="Image not available"
                />
                <BottomFourthRight>
                  <BottomFourthRightArtistName>
                    {track.artist}
                  </BottomFourthRightArtistName>
                  <BottomFourthRightDescription>
                    {track.title}
                  </BottomFourthRightDescription>
                </BottomFourthRight>
                <BottomFourthIconContainer>
                  <FavoriteIcon
                    style={{
                      fontSize: "35px",
                      marginRight: "5px",
                      color: "#fff",
                      transition: "color 0.3s",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "red")}
                    onMouseLeave={(e) => (e.target.style.color = "#fff")}
                  />
                  <DownloadIcon
                    style={{
                      fontSize: "35px",
                      marginRight: "5px",
                      color: "#fff",
                      transition: "color 0.3s",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#1877F2")}
                    onMouseLeave={(e) => (e.target.style.color = "#fff")}
                  />
                </BottomFourthIconContainer>
              </BottomFourthEachItem>
            ))}
          </BottomFourth>
        </MainDisplayTopLeftBottomWrapper>
      </MainDisplayTopLeftBottom>
    </MainDisplayTopLeftContainer>
  );
};

export default MainDisplayTopLeft;
