import React, { useState } from "react";
import styled, { keyframes, createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useDispatch } from "react-redux";
import { REGISTER_USER } from "../Redux-toolkit/types/auth";
import axios from "axios";

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
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`;

const Button = styled.button`
  max-width: 100%;
  padding: 11px 13px;
  color: #fff;
  font-weight: 600;
  text-transform: uppercase;
  background: #0074d9;
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  margin-top: 0.6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  &:hover {
    background: #0056b3;
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
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    avatar: "",
  });

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: REGISTER_USER, payload: formData });
  };

  const uploadFileHandler = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (!file) return;

    const formDataCopy = { ...formData };
    formDataCopy.avatar = file;

    const formDataToUpload = new FormData();
    formDataToUpload.append("avatar", file);

    const { data } = await axios.post(
      "http://localhost:5000/api/v1/upload",
      formDataToUpload
    );

    formDataCopy.avatar = data;

    setFormData(formDataCopy);
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Title>SIGNUP</Title>
        <Form onSubmit={handleSubmit}>
          <InputContainer>
            <Label>First Name</Label>
            <Input
              name="firstname"
              type="text"
              value={formData.firstname}
              onChange={handleInputChange}
            />
          </InputContainer>
          <InputContainer>
            <Label>Middle Name</Label>
            <Input
              name="middlename"
              type="text"
              value={formData.middlename}
              onChange={handleInputChange}
            />
          </InputContainer>
          <InputContainer>
            <Label>Last Name</Label>
            <Input
              name="lastname"
              type="text"
              value={formData.lastname}
              onChange={handleInputChange}
            />
          </InputContainer>
          <InputContainer>
            <Label>User Name</Label>
            <Input
              name="username"
              type="text"
              value={formData.username}
              onChange={handleInputChange}
            />
          </InputContainer>
          <InputContainer>
            <Label>Email</Label>
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </InputContainer>
          <InputContainer>
            <Label>Password</Label>
            <Input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </InputContainer>
          <InputContainer>
            <Label>Avatar</Label>
            <Input name="avatar" type="file" onChange={uploadFileHandler} />
          </InputContainer>

          <Button>SignUp</Button>
          <LoginLink to="/">Have an account? Login</LoginLink>
          <SignInOptionContainer>
            <SignInOption>
              <GoogleIcon fontSize="large" />
              <SignInParagraph>Sign up with Google</SignInParagraph>
            </SignInOption>
            <SignInOption>
              <FacebookIcon fontSize="large" />
              <SignInParagraph>Sign up with Facebook</SignInParagraph>
            </SignInOption>
            <SignInOption>
              <LinkedInIcon fontSize="large" />
              <SignInParagraph>Sign up with LinkedIn</SignInParagraph>
            </SignInOption>
          </SignInOptionContainer>
        </Form>
      </Wrapper>
    </>
  );
};

export default SignUpPage;
