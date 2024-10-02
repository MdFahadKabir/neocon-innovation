import React from "react";
import Image from "next/image";
import { BsArrowDownRightSquareFill } from "react-icons/bs";
import { motion } from "framer-motion";
import Assets from "../../public/assets/images/Home/products/asset.png";
import Discover from "../../public/assets/images/Home/products/discover.png";

function Product() {
  return (
    <>
      <div className="px-5 2xl:px-40 py-10">
        <div className="flex flex-col text-center text-4xl font-extrabold">
          <p className="text-xl font-semibold text-neocon_black py-2 ">
            Our Products
          </p>
          <p>We Offer Saas For</p>
          <p>
            Better&nbsp;
            <span className="text-neocon_green">Business</span>
          </p>
          <Image
            src={Assets}
            alt="asset"
            width={1900}
            height={1000}
            quality={100}
            className=" mx-auto mt-10 w-full"
          />
          <div className="xsm:text-xs sm:text-xs text-base font-normal text-neocon_gray">
            <p>
              Revolutionize Your Capital Market Operations with Best Fintech
              Solution
            </p>
            <p>
              Empower your trading and investment operations with our
              state-of-the-art fintech solution for capital markets. Our
              comprehensive order management system (OMS) With advanced features
              such as DSE/CSE Trading, Real Time data, real-time portfolio,
              Advance chart, multi-asset support, and customizable dashboards,
              you can revolutionize your capital market operations and stay
              ahead of the competition.
            </p>
          </div>
        </div>
        <div className="xsm:py-5 sm:py-5 py-10">
          <div className="grid xsm:grid-cols-2 xsm:gap-2 md:gap-2 grid-cols-4 gap-6">
            <div className="xsm:px-0 md:px-0 lg:px-0 px-5">
              <motion.div
                className=" xsm:py-4 xsm:px-3 md:py-6 md:px-3 p-6 bg-white  rounded-3xl shadow-lg overflow-hidden w-full"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={Discover}
                  alt="discover"
                  quality={100}
                  className="xsm:w-8 xsm:h-8 sm:w-8 sm:h-8 w-10 h-10 2xl:w-12 2xl:h-12"
                />
                <p className="xsm:text-xs md:text-sm xl:text-base 2xl:text-lg font-bold pt-3">
                  Dse/Cse Trading
                </p>
              </motion.div>
            </div>
            <div className="px-0 2xl:px-5">
              <motion.div
                className=" xsm:py-4 xsm:px-3 md:py-6 md:px-3 p-6 bg-white  rounded-3xl shadow-lg overflow-hidden w-full"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={Discover}
                  className="xsm:w-8 xsm:h-8 sm:w-8 sm:h-8 w-10 h-10 2xl:w-12 2xl:h-12"
                />
                <p className="xsm:text-xs md:text-sm xl:text-base 2xl:text-lg font-bold pt-3">
                  Realtime Market Data
                </p>
              </motion.div>
            </div>
            <div className="px-0 2xl-px-5">
              <motion.div
                className=" xsm:py-4 xsm:px-3 md:py-6 md:px-3 p-6 bg-white  rounded-3xl shadow-lg overflow-hidden w-full"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={Discover}
                  alt="discover"
                  quality={100}
                  className="xsm:w-8 xsm:h-8 sm:w-8 sm:h-8 w-10 h-10 2xl:w-12 2xl:h-12"
                />
                <p className="xsm:text-xs md:text-sm xl:text-base 2xl:text-lg font-bold pt-3">
                  Realtime Portfolio
                </p>
              </motion.div>
            </div>
            <div className="px-0 2xl:px-5">
              <motion.div
                className=" xsm:py-4 xsm:px-3 md:py-6 md:px-3 p-6 bg-white  rounded-3xl shadow-lg overflow-hidden w-full"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={Discover}
                  alt="discover"
                  quality={100}
                  className="xsm:w-8 xsm:h-8 sm:w-8 sm:h-8 w-10 h-10 2xl:w-12 2xl:h-12"
                />
                <p className="xsm:text-xs md:text-sm xl:text-base 2xl:text-lg font-bold pt-3">
                  Advance Chart
                </p>
              </motion.div>
            </div>
            <div className="px-0 2xl:px-5">
              <motion.div
                className=" xsm:py-4 xsm:px-3 md:py-6 md:px-3 p-6 bg-white  rounded-3xl shadow-lg overflow-hidden w-full"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={Discover}
                  alt="discover"
                  quality={100}
                  className="xsm:w-8 xsm:h-8 sm:w-8 sm:h-8 w-10 h-10 2xl:w-12 2xl:h-12"
                />
                <p className="xsm:text-xs md:text-sm xl:text-base 2xl:text-lg font-bold pt-3">
                  Realtime Rolling Ticker
                </p>
              </motion.div>
            </div>
            <div className="px-0 2xl:px-5">
              <motion.div
                className=" xsm:py-4 xsm:px-3 md:py-6 md:px-3 p-6 bg-white  rounded-3xl shadow-lg overflow-hidden w-full"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={Discover}
                  alt="discover"
                  quality={100}
                  className="xsm:w-8 xsm:h-8 sm:w-8 sm:h-8 w-10 h-10 2xl:w-12 2xl:h-12"
                />
                <p className="xsm:text-xs md:text-sm xl:text-base 2xl:text-lg font-bold pt-3">
                  Stop Lose
                </p>
              </motion.div>
            </div>
            <div className="px-0 2xl:px-5">
              <motion.div
                className=" xsm:py-4 xsm:px-3 md:py-6 md:px-3 p-6 bg-white  rounded-3xl shadow-lg overflow-hidden w-full"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={Discover}
                  alt="discover"
                  quality={100}
                  className="xsm:w-8 xsm:h-8 sm:w-8 sm:h-8 w-10 h-10 2xl:w-12 2xl:h-12"
                />
                <p className="xsm:text-xs md:text-sm xl:text-base 2xl:text-lg font-bold pt-3">
                  Profit Take
                </p>
              </motion.div>
            </div>
            <div className="px-0 2xl:px-5">
              <motion.div
                className=" xsm:py-4 xsm:px-3 md:py-6 md:px-3 p-6 bg-neocon_black text-white  rounded-3xl shadow-lg overflow-hidden w-full"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex flex-row">
                  <p className="xsm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-extrabold">
                    15
                  </p>
                  &nbsp;
                  <p className="-rotate-90 xsm:text-xs md:text-xs lg:text-sm xl:text-sm 2xl:text-base font-bold text-center whitespace-nowrap">
                    days
                  </p>
                  <p className="xsm:text-base md:text-base lg:text-base text-2xl font-extrabold my-auto pb-0 mb-0">
                    Free Trial
                  </p>
                </div>
                <div className="flex flex-row mt-3 w-full">
                  <p className="xsm:text-xs md:text-xs 2xl:text-lg font-medium my-auto w-4/5">
                    Get Started today
                  </p>

                  <BsArrowDownRightSquareFill className="my-auto xsm:text-sm md:text-xl xl:text-2xl 2xl:text-3xl w-1/5" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
