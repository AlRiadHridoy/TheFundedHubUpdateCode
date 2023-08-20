import { mainLogo } from "./images";
import { FaUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import lock from "../../src/assets/waitlist/lock.svg";

import { useState } from "react";
import CountDown from "./CountDown";

export default function Blur() {
  const [number, setNumber] = useState(null);

  const start = new Date(2023, 4, 1),
    end = new Date(2023, 9, 15),
    today = new Date(),
    percent = Math.round(((today - start) / (end - start)) * 100) + "%";

  return (
    <div
      className={`release-modal fixed inset-0 z-[999999] transition-all duration-100 flex justify-center items-center
       visible opacity-100`}
    >
      <div
        className={`bg absolute inset-0 w-full h-full transition-all duration-200 backdrop-blur-[12px] opacity-100
        }`}
      ></div>

      <div className="scroll bg-main-bg/50">
        <div className="wrap overflow-hidden rounded-3xl h-full sm:h-unset sm:flex justify-center items-center">
          <div
            className={`box h-[32rem]f max-w-[65rem]f h-screen overflow-y-scroll md:overflow-hidden  relative text-main text-wht bg-light-gra transition-all duration-300 rounded-3xl z-[999] py-10 md:py-10 px-6 md:px-16 visible opacity-100
             flex flex-col justify-center gap-6 font-Montserrat font-medium`}
          >
            {/* logo */}
            <div className="logo max-w-[11rem]">
              <img src={mainLogo} alt="" />
            </div>

            <div className="wrap grid md:grid-cols-2 gap-6">
              {/* heading */}
              <div className="heading uppercase font-Montserrat font-medium grid gap-5 md:gap-2">
                <span className="text-[#A6A6A6] text-2xl sm:text-3xl">
                  The funded hub is
                </span>
                <span className="text-3xl sm:text-4xl md:text-[2.5rem] uppercase leading-[1]">
                  Launching soon.
                </span>
              </div>

              {/* countdown */}
              <div className="rotate hidden  justify-center items-center sm:flex">
                <CountDown />
              </div>
            </div>

            {/* pera */}
            <div className="pera font-normal  text-sm max-w-[40rem]">
              <p>
                Join the free 5-day email challenge for freelance writers who
                want more ease and less overwhelm in their work. By the end of
                day 5, you`&apos;ll audit and refresh the key areas of your
                freelance writing business and be ready for goals for the
                upcoming month, quarter, and year!
              </p>
            </div>

            <div className="middle">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-bold font-codePro text-center">
                <div className="item">
                  <h5>
                    Pay in 3/4 <br />{" "}
                    <span className=" font-codeProBold">installments.</span>
                  </h5>
                </div>
                <div className="item">
                  <h5>
                    Get you{" "}
                    <span className=" font-codeProBold">Monthly Salary:</span>{" "}
                    Up to $2,000 / Month
                  </h5>
                </div>
                <div className="item">
                  <h5>
                    <span className=" font-codeProBold">Customize</span> <br />{" "}
                    your Rules.{" "}
                  </h5>
                </div>
                <div className="item">
                  <h5>
                    <span className=" font-codeProBold">0</span> Minimum Days{" "}
                    <br /> and <span className=" font-codeProBold">NO</span>{" "}
                    Time Limit.
                  </h5>
                </div>
              </div>
            </div>

            {/* countdown */}
            <div className="rotate flex justify-center items-center sm:hidden">
              <CountDown />
            </div>

            <div className="progress-bar flex gap-4 items-center">
              <div className={`range w-full overflow-hidden`}>
                <div
                  className="progress flex justify-center items-center"
                  style={{ width: percent }}
                >
                  <div className="value text-main-bg">{percent}</div>
                </div>
              </div>
              <div>
                <img
                  className="max-w-[2rem] sm:max-w-[3rem]"
                  src={lock}
                  alt=""
                />
              </div>
            </div>

            {/* waitlist */}
            <div className="waitlist grid md:flex gap-10 justify-center">
              <div className="left-text">
                <p className="max-w-[20rem]">
                  Iscriviti alla waiting list e riceverai il 15% di sconto sulla
                  tua prima challenge.
                </p>
              </div>
              {/* waitlist form */}
              <form action="" className="grid md:grid-cols-2 gap-10">
                <div className="inputs grid gap-4">
                  {/* your name */}
                  <div className="wrap relative">
                    <input
                      name="name"
                      className="name w-full focus:outline-primary/70 bg-black  border-none outline outline-2 outline-primary/30 py-2 px-6 pl-10 rounded-3xl transition-all duration-200"
                      type="text"
                      placeholder="Your Name"
                    />
                    {/* icon */}
                    <div className="absolute top-1/2 transform -translate-y-1/2 left-2 bg-transparent h-6 w-6 rounded-full flex justify-center items-center">
                      <FaUserCircle className="text-[#514C58] text-lg" />
                    </div>
                  </div>
                  {/* your email */}
                  <div className="wrap relative">
                    <input
                      name="email"
                      className="email w-full focus:outline-primary/70 bg-black  border-none outline outline-2 outline-primary/30 py-2 px-6 pl-10 rounded-3xl transition-all duration-200"
                      type="email"
                      placeholder="Your Email"
                    />

                    {/* icon */}
                    <div className="absolute top-1/2 transform -translate-y-1/2 left-2 bg-[#514C58] h-6 w-6 rounded-full flex justify-center items-center">
                      <MdEmail className="text-black text-base" />
                    </div>
                  </div>
                  {/* your number */}
                  <div className="wrap relative">
                    <PhoneInput
                      className="relative"
                      placeholder="Enter phone number"
                      country={"it"}
                      value={number}
                      onChange={setNumber}
                    />
                  </div>
                </div>
                {/* btn */}
                <div className="btn grid justify-start items-center">
                  <button className="py-3 px-12 hover:opacity-70 transition-all duration-200 rounded-3xl font-Montserrat font-semibold bg-[#5271FF]">
                    JOIN OUR WAITLIST
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
