import React, { useState } from "react";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

function CareerOpening() {
  const [openTab, setOpenTab] = useState(2);
  return (
    <>
      <div className="px-5 2xl:px-40 py-10">
        <div className="flex flex-col text-center text-4xl font-extrabold">
          <p className="text-xl font-semibold text-neocon_black py-2 ">
            Come Join Us
          </p>

          <p>
            Career &nbsp;
            <span className="text-neocon_green">Openings</span>
          </p>
          <div className="xsm:text-xs sm:text-xs text-sm font-normal text-neocon_gray py-5">
            <p>
              We’re always looking for creative, talented self-starters to join
              the
            </p>
            <p>
              NEOCON family. Check out our open roles below and fill out an
              application.
            </p>
          </div>
        </div>

        <div className="flex justify-between xsm:flex-col">
          <div className="w-2/12 my-auto">
            <ul className="flex flex-col list-none text-start py-4 xsm:text-xs sm:text-xs lg:text-xs xl:text-sm text-lg font-medium">
              <li className="w-full xsm:w-auto sm:w-auto my-1 ">
                <a
                  className={
                    "" +
                    (openTab === 1
                      ? "text-neocon_green "
                      : "text-neocon_black ")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  href="#link1"
                  role="tablist"
                >
                  Hr & Admin
                </a>
              </li>
              <li className="w-full xsm:w-auto sm:w-auto my-1 ">
                <a
                  className={
                    "" +
                    (openTab === 2 ? "text-neocon_green " : "text-neocon_black")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  href="#link2"
                  role="tablist"
                >
                  Engineering (06)
                </a>
              </li>
              <li className="w-full xsm:w-auto sm:w-auto my-1 ">
                <a
                  className={
                    "" +
                    (openTab === 3 ? "text-neocon_green " : "text-neocon_black")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  href="#link3"
                  role="tablist"
                >
                  Support
                </a>
              </li>
              <li className="w-full xsm:w-auto sm:w-auto my-1 ">
                <a
                  className={
                    "" +
                    (openTab === 4
                      ? "text-neocon_green "
                      : "text-neocon_black ")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  href="#link4"
                  role="tablist"
                >
                  Server Technology
                </a>
              </li>
              <li className="w-full xsm:w-auto sm:w-auto my-1 ">
                <a
                  className={
                    "" +
                    (openTab === 5 ? "text-neocon_green" : "text-neocon_black")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  href="#link5"
                  role="tablist"
                >
                  Design
                </a>
              </li>
              <li className="w-full xsm:w-auto sm:w-auto my-1 ">
                <a
                  className={
                    "" +
                    (openTab === 6 ? "text-neocon_green " : "text-neocon_black")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  href="#link6"
                  role="tablist"
                >
                  Digital Marketing
                </a>
              </li>
            </ul>
          </div>
          <div className="relative w-full px-10 xsm:px-0">
            <div className=" flex justify-center ">
              <div className="tab-content tab-space  w-full">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <p>profile</p>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <div className="flex flex-col xsm:py-0 py-10 w-full">
                    <Link href="/careerproductdesigner">
                      <div className="border flex justify-between xsm:flex-col  w-full bg-white rounded-2xl py-5 xsm:px-5 px-10 my-2 text-lg font-semibold">
                        <p className="my-auto">Backend Developer</p>
                        <div className="flex flex-col">
                          <p className="text-sm font-normal text-neocon_gray">
                            Experience
                          </p>
                          <p>3 years</p>
                        </div>
                        <div className="flex flex-col">
                          <p className="text-sm font-normal text-neocon_gray">
                            Dead line
                          </p>
                          <p>13/07/2023</p>
                        </div>
                        <div className="xsm:flex xsm:justify-end my-auto">
                          <BsArrowDownRight className="my-auto text-neocon_green text-xl" />
                        </div>
                      </div>
                    </Link>
                    <Link href="/careerproductdesigner">
                      <div className="border flex justify-between xsm:flex-col  w-full bg-white rounded-2xl py-5 xsm:px-5 px-10 my-2 text-lg font-semibold">
                        <p className="my-auto">Backend Developer</p>
                        <div className="flex flex-col">
                          <p className="text-sm font-normal text-neocon_gray">
                            Experience
                          </p>
                          <p>3 years</p>
                        </div>
                        <div className="flex flex-col">
                          <p className="text-sm font-normal text-neocon_gray">
                            Dead line
                          </p>
                          <p>13/07/2023</p>
                        </div>
                        <div className="xsm:flex xsm:justify-end my-auto">
                          <BsArrowDownRight className="my-auto text-neocon_green text-xl" />
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <p>option</p>
                </div>
                <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                  <p>profile</p>
                </div>
                <div className={openTab === 5 ? "block" : "hidden"} id="link5">
                  <p>settings</p>
                </div>
                <div className={openTab === 6 ? "block" : "hidden"} id="link6">
                  <p>option</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CareerOpening;
