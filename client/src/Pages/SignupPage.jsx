import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useDispatch, useSelector } from "react-redux";
import { UPLOAD_IMAGE_START } from "../Redux-toolkit/types/uploadType";
import { CREATE_USER_START } from "../Redux-toolkit/types/userType";
import ClipLoader from "react-spinners/ClipLoader";
import { removeUserError } from "../Redux-toolkit/slice/userSlice";
import { removeUploadError } from "../Redux-toolkit/slice/uploadSlice";

const SignUpContainer = styled.div`
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
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const Label = styled.label`
  flex: 1;
  font-size: 22px;
  color: #fff;
`;

const Input = styled.input`
  flex: 2;
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
  }
`;

const Button = styled.button`
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
  transition: opacity 0.2s, background-color 0.2s;

  &:hover {
    opacity: 0.9;
    background-color: #555555;
    font-size: 24px;
    transform: scale(0.8);
  }
`;

const LoginLink = styled(Link)`
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  margin-top: 15px;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  &:hover {
    transform: scale(0.8);
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
    border: 2px solid white;
    transform: scale(0.8);
  }
`;

const SignInParagraph = styled.p`
  color: #fff;
  text-align: center;
  font-size: 18px;
  margin-top: 5px;
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
const EmailSentComponent = styled.div`
  background-color: #1a9988;
  color: white;
  font-size: 18px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const EmailSentText = styled.p`
  margin: 0px;
`;

const SignUpPage = () => {
  const dispatch = useDispatch();
  console.log("sign up page");
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitClicked, setSubmitClicked] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);

  useEffect(() => {
    dispatch(removeUserError());
    dispatch(removeUploadError());
  }, [dispatch]);

  const { loadingUser, errorUser } = useSelector((state) => state.user);
  const { loadingUploadingImage, errorImage, image } = useSelector(
    (state) => state.upload
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { name, username, email, password, avatar: image };
    dispatch({ type: CREATE_USER_START, user });
    setSubmitClicked(true);
  };

  const uploadProfile = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    const formData = new FormData();
    formData.append("image", file);
    const sendImage = formData.get("image");
    dispatch({ type: UPLOAD_IMAGE_START, sendImage });
  };

  useEffect(() => {
    if (submitClicked && !errorUser && !loadingUser) {
      setIsEmailSent(true);
    }
  }, [submitClicked, errorUser, loadingUser]);

  return (
    <SignUpContainer>
      <Wrapper>
        <Title>SIGNUP</Title>
        {errorImage && <ErrorComponent>{errorImage}</ErrorComponent>}
        {errorUser && <ErrorComponent>{errorUser}</ErrorComponent>}
        {(loadingUploadingImage || loadingUser) && (
          <LoadingComponent>
            <ClipLoader
              color={"#36d7b7"}
              loadingUser={loadingUser}
              size={70}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </LoadingComponent>
        )}
        <Form onSubmit={handleSubmit}>
          <InputContainer>
            <Label>Name</Label>
            <Input
              name="name"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <Label>User Name</Label>
            <Input
              name="username"
              type="text"
              onChange={(e) => setUserName(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <Label>Email</Label>
            <Input
              name="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <Label>Password</Label>
            <Input
              name="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <Label>Avatar</Label>
            <Input name="image" type="file" onChange={uploadProfile} />
          </InputContainer>

          <Button>SignUp</Button>
          <LoginLink to="/login">Have an account? Login</LoginLink>
          <SignInOptionContainer>
            <SignInOption>
              <GoogleIcon fontSize="large" style={{ color: "#4285F4" }} />
              <SignInParagraph>Sign up with Google</SignInParagraph>
            </SignInOption>
            <SignInOption>
              <FacebookIcon fontSize="large" style={{ color: " #1877F2" }} />
              <SignInParagraph>Sign up with Facebook</SignInParagraph>
            </SignInOption>
            <SignInOption>
              <LinkedInIcon fontSize="large" style={{ color: "#0A66C2" }} />
              <SignInParagraph>Sign up with LinkedIn</SignInParagraph>
            </SignInOption>
          </SignInOptionContainer>
        </Form>
        {isEmailSent && (
          <EmailSentComponent>
            <EmailSentText>
              Email sent to your email account to verify
            </EmailSentText>
          </EmailSentComponent>
        )}
      </Wrapper>
    </SignUpContainer>
  );
};

export default SignUpPage;
