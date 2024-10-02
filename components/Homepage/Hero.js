import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Heroimg from "../../public/assets/images/Home/hero/hero_img.png";
import Star_t from "../../public/assets/images/Home/hero/bg_start_t.png";
import Star_b from "../../public/assets/images/Home/hero/bg_start_b.png";
import Stars from "../../public/assets/images/Home/hero/stars.png";
import Line from "../../public/assets/images/Home/hero/line.png";
import Play from "../../public/assets/images/Home/hero/play.png";
import Underline from "../../public/assets/images/Home/hero/underline.png";
function Hero() {
  return (
    <>
      <div className="bg-gradient-to-b from-neocon_g_fw via-neocon_g_mg to-white">
        <div className="px-5 2xl:px-40">
          <Image
            src={Star_t}
            alt="hero asset"
            quality={100}
            className="w-1/3 xsm:hidden sm:hidden block"
          />
          <div className="flex xsm:flex-col sm:flex-col justify-between">
            <div className="flex flex-col xsm:text-3xl sm:text-3xl md:text-3xl text-6xl font-extrabold xsm:my-20 my-auto">
              <p className="pb-5 xsm:pb-0 sm:pb-0 md:pb-0">
                Better IT Solution at
              </p>
              <div className="flex flex-row ">
                <p>Your</p> &nbsp;
                <div className="flex flex-col text-neocon_green ">
                  <p>FingerTips</p>
                  <Image
                    src={Underline}
                    alt="underline"
                    quality={100}
                    className="xsm:w-48 sm:w-48 md:w-40 w-80 xsm:mt-0 sm:mt-0 md:mt-0 mt-1 h-full object-fill"
                  />
                </div>
              </div>
              <div className="flex flex-row my-10 ">
                <Image
                  src={Stars}
                  alt="stars img"
                  quality={100}
                  className="w-8 h-10 my-auto"
                />
                <Image
                  src={Line}
                  alt="line"
                  quality={100}
                  className="w-1 xsm:h-16 sm:h-16 h-12 mx-3"
                />

                <p className="text-sm 2xl:text-base font-normal text-neocon_gray my-auto w-3/5 xsm:w-full sm:w-full">
                  We offer a wide range of customized software development
                  services tailored to meet your specific needs.
                </p>
              </div>
              <div className="flex xsm:justify-between sm:justify-between flex-row text-base font-medium">
                <Link href="/contact_us" className="my-auto">
                  <button className="bg-neocon_black text-white hover:bg-neocon_green duration-700 rounded-full">
                    <p className="px-6 py-4 2xl:px-10">Get a Quote</p>
                  </button>
                </Link>
                <Link href="/company" className="mx-5 my-auto">
                  <button className="flex flex-row mx-10 xsm:mx-2 sm:mx-2 text-neocon_green">
                    <p className="my-auto -mr-2 2xl:-mr-4">About Us</p>
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Image
                        src={Play}
                        alt="play"
                        quality={100}
                        className="w-14 h-14"
                      />
                    </motion.div>
                  </button>
                </Link>
              </div>
            </div>
            <Image
              src={Heroimg}
              alt="heroimg"
              quality={100}
              className="xsm:w-full xsm:my-5 md:w-5/12 w-5/12 md:-mt-4 lg:-mt-6 xl:-mt-6 2xl:-mt-10"
            />
          </div>
          <Image
            src={Star_b}
            alt="star bottom"
            quality={100}
            className="w-1/3 xsm:hidden sm:hidden block -mt-12 -ml-2 xl:-mt-24 2xl:-mt-36 2xl:-ml-10"
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
