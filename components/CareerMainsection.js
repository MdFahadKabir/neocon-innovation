import React from "react";
import Benefit from "./Careerpage/Benefit";
import CareerOpening from "./Careerpage/CareerOpening";
import Carousel from "./Careerpage/Carousel";
import Hero from "./Careerpage/Hero";
import ContactUs from "./Homepage/ContactUs";

function CareerMainsection() {
  return (
    <>
      <Hero />
      <CareerOpening/>
      <Benefit/>
      <ContactUs/>
      {/* <Carousel /> */}
    </>
  );
}

export default CareerMainsection;
