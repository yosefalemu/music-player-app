import React, { useState } from "react";
import styled, { keyframes, createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

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
  max-width: 514px;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 5px;
`;

const Label = styled.label`
  flex: 1;
  font-size: 22px;
`;

const Input = styled.input`
  flex: 2;
  max-width: 100%;
  height: 2rem;
  background: #f9f9fa;
  padding: 0 13px;
  color: #333;
  border-radius: 4px;
  outline: 0;
  border: 1px solid rgba(245, 245, 245, 0.7);
  font-size: 14px;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  :focus,
  &:hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
    cursor: not-allowed;
  }
`;

const Button = styled.button`
  max-width: 100%;
  padding: 11px 13px;
  color: #fff;
  font-weight: 600;
  text-transform: uppercase;
  background: #1a9988;
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  margin-top: 0.6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: opacity 0.2s, background-color 0.2s;

  &:hover {
    opacity: 0.9;
    background-color: #1a9988;
    animation: ${jump} 0.2s ease-out forwards;
  }
`;

const LoginLink = styled(Link)`
  font-size: 18px;
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

const SignInOptionContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

const SignInOption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  cursor: pointer;
  border: 2px solid transparent;
  border-radius: 10px;
  transition: all 0.5s ease-out;
  &:hover {
    border: 2px solid green;
    animation: ${jump} 0.2s ease-out forwards;
  }
`;

const SignInParagraph = styled.p`
  color: #0056b3;
  text-align: center;
  font-size: 18px;
  margin-top: 5px;
`;

const SignUpPage = () => {
  const navigate = useNavigate();
  console.log("sign up page");
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/maindisplay");
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Title>SIGNUP</Title>
        <Form onSubmit={handleSubmit}>
          <InputContainer>
            <Label>First Name</Label>
            <Input name="firstname" type="text" disabled />
          </InputContainer>
          <InputContainer>
            <Label>Middle Name</Label>
            <Input name="middlename" type="text" disabled />
          </InputContainer>
          <InputContainer>
            <Label>Last Name</Label>
            <Input name="lastname" type="text" disabled />
          </InputContainer>
          <InputContainer>
            <Label>User Name</Label>
            <Input name="username" type="text" disabled />
          </InputContainer>
          <InputContainer>
            <Label>Email</Label>
            <Input name="email" type="email" disabled />
          </InputContainer>
          <InputContainer>
            <Label>Password</Label>
            <Input name="password" type="password" disabled />
          </InputContainer>
          <InputContainer>
            <Label>Avatar</Label>
            <Input name="avatar" type="file" disabled />
          </InputContainer>

          <Button>SignUp</Button>
          <LoginLink to="/login">Have an account? Login</LoginLink>
          <SignInOptionContainer>
            <SignInOption>
              <GoogleIcon fontSize="large" style={{ color: "#20c997" }} />
              <SignInParagraph>Sign up with Google</SignInParagraph>
            </SignInOption>
            <SignInOption>
              <FacebookIcon fontSize="large" style={{ color: "#20c997" }} />
              <SignInParagraph>Sign up with Facebook</SignInParagraph>
            </SignInOption>
            <SignInOption>
              <LinkedInIcon fontSize="large" style={{ color: "#20c997" }} />
              <SignInParagraph>Sign up with LinkedIn</SignInParagraph>
            </SignInOption>
          </SignInOptionContainer>
        </Form>
      </Wrapper>
    </>
  );
};

export default SignUpPage;
