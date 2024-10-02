import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Star_t from "../../public/assets/images/Career/bg_start_t.png";
import { RxDotFilled } from "react-icons/rx";
import { ImLocation } from "react-icons/im";
import { FaBriefcase } from "react-icons/fa";
import { BsCalendar3 } from "react-icons/bs";
import { TfiBriefcase } from "react-icons/tfi";
import { GiSofa } from "react-icons/gi";
import { AiFillBook, AiFillClockCircle, AiOutlineClose } from "react-icons/ai";
import Apply from "./Apply";
import Link from "next/link";
import ContactUs from "../Homepage/ContactUs";
function Job() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className="bg-gradient-to-b from-neocon_g_gw via-neocon_g_g to-neocon_g_w">
        <div className="px-5 2xl:px-40 ">
          <Image
            src={Star_t}
            alt="stars top"
            quality={100}
            className="w-4/12 xsm:hidden sm:hidden md:block lg:block xl:block 2xl:block"
          />
          <div className="text-center xsm:text-sm sm:text-sm text-xl py-10 mb-20 xsm:mb-0 sm:mb-0">
            <p>Home/Careers/Career Product Design</p>
            <p className="text-4xl xsm:text-2xl sm:text-2xl font-extrabold">
              Apply For &nbsp;
              <span className="text-neocon_green">Product Designer</span>
            </p>
          </div>
          <div className="flex justify-between xsm:flex-col sm:flex-col w-full">
            <div className="flex flex-col w-6/12 lg:w-7/12 md:w-7/12 xsm:w-full sm:w-full">
              <p className="text-4xl xsm:text-2xl sm:text-2xl font-extrabold pb-5 xsm:pb-0 sm:pb-0">
                Product Designer
              </p>
              <p className="text-2xl xsm:text-lg sm:text-lg font-semibold py-5">
                Who Are We Looking For?
              </p>
              <ul>
                <li className="flex flex-row text-neocon_gray text-xs">
                  <RxDotFilled className="" size="20" />
                  <p>
                    Nam pellent, sit amet elementum augue venenatis orci ut.
                  </p>
                </li>
                <li className="flex flex-row text-neocon_gray text-xs">
                  <RxDotFilled className="" size="20" />
                  <p>
                    Nam pellentesque orci ut odt, sit amet elementum augue
                    venenatis orci ut.
                  </p>
                </li>
                <li className="flex flex-row text-neocon_gray text-xs">
                  <RxDotFilled className="" size="20" />
                  <p>
                    Nam pellentesquet odio blandit, sit amet elementum augue
                    venenatis orci ut.
                  </p>
                </li>
                <li className="flex flex-row text-neocon_gray text-xs">
                  <RxDotFilled className="" size="20" />
                  <p>
                    Nam pellentesque orci ut odio bmet elementum augue venenatis
                    orci ut.
                  </p>
                </li>
                <li className="flex flex-row text-neocon_gray text-xs">
                  <RxDotFilled className="" size="20" />
                  <p>
                    Nam pellentesque orci ut odandit, sit amet elementum augue
                    venenatis orci ut.
                  </p>
                </li>
                <li className="flex flex-row text-neocon_gray text-xs">
                  <RxDotFilled className="" size="20" />
                  <p>
                    Nam pellentesque orci ut odio blaamet elementum augue
                    venenatis orci ut.
                  </p>
                </li>
                <li className="flex flex-row text-neocon_gray text-xs">
                  <RxDotFilled className="" size="20" />
                  <p>
                    Nam pellentesque orci ut odio blandit, sit amet elementum
                    augue venenatis orci ut.
                  </p>
                </li>
                <li className="flex flex-row text-neocon_gray text-xs">
                  <RxDotFilled className="" size="20" />
                  <p>
                    Nam pellentesque orci ut amet elementum augue venenatis orci
                    ut.
                  </p>
                </li>
                <li className="flex flex-row text-neocon_gray text-xs">
                  <RxDotFilled className="" size="20" />
                  <p>
                    Nam pellentesque orci ut odio blandit, sit amet elementum
                    augue venenatis orci ut.
                  </p>
                </li>
                <li className="flex flex-row text-neocon_gray text-xs">
                  <RxDotFilled className="" size="20" />
                  <p>
                    Nam pellentesque orci ut elementum augue venenatis orci ut.
                  </p>
                </li>
              </ul>
              <p className="text-2xl xsm:text-lg sm:text-lg font-semibold py-5">
                What You Will Be Doing ?
              </p>
              <ul>
                <li className="flex flex-row text-neocon_gray text-xs">
                  <RxDotFilled className="" size="20" />
                  <p>
                    Nam pellentesquet odio blandit, sit amet elementum augue
                    venenatis orci ut.
                  </p>
                </li>
                <li className="flex flex-row text-neocon_gray text-xs">
                  <RxDotFilled className="" size="20" />
                  <p>
                    Nam pellentesque orci ut odio bmet elementum augue venenatis
                    orci ut.
                  </p>
                </li>
                <li className="flex flex-row text-neocon_gray text-xs">
                  <RxDotFilled className="" size="20" />
                  <p>
                    Nam pellentesque orci ut odandit, sit amet elementum augue
                    venenatis orci ut.
                  </p>
                </li>
                <li className="flex flex-row text-neocon_gray text-xs">
                  <RxDotFilled className="" size="20" />
                  <p>
                    Nam pellentesque orci ut odio blaamet elementum augue
                    venenatis orci ut.
                  </p>
                </li>
                <li className="flex flex-row text-neocon_gray text-xs">
                  <RxDotFilled className="" size="20" />
                  <p>
                    Nam pellentesque orci ut odio blandit, sit amet elementum
                    augue venenatis orci ut.
                  </p>
                </li>
                <li className="flex flex-row text-neocon_gray text-xs">
                  <RxDotFilled className="" size="20" />
                  <p>
                    Nam pellentesque orci ut amet elementum augue venenatis orci
                    ut.
                  </p>
                </li>
                <li className="flex flex-row text-neocon_gray text-xs">
                  <RxDotFilled className="" size="20" />
                  <p>
                    Nam pellentesque orci ut odio blandit, sit amet elementum
                    augue venenatis orci ut.
                  </p>
                </li>
                <li className="flex flex-row text-neocon_gray text-xs">
                  <RxDotFilled className="" size="20" />
                  <p>
                    Nam pellentesque orci ut elementum augue venenatis orci ut.
                  </p>
                </li>
              </ul>
              <p className="text-2xl font-semibold py-5">
                Educational Requirement
              </p>
              <p className="text-neocon_gray text-sm">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going
              </p>
            </div>
            <div className="  flex flex-col  md:w-5/12 xl:w-4/12 2xl:w-3/12 xsm:w-full  sm:w-full">
              <div className="border rounded-3xl px-5 py-10 bg-white xsm:my-5 sm:my-5">
                <p className="text-xl font-bold">
                  Job <span className="text-neocon_green">Summary</span>
                </p>
                <div className="flex flex-row my-3">
                  <ImLocation className="mt-1 text-base" />
                  <div className="flex flex-col text-sm mx-2">
                    <p className="text-neocon_gray ">Location</p>
                    <p className="font-medium">
                      Forum Central (7th floor), 21/22 <br />
                      M.M Ali Road, Golpahar Circle, Mehedibag
                    </p>
                  </div>
                </div>
                <div className="flex flex-row my-3">
                  <FaBriefcase className="mt-1 text-base" />
                  <div className="flex flex-col text-sm mx-2">
                    <p className="text-neocon_gray ">Job Type</p>
                    <p className="font-medium">Full Time</p>
                  </div>
                </div>
                <div className="flex flex-row my-3">
                  <BsCalendar3 className="mt-1 text-base" />
                  <div className="flex flex-col text-sm mx-2">
                    <p className="text-neocon_gray ">Date Posted</p>
                    <p className="font-medium">Poster 1 month ago</p>
                  </div>
                </div>
                <div className="flex flex-row my-3">
                  <AiFillBook className="mt-1 text-base" />
                  <div className="flex flex-col text-sm mx-2">
                    <p className="text-neocon_gray ">Experience</p>
                    <p className="font-medium">Experience: 1-3 years</p>
                  </div>
                </div>
                <div className="flex flex-row my-3">
                  <AiFillClockCircle className="mt-1 text-base" />
                  <div className="flex flex-col text-sm mx-2">
                    <p className="text-neocon_gray ">Working Hours</p>
                    <p className="font-medium">09:00 AM - 06.00 PM</p>
                  </div>
                </div>
                <div className="flex flex-row my-3">
                  <TfiBriefcase className="mt-1 text-base" />
                  <div className="flex flex-col text-sm mx-2">
                    <p className="text-neocon_gray ">Working Days</p>
                    <p className="font-medium">Weekly: 5 Days</p>
                    <p className="font-medium">Weekend: Friday, Saturday</p>
                  </div>
                </div>
                <div className="flex flex-row my-3">
                  <GiSofa className="mt-1 text-base" />
                  <div className="flex flex-col text-sm mx-2">
                    <p className="text-neocon_gray ">Vacancy</p>
                    <p className="font-medium">No. of Vacancy: 3</p>
                  </div>
                </div>
                <div className="flex flex-row my-3">
                  <button
                    className="bg-neocon_black text-white rounded-3xl px-5 py-2"
                    onClick={openModal}
                  >
                    Apply Now
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center "
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <div className="bg-white w-full shadow-lg p-6 mx-5 2xl:mx-60 rounded-3xl">
                          <button
                            className="w-full flex justify-end"
                            onClick={closeModal}
                          >
                            <AiOutlineClose className="text-2xl" />
                          </button>
                          <div className="text-center xsm:my-2 sm:my-2 my-10">
                            <p className="xsm:text-xl text-2xl font-bold">
                              Please Submit Your &nbsp;
                              <span className="text-neocon_green">CV</span>
                            </p>
                            <p className="text-neocon_gray font-normal text-base">
                              Select relevant documents to complete your submit
                            </p>
                          </div>
                          <div className="2xl:px-60 xsm:px-2 sm:px-2 px-5 my-20 xsm:my-5 sm:my-5">
                            <Apply />
                          </div>
                          <div className="w-full flex justify-center my-10 xsm:my-2 sm:my-2">
                            <button
                              className="  text-xl border rounded-2xl text-center px-5 py-3 text-white bg-neocon_black hover:bg-neocon_blue_200 duration-700 "
                              onClick={closeModal}
                            >
                              Submit Now
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <div className="flex flex-row mt-10">
                  <Link
                    href="/career"
                    className="text-neocon_green underline text-sm"
                  >
                    View all jobs
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between xsm:flex-col sm:flex-col w-full py-5">
            <div className="flex flex-col ">
              <p className="text-2xl font-semibold">Salary</p>
              <ul className="py-3">
                <li className="flex flex-row text-neocon_gray text-xs">
                  <RxDotFilled className="" size="20" />
                  <p>
                    Salary: 18,000 to 35,000 BDT (Depends on Skill and
                    Experience)
                  </p>
                </li>
                <li className="flex flex-row text-neocon_gray text-xs">
                  <RxDotFilled className="" size="20" />
                  <p>Salary Review: Yearly</p>
                </li>
              </ul>
            </div>
            <div className="flex flex-col ">
              <p className="text-2xl font-semibold">Working Hours</p>
              <ul className="py-3">
                <li className="flex flex-row text-neocon_gray text-xs">
                  <RxDotFilled className="" size="20" />
                  <p>9:00 AM – 6:00 PM</p>
                </li>
              </ul>
            </div>
            <div className="flex flex-col ">
              <p className="text-2xl font-semibold">Working Days</p>
              <ul className="py-3">
                <li className="flex flex-row text-neocon_gray text-xs">
                  <RxDotFilled className="" size="20" />
                  <p>Weekly: 5 days.</p>
                </li>
                <li className="flex flex-row text-neocon_gray text-xs">
                  <RxDotFilled className="" size="20" />
                  <p>Weekend: Friday.Saturday</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="my-20 border-t-2  w-full"></div>
          <div className="flex flex-col">
            <p className="text-2xl font-semibold">Our Statement</p>
            <p className="text-base text-neocon_gray py-3 mb-5">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going
            </p>
          </div>
        </div>
      </div>

      <ContactUs />
    </>
  );
}

export default Job;
