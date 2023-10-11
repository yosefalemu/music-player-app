import React, { useState, useEffect } from "react";
import styled, { keyframes, createGlobalStyle } from "styled-components";
import { Link, useNavigate } from "react-router-dom";

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

const LogInContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
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
    cursor: not-allowed;
  }
`;

const Button = styled.button`
  max-width: 100%;
  width: 100%;
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

  &:hover {
    opacity: 0.9;
    background-color: #1a9988;
    animation: ${jump} 0.2s ease-out forwards;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
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

const Login = () => {
  console.log("Login page");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/maindisplay");
  };

  return (
    <>
      <GlobalStyle />
      <LogInContainer>
        <Wrapper>
          <Title>LOGIN</Title>
          <Form onSubmit={handleSubmit}>
            <Input type="email" name="email" placeholder="Email" disabled />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              disabled
            />
            <Button>Login</Button>
            <ForgotPasswordLink>Forget password?</ForgotPasswordLink>
            <RegisterLink to="/signup">
              Don't have an account? Signup
            </RegisterLink>
          </Form>
        </Wrapper>
      </LogInContainer>
    </>
  );
};

export default Login;
