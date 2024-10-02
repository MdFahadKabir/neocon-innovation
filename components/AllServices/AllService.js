import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import BusinessAnalysis from "../../public/assets/images/Home/settings/businessanalysis.png";
import DataAnalysis from "../../public/assets/images/Home/settings/dataanalysis.png";
import IOT from "../../public/assets/images/Home/settings/iot.png";
import SmartHome from "../../public/assets/images/Home/settings/smarthome.png";
const cardData = [
  {
    header: "Software Development",
    imageSrc: BusinessAnalysis,
    description:
      "At Neocon Tech, We specialize in creating custom software solutions that are tailored to meet the unique needs of your business. Our team of experienced developers will work with you to deliver high-quality, reliable software that helps your business run more efficiently.",
    slug: "Software-Development",
  },
  {
    header: "FinTech",
    imageSrc: DataAnalysis,
    description:
      "Our cutting-edge FinTech solutions are designed to help your business stay ahead of the curve in a rapidly changing industry. From trading platforms to payment gateways, we have the expertise to develop and implement innovative solutions that drive growth and profitability.",
    slug: "FinTech",
  },
  {
    header: "Mobile Application Development",
    imageSrc: IOT,
    description:
      "Our team of expert developers specializes in creating customized mobile apps for businesses of all sizes, providing engaging and intuitive designs for both iOS and Android platforms to facilitate seamless customer interaction anytime, anywhere.",
    slug: "Mobile-Application-Development",
  },
  {
    header: "Artificial Intelligence Service",
    imageSrc: SmartHome,
    description:
      "Neocon Technologies understand the potential of artificial intelligence to transform businesses and industries. That's why we offer a range of AI services to help our clients create custom AI solutions that drive business value.",
    slug: "Artificial-Intelligence-Service",
  },
  {
    header: "IoT + Smart Home",
    imageSrc: BusinessAnalysis,
    description:
      "Our IoT and smart home solutions help businesses connect with customers in new and innovative ways. From smart home automation to industrial IoT applications, we have the expertise to design and implement solutions that help businesses achieve their goals and improve their bottom line.",
    slug: "IoT-Smart-Home",
  },
  {
    header: "Business Intelligence & Data Analytics",
    imageSrc: DataAnalysis,
    description:
      "Our BI and data analytics services offer tailored solutions for businesses to harness the power of data, gaining deeper insights into operations, customers, and market trends, empowering better decisions.",
    slug: "Business Intelligence & Data Analytics",
  },
  {
    header: "Web Application Development",
    imageSrc: BusinessAnalysis,
    description:
      "Our IoT and smart home solutions help businesses connect with customers in new and innovative ways. From smart home automation to industrial IoT applications, we have the expertise to design and implement solutions that help businesses achieve their goals and improve their bottom line.",
    slug: "Web-Application-Development",
  },
  {
    header: "Server Administration & Networking",
    imageSrc: DataAnalysis,
    description:
      "Our BI and data analytics services offer tailored solutions for businesses to harness the power of data, gaining deeper insights into operations, customers, and market trends, empowering better decisions.",
    slug: "Server-Administration-&-Networking",
  },
];
const AllService = ({ slug }) => {
  const router = useRouter();
  const path = router.pathname.split("/")[1];

  return (
    <>
      <div className="bg-neocon_g_sw">
        <div className="px-5 2xl:px-40 py-10">
          <div className="flex flex-col text-center xsm:text-lg xm:text-lg md:text-4xl text-5xl font-extrabold ">
            <p className="xsm:text-sm sm:text-sm text-xl font-semibold text-neocon_black py-2 ">
              Service
            </p>
            <p className="pb-2 xsm:pb-0 sm:pb-0 md:pb-0">
              Custom software development Offering 
            </p>
            <p className="">
              to build your&nbsp;
              <span className="text-neocon_green">Business</span>
            </p>
          </div>
          <div className="my-10 xsm:my-5">
            <div class="grid grid-cols-4 gap-6  md:grid-cols-2 lg:grid-cols-3 xsm:w-full xsm:overflow-x-scroll xsm:scrollbar-hide sm:overflow-x-scroll sm:scrollbar-hide xsm:grid-cols-none xsm:flex xsm:justify py-5">
              {cardData.map((card) => (
                <div key={card.slug}>
                  {/* <Link href={`../../Services/${card.slug}`} className=""> */}
                    <motion.div
                      class="max-w-sm p-6 bg-white border rounded-3xl shadow-md dark:bg-white h-full xsm:w-[300px] "
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.05 }}
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
                          src={card.imageSrc}
                          quality={100}
                          className="absolute  transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 xsm:w-8 xsm:h-8"
                        />
                      </motion.div>
                      <div className="py-5">
                        <p class="xsm:text-lg sm:text-lg text-xl font-semibold mb-2 h-12">
                          {card.header}
                        </p>
                        <p class="xsm-text:xs sm-text:xs text-base font-normal text-neocon_gray">
                          {card.description}
                        </p>
                      </div>
                    </motion.div>
                  {/* </Link> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AllService;
