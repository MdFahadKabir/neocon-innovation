import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { motion } from "framer-motion";
import OMS from "../../public/assets/images/Company/Director/davater.png";
import ContactUs from "../Homepage/ContactUs";

const products = [
  {
    id: 1,
    image: OMS,
    header: "Hard work is the foundation of any successful organization.",
    description:
      "Our Honorable Chairperson Rowshan Ara Alam is a highly respected technology industry, serving as the Chairperson of Neocon Technologies Limited. With her dynamic leadership, she has steered the company towards achieving its strategic goals. A true visionary, she has a keen understanding of the rapidly changing technology landscape and is always looking for new and innovative ways to drive growth and create value for the company's stakeholders.",
    description_2:
      "Hard work is the foundation of any successful organization. It is the unwavering dedication to excellence, the determination to achieve greatness, and the perseverance to overcome challenges that define us as individuals and as a company.",
    name: "ROWSHAN ARA ALAM",
    designation: "Chairperson",
    slug: "OMS",
  },
  {
    id: 2,
    image: OMS,
    header:
      "Foster strong clients relationship building rather than just business at hand",
    description:
      "Our Honorable Managing Director, Mohammed Alamgir Kabir, has been the driving force behind Neocon Technologies Limited's remarkable journey from a beginning to a leading software company. With his far-sighted vision and inspiring leadership, he has led organization through numerous challenges and opportunities, ensuring that we stay ahead of the curve in a constantly evolving technological landscape.",
    description_2:
      "At Neocon Technologies, we are committed to providing our clients with cutting-edge technology solutions that help them achieve clients business goals. We believe that our success is directly tied to the success of our clients, and we are dedicated to building long-lasting partnerships that drive growth and innovation",
    name: "MOHAMMED ALAMGIR KABIR",
    designation: "Managing Director",
    slug: "OMS",
  },
  {
    id: 3,
    image: OMS,
    header: "Innovation in technology leads the way towards excellence",
    description:
      "Honorable Deputy Managing Director, Mohammed Shadman Kabir is a passionate leader who provides a modern vision to the company. He completed his graduation from the University of New South Wales, Sydney, Australia, in the field of Accounting and Marketing. He has also pursued an offshore Professional Year from Navitas Professional Australia. ",
    description_2:
      "Technical innovation is the flagbearer of excellence, and at Neocon Technologies Limited, we have always been at the forefront of this movement. From our humble beginnings as a dynamic start-up to our position today as a market-leading software development company, we have remained steadfast in our commitment to providing cutting-edge solutions to our clients.",
    name: "MOHAMMED SHADMAN KABIR",
    designation: "Deputy Managing Director",
    slug: "OMS",
  },
  {
    id: 4,
    image: OMS,
    header: "Innovation in technology leads the way towards excellence",
    description:
      "Honorable Director Sabbria Kabir is a potential leader. She is graduating from Taylor's University, Malaysia. Besides being an ambitious individual she has a broader mindset in business.",
    description_2:
      "We firmly believe that Innovative technologies will build a productive business system for overall growth, and that it is only through the power of technology that we can truly empower people.The hard work and dedication of each and every member of the Neocon Technologies Limited family that we have been able to achieve.",
    name: "SABBRIA KABIR",
    designation: "Director",
    slug: "OMS",
  },
];

const Director = ({ slug }) => {
  const router = useRouter();
  const path = router.pathname.split("/")[1];

  return (
    <>
      <div className="px-5 2xl:px-60 ">
        <div>
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
              <motion.div
                key={product.id}
                className={`w-full flex p-2 py-20 xsm:py-5 sm:py-5 ${
                  product.id % 2 === 0
                    ? "flex-row xsm:flex-col sm:flex-col"
                    : "flex-row-reverse xsm:flex-col sm:flex-col"
                }`}
                variants={productVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div className="w-full my-auto">
                  <Image
                    src={product.image}
                    width={500}
                    height={500}
                    alt={product.text}
                    className="w-1/2 mx-auto"
                    quality={100}
                  />
                </motion.div>
                <motion.div className="w-full my-auto ">
                  <div className="px-20 xsm:px-0 sm:px-0">
                    <p className="text-3xl xsm:text-xl sm:text-xl font-semibold py-2">
                      {product.header}
                    </p>

                    <p className="text-sm xsm:text-xs sm:text-xs font-normal text-neocon_gray py-2">
                      {product.description}
                    </p>
                    <p className="text-sm font-normal text-neocon_gray py-2">
                      "{product.description_2}"
                    </p>
                    <div className="flex flex-row xsm:flex-col sm:flex-col">
                      <p className="text-neocon_green text-lg xsm:text-base sm:text-base">
                        {product.name}
                      </p>
                      <p className="mx-5 xsm:mx-0 sm:mx-0 text-sm  xsm:text-xs sm:text-xs my-auto">
                        {product.designation}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <ContactUs />
    </>
  );
};

export default Director;
