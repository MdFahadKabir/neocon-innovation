import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Circle from "../../public/assets/images/Company/Aboutus/circle.png";
import Clock from "../../public/assets/images/Company/Aboutus/clock.png";
import Drawer from "../../public/assets/images/Company/Aboutus/drawer.png";
import Fluent from "../../public/assets/images/Company/Aboutus/fluent.png";
import Vector from "../../public/assets/images/Company/Aboutus/vector.png";
import Agile from "../../public/assets/images/Company/Aboutus/agile.png";
import CustomerFeedback from "../AllServices/CustomerFeedback";
import CaseStudies from "../AllServices/CaseStudies";
function ChooseUs() {
  return (
    <>
      <div className="px-5 2xl:px-60 ">
        <div className="py-20">
          <div className="text-center mb-20">
            <p className="text-xl font-semibold">Why Choose Us</p>
            <p className="text-4xl font-extrabold">
              Why Neocon Is Best For
              <span className="text-neocon_green">You</span>?
            </p>
          </div>
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-3 gap-8">
              <motion.div
                class="p-6 bg-white border border-gray-200 rounded-3xl shadow mx-auto text-center"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={Vector}
                  width={50}
                  height={50}
                  className="w-6 h-6 mx-auto"
                />
                <h5 class="my-2 text-lg font-semibold  text-neocon_black ">
                  10+ Years of Experience
                </h5>

                <p class="my-3 text-sm font-normal text-neocon_gray">
                  Neocon Technologies has been providing software development
                  and IT consulting services for over a decade. During this
                  time, we have gained valuable experience in developing
                  customized software solutions for businesses across diverse
                  industries.
                </p>
              </motion.div>
              <motion.div
                class="p-6 bg-white border border-gray-200 rounded-3xl shadow mx-auto text-center"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={Drawer}
                  width={50}
                  height={50}
                  className="w-6 h-6 mx-auto"
                />
                <h5 class="my-2 text-lg font-semibold  text-neocon_black ">
                  Expertise
                </h5>

                <p class="my-3 text-sm font-normal text-neocon_gray">
                  Our team of highly skilled and experienced software developers
                  possesses the knowledge and expertise to deliver customized
                  software solutions that meet your unique business needs.
                </p>
              </motion.div>
              <motion.div
                class="p-6 bg-white border border-gray-200 rounded-3xl shadow mx-auto text-center"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={Clock}
                  width={50}
                  height={50}
                  className="w-6 h-6 mx-auto"
                />
                <h5 class="my-2 text-lg font-semibold  text-neocon_black ">
                  Quality
                </h5>

                <p class="my-3 text-sm font-normal text-neocon_gray">
                  We are committed to delivering software solutions of the
                  highest quality, delivered on time and within budget. We
                  follow a rigorous development process to ensure that our
                  software solutions meet the highest standards of quality and
                  exceed your expectations.
                </p>
              </motion.div>
              <motion.div
                class="p-6 bg-white border border-gray-200 rounded-3xl shadow mx-auto text-center"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={Fluent}
                  width={50}
                  height={50}
                  className="w-6 h-6 mx-auto"
                />
                <h5 class="my-2 text-lg font-semibold  text-neocon_black ">
                  Competitive Pricing
                </h5>

                <p class="my-3 text-sm font-normal text-neocon_gray">
                  Neocon Technologies offers competitive pricing for our
                  services without compromising on quality. Our pricing is
                  transparent, and we work closely with our clients to ensure
                  that they get the best value for their investment.
                </p>
              </motion.div>
              <motion.div
                class="p-6 bg-white border border-gray-200 rounded-3xl shadow mx-auto text-center"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={Circle}
                  width={50}
                  height={50}
                  className="w-6 h-6 mx-auto"
                />
                <h5 class="my-2 text-lg font-semibold  text-neocon_black ">
                  Customer Satisfaction
                </h5>

                <p class="my-3 text-sm font-normal text-neocon_gray">
                  At Neocon Technologies, customer satisfaction is our top
                  priority. We work closely with our clients to understand their
                  specific needs and provide ongoing support and maintenance
                  services to ensure that their software systems are running
                  smoothly and efficiently.
                </p>
              </motion.div>
              <motion.div
                class="p-6 bg-white border border-gray-200 rounded-3xl shadow mx-auto text-center"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={Agile}
                  width={50}
                  height={50}
                  className="w-6 h-6 mx-auto"
                />
                <h5 class="my-2 text-lg font-semibold  text-neocon_black ">
                  Confidentiality & Security
                </h5>

                <p class="my-3 text-sm font-normal text-neocon_gray">
                  We understand the importance of confidentiality and security
                  when it comes to handling sensitive business data. We take all
                  necessary measures to ensure that our clients' data and
                  information are kept secure and confidential.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <CustomerFeedback />
      <CaseStudies />
    </>
  );
}

export default ChooseUs;
