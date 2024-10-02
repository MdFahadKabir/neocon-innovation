import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Star_t from "../../public/assets/images/Home/hero/bg_start_t.png";
import Stars from "../../public/assets/images/Home/hero/stars.png";
import Line from "../../public/assets/images/Home/hero/line.png";
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
      <div className="bg-gradient-to-b from-neocon_g_gw via-neocon_g_g to-neocon_g_w">
        <div className="px-5 2xl:px-40 ">
          <Image
            src={Star_t}
            alt="stars top"
            quality={100}
            className="w-4/12 xsm:hidden sm:hidden block"
          />
          <div className="flex xsm:flex-col sm:flex-col justify-between my-auto w-full">
            <div className="flex flex-col text-4xl 2xl:text-5xl font-extrabold 2xl:pb-0 my-auto w-3/5 xsm:w-full">
              <p className="text-base font-normal py-5">Home/{path}</p>
              <p>Keep Business</p>
              <p className="my-2">Safe And Ensure</p>
              <p className="text-neocon_green">High Availability.</p>

              <div className="flex flex-row my-10">
                <Image
                  src={Stars}
                  alt="stars"
                  quality={100}
                  className="w-8 h-8  xl:w-10 xl:h-10 2xl:w-10 2xl:h-10 my-auto"
                />
                <Image
                  src={Line}
                  alt="line"
                  quality={100}
                  className="w-1 h-9 2xl:w-1 2xl:h-14 mx-3"
                />
                <p className="text-sm 2xl:text-lg font-normal text-neocon_gray my-auto ">
                  We've One Mission to be the Best Software Company{" "}
                  <span className="xsm:hidden">
                    <br />
                  </span>
                  in Bangladesh
                </p>
              </div>
            </div>

            <div className="flex flex-col w-2/5 xsm:w-full">
              <div className="flex justify-end">
                <video
                  className="xsm:my-5w-full rounded-3xl"
                  playsInline
                  loop
                  muted
                  controls
                  alt="All the devices"
                  src="https://stream.mux.com/6fiGM5ChLz8T66ZZiuzk1KZuIKX8zJz00/medium.mp4"
                  ref={videoEl}
                />
              </div>
              <div className="flex justify-end">
                <p className="text-base text-normal text-neocon_gray xsm:text-center">
                  Innovators, change-makers and thought leaders—you’ll find them
                  all at Neocon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
