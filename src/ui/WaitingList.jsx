import { mainLogo } from "./images";
import { FaUserCircle } from "react-icons/fa";
import SocialIcons from "../components/SocialIcons";
import { MdEmail } from "react-icons/md";

import MotionX from "./MotionX";
import "react-phone-input-2/lib/style.css";
import axios from "axios";

import video from "../assets/launching/TheFundedHub_Waiting.mp4";

import { useEffect, useState } from "react";
import "./waitlist.css";

export default function WaitingList() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [prefix, setPrefix] = useState("");
  const [active, setActive] = useState(false);
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    const cllfunc = () => {
      if (name && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
        setActive(true);
      else setActive(false);
    };

    if (!prefix && !number) {
      cllfunc();
    } else if (number && prefix) {
      cllfunc();
    } else {
      setActive(false);
    }
  }, [name, email, prefix, number]);

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

  // mailchimp
  const url =
    "https://thefundedhub.us10.list-manage.com/subscribe/post?u=3af41e5dfa6d1e61a93b3ead6&id=81e2bef6cf&f_id=0000d4e5f0";

  const done = `${url}&FULLNAME=${name}&EMAIL=${email}&PHONE=${
    "+" + String(prefix) + String(number)
  }`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTimeout(() => {
      setOpen(false);
    }, 9800);
    setTimeout(() => {
      setStatus("");
    }, 10000);
    if (active) {
      axios
        .get(done)
        .then((res) => console.log(res))
        .catch(function (error) {
          setStatus("filled");
          setOpen(true);
          setName("");
          setEmail("");
          setNumber("");
        });
    } else {
      setStatus("not");
      setOpen(true);
    }
  };

  return (
    <div className="relative scroll-smooth">
      <div
        className={`release-modal transition-all duration-100 flex justify-center items-center
      visible opacity-100 bg-[#030307] purple-shadow min-h-screen`}
      >
        <div
          className={`bg absolute inset-0 w-full h-full transition-all duration-200  opacity-100
        }`}
        ></div>

        <div className="scroll grd-waiting">
          <div className="wrap sm:flex justify-center items-center">
            <div
              className={`box w-screen relative text-main text-wht transition-all duration-300 rounded-3xl z-[999]
              font-Montserrat font-light container`}
            >
              <div className="wrap max-w-[82rem] m-auto">
                {/* Progress */}
                <div className="progress-bar hidden fflex gap-4 items-center pt-6">
                  <div className={`range w-full overflow-hidden`}>
                    <div
                      className="progress flex justify-center items-center"
                      style={{ width: percent }}
                    >
                      <div className="value text-main-bg">{percent}</div>
                    </div>
                  </div>
                </div>
                <div className="py-6 flex justify-between sm:justify-end">
                  {/* logo */}
                  <div className="logo max-w-[9rem] sm:hidden">
                    <img src={mainLogo} />
                  </div>
                  <SocialIcons />
                </div>
                <div className="grid justify-center items-center w-full">
                  <div className="wrap flex flex-col justify-center gap-3 pb-10 md:pb-16">
                    {/* top */}
                    <div className="wrap grid md:grid-cols-2 m-auto gap-6 font-Montserrat mt-2">
                      <div className="video rounded-2xl fcol-span-4 w-full relative">
                        <video
                          className="w-full h-full rounded-2xl relative"
                          controls
                          muted={true}
                          autoPlay={true}
                        >
                          <source src={video} />
                        </video>
                      </div>
                      {/* scroll to waitlist form */}
                      <div className="scroll-to flex justify-center sm:hidden">
                        {/* btn */}

                        <a
                          onClick={() => setBlink(true)}
                          href="#waitlist-form"
                          className={`py-3 w-full rounded-3xl font-Montserrat font-semibold waitlist-btn glowing-btn  max-w-[15rem]`}
                        >
                          JOIN OUR WAITLIST
                        </a>
                      </div>

                      <div className="text fcol-span-3 flex flex-col justify-center gap-3 sm:gap-6">
                        {/* logo */}
                        <div className="logo max-w-[11rem] hidden sm:block">
                          <img src={mainLogo} />
                        </div>
                        {/* heading */}
                        <div className="hidden sm:block">
                          <MotionX delay={0.1}>
                            <h1>
                              <div className="text-3xl md:text-4xl xl:text-[3.2rem] uppercase font-medium -mr-18 !leading-[1.05] text-wht-gradient">
                                IS Launching soon.
                              </div>
                            </h1>
                          </MotionX>
                        </div>
                        {/* heading */}
                        <div className="sm:hidden grid mt-2">
                          <MotionX delay={0.3}>
                            <h1>
                              <div className="text-[2rem] xs:text-[2.8rem] uppercase  !leading-[1.05] text-wht-gradient font-medium">
                                IS Launching
                              </div>
                              <div className="text-[3rem] xs:text-[3rem] uppercase font-medium  !leading-[1.05] text-wht-gradient"></div>
                              <div className="text-[3rem] xs:text-[3.8rem] uppercase font-medium!leading-[1.05] text-wht-gradient font-medium">
                                Soon.
                              </div>
                            </h1>
                          </MotionX>
                        </div>
                        <MotionX delay={0.5}>
                          <p className="text-lg font-light xl:pr-10">
                            Unlock exclusive early access to The Funded Hub by
                            filling the waiting list form.{" "}
                            <br className="hidden sm:block" /> Elevate your
                            trading game with customizable challenges, up to
                            $2,000 monthly salary, flexible payments, no minimum
                            & maximum trading days, and unbeatable industry-low
                            spreads.
                          </p>
                        </MotionX>
                        {/* scroll to waitlist form */}
                        <div className="scroll-to hidden sm:flex">
                          {/* btn */}
                          <a
                            onClick={() => setBlink(true)}
                            href="#waitlist-form"
                            className={`py-3 w-full rounded-3xl font-Montserrat font-semibold waitlist-btn glowing-btn  max-w-[13.5rem]`}
                          >
                            JOIN OUR WAITLIST
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* middle */}
                    <div className="middle mt-8 font-Montserrat sm:bg-main-bg/[40%] py-4 md:px-20 rounded-[30px] uppercase flex md:inline-block justify-center items-center">
                      <div className="grid grid-cols-2 md:flex justify-between sm:gap-4 font-light text-center text-sm min-w-full">
                        <div className="item sm:scale-[1.005] sm:hover:scale-105 transition-all duration-300 border-b border-r sm:border-none border-wht/50 pb-4 sm:p-0">
                          <h5>
                            Pay in 3/4 <br />{" "}
                            <span className="font-normal text-sm">
                              installments.
                            </span>
                          </h5>
                        </div>
                        <div className="item sm:scale-[1.005] sm:hover:scale-105 transition-all duration-300 border-b sm:border-none border-wht/50 pb-4  sm:p-0">
                          <h5>
                            Get up to $2,000 <br />
                            <span className=" font-normal text-sm">
                              Monthly Salary.
                            </span>
                          </h5>
                        </div>
                        <div className="item sm:scale-[1.005] sm:hover:scale-105 transition-all duration-300 border-r sm:border-none border-wht/50 pt-4  sm:p-0">
                          <h5>
                            <span className=" font-normal text-sm">
                              Customize
                            </span>{" "}
                            <br /> your Rules.{" "}
                          </h5>
                        </div>
                        <div className="item sm:scale-[1.005] sm:hover:scale-105 transition-all duration-300 border-wht/50 sm:border-none pl-2 xs:pl-0 pt-4 sm:p-0">
                          <h5>
                            <span className="font-normal text-sm"> NO </span>{" "}
                            Minimum &<br />{" "}
                            <span className="sm:hidden text-sm">Max.</span>{" "}
                            <span className="hidden sm:inline-block">
                              Maximum
                            </span>{" "}
                            Trading Days
                          </h5>
                        </div>
                      </div>
                    </div>

                    {/* waitlist */}
                    <div
                      id="waitlist-form"
                      className={`waitlist grid justify-center bg-main-bg/[40%] py-6 px-6 sm:px-16 md:px-20 rounded-3xl m-auto max-w-[56rem] mt-8 mb-10 ${
                        blink ? "after-click" : "waitform-bg"
                      }`}
                    >
                      {/* txt */}
                      <div className="left-text self-center text-xl text-center max-w-[40rem] m-auto mb-8">
                        <p className="">
                          Don&apos;t miss your chance to redefine your trading
                          journey – secure your spot now and get up to
                          <span className="!font-semibold"> 30% off </span>
                          on your first challenge
                        </p>
                      </div>
                      {/* waitlist form */}

                      <form
                        onSubmit={(e) => handleSubmit(e)}
                        className="validate w-full max-w-[40rem] m-auto"
                        id="mc-embedded-subscribe-form"
                        name="mc-embedded-subscribe-form"
                        target="_blank"
                      >
                        <div className="inputs grid gap-4 col-span-2">
                          {/* your name */}
                          <div className="wrap relative">
                            <input
                              name="FULLNAME"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
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
                              name="EMAIL"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="email w-full focus:outline-primary/70 bg-black  border-none outline outline-2 outline-primary/30 py-2 px-6 pl-10 rounded-3xl transition-all duration-200"
                              type="email"
                              placeholder="Your Email"
                            />

                            {/* icon */}
                            <div className="absolute top-1/2 transform -translate-y-1/2 left-2 bg-[#514C58] h-6 w-6 rounded-full flex justify-center items-center">
                              <MdEmail className="text-black text-base" />
                            </div>
                          </div>
                        </div>
                        {/* btn */}
                        <div className="btn grid justify-center items-center col-span-1 justify-self-center mt-6">
                          <button
                            className={`py-3 px-8 rounded-3xl font-Montserrat font-semibold waitlist-btn glowing-btn `}
                          >
                            SIGN UP OUR WAITLIST
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
      {/* popup */}

      <div
        className={`fixed z-[999999] top-10 -right-[3rem] lg:-right-[4rem] transition-all duration-300 min-w-full flex justify-end px-5 ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div
          className={`box relative text-main text-wht bg-light-gra transition-all border border-primary/10 backdrop-blur-3xl duration-300 rounded-l-full z-[999] my-3 overflow-hidden p-3 sm:p-5 px-12 md:w-[40rem] text-center ${
            status === "filled"
              ? " bg-[#08be00]"
              : status === "not"
              ? "bg-red-600"
              : ""
          }`}
        >
          <div className="subscribe text-base sm:text-xl font-nomal text-center pr-[1.5rem]">
            {status === "filled" ? (
              <div>
                {/* Congratulations! you have successfully subscribed to the waitlist */}
                Registration successful, we&apos;ll contact you shortly
              </div>
            ) : status === "not" ? (
              <div>Please enter all information correctly</div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
