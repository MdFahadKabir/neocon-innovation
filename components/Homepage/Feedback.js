import React, { useState, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { ImStarFull, ImStarHalf } from "react-icons/im";
import Feedback1 from "../../public/assets/images/Home/feedback/feedbackAvater_1.png";
const CustomersFeedback = [
  {
    id: 1,
    image: Feedback1,
    content:
      "We've been using Neocon Tech's software solutions for over a year now. Their team has been a pleasure to work with, and their innovative solutions have made our business operations more efficient and effective than ever before.",
    rating: 5,
  },
  {
    id: 2,
    image: Feedback1,
    content:
      "Neocon Technologies has exceeded our expectations with their exceptional software solutions. Their team is incredibly knowledgeable and always willing to go above and beyond to ensure we are satisfied with their products. We highly recommend their services.",
    rating: 4.5,
  },
  {
    id: 3,
    image: Feedback1,
    content:
      "Thanks to Neocon Technologies Limited, our company has been able to scale our operations and expand our customer base. Their customized software solutions have allowed us to stay ahead of the competition and remain agile in a rapidly changing market.",
    rating: 4,
  },
  {
    id: 4,
    image: Feedback1,
    content:
      "We've been using Neocon Tech's software solutions for over a year now. Their team has been a pleasure to work with, and their innovative solutions have made our business operations more efficient and effective than ever before.",
    rating: 5,
  },
];
const settings = {
  arrows: false,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1536,
      settings: {
        slidesToShow: 3,
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
function Feedback() {
  return (
    <>
      <div className="bg-gradient-to-t from-neocon_g_sw  to-neocon_g_w">
        <div className="px-5 2xl:px-40 py-10">
          <div className="flex flex-col text-center xsm:text-lg xm:text-lg md:text-4xl text-5xl font-extrabold ">
            <p className="xsm:text-sm sm:text-sm text-xl font-semibold text-neocon_black py-2 ">
              Customers Feedbacks
            </p>
            <p className="">
              What Our Customers Are &nbsp;
              <span className="text-neocon_green">Saying</span>
            </p>
            <p className="text-base text-neocon_gray font-normal py-5">
              See what our customers have to say about our products and
              services. We value their feedback and take pride in delivering
              exceptional solutions that meet their needs.
            </p>
          </div>
          <Slider {...settings}>
            {CustomersFeedback.map((feedback) => (
              <div className="">
                <div
                  key={feedback.id}
                  className="py-10  mx-2 2xl:mx-10 px-2 2xl:px-10 rounded-3xl backdrop-blur-md xsm:backdrop-blur-none sm:backdrop-blur-none xsm:bg-white bg-white/60 shadow-sm"
                >
                  <Image
                    src={feedback.image}
                    alt={feedback.image}
                    quality={100}
                    className="w-12 mx-auto"
                  />
                  <div className="flex items-center text-center py-5">
                    <FaQuoteLeft
                      className="mr-2 text-neocon_green -mt-20"
                      size={70}
                    />
                    <p className="text-xs text-neocon_gray">
                      {feedback.content}
                    </p>
                    <FaQuoteRight
                      className="ml-2 text-neocon_green -mb-20"
                      size={70}
                    />
                  </div>
                  <div className="flex justify-center">
                    {Array.from(
                      { length: Math.floor(feedback.rating) },
                      (_, index) => (
                        <ImStarFull
                          key={index}
                          className="w-4 h-4 text-neocon_black"
                        />
                      )
                    )}
                    {feedback.rating % 1 !== 0 && (
                      <ImStarHalf className="w-4 h-4 text-neocon_black" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Feedback;

