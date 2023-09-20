import { useEffect, useState } from "react";

import { useLocation, Outlet } from "react-router-dom";

import DashNav from "../../components/dashboard/DashNav";
import SiderNav from "../../components/dashboard/SiderNav";
import DashboardHome from "./DashboardHome";
// import NewDashboard from "./NewDashboard";
import MobileSideNav from "../../components/dashboard/MobileSideNav";

import "../../dashboard.css";

export default function Dashboard() {
  const [sideOpen, setSideOpen] = useState(true);
  const [sideOpenMbl, setSideOpenMbl] = useState(false);

  const [disWith, setDisWith] = useState({
    top: 30,
    right: 30,
    left: -20,
    bottom: -5,
  });

  // Bg scrolling
  useEffect(() => {
    if (sideOpenMbl) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [sideOpenMbl]);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (screen.width > 560) {
      setDisWith({
        top: 30,
        right: 30,
        left: 15,
        bottom: 10,
      });
    }
  }, []);

  return (
    <>
      <DashNav props={[setSideOpenMbl, sideOpenMbl]} />
      <SiderNav sideOpen={sideOpen} />
      <MobileSideNav props={[setSideOpenMbl, sideOpenMbl]} />
      <div className="wrapper purple-shadow  fh-screen">
        {pathname === "/dashboard" ? <DashboardHome /> : <Outlet />}
      </div>
    </>
  );
}
