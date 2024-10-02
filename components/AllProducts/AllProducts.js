import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import OMS from "../../public/assets/images/Products/dsecse.png";

const products = [
  {
    id: 1,
    image: OMS,
    header: "OMS",
    sub_header: "Maximize Your DSE/CSE Trading Potential with Our OMS Solution",
    description:
      "Our  OMS solution is built with the latest technology, ensuring reliability, security, and scalability for your business and it's designed to help you maximize your trading potential on the DSE/CSE. With advanced features and intuitive interfaces, you can easily manage your trading operations and make informed decisions based on real-time data.",
    slug: "OMS",
  },
  {
    id: 2,
    image: OMS,
    header: "NINJA AI ChatBot",
    sub_header: "Revolutionize Your Customer Service with NINJA AI ChatBot",
    description:
      "NINJA AI ChatBot is designed to automate customer support, reduce response times, and increase customer satisfaction, while saving businesses time and money. It can be integrated with various platforms such as websites, social media, and messaging applications.",
    slug: "NINJA AI ChatBot",
  },
  {
    id: 3,
    image: OMS,
    header: "ERP",
    sub_header: "Streamline Your Business Operations with Our ERP Solution",
    description:
      "Our ERP solution is designed to streamline and optimize all of your business operations, from finance and accounting to inventory management and supply chain operations. With advanced features such as real-time reporting and analysis, customizable dashboards, and integration with other business systems, our ERP solution provides a comprehensive platform for businesses of all sizes. ",
    slug: "Product 3",
  },
];

const AllProducts = ({ slug }) => {
  const router = useRouter();
  const path = router.pathname.split("/")[1];

  return (
    <>
      <div className="px-5 2xl:px-40 py-10">
        <div className="flex flex-col text-center text-4xl font-extrabold py-10">
          <p className="text-xl font-semibold text-neocon_black py-2 ">
            All Products
          </p>

          <p>
            Get Benefits using Our Industry-Leading
            <span className="text-neocon_green"> Software Product</span>
          </p>
          <p className="text-base text-neocon_gray font-normal py-5">
            Upgrade to our industry-leading software product today and enjoy a
            multitude of benefits for your business which will boost
            productivity and efficiency across your entire organization.
          </p>
        </div>

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
                className={`w-full flex p-2  ${
                  product.id % 2 === 0 ? "flex-row-reverse" : "flex-row"
                }`}
                variants={productVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div className="w-full my-auto">
                  <Image
                    src={product.image}
                    width={1900}
                    height={500}
                    alt={product.text}
                    className="w-full"
                    quality={100}
                  />
                </motion.div>
                <motion.div className="w-full my-auto ">
                  <div className="px-20">
                    <p className="text-lg font-bold ">{product.header}</p>
                    <p className="text-2xl font-extrabold">
                      {product.sub_header}
                    </p>
                    <p className="text-base font-normal text-neocon_gray">
                      {product.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AllProducts;
