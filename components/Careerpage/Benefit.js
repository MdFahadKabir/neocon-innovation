import React from "react";
import Image from "next/image";
import Team from "../../public/assets/images/Career/team.png";
import Skill from "../../public/assets/images/Career/skill.png";
import Learn from "../../public/assets/images/Career/learn.png";
import Future from "../../public/assets/images/Career/future.png";
function Benefit() {
  return (
    <>
      <div className="px-5 2xl:px-40 py-10">
        <div className="flex justify-between xsm:flex-col sm:flex-col w-full">
          <div className="flex flex-col text-4xl font-extrabold my-auto xsm:w-full sm:w-full md:w-2/5 lg:w-1/2 w-3/5">
            <p className="xsm:text-base sm:text-base text-xl font-semibold text-neocon_black">
              Benefits
            </p>
            <div className="py-5">
              <p>Why you Should Join Our </p>
              <p>
                Awesome&nbsp;<span className="text-neocon_green">Team</span>
              </p>
            </div>
            <div className="xsm:text-xs sm:text-xs text-base font-normal text-neocon_gray">
              <p className="my-2 w-8/12">
                Neocon is a dynamic and innovative software company that is
                always pushing the boundaries of technology. Our team is made up
                of passionate and talented individuals who are committed to
                delivering the highest quality software solutions to our
                clients. We offer a collaborative and supportive work
                environment where you can grow your skills and develop your
                career.
              </p>
            </div>
          </div>
          <div className="flex flex-col border rounded-2xl bg-white xsm:w-full sm:w-full md:w-3/5 lg:w-1/2 w-2/5 xsm:my-5 sm:my-5">
            <div className="flex justify-between">
              <div className="flex flex-col p-5">
                <Image
                  src={Team}
                  quality={100}
                  className=" xsm:w-12 xsm:h-12 sm:w-12 sm:h-12 w-14 h-14 p-4 rounded-lg bg-[#E7F2FF]"
                />
                <p className="xsm:text-base sm:text-base text-xl font-bold">
                  Team Work
                </p>
                <p className="xsm:text-xs sm:text-xs text-sm font-normal text-neocon_gray">
                  We believe in the power of collaboration and teamwork. Our
                  team works together to achieve common goals and supports each
                  other to ensure the success of our projects.
                </p>
              </div>
              <div className="flex flex-col p-5">
                <Image
                  src={Future}
                  quality={100}
                  className=" xsm:w-12 xsm:h-12 sm:w-12 sm:h-12 w-14 h-14 p-4 rounded-lg bg-[#D8F2F0]"
                />
                <p className="xsm:text-base sm:text-base text-xl font-bold">
                  Secured Future
                </p>
                <p className="xsm:text-xs sm:text-xs text-sm font-normal text-neocon_gray">
                  We understand the importance of a secure future, and we are
                  committed to providing our employees with a stable and
                  supportive work environment.
                </p>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col p-5">
                <div>
                  <Image
                    src={Learn}
                    quality={100}
                    className=" xsm:w-12 xsm:h-12 sm:w-12 sm:h-12 w-14 h-14 p-4 rounded-lg bg-[#EFF2F5]"
                  />
                </div>

                <p className="xsm:text-base sm:text-base text-xl font-bold">
                  Learning Opportunity
                </p>
                <p className="xsm:text-xs sm:text-xs text-sm font-normal text-neocon_gray">
                  We value continuous learning and development, and we offer a
                  range of opportunities for our employees to grow their skills
                  and expand their knowledge.
                </p>
              </div>
              <div className="flex flex-col p-5">
                <Image
                  src={Skill}
                  quality={100}
                  className=" xsm:w-12 xsm:h-12 sm:w-12 sm:h-12 w-14 h-14 p-4 rounded-lg bg-[#FDE6E5]"
                />
                <p className="xsm:text-base sm:text-base text-xl font-bold">
                  Upgrade Skills
                </p>
                <p className="xsm:text-xs sm:text-xs text-sm font-normal text-neocon_gray">
                  At our company, we believe in staying ahead of the curve and
                  embracing new technologies and techniques.
                </p>
              </div>
            </div>
            <div className="flex justify-between"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Benefit;
