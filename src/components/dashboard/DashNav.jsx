import { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { CgMenuLeft } from "react-icons/cg";
import { arrow } from "../../ui/images";

// eslint-disable-next-line react/prop-types
export default function DashNav({ props }) {
  const [accountOpen, setAccountOpen] = useState(false);
  const [userName, setUserName] = useState("John Doe");
  const [notifOpen, setNotifOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const refferance = useRef(null);

  // user name first latter

  const shortUserName = userName
    .split(" ")
    .map((name) => name.charAt(0))
    .join("");

  // distructure
  const [setSideOpenMbl, sideOpenMbl] = props;

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    setAccountOpen(false);
    setNotifOpen(false);
    setUserOpen(false);
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
    <header className="header-area px-[20px] z-[9999] fixed dash-nav floating-bars">
      <div className="header-left">
        {/* Accounts */}
        <div className="accounts relative h-[1.875rem] z-50">
          <div className="grid gap-2 absolute inset-0 min-w-[12rem]">
            <div className="border border-primary/30 hover:border-primary/50 transition-all duration-200 rounded-lg floating-bars w-full relative">
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
                className={`select-account-options dash-bar-clr border border-primary/20 content overflow-hidden absolute border border-primary/0 transition-all duration-300 py-[0.26rem] w-full mt-2 rounded-lg font-Montserrat floating-bars ${
                  isOpen
                    ? "max-h-[81px] opacity-100 visible"
                    : "max-h-0 opacity-0 invisible"
                }`}
              >
                <div
                  ref={refferance}
                  className="grid gap-1 text-center text-[0.9rem] xs:text-base"
                >
                  <h5
                    className={`cursor-pointer whitespace-nowrap hover:bg-primary/10 ease-linear hover:text-white scale-100 hover:scale-105 font-normal transition-all duration-300 border-b border-primary/20 py-1.5 ${
                      account === "Phase 1 - 6180217" ? "hidden" : ""
                    }`}
                    onClick={() => (
                      setAccount("Phase 1 - 6180217"), setIsOpen(false)
                    )}
                  >
                    Phase 1 - 6180217
                  </h5>
                  <h5
                    className={`cursor-pointer whitespace-nowrap hover:bg-primary/10 ease-linear hover:text-white scale-100 hover:scale-105 font-normal transition-all duration-300 border-b border-primary/20 py-1.5 ${
                      account === "Phase 2 - 9584654" ? "hidden" : ""
                    }`}
                    onClick={() => (
                      setAccount("Phase 2 - 9584654"), setIsOpen(false)
                    )}
                  >
                    Phase 2 - 9584654
                  </h5>
                  <h5
                    className={`cursor-pointer whitespace-nowrap hover:bg-primary/10 ease-linear hover:text-white scale-100 hover:scale-105 font-normal transition-all duration-300 border-b border-primary/20 py-1.5 ${
                      account === "Funded - 7382691" ? "hidden" : ""
                    }`}
                    onClick={() => (
                      setAccount("Funded - 7382691"), setIsOpen(false)
                    )}
                  >
                    Funded - 7382691
                  </h5>
                </div>
              </div>
            </div>

            <div className="border-2 hidden border-primary/30 hover:border-primary/50 transition-all duration-200 rounded-lg floating-bars w-full">
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
                <div
                  ref={refferance}
                  className="grid gap-1 mt-1 text-[0.9rem] xs:text-base pb-4 px-4"
                >
                  <h5
                    className={`cursor-pointer whitespace-nowrap hover:bg-primary/10 ease-linear hover:text-white scale-100 hover:scale-105 font-normal transition-all duration-200 ${
                      account === "Phase - 1" ? "hidden" : ""
                    }`}
                    onClick={() => (setAccount("Phase - 1"), setIsOpen(false))}
                  >
                    Phase - 1
                  </h5>
                  <h5
                    className={`cursor-pointer whitespace-nowrap hover:bg-primary/10 ease-linear hover:text-white scale-100 hover:scale-105 font-normal transition-all duration-200 ${
                      account === "Phase - 2" ? "hidden" : ""
                    }`}
                    onClick={() => (setAccount("Phase - 2"), setIsOpen(false))}
                  >
                    Phase - 2
                  </h5>
                  <h5
                    className={`cursor-pointer whitespace-nowrap hover:bg-primary/10 ease-linear hover:text-white scale-100 hover:scale-105 font-normal transition-all duration-200 ${
                      account === "Funded" ? "hidden" : ""
                    }`}
                    onClick={() => (setAccount("Funded"), setIsOpen(false))}
                  >
                    Funded
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-right relative">
        <div className="navigate relative font-Montserrat font-medium text-wht/90 hidden sm:inline-block">
          <div
            className="wrap flex gap-3 items-center cursor-pointer"
            onClick={() => setUserOpen(!userOpen)}
          >
            <h4 className="user-name">{userName}</h4>
            <div className="short-name uppercase border bg-blu/20 border-blu h-10 w-10 rounded-full flex justify-center items-center">
              {shortUserName}
            </div>

            <div className="arrow">
              <img className="w-5" src={arrow} alt="" />
            </div>
          </div>

          {/* floating panel */}
          <div
            className={`floating absolute dash-bar-clr z-50 -bottom-[7rem] text-wht rounded-xl border border-primary/20 transition-all duration-300 transform ${
              userOpen
                ? "opacity-100 scale-100 -right-[1rem] visible"
                : "opacity-0 scale-75 -right-[3rem] invisible"
            }`}
          >
            <div className="wrap">
              <ul>
                <li className="group">
                  <Link
                    to="profile"
                    className="flex items-center  leading-[1.5] tracking-[-0.05px] py-[10px] transition-all duration-350 hover:bg-primary/10 ease-linear pl-4 pr-10"
                    onClick={() => setUserOpen(false)}
                  >
                    My Profile
                  </Link>
                </li>
                <li className="group">
                  <Link
                    to="/login"
                    className="flex items-center leading-[1.5] tracking-[-0.05px] py-[10px] transition-all duration-350 hover:bg-primary/10 ease-linear pl-4 pr-10"
                    onClick={() => setUserOpen(false)}
                  >
                    Logout
                  </Link>
                </li>
              </ul>
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
            className={`user-info-open absolute right-0 top-[70px] md:w-[228px] w-[280px] py-[10px] px-[20px] rounded-[10px] shadow-[0_1px_15px_rgba(199,179,252,0.13)] lg:origin-center origin-right floating-bars z-[99999] transition-all duration-500 ${
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
