import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";
import StarT from "../../public/assets/images/Home/contactus/star_t.png";
import StarB from "../../public/assets/images/Home/contactus/star_b.png";
import Asset from "../../public/assets/images/Home/contactus/asset.png";

function ContactUs() {
  return (
    <>
      <div className="bg-gradient-to-t from-neocon_g_sw  to-neocon_g_w">
        <div className="px-5 2xl:px-40 py-10">
          <div className="flex justify-end ">
            <Image
              src={StarT}
              alt="stars top"
              quality={100}
              className="w-4/12 xsm:hidden sm:hidden block"
            />
          </div>
          <div className="flex flex-col mx-auto relative">
            <div className="relative">
              <Image
                src={Asset}
                alt="asset"
                quality={100}
                width={1000}
                className="absolute top-0 left-0 right-0 bottom-0 mx-auto w-4/5"
              />
              <div className="absolute xsm:top-20 sm:top-20 md:top-40 lg:top-52 top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center xsm:w-full sm:w-full ">
                <div className="xsm:text-base md:text-3xl lg:text-4xl text-5xl font-extrabold text-center">
                  <p>Let’s Build Your Business!</p>
                  <p className="xsm:hidden md:text-xs lg:text-sm text-base font-extralight text-neocon_gray py-10">
                    Ready to take your business to the next level? Contact us
                    today to learn how we can help. Our team of experts will
                    work with you to understand your business needs and develop
                    customized software solutions that help you achieve your
                    goals.
                  </p>
                  <Link
                    href="/contact_us"
                    className="flex justify-center my-10 xsm:my-2"
                  >
                    <div className="xsm:text-xs sm:text-xs md:text-lg lg:text-lg text-xl font-extralight flex flex-row rounded-3xl bg-neocon_black text-white xsm:px-5 xsm:py-3 px-10 py-5">
                      <p className="xsm:px-2 px-5">Contact With Us</p>
                      <FaTelegramPlane className="my-auto" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-start md:mt-12 lg:mt-32 mt-60 pt-60 xsm:hidden sm:hidden">
            <Image
              src={StarB}
              alt="stars bottom"
              quality={100}
              className="w-4/12 "
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
