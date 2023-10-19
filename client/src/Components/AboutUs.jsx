import React from "react";
import styled from "styled-components";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import SpatialAudioOffIcon from "@mui/icons-material/SpatialAudioOff";
import RecommendIcon from "@mui/icons-material/Recommend";
import SelectAllIcon from "@mui/icons-material/SelectAll";

const Container = styled.div`
  position: relative;
  padding-bottom: 150px;
`;

const Wrapper = styled.div`
  width: 100%;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  padding-top: 150px;
  position: relative;
`;

const Header = styled.h1`
  text-align: center;
  margin-bottom: 150px;
  color: #555555;
  font-family: "Arial", sans-serif;
  position: relative;
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

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 30px;
`;

const RowComponent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-left: 40px;
  margin-right: 25px;
`;

const RowLeft = styled.div`
  margin-right: 50px;
`;

const RowRight = styled.div`
  display: flex;
  flex-direction: column;
`;
const DescriptionTitle = styled.h1`
  font-size: 22px;
  font-weight: 700;
  font-family: "Arial", sans-serif;
  color: #555555;
`;

const Description = styled.p`
  font-size: 16px;
  font-family: "Arial", sans-serif;
  color: #666666;
`;
const IconWrapper = styled.div`
  width: 75px;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #20c997;
  background: white;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
`;

const AboutUsOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  position: absolute;
  color: white;
  font-size: 150px;
  text-align: center;
  padding-top: 100px;
  top: 0;
  left: 0;
  width: 100%;
  height: 123vh;
  z-index: -1;
`;

const AboutUs = () => {
  return (
    <Container>
      <Wrapper>
        <Header>
          Know About Addis Music Player
          <Underline />
        </Header>
        <Row>
          <RowComponent>
            <RowLeft>
              <IconWrapper>
                <AudiotrackIcon style={{ fontSize: "70px" }} />
              </IconWrapper>
            </RowLeft>
            <RowRight>
              <DescriptionTitle>Audio Playback</DescriptionTitle>
              <Description>
                Ensure support for various audio formats (e.g., MP3, AAC, FLAC)
                and allow you to create playlists, queue songs, and control
                playback (play, pause, skip, repeat, shuffle)
              </Description>
            </RowRight>
          </RowComponent>
          <RowComponent>
            <RowLeft>
              <IconWrapper>
                <LibraryMusicIcon style={{ fontSize: "70px" }} />
              </IconWrapper>
            </RowLeft>
            <RowRight>
              <DescriptionTitle>Library Management</DescriptionTitle>
              <Description>
                Organize and manage the user's music library. This includes
                features like scanning and indexing the user's music collection,
                sorting by artist, album, genre, and song title, and allowing
                users to search for specific tracks or albums.
              </Description>
            </RowRight>
          </RowComponent>
        </Row>
        <Row>
          <RowComponent>
            <RowLeft>
              <IconWrapper>
                <ManageAccountsIcon style={{ fontSize: "70px" }} />
              </IconWrapper>
            </RowLeft>
            <RowRight>
              <DescriptionTitle>User Profile and Preferences</DescriptionTitle>
              <Description>
                Provide you with the ability to create profiles or accounts.
                This can be used to save playlists, favorite songs, and maintain
                personal preferences like equalizer settings, theme
                customization, and playback settings (e.g., crossfade, gapless
                playback).
              </Description>
            </RowRight>
          </RowComponent>
          <RowComponent>
            <RowLeft>
              <IconWrapper>
                <SpatialAudioOffIcon style={{ fontSize: "70px" }} />
              </IconWrapper>
            </RowLeft>
            <RowRight>
              <DescriptionTitle>Offline Mode</DescriptionTitle>
              <Description>
                Allow users to download songs for offline listening. This
                feature is particularly useful for mobile users who want to
                listen to music without an internet connection, such as during
                flights or in areas with poor connectivity
              </Description>
            </RowRight>
          </RowComponent>
        </Row>
        <Row>
          <RowComponent>
            <RowLeft>
              <IconWrapper>
                <RecommendIcon style={{ fontSize: "70px" }} />
              </IconWrapper>
            </RowLeft>
            <RowRight>
              <DescriptionTitle>Music Recommendations</DescriptionTitle>
              <Description>
                Implement music recommendation algorithms to suggest new songs
                or artists based on the user's listening history and
                preferences. You can also integrate with music discovery
                services or provide access to curated playlists.
              </Description>
            </RowRight>
          </RowComponent>
          <RowComponent>
            <RowLeft>
              <IconWrapper>
                <SelectAllIcon style={{ fontSize: "70px" }} />
              </IconWrapper>
            </RowLeft>
            <RowRight>
              <DescriptionTitle>Cross-Platform Support</DescriptionTitle>
              <Description>
                Ensure compatibility with various platforms and devices,
                including mobile phones, tablets, desktop computers, and smart
                speakers. Offer synchronization options to keep music libraries
                and playlists consistent across devices.
              </Description>
            </RowRight>
          </RowComponent>
        </Row>
        <AboutUsOverlay>About us</AboutUsOverlay>
      </Wrapper>
    </Container>
  );
};

export default AboutUs;
