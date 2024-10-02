import React, { useState } from "react";
import AboutUs from "./AboutUs";
import Director from "./Director";
import Team from "./Team";

function Section() {
  const [openTab, setOpenTab] = useState(1);
  return (
    <>
      <div>
        <div className="">
          <div className="px-5 2xl:px-60 ">
            <ul className="flex justify-between list-none py-4 mx-60 xsm:mx-0 sm:mx-0 md:mx-10 xsm:mb-10  mb-20 xsm:text-xs sm:text-xs lg:text-xs xl:text-sm text-lg font-medium xsm:overflow-x-scroll xsm:scrollbar-hide sm:overflow-x-scroll sm:scrollbar-hide">
              <li className="text-center w-full xsm:w-auto sm:w-auto my-auto">
                <a
                  className={
                    "xsm:px-5 sm:px-5 px-2 py-3 mx-5 xsm:mx-0 sm:mx-0 shadow-lg rounded-3xl block " +
                    (openTab === 1
                      ? "text-white bg-neocon_green shadow-md shadow-neocon_green_200"
                      : "text-neocon_green bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  href="#link1"
                  role="tablist"
                >
                  About Us
                </a>
              </li>
              <li className="text-center w-full xsm:w-auto sm:w-auto my-auto">
                <a
                  className={
                    "xsm:px-5 sm:px-5  px-2 py-3 mx-5 xsm:mx-0 sm:mx-0 shadow-lg rounded-3xl block " +
                    (openTab === 2
                      ? "text-white bg-neocon_green shadow-md shadow-neocon_green_200"
                      : "text-neocon_green bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  href="#link2"
                  role="tablist"
                >
                  Board of Directors
                </a>
              </li>
              <li className="text-center w-full xsm:w-auto sm:w-auto my-auto">
                <a
                  className={
                    "xsm:px-5 sm:px-5  px-2 py-3 mx-5 xsm:mx-0 sm:mx-0 shadow-lg rounded-3xl block " +
                    (openTab === 3
                      ? "text-white bg-neocon_green shadow-md shadow-neocon_green_200"
                      : "text-neocon_green bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(3);
                  }}
                  href="#link3"
                  role="tablist"
                >
                  Team
                </a>
              </li>
            </ul>
          </div>

          <div className="relative">
            <div className=" flex justify-center">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <AboutUs />
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <Director />
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <Team />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section;
