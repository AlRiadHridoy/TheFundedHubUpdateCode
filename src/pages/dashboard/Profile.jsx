import { useState, useEffect } from "react";

import { Country, State } from "country-state-city";

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
      <main className="content-wrapper pt-16 sm:pb-6 sm:pt-24 bg-black  purple-shadow-dash min-h-[100vh] font-Montserrat">
        <div className="inner-content px-6">
          <div className="dashboard-wrapper">
            <div className="grid md:flex gap-4 md:gap-6 mb-20">
              <div className="py-8 rounded-xl relative bg-main-bg/90 min-h-full">
                <div className="flex gap-4 items-center px-6">
                  {/* account info */}
                  <div className="account-info">
                    <h4 className="font-semibold text font-Montserrat text-wht">
                      Abcd person
                    </h4>
                    <p className="text-dark text mb-[10px] text-wht/70">
                      abcd.dev@gmail.com
                    </p>
                  </div>
                </div>
                <div className="author-tab grid gap-4 mt-6 px-4">
                  <button
                    className={`w-full py-2.5 border-b-2 cursor-pointer relative transition-all duration-200 before:transition-all before:duration-200 text ${
                      infoToggle === "personal"
                        ? "border-primary"
                        : "border-primary/10"
                    }`}
                    onClick={() => setInfoToggle("personal")}
                  >
                    Personal Information
                  </button>
                  <button
                    className={`w-full py-2.5 border-b-2 cursor-pointer relative transition-all duration-200 before:transition-all before:duration-200 text ${
                      infoToggle === "account"
                        ? "border-primary"
                        : "border-primary/10"
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
                    <h3 className="text font-Montserrat mb-5 text-xl">
                      Personal Infomation
                    </h3>
                    <div className="content">
                      <div className="author-form">
                        <div className="inputs grid sm:grid-cols-2 gap-6 ">
                          {/* first-name */}
                          <div className="first-name">
                            <input
                              name="first-name"
                              className="name w-full focus:outline-primary/70 bg-[#2B2C30]/[0%] backdrop-blur-3xl border-none outline outline-2 outline-primary/30 py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200"
                              type="text"
                              placeholder="First Name"
                            />
                          </div>
                          {/* last name */}
                          <div className="last-name">
                            <input
                              name="last-name"
                              className="name w-full focus:outline-primary/70 bg-[#2B2C30]/[0%] backdrop-blur-3xl border-none outline outline-2 outline-primary/30 py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200"
                              type="text"
                              placeholder="Last Name"
                            />
                          </div>

                          {/* phone */}
                          <div className="phone">
                            <input
                              name="phone"
                              className="phone w-full focus:outline-primary/70 bg-[#2B2C30]/[0%] backdrop-blur-3xl border-none outline outline-2 outline-primary/30 py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200 appearance-none"
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
                              className="form-control w-full focus:outline-primary/70 bg-[#2B2C30]/[0%] backdrop-blur-3xl border-none outline outline-2 outline-primary/30 py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200"
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
                              className="form-control w-full focus:outline-primary/70 bg-[#2B2C30]/[0%] backdrop-blur-3xl border-none outline outline-2 outline-primary/30 py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200"
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
                              className="name w-full focus:outline-primary/70 bg-[#2B2C30]/[0%] backdrop-blur-3xl border-none outline outline-2 outline-primary/30 py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200"
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
                    <h3 className="font-Montserrat mb-5 text-xl">
                      Account Infomation
                    </h3>
                    <div className="content">
                      <div className="author-form">
                        <div className="inputs grid gap-6">
                          {/* current password */}
                          <div className="curr-pass">
                            <input
                              name="current-pass"
                              className="curr-pass w-full focus:outline-primary/70 bg-[#2B2C30]/[0%] backdrop-blur-3xl border-none outline outline-2 outline-primary/30 py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200 appearance-none"
                              type="password"
                              placeholder="Current Password*"
                            />
                          </div>
                          {/* new password */}
                          <div className="new-pass">
                            <input
                              name="new-pass"
                              className="curr-pass w-full focus:outline-primary/70 bg-[#2B2C30]/[0%] backdrop-blur-3xl border-none outline outline-2 outline-primary/30 py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200 appearance-none"
                              type="password"
                              placeholder="New Password*"
                            />
                          </div>
                          {/* confirm password */}
                          <div className="confirm-pass">
                            <input
                              name="confirm-pass"
                              className="curr-pass w-full focus:outline-primary/70 bg-[#2B2C30]/[0%] backdrop-blur-3xl border-none outline outline-2 outline-primary/30 py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200 appearance-none"
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
