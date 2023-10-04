import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  margin: 0;
`;

const Wrapper = styled.div`
  width: 100%;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  padding-top: 150px;
  position: relative;
`;

const Header = styled.h1`
  text-align: center;
  margin-bottom: 150px;
  position: relative;
`;
const Underline = styled.div`
  width: 150px;
  height: 5px;
  background-color: #20c997;
  position: absolute;
  bottom: -20px;
  left: 50%;
  border-radius: 15px;
  transform: translateX(-50%);
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 30px;
`;

const RowComponent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-left: 40px;
  margin-right: 25px;
`;

const RowLeft = styled.div`
  margin-right: 50px;
`;

const RowRight = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactOverLay = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  position: absolute;
  color: white;
  font-size: 150px;
  text-align: center;
  padding-top: 100px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
`;
const ContactUs = () => {
  return (
    <Container>
      <Wrapper>
        <Header>
          Get In Touch
          <Underline />
        </Header>
        <Row>
          <RowComponent>
            <RowLeft></RowLeft>
            <RowRight></RowRight>
          </RowComponent>
          <RowComponent>
            <RowLeft></RowLeft>
            <RowRight></RowRight>
          </RowComponent>
        </Row>
        <ContactOverLay>Contact Us</ContactOverLay>
      </Wrapper>
    </Container>
  );
};

export default ContactUs;
