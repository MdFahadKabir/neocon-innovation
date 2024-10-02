import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import Ksl from "../../public/assets/images/Home/clients/ksl-logo.png";
import Cloudone from "../../public/assets/images/Home/clients/cloudone.png";
import Coronet from "../../public/assets/images/Home/clients/coronet-logo.png";
const logos = [
  {
    id: 1,
    image: Ksl,
  },
  {
    id: 2,
    image: Cloudone,
  },
  {
    id: 3,
    image: Coronet,
  },
  {
    id: 4,
    image: Ksl,
  },
  {
    id: 5,
    image: Cloudone,
  },
  {
    id: 6,
    image: Coronet,
  },
];
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: -1,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: -1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: -1,
      },
    },
    {
      breakpoint: 280,
      settings: {
        slidesToShow: 1,
        slidesToScroll: -1,
      },
    },
  ],
};

function Client() {
  return (
    <>
      <div className="px-5 2xl:px-40 py-10">
        <div className="flex justify-center">
          <p className="text-xl font-semibold">Out Clients</p>
        </div>
        <div className="pt-10">
          <Slider {...settings} className=" my-auto ">
            {logos.map((logo) => (
              <div className="my-auto">
                <div key={logo.id} className="my-auto mx-2">
                  <motion.div whileHover={{ scale: 1.1 }}>
                    <Image
                      src={logo.image}
                      width={1000}
                      quality={100}
                      alt="Partner logo"
                      className="w-60 mx-auto p-5"
                    />
                  </motion.div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Client;
