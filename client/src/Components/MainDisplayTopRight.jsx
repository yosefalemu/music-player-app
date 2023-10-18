import React, { useEffect } from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { GET_ALL_OTHER_USERS } from "../Redux-toolkit/types/userType";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import AddIcon from "@mui/icons-material/Add";

const MainDisplayTopRightContainer = styled.div`
  flex: 1;
  width: 100%;
  background-color: #222222;
  height: 85vh;
  margin: 8px 7px;
  border-radius: 10px;
  padding: 15px 10px;
`;

const TopRightFirst = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TopRightFirstTitle = styled.h1`
  font-size: 24px;
  color: white;
  font-family: "Arial", sans-serif;
`;
const TopRightSecond = styled.div`
  text-align: center;
  margin: 15px 0px;
`;
const TopRightSecondText = styled.p`
  color: #fff;
  font-family: "Arial", sans-serif;
  font-size: 18px;
  text-align: left;
`;
const TopRightThird = styled.div`
  height: 45vh;
  width: 100%;
  background: #555555;
  margin-bottom: 15px;
  border-radius: 10px 0px 0px 10px;
  border: 1px solid #fff;
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: gray #f1f1f1;
  &::-webkit-scrollbar {
    width: 1px;
  }
  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }
  &::-webkit-scrollbar-thumb {
    background-color: gray;
    border-radius: 5px;
  }
`;
const TopRightThirdItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  padding: 2px 7px;
`;
const TopRightThirdEachItem = styled.div`
  width: 90%;
  display: flex;
  padding: 15px 10px;
  align-items: center;
  justify-content: space-between;
  background-color: #333333;
  border-radius: 5px;
  &:hover {
    background-color: #444444;
    cursor: pointer;
  }
`;
const TopRightThirdImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 3px;
`;
const TopRightThirdText = styled.p`
  margin: 0px;
  font-size: 24px;
  color: #fff;
`;

const TopRightFourth = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 14vh;
  border-radius: 10px;
  margin-bottom: 15px;
`;
const TopRightFourthContainer = styled.div`
  background: #fff;
  display: flex;
  align-items: center;
  padding: 20px 35px;
  border-radius: 10px;
  border: 5px solid #555555;
`;
const TopRightFourthText = styled.h1`
  margin: 0px;
  font-size: 14px;
  font-family: "Arial", sans-serif;
  color: #666666;
`;

const MainDisplayTopRight = () => {
  console.log("main display top right");
  const dispatch = useDispatch();
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const imageUrl = PF + "images/";
  const { allOtherUsers, user } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch({ type: GET_ALL_OTHER_USERS, currentUserId: user._id });
  }, []);

  return (
    <MainDisplayTopRightContainer>
      <TopRightFirst>
        <TopRightFirstTitle>Friends activity</TopRightFirstTitle>
        <CloseIcon style={{ color: "white", fontSize: "28px" }} />
      </TopRightFirst>
      <TopRightSecond>
        <TopRightSecondText>
          Let friends and followers on addis music
        </TopRightSecondText>
      </TopRightSecond>
      <TopRightThird>
        {allOtherUsers?.map((user) => (
          <TopRightThirdItemContainer>
            <TopRightThirdEachItem>
              <TopRightThirdImage
                src={
                  user.avatar
                    ? `${imageUrl}${user.avatar}`
                    : `${imageUrl}defaultProfile.jpg`
                }
              />
              <TopRightThirdText>{user.username}</TopRightThirdText>
              <AddIcon
                style={{
                  fontSize: "40px",
                  color: "#CCCCCC",
                  transition: "color 0.3s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => (e.target.style.color = "white")}
                onMouseLeave={(e) => (e.target.style.color = "#CCCCCC")}
              />
            </TopRightThirdEachItem>
          </TopRightThirdItemContainer>
        ))}
      </TopRightThird>
      <TopRightFourth>
        <TopRightFourthContainer>
          <TopRightFourthText>Addis Music Player</TopRightFourthText>
        </TopRightFourthContainer>
      </TopRightFourth>
    </MainDisplayTopRightContainer>
  );
};

export default MainDisplayTopRight;
