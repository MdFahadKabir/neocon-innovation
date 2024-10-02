import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { motion } from "framer-motion";
import Link from "next/link";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { BsArrowDownRightSquare } from "react-icons/bs";
import StarT from "../../public/assets/images/Home/factors/star_t.png";
import Customer from "../../public/assets/images/Home/factors/customer.png";
import People from "../../public/assets/images/Home/factors/people.png";
import Support from "../../public/assets/images/Home/factors/support.png";

function Factors() {
  return (
    <>
      <div className="bg-gradient-to-t from-neocon_g_sw  to-neocon_g_w ">
        <div className="px-5 2xl:px-40 py-10">
          <div className="flex justify-start">
            <Image
              src={StarT}
              alt="stars top"
              quality={100}
              className="w-4/12 xsm:hidden sm:hidden block"
            />
          </div>
          <div className="flex flex-col text-center xsm:text-base text-4xl font-extrabold">
            <p>Factors that make us best option for</p>
            <p>
              Your&nbsp;
              <span className="text-neocon_green">Business</span>
            </p>
          </div>
          <div className="py-10 flex justify-between xsm:overflow-x-scroll xsm:scrollbar-hide sm:overflow-x-scroll sm:scrollbar-hide w-full">
            <div className="p-5 xsm:py-0 xsm:px-2 xsm:w-auto sm:w-auto w-full">
              <motion.div
                className="xsm:py-3 xsm:px-2 xsm:w-60 sm:py-3 sm:px-2 sm:w-60 md:py-3 md:px-2 lg:py-5 lg:px-4 py-8 px-6 bg-white border-gray-200 drop-shadow-xl dark:bg-white dark:border-gray-200 rounded-3xl text-center "
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  animate={{
                    x: [-5, 5, 5, -5, -5],
                    y: [0, 5, -5, 0, 0],
                    z: [0, 0, 0, 0, 0],
                    transition: { duration: 5, repeat: Infinity },
                  }}
                >
                  <Image
                    src={Customer}
                    alt="customer"
                    quality={100}
                    className="xsm:w-8 md:w-10 w-12 mx-auto"
                  />
                </motion.div>

                <h5 className="my-2 xsm:text-sm md:text-lg text-xl font-semibold tracking-tight text-neocon_black dark:text-neocon_black ">
                  Customers First
                </h5>

                <p className="my-3 xsm:text-xs md:text-xs text-sm font-normal text-gray-500 dark:text-gray-400">
                  At our company, we put our customers first. We understand that
                  the success of our business depends on the satisfaction of our
                  clients. That's why we work tirelessly to ensure that our
                  software solutions are tailored to meet the unique needs of
                  each customer..
                </p>

                <Link
                  href="/"
                  className="text-neocon_green xsm:text-sm md:text-sm"
                >
                  Find Out More
                </Link>
              </motion.div>
            </div>
            <div className="p-5 xsm:py-0 xsm:px-2 xsm:w-auto sm:w-auto w-full">
              <motion.div
                className="xsm:py-3 xsm:px-2 xsm:w-60 sm:py-3 sm:px-2 sm:w-60 md:py-3 md:px-2 lg:py-5 lg:px-4 py-8 px-6 bg-white border-gray-200 drop-shadow-xl dark:bg-white dark:border-gray-200 rounded-3xl text-center "
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  animate={{
                    x: [5, -5, -5, 5, 5],
                    y: [0, -5, 5, 0, 0],
                    z: [0, 0, 0, 0, 0],
                    transition: { duration: 5, repeat: Infinity },
                  }}
                >
                  <Image
                    src={People}
                    alt="people"
                    quality={100}
                    className="xsm:w-8 md:w-10 w-12 mx-auto"
                  />
                </motion.div>

                <h5 className="my-2 xsm:text-sm md:text-lg text-xl font-semibold tracking-tight text-neocon_black dark:text-neocon_black ">
                  Amazing People
                </h5>

                <p className="my-3 xsm:text-xs md:text-xs text-sm font-normal text-gray-500 dark:text-gray-400">
                  Our team is made up of some of the best and brightest minds in
                  the industry. Our developers, designers, Marketer and project
                  managers have years of experience and are experts in their
                  respective fields.
                </p>

                <Link
                  href="/company"
                  className="text-neocon_green xsm:text-sm md:text-sm"
                >
                  Meet The Team
                </Link>
              </motion.div>
            </div>
            <div className="p-5 xsm:py-0 xsm:px-2 xsm:w-auto sm:w-auto w-full">
              <motion.div
                className="xsm:py-3 xsm:px-2 xsm:w-60 sm:py-3 sm:px-2 sm:w-60 md:py-3 md:px-2 lg:py-5 lg:px-4 py-8 px-6 bg-white border-gray-200 drop-shadow-xl dark:bg-white dark:border-gray-200 rounded-3xl text-center"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  animate={{
                    x: [-5, 5, 5, -5, -5],
                    y: [0, 5, -5, 0, 0],
                    z: [0, 0, 0, 0, 0],
                    transition: { duration: 5, repeat: Infinity },
                  }}
                >
                  <Image
                    src={Support}
                    alt="support"
                    quality={100}
                    className="xsm:w-8 md:w-10 w-12 mx-auto"
                  />
                </motion.div>

                <h5 className="my-2 xsm:text-sm md:text-lg text-xl font-semibold tracking-tight text-neocon_black dark:text-neocon_black ">
                  Great Support
                </h5>

                <p className="my-3 xsm:text-xs md:text-xs text-sm font-normal text-gray-500 dark:text-gray-400">
                  We know that implementing new software solutions can be a
                  daunting task, which is why w e offer great support to our
                  clients. Our team is always available to answer questions,
                  provide training, and troubleshoot any issues that may arise.
                </p>

                <Link
                  href="/contact_us"
                  className="text-neocon_green xsm:text-sm md:text-sm"
                >
                  Talk To Customer Support
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Factors;
