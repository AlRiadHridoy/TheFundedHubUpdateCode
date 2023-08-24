import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import SocialIcons from "../../components/SocialIcons";

import { mainLogo, circle } from "../../ui/images";

export default function SiderNav() {
  const [activeNav, setActiveNav] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    if (pathname === "/dashboard") setActiveNav(true);
    else setActiveNav(false);
  }, [pathname]);
  return (
    <aside className="sidebar bg-black">
      <div className="logo text-center h-[80px] flex items-center justify-center cursor-pointer relative z-[9999]">
        <Link to="/dashboard">
          <img className="inline-block w-36" src={mainLogo} alt="logo" />
        </Link>
      </div>
      <div className="lg:hidden flex flex-wrap flex-col items-center justify-center">
        <img
          className="w-[55px] h-[55px] rounded-full"
          src="/assets/img/author/author.jpeg"
          alt="author"
        />
        <h4 className="text-wht text-[15px] mt-[8px]">abc dev</h4>
        <p className="text-primary text-[12px] mt-[8px]">abc.dev@gmail.com</p>
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
                <span className="text group-hover:text-main-bg/70">
                  Dashboard
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
                <span className="text group-hover:text-main-bg/70">
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
                <span className="text group-hover:text-main-bg/70">
                  Top-up & Reset
                </span>
              </div>
            </li>
          </NavLink>

          <NavLink
            to="billing"
            className={({ isActive }) => (isActive ? "active-side-nav" : "")}
          >
            <li className="nav-item">
              <div className="nav-link group">
                <span className="text group-hover:text-main-bg/70">
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
                <span className="text group-hover:text-main-bg/70">Help</span>
              </div>
            </li>
          </NavLink>

          <NavLink
            to="dashboard-contact"
            className={({ isActive }) => (isActive ? "active-side-nav" : "")}
          >
            <li className="nav-item">
              <div className="nav-link group">
                <span className="text group-hover:text-main-bg/70">
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
      <ul className="px-10 absolute bottom-[1.5rem] w-full z-30 font-Montserrat">
        <SocialIcons />
        <li className="border-b border-primary/20 group mt-3">
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
      {/* cirlce */}
      <img
        className="cirlce absolute bottom-[10%] -right-[2%] !max-w-[100rem] w-[90rem] rotate-[-20deg] opacity-[0.2]"
        src={circle}
        alt="circle"
      />
      {/* cirlce */}
      <img
        className="cirlce absolute -top-[10%] -left-[140%] !max-w-[50rem] w-[90rem] rotate-[-20deg] opacity-[0.1]"
        src={circle}
        alt="circle"
      />
    </aside>
  );
}
