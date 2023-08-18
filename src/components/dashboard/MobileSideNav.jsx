import { NavLink, useLocation } from "react-router-dom";
import { author } from "../../ui/images";
import { useEffect, useState } from "react";

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
        className={`mobile-nav pt-[70px] lg:hidden w-[80%] sm:w-[60%] h-full fixed z-[999] top-0 bottom-0 bg-black transition-all duration-500 overflow-hidden  ${
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

        <div className="lg:hidden z-[999] flex pt-4 flex-wrap flex-col items-center justify-center  relative">
          <img
            className="w-[55px] h-[55px] rounded-full"
            src={author}
            alt="author"
          />
          <h4 className="text-wht text-[15px] mt-[8px]">mikha dev</h4>
          <p className="text-primary text-[12px] mt-[8px]">
            mikha.dev@gmail.com
          </p>
        </div>
        <div className="main-menu relative z-[999]">
          <ul className="nav grid gap-2 overflow-y-scroll h-full">
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
      </aside>
    </div>
  );
}
