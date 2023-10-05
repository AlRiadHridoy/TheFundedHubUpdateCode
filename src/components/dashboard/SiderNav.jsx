import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import SocialIcons from "../../components/SocialIcons";
import mainLogo from "../../assets/images/dashboard-logo.png";

export default function SiderNav() {
  const [activeNav, setActiveNav] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    if (pathname === "/dashboard") setActiveNav(true);
    else setActiveNav(false);
  }, [pathname]);
  return (
    <aside className="sidebar floating-bars">
      <div className="logo text-center h-[80px] flex items-center justify-center cursor-pointer relative z-[9999]">
        <Link to="/dashboard">
          <img className="inline-block w-36" src={mainLogo} alt="logo" />
        </Link>
      </div>
      <div className="main-menu z-30 relative">
        <ul className="nav grid gap-2 overflow-y-scroll md:overflow-auto">
          <NavLink
            to="/dashboard"
            onClick={() => setActiveNav(true)}
            className={activeNav ? "active-side-nav" : ""}
          >
            <li className="nav-item group">
              <div className="nav-link">
                <span className="">Dashboard</span>
              </div>
            </li>
          </NavLink>
          <NavLink
            to="withdraw"
            className={({ isActive }) => (isActive ? "active-side-nav" : "")}
          >
            <li className="nav-item">
              <div className="nav-link group">
                <span className="">Withdraw</span>
              </div>
            </li>
          </NavLink>
          <NavLink
            to="top-up-reset"
            className={({ isActive }) => (isActive ? "active-side-nav" : "")}
          >
            <li className="nav-item">
              <div className="nav-link group">
                <span className="">Reset & Free Retry</span>
              </div>
            </li>
          </NavLink>

          <NavLink
            to="billing"
            className={({ isActive }) => (isActive ? "active-side-nav" : "")}
          >
            <li className="nav-item">
              <div className="nav-link group">
                <span className="">Billing</span>
              </div>
            </li>
          </NavLink>

          {/* <NavLink
            to="help"
            className={({ isActive }) => (isActive ? "active-side-nav" : "")}
          >
            <li className="nav-item">
              <div className="nav-link group">
                <span className="">Help</span>
              </div>
            </li>
          </NavLink>

          <NavLink
            to="dashboard-contact"
            className={({ isActive }) => (isActive ? "active-side-nav" : "")}
          >
            <li className="nav-item">
              <div className="nav-link group">
                <span className="">Contact</span>
              </div>
            </li>
          </NavLink> */}

          <NavLink
            to="certificate"
            className={({ isActive }) => (isActive ? "active-side-nav" : "")}
          >
            <li className="nav-item">
              <div className="nav-link group">
                <span className="">Certificate</span>
              </div>
            </li>
          </NavLink>
        </ul>
      </div>
      <div className="absolute grid gap-4 justify-center items-center bottom-[1.5rem] w-full z-30 font-Montserrat">
        <div className="wrap flex justify-center">
          <SocialIcons />
        </div>
        <Link
          to="/dashboard/start-new-challenge"
          className="capitalize whitespace-nowrap font-Montserrat text-xs font-bold py-3 px-5 dash-btn rounded-3xl text-center max-w-[12rem]"
        >
          START NEW CHALLENGE
        </Link>
      </div>
    </aside>
  );
}
