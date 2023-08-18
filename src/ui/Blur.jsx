import { mainLogo } from "./images";
import { FaUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { useState } from "react";
import CountDown from "./CountDown";

export default function Blur() {
  const [number, setNumber] = useState(null);

  return (
    <div
      className={`release-modal fixed inset-0 z-[999999] transition-all duration-100 flex justify-center items-center
       visible opacity-100`}
    >
      <div
        className={`bg absolute inset-0 w-full h-full transition-all duration-200 backdrop-blur-[12px] opacity-100
        }`}
      ></div>

      <div className="scroll h-screen">
        <div className="wrap overflow-hidden rounded-3xl h-full  sm:h-unset p-6 overflow-y-scroll sm:overflow-y-auto sm:flex justify-center items-center">
          <div
            className={`box h-[32rem] max-w-[65rem] relative text-main text-wht bg-light-gra transition-all bg-black/[74%] border-2 border-[#514C58]/[74] duration-300 rounded-3xl z-[999] py-6 my-3 px-10  visible opacity-100
             flex flex-col gap-6 font-Montserrat font-medium`}
          >
            {/* logo */}
            <div className="logo max-w-[11rem]">
              <img src={mainLogo} alt="" />
            </div>

            <div className="wrap grid grid-cols-2">
              {/* heading */}
              <div className="heading uppercase font-Montserrat font-medium grid gap-2">
                <i className="text-[#A6A6A6] text-3xl">The funded hub is</i>
                <i className="text-[2.5rem] uppercase font-bold">
                  Launching soon.
                </i>
              </div>

              {/* countdown */}
              <div className="countdown">
                <CountDown />
              </div>
            </div>

            {/* pera */}
            <div className="pera">
              <p>
                Join the free 5-day email challenge for freelance writers who
                want more ease and less overwhelm in their work. By the end of
                day 5, you'll audit and refresh the key areas of your freelance
                writing business and be ready for goals for the upcoming month,
                quarter, and year!
              </p>
            </div>

            {/* waitlist */}
            <div className="waitlist">
              <form action="" className="grid grid-cols-2 gap-10">
                <div className="inputs grid gap-4">
                  {/* your name */}
                  <div className="wrap relative">
                    <input
                      name="name"
                      className="name w-full focus:outline-primary/70 bg-black backdrop-blur-3xl border-none outline outline-2 outline-primary/30 py-2 px-6 pl-10 rounded-3xl transition-all duration-200"
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
                      className="email w-full focus:outline-primary/70 bg-black backdrop-blur-3xl border-none outline outline-2 outline-primary/30 py-2 px-6 pl-10 rounded-3xl transition-all duration-200"
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
                    {/* <input
                      name="number"
                      className="name w-full focus:outline-primary/70 bg-black backdrop-blur-3xl border-none outline outline-2 outline-primary/30 py-2 px-6 pl-10 rounded-3xl transition-all duration-200"
                      type="number"
                      placeholder="Your Phone Number"
                    /> */}
                    <PhoneInput
                      className="relative"
                      placeholder="Enter phone number"
                      country={"it"}
                      value={number}
                      onChange={setNumber}
                    />

                    {/* icon */}
                    <div className="absolute hidden top-1/2 transform -translate-y-1/2 left-2 bg-[#18151b] h-6 w-6 rounded-full flex justify-center items-center">
                      <BsFillTelephoneFill className="text-black text-sm" />
                    </div>
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
