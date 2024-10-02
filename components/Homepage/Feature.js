import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import Image from "next/image";
import Airbnb from "../../public/assets/images/Home/feature/airbnb.png";
import Basecamp from "../../public/assets/images/Home/feature/basecamp.png";
import Outreach from "../../public/assets/images/Home/feature/outreach.png";
import Classpass from "../../public/assets/images/Home/feature/classpass.png";
import Notion from "../../public/assets/images/Home/feature/notion.png";
import Asana from "../../public/assets/images/Home/feature/asana.png";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
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

const Feature_logos = [
  {
    id: 1,
    image: Airbnb,
  },
  {
    id: 2,
    image: Basecamp,
  },
  {
    id: 3,
    image: Outreach,
  },
  {
    id: 4,
    image: Classpass,
  },
  {
    id: 5,
    image: Notion,
  },
  {
    id: 6,
    image: Asana,
  },
];

function Feature() {
  return (
    <>
      <div className="px-5 2xl:px-40 pt-20 pb-10">
        <div className="mx-auto ">
          <Slider {...settings} className="my-auto">
            {Feature_logos.map((Feature_logo) => (
              <div key={Feature_logo.id} className="px-2 my-auto">
                <motion.div className="my-auto" whileHover={{ scale: 1.1 }}>
                  <Image
                    src={Feature_logo.image}
                    alt="Partner logo"
                    quality={100}
                    className="mx-auto"
                  />
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Feature;
