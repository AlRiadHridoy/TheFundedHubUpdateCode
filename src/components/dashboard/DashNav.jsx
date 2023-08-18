import { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { CgMenuLeft } from "react-icons/cg";
import { arrow } from "../../ui/images";

// eslint-disable-next-line react/prop-types
export default function DashNav({ props }) {
  const [accountOpen, setAccountOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const refferance = useRef(null);
  // distructure
  const [setSideOpenMbl, sideOpenMbl] = props;

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    setAccountOpen(false);
    setNotifOpen(false);
  }, [pathname]);

  const handleClick = (text) => {
    setNotifOpen(false);
    setAccountOpen(false);

    if (text === "notification") {
      setNotifOpen(!notifOpen);
    }
    if (text === "account") {
      setAccountOpen(!accountOpen);
    }
  };

  const [account, setAccount] = useState("Funded - 7382691");
  const [isOpen, setIsOpen] = useState(false);
  const [paraHeight, setparaHeight] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <header className="header-area px-[20px] z-[9999] fixed bg-black">
      <div className="header-left">
        {/* Accounts */}
        <div className="accounts relative h-[1.875rem] z-50">
          <div className="grid gap-2 absolute inset-0  max-w-[12rem] xs:min-w-[12rem]">
            <div className="border border-primary/30 hover:border-primary/50 transition-all duration-200 rounded-lg bg-main-bg/40 w-full relative">
              <header
                onClick={() => setIsOpen(!isOpen)}
                className="select-account flex justify-between cursor-pointer w-full py-[0.26rem] px-2.5"
              >
                <h3 className="text-[0.9rem] xs:text-base">{account}</h3>

                <div className="arrow flex justify-center items-center">
                  <img
                    className={`max-w-[1rem] transform-gpu transition-all duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    src={arrow}
                    alt="arrow"
                  />
                </div>
              </header>

              <div
                className={`select-account-options content overflow-hidden absolute border border-primary/0 transition-all duration-300 py-[0.26rem] w-full mt-2 rounded-lg font-Montserrat ${
                  isOpen
                    ? "max-h-[81px] opacity-100 visible"
                    : "max-h-0 opacity-0 invisible"
                }`}
              >
                <p
                  ref={refferance}
                  className="grid gap-1 text-center text-[0.9rem] xs:text-base"
                >
                  <h5
                    className={`cursor-pointer whitespace-nowrap hover:bg-primary/50 hover:text-white scale-100 hover:scale-105 font-normal transition-all duration-300 border-b border-primary/20 py-1.5 ${
                      account === "Phase 1 - 6180217" ? "hidden" : ""
                    }`}
                    onClick={() => (
                      setAccount("Phase 1 - 6180217"), setIsOpen(false)
                    )}
                  >
                    Phase 1 - 6180217
                  </h5>
                  <h5
                    className={`cursor-pointer whitespace-nowrap hover:bg-primary/50 hover:text-white scale-100 hover:scale-105 font-normal transition-all duration-300 border-b border-primary/20 py-1.5 ${
                      account === "Phase 2 - 9584654" ? "hidden" : ""
                    }`}
                    onClick={() => (
                      setAccount("Phase 2 - 9584654"), setIsOpen(false)
                    )}
                  >
                    Phase 2 - 9584654
                  </h5>
                  <h5
                    className={`cursor-pointer whitespace-nowrap hover:bg-primary/50 hover:text-white scale-100 hover:scale-105 font-normal transition-all duration-300 border-b border-primary/20 py-1.5 ${
                      account === "Funded - 7382691" ? "hidden" : ""
                    }`}
                    onClick={() => (
                      setAccount("Funded - 7382691"), setIsOpen(false)
                    )}
                  >
                    Funded - 7382691
                  </h5>
                </p>
              </div>
            </div>

            <div className="border-2 hidden border-primary/30 hover:border-primary/50 transition-all duration-200 rounded-lg bg-main-bg w-full">
              <header
                onClick={() => setIsOpen(!isOpen)}
                className="flex justify-between cursor-pointer w-full py-[0.26rem] px-2.5"
              >
                <h3 className="text-[0.9rem] xs:text-base">{account}</h3>

                <div className="arrow flex justify-center items-center">
                  <img
                    className={`max-w-[1.2rem] transform-gpu transition-all duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    src={arrow}
                    alt="arrow"
                  />
                </div>
              </header>

              <div
                style={{ maxHeight: isOpen ? paraHeight + "px" : "0" }}
                className={`content transition-all duration-300 overflow-hidden`}
              >
                <p
                  ref={refferance}
                  className="grid gap-1 mt-1 text-[0.9rem] xs:text-base pb-4 px-4"
                >
                  <h5
                    className={`cursor-pointer whitespace-nowrap hover:bg-primary/50 hover:text-white scale-100 hover:scale-105 font-normal transition-all duration-200 ${
                      account === "Phase - 1" ? "hidden" : ""
                    }`}
                    onClick={() => (setAccount("Phase - 1"), setIsOpen(false))}
                  >
                    Phase - 1
                  </h5>
                  <h5
                    className={`cursor-pointer whitespace-nowrap hover:bg-primary/50 hover:text-white scale-100 hover:scale-105 font-normal transition-all duration-200 ${
                      account === "Phase - 2" ? "hidden" : ""
                    }`}
                    onClick={() => (setAccount("Phase - 2"), setIsOpen(false))}
                  >
                    Phase - 2
                  </h5>
                  <h5
                    className={`cursor-pointer whitespace-nowrap hover:bg-primary/50 hover:text-white scale-100 hover:scale-105 font-normal transition-all duration-200 ${
                      account === "Funded" ? "hidden" : ""
                    }`}
                    onClick={() => (setAccount("Funded"), setIsOpen(false))}
                  >
                    Funded
                  </h5>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-right">
        <Link
          to="/dashboard/billing"
          className="capitalize hidden sm:inline-block font-Montserrat text-xs font-bold py-3 px-7 dash-btn rounded-3xl"
        >
          START NEW CHALLENGE
        </Link>

        <div className="h-notification group hidden">
          <div className="" onClick={() => handleClick("notification")}>
            <div className="h-10 w-10 bg-primary/50 rounded-full cursor-pointer flex justify-center items-center">
              <IoIosNotifications className="text-2xl" />
            </div>
          </div>

          <div
            className={`notification-open transition-all duration-500 ${
              notifOpen
                ? " scale-100 opacity-100 visible"
                : "scale-50 opacity-0 invisible"
            }`}
          >
            <h1 className="font-bold text-wht pb-[15px] mb-[20px] border-b border-primary/50 ">
              Notifications
            </h1>
            <div className="content text-center">
              <p>No Notification Here</p>
            </div>
          </div>
        </div>

        <div className="author-wrapper relative lg:!flexf !hidden">
          <div
            className="author-wrap cursor-pointer"
            onClick={() => handleClick("account")}
          >
            <div className="thumb h-10 w-10 bg-primary/50 rounded-lg flex justify-center items-center">
              <FaUser className="text-xl" />
            </div>
            <div className="name ml-[15px]">
              James
              <svg
                className="inline-block w-[24px] h-[24px] fill-white"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M7 10l5 5 5-5z"></path>
              </svg>
            </div>
          </div>

          <div
            className={`user-info-open absolute right-0 top-[70px] md:w-[228px] w-[280px] py-[10px] px-[20px] rounded-[10px] shadow-[0_1px_15px_rgba(199,179,252,0.13)] lg:origin-center origin-right bg-main-bg  z-[99999] transition-all duration-500 ${
              accountOpen
                ? " scale-100 opacity-100 visible"
                : "scale-50 opacity-0 invisible"
            }`}
          >
            <ul>
              <li className="border-b border-primary/20">
                <a
                  href="#"
                  className="block text-primary text-base leading-[1.5] tracking-[-0.05px] py-[10px] group-hover:!fill-primary"
                >
                  fundedhub@mail.com
                </a>
              </li>
              <li className="border-b border-primary/20 group">
                <Link
                  to="profile"
                  className="flex items-center   leading-[1.5] tracking-[-0.05px] py-[10px] transition-all duration-350 ease-linear text-wht group-hover:text-primary"
                >
                  My Profile
                </Link>
              </li>
              <li className="group">
                <Link
                  to="/login"
                  className="flex items-center leading-[1.5] tracking-[-0.05px] py-[10px] transition-all duration-350 ease-linear  text-wht group-hover:text-primary"
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mobile-bar lg:hidden group"
          onClick={() => (setSideOpenMbl(!sideOpenMbl), setNotifOpen(false))}
        >
          <div className="h-10 w-10 bg-primary/50 rounded-full cursor-pointer flex justify-center items-center">
            <CgMenuLeft className="text-2xl" />
          </div>
        </div>
      </div>
    </header>
  );
}
