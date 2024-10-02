import React from "react";
import AllService from "./AllServices/AllService";
import Hero from "./AllServices/Hero";
import Factors from "./Homepage/Factors";
import MeetingTable from "./AllServices/MeetingTable";
import CustomerFeedback from "./AllServices/CustomerFeedback";
import CaseStudies from "./AllServices/CaseStudies";
import ContactUs from "./Homepage/ContactUs";

function ServiceMainsection() {
  return (
    <>
      <Hero />
      <AllService />
      <Factors />
      {/* <MeetingTable /> */}
      <ContactUs />
      <CaseStudies />
      {/* <CustomerFeedback /> */}
    </>
  );
}

export default ServiceMainsection;
