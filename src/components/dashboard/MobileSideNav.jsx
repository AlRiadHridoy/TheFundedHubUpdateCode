import { useEffect, useState } from "react";
import { NavLink, useLocation, Link } from "react-router-dom";
import { BsDiscord, BsInstagram, BsTwitter } from "react-icons/bs";

// eslint-disable-next-line react/prop-types
export default function MobileSideNav({ props }) {
  const [activeNav, setActiveNav] = useState(false);
  const [setSideOpenMbl, sideOpenMbl] = props;

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    setSideOpenMbl(false);
    if (pathname === "/dashboard") setActiveNav(true);
    else setActiveNav(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);
  return (
    <div className="wrapper relative left-0 right-0 top-0 bottom-0 z-[999] overflow-hidden">
      <aside
        className={`mobile-nav pt-[70px] h-screen overflow-y-scroll lg:hidden w-[80%] sm:w-[60%] fixed z-[999] top-0 bottom-0 bg-black transition-all duration-500 o  ${
          sideOpenMbl ? "left-0" : "-left-full"
        }
    `}
      >
        {/* dark */}
        <div
          className={`bg-main-bg/70 fixed z-[90] left-0 right-0 top-0 bottom-0 transition-all duration-200 ${
            sideOpenMbl ? "visible opacity-100" : "invisible opacity-0 -z-[100]"
          }`}
          onClick={() => setSideOpenMbl(false)}
        ></div>
        <ul className="pl-12 w-full font-Montserrat relative z-[999]">
          <li className="border-b border-primary/20 group mt-4">
            <Link
              to="profile"
              className="flex items-center  leading-[1.5] tracking-[-0.05px] py-[10px] transition-all duration-350 ease-linear text-wht group-hover:text-primary"
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

        <div className="main-menu relative z-[999] ml-5">
          <ul className="nav grid gap-2 h-full">
            <NavLink
              to="/dashboard"
              onClick={() => setActiveNav(true)}
              className={activeNav ? "active-side-nav" : ""}
            >
              <li className="nav-item">
                <div className="nav-link">
                  <span className="text group-hover:text-main-bg/70 font-bold">
                    Dashboard
                  </span>
                </div>
              </li>
            </NavLink>
            <NavLink
              to="trading-overview"
              className={({ isActive }) =>
                isActive ? "active-side-nav hidden" : "hidden"
              }
            >
              <li className="nav-item">
                <div className="nav-link group">
                  <span className="text group-hover:text-main-bg/70 font-bold">
                    Trading Overview
                  </span>
                </div>
              </li>
            </NavLink>

            <NavLink
              to="withdraw"
              className={({ isActive }) => (isActive ? "active-side-nav" : "")}
            >
              <li className="nav-item">
                <div className="nav-link group">
                  <span className="text group-hover:text-main-bg/70 font-bold">
                    Withdraw
                  </span>
                </div>
              </li>
            </NavLink>
            <NavLink
              to="top-up-reset"
              className={({ isActive }) => (isActive ? "active-side-nav" : "")}
            >
              <li className="nav-item">
                <div className="nav-link group">
                  <span className="text group-hover:text-main-bg/70 font-bold">
                    Top-up & Reset
                  </span>
                </div>
              </li>
            </NavLink>

            <NavLink
              to="./billing"
              className={({ isActive }) => (isActive ? "active-side-nav" : "")}
            >
              <li className="nav-item">
                <div className="nav-link group">
                  <span className="text group-hover:text-main-bg/70 font-bold">
                    Billing
                  </span>
                </div>
              </li>
            </NavLink>

            <NavLink
              to="help"
              className={({ isActive }) => (isActive ? "active-side-nav" : "")}
            >
              <li className="nav-item">
                <div className="nav-link group">
                  <span className="text group-hover:text-main-bg/70 font-bold">
                    Help
                  </span>
                </div>
              </li>
            </NavLink>

            <NavLink
              to="dashboard-contact"
              className={({ isActive }) => (isActive ? "active-side-nav" : "")}
            >
              <li className="nav-item">
                <div className="nav-link group flex gap-4">
                  <span className="text group-hover:text-main-bg/70 font-bold">
                    Contact
                  </span>
                </div>
              </li>
            </NavLink>

            <NavLink
              to="certificate"
              className={({ isActive }) => (isActive ? "active-side-nav" : "")}
            >
              <li className="nav-item">
                <div className="nav-link group">
                  <span className="text group-hover:text-main-bg/70">
                    Certificate
                  </span>
                </div>
              </li>
            </NavLink>
          </ul>
        </div>

        {/* logos */}
        <div className="logos flex gap-4 mt-8 z-[999] pl-12 relative pb-20">
          <a
            target="__blank"
            href="https://discord.gg/GVXNaVTr"
            className="logo h-[1.7rem] w-[1.7rem] rounded-md bg-white/[62%] hover:bg-wht transition-all duration-300 flex justify-center items-center"
          >
            <BsDiscord className="text-main-bg h-4 w-4 " />
          </a>
          <a
            target="__blank"
            href="https://www.instagram.com/fundedhub/"
            className="logo h-7 w-7 rounded-full bg-white/[62%] hover:bg-wht transition-all duration-300 flex justify-center items-center"
          >
            <BsInstagram className="text-main-bg h-4 w-4 " />
          </a>
          <a
            target="__blank"
            href="https://twitter.com/TheFundedHub"
            className="logo h-7 w-7 rounded-full bg-white/[62%] hover:bg-wht transition-all duration-300 flex justify-center items-center"
          >
            <BsTwitter className="text-main-bg h-4 w-4 " />
          </a>
        </div>
      </aside>
    </div>
  );
}
