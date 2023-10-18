import React from "react";
import styled from "styled-components";
import MainDisplayFooter from "../Components/MainDisplayFooter";
import MainDisplayTopLeft from "../Components/MainDisplayTopLeft";
import SingleMusicMiddle from "../Components/SingleMusicMiddle";
import MainDisplayTopRight from "../Components/MainDisplayTopRight";
import UserInfoModal from "../Components/UserInfoModal";
import { useSelector } from "react-redux";
import AdminModal from "../Components/AdminModal";

const MainDisplayContainer = styled.div`
  z-index: 1;
`;
const MainDisplayWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #111111;
  position: relative;
  z-index: 2;
`;
const MainDisplayTop = styled.div`
  display: flex;
`;
const MainDisplayBottom = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
`;
const SingleMusicPage = () => {
  console.log("single music page");
  const { isOpen } = useSelector((state) => state.modal);
  const { isOpenAdminModal } = useSelector((state) => state.adminModal);
  return (
    <MainDisplayContainer>
      <MainDisplayWrapper>
        {isOpen && <UserInfoModal />}
        {isOpenAdminModal && <AdminModal />}
        <MainDisplayTop>
          <MainDisplayTopLeft />
          <SingleMusicMiddle />
          <MainDisplayTopRight />
        </MainDisplayTop>
        <MainDisplayBottom>
          <MainDisplayFooter />
        </MainDisplayBottom>
      </MainDisplayWrapper>
    </MainDisplayContainer>
  );
};

export default SingleMusicPage;
