import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Star_t from "../../public/assets/images/Home/hero/bg_start_t.png";
import Stars from "../../public/assets/images/Home/hero/stars.png";
import Line from "../../public/assets/images/Home/hero/line.png";
import Heroimg from "../../public/assets/images/Home/hero/hero_img.png";
function Hero() {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);
  const router = useRouter();
  const path = router.pathname.split("/")[1];
  return (
    <>
      <div className="bg-gradient-to-b from-neocon_g_fw via-neocon_g_mg to-white">
        <div className="px-5 2xl:px-60 ">
          <Image
            src={Star_t}
            quality={100}
            className="w-1/3 xsm:hidden sm:hidden block"
          />
          <div className="flex xsm:flex-col sm:flex-col justify-between">
            <div className="flex flex-col xsm:text-3xl sm:text-3xl md:text-3xl text-6xl font-extrabold xsm:my-20 my-auto">
              <p className="text-base font-normal py-5">Home/{path}</p>
              <p className="my-2">We Offer Saas For </p>
              <p>
                Better <span className="text-neocon_green">Business.</span>
              </p>
              <div className="flex flex-row my-10 ">
                <Image src={Stars} className="w-8 h-10 my-auto" />
                <Image src={Line} className="w-1 xsm:h-16 sm:h-16 h-12 mx-3" />
                <p className="text-sm 2xl:text-base font-normal text-neocon_gray my-auto ">
                  We offer a wide range of customized software development
                  <span className="xsm:hidden sm:hidden">
                    <br />
                  </span>
                  <span>&nbsp;</span>
                  services tailored to meet your specific needs.
                </p>
              </div>
            </div>
            <Image
              src={Heroimg}
              quality={100}
              className="xsm:w-full xsm:my-5 md:w-5/12 w-5/12 md:-mt-4 lg:-mt-6 xl:-mt-6 2xl:-mt-10"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
