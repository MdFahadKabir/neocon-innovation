import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoIosArrowDown, IoMdMail } from "react-icons/io";
import { FaUserAlt, FaMapMarkerAlt } from "react-icons/fa";
import Star_t from "../../public/assets/images/Home/hero/bg_start_t.png";
import Stars from "../../public/assets/images/Home/hero/stars.png";
import Line from "../../public/assets/images/Home/hero/line.png";

function Hero() {
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
    cname: "",
    ebudget: "",
    countrycode: "",
    email: "",
    inquiry: "",
    phone: "",
    message: "",
  });

  const { name, cname, countrycode, email, ebudget, inquiry, phone, message } =
    formData;

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
      <div className="bg-gradient-to-b from-neocon_g_fw via-neocon_g_mg to-white">
        <div className="px-5 2xl:px-60 ">
          <Image
            src={Star_t}
            quality={100}
            className="w-4/12 xsm:hidden sm:hidden block"
          />
          <div className="flex xsm:flex-col sm:flex-col justify-between my-auto w-full">
            <div className="flex flex-col text-4xl 2xl:text-5xl font-extrabold 2xl:pb-0 my-auto w-3/5 xsm:w-full sm:w-full">
              <p className="text-base font-normal py-5">
                Have a Business Idea?
              </p>
              <p>
                Let Us Contact
                <span className="text-neocon_green"> You!</span>
              </p>

              <div className="flex flex-row my-10">
                <Image
                  src={Stars}
                  className="w-8 h-8  xl:w-10 xl:h-10 2xl:w-10 2xl:h-10 my-auto"
                />
                <Image src={Line} className="w-1 h-9 2xl:w-1 2xl:h-14 mx-3" />
                <p className="text-sm 2xl:text-lg font-normal text-neocon_gray my-auto ">
                  Fill out our contact form and our team will be in touch soon
                  to discuss how we can make your idea a reality.
                </p>
              </div>
              <div className="text-base xsm:text-sm sm:text-sm font-semibold ">
                <div className="flex flex-row border-2 border-white p-2 rounded-xl w-1/2 xsm:w-full sm:w-full my-5 xsm:my-0 sm:my-0">
                  <div className="my-auto bg-white rounded-full p-2">
                    <FaMapMarkerAlt className="my-auto text-neocon_blue_200" />
                  </div>
                  <div className="px-2">
                    <p>
                      Forum Central (4th, 5th & 7th floor), 21/22 M. M. Ali
                      Road, Golpahar Circle, Mehedibag, Chattogram
                    </p>
                  </div>
                </div>
                <div className="flex flex-row border-2 border-white p-2 rounded-xl w-1/2 xsm:w-full sm:w-full my-5">
                  <div className="my-auto bg-white rounded-full p-2">
                    <FaMapMarkerAlt className="my-auto text-neocon_blue_200" />
                  </div>
                  <div className="px-2">
                    <p className="text-sm xsm:text-xs sm:text-xs text-neocon_gray font-normal">
                      Email us
                    </p>
                    <p>Hello@Neocon.tech</p>
                  </div>
                </div>
                <div className="flex flex-row border-2 border-white p-2 rounded-xl w-1/2 xsm:w-full sm:w-full my-5">
                  <div className="my-auto bg-white rounded-full p-2">
                    <FaMapMarkerAlt className="my-auto text-neocon_blue_200" />
                  </div>
                  <div className="px-2">
                    <p className="text-sm xsm:text-xs sm:text-xs text-neocon_gray font-normal">
                      Contact Us
                    </p>
                    <p>+880 9638-232323</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-2/5 xsm:w-full sm:w-full bg-white p-6 rounded-3xl">
              <div className="text-2xl font-extrabold my-2">
                <p>
                  Fill the form for a free consultation with our
                  <span className="text-neocon_green">Experts!</span>
                </p>
              </div>
              <motion.form
                onSubmit={handleSubmit}
                variants={variants}
                initial="hidden"
                animate="visible"
                className="w-full"
              >
                <p>Tell us about your company</p>
                <div className="flex-flex-col my-5">
                  <div className="flex flex-row">
                    <div className="mb-4 w-full relative">
                      <div>
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <FaUserAlt className="text-neocon_gray" />
                        </div>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          value={name}
                          onChange={handleInputChange}
                          className="w-full px-10 py-2 border border-neocon_green rounded-xl shadow-sm focus:outline-none focus:ring-1 focus:ring-neocon_green focus:border-neocon_green"
                          required
                        />
                      </div>
                      <motion.label
                        htmlFor="name"
                        className={`absolute left-10 transform duration-700 ${
                          name ? "text-neocon_green -top-3 bg-white" : "top-2"
                        } text-neocon_gray text-sm cursor-text`}
                        variants={labelVariants}
                        initial="hidden"
                        animate={name ? "visible" : "hidden"}
                      >
                        Your Full Name
                      </motion.label>
                    </div>
                    <div className="mx-5"></div>
                    <div className="mb-4 w-full relative">
                      <div>
                        <div>
                          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <IoMdMail className="text-neocon_gray" />
                          </div>
                          <input
                            id="email"
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleInputChange}
                            className="w-full px-10 py-2 border border-neocon_green rounded-xl shadow-sm focus:outline-none focus:ring-1 focus:ring-neocon_green focus:border-neocon_green"
                            required
                          />
                        </div>
                      </div>

                      <motion.label
                        htmlFor="email"
                        className={`absolute left-10 transform duration-700 ${
                          email ? "text-neocon_green -top-3 bg-white" : "top-2"
                        } text-neocon_gray text-sm cursor-text`}
                        variants={labelVariants}
                        initial="hidden"
                        animate={email ? "visible" : "hidden"}
                      >
                        Your Email
                      </motion.label>
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <div className="mb-4 w-full relative">
                      <select
                        id="countrycode"
                        name="countrycode"
                        value={countrycode}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-neocon_green rounded-xl shadow-sm focus:outline-none focus:ring-1 focus:ring-neocon_green focus:border-neocon_green text-black appearance-none"
                        required
                        onClick={toggleDropdown}
                      >
                        <option value=""></option>
                        <option value="+1">United States (+1)</option>
                        <option value="+44">United Kingdom (+44)</option>
                        <option value="+61">Australia (+61)</option>
                        <option value="+81">Japan (+81)</option>
                      </select>

                      <motion.label
                        htmlFor="countrycode"
                        className={`absolute left-3 transform duration-700 -translate-x-1/2 text-neocon_gray text-sm cursor-text ${
                          countrycode
                            ? "text-neocon_green -top-3 bg-white"
                            : "top-2"
                        }`}
                        initial={{ opacity: 1, y: 20 }}
                        animate={
                          countrycode
                            ? { opacity: 1, y: 0 }
                            : { opacity: 1, y: 0 }
                        }
                        transition={{ type: "tween" }}
                      >
                        Country code
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
                        Your Phone Number*
                      </motion.label>
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <div className="mb-4 w-full relative">
                      <input
                        id="cname"
                        type="text"
                        name="cname"
                        value={cname}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-neocon_green rounded-xl shadow-sm focus:outline-none focus:ring-1 focus:ring-neocon_green focus:border-neocon_green"
                        required
                      />

                      <motion.label
                        htmlFor="cname"
                        className={`absolute left-3 transform duration-700 ${
                          cname ? "text-neocon_green -top-3 bg-white" : "top-2"
                        } text-neocon_gray text-sm cursor-text`}
                        variants={labelVariants}
                        initial="hidden"
                        animate={cname ? "visible" : "hidden"}
                      >
                        Business Name or Website
                      </motion.label>
                    </div>
                    <div className="mx-5"></div>
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
                        <option value="Software Development">
                          Software Development
                        </option>
                        <option value="Website Design and development">
                          Website Design and development
                        </option>
                        <option value="Mobile App Development">
                          Mobile App Development
                        </option>
                        <option value="IOT">IOT</option>
                        <option value="AI Chatbot">AI Chatbot</option>
                        <option value="Machine Learning">
                          Machine Learning
                        </option>
                        <option value="Digital Marketing">
                          Digital Marketing
                        </option>
                        <option value="Graphics UI Design">
                          Graphics UI Design
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
                  </div>
                </div>
                <p>Tell us more about your project</p>
                <div className="flex-flex-col my-5">
                  <div className="flex flex-col">
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
                          message
                            ? "text-neocon_green -top-3 bg-white"
                            : "top-2"
                        } text-neocon_gray text-sm cursor-text`}
                        variants={labelVariants}
                        initial="hidden"
                        animate={message ? "visible" : "hidden"}
                      >
                        Describe your project Briefly
                      </motion.label>
                    </div>
                    <div className="mb-4 w-full relative">
                      <select
                        id="ebudget"
                        name="ebudget"
                        value={ebudget}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-neocon_green rounded-xl shadow-sm focus:outline-none focus:ring-1 focus:ring-neocon_green focus:border-neocon_green text-black appearance-none"
                        required
                        onClick={toggleDropdown}
                      >
                        <option value=""></option>
                        <option value="high">BDT 100K to BDT 1000K</option>
                        <option value="low">BDT 100K to BDT 1000K</option>
                        <option value="Other">Other</option>
                        <option value="n/s">Not sure</option>
                      </select>

                      <motion.label
                        htmlFor="ebudget"
                        className={`absolute left-3 transform duration-700 -translate-x-1/2 text-neocon_gray text-sm cursor-text ${
                          ebudget
                            ? "text-neocon_green -top-3 bg-white"
                            : "top-2"
                        }`}
                        initial={{ opacity: 1, y: 20 }}
                        animate={
                          ebudget ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }
                        }
                        transition={{ type: "tween" }}
                      >
                        Estimated Budget
                      </motion.label>
                      <motion.div
                        className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none"
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.7 }}
                      >
                        <IoIosArrowDown className="text-neocon_green" />
                      </motion.div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-start my-10">
                  <button
                    type="submit"
                    className="px-4 py-2 text-white bg-neocon_black rounded-xl shadow-sm hover:bg-neocon_gray focus:outline-none focus:ring-1 focus:ring-neocon_black focus:ring-offset-2 duration-700"
                  >
                    Submit Your Message
                  </button>
                </div>
              </motion.form>
              <div>
                <p
                  className="text-base font-normal text-neocon_gray
                "
                >
                  Neocon ipsum dolor sit amet consectetur. Dui amet tempor
                  faucibus condimentum non viverra consequat sit. Diam sed nec
                  egestas ut morbi rhoncus sed nec egestas ut morbi&nbsp;
                  <Link
                    href="/"
                    className="font-bold text-neocon_black underline"
                  >
                    Privacy Policy
                  </Link>
                  .
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
