import { useState, useEffect, useRef } from "react";
import { useTimezoneSelect, allTimezones } from "react-timezone-select";

import { Country, State } from "country-state-city";
import userImg from "../../assets/images/blog-1.png";
import { arrow } from "../../ui/images";

export default function Profile() {
  // Inputs
  const [getCountry, setGetCountry] = useState("");
  const [getStates, setGetStates] = useState([]);
  const [userName, setUserName] = useState("John Doe");
  const [getTimeZone, setGetTimeZone] = useState([]);
  const allCountry = Country.getAllCountries();
  const [infoToggle, setInfoToggle] = useState("personal");

  const shortUserName = userName
    .split(" ")
    .map((name) => name.charAt(0))
    .join("");

  // security
  const [paraHeight, setparaHeight] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const refferance = useRef(null);

  useEffect(() => {
    setparaHeight(refferance?.current?.clientHeight);
  }, [isOpen]);

  useEffect(() => {
    setGetStates([]);
    allCountry.forEach((country) => {
      if (country.name === getCountry) {
        setGetStates(State.getStatesOfCountry(country.isoCode));
      }
    });
  }, [getCountry]);

  const labelStyle = "original";
  const timezones = {
    ...allTimezones,
    "Europe/Berlin": "Frankfurt",
  };
  const { options, parseTimezone } = useTimezoneSelect({
    labelStyle,
    timezones,
  });

  return (
    <>
      <main className="content-wrapper pt-16 sm:pb-6 sm:pt-24 bg-black  purple-shadow-dash min-h-[100vh] font-Montserrat">
        <div className="inner-content px-6">
          <div className="dashboard-wrapper">
            {/* from */}
            <div className="grid gap-4  mb-20">
              <div className="py-8 rounded-xl relative  min-h-full">
                <div className="grid grid-cols-2 sm:flex gap-4 w-full max-w-[40rem]">
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
                  <button
                    className={`w-full py-2.5 border-b-2 cursor-pointer relative transition-all duration-200 before:transition-all before:duration-200 text ${
                      infoToggle === "Security"
                        ? "border-primary"
                        : "border-primary/10"
                    }`}
                    onClick={() => setInfoToggle("Security")}
                  >
                    Security
                  </button>
                </div>
              </div>

              {infoToggle === "personal" ? (
                <div className="personal grid gap-8">
                  <div className="top dash-bar-clr p-6 rounded-3xl">
                    <div className="user flex gap-4 items-center max-w-[20rem]">
                      <div className="img grid gap-2 justify-center items-center relative">
                        <img
                          className="h-[6rem] w-[6rem] rounded-full hidden"
                          src={userImg}
                          alt="user-img"
                        />
                        <div className="short-name uppercase border bg-blu/20 border-blu h-24 w-24 rounded-full flex justify-center items-center text-2xl">
                          {shortUserName}
                        </div>
                      </div>

                      <div className="info flex flex-col gap-2">
                        <div className="name font-medium">John Doe</div>
                        <div className="user-name">info@johndoe.com</div>
                      </div>
                    </div>
                  </div>

                  {/* client */}
                  <div className="client font-normal">
                    <div className="head text-xl font-semibold">Client</div>

                    <div className="inputs grid sm:grid-cols-2 gap-6 mt-3 dash-bar-clr p-6 rounded-3xl pb-8">
                      {/* first-name */}
                      <div className="first-name grid gap-2">
                        <label htmlFor="first-name" className="font-medium">
                          First Name
                        </label>
                        <input
                          id="first-name"
                          name="first-name"
                          className="last-name w-full focus:outline-primary/70 bg-dark  backdrop-blur-3xl border-none outline outline-2 outline-primary/10 py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200"
                          type="text"
                          placeholder="John"
                        />
                      </div>
                      {/* last name */}
                      <div className="last-name grid gap-2">
                        <label htmlFor="last-name" className="font-medium">
                          Last name
                        </label>
                        <input
                          id="last-name"
                          name="last-name"
                          className="last-name w-full focus:outline-primary/70 bg-dark backdrop-blur-3xl border-none outline outline-2 outline-primary/10 py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200"
                          type="text"
                          placeholder="Doe"
                        />
                      </div>

                      <div className="selecte-title grid gap-2">
                        <label htmlFor="title">Title</label>
                        <div className="wrapper relative bg-dark rounded-2xl">
                          {/* arrow */}
                          <img
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 xs:w-[1.rem]"
                            src={arrow}
                            alt="arrow"
                          />

                          {/* select */}
                          <select
                            id="title"
                            name="title"
                            autoFocus={true}
                            className="form-control relative title-select w-full focus:outline-primary/70 border-none outline outline-2 outline-primary/10 py-2 sm:py-2.5 px-6 rounded-3xl transition-all duration-200 bg-transparent"
                          >
                            <option value="Mr.">Mr.</option>
                            <option value="Mr.">Ms.</option>
                            <option value="Mr.">Mrs.</option>
                            <option value="Mr.">Mx.</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* client */}
                  <div className="client font-normal">
                    <div className="head text-xl font-semibold">
                      Contact Info
                    </div>

                    <div className="inputs grid sm:grid-cols-2 gap-6 mt-3 dash-bar-clr p-6 rounded-3xl pb-8">
                      {/* phone */}
                      <div className="phone grid gap-2">
                        <label htmlFor="phone">Phone</label>
                        <input
                          id="phone"
                          name="phone"
                          className="phone w-full focus:outline-primary/70 bg-dark backdrop-blur-3xl border-none outline outline-2 outline-primary/10 py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200 appearance-none"
                          type="number"
                          placeholder="1234567890"
                        />
                      </div>
                      {/* Email */}
                      <div className="email grid gap-2">
                        <label htmlFor="email">E-mail address</label>
                        <input
                          id="email"
                          name="email"
                          className="phone w-full focus:outline-primary/70 bg-dark backdrop-blur-3xl border-none outline outline-2 outline-primary/10 py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200 appearance-none"
                          type="email"
                          placeholder="example@mail.com"
                        />
                      </div>

                      {/* country */}
                      <div className="country grid gap-2">
                        <label htmlFor="country">Country</label>
                        {/* country */}
                        <div className="wrapper relative bg-dark rounded-2xl">
                          {/* arrow */}
                          <img
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 xs:w-[1.rem]"
                            src={arrow}
                            alt="arrow"
                          />
                          <select
                            id="country"
                            name="country"
                            onChange={(e) => setGetCountry(e.target.value)}
                            className="form-control relative title-select w-full focus:outline-primary/70 border-none outline outline-2 outline-primary/10 py-2 sm:py-2.5 px-6 rounded-3xl transition-all duration-200 bg-transparent"
                          >
                            {allCountry.map((country, index) => {
                              return (
                                <option key={index} value={country.name}>
                                  {country.name}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                      </div>
                      {/* City */}
                      <div className="City grid gap-2">
                        <label htmlFor="city">City</label>
                        {/* state */}
                        <select
                          id="city"
                          name="city"
                          disabled={!getStates.length}
                          className="form-control w-full focus:outline-primary/70 bg-dark backdrop-blur-3xl border-none outline outline-2 outline-primary/10 py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200"
                        >
                          <option defaultChecked>City</option>
                          {getStates.map((state, index) => {
                            return (
                              <option key={index} value={state.name}>
                                {state.name}
                              </option>
                            );
                          })}
                        </select>
                      </div>

                      {/* street */}
                      <div className="street grid gap-2">
                        <label htmlFor="street">Street</label>
                        {/* zip */}
                        <input
                          id="street"
                          name="street"
                          className="name w-full focus:outline-primary/70 bg-dark backdrop-blur-3xl border-none outline outline-2 outline-primary/10 py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200"
                          type="text"
                          placeholder="Vila Safi 13A"
                          required
                        />
                      </div>
                      {/* zip */}
                      <div className="zip grid gap-2">
                        <label htmlFor="zip">Zip</label>
                        {/* zip */}
                        <input
                          id="zip"
                          name="zip"
                          className="name w-full focus:outline-primary/70 bg-dark backdrop-blur-3xl border-none outline outline-2 outline-primary/10 py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200"
                          type="text"
                          placeholder="4042"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="save flex justify-center w-full mt-3">
                    <button className="capitalize hidden sm:inline-block font-Montserrat text-lg font-bol2 py-3 max-w-[12rem] w-full text-center dash-btn rounded-3xl cursor-pointer m-auto font-semibold">
                      Save
                    </button>
                  </div>
                </div>
              ) : infoToggle === "account" ? (
                <div className="account font-normal">
                  <div className="inputs grid sm:grid-cols-2 gap-6 mt-3 dash-bar-clr p-6 rounded-3xl ">
                    {/* Email */}
                    <div className="email-readonly grid gap-2">
                      <label htmlFor="email-readonly">Username</label>
                      <input
                        id="email-readonly"
                        name="email-readonly"
                        className="phone w-full focus:outline-primary/70 bg-dark backdrop-blur-3xl border-none outline outline-2 outline-primary/10 py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200 appearance-none text-gry"
                        type="email"
                        readOnly
                        value="johndoe@mail.com"
                        placeholder="johndoe@mail.com"
                      />
                    </div>

                    {/* Time zone */}
                    <div className="time-zone grid gap-2">
                      <label htmlFor="time-zone">Time Zone</label>

                      <div className="wrapper relative bg-dark rounded-2xl">
                        {/* arrow */}
                        <img
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 xs:w-[1.rem]"
                          src={arrow}
                          alt="arrow"
                        />
                        <select
                          id="time-zone"
                          name="time-zone"
                          onChange={(e) => setGetTimeZone(e.target.value)}
                          className="form-control relative title-select w-full focus:outline-primary/70 border-none outline outline-2 outline-primary/10 py-2 sm:py-2.5 px-6 rounded-3xl transition-all duration-200 bg-transparent"
                        >
                          {options.map((option) => (
                            <option key={option} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="save flex justify-center w-full mt-4">
                    <button className="capitalize hidden sm:inline-block font-Montserrat text-lg font-bol2 py-3 max-w-[12rem] w-full text-center dash-btn rounded-3xl cursor-pointer m-auto">
                      Save
                    </button>
                  </div>
                </div>
              ) : (
                <div className="security">
                  <div className="dash-bar-clr rounded-xl p-4">
                    <div
                      className="flex items-center justify-between cursor-pointer"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      <h3 className="text-[1.1rem] font-Montserrat font-semibold leading-[1.185] tracking-[-0.05px]">
                        Password Change
                      </h3>

                      <div className="arrow">
                        <img
                          className={`max-w-[1.4rem] transform-gpu transition-all duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                          src={arrow}
                          alt="arrow"
                        />
                      </div>
                    </div>
                    <article className="">
                      <div
                        style={{ maxHeight: isOpen ? paraHeight + "px" : "0" }}
                        className={`width-content transition-all duration-300 overflow-hidden `}
                      >
                        <div
                          ref={refferance}
                          className="wrapper py-3 px-2 pt-4"
                        >
                          <div className="inputs grid sm:grid-cols-2 gap-6 pt-4">
                            {/* current password */}
                            <div className="curr-pass">
                              <input
                                name="current-pass"
                                className="curr-pass w-full focus:outline-primary/70 bg-dark backdrop-blur-3xl border-none outline outline-2 outline-primary/10 py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200 appearance-none"
                                type="password"
                                placeholder="Current Password*"
                              />
                            </div>
                            {/* new password */}
                            <div className="new-pass">
                              <input
                                name="new-pass"
                                className="curr-pass w-full focus:outline-primary/70 bg-dark backdrop-blur-3xl border-none outline outline-2 outline-primary/10 py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200 appearance-none"
                                type="password"
                                placeholder="New Password*"
                              />
                            </div>
                            {/* confirm password */}
                            <div className="confirm-pass sm:col-start-2">
                              <input
                                name="confirm-pass"
                                className="curr-pass w-full focus:outline-primary/70 bg-dark backdrop-blur-3xl border-none outline outline-2 outline-primary/10 py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200 appearance-none"
                                type="password"
                                placeholder="Confirm Password*"
                              />
                            </div>
                          </div>

                          <div className="save flex justify-center w-full mt-4">
                            <button className="capitalize hidden sm:inline-block font-Montserrat text-lg font-bold py-2 max-w-[12rem] w-full text-center dash-btn rounded-3xl cursor-pointer m-auto">
                              Save
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
