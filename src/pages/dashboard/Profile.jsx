import { useState, useEffect } from "react";

import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { FaDiscord } from "react-icons/fa";

import { Country, State } from "country-state-city";
import authorTwo from "../../assets/images/dashboard/author/author-2.jpeg";

import { discord } from "../../ui/images";

export default function Profile() {
  const [getCountry, setGetCountry] = useState("");
  const [getStates, setGetStates] = useState([]);
  const allCountry = Country.getAllCountries();
  const [infoToggle, setInfoToggle] = useState("personal");
  useEffect(() => {
    setGetStates([]);
    allCountry.forEach((country) => {
      if (country.name === getCountry) {
        setGetStates(State.getStatesOfCountry(country.isoCode));
      }
    });
  }, [getCountry]);

  return (
    <>
      <main className="content-wrapper pt-16 sm:pb-6 sm:pt-24 bg-black  purple-shadown-dash">
        <div className="inner-content px-6">
          <div className="breadcrumb-wrap">
            <div className="breadcrumb-title">
              <svg
                className="breadcrumb-icon"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path>
              </svg>
              Profile
            </div>
          </div>
          <div className="dashboard-wrapper">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="xl:w-3/12 lg:w-3/12 w-full px-[15px]">
                <div className="flex flex-wrap mx-[-15px]">
                  <div className="w-full px-[15px]">
                    <div className="py-[30px] mb-[30px] rounded-[10px] relative z-10 overflow-hidden bg-main-bg/90">
                      <div className="author-head text-center md:px-[30px] mb-[20px]">
                        <div className="thumb w-[100px] h-[100px] mx-auto relative  mb-[10px]">
                          <img
                            className="rounded-[5px]"
                            src={authorTwo}
                            alt="author"
                          />
                          <button className="w-[24px] h-[24px] bg-main-bg flex items-center justify-center rounded-[5px] absolute -bottom-0.5 right-0">
                            <svg
                              className="w-[15px] h-[15px] fill-white"
                              focusable="false"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"></path>
                            </svg>
                          </button>
                        </div>
                        <h4 className="font-semibold 2xl:text-[18px] text-[14px] text-wht">
                          mikha dev
                        </h4>
                        <p className="text-dark 2xl:text-[18px] text-[14px] mb-[10px] text-wht/70">
                          mikha.dev@gmail.com
                        </p>
                        <p className="text-primary text-[13px] flex items-center justify-center">
                          <svg
                            className="w-[14px] h-[14px] fill-primary mr-[5px]"
                            focusable="false"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
                          </svg>
                          Resend verify email
                        </p>
                      </div>
                      <div className="author-tab">
                        <button
                          className={`w-full 2xl:text-[16px] text-[14px] font-semibold flex items-center 2xl:px-[30px] px-[15px] py-[15px] mb-[16px] gap-4 text-gry ${
                            infoToggle === "personal"
                              ? "text-main-bg/90 bg-primary"
                              : ""
                          }`}
                          onClick={() => setInfoToggle("personal")}
                        >
                          <FaRegUserCircle
                            className={`"text-lg  ${
                              infoToggle === "personal"
                                ? "text-main-bg/90"
                                : "text-gry"
                            }`}
                          />
                          Personal Information
                        </button>
                        <button
                          className={`w-full 2xl:text-[16px] text-[14px] font-semibold flex items-center 2xl:px-[30px] px-[15px] py-[15px] mb-[16px] gap-4 text-gry ${
                            infoToggle === "account"
                              ? "text-main-bg/90 bg-primary"
                              : ""
                          }`}
                          onClick={() => setInfoToggle("account")}
                        >
                          <MdOutlineSecurity
                            className={`"text-lg  ${
                              infoToggle === "account"
                                ? "text-main-bg/90"
                                : "text-gry"
                            }`}
                          />
                          Account Information
                        </button>
                        <button
                          className={`w-full 2xl:text-[16px] text-[14px] font-semibold flex items-center 2xl:px-[30px] px-[15px] py-[15px] mb-[16px] gap-4 text-gry ${
                            infoToggle === "discord"
                              ? "text-main-bg/90 bg-primary"
                              : ""
                          }`}
                          onClick={() => setInfoToggle("discord")}
                        >
                          <FaDiscord
                            className={`"text-lg  ${
                              infoToggle === "discord"
                                ? "text-main-bg/90"
                                : "text-gry"
                            }`}
                          />
                          Discord Settings
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="xl:w-9/12 lg:w-9/12 w-full px-[15px] relative ">
                {infoToggle === "personal" ? (
                  <div className="card-wrap bg-main-bg/90">
                    <h3 className="card-title">Personal Infomation</h3>
                    <div className="content">
                      <div className="author-form">
                        <div className="inputs grid grid-cols-2 gap-6">
                          {/* first-name */}
                          <div className="first-name">
                            <input
                              name="first-name"
                              className="name w-full focus:outline-primary/70 border-none outline outline-2 outline-primary/30 py-2 sm:py-2 px-4 rounded-xl transition-all duration-200 bg-main-bg/[75%]"
                              type="text"
                              placeholder="First Name"
                            />
                          </div>
                          {/* last name */}
                          <div className="last-name">
                            <input
                              name="last-name"
                              className="name w-full focus:outline-primary/70 border-none outline outline-2 outline-primary/30 py-2 sm:py-2 px-4 rounded-xl transition-all duration-200 bg-main-bg/[75%]"
                              type="text"
                              placeholder="Last Name"
                            />
                          </div>

                          {/* phone */}
                          <div className="phone">
                            <input
                              name="phone"
                              className="phone w-full focus:outline-primary/70 border-none outline outline-2 outline-primary/30 py-2 sm:py-2 px-4 rounded-xl transition-all duration-200 bg-main-bg/[75%] appearance-none"
                              type="number"
                              placeholder="Phone"
                            />
                          </div>
                          {/* Email */}
                          <div className="country">
                            {/* country */}
                            <select
                              id="country"
                              name="country"
                              onChange={(e) => setGetCountry(e.target.value)}
                              className="form-control w-full focus:outline-primary/70 border-none outline outline-2 outline-primary/30 py-2 px-4 transition-all duration-200 bg-main-bg rounded-xl"
                            >
                              <option defaultChecked>Country</option>
                              {allCountry.map((country, index) => {
                                return (
                                  <option key={index} value={country.name}>
                                    {country.name}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                          {/* state */}
                          <div className="state">
                            {/* state */}
                            <select
                              id="state"
                              name="state"
                              disabled={!getStates.length}
                              className="form-control w-full focus:outline-primary/70 border-none outline outline-2 outline-primary/30 py-2 px-4 transition-all duration-200 bg-main-bg rounded-xl"
                            >
                              <option defaultChecked>State</option>
                              {getStates.map((state, index) => {
                                return (
                                  <option key={index} value={state.name}>
                                    {state.name}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                          {/* zip */}
                          <div className="zip">
                            {/* zip */}
                            <input
                              name="zip"
                              className="name w-full focus:outline-primary/70 bg-main-bg/[75%] border-none outline outline-2 outline-primary/30 py-2 px-4  placeholder:text-[0.9rem] rounded-xl transition-all duration-200"
                              type="number"
                              placeholder="ZIP"
                              required
                            />
                          </div>
                        </div>

                        {/* btn */}
                        <div className="btn mt-6 flex justify-end">
                          <button className="save capitalize hidden sm:inline-block font-Montserrat text-xs font-bold py-3 px-10 dash-btn rounded-3xl">
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : infoToggle === "account" ? (
                  <div className="card-wrap bg-main-bg/90">
                    <h3 className="card-title">Account Infomation</h3>
                    <div className="content">
                      <div className="author-form">
                        <div className="inputs grid gap-6">
                          {/* current password */}
                          <div className="curr-pass">
                            <input
                              name="current-pass"
                              className="curr-pass w-full focus:outline-primary/70 border-none outline outline-2 outline-primary/30 py-3 sm:py-2 px-4 rounded-xl transition-all duration-200 bg-main-bg/[75%] appearance-none"
                              type="password"
                              placeholder="Current Password*"
                            />
                          </div>
                          {/* new password */}
                          <div className="new-pass">
                            <input
                              name="new-pass"
                              className="curr-pass w-full focus:outline-primary/70 border-none outline outline-2 outline-primary/30 py-3 sm:py-2 px-4 rounded-xl transition-all duration-200 bg-main-bg/[75%] appearance-none"
                              type="password"
                              placeholder="New Password*"
                            />
                          </div>
                          {/* confirm password */}
                          <div className="confirm-pass">
                            <input
                              name="confirm-pass"
                              className="curr-pass w-full focus:outline-primary/70 border-none outline outline-2 outline-primary/30 py-3 sm:py-2 px-4 rounded-xl transition-all duration-200 bg-main-bg/[75%] appearance-none"
                              type="password"
                              placeholder="Confirm Password*"
                            />
                          </div>
                        </div>
                        {/* btn */}
                        <div className="btn mt-6 flex justify-end">
                          <button className="save capitalize hidden sm:inline-block font-Montserrat text-xs font-bold py-3 px-10 dash-btn rounded-3xl ">
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="card-wrap">
                    <div className="p-[30px] mb-[30px] rounded-[10px] relative z-10 overflow-hidden flex items-center justify-between gap-[20px] lg:flex-nowrap flex-wrap bg-main-bg/90">
                      <div className="left grid sm:flex flex-col justify-center items-center sm:items-start gap-6">
                        <div className="img flex justify-center items-center">
                          <img
                            className="max-w-[15rem] w-full sm:w-[18rem]"
                            src={discord}
                            alt="discord"
                          />
                        </div>

                        <div className="w-full grid justify-center sm:justify-start gap-3">
                          <p className="max-w-[30rem] text-center sm:text-start">
                            Where veteran and rookie traders all come together
                            to talk about the markets and keep up to date with
                            all annoucements.
                          </p>
                          <div className="mt-2 btn uppercase flex justify-center sm:justify-start">
                            <a
                              target="__blank"
                              href="https://discord.gg/GVXNaVTr"
                              className=" capitalize hidden sm:inline-block font-Montserrat text-xs font-bold py-3 px-10 dash-btn rounded-3xl"
                            >
                              Join our Discord
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
