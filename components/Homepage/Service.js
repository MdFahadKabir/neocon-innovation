import React, { useState, useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { BsArrowDownRightSquare } from "react-icons/bs";
import BusinessAnalysis from "../../public/assets/images/Home/settings/businessanalysis.png";
import DataAnalysis from "../../public/assets/images/Home/settings/dataanalysis.png";
import IOT from "../../public/assets/images/Home/settings/iot.png";
import SmartHome from "../../public/assets/images/Home/settings/smarthome.png";

const services = [
  {
    id: 1,
    image: BusinessAnalysis,
    header: "Software Development",
    content:
      "At Neocon Tech, We specialize in creating custom software solutions that are tailored to meet the unique needs of your business. Our team of experienced developers will work with you to deliver high-quality, reliable software that helps your business run more efficiently.",
  },
  {
    id: 2,
    image: DataAnalysis,
    header: "FinTech",
    content:
      "Our cutting-edge FinTech solutions are designed to help your business stay ahead of the curve in a rapidly changing industry. From trading platforms to payment gateways, we have the expertise to develop and implement innovative solutions that drive growth and profitability.",
  },
  {
    id: 3,
    image: IOT,
    header: "Mobile Application Development",
    content:
      "Our team of expert developers specializes in creating customized mobile apps for businesses of all sizes, providing engaging and intuitive designs for both iOS and Android platforms to facilitate seamless customer interaction anytime, anywhere.",
  },
  {
    id: 4,
    image: SmartHome,
    header: "Artificial Intelligence Service",
    content:
      "Neocon Technologies understand the potential of artificial intelligence to transform businesses and industries. That's why we offer a range of AI services to help our clients create custom AI solutions that drive business value.",
  },
  {
    id: 5,
    image: SmartHome,
    header: "IoT + Smart Home",
    content:
      "Our IoT and smart home solutions help businesses connect with customers in new and innovative ways. From smart home automation to industrial IoT applications, we have the expertise to design and implement solutions that help businesses achieve their goals and improve their bottom line.",
  },
  {
    id: 6,
    image: SmartHome,
    header: "Business Intelligence & Data Analytics",
    content:
      "Our BI and data analytics services offer tailored solutions for businesses to harness the power of data, gaining deeper insights into operations, customers, and market trends, empowering better decisions.",
  },
];
const settings = {
  arrows: false,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,

  responsive: [
    {
      breakpoint: 1536,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 280,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function Service() {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const hover = useMotionValue(0);
  const hoverHeight = useTransform(hover, [0, 1], ["300px", "260px"], {
    type: "spring",
    stiffness: 200,
    damping: 20,
    duration: 5,
  });
  const sliderRef = useRef(null);
  const goToPrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <>
      {/* bg-neocon_g_sw */}
      <div className="bg-gradient-to-t from-neocon_g_sw  to-neocon_g_w">
        <div className="px-5 2xl:px-40 py-10">
          <div className="flex flex-col text-center xsm:text-lg xm:text-lg md:text-4xl text-4xl font-extrabold">
            <p className="xsm:text-sm sm:text-sm text-xl font-semibold text-neocon_black pb-2 ">
              Service
            </p>
            <p className="pb-2 xsm:pb-0 sm:pb-0 md:pb-0 w-1/2 mx-auto xsm:w-full sm:w-full">
              Custom software development Offering to build your&nbsp;
              <span className="text-neocon_green">Business</span>
            </p>
          </div>
          <div className="relative shadow-sm rounded-3xl backdrop-blur-lg xsm:backdrop-blur-none sm:backdrop-blur-none xsm:bg-white bg-white/20 p-10 my-10 xsm:p-0 xsm:my-0 xsm:shadow-none sm:p-0 sm:my-0 sm:shadow-none border-2 border-white/20">
            <div
              className="flex justify-start absolute top-48 -left-5"
              onClick={goToPrevSlide}
            >
              <MdKeyboardArrowLeft className="bg-neocon_gray dark:bg-neocon_gray text-white dark:text-white w-12 h-12 rounded-2xl xsm:w-6 xsm:h-6 xsm:rounded-md sm:w-6 sm:h-6 sm:rounded-md" />
            </div>
            <Slider ref={sliderRef} {...settings}>
              {services.map((service) => (
                <div key={service.id} className="py-10 px-5 ">
                  <motion.div
                    className="bg-white shadow-sm dark:bg-white rounded-3xl flex flex-col relative p-5"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => {
                      if (hoveredIndex === service.id) {
                        setHoveredIndex(-1);
                      } else {
                        setHoveredIndex(service.id);
                      }
                    }}
                    style={{
                      height:
                        hoveredIndex === service.id ? hoverHeight : "260px",
                      transition: "height 0.5s",
                    }}
                  >
                    <motion.div
                      className="relative p-5"
                      animate={{
                        x: [-5, 5, 5, -5, -5],
                        y: [0, 5, -5, 0, 0],
                        z: [0, 0, 0, 0, 0],
                      }}
                      transition={{ duration: 10, repeat: Infinity }}
                    >
                      <Image
                        src={service.image}
                        alt={service.image}
                        quality={100}
                        className="absolute  transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 xsm:w-8 xsm:h-8"
                      />
                    </motion.div>
                    <div className="py-5 xsm:py-2">
                      <h5 className="text-xl font-bold text-neocon_black dark:text-neocon_black">
                        {service.header}
                      </h5>
                      <p className="text-xs text-neocon_gray">
                        {service.content}
                      </p>
                    </div>
                    {hoveredIndex === service.id && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 border-0 border-gray-300 duration-700 p-5"
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="flex justify-between ">
                          <Link href="/" className=" w-full">
                            <button
                              disabled={hoveredIndex === -1}
                              className="border border-neocon_gray bg-white text-neocon_gray hover:border-neocon_black hover:bg-neocon_black hover:text-white duration-500 py-2 px-6 w-4/5 text-center rounded-2xl text-sm"
                            >
                              Request
                            </button>
                          </Link>
                          <Link
                            href="/"
                            className="my-auto bg-neocon_green text-white  text-3xl text-center"
                          >
                            <BsArrowDownRightSquare />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              ))}
            </Slider>
            <div
              className="flex justify-end absolute top-48 -right-5"
              onClick={goToNextSlide}
            >
              <MdKeyboardArrowRight className="bg-neocon_gray dark:bg-neocon_gray text-white dark:text-white w-12 h-12 rounded-2xl xsm:w-6 xsm:h-6 xsm:rounded-md sm:w-6 sm:h-6 sm:rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
