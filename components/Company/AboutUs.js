import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BsDashLg } from "react-icons/bs";
import { CiMemoPad } from "react-icons/ci";
import { AiOutlineDown } from "react-icons/ai";
import AboutIcon from "../../public/assets/images/Home/aboutus/abouticon.png";
import IOT from "../../public/assets/images/Home/settings/iot.png";
import Play from "../../public/assets/images/Home/hero/play.png";
import Asset_1 from "../../public/assets/images/Company/Aboutus/asset_1.png";
import Asset_2 from "../../public/assets/images/Company/Aboutus/asset_2.png";
import Circle from "../../public/assets/images/Company/Aboutus/circle.png";
import Clock from "../../public/assets/images/Company/Aboutus/clock.png";
import Drawer from "../../public/assets/images/Company/Aboutus/drawer.png";
import Fluent from "../../public/assets/images/Company/Aboutus/fluent.png";
import Vector from "../../public/assets/images/Company/Aboutus/vector.png";
import Agile from "../../public/assets/images/Company/Aboutus/agile.png";

function AboutUs() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openTab, setOpenTab] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % 2);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const slides = [
    {
      image: AboutIcon,
      text: "Building Your Business with Code: Our Expertise in Software Development",
    },
    {
      image: IOT,
      text: "Our team of experts brings passion and enthusiasm to every project.",
    },
  ];

  return (
    <>
      <div className="px-5 2xl:px-60">
        <div className="">
          <div className="flex xsm:flex-col sm:flex-col justify-between w-full">
            <div className="relative xsm:hidden sm:hidden md:block lg:block xl:block 2xl:block my-auto md:w-5/12 lg:w-4/12 w-3/12">
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
                <Image src={Asset_1} className="w-full" />
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
                <div className=" flex flex-col py-5 px-5 md:w-56 lg:w-56 xl:w-56 2xl:w-72 ">
                  <div className="">
                    <Image
                      src={slides[currentSlide].image}
                      className="md:w-9 md:h-9 lg:w-9 lg:h-9 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12"
                    />
                  </div>
                  <p className="md:text-xs lg:text-sm xl:text-sm 2xl:text-lg lg:text-medium xl:font-medium 2xl:font-semibold py-2">
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
            <div className="relative xsm:block sm:block md:hidden lg:hidden xl:hidden 2xl:hidden xsm:w-full sm:w-full">
              <Image src={Asset_1} className="xsm:w-full sm:w-full " />
              <div className="absolute top-20 left-0 ml-24 bg-white/80 rounded-xl  border-l-4 border-neocon_green shadow-sm backdrop-blur-sm">
                <div className=" flex flex-col py-2 px-4 xsm:w-60 sm:w-60 ">
                  <div className="">
                    <Image
                      src={slides[currentSlide].image}
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

            <div className="flex flex-col xsm:w-full sm:w-full  w-3/5 md:w-4/5 xsm:px-0 sm:px-0 px-10  md:ml-20 lg:ml-20 xsm:my-10 sm:my-10">
              <p className="text-neocon_blue_200 md:text-base xsm:text-sm sm:text-sm text-xl font-semibold">
                About Us
              </p>
              <p className="text-neocon_black xsm:text-lg sm:text-lg md:text-xl lg:text-2xl text-4xl font-extrabold py-5 xl:py-10 2xl:py-10 ">
                Maximizing Your Business Potential with&nbsp;
                <span className="text-neocon_green">Neocon Technologies</span>
              </p>

              <p className="text-neocon_gray xsm:text-xs text-base font-normal">
                Neocon Technologies Limited is a leading software company in
                Bangladesh that offers a range of innovative and advanced
                software solutions to meet the evolving needs of businesses of
                all sizes. We specialize in cutting-edge technology, software
                development, web application development, mobile application
                development, and IoT, Fintech solution, OMS system UI/UX design,
                Digital Marketing and e-commerce portals.
              </p>
              <div className="flex flex-row mt-10">
                <button className="flex flex-row py-2 px-5 border rounded-xl bg-neocon_black text-white hover:bg-neocon_blue_200 duration-700 xsm:text-xs text-base">
                  <CiMemoPad className="my-auto" />
                  <p className="pl-2 my-auto">Download Brochure</p>
                </button>
                <button className="flex flex-row mx-10 md:mx-2 xsm:mx-2 sm:mx-2 xsm:text-xs text-base text-neocon_green">
                  <p className="my-auto -mr-2 2xl:-mr-4">Play video</p>
                  <Image src={Play} className="w-10 h-10  2xl:w-14 2xl:h-14" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex xsm:flex-col-reverse sm:flex-col-reverse justify-between w-full">
            <div className="flex flex-col xsm:w-full sm:w-full  w-3/5 md:w-4/5 xsm:px-0 sm:px-0 px-10 md:mr-24 lg:mr-24 xsm:my-10 sm:my-10">
              <p className="text-neocon_blue_200 md:text-base xsm:text-sm sm:text-sm text-xl font-semibold">
                Trusted by Businesses Worldwide:
              </p>
              <p className="text-neocon_black xsm:text-lg sm:text-lg md:text-xl lg:text-2xl text-4xl font-extrabold py-5 xl:py-10 2xl:py-10 ">
                The Story of&nbsp;
                <span className="text-neocon_green">Neocon Technologies</span>
              </p>

              <p className="text-neocon_gray xsm:text-xs text-base font-normal">
                Neocon Technologies was founded in 2015 with the vision of
                becoming a leading software development firm in Bangladesh. Our
                journey began with a small team of passionate developers who
                shared a common goal of delivering innovative software solutions
                to businesses across diverse industry verticals. Over the years,
                we have grown into a reputable software company that is known
                for its expertise, innovation, and commitment to excellence.
              </p>

              <div className="">
                <ul className="flex flex-row list-none py-4 xsm:text-xs sm:text-xs lg:text-xs xl:text-sm text-lg font-medium xsm:overflow-x-scroll xsm:scrollbar-hide sm:overflow-x-scroll sm:scrollbar-hide">
                  <li className="text-center my-auto">
                    <a
                      className={
                        "mx-2 block " +
                        (openTab === 1
                          ? "text-neocon_green "
                          : "text-neocon_black ")
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(1);
                      }}
                      href="#link1"
                      role="tablist"
                    >
                      <p className="flex flex-row my-auto">
                        <span className="my-auto ">
                          <AiOutlineDown className="mx-2" />
                        </span>
                        Mission
                      </p>
                    </a>
                  </li>
                  <li className="text-center my-auto">
                    <a
                      className={
                        " mx-2 block " +
                        (openTab === 2
                          ? "text-neocon_green "
                          : "text-neocon_black ")
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(2);
                      }}
                      href="#link2"
                      role="tablist"
                    >
                      <p className="flex flex-row my-auto">
                        <span className="my-auto ">
                          <AiOutlineDown className="mx-2" />
                        </span>
                        Vission
                      </p>
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
                        <div>
                          <p>
                            Our mission is to empower businesses with software
                            solutions that enable them to achieve their goals
                            and stay ahead of the competition. We strive to
                            deliver high-quality, innovative, and customized
                            software solutions that are tailored to our clients'
                            unique business requirements.
                          </p>
                        </div>
                      </div>
                      <div
                        className={openTab === 2 ? "block" : "hidden"}
                        id="link2"
                      >
                        <div>
                          <p>
                            Our vision is to become a global leader in software
                            development and IT consulting services, delivering
                            world-class solutions to businesses of all sizes
                            across diverse industry verticals. We aim to achieve
                            this by staying at the forefront of technology
                            trends and continuously improving our skills,
                            knowledge, and expertise.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative xsm:hidden sm:hidden md:block lg:block xl:block 2xl:block my-auto md:w-5/12 lg:w-4/12 w-3/12">
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
                <Image src={Asset_2} className="w-full" />
              </motion.div>

              <motion.div
                initial={{ y: "100%", x: "50%" }}
                animate={{ y: "-50%" }}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                  yoyo: Infinity,
                }}
                className="absolute -left-60 2xl:-left-80 top-1/2 transform translate-y-1/2 bg-white rounded-xl  border-l-4 border-neocon_green shadow-sm"
              >
                <div className=" flex flex-col py-5 px-5 md:w-56 lg:w-56 xl:w-56 2xl:w-72 ">
                  <div className="">
                    <Image
                      src={slides[currentSlide].image}
                      className=":w-9 h-9 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12"
                    />
                  </div>
                  <p className="md:text-xs text-sm 2xl:text-lg font-medium 2xl:font-semibold py-2">
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
            <div className="relative xsm:block sm:block md:hidden lg:hidden xl:hidden 2xl:hidden xsm:w-full sm:w-full">
              <Image src={Asset_1} className="xsm:w-full sm:w-full " />
              <div className="absolute top-20 left-0 ml-24 bg-white/80 rounded-xl  border-l-4 border-neocon_green shadow-sm backdrop-blur-sm">
                <div className=" flex flex-col py-2 px-4 xsm:w-60 sm:w-60 ">
                  <div className="">
                    <Image
                      src={slides[currentSlide].image}
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
          </div>
        </div>
      </div>

      <div className="py-20 xsm:hidden sm:hidden block px-5 2xl:px-60">
        <div className="text-center mb-20">
          <p className="text-xl font-semibold">Why Choose Us</p>
          <p className="text-4xl font-extrabold">
            Why Neocon Is Best For{" "}
            <span className="text-neocon_green">You</span>?
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-3 gap-8">
            <motion.div
              class="p-6 bg-white border border-gray-200 rounded-3xl shadow mx-auto text-center"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={Vector}
                width={50}
                height={50}
                className="w-6 h-6 mx-auto"
              />
              <h5 class="my-2 text-lg font-semibold  text-neocon_black ">
                10+ Years of Experience
              </h5>

              <p class="my-3 text-sm font-normal text-neocon_gray">
                Neocon Technologies has been providing software development and
                IT consulting services for over a decade. During this time, we
                have gained valuable experience in developing customized
                software solutions for businesses across diverse industries.
              </p>
            </motion.div>
            <motion.div
              class="p-6 bg-white border border-gray-200 rounded-3xl shadow mx-auto text-center"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={Drawer}
                width={50}
                height={50}
                className="w-6 h-6 mx-auto"
              />
              <h5 class="my-2 text-lg font-semibold  text-neocon_black ">
                Expertise
              </h5>

              <p class="my-3 text-sm font-normal text-neocon_gray">
                Our team of highly skilled and experienced software developers
                possesses the knowledge and expertise to deliver customized
                software solutions that meet your unique business needs.
              </p>
            </motion.div>
            <motion.div
              class="p-6 bg-white border border-gray-200 rounded-3xl shadow mx-auto text-center"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={Clock}
                width={50}
                height={50}
                className="w-6 h-6 mx-auto"
              />
              <h5 class="my-2 text-lg font-semibold  text-neocon_black ">
                Quality
              </h5>

              <p class="my-3 text-sm font-normal text-neocon_gray">
                We are committed to delivering software solutions of the highest
                quality, delivered on time and within budget. We follow a
                rigorous development process to ensure that our software
                solutions meet the highest standards of quality and exceed your
                expectations.
              </p>
            </motion.div>
            <motion.div
              class="p-6 bg-white border border-gray-200 rounded-3xl shadow mx-auto text-center"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={Fluent}
                width={50}
                height={50}
                className="w-6 h-6 mx-auto"
              />
              <h5 class="my-2 text-lg font-semibold  text-neocon_black ">
                Competitive Pricing
              </h5>

              <p class="my-3 text-sm font-normal text-neocon_gray">
                Neocon Technologies offers competitive pricing for our services
                without compromising on quality. Our pricing is transparent, and
                we work closely with our clients to ensure that they get the
                best value for their investment.
              </p>
            </motion.div>
            <motion.div
              class="p-6 bg-white border border-gray-200 rounded-3xl shadow mx-auto text-center"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={Circle}
                width={50}
                height={50}
                className="w-6 h-6 mx-auto"
              />
              <h5 class="my-2 text-lg font-semibold  text-neocon_black ">
                Customer Satisfaction
              </h5>

              <p class="my-3 text-sm font-normal text-neocon_gray">
                At Neocon Technologies, customer satisfaction is our top
                priority. We work closely with our clients to understand their
                specific needs and provide ongoing support and maintenance
                services to ensure that their software systems are running
                smoothly and efficiently.
              </p>
            </motion.div>
            <motion.div
              class="p-6 bg-white border border-gray-200 rounded-3xl shadow mx-auto text-center"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={Agile}
                width={50}
                height={50}
                className="w-6 h-6 mx-auto"
              />
              <h5 class="my-2 text-lg font-semibold  text-neocon_black ">
                Confidentiality & Security
              </h5>

              <p class="my-3 text-sm font-normal text-neocon_gray">
                We understand the importance of confidentiality and security
                when it comes to handling sensitive business data. We take all
                necessary measures to ensure that our clients' data and
                information are kept secure and confidential.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      {/* <CustomerFeedback /> */}
    </>
  );
}

export default AboutUs;
