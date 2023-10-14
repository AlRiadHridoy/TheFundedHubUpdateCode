import { mainLogo } from "../../ui/images";
import { FaFacebookF, FaGoogle } from "react-icons/fa";

import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import SignUpModal from "../../components/main/SignUpModal";

export default function Login() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [forgetModal, setForgetModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);

  useEffect(() => {
    const html = document.querySelector("html");
    if (forgetModal || registerModal) html.classList.add("stop-scrolling");
    else html.classList.remove("stop-scrolling");
  }, [forgetModal, registerModal]);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const submitUser = (e) => {
    e.preventDefault();
  };
  return (
    <main className="login min-h-screen purple-shadow pt-32 md:py-32">
      <header className="z-50 left-0 right-0 transition-all duration-300 border-b border-transparent py-2 sm:py-6 absolute top-0">
        <div className="container">
          <div className="wrapper flex mt-4 md:mt-0 justify-start md:justify-between">
            <Link to="/" className="main-logo">
              <img
                className="max-w-[8rem] sm:max-w-[10rem]"
                src={mainLogo}
                alt="TheFundedHub"
              />
            </Link>

            <nav className="nav-links hidden md:flex text-wht font-light justify-center items-center">
              <div className="item grid justify-center items-center">
                <ul className="flex flex-wrap gap-4 justify-center items-center">
                  <li>
                    <Link to="/terms-condition" className="text-[0.8rem]">
                      Term and Condition
                    </Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy" className="text-[0.8rem]">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/cookie-policy" className="text-[0.8rem]">
                      Cookie Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/risk-disclosure" className="text-[0.8rem]">
                      Risk Disclosure
                    </Link>
                  </li>
                  <li>
                    <Link to="/report-problem" className="text-[0.8rem]">
                      Report a problem
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <section className="relative">
        <div className="container relative">
          <div className="wrapper z-10 relative flex justify-center items-center min-h-[40vh] md:pt-20 pb-24 sm:pb-36">
            <form
              className="grid gap-3 p-7 relative z-10 rounded-2xl bg-main-bg/[60%] border-primary max-w-[30rem] w-full global-shadow "
              onSubmit={(e) => submitUser(e)}
            >
              <div className="heading grid gap-3 justify-start items-center">
                <div className="wrap">
                  <h1 className="text-start text-xl xs:text-[1.8rem] font-medium text-wht-gradient pb-[0.2rem]">
                    Sign in
                  </h1>
                </div>

                <div className="register font-normal">
                  <span>
                    New user?{" "}
                    <span
                      onClick={() => setRegisterModal(true)}
                      className="underline sm:cursor-pointer text-all"
                    >
                      Register now
                    </span>
                  </span>
                </div>
              </div>
              {/* Email */}
              <div className="email mt-3">
                <input
                  name="email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  className="email w-full focus:outline-primary/80 border-none outline outline-2 outline-primary/50 bg-transparent py-2 sm:py-2.5 px-6 rounded-2xl transition-all duration-200"
                  type="email"
                  placeholder="Email"
                />
              </div>
              {/* Forget password */}
              <div className="forget-pass text-end">
                <a
                  onClick={() => setForgetModal(true)}
                  href="#"
                  className="underline font-Montserrat font-medium text-sm"
                >
                  Forgot Password
                </a>
              </div>
              {/* Password */}
              <div className="Passwopasswordrd">
                <input
                  name="password"
                  value={userPassword}
                  onChange={(e) => setUserPassword(e.target.value)}
                  className="email w-full focus:outline-primary/80 border-none outline outline-2 outline-primary/50  bg-transparent py-2 sm:py-2.5 px-6 rounded-2xl transition-all duration-200"
                  type="password"
                  placeholder="Password"
                />
              </div>

              <div className="wrapper flex gap-3 flex-col sm:flex-row justify-between items-start sm:items-center mt-1">
                <div className="remember flex gap-3 justify-center items-center">
                  <input
                    type="checkbox"
                    id="remeber"
                    className="custom-checkbox"
                  />
                  <label
                    htmlFor="remeber"
                    className="sm:cursor-pointer text-sm font-Montserrat font-medium"
                  >
                    Remember me
                  </label>
                </div>
              </div>

              {/* Login button */}
              <div className="login-btn mt-10 flex justify-center items-center">
                <div
                  onClick={submitUser}
                  className="py-2.5 px-16 transition-all duration-300 rounded-3xl font-Montserrat font-semibold grd-btn-wht pink-glowing-btn"
                >
                  Login
                </div>
              </div>

              {/* signin */}
              <div className="signup grid gap-4 mt-2">
                <div className="heading flex justify-center items-cente font-Montserrat font-semiboldr">
                  <h5>Or sign in with:</h5>
                </div>
                {/* Logos */}
                <div className="logos flex justify-center items-center gap-3">
                  {/* google */}
                  <a
                    href="#"
                    className="logo h-[2.7rem] w-[2.7rem] sm:h-[3rem] sm:w-[3rem] rounded-full border-2 flex justify-center items-center"
                  >
                    <FaGoogle className=" w-[1.4rem] h-[1.4rem] sm:w-[1.8rem] sm:h-[1.8rem]" />
                  </a>
                  {/* facebook */}
                  <a
                    href="#"
                    className="logo h-[2.7rem] w-[2.7rem] sm:h-[3rem] sm:w-[3rem] rounded-full border-2 flex justify-center items-center"
                  >
                    <FaFacebookF className="w-[1.4rem] h-[1.4rem] sm:w-[1.8rem] sm:h-[1.8rem]" />
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Forgot Modal */}
      <div
        className={`modal fixed inset-0 z-[99] transition-all duration-100 flex justify-center items-center overflow-hidden ${
          forgetModal ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div
          className={`bg absolute inset-0 w-full h-full transition-all duration-200 backdrop-blur-xl ${
            forgetModal ? "opacity-100 " : "opacity-0"
          }`}
          onClick={() => setForgetModal(false)}
        ></div>

        <div
          className={`box relative m-6 max-w-[500px] w-full text-main text-wht bg-light-gray bg-main-bg/90 transition-all duration-300 rounded-3xl z-[999] py-10 px-6 ${
            forgetModal ? "visible opacity-100" : "invisible opacity-0"
          }`}
        >
          {/* content */}
          <form className="content grid w-full text-center gap-4 font-semibold">
            <div className="heading text-2xl">
              <h3>Password Recovery</h3>
            </div>
            <p className="font-light font-Montserrat text-[1.05rem]">
              We will send a password recovery link to <br /> your e-mail
            </p>

            {/* Email */}
            <div className="email w-full relative mt-4">
              <input
                name="email"
                className="email w-full focus:outline-primary/80 border-none outline outline-2 outline-primary/50 bg-transparent py-2 sm:py-2.5 px-6 rounded-2xl transition-all duration-200"
                type="email"
                placeholder="Email"
              />
              {/* arrow */}
              <div className="arrow absolute right-3 top-1/2 transform -translate-y-1/2">
                <HiOutlineArrowNarrowRight className="text-3xl text-thin text-primary/[78%]" />
              </div>
            </div>

            {/* confirm btn */}
            <div className="confirm-btn mt-8 flex justify-center items-center">
              <button className="py-2 sm:py-2.5 px-12 sm:px-16 grd-btn-wht rounded-3xl font-Montserrat font-semibold">
                Confirm
              </button>
            </div>
          </form>
          {/* cross */}
          <div className="cross" onClick={() => setForgetModal(false)}>
            <RxCross1 className="absolute cursor-pointer text-xl sm:text-2xl text-dim-gray right-4 md:right-6 top-4 md:top-6" />
          </div>
        </div>
      </div>

      {/* Sign Up modal */}
      <SignUpModal props={[registerModal, setRegisterModal]} />

      <footer className="z-50 relative md:hidden left-0 right-0 transition-all duration-300 border-b border-transparent py-4 pb-10">
        <div className="container">
          <div className="wrapper flex flex-col md:flex-row justify-between gap-8">
            <nav className="nav-links text-wht font-light flex justify-center items-center">
              <div className="item grid justify-center items-center">
                <ul className="flex flex-wrap gap-4 justify-center items-center">
                  <li>
                    <Link to="/terms-condition" className="text-[0.8rem]">
                      Term and Condition
                    </Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy" className="text-[0.8rem]">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/cookie-policy" className="text-[0.8rem]">
                      Cookie Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/risk-disclosure" className="text-[0.8rem]">
                      Risk Disclosure
                    </Link>
                  </li>
                  <li>
                    <Link to="/report-problem" className="text-[0.8rem]">
                      Report a problem
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </footer>
    </main>
  );
}
