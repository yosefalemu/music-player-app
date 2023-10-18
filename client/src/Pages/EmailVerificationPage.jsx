import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { VERIFY_EMAIL } from "../Redux-toolkit/types/userType";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { removeUserError } from "../Redux-toolkit/slice/userSlice";

const EmailVerificationContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const EmailVerificationWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const EmailVerificationImage = styled.img`
  width: 400px;
  height: 400px;
`;
const EmailVerificationButton = styled.button`
  background-color: #1a9988;
  color: white;
  width: 50%;
  padding: 15px 35px;
  font-size: 24px;
  border: none;
  border-radius: 100px;
  cursor: pointer;
`;
const LogInVerificationButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LoadingComponent = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NotFoundComponent = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const NotFoundText = styled.div`
  color: red;
`;

const EmailVerificationPage = () => {
  console.log("email verification page");
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const imageUrl = PF + "images/";
  const [buttonClick, setButtonClick] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const param = useParams();

  useEffect(() => {
    dispatch(removeUserError());
  }, []);

  const { loading, error } = useSelector((state) => state.user);

  const handleLogin = () => {
    dispatch({ type: VERIFY_EMAIL, id: param.id, token: param.token });
    setButtonClick(true);
  };
  if (buttonClick && !error && !loading) {
    navigate("/login");
  }

  if (loading) {
    return (
      <LoadingComponent>
        <ClipLoader
          color={"#36d7b7"}
          loading={loading}
          size={70}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </LoadingComponent>
    );
  }
  if (error) {
    return (
      <NotFoundComponent>
        <NotFoundText>page not found</NotFoundText>
      </NotFoundComponent>
    );
  }
  return (
    <EmailVerificationContainer>
      <EmailVerificationWrapper>
        <EmailVerificationImage src={`${imageUrl}verify.jpg`} />
        <LogInVerificationButtonContainer>
          <EmailVerificationButton onClick={handleLogin}>
            LOGIN
          </EmailVerificationButton>
        </LogInVerificationButtonContainer>
      </EmailVerificationWrapper>
    </EmailVerificationContainer>
  );
};

export default EmailVerificationPage;
