import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BsFillArrowDownRightSquareFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { MdMail } from "react-icons/md";
import Services from "../../public/assets/images/Service/services.png";
function RequestTrial() {
  const [isOpen, setIsOpen] = useState(false);
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const labelVariants = {
    hidden: { opacity: 1, y: 0 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiry: "",
    phone: "",
    message: "",
  });

  const { name, email, inquiry, phone, message } = formData;

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Submit form logic goes here
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div>
        <div className="xsm:px-1 px-5 2xl:px-60 ">
          <div className="flex justify-between xsm:flex-col sm:flex-col w-full">
            <div className="flex flex-col w-1/2 xsm:w-full sm:w-full bg-neocon_blue_200 p-6 rounded-3xl text-white">
              <div className="">
                <p className="text-3xl font-bold">
                  Let’s Enjoy Your Free Trial
                </p>
                <p className="text-7xl font-extrabold py-10">
                  15 <span className="text-2xl">days</span>
                </p>
                <p className="text-base font-normal">
                  Lorem ipsum dolor sit amet consectetur. Montes sapien sit
                  tempor sit purus molestie volutpat. Faucibus interdum platea
                  in facilisi hendrerit nec amet. Quis nunc nunc pharetra
                  lacinia. Fermentum phasellus nisi tortor nullam ullamcorper
                  nibh odio.
                </p>
              </div>
            </div>

            <div className="w-1/2 xsm:w-full sm:w-full">
              <motion.form
                onSubmit={handleSubmit}
                variants={variants}
                initial="hidden"
                animate="visible"
                className="w-full p-6"
              >
                <div className="flex justify-between xsm:flex-col sm:flex-col">
                  <div className="mb-4 w-full relative">
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-neocon_blue_200 rounded-xl shadow-sm focus:outline-none focus:ring-1 focus:ring-neocon_blue_200 focus:border-neocon_blue_200"
                      required
                    />
                    <motion.label
                      htmlFor="name"
                      className={`absolute left-3 transform duration-700 ${
                        name ? "text-neocon_blue -top-3 bg-white" : "top-2"
                      } text-neocon_gray text-sm cursor-text`}
                      variants={labelVariants}
                      initial="hidden"
                      animate={name ? "visible" : "hidden"}
                    >
                      Name
                    </motion.label>
                  </div>
                  <div className="mx-5"></div>
                  <div className="mb-4 w-full relative">
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-neocon_blue_200 rounded-xl shadow-sm focus:outline-none focus:ring-1 focus:ring-neocon_blue_200 focus:border-neocon_blue_200"
                      required
                    />
                    <motion.label
                      htmlFor="email"
                      className={`absolute left-3 transform duration-700 ${
                        email ? "text-neocon_blue -top-3 bg-white" : "top-2"
                      } text-neocon_gray text-sm cursor-text`}
                      variants={labelVariants}
                      initial="hidden"
                      animate={email ? "visible" : "hidden"}
                    >
                      Email
                    </motion.label>
                  </div>
                </div>

                <div className="flex justify-between xsm:flex-col sm:flex-col">
                  <div className="mb-4 w-full relative">
                    <select
                      id="inquiry"
                      name="inquiry"
                      value={inquiry}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-neocon_blue_200 rounded-xl shadow-sm focus:outline-none focus:ring-1 focus:ring-neocon_blue_200 focus:border-neocon_blue_200 text-black appearance-none"
                      required
                      onClick={toggleDropdown}
                    >
                      <option value=""></option>
                      <option value="Sales Inquiry">Sales Inquiry</option>
                      <option value="Technical Support">
                        Technical Support
                      </option>
                      <option value="Other">Other</option>
                    </select>
                    <motion.label
                      htmlFor="inquiry"
                      className={`absolute left-3 transform duration-700 -translate-x-1/2 text-neocon_gray text-sm cursor-text ${
                        inquiry ? "text-neocon_blue -top-3 bg-white" : "top-2"
                      }`}
                      initial={{ opacity: 1, y: 20 }}
                      animate={
                        inquiry ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }
                      }
                      transition={{ type: "tween" }}
                    >
                      Inquiry
                    </motion.label>
                    <motion.div
                      className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none"
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.7 }}
                    >
                      <IoIosArrowDown className="text-neocon_blue" />
                    </motion.div>
                  </div>
                  <div className="mx-5"></div>

                  <div className="mb-4 w-full relative">
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-neocon_blue_200 rounded-xl shadow-sm focus:outline-none focus:ring-1 focus:ring-neocon_blue_200 focus:border-neocon_blue_200"
                      required
                    />
                    <motion.label
                      htmlFor="phone"
                      className={`absolute left-3 transform duration-700 ${
                        phone ? "text-neocon_blue -top-3 bg-white" : "top-2"
                      } text-neocon_gray text-sm cursor-text`}
                      variants={labelVariants}
                      initial="hidden"
                      animate={phone ? "visible" : "hidden"}
                    >
                      Phone Number
                    </motion.label>
                  </div>
                </div>

                <div className="mb-4 w-full relative">
                  <textarea
                    id="message"
                    type="text"
                    name="message"
                    value={message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-neocon_blue_200 rounded-xl shadow-sm focus:outline-none focus:ring-1 focus:ring-neocon_blue_200 focus:border-neocon_blue_200"
                    required
                  />
                  <motion.label
                    htmlFor="message"
                    className={`absolute left-3 transform duration-700 ${
                      message ? "text-neocon_blue -top-3 bg-white" : "top-2"
                    } text-neocon_gray text-sm cursor-text`}
                    variants={labelVariants}
                    initial="hidden"
                    animate={message ? "visible" : "hidden"}
                  >
                    Describe your Inquiry!
                  </motion.label>
                </div>
                <div className="flex justify-start">
                  <button
                    type="submit"
                    className="px-4 py-2 text-white bg-neocon_blue_200 rounded-xl shadow-sm hover:bg-neocon_blue focus:outline-none focus:ring-1 focus:ring-neocon_blue_200 focus:ring-offset-2 duration-700"
                  >
                    Trial Request
                  </button>
                </div>
              </motion.form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RequestTrial;
