import React from "react";
import Image from "next/image";
import Star_t from "../../public/assets/images/Home/hero/bg_start_t.png";
function Hero() {
  return (
    <>
      <div className="bg-gradient-to-b from-neocon_g_fw via-neocon_g_mg to-white">
        <div className="px-5 2xl:px-60 ">
          <Image
            src={Star_t}
            quality={100}
            className="w-1/3 xsm:hidden sm:hidden block"
          />
          <div className="flex justify-center items-center">
            <div className="flex flex-col text-center ">
              <p
                className="text-4xl font-extrabold text-neocon_green
            "
              >
                Company
              </p>
              <p className="text-base xsm:text-xs sm:text-xs font-normal text-neocon_gray mx-auto my-10 xsm:my-5 sm:my-5 w-4/5 xsm:w-full sm:w-full">
                In the future, almost all organizations will need to adopt a
                technology-focused approach to remain competitive, including
                your own. Neocon Technologies is dedicated to supporting
                companies in achieving greater competitiveness and adaptability
                by leveraging software solutions. Our mission is to empower
                organizations to thrive in the digital age by embracing
                technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
