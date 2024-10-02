import React from "react";
import AboutUs from "./Homepage/AboutUs";
import Client from "./Homepage/Client";
import ContactUs from "./Homepage/ContactUs";
import Factors from "./Homepage/Factors";
import Feature from "./Homepage/Feature";
import Feedback from "./Homepage/Feedback";
import Hero from "./Homepage/Hero";
import Product from "./Homepage/Product";
import Service from "./Homepage/Service";
import Technology from "./Homepage/Technology";

function Mainsection() {
  return (
    <>
      <Hero />
      <Feature />
      <Service />
      <AboutUs />
      <Product />
      <Technology />
      <Feedback />
      <Client />
      <Factors />
      <ContactUs />
    </>
  );
}

export default Mainsection;
