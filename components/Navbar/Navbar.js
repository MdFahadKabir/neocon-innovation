import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  CgMenuRight,
  CgClose,
  CgInstagram,
  CgFacebook,
  CgCopyright,
} from "react-icons/cg";
import { TfiLinkedin, TfiTwitterAlt } from "react-icons/tfi";
import CompanyLogo from "../../public/assets/images/Home/logo/neocon.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(true);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  const variants = {
    open: { opacity: 1, y: "0%" },
    closed: { opacity: 0, y: "-100%" },
  };
  return (
    <>
      <div className="xsm:rounded-b-2xl xsm:backdrop-blur-sm xsm:bg-white/80 xsm:sticky xsm:top-0 xsm:z-40 sm:rounded-b-2xl sm:backdrop-blur-sm sm:bg-white/80 sm:sticky sm:top-0 sm:z-40 md:rounded-b-2xl md:backdrop-blur-sm md:bg-white/80 md:sticky md:top-0 md:z-40 lg:rounded-b-2xl lg:backdrop-blur-sm lg:bg-white/80 lg:sticky lg:top-0 lg:z-40 xl:rounded-b-2xl xl:backdrop-blur-sm xl:bg-white/80 xl:sticky xl:top-0 xl:z-40 2xl:rounded-b-2xl 2xl:backdrop-blur-sm 2xl:bg-white/80 2xl:sticky 2xl:top-0 2xl:z-40">
        <nav className="flex justify-between p-5 2xl:py-5 2xl:px-40">
          <Link href="/">
            <Image
              src={CompanyLogo}
              alt="Comapany Logo"
              quality={100}
              className="my-auto w-40"
            />
          </Link>
          <div className="my-auto xsm:hidden sm:hidden md:block lg:block xl:block 2xl:block">
            <ul className="flex justify-between text-base font-normal text-neocon_black">
              <li className="md:px-2 lg:px-5 xl:px-10 2xl:px-10 ">
                <Link
                  href="/company"
                  className="transition hover:text-neocon_blue_200 duration-700"
                >
                  Company
                </Link>
              </li>
              <li className="md:px-2 lg:px-5 xl:px-10 2xl:px-10 ">
                <Link
                  href="/services"
                  className="transition hover:text-neocon_blue_200 duration-700"
                >
                  Services
                </Link>
              </li>
              <li className="md:px-2 lg:px-5 xl:px-10 2xl:px-10 ">
                <Link
                  href="/products"
                  className="transition hover:text-neocon_blue_200 duration-700"
                >
                  Products
                </Link>
              </li>
              <li className="md:px-2 lg:px-5 xl:px-10 2xl:px-10 ">
                <Link
                  href="/contact_us"
                  className="transition hover:text-neocon_blue_200 duration-700"
                >
                  Contact Us
                </Link>
              </li>
              {/* <li className="md:px-2 lg:px-5 xl:px-10 2xl:px-10 ">
                <Link
                  href="/portfolios"
                  className="transition hover:text-neocon_blue_200 duration-700"
                >
                  Portfolios
                </Link>
              </li> */}
              {/* <li className="md:px-2 lg:px-2 xl:px-10 2xl:px-10 ">
                <Link
                  href="/blogs"
                  className="transition hover:text-neocon_blue_200 duration-700"
                >
                  Blogs
                </Link>
              </li> */}
            </ul>
          </div>
          <button onClick={handleOpenMenu}>
            <CgMenuRight className="text-2xl text-neocon_black" />
          </button>
          <motion.div
            className={`fixed top-0 left-0 w-full bg-white z-50 ${
              isOpen ? "visible" : "invisible"
            }`}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            variants={variants}
            transition={{ duration: 0.5 }}
          >
            <div className="">
              <div className="flex flex-col items-center justify-center bg-white min-h-screen content-center">
                <div className="flex justify-between p-5 2xl:py-5 2xl:px-40 w-full">
                  <Link href="/">
                    <Image
                      src={CompanyLogo}
                      alt="Comapany Logo"
                      quality={100}
                      className="my-auto w-40"
                    />
                  </Link>
                  <button onClick={handleCloseMenu}>
                    <CgClose className="text-2xl text-neocon_black" />
                  </button>
                </div>
                <div className="my-auto">
                  <div className="flex xsm:flex-col sm:flex-col justify-between text-2xl 2xl:text-3xl xsm:text-center sm:text-center text-neocon_black font-semibold xsm:mt-5 sm:mt-5 lg:mt-40 mt-60">
                    <Link
                      href="/main"
                      className="transition hover:text-neocon_blue_200 duration-700 xsm:py-2 sm:py-2 md:px-2 px-5 2xl:px-10 "
                      onClick={handleCloseMenu}
                    >
                      Home
                    </Link>
                    <Link
                      href="/company"
                      className="transition hover:text-neocon_blue_200 duration-700 xsm:py-2 sm:py-2 md:px-2 px-5 2xl:px-10"
                      onClick={handleCloseMenu}
                    >
                      Company
                    </Link>
                    <Link
                      href="/services"
                      className="transition hover:text-neocon_blue_200 duration-700 xsm:py-2 sm:py-2 md:px-2 px-5 2xl:px-10"
                      onClick={handleCloseMenu}
                    >
                      Services
                    </Link>
                    <Link
                      href="/products"
                      className="transition hover:text-neocon_blue_200 duration-700 xsm:py-2 sm:py-2 md:px-2 px-5 2xl:px-10"
                      onClick={handleCloseMenu}
                    >
                      Products
                    </Link>
                    <Link
                      href="/contact_us"
                      className="transition hover:text-neocon_blue_200 duration-700 xsm:py-2 sm:py-2 md:px-2 px-5 2xl:px-10"
                      onClick={handleCloseMenu}
                    >
                      Contact Us
                    </Link>
                    {/* <Link
                      href="/portfolios"
                      className="transition hover:text-neocon_blue_200 duration-700 xsm:py-2 sm:py-2 md:px-2 px-5 2xl:px-10"
                      onClick={handleCloseMenu}
                    >
                      Portfolios
                    </Link> */}
                    {/* <Link
                      href="/blogs"
                      className="transition hover:text-neocon_blue_200 duration-700 xsm:py-2 sm:py-2 md:px-2 px-5 2xl:px-10"
                      onClick={handleCloseMenu}
                    >
                      Blogs
                    </Link> */}
                  </div>
                  <div className="xsm:my-5 sm:my-5 my-20 2xl:py-20 text-center">
                    <Link
                      href="/career"
                      className="border border-neocon_black rounded-3xl py-3 px-10 text-2xl font-medium hover:bg-neocon_blue_200 hover:border-neocon_blue_200 hover:text-white transition duration-700"
                      onClick={handleCloseMenu}
                    >
                      Carrers
                    </Link>
                  </div>
                  <div className="xsm:pt-10 sm:pt-10 ">
                    <div className="flex flex-row justify-center">
                      <Link
                        href="/"
                        className="border border-white shadow-xl p-1 mx-3 rounded-lg"
                        onClick={handleCloseMenu}
                      >
                        <CgInstagram className="text-neocon_blue_200 xsm:text-base sm:text-base md:text-xl text-3xl" />
                      </Link>

                      <Link
                        href="/"
                        className="border border-white shadow-xl p-1 mx-3 rounded-lg"
                        onClick={handleCloseMenu}
                      >
                        <TfiLinkedin className="text-neocon_blue_200 xsm:text-base sm:text-base md:text-xl text-3xl" />
                      </Link>

                      <Link
                        href="/"
                        className="border border-white shadow-xl p-1 mx-3 rounded-lg"
                        onClick={handleCloseMenu}
                      >
                        <CgFacebook className="text-neocon_blue_200 xsm:text-base sm:text-base md:text-xl text-3xl" />
                      </Link>

                      <Link
                        href="/"
                        className="border border-white shadow-xl p-1 mx-3 rounded-lg"
                        onClick={handleCloseMenu}
                      >
                        <TfiTwitterAlt className="text-neocon_blue_200 xsm:text-base sm:text-base md:text-xl text-3xl" />
                      </Link>
                    </div>
                  </div>
                </div>
                <footer>
                  <p className="flex flex-row xsm:text-sm sm:text-sm text-base font-semibold py-5">
                    <CgCopyright className="my-auto" />
                    Copyright 2023 &nbsp;
                    <span className="uppercase text-neocon_blue_200 ">
                      Neocon
                    </span>
                    &nbsp; All rights reserved.
                  </p>
                </footer>
              </div>
            </div>
          </motion.div>
        </nav>
      </div>
    </>
  );
}
export default Navbar;
