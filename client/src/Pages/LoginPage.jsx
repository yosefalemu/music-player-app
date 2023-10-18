import React, { useState, useEffect } from "react";
import styled, { keyframes, createGlobalStyle } from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LOGIN_USER_START } from "../Redux-toolkit/types/userType";
import { useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import { removeUserError } from "../Redux-toolkit/slice/userSlice";

const jump = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-3px);
  }
`;

const LogInContainer = styled.div`
  background: #111111;
  font-family: "Arial", sans-serif;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.section`
  width: 30%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-weight: normal;
  color: #fff;
  text-align: center;
`;

const Form = styled.form`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
const InputContainer = styled.div`
  margin-bottom: 18px;
  width: 100%;
`;
const Input = styled.input`
  width: calc(100% - 26px);
  padding: 11px 13px;
  background: #f9f9fa;
  color: #333;
  border-radius: 4px;
  outline: 0;
  border: 1px solid rgba(245, 245, 245, 0.7);
  font-size: 14px;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  &:focus,
  &:hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 11px 13px;
  color: #fff;
  font-weight: 600;
  text-transform: uppercase;
  background: #666666;
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  margin-top: 0.6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;

  &:hover {
    opacity: 0.9;
    background-color: #555555;
    animation: ${jump} 0.2s ease-out forwards;
  }
`;

const ForgotPasswordLink = styled(Link)`
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  margin-top: 15px;
  text-decoration: none;
  cursor: pointer;
  text-align: center;

  &:hover {
    animation: ${jump} 0.2s ease-out forwards;
  }
`;

const RegisterLink = styled(Link)`
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  margin-top: 15px;
  text-decoration: none;
  cursor: pointer;
  text-align: right;

  &:hover {
    animation: ${jump} 0.2s ease-out forwards;
  }
`;
const ErrorComponent = styled.div`
  background-color: red;
  color: white;
  font-size: 24px;
  padding: 5px 15px;
  margin-bottom: 30px;
`;
const LoadingComponent = styled.div`
  text-align: center;
`;

const Login = () => {
  console.log("Login page");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitClicked, setSubmitClicked] = useState(false);
  useEffect(() => {
    dispatch(removeUserError());
    setSubmitClicked(false);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email, password };
    dispatch({ type: LOGIN_USER_START, user });
    setSubmitClicked(true);
  };
  const { loadingUser, errorUser } = useSelector((state) => state.user);

  if (submitClicked && !loadingUser && !errorUser) {
    navigate("/maindisplay");
  }

  return (
    <LogInContainer>
      <Wrapper>
        <Title>LOGIN</Title>
        {errorUser && <ErrorComponent>{errorUser}</ErrorComponent>}
        {loadingUser && (
          <LoadingComponent>
            <ClipLoader
              color={"#36d7b7"}
              loading={loadingUser}
              size={70}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </LoadingComponent>
        )}
        <Form onSubmit={handleSubmit}>
          <InputContainer>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputContainer>
          <Button>Login</Button>
          <ForgotPasswordLink>Forget password?</ForgotPasswordLink>
          <RegisterLink to="/signup">
            Don't have an account? Signup
          </RegisterLink>
        </Form>
      </Wrapper>
    </LogInContainer>
  );
};

export default Login;
