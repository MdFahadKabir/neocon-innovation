import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsFillArrowDownRightSquareFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { MdMail } from "react-icons/md";
import Services from "../../public/assets/images/Service/services.png";
function MeetingTable() {
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
        <div className="xsm:px-1 px-5 2xl:px-40 py-10">
          <div className="flex justify-between xsm:flex-col sm:flex-col xsm:w-full">
            <div className="flex flex-col">
              <div className="bg-neocon_green text-white p-6 rounded-t-3xl">
                <div className="text-3xl xsm:text-xl sm:text-xl font-bold xsm:mb-10 sm:mb-10 mb-20">
                  <p>50,000 client's</p>
                  <p>interactions!</p>
                </div>
                <div className="flex justify-between">
                  <div className="flex flex-col px-2 xsm:px-0.5 sm:px-0.5">
                    <p className="text-4xl xsm:text-xl sm:text-xl font-bold mb-3">
                      4,268
                    </p>
                    <div>
                      <p className="text-sm xsm:text-xs sm:text-xs font-normal">
                        Projects And Software Developed in 15 years
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col px-2 xsm:px-0.5 sm:px-0.5">
                    <p className="text-4xl xsm:text-xl sm:text-xl font-bold mb-3">
                      1,264
                    </p>
                    <div>
                      <p className="text-sm xsm:text-xs sm:text-xs font-normal">
                        Qualified Employees And Developers With Us
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col px-2 xsm:px-0.5 sm:px-0.5">
                    <p className="text-4xl xsm:text-xl sm:text-xl font-bold mb-3">
                      1,684
                    </p>
                    <div>
                      <p className="text-sm xsm:text-xs sm:text-xs font-normal">
                        Satisfied Clients We Have Served Globally
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <div className="flex justify-between">
                  <div className="flex flex-col p-6 ">
                    <p className="text-2xl xsm:text-xl sm:text-xl font-bold">
                      We Have Decades Of Work Experience!
                    </p>
                    <div className="flex flex-col my-5">
                      <p className="text-base xsm:text-sm sm:text-sm font-bold text-neocon_green">
                        Consulting & Insights
                      </p>
                      <p className="text-sm xsm:text-xs sm:text-xs font-normal text-neocon_gray">
                        Our objective insights steer you toward the right
                        decisions on issues that matter.
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-base xsm:text-sm sm:text-sm font-bold text-neocon_green">
                        Research & Advisory
                      </p>
                      <p className="text-sm xsm:text-xs sm:text-xs font-normal text-neocon_gray">
                        Our combination of research, problem solving and
                        hands-on experience.
                      </p>
                    </div>
                    <div className="flex flex-col my-5">
                      <p className="text-base xsm:text-sm sm:text-sm font-bold text-neocon_green">
                        Strategic Advice
                      </p>
                      <p className="text-sm xsm:text-xs sm:text-xs font-normal text-neocon_gray">
                        Tools to help turn strategy into decisions, and execute
                        for measurable results.
                      </p>
                    </div>
                  </div>
                  <div className="bg-neocon_green text-white rounded-br-3xl">
                    <div className="p-6">
                      <Image
                        src={Services}
                        alt="service"
                        quality={100}
                        className="w-16 h-16 xsm:w-10 xsm:h-10"
                      />
                      <p className="text-2xl xsm:text-xl sm:text-xl font-bold mt-5">
                        Since 2010
                      </p>
                      <p className="text-base xsm:text-xs sm:text-xs font-normal my-5">
                        Provide users with appropriate view and access to
                        requests, problems, changes, contracts, solutions, and
                        reports.
                      </p>
                      <div className="flex flex-row">
                        <p className="text-base xsm:text-xs sm:text-xs font-semibold xsm:my-auto sm:my-auto">
                          Explore All Services
                        </p>
                        <BsFillArrowDownRightSquareFill
                          className="my-auto mx-5 xsm:mx-1 xsm:my-auto sm:my-auto"
                          size={20}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 relative">
              <div className="">
                <p className="text-5xl xsm:text-2xl sm:text-2xl font-extrabold">
                  Request a <span className="text-neocon_green">Meeting.</span>
                </p>
                <p className="text-base xsm:text-xs sm:text-xs font-normal text-neocon_gray mt-5 mb-10">
                  Neocon ipsum dolor sit amet consectetur. Dui amet tempor
                  faucibus condimentum non viverra consequat sit. Diam sed nec
                  egestas ut morbi rhoncus sed nec egestas ut morbi&nbsp;
                  <Link
                    href="/"
                    className="font-bold text-neocon_black underline"
                  >
                    Privacy Policy
                  </Link>
                </p>
              </div>
              <div className="xsm:mb-10">
                <motion.form
                  onSubmit={handleSubmit}
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  className="w-full"
                >
                  <div className="flex justify-between xsm:flex-col sm:flex-col">
                    <div className="mb-4 w-full relative">
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-neocon_green rounded-xl shadow-sm focus:outline-none focus:ring-1 focus:ring-neocon_green focus:border-neocon_green"
                        required
                      />
                      <motion.label
                        htmlFor="name"
                        className={`absolute left-3 transform duration-700 ${
                          name ? "text-neocon_green -top-3 bg-white" : "top-2"
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
                        className="w-full px-3 py-2 border border-neocon_green rounded-xl shadow-sm focus:outline-none focus:ring-1 focus:ring-neocon_green focus:border-neocon_green"
                        required
                      />
                      <motion.label
                        htmlFor="email"
                        className={`absolute left-3 transform duration-700 ${
                          email ? "text-neocon_green -top-3 bg-white" : "top-2"
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
                        className="w-full px-3 py-2 border border-neocon_green rounded-xl shadow-sm focus:outline-none focus:ring-1 focus:ring-neocon_green focus:border-neocon_green text-black appearance-none"
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
                          inquiry
                            ? "text-neocon_green -top-3 bg-white"
                            : "top-2"
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
                        <IoIosArrowDown className="text-neocon_green" />
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
                        className="w-full px-3 py-2 border border-neocon_green rounded-xl shadow-sm focus:outline-none focus:ring-1 focus:ring-neocon_green focus:border-neocon_green"
                        required
                      />
                      <motion.label
                        htmlFor="phone"
                        className={`absolute left-3 transform duration-700 ${
                          phone ? "text-neocon_green -top-3 bg-white" : "top-2"
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
                      className="w-full px-3 py-2 border border-neocon_green rounded-xl shadow-sm focus:outline-none focus:ring-1 focus:ring-neocon_green focus:border-neocon_green"
                      required
                    />
                    <motion.label
                      htmlFor="message"
                      className={`absolute left-3 transform duration-700 ${
                        message ? "text-neocon_green -top-3 bg-white" : "top-2"
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
                      className="px-4 py-2 text-white bg-neocon_black rounded-xl shadow-sm hover:bg-neocon_gray focus:outline-none focus:ring-1 focus:ring-neocon_black focus:ring-offset-2 duration-700"
                    >
                      Submit Request
                    </button>
                  </div>
                </motion.form>
              </div>
              <div class="absolute bottom-10 xsm:bottom-0">
                <div className="flex flex-col">
                  <MdMail className="text-neocon_green" size={28} />
                  <p className="text-sm text-neocon_black font-semibold">
                    Email: hello@neocon.tech
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MeetingTable;
