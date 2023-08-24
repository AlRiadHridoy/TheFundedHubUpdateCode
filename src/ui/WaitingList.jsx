import { mainLogo } from "./images";
import { FaUserCircle } from "react-icons/fa";
import SocialIcons from "../components/SocialIcons";
import { MdEmail } from "react-icons/md";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import video from "../assets/launching/mov_bbb.mp4";

import { useState } from "react";
import CountDown from "./CountDown";

export default function WaitingList() {
  const [number, setNumber] = useState(null);

  const start = new Date(2023, 4, 1),
    end = new Date(2023, 9, 15),
    today = new Date(),
    percent = Math.round(((today - start) / (end - start)) * 100) + "%";

  // Disable right-click

  (function () {
    document.addEventListener("contextmenu", (e) => e.preventDefault());

    function ctrlShiftKey(e, keyCode) {
      return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
    }

    document.onkeydown = (e) => {
      if (
        event.keyCode === 123 ||
        ctrlShiftKey(e, "I") ||
        ctrlShiftKey(e, "J") ||
        ctrlShiftKey(e, "C") ||
        (e.ctrlKey && e.keyCode === "U".charCodeAt(0))
      )
        return false;
    };
  });

  return (
    <div
      className={`release-modal transition-all duration-100 flex justify-center items-center
      visible opacity-100 bg-[#030307] purple-shadow min-h-screen`}
    >
      <div
        className={`bg absolute inset-0 w-full h-full transition-all duration-200 backdrop-blur-[12px] opacity-100
        }`}
      ></div>

      <div className="scroll grd-waiting">
        <div className="wrap sm:flex justify-center items-center">
          <div
            className={`box w-screen relative text-main text-wht transition-all duration-300 rounded-3xl z-[999]
              font-Montserrat font-light container`}
          >
            <div className="wrap max-w-[82rem] m-auto">
              <div className="py-3 sm:py-6 flex justify-end">
                <SocialIcons />
              </div>
              <div className="grid justify-center items-center w-full">
                <div className="wrap flex flex-col justify-center gap-3 pb-10 md:pb-16">
                  {/* top */}
                  <div className="wrap grid md:grid-cols-2 m-auto gap-6 font-Montserrat">
                    <div className="video rounded-2xl fcol-span-4 w-full relative">
                      <video
                        className="w-full h-full rounded-2xl relative"
                        controls
                      >
                        <source src={video} />
                      </video>
                    </div>
                    <div className="text fcol-span-3 flex flex-col justify-center gap-6">
                      {/* logo */}
                      <div className="logo max-w-[11rem]">
                        <img src={mainLogo} />
                      </div>
                      {/* heading */}
                      <h1>
                        <div className="text-3xl md:text-4xl xl:text-[3.2rem] uppercase font-medium -mr-18 !leading-[1.05] text-wht-gradient">
                          IS Launching soon.
                        </div>
                        <div className="text-3xl md:text-4xl xl:text-[2.8rem] 2xl:text-[4.8rem] uppercase font-medium  -mr-18 !leading-[1.05]">
                          {" "}
                        </div>
                      </h1>
                      <p className="text-lg font-light xl:pr-10">
                        Unlock exclusive early access to The Funded Hub by
                        filling the waiting list form. Elevate your trading game
                        with customizable challenges, up to $2,000 monthly
                        salary, flexible payments, no minimum & maximum trading
                        days, and unbeatable industry-low spreads.
                      </p>
                    </div>
                  </div>

                  <div className="middle mt-4 sm:mt-8 md:mt-16 font-Montserrat bg-[#2B2C30]/[22%] py-4 md:px-20 rounded-[30px] uppercase flex md:inline-block justify-center">
                    <div className="grid xs:grid-cols-2 md:flex justify-between gap-4 font-light  text-center text-sm">
                      <div className="item">
                        <h5>
                          Pay in 3/4 <br />{" "}
                          <span className="font-normal text-sm">
                            installments.
                          </span>
                        </h5>
                      </div>
                      <div className="item">
                        <h5>
                          Get up to $2,000 <br />
                          <span className=" font-normal text-sm">
                            Monthly Salary.
                          </span>
                        </h5>
                      </div>
                      <div className="item">
                        <h5>
                          <span className=" font-normal text-sm">
                            Customize
                          </span>{" "}
                          <br /> your Rules.{" "}
                        </h5>
                      </div>
                      <div className="item">
                        <h5>
                          <span className="font-normal text-sm"> NO </span>{" "}
                          Minimum <br /> & Maximum Trading Days
                        </h5>
                      </div>
                    </div>
                  </div>

                  {/* Progress */}
                  <div className="progress-bar flex gap-4 items-center">
                    <div className={`range w-full overflow-hidden`}>
                      <div
                        className="progress flex justify-center items-center"
                        style={{ width: percent }}
                      >
                        <div className="value text-main-bg">{percent}</div>
                      </div>
                    </div>
                  </div>

                  {/* countdown */}
                  <div className="justify-center items-center max-w-[50rem] m-auto hidden">
                    <CountDown />
                  </div>
                  {/* waitlist */}
                  <div className="waitlist grid justify-center bg-[#2B2C30]/[22%] py-6 px-6 sm:px-16 md:px-20 rounded-3xl m-auto mt-6 max-w-[56rem]">
                    {/* txt */}
                    <div className="left-text self-center text-xl text-center max-w-[40rem] m-auto mb-8">
                      <p className="">
                        Don&apos;t miss your chance to redefine your trading
                        journey – secure your spot now and get up to 15% off on
                        your first challenge
                      </p>
                    </div>
                    {/* waitlist form */}
                    <form action="" className="w-full max-w-[40rem] m-auto">
                      <div className="inputs grid gap-4 col-span-2">
                        {/* your name */}
                        <div className="wrap relative">
                          <input
                            name="name"
                            className="name w-full focus:outline-primary/70 bg-black  border-none outline outline-2 outline-primary/30 py-2 px-6 pl-10 rounded-3xl transition-all duration-200"
                            type="text"
                            placeholder="Your Name"
                          />
                          {/* icon */}
                          <div className="absolute top-1/2 transform -translate-y-1/2 left-2 bg-transparent h-[1.5rem] w-[1.5rem] rounded-full flex justify-center items-center">
                            <FaUserCircle className="text-[#514C58] text-3xl" />
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
                      <div className="btn grid justify-center items-center col-span-1 justify-self-center mt-6">
                        <button className="py-3 px-12 rounded-3xl font-Montserrat font-semibold glowing-btn">
                          JOIN OUR WAITLIST
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
