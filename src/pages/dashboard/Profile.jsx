import { useState, useEffect } from "react";

import { Country, State } from "country-state-city";
import { FaUserCircle } from "react-icons/fa";

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
      <main className="content-wrapper pt-16 sm:pb-6 sm:pt-24 bg-black  purple-shadown-dash min-h-[100vh] font-Montserrat">
        <div className="inner-content px-6">
          <div className="dashboard-wrapper">
            <div className="grid md:flex gap-4 md:gap-6 mb-20">
              <div className="py-8 rounded-xl relative bg-main-bg/90 min-h-full">
                <div className="flex gap-4 items-center px-6">
                  <div className="user relative">
                    <button className="absolute right-0 bottom-0 bg-dash p-1 rounded-md">
                      <svg
                        className="w-[15px] h-[15px] fill-white"
                        focusable="false"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"></path>
                      </svg>
                    </button>
                    <FaUserCircle className="text-[4rem]" />
                  </div>

                  {/* account info */}
                  <div className="account-info">
                    <h4 className="font-semibold 2xl:text-[18px] text-[14px] text-wht">
                      Abcd person
                    </h4>
                    <p className="text-dark 2xl:text-[18px] text-[14px] mb-[10px] text-wht/70">
                      abcd.dev@gmail.com
                    </p>
                  </div>
                </div>
                <div className="author-tab grid gap-4 mt-6 sm:ml-6">
                  <button
                    className={`w-full py-2 pl-4 font-semibold text-start rounded-lg sm:rounded-l-lg gap-4 text-gry ${
                      infoToggle === "personal"
                        ? "text-main-bg/90 bg-primary"
                        : ""
                    }`}
                    onClick={() => setInfoToggle("personal")}
                  >
                    Personal Information
                  </button>
                  <button
                    className={`w-full py-2 pl-4 font-semibold text-start rounded-lg sm:rounded-l-lg gap-4 text-gry ${
                      infoToggle === "account"
                        ? "text-main-bg/90 bg-primary"
                        : ""
                    }`}
                    onClick={() => setInfoToggle("account")}
                  >
                    Account Information
                  </button>
                </div>
              </div>
              {/* form */}
              <div className="max-w-[45rem] w-full relative col-span-5 font-medium">
                {infoToggle === "personal" ? (
                  <div className="card-wrap bg-main-bg/90">
                    <h3 className="card-title">Personal Infomation</h3>
                    <div className="content">
                      <div className="author-form">
                        <div className="inputs grid sm:grid-cols-2 gap-6 ">
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
                          <button className="save capitalize font-Montserrat text-xs font-bold py-3 px-16 bg-primary transition-all duration-300 hover:opacity-80 text-main-bg rounded-3xl">
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
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
                          <button className="save capitalize font-Montserrat text-xs font-bold py-3 px-16 bg-primary transition-all duration-300 hover:opacity-80 text-main-bg rounded-3xl ">
                            Save
                          </button>
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
