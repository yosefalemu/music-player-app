import React, { useState, useEffect } from "react";
import styled, { keyframes, createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
import { LOGIN_USER } from "../Redux-toolkit/types/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const jump = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-3px);
  }
`;

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background: #FDF9F3;
    font-family: 'Arial', sans-serif;
  }

  body, html, #root {
    height: 100%;
  }
`;

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  flex-direction: column;
`;

const Title = styled.h1`
  font-weight: normal;
  color: #333;
  text-align: center;
`;

const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  max-width: 414px;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  max-width: 100%;
  padding: 11px 13px;
  background: #f9f9fa;
  color: #333;
  margin-bottom: 0.9rem;
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
  max-width: 100%;
  padding: 11px 13px;
  color: #fff;
  font-weight: 600;
  text-transform: uppercase;
  background: #20c997;
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  margin-top: 0.6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  cursor: pointer;
  transition: opacity 0.2s, background-color 0.2s;

  &:hover {
    opacity: 0.9;
    background-color: #1a9988;
    animation: ${jump} 0.2s ease-out forwards;
  }
`;
const ForgotPasswordLink = styled(Link)`
  font-size: 16px;
  font-weight: 500;
  color: #0074d9;
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
  color: #0074d9;
  margin-top: 15px;
  text-decoration: none;
  cursor: pointer;
  text-align: right;
  &:hover {
    animation: ${jump} 0.2s ease-out forwards;
  }
`;

const ErrorMsg = styled.p`
  color: red;
  text-align: center;
  margin-top: 10px;
`;

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, error, isSuccesfullLogIn } = useSelector((state) => state.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const formData = { email, password };
    // dispatch({ type: LOGIN_USER, payload: formData });
    // console.log(test);
    // console.log(isSuccesfullLogIn);
    navigate("/maindisplay");
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Title>LOGIN</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button>Login</Button>
          <ForgotPasswordLink Link to="/forgetpassword">
            Forget password?
          </ForgotPasswordLink>
          <RegisterLink Link to="/signup">
            Don't have an account? Signup
          </RegisterLink>
          {error && <ErrorMsg>{error.msg}</ErrorMsg>}
        </Form>
      </Wrapper>
    </>
  );
};

export default Login;
