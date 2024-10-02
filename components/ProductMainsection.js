import React from "react";
import Hero from "./AllProducts/Hero";
import AllProducts from "./AllProducts/AllProducts";
import CustomerFeedback from "./AllServices/CustomerFeedback";
import CaseStudies from "./AllServices/CaseStudies";

function ProductMainsection() {
  return (
    <>
      <Hero />
      <AllProducts />
      {/* <CustomerFeedback/>
      <CaseStudies/> */}
    </>
  );
}

export default ProductMainsection;
