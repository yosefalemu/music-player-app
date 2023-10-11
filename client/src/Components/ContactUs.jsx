import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AddHomeWorkIcon from "@mui/icons-material/AddHomeWork";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

const Container = styled.div`
  position: relative;
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

const ColumsContainer = styled.div`
  margin: 0px;
  padding: 0px;
  display: flex;
  padding: 10px 30px;
`;

const LeftColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const LeftColumnTop = styled.div`
  margin-bottom: 15px;
`;
const LeftColumnTopTitle = styled.h1``;
const LeftColumnTopDescription = styled.p`
  font-size: 18px;
  color: #4c4d4d;
`;
const LeftColumnMiddle = styled.div``;
const LeftColumnMiddleItemContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;
const Tooltip = styled.div`
  position: absolute;
  bottom: 45px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #4c4d4d;
  color: white;
  padding: 5px 10px;
  font-size: 12px;
  border-radius: 5px;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.2s, opacity 0.2s;

  &::before {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-style: solid;
    border-width: 5px;
    border-color: #4c4d4d transparent transparent transparent;
  }
`;

const IconContainer = styled.div`
  margin-right: 15px;
  position: relative;
  cursor: pointer;

  &:hover ${Tooltip} {
    visibility: visible;
    opacity: 1;
  }
`;

const LeftColumnMiddleDescription = styled.p`
  font-size: 18px;
  color: #4c4d4d;
`;
const LeftColumnBottom = styled.div``;
const LeftColumnBottomTitle = styled.h1`
  margin-bottom: 30px;
`;
const LeftColumnBottomContainer = styled.div`
  display: flex;
`;

const RightColumn = styled.div`
  flex: 2;
  padding: 5px 80px;
  display: flex;
  flex-direction: column;
`;
const RightColumnRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const RightColumnRowTitle = styled.h1``;
const RightColumnRowInput = styled.input`
  width: 400px;
  height: 40px;
  padding: 10px 15px;
  border: none;
  font-size: 24px;
  border: 1px solid #ced4da;
  border-radius: 10px;
  &:focus {
    box-shadow: 0px 0px 5px #20c997;
    outline: none;
  }
`;
const RightColumnRowTextArea = styled.textarea`
  margin: 20px 0px;
  height: 200px;
  padding: 20px 30px;
  font-size: 24px;
  &:focus {
    box-shadow: 0px 0px 5px #20c997;
    outline: none;
  }
