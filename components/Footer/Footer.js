import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CgInstagram, CgFacebook, CgCopyright } from "react-icons/cg";
import { TfiLinkedin, TfiTwitterAlt, TfiLocationPin } from "react-icons/tfi";
import { FiPhoneCall, FiMail } from "react-icons/fi";
import CompanyLogo from "../../public/assets/images/Home/logo/neocon.png";
function Footer() {
  return (
    <>
      <div className="px-5 2xl:px-60 pt-20 xsm:mt-10 relative">
        <div
          className="xsm:px-5 md:px-5 lg:px-10 px-20 pt-20 rounded-3xl bg-white
         shadow-lg z-30 "
        >
          <div className="flex justify-between w-full">
            <Link href="/" className="my-auto">
              <Image
                src={CompanyLogo}
                alt="Comapany Logo"
                className="w-40 xsm:w-20 sm:w-20"
                quality={100}
              />
            </Link>
            <div className="flex flex-row">
              <Link
                href="/"
                className="border border-white shadow-xl p-2 mx-3 xsm:mx-1 xsm:p-1 rounded-lg"
              >
                <CgInstagram className="text-neocon_black text-2xl xsm:text-base" />
              </Link>

              <Link
                href="/"
                className="border border-white shadow-xl p-2 mx-3 xsm:mx-1 xsm:p-1 rounded-lg"
              >
                <TfiLinkedin className="text-neocon_black text-2xl xsm:text-base" />
              </Link>

              <Link
                href="/"
                className="border border-white shadow-xl p-2 mx-3 xsm:mx-1 xsm:p-1 rounded-lg"
              >
                <CgFacebook className="text-neocon_black text-2xl xsm:text-base" />
              </Link>

              <Link
                href="/"
                className="border border-white shadow-xl p-2 mx-3 xsm:mx-1 xsm:p-1 rounded-lg"
              >
                <TfiTwitterAlt className="text-neocon_black text-2xl xsm:text-base" />
              </Link>
            </div>
          </div>
          <div className="flex justify-between p-20 md:p-5 xsm:px-0 xsm:py-5 xsm:grid xsm:grid-rows-2 xsm:grid-flow-col xsm:gap-0 sm:px-0 sm:py-5 sm:grid sm:grid-rows-2 sm:grid-flow-col sm:gap-0 ">
            <div className="flex flex-col">
              <p className="text-neocon_black xsm:text-sm sm:text-sm text-lg font-semibold">
                Comapany
              </p>
              <div className="flex flex-col text-neocon_gray text-base xsm:text-xs sm:text-xs font-normal my-5">
                <Link href="/">
                  <p className="my-1">About us</p>
                </Link>
                <Link href="/">
                  <p className="my-1">Contact us</p>
                </Link>

                <Link href="/">
                  <p className="my-1">Service</p>
                </Link>
                <Link href="/">
                  <p className="my-1">FAQs</p>
                </Link>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-neocon_black text-lg xsm:text-sm sm:text-sm font-semibold">
                Resources
              </p>
              <div className="flex flex-col text-neocon_gray text-base xsm:text-xs sm:text-xs font-normal my-5">
                <Link href="/">
                  <p className="my-1">Privacy Policy</p>
                </Link>
                <Link href="/">
                  <p className="my-1">Terms & Condition</p>
                </Link>

                <Link href="/">
                  <p className="my-1">Blogs</p>
                </Link>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-neocon_black text-lg xsm:text-sm sm:text-sm font-semibold">
                Products
              </p>
              <div className="flex flex-col text-neocon_gray  text-base xsm:text-xs sm:text-xs font-normal my-5">
                <Link href="/">
                  <p className="my-1">Project management</p>
                </Link>
                <Link href="/">
                  <p className="my-1">OMS</p>
                </Link>

                <Link href="/">
                  <p className="my-1">Time Tracker</p>
                </Link>
                <Link href="/">
                  <p className="my-1">Time Schedule</p>
                </Link>
                <Link href="/">
                  <p className="my-1">Remote Collaboration</p>
                </Link>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-neocon_black text-lg xsm:text-sm sm:text-sm font-semibold">
                Address
              </p>
              <div className="flex flex-col text-neocon_gray  text-base xsm:text-xs sm:text-xs font-normal my-5">
                <div className="flex flex-row">
                  <div className="my-auto mx-2">
                    <FiPhoneCall />
                  </div>
                  <p className="my-1">+880 9638 232323</p>
                </div>
                <div className="flex flex-row">
                  <div className="my-auto mx-2">
                    <FiMail />
                  </div>
                  <p className="my-1">hello@neocon.tech</p>
                </div>
                <div className="flex flex-row">
                  <div className="pt-2 mx-2">
                    <TfiLocationPin />
                  </div>
                  <p className="my-1">
                    Forum Central (7th floor), 21/22
                    <br /> M.M Ali Road, Golpahar Circle,
                    <br /> Mehedibag, Chittagong,
                    <br /> Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-neocon_g_rgw via-neocon_g_dg  to-neocon_g_rgw flex justify-center py-20 -mt-20 z-10 mb-0 pb-0">
        <p className="flex flex-row text-white xsm:text-xs text-lg font-medium text-center inset-x-0 bottom-0 py-10">
          <CgCopyright className="my-auto" />
          Copyright 2023 &nbsp;
          <span className="uppercase text-neocon_blue_200 ">Neocon</span>
          &nbsp; All rights reserved.
        </p>
      </div>
    </>
  );
}

export default Footer;
