import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { ImStarFull, ImStarHalf } from "react-icons/im";
import Feedback1 from "../../public/assets/images/Home/feedback/feedbackAvater_1.png";
import Asset from "../../public/assets/images/Service/asset.png";
const services = [
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
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

function CustomerFeedback() {
  return (
    <>
      <div className="px-5 2xl:px-60 py-10">
        <div className="relative xsm:hidden sm:hidden md:hidden block">
          
            <Image
              src={Asset}
              alt="Asset Image"
              width={2000}
              height={1000}
              quality={100}
              className=" w-full "
            />
          
          <div className=" absolute  inset-0 ">
            <div className="text-center lg:mx-60 mx-80">
              <p className="text-xl font-bold">
                Customers Feedbacks
              </p>
              <p className="text-4xl lg:text-3xl font-extrabold">
                What Our Customers Are{" "}
                <span className="text-neocon_green">Saying</span>
              </p>
              <p className="text-base font-normal text-neocon_gray my-5">
                Lorem ipsum dolor sit amet consectetur. Tempor montes duis nisi
                leo adipiscing nunc vel. Elit nisl eu hendrerit hendrerit.
              </p>
            </div>
            <div className="py-5 lg:mx-80 mx-96">
              <Slider {...settings}>
                {services.map((service) => (
                  <div className="mx-auto" key={service.id}>
                    <div className="py-5 px-2 rounded-3xl bg-white/80 shadow-sm border w-full  mx-auto">
                      <Image
                        src={service.image}
                        quality={100}
                        className="w-12 mx-auto "
                      />
                      <div className="flex items-center text-center py-5">
                        <FaQuoteLeft
                          className="mr-2 text-neocon_green -mt-20"
                          size={30}
                        />
                        <p className="text-xs text-neocon_gray">
                          {service.content}
                        </p>
                        <FaQuoteRight
                          className="ml-2 text-neocon_green -mb-20"
                          size={30}
                        />
                      </div>
                      <div className="flex justify-center">
                        {Array.from(
                          { length: Math.floor(service.rating) },
                          (_, index) => (
                            <ImStarFull
                              key={index}
                              className="w-4 h-4 text-neocon_black"
                            />
                          )
                        )}
                        {service.rating % 1 !== 0 && (
                          <ImStarHalf className="w-4 h-4 text-neocon_black" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
        <div className=" xsm:block sm:block md:block hidden">
          <div className="text-center">
            <p className="text-base font-bold">
              Customers Feedbacks
            </p>
            <p className="text-4xl xsm:text-xl sm:text-xl font-extrabold">
              What Our Customers Are{" "}
              <span className="text-neocon_green">Saying</span>
            </p>
            <p className="text-base xsm:text-xs sm:text-xs font-normal text-neocon_gray my-5">
              Lorem ipsum dolor sit amet consectetur. Tempor montes duis nisi
              leo adipiscing nunc vel. Elit nisl eu hendrerit hendrerit.
            </p>
          </div>
          <div className="py-5 md:mx-40">
            <Slider {...settings}>
              {services.map((service) => (
                <div className="mx-auto" key={service.id}>
                  <div className="py-5 px-2 rounded-3xl bg-white/80 shadow-sm border w-full  mx-auto">
                    <Image
                      src={service.image}
                      quality={100}
                      className="w-12 mx-auto "
                    />
                    <div className="flex items-center text-center py-5">
                      <FaQuoteLeft
                        className="mr-2 text-neocon_green -mt-20"
                        size={30}
                      />
                      <p className="text-xs text-neocon_gray">
                        {service.content}
                      </p>
                      <FaQuoteRight
                        className="ml-2 text-neocon_green -mb-20"
                        size={30}
                      />
                    </div>
                    <div className="flex justify-center">
                      {Array.from(
                        { length: Math.floor(service.rating) },
                        (_, index) => (
                          <ImStarFull
                            key={index}
                            className="w-4 h-4 text-neocon_black"
                          />
                        )
                      )}
                      {service.rating % 1 !== 0 && (
                        <ImStarHalf className="w-4 h-4 text-neocon_black" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
export default CustomerFeedback;
