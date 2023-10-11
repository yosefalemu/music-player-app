import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 66px;
  background-color: #212529;
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 10px 20px 10px 100px;
  display: flex;
  align-items: center;
`;

const Left = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const CompanyName = styled.span`
  font-size: 28px;
  cursor: pointer;
  font-weight: normal;
  color: #ffffff;
`;
const AuthenticationContainer = styled(Link)`
  width: fit-content;
  padding: 12px 25px;
  border: 2px solid green;
  border-radius: 10px;
  margin-right: 25px;
  color: #20c997;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    background-color: #20c997;
    color: #ffffff;
  }
`;

const AuthenticationText = styled.div`
  font-size: 18px;
  cursor: pointer;
`;

const NavBar = () => {
  console.log("nav bar");
  return (
    <Container>
      <Wrapper>
        <Left>
          <CompanyName>ADDISMUSIC</CompanyName>
        </Left>
        <Right>
          <AuthenticationContainer to="/login">
            <AuthenticationText>LOGIN</AuthenticationText>
          </AuthenticationContainer>
          <AuthenticationContainer to="/signup">
            <AuthenticationText>SIGNUP</AuthenticationText>
          </AuthenticationContainer>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
