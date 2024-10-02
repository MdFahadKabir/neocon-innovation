import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import useNumberAnimation from "@/Hooks/useNumberAnimation";
import { BsDashLg } from "react-icons/bs";
import StarsT from "../../public/assets/images/Home/aboutus/stars_t.png";
import StarsB from "../../public/assets/images/Home/aboutus/stars_b.png";
import Asset from "../../public/assets/images/Home/aboutus/asset.png";
import Employee from "../../public/assets/images/Home/aboutus/employee.png";
import Product from "../../public/assets/images/Home/aboutus/product.png";
import Rating from "../../public/assets/images/Home/aboutus/three-stars.png";
import Support from "../../public/assets/images/Home/aboutus/support.png";
import AboutIcon from "../../public/assets/images/Home/aboutus/abouticon.png";
import IOT from "../../public/assets/images/Home/settings/iot.png";

function AboutUs() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % 2);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const slides = [
    {
      image: AboutIcon,
      text: "Utilizing the latest timeline solutions, and decades of work experience",
    },
    {
      image: IOT,
      text: "Our team of experts brings passion and enthusiasm to every project.",
    },
  ];
  const exnumber = useNumberAnimation(0, 10);
  const emnumber = useNumberAnimation(0, 50);
  const pnumber = useNumberAnimation(0, 25);
  const rnumber = useNumberAnimation(0, 4.9);
  return (
    <>
      <div className="bg-gradient-to-t from-neocon_g_w  to-neocon_g_sw">
        <div className="px-5 2xl:px-40 py-10">
          <div className="flex justify-end">
            <Image
              src={StarsT}
              alt="stars top"
              quality={100}
              className="w-4/12 xsm:hidden sm:hidden block"
            />
          </div>
          <div className="flex xsm:flex-col sm:flex-col justify-between w-full">
            <div className="relative xsm:hidden sm:hidden block my-auto w-full">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                  yoyo: Infinity,
                }}
                className=""
              >
                <Image
                  src={Asset}
                  alt="asset"
                  quality={100}
                  className="w-full"
                />
              </motion.div>

              <motion.div
                initial={{ y: "100%", x: "50%" }}
                animate={{ y: "-50%" }}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                  yoyo: Infinity,
                }}
                className="absolute right-0 top-1/2 transform translate-y-1/2 bg-white rounded-xl  border-l-4 border-neocon_green shadow-sm"
              >
                <div className=" flex flex-col p-5 md:w-56 lg:w-56 xl:w-56 2xl:w-72 ">
                  <div className="">
                    <Image
                      src={slides[currentSlide].image}
                      alt={slides[currentSlide].image}
                      quality={100}
                      className="w-10 h-10 2xl:w-12 2xl:h-12"
                    />
                  </div>
                  <p className="md:text-xs lg:text-sm xl:text-sm 2xl:text-lg font-semibold py-2">
                    {slides[currentSlide].text}
                  </p>
                  <div className="flex flex-row">
                    <BsDashLg
                      className="text-neocon_green text-2xl cursor-pointer"
                      onClick={() => setCurrentSlide((currentSlide + 2) % 3)}
                    />
                    <BsDashLg
                      className="text-neocon_green text-2xl cursor-pointer "
                      onClick={() => setCurrentSlide((currentSlide + 1) % 3)}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="relative xsm:block sm:block hidden xsm:w-full sm:w-full">
              <Image src={Asset} className="xsm:w-full sm:w-full " />
              <div className="absolute top-40 left-0 ml-24 bg-white/80 rounded-xl  border-l-4 border-neocon_green shadow-sm backdrop-blur-sm">
                <div className=" flex flex-col py-2 px-4 xsm:w-60 sm:w-60 ">
                  <div>
                    <Image
                      src={slides[currentSlide].image}
                      alt={slides[currentSlide].image}
                      quality={100}
                      className="xsm:w-12 xsm:h-12 sm:w-12 sm:h-12 "
                    />
                  </div>
                  <p className=" xsm:text-base xsm:text-normal sm:text-base sm:text-normal py-1">
                    {slides[currentSlide].text}
                  </p>
                  <div className="flex flex-row">
                    <BsDashLg
                      className="text-neocon_green text-xl cursor-pointer"
                      onClick={() => setCurrentSlide((currentSlide + 2) % 3)}
                    />
                    <BsDashLg
                      className="text-neocon_green text-xl cursor-pointer "
                      onClick={() => setCurrentSlide((currentSlide + 1) % 3)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col xsm:w-full sm:w-full md:w-7/12 lg:w-7/12 w-8/12 xsm:px-0 sm:px-0 px-10 md:ml-36 lg:ml-36 xl:ml-40 2xl:ml-40 xsm:pt-10 sm:pt-10">
              <p className="text-neocon_green md:text-base xsm:text-sm sm:text-sm text-xl font-semibold">
                Trusted by Bangladesh's Top Companies
              </p>
              <p className="text-neocon_black xsm:text-lg sm:text-lg md:text-xl lg:text-2xl text-4xl font-extrabold py-5 xl:py-10 2xl:py-10">
                Experience Best IT -Solution from the <br />
                Leading Company in &nbsp;
                <span className="text-neocon_green">Bangladesh</span>
              </p>

              <p className="text-neocon_gray xsm:text-xs text-base font-normal">
                Neocon Tech is a renowned IT company in Bangladesh that offers a
                range of solutions to enhance business performance, including
                secure and scalable applications and data solutions.
                Additionally, the company provides IT-enabled services in areas
                such as Fintech solution, OMS system, software and web
                development, mobile app development, manufacturing, and
                e-commerce portals.
              </p>
              <div className="flex xsm:flex-col sm-flex-col justify-between xl:pt-5 2xl:pt-10 ">
                <div className="flex justify-between xsm:py-5">
                  <div className="xsm:p-3 sm:p-3 md:py-3 md:px-2 lg:py-4 lg:px-3 p-6 mx-2 bg-white rounded-3xl shadow-lg dark:bg-white border-neocon_gray dark:border-neocon_gray text-sm   2xl:text-base font-normal w-40 md:w-20 lg:w-28 xl:w-44 2xl:w-52">
                    <h5 className="mb-2 tracking-tight text-neocon_gray ">
                      Experience Years
                    </h5>
                    <div className="flex justify-between">
                      <motion.div
                        className="text-base lg:text-2xl xl:text-2xl 2xl:text-3xl font-extrabold text-neocon_black"
                        animate={{ number: exnumber }}
                      >
                        <p>
                          {exnumber.toFixed(0)}
                          <span className="mb-0 pb-0 xsm:text-base sm:text-base md:text-base text-2xl">
                            +
                          </span>
                        </p>
                      </motion.div>
                    </div>
                  </div>
                  <div className="xsm:p-3 sm:p-3 md:py-3 md:px-2 lg:py-4 lg:px-3 p-6 mx-2 bg-white rounded-3xl shadow-lg dark:bg-white border-neocon_gray dark:border-neocon_gray text-sm   2xl:text-base font-normal w-40 md:w-20 lg:w-28 xl:w-44 2xl:w-52">
                    <h5 className="mb-2 tracking-tight text-neocon_gray ">
                      Employees
                    </h5>
                    <div className="flex justify-between">
                      <motion.div
                        className="text-base lg:text-2xl xl:text-2xl 2xl:text-3xl font-extrabold text-neocon_black"
                        animate={{ number: emnumber }}
                      >
                        <p>
                          {emnumber.toFixed(0)}
                          <span className="mb-0 pb-0 text-base lg:text-2xl xl:text-2xl 2xl:text-2xl">
                            +
                          </span>
                        </p>
                      </motion.div>
                      <div className="my-auto">
                        <Image
                          src={Employee}
                          alt="employee"
                          quality={100}
                          className="w-6 h-6"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="xsm:p-3 sm:p-3 md:py-3 md:px-2 lg:py-4 lg:px-3 p-6 mx-2 bg-white rounded-3xl shadow-lg dark:bg-white border-neocon_gray dark:border-neocon_gray text-sm   2xl:text-base font-normal w-40 md:w-20 lg:w-28 xl:w-44 2xl:w-52">
                    <h5 className="mb-2 tracking-tight text-neocon_gray ">
                      Products
                    </h5>
                    <div className="flex justify-between">
                      <motion.div
                        className="text-base lg:text-2xl xl:text-2xl 2xl:text-3xl font-extrabold text-neocon_black"
                        animate={{ number: pnumber }}
                      >
                        <p>
                          {pnumber.toFixed(0)}
                          <span className="mb-0 pb-0 text-base lg:text-2xl xl:text-2xl 2xl:text-2xl">
                            +
                          </span>
                        </p>
                      </motion.div>
                      <div className="my-auto">
                        <Image
                          src={Product}
                          alt="product"
                          quality={100}
                          className="w-6 h-6"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="xsm:p-3 sm:p-3 md:py-3 md:px-2 lg:py-4 lg:px-3 p-6 mx-2 bg-white rounded-3xl shadow-lg dark:bg-white border-neocon_gray dark:border-neocon_gray text-sm   2xl:text-base font-normal w-40 md:w-20 lg:w-28 xl:w-44 2xl:w-52">
                    <h5 className="mb-2 tracking-tight text-neocon_gray ">
                      Ratings
                    </h5>
                    <div className="flex justify-between">
                      <motion.div
                        className="text-base lg:text-2xl xl:text-2xl 2xl:text-3xl font-extrabold text-neocon_black"
                        animate={{ number: rnumber }}
                      >
                        <p>{rnumber.toFixed(1)}</p>
                      </motion.div>
                      <div className="my-auto">
                        <Image
                          src={Rating}
                          alt="rating"
                          quality={100}
                          className="w-6 :h-6"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex xsm:justify-between sm:justify-between md:flex-row lg:flex-row xl:flex-row 2xl:flex-row py-5">
                <div className="xsm:p-3 sm:p-3 md:py-3 md:px-2 lg:py-4 lg:px-3 p-6 mx-2 bg-white rounded-3xl shadow-lg dark:bg-white border-neocon_gray dark:border-neocon_gray text-sm   2xl:text-base font-normal w-40 md:w-20 lg:w-28 xl:w-44 2xl:w-52">
                  <h5 className="mb-2 tracking-tight text-neocon_gray ">
                    Support
                  </h5>
                  <div className="flex justify-between">
                    <motion.div className="text-base lg:text-2xl xl:text-2xl 2xl:text-3xl font-extrabold text-neocon_black">
                      24/7
                    </motion.div>
                    <div className="my-auto">
                      <Image
                        src={Support}
                        alt="support"
                        quality={100}
                        className="w-6 h-6"
                      />
                    </div>
                  </div>
                </div>
                <div className="xsm:p-3 sm:p-3 md:py-3 md:px-2 lg:py-4 lg:px-3 xl:p-6 2xl:p-6 mx-2 bg-white rounded-3xl shadow-lg dark:bg-white border-neocon_gray dark:border-neocon_gray xsm:text-sm sm:text-sm md:text-[8px] lg:text-[10px] xl:text-sm 2xl:text-base font-normal xsm:w-40 sm:w-40 md:w-20 lg:w-28 xl:w-44 2xl:w-48 text-center my-auto ">
                  <h5 className="py-5 tracking-tight text-neocon_black ">
                    Read more
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-start md:-ml-10 lg:-ml-12 xl:-ml-14 2xl:-ml-20 ">
            <Image
              src={StarsB}
              alt="stars bottom"
              quality={100}
              className="w-2/12 xsm:hidden sm:hidden md:block lg:block xl:block 2xl:block"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