`;
const RightColumnRowSubmitContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 0px;
`;
const RightColumnRowSubmitButton = styled.button`
  width: fit-content;
  text-align: center;
  padding: 20px 50px;
  font-size: 18px;
  border-radius: 30px;
  color: #ffffff;
  background-color: #20c997;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s, background-color 0.2s;

  &:hover {
    opacity: 0.9;
    background-color: #1a9988;
  }
`;
const CopyRightContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const DeveloperLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #616161;
`;
const CopyRightText = styled.p``;
const AtContainer = styled.span``;
const DeveloperName = styled.span``;

const ContactOverLay = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  position: absolute;
  color: white;
  font-size: 150px;
  text-align: center;
  padding-top: 100px;
  top: 0;
  left: 0;
  width: 100%;
  height: 117vh;
  z-index: -1;
`;
const ContactUs = () => {
  return (
    <Container>
      <Wrapper>
        <Header>
          Get In Touch
          <Underline />
        </Header>
        <ColumsContainer>
          <LeftColumn>
            <LeftColumnTop>
              <LeftColumnTopTitle>ADDRESS</LeftColumnTopTitle>
              <LeftColumnTopDescription>
                Addis Ababa(Ethiopia)
              </LeftColumnTopDescription>
              <LeftColumnTopDescription>
                AG Grace Plaza (On the road from Ednamal to Golagol)
              </LeftColumnTopDescription>
              <LeftColumnTopDescription>
                Djibuti St, Addis Ababa
              </LeftColumnTopDescription>
            </LeftColumnTop>
            <LeftColumnMiddle>
              <LeftColumnMiddleItemContainer>
                <IconContainer>
                  <PhoneIcon style={{ fontSize: "35px", color: "#20c997" }} />
                </IconContainer>
                <LeftColumnMiddleDescription>
                  +251-978-783525
                </LeftColumnMiddleDescription>
              </LeftColumnMiddleItemContainer>
              <LeftColumnMiddleItemContainer>
                <IconContainer>
                  <EmailIcon style={{ fontSize: "35px", color: "#20c997" }} />
                </IconContainer>
                <LeftColumnMiddleDescription>
                  info@addissoftware.com
                </LeftColumnMiddleDescription>
              </LeftColumnMiddleItemContainer>
              <LeftColumnMiddleItemContainer>
                <IconContainer>
                  <AddHomeWorkIcon
                    style={{ fontSize: "35px", color: "#20c997" }}
                  />
                </IconContainer>
                <LeftColumnMiddleDescription>
                  Mon - Fri 8:30am - 05:30pm
                </LeftColumnMiddleDescription>
              </LeftColumnMiddleItemContainer>
            </LeftColumnMiddle>
            <LeftColumnBottom>
              <LeftColumnBottomTitle>FOLLOW US</LeftColumnBottomTitle>
            </LeftColumnBottom>
            <LeftColumnBottomContainer>
              <IconContainer
                data-tooltip="Facebook"
                style={{ marginRight: "10px" }}
              >
                <FacebookIcon
                  style={{
                    fontSize: "35px",
                    color: "#616161",
                  }}
                />
                <Tooltip>Facebook</Tooltip>
              </IconContainer>
              <IconContainer
                data-tooltip="Twitter"
                style={{ marginRight: "10px" }}
              >
                <TwitterIcon
                  style={{
                    fontSize: "35px",
                    color: "#616161",
                  }}
                />
                <Tooltip>Twitter</Tooltip>
              </IconContainer>
              <IconContainer
                data-tooltip="LinkedIn"
                style={{ marginRight: "10px" }}
              >
                <LinkedInIcon
                  style={{
                    fontSize: "35px",
                    color: "#616161",
                  }}
                />
                <Tooltip>LinkedIn</Tooltip>
              </IconContainer>
              <IconContainer
                data-tooltip="Google"
                style={{ marginRight: "10px" }}
              >
                <GoogleIcon
                  style={{
                    fontSize: "35px",
                    color: "#616161",
                  }}
                />
                <Tooltip>Google</Tooltip>
              </IconContainer>
              <IconContainer
                data-tooltip="GitHub"
                style={{ marginRight: "10px" }}
              >
                <GitHubIcon
                  style={{
                    fontSize: "35px",
                    color: "#616161",
                  }}
                />
                <Tooltip>GitHub</Tooltip>
              </IconContainer>
            </LeftColumnBottomContainer>
          </LeftColumn>
          <RightColumn>
            <RightColumnRowTitle>SEND US A NOTE</RightColumnRowTitle>
            <RightColumnRow>
              <RightColumnRowInput placeholder="Name" />
              <RightColumnRowInput placeholder="Email" />
            </RightColumnRow>
            <RightColumnRowTextArea placeholder="Tell us more about your needs........." />
            <RightColumnRowSubmitContainer>
              <RightColumnRowSubmitButton>
                Send Message
              </RightColumnRowSubmitButton>
            </RightColumnRowSubmitContainer>
          </RightColumn>
        </ColumsContainer>
        <ContactOverLay>Contact Us</ContactOverLay>
        <CopyRightContainer>
          <CopyRightText>
            <DeveloperLink to="https://github.com/yosefalemu">
              <AtContainer>@</AtContainer>
              <GitHubIcon style={{ fontSize: "15px" }} />
              <DeveloperName> Yosef Alemu Mengstie</DeveloperName>
            </DeveloperLink>
          </CopyRightText>
        </CopyRightContainer>
      </Wrapper>
    </Container>
  );
};

export default ContactUs;
