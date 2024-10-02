import React, { useState } from "react";
import Image from "next/image";
import Vuejs from "../../public/assets/images/Home/technology/vuejs.png";
import Tailwind from "../../public/assets/images/Home/technology/tailwind.png";
import Reactjs from "../../public/assets/images/Home/technology/react.png";
import Materialize from "../../public/assets/images/Home/technology/materialize.png";
import Js from "../../public/assets/images/Home/technology/js.png";
import Html from "../../public/assets/images/Home/technology/html.png";
import Css from "../../public/assets/images/Home/technology/css.png";
import Stars_t from "../../public/assets/images/Home/technology/stars_t.png";

function Technology() {
  const [openTab, setOpenTab] = useState(2);
  return (
    <>
      <div className="bg-gradient-to-t from-neocon_g_gw  to-neocon_g_w">
        <div className="px-5 2xl:px-40 py-10">
          <div className="flex justify-end">
            <Image
              src={Stars_t}
              alt="stars top"
              quality={100}
              className="w-4/12 xsm:hidden sm:hidden md:block lg:block xl:block 2xl:block"
            />
          </div>
          <div className="flex flex-col text-center xsm:text-3xl sm:text-3xl text-4xl font-extrabold">
            <p className="">
              Technology We&nbsp;
              <span className="text-neocon_green">Use</span>
            </p>
            <div className="pt-10">
              <ul className="flex justify-between list-none py-4 xsm:text-xs sm:text-xs lg:text-xs xl:text-sm text-lg font-medium xsm:overflow-x-scroll xsm:scrollbar-hide sm:overflow-x-scroll sm:scrollbar-hide">
                <li className="text-center w-full xsm:w-auto sm:w-auto my-auto">
                  <a
                    className={
                      "xsm:px-10 sm:px-10 px-2 py-3 mx-2 shadow-lg rounded-3xl block " +
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
                    UI UX Design
                  </a>
                </li>
                <li className="text-center w-full xsm:w-auto sm:w-auto my-auto">
                  <a
                    className={
                      "xsm:px-10 sm:px-10 md:px-5 px-2 py-3 mx-2 shadow-lg rounded-3xl block " +
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
                    Frontend design
                  </a>
                </li>
                <li className="text-center w-full xsm:w-auto sm:w-auto my-auto">
                  <a
                    className={
                      "xsm:px-10 sm:px-10 md:px-5 px-2 py-3 mx-2 shadow-lg rounded-3xl block " +
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
                    Backend design
                  </a>
                </li>
                <li className="text-center w-full xsm:w-auto sm:w-auto my-auto">
                  <a
                    className={
                      "xsm:px-10 sm:px-10 md:px-5 px-2 py-3 mx-2 shadow-lg rounded-3xl block " +
                      (openTab === 4
                        ? "text-white bg-neocon_green shadow-md shadow-neocon_green_200"
                        : "text-neocon_green bg-white")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(4);
                    }}
                    href="#link4"
                    role="tablist"
                  >
                    Server Technology
                  </a>
                </li>
                <li className="text-center w-full xsm:w-auto sm:w-auto my-auto">
                  <a
                    className={
                      "xsm:px-10 sm:px-10 md:px-5 px-2 py-3 mx-2 shadow-lg rounded-3xl block " +
                      (openTab === 5
                        ? "text-white bg-neocon_green shadow-md shadow-neocon_green_200"
                        : "text-neocon_green bg-white")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(5);
                    }}
                    href="#link5"
                    role="tablist"
                  >
                    Smart Home
                  </a>
                </li>
                <li className="text-center w-full xsm:w-auto sm:w-auto my-auto">
                  <a
                    className={
                      "xsm:px-10 sm:px-10 md:px-5 px-2 py-3 mx-2 shadow-lg rounded-3xl block " +
                      (openTab === 6
                        ? "text-white bg-neocon_green shadow-md shadow-neocon_green_200"
                        : "text-neocon_green bg-white")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(6);
                    }}
                    href="#link6"
                    role="tablist"
                  >
                    Mobile Development
                  </a>
                </li>
              </ul>

              <div className="relative">
                <div className=" flex justify-center">
                  <div className="tab-content tab-space">
                    <div
                      className={openTab === 1 ? "block" : "hidden"}
                      id="link1"
                    >
                      <div className="flex flex-row py-10">
                        <div className="shadow-sm rounded-3xl w-full mx-2">
                          <Image
                            src={Html}
                            alt="Html"
                            quality={100}
                            className="xsm:w-auto xsm:h-auto xl:w-32 2xl:w-32"
                          />
                        </div>
                        <div className="shadow-sm rounded-3xl w-full mx-2">
                          <Image
                            src={Css}
                            alt="css"
                            quality={100}
                            className="xsm:w-auto xsm:h-auto xl:w-32 2xl:w-32"
                          />
                        </div>
                        <div className="shadow-sm rounded-3xl w-full mx-2">
                          <Image
                            src={Tailwind}
                            alt="tailwind"
                            quality={100}
                            className="xsm:w-auto xsm:h-auto xl:w-32 2xl:w-32"
                          />
                        </div>
                        <div className="shadow-sm rounded-3xl w-full mx-2">
                          <Image
                            src={Materialize}
                            alt="materialize"
                            quality={100}
                            className="xsm:w-auto xsm:h-auto xl:w-32 2xl:w-32"
                          />
                        </div>
                        <div className="shadow-sm rounded-3xl w-full mx-2">
                          <Image
                            src={Reactjs}
                            alt="react js"
                            quality={100}
                            className="xsm:w-auto xsm:h-auto xl:w-32 2xl:w-32"
                          />
                        </div>
                        <div className="shadow-sm rounded-3xl w-full mx-2">
                          <Image
                            src={Js}
                            alt="js"
                            quality={100}
                            className="xsm:w-auto xsm:h-auto xl:w-32 2xl:w-32"
                          />
                        </div>
                        <div className="shadow-sm rounded-3xl w-full mx-2">
                          <Image
                            src={Vuejs}
                            alt="vue js"
                            quality={100}
                            className="xsm:w-auto xsm:h-auto xl:w-32 2xl:w-32"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className={openTab === 2 ? "block" : "hidden"}
                      id="link2"
                    >
                      <div className="flex flex-row py-10">
                        <div className="shadow-sm rounded-3xl w-full mx-2">
                          <Image
                            src={Html}
                            alt="Html"
                            quality={100}
                            className="xsm:w-auto xsm:h-auto xl:w-32 2xl:w-32"
                          />
                        </div>
                        <div className="shadow-sm rounded-3xl w-full mx-2">
                          <Image
                            src={Css}
                            alt="css"
                            quality={100}
                            className="xsm:w-auto xsm:h-auto xl:w-32 2xl:w-32"
                          />
                        </div>
                        <div className="shadow-sm rounded-3xl w-full mx-2">
                          <Image
                            src={Tailwind}
                            alt="tailwind"
                            quality={100}
                            className="xsm:w-auto xsm:h-auto xl:w-32 2xl:w-32"
                          />
                        </div>
                        <div className="shadow-sm rounded-3xl w-full mx-2">
                          <Image
                            src={Materialize}
                            alt="materialize"
                            quality={100}
                            className="xsm:w-auto xsm:h-auto xl:w-32 2xl:w-32"
                          />
                        </div>
                        <div className="shadow-sm rounded-3xl w-full mx-2">
                          <Image
                            src={Reactjs}
                            alt="react js"
                            quality={100}
                            className="xsm:w-auto xsm:h-auto xl:w-32 2xl:w-32"
                          />
                        </div>
                        <div className="shadow-sm rounded-3xl w-full mx-2">
                          <Image
                            src={Js}
                            alt="js"
                            quality={100}
                            className="xsm:w-auto xsm:h-auto xl:w-32 2xl:w-32"
                          />
                        </div>
                        <div className="shadow-sm rounded-3xl w-full mx-2">
                          <Image
                            src={Vuejs}
                            alt="vue js"
                            quality={100}
                            className="xsm:w-auto xsm:h-auto xl:w-32 2xl:w-32"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className={openTab === 3 ? "block" : "hidden"}
                      id="link3"
                    >
                      <div className="flex flex-row py-10">
                        <div className="shadow-sm rounded-3xl w-full mx-2">
                          <Image
                            src={Html}
                            alt="Html"
                            quality={100}
                            className="xsm:w-auto xsm:h-auto xl:w-32 2xl:w-32"
                          />
                        </div>
                        <div className="shadow-sm rounded-3xl w-full mx-2">
                          <Image
                            src={Css}
                            alt="css"
                            quality={100}
                            className="xsm:w-auto xsm:h-auto xl:w-32 2xl:w-32"
                          />
                        </div>
                        <div className="shadow-sm rounded-3xl w-full mx-2">
                          <Image
                            src={Tailwind}
                            alt="tailwind"
                            quality={100}
                            className="xsm:w-auto xsm:h-auto xl:w-32 2xl:w-32"
                          />
                        </div>
                        <div className="shadow-sm rounded-3xl w-full mx-2">
                          <Image
                            src={Materialize}
                            alt="materialize"
                            quality={100}
                            className="xsm:w-auto xsm:h-auto xl:w-32 2xl:w-32"
                          />
                        </div>
                        <div className="shadow-sm rounded-3xl w-full mx-2">
                          <Image
                            src={Reactjs}
                            alt="react js"
                            quality={100}
                            className="xsm:w-auto xsm:h-auto xl:w-32 2xl:w-32"
                          />
                        </div>
                        <div className="shadow-sm rounded-3xl w-full mx-2">
                          <Image
                            src={Js}
                            alt="js"
                            quality={100}
                            className="xsm:w-auto xsm:h-auto xl:w-32 2xl:w-32"
                          />
                        </div>
                        <div className="shadow-sm rounded-3xl w-full mx-2">
                          <Image
                            src={Vuejs}
                            alt="vue js"
                            quality={100}
                            className="xsm:w-auto xsm:h-auto xl:w-32 2xl:w-32"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className={openTab === 4 ? "block" : "hidden"}
                      id="link4"
                    >
                      <div className="flex flex-row py-10">
                        <div className="shadow-sm rounded-3xl w-full mx-2">
                          <Image
                            src={Html}
                            alt="Html"
                            quality={100}
                            className="xsm:w-auto xsm:h-auto xl:w-32 2xl:w-32"
                          />
                        </div>
                        <div className="shadow-sm rounded-3xl w-full mx-2">
                          <Image
                            src={Css}
                            alt="css"
                            quality={100}
                            className="xsm:w-auto xsm:h-auto xl:w-32 2xl:w-32"
                          />
                        </div>
                        <div className="shadow-sm rounded-3xl w-full mx-2">
                          <Image
                            src={Tailwind}
                            alt="tailwind"
                            quality={100}
                            className="xsm:w-auto xsm:h-auto xl:w-32 2xl:w-32"
                          />
                        </div>
                        <div className="shadow-sm rounded-3xl w-full mx-2">
                          <Image
                            src={Materialize}
                            alt="materialize"
                            quality={100}
                            className="xsm:w-auto xsm:h-auto xl:w-32 2xl:w-32"
                          />
                        </div>
                        <div className="shadow-sm rounded-3xl w-full mx-2">
                          <Image
                            src={Reactjs}
                            alt="react js"
                            quality={100}
                            className="xsm:w-auto xsm:h-auto xl:w-32 2xl:w-32"
                          />
                        </div>
                        <div className="shadow-sm rounded-3xl w-full mx-2">
                          <Image
                            src={Js}
                            alt="js"
                            quality={100}
                            className="xsm:w-auto xsm:h-auto xl:w-32 2xl:w-32"
                          />
                        </div>
                        <div className="shadow-sm rounded-3xl w-full mx-2">
                          <Image
                            src={Vuejs}
                            alt="vue js"
                            quality={100}
                            className="xsm:w-auto xsm:h-auto xl:w-32 2xl:w-32"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className={openTab === 5 ? "block" : "hidden"}
                      id="link5"
                    >
                      <div className="flex flex-row py-10">
                        <div className="shadow-sm rounded-3xl w-full mx-2">
                          <Image
                            src={Html}
                            alt="Html"
                            quality={100}
                            className="xsm:w-auto xsm:h-auto xl:w-32 2xl:w-32"
                          />
                        </div>
                        <div className="shadow-sm rounded-3xl w-full mx-2">
                          <Image
                            src={Css}
                            alt="css"
                            quality={100}
                            className="xsm:w-auto xsm:h-auto xl:w-32 2xl:w-32"
                          />
                        </div>
                        <div className="shadow-sm rounded-3xl w-full mx-2">
                          <Image
                            src={Tailwind}
                            alt="tailwind"
                            quality={100}
                            className="xsm:w-auto xsm:h-auto xl:w-32 2xl:w-32"
                          />
                        </div>
                        <div className="shadow-sm rounded-3xl w-full mx-2">
                          <Image
                            src={Materialize}
                            alt="materialize"
                            quality={100}
                            className="xsm:w-auto xsm:h-auto xl:w-32 2xl:w-32"
                          />
                        </div>
                        <div className="shadow-sm rounded-3xl w-full mx-2">
                          <Image
                            src={Reactjs}
                            alt="react js"
                            quality={100}
                            className="xsm:w-auto xsm:h-auto xl:w-32 2xl:w-32"
                          />
                        </div>
                        <div className="shadow-sm rounded-3xl w-full mx-2">
                          <Image
                            src={Js}
                            alt="js"
                            quality={100}
                            className="xsm:w-auto xsm:h-auto xl:w-32 2xl:w-32"
                          />
                        </div>
                        <div className="shadow-sm rounded-3xl w-full mx-2">
                          <Image
                            src={Vuejs}
                            alt="vue js"
                            quality={100}
                            className="xsm:w-auto xsm:h-auto xl:w-32 2xl:w-32"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className={openTab === 6 ? "block" : "hidden"}
                      id="link6"
                    >
                      <div className="flex flex-row py-10">
                        <div className="shadow-sm rounded-3xl w-full mx-2">
                          <Image
                            src={Html}
                            alt="Html"
                            quality={100}
                            className="xsm:w-auto xsm:h-auto xl:w-32 2xl:w-32"
                          />
                        </div>
                        <div className="shadow-sm rounded-3xl w-full mx-2">
                          <Image
                            src={Css}
                            alt="css"
                            quality={100}
                            className="xsm:w-auto xsm:h-auto xl:w-32 2xl:w-32"
                          />
                        </div>
                        <div className="shadow-sm rounded-3xl w-full mx-2">
                          <Image
                            src={Tailwind}
                            alt="tailwind"
                            quality={100}
                            className="xsm:w-auto xsm:h-auto xl:w-32 2xl:w-32"
                          />
                        </div>
                        <div className="shadow-sm rounded-3xl w-full mx-2">
                          <Image
                            src={Materialize}
                            alt="materialize"
                            quality={100}
                            className="xsm:w-auto xsm:h-auto xl:w-32 2xl:w-32"
                          />
                        </div>
                        <div className="shadow-sm rounded-3xl w-full mx-2">
                          <Image
                            src={Reactjs}
                            alt="react js"
                            quality={100}
                            className="xsm:w-auto xsm:h-auto xl:w-32 2xl:w-32"
                          />
                        </div>
                        <div className="shadow-sm rounded-3xl w-full mx-2">
                          <Image
                            src={Js}
                            alt="js"
                            quality={100}
                            className="xsm:w-auto xsm:h-auto xl:w-32 2xl:w-32"
                          />
                        </div>
                        <div className="shadow-sm rounded-3xl w-full mx-2">
                          <Image
                            src={Vuejs}
                            alt="vue js"
                            quality={100}
                            className="xsm:w-auto xsm:h-auto xl:w-32 2xl:w-32"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Technology;
