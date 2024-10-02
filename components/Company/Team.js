import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { motion } from "framer-motion";
import OMS from "../../public/assets/images/Company/Director/tavater.png";
import ContactUs from "../Homepage/ContactUs";

const products = [
  {
    id: 1,
    image: OMS,
    name: "Muhammad Selim Azad, CMA",
    description:
      "Muhammad Selim Azad, the CEO of Neocon Technologies Limited, is a true visionary and passionate for the power of technology and management. With a deep understanding of the industry and a keen eye for innovation, he has been instrumental in driving the company's success and growth. His enthusiasm for technology and management is infectious, and he is always eager to explore new and exciting ways to push the boundaries of what is possible. Under his leadership, Neocon Technologies Limited is well-positioned to continue to thrive and grow in a rapidly evolving technological landscape.",
    designation: "CEO",
    slug: "OMS",
  },
  {
    id: 2,
    image: OMS,
    name: "ZUBAIR HASAN",
    description:
      "ZUBAIR HASAN, Director and Chief Technology Officer of Neocon Technologies Limited, is an avid technology enthusiast with a passion for software development, server infrastructure, and cyber security. With over a decade of experience as a technology professional, he has been at the forefront of leading numerous tech firms and international tech teams, constantly pushing the boundaries of innovation and technical excellence. His expertise and strategic vision have been instrumental in driving Neocon Technologies Limited's growth and success in the fiercely competitive technology landscape.",
    designation: "Director of IT",
    slug: "OMS",
  },
  {
    id: 3,
    image: OMS,
    name: "MD. KALIM AMZAD CHY",
    description:
      "MD. KALIM AMZAD CHY, Director and Head of Analytics of Neocon Technologies limited, is a seasoned technology professional with a passion for data science. With years of experience in the industry, he has established himself as a thought leader in the field of analytics. His enthusiasm for technology and data science is reflected in his numerous research papers published in top-tier journals around the world. As the head of analytics at Neocon Technologies, he is dedicated to utilizing his expertise to drive the company's growth and innovation in the field of data science.",
    designation: "Director",
    slug: "OMS",
  },
];

const Team = ({ slug }) => {
  const router = useRouter();
  const path = router.pathname.split("/")[1];

  return (
    <>
      <div className="px-5 2xl:px-60 ">
        <div className="flex justify-between xsm:flex-col sm:flex-col my-20 xsm:my-10 sm:my-10">
          <div className="py-20 w-8/12 xsm:w-full sm:w-full xsm:py-5 sm:py-5">
            <p className="text-3xl font-semibold mb-5">
              We are like a <span className="text-neocon_green">family</span>
            </p>
            <p className="text-sm font-normal text-neocon_gray">
              Neocon Technologies Limited owes its success to the tireless
              efforts and unwavering commitment of every member of our team.
              Without their hard work and dedication, we wouldn't be where we
              are today.
            </p>
          </div>
          <div className="mx-10"></div>
          <div className="border-l-2 border-r-2 border-dashed border-neocon_green">
            {products.map((product) => {
              const productVariants = {
                hidden: {
                  opacity: 0,
                  x: product.id % 2 === 0 ? 100 : -100,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    ease: "easeInOut",
                  },
                },
              };
              return (
                <div>
                  <motion.div
                    key={product.id}
                    className={`w-full flex py-20 xsm:py-5 sm:py-5 ${product.id % 2 === 0
                      ? "flex-row xsm:flex-col sm:flex-col"
                      : "flex-row-reverse xsm:flex-col sm:flex-col"
                      }`}
                    variants={productVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.div key={product.id} className={`w-full my-auto flex ${product.id % 2 === 0 ? "justify-start" : "justify-end"}`}>
                      <Image
                        src={product.image}
                        width={500}
                        height={500}
                        alt={product.text}
                        className="w-1/2 border-2 border-neocon_green  rounded-3xl xsm:mx-auto sm:mx-auto"
                        quality={100}
                      />
                    </motion.div>
                    <motion.div className="w-full my-auto ">
                      <div className=" p-6">
                        <p className="text-sm font-semibold ">{product.name}</p>
                        <p className="text-sm font-normal text-neocon_gray py-5">
                          {product.description}
                        </p>
                        <p className="text-neocon_green">
                          {product.designation}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <ContactUs />
    </>
  );
};

export default Team;
