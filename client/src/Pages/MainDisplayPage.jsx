import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import MainDisplayFooter from "../Components/MainDisplayFooter";
import MainDisplayTopLeft from "../Components/MainDisplayTopLeft";
import MainDisplayTopMiddle from "../Components/MainDisplayTopMiddle";
import MainDisplayTopRight from "../Components/MainDisplayTopRight";
import UserInfoModal from "../Components/UserInfoModal";
import AdminModal from "../Components/AdminModal";
import { closeAdminModal } from "../Redux-toolkit/slice/adminModal";
import { closeModal } from "../Redux-toolkit/slice/modalSlice";
import { removeUploadingSingleMusicError } from "../Redux-toolkit/slice/uploadSingleMusicSlice";

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

const MainDisplayPage = () => {
  console.log(" main display page");
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.modal);
  const { isOpenAdminModal } = useSelector((state) => state.adminModal);
  useEffect(() => {
    dispatch(closeAdminModal());
    dispatch(closeModal());
    dispatch(removeUploadingSingleMusicError());
  }, [dispatch]);
  console.log(process.env.BASE_URL);

  return (
    <MainDisplayContainer>
      <MainDisplayWrapper>
        {isOpen && <UserInfoModal />}
        {isOpenAdminModal && <AdminModal />}
        <MainDisplayTop>
          <MainDisplayTopLeft />
          <MainDisplayTopMiddle />
          <MainDisplayTopRight />
        </MainDisplayTop>
        <MainDisplayBottom>
          <MainDisplayFooter />
        </MainDisplayBottom>
      </MainDisplayWrapper>
    </MainDisplayContainer>
  );
};

export default MainDisplayPage;
