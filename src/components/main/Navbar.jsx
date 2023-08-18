import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { footerBg, mainLogo } from "../../ui/images";

export default function Navbar() {
  const [navToggle, setnavToggle] = useState(false);
  const { pathname } = useLocation();
  return (
    <>
      <header
        className={`transition-all duration-300 border-b border-transparent py-3f sm:py-6f bg-transparent z-[9999] absolute left-0 right-0 top-0`}
      >
        <div className="text-xl text-all bg-all/10 py-4 px-4 mb-6 text-center hidden">
          We do NOT give out any real capital for management. All accounts are
          DEMO.
        </div>
        <div className="container">
          <div className="wrapper flex justify-between z-[999]">
            <Link to="/" className="main-logo flex gap-1">
              <img
                className="max-w-[8rem] sm:max-w-[10rem]"
                src={mainLogo}
                alt="TheFundedHub"
              />
            </Link>

            <nav className="nav-links text-wht font-light flex justify-center items-center">
              <ul className="hidden md:flex gap-6 justify-center items-center text-sm">
                <li>
                  <Link
                    to="/blog"
                    className={`flex font-Montserrat font-semibold border-b border-transparent hover:text-white transition-all duration-300 ${
                      pathname === "/blog" ? "text-white" : "text-white/40"
                    }`}
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faq"
                    className={`flex font-Montserrat font-semibold border-b border-transparent hover:text-white transition-all duration-300 ${
                      pathname === "/faq" ? "text-white" : "text-white/40"
                    }`}
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className={`flex font-Montserrat font-semibold border-b border-transparent hover:text-white transition-all duration-300 ${
                      pathname === "/contact" ? "text-white" : "text-white/40"
                    }`}
                  >
                    Contact us
                  </Link>
                </li>

                <li className="relative">
                  <Link
                    to="/login"
                    className="bg-primary/20 md:bg-transparent flex justify-center items-center py-2.5 px-7 sm:px-12 hover:text-white/70 text-white transition-all duration-200 rounded-3xl whitespace-nowrap font-Montserrat font-semibold text-[0.9rem] w-full glowing-btn capitalize pb-[0.725rem]"
                  >
                    Personal Hub
                  </Link>
                </li>
              </ul>

              <div className="menu-bar md:hidden">
                <svg
                  onClick={() => setnavToggle(!navToggle)}
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  height="1.8em"
                  width="1.8em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
                </svg>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* mobile version */}
      <div className="mobile-nav z-[9999] relative">
        {/* Cross */}
        <svg
          onClick={() => setnavToggle(false)}
          className={`text-wht fixed right-[5%] top-8 z-[88] transition-all duration-500 ${
            navToggle ? "opacity-100 rotate-180 visible" : "opacity-0 invisible"
          }`}
          stroke="currentColor"
          fill="none"
          strokeWidth="0"
          viewBox="0 0 15 15"
          height="2.2em"
          width="2.2em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
            fill="currentColor"
          ></path>
        </svg>

        {/* Bg dark */}
        <div
          onClick={() => setnavToggle(false)}
          className={`darkbg fixed inset-0 bg-main-bg/20 bottom-0  backdrop-blur-xl z-[77] transition-all duration-500 ${
            navToggle ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        ></div>
        <nav
          className={`mobile-nav md:hidden fixed top-0 bottom-0 w-[80%] xs:w-[70%] sm:w-[60%] bg-main-bg/30 z-[99] transition-all duration-500 ${
            navToggle ? "left-0 opacity-100" : "-left-full opacity-0"
          }`}
        >
          <div className="wrapper">
            <Link to="/" className="logo block pt-6 px-6">
              <img
                className="max-w-[6rem] md:hidden"
                src={footerBg}
                alt="TheFundedHub"
              />
            </Link>

            <ul className="flex flex-col justify-start text-sm mt-6">
              <li>
                <Link
                  to="/blog"
                  className="flex font-Montserrat py-3 pl-6 w-full font-semibold border-y border-light/30 transition-all duration-300"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="flex font-Montserrat py-3 pl-6 w-full font-semibold border-b border-light/30 transition-all duration-300"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="flex font-Montserrat py-3 pl-6 w-full font-semibold border-b border-light/30 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </li>
              <li className="flex mt-4 pl-6">
                <Link
                  to="/login"
                  className="flex justify-center items-center font-Montserrat font-semibold rounded-3xl w-44 h-10 glowing-btn capitalize text-base"
                >
                  Personal Hub
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
