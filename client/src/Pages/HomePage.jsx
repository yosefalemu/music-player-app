import React, { useEffect } from "react";
import NavBar from "../Components/NavBar";
import Landing from "../Components/Landing";
import AboutUs from "../Components/AboutUs";
import DowloadOption from "../Components/DowloadOption";
import ContactUs from "../Components/ContactUs";

const HomePage = () => {
  console.log("home page");
  return (
    <>
      <NavBar />
      <Landing />
      <AboutUs />
      <DowloadOption />
      <ContactUs />
    </>
  );
};

export default HomePage;
