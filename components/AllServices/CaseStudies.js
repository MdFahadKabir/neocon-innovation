import React, { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { BsFillArrowDownRightSquareFill } from "react-icons/bs";
import Stories1 from "../../public/assets/images/Service/stories1.png";
import Stories2 from "../../public/assets/images/Service/stories2.png";

const caseStudies = [
  {
    id: 1,
    image: Stories1,
    header: "Case Studies",
    content: "Explore All Stories",
  },
  {
    id: 2,
    image: Stories2,
    header: "Case Studies",
    content: "Explore All Stories",
  },
  {
    id: 3,
    image: Stories1,
    header: "Case Studies",
    content: "Explore All Stories",
  },
];
const settings = {
  arrows: false,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,

  responsive: [
    {
      breakpoint: 1536,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
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

function CaseStudies() {
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
      <div className="bg-neocon_g_sw">
        <div className="px-5 2xl:px-60">
          <div className="py-10">
            <div className="flex justify-between xsm:flex-col sm:flex-col md:flex-col w-full">
              <div className="flex flex-col xsm:w-full sm:w-full md:w-full w-1/2 my-10 relative">
                <p className="text-xl font-semibold mb-5">Case Studies</p>
                <p className="text-4xl font-extrabold">
                  Success <span className="text-neocon_green">Stories</span>
                </p>
                <p className="text-base font-normal text-neocon_gray my-10">
                  Lorem ipsum dolor sit amet consectetur. Scelerisque ut mauris
                  leo faucibus amet. Nunc mattis scelerisque commodo ultrices
                  quam id sit.
                </p>
                <div className="flex flex-row">
                  <p className="text-lg font-semibold my-auto">
                    Explore All Stories
                  </p>
                  <BsFillArrowDownRightSquareFill
                    className="mx-5 my-auto text-neocon_green rounded-xl"
                    size={30}
                  />
                </div>
                <div className="absolute bottom-0 right-0 flex flex-row">
                  <div
                    className="bg-white rounded-xl xsm:mx-2 sm:mx-2 mx-5"
                    onClick={goToPrevSlide}
                  >
                    <MdKeyboardArrowLeft className="p-1" size={30} />
                  </div>
                  <div
                    className="bg-white rounded-xl xsm:w-20 w-40 flex justify-end"
                    onClick={goToNextSlide}
                  >
                    <MdKeyboardArrowRight className="p-1" size={30} />
                  </div>
                </div>
              </div>
              <div className="xsm:w-full sm:w-full md:w-full w-1/2">
                <Slider ref={sliderRef} {...settings} >
                  {caseStudies.map((caseStudies) => (
                    <div key={caseStudies.id}>
                      <div className="relative  xsm:my-5 sm:my-5 px-2 my-10 w-full">
                        <Image
                          src={caseStudies.image}
                          alt={caseStudies.header}
                          width={300}
                          height={100}
                          className="w-auto rounded-3xl mx-auto"
                        />

                        <div className="flex flex-col backdrop-blur-md bg-white/80  rounded-3xl absolute  lg:top-40 xl:top-60 top-64 xl:inset-x-5 lg:inset-x-2 inset-x-10 p-6 ">
                          <p className="text-xs font-semibold text-neocon_green">
                            {caseStudies.header}
                          </p>
                          <div className="flex flex-row">
                            <p className="text-lg font-semibold my-auto">
                              {caseStudies.content}
                            </p>
                            <BsFillArrowDownRightSquareFill
                              className="mx-2 my-auto text-neocon_green rounded-xl"
                              size={30}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CaseStudies;
