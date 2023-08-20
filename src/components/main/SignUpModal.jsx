import { useEffect, useState } from "react";
import { arrow } from "../../ui/images";
import { Country } from "country-state-city";
import { useNavigate } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";

// eslint-disable-next-line react/prop-types
export default function SignUpModal({ props }) {
  const [registerModal, setRegisterModal] = props;
  // inputs states
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [countrySelect, setCountrySelect] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [accept, setAccept] = useState(false);
  const allCountry = Country.getAllCountries();
  const [buttonState, setbuttonState] = useState(false);

  useEffect(() => {
    if (
      firstName &&
      lastName &&
      countrySelect &&
      email.includes("@") &&
      password &&
      confirmPassword &&
      accept &&
      agree
    ) {
      setbuttonState(true);
    } else setbuttonState(false);
  }, [
    firstName,
    lastName,
    countrySelect,
    email,
    password,
    confirmPassword,
    accept,
    agree,
  ]);

  // EnableScrolling scrolling
  const navigate = useNavigate();
  function enableScrolling(path) {
    const html = document.querySelector("html");
    html.classList.remove("stop-scrolling");

    navigate(path);
  }

  return (
    <div
      className={`modal fixed inset-0 z-[99] transition-all duration-100 flex justify-center items-center ${
        registerModal ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div
        className={`bg absolute inset-0 w-full h-full transition-all duration-200 backdrop-blur-xl ${
          registerModal ? "opacity-100 " : "opacity-0"
        }`}
        onClick={() => setRegisterModal(false)}
      ></div>

      <div className="scroll h-screen">
        <div className="wrap overflow-hidden rounded-3xl h-full  sm:h-unset p-6 overflow-y-scroll sm:overflow-y-auto sm:flex justify-center items-center">
          <div
            className={`box relative max-w-[42rem] w-full text-main text-wht bg-light-gra transition-all bg-main-bg/80 duration-300 rounded-3xl z-[999] py-6 my-3 px-6 ${
              registerModal ? "visible opacity-100" : "invisible opacity-0"
            }`}
          >
            {/* content */}
            <form className="grid gap-6 relative z-10 rounded-xl border-primary">
              <div className="heading grid gap-3 justify-start items-center">
                <div className="wrap">
                  <h1 className="text-start text-xl xs:text-[1.8rem] font-medium text-wht-gradient pb-[0.2rem]">
                    Register
                  </h1>
                </div>

                <div className="register font-normal">
                  <span>
                    Already have an account?{" "}
                    <span
                      onClick={() => setRegisterModal(false)}
                      className="underline sm:cursor-pointer text-all"
                    >
                      Login
                    </span>
                  </span>
                </div>
              </div>
              <div className="input-fields grid sm:grid-cols-2 gap-6 sm:gap-8 mt-2">
                {/* left */}
                <div className="left grid gap-5">
                  <div className="same-line grid grid-cols-6 gap-4">
                    {/* Slected */}
                    <div className="selecte-title col-span-2">
                      <div className="wrapper relative">
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
                          className="form-control relative title-select w-full focus:outline-primary/70 border-none outline outline-2 outline-primary/30 py-2 sm:py-2.5 px-6 rounded-2xl transition-all duration-200 bg-transparent"
                        >
                          <option value="Mr.">Mr.</option>
                          <option value="Mr.">Ms.</option>
                          <option value="Mr.">Mrs.</option>
                          <option value="Mr.">Mx.</option>
                        </select>
                      </div>
                    </div>
                    {/* First name */}
                    <div className="first-name col-span-4">
                      <input
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                        name="first-name"
                        className="email w-full focus:outline-primary/70 border-none outline outline-2 outline-primary/30  bg-transparent py-2 sm:py-2.5 px-6 rounded-2xl transition-all duration-200"
                        type="text"
                        placeholder="First Name"
                      />
                    </div>
                  </div>
                  {/* Last name */}
                  <div className="last-name">
                    <input
                      onChange={(e) => setLastName(e.target.value)}
                      value={lastName}
                      name="last-name"
                      className="email w-full focus:outline-primary/70 border-none outline outline-2 outline-primary/30  bg-transparent py-2 sm:py-2.5 px-6 rounded-2xl transition-all duration-200"
                      type="text"
                      placeholder="Last Name"
                    />
                  </div>
                  {/* Email */}
                  <div className="email">
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      name="email"
                      className="email w-full focus:outline-primary/70 border-none outline outline-2 outline-primary/30  bg-transparent py-2 sm:py-2.5 px-6 rounded-2xl transition-all duration-200"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                </div>
                {/* Right */}
                <div className="right grid gap-5">
                  {/* Country Residence */}
                  <div className="country-residence">
                    <div className="wrapper relative">
                      {/* arrow */}
                      <img
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 xs:w-[1.rem]"
                        src={arrow}
                        alt="arrow"
                      />
                      <select
                        onChange={(e) => setCountrySelect(e.target.value)}
                        value={countrySelect}
                        id="country"
                        name="country"
                        className="form-control relative w-full focus:outline-primary/70 border-none outline outline-2 outline-primary/30 py-2 sm:py-2.5 px-6 rounded-2xl transition-all duration-200 bg-transparent"
                      >
                        <option defaultChecked>Choose a country</option>
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
                  {/* Password */}
                  <div className="password">
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      name="password"
                      className="email w-full focus:outline-primary/70 border-none outline outline-2 outline-primary/30  bg-transparent py-2 sm:py-2.5 px-6 rounded-2xl transition-all duration-200"
                      type="password"
                      placeholder="Password"
                    />
                  </div>
                  {/* Confirm Password */}
                  <div className="confirm-pass">
                    <input
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      value={confirmPassword}
                      name="confirm-pass"
                      className="email w-full focus:outline-primary/70 border-none outline outline-2 outline-primary/30  bg-transparent py-2 sm:py-2.5 px-6 rounded-2xl transition-all duration-200"
                      type="password"
                      placeholder="Confirm Password"
                    />
                  </div>
                </div>
              </div>

              {/* wrapper */}
              <div className="wrap grid sm:grid-cols-2 gap-6">
                {/* Checkboxs */}
                <div className="checkboxs grid gap-3 justify-start max-w-[35rem] mt-2">
                  {/* checkbox */}
                  <div className="checkbox flex gap-3 justify-start items-center">
                    <input
                      onInput={() => setAgree(!agree)}
                      type="checkbox"
                      id="checkbox1"
                      className="relative min-h-[1.125rem] min-w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-primary/60 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"
                    />
                    <label
                      htmlFor="checkbox1"
                      className="sm:cursor-pointer font-Montserrat font-medium text-sm"
                    >
                      I agree to the{" "}
                      <span
                        onClick={() => enableScrolling("/terms-condition")}
                        className="underline text-all cursor-pointer"
                      >
                        terms and conditions
                      </span>
                    </label>
                  </div>
                  {/* checkbox */}
                  <div className="checkbox flex gap-3 justify-start items-center">
                    <input
                      onInput={() => setAccept(!accept)}
                      type="checkbox"
                      id="checkbox2"
                      className="relative min-h-[1.125rem] min-w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-primary/60 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"
                    />
                    <label
                      htmlFor="checkbox2"
                      className="sm:cursor-pointer font-Montserrat font-medium text-sm"
                    >
                      I accept the{" "}
                      <span
                        onClick={() => enableScrolling("/privacy-policy")}
                        className="underline text-all cursor-pointer"
                      >
                        privacy policy
                      </span>
                    </label>
                  </div>
                  {/* checkbox */}
                  <div className="checkbox flex gap-3 justify-start items-center">
                    <input
                      type="checkbox"
                      id="checkbox3"
                      className="relative min-h-[1.125rem] min-w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-primary/60 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"
                    />
                    <label
                      htmlFor="checkbox3"
                      className="sm:cursor-pointer font-Montserrat font-medium text-sm"
                    >
                      Subscribe to our newsletter
                    </label>
                  </div>
                </div>
                {/* sign up button */}
                <div className="login-btn mt-6 grid justify-center items-center w-full">
                  {/* sign up  btn */}
                  <button
                    onClick={() => (buttonState ? setRegisterModal(false) : "")}
                    className={`py-2.5 sm:py-3 px-16 sm:px-20 transition-all duration-300 rounded-3xl font-Montserrat font-semibold ${
                      buttonState
                        ? "bg-blu hover:opacity-70"
                        : " !cursor-default bg-blu/20"
                    }`}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </form>
            {/* cross */}
            <div className="wrap" onClick={() => setRegisterModal(false)}>
              <div className="cross p-2 absolute cursor-pointer text-xl sm:text-2xl text-dim-gray right-4 top-4 z-50">
                <RxCross1 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
