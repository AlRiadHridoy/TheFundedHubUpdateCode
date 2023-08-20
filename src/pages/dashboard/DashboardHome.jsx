import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { copy } from "../../ui/images";
import ApexChart from "../../components/dashboard/ApexChart";
import TradingOverview from "../../components/dashboard/TradingOverview";

export default function DashboardHome() {
  const [passVisible, setPassVisible] = useState(false);

  const copyFunc = (el, text) => {
    el.target.parentNode.classList.add("copied");
    setTimeout(() => {
      el.target.parentNode.classList.remove("copied");
    }, 450);
    navigator.clipboard.writeText(text);
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const userinfo = {
    login: "7382691",
    password: "HDJNSJ39",
    server: "TFH - Funded",
    balance: "5000.00",
    platform: "MetaTrader 5",
  };

  return (
    <main className="dashboard relative pt-16 sm:pb-6 sm:pt-24 bg-black purple-shadown-dash">
      <div className="content-wrapper relative">
        <div className="inner-content px-6 relative">
          <div className="flex flex-col xs:flex-row gap-5 relative mb-10 md:hidden">
            <div className="inline-flex justify-start text-[22px] leading-[1.5] font-medium tracking-[-0.06px] ">
              <svg
                className="breadcrumb-icon mt-1"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path>
              </svg>
              Dashboard
            </div>
          </div>

          {/* Dashboard */}
          <div className="dashboard-wrapper z-10">
            <div className="flex flex-wrap">
              <div className="w-full grid md:grid-cols-12 gap-6">
                {/* ApexChart section */}
                <div className="flex flex-wrap mx-[-15px] relative md:col-span-9">
                  <div className="w-full xs:px-[15px] z-10 relative">
                    <div className="sm:card-wrap">
                      <h3 className="card-title hidden z-10 relative text-center sm:text-start mb-2">
                        Trading Growth Curve
                      </h3>
                      <div className="content">
                        {/* ApexChart section */}
                        <div className="ApexChart relative z-10 grid gap-4 card-border rounded-xl mt-6 md:mt-0">
                          {/* ApexChart */}
                          <div className="min-h-[300px] sm:h-[280px] md:min-h-[420px] rounded-xl py-4 md:p-6 pr-4 md:mt-4">
                            <ApexChart />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Cards */}
                <div className="grid  gap-6 w-full relative z-20 md:col-span-3">
                  {/* card */}
                  <div className="card-border border-green-600s flex items-center p-6 gap-4 rounded-xl">
                    <div className="wrap flex justify-center gap-4">
                      <div className="d-icon bg-gry w-12 h-12 rounded-full flexf justify-center items-center mt-1 hidden">
                        <svg
                          className="fill-main-bg w-10"
                          focusable="false"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"></path>
                        </svg>
                      </div>
                      <div className="content">
                        <h2 className="text-2xl">$421, 30</h2>
                        <p>Profit</p>
                      </div>
                    </div>
                  </div>
                  {/* card */}
                  <div className="card-border border-yellow-600s flex items-center p-6 gap-4 rounded-xl">
                    <div className="wrap flex justify-center gap-4">
                      <div className="d-icon bg-gry w-12 h-12 rounded-full flexf justify-center items-center mt-1 hidden">
                        <svg
                          className="fill-main-bg w-10"
                          focusable="false"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"></path>
                        </svg>
                      </div>
                      <div className="content">
                        <h2 className="text-2xl">$0.00</h2>
                        <p className="!normal-case">Daily drawdown</p>
                      </div>
                    </div>
                  </div>
                  {/* card */}
                  <div className="card-border border-blue-600s flex items-center p-6 gap-4 rounded-xl">
                    <div className="wrap flex justify-center gap-4">
                      <div className="d-icon bg-gry w-12 h-12 rounded-full flexf justify-center items-center mt-1 hidden">
                        <svg
                          className="fill-main-bg w-10"
                          focusable="false"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"></path>
                        </svg>
                      </div>
                      <div className="content">
                        <h2 className="text-2xl">11 Days</h2>
                        <p>Trading days</p>
                      </div>
                    </div>
                  </div>

                  {/* card */}
                  <div className="card-border  hidden">
                    <div className="d-icon bg-gry">
                      <svg
                        className="fill-main-bg h- w-6"
                        focusable="false"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z"></path>
                      </svg>
                    </div>
                    <div className="content">
                      <h2>$0.00</h2>
                      <p className="!normal-case">Daily drawdown</p>
                    </div>
                  </div>
                  {/* card */}
                  <div className="card-border hidden">
                    <div className="d-icon bg-gry">
                      <svg
                        className="fill-main-bg h- w-6"
                        focusable="false"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"></path>
                      </svg>
                    </div>
                    <div className="content">
                      <h2>11 Days</h2>
                      <p>trading days</p>
                    </div>
                  </div>
                </div>

                {/* Account detalis */}
                <div className="flex flex-wrap relative z-20 md:col-span-9">
                  <div className="w-full">
                    <div className="card-wrap card-border h-full">
                      <h3 className="card-title">Account Details</h3>
                      <div className="content">
                        <div className="account-info font-Montserrat">
                          <div className="account-info-top grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                            <div className="info-item">
                              <div className="wrapper flex gap-2">
                                <h4>Login</h4>
                                <div className="icon-wrapper relative before:absolute before:content-['Copied'] before:text-black before:py-1 before:px-2.5 before:text-xs before:rounded-lg before:bg-primary before:left-[50%] before:-top-[130%] before:opacity-0 before:invisible transition-all duration-200">
                                  <img
                                    className="w-4 opacity-70 cursor-pointer hover:opacity-40 transition duration-150"
                                    onClick={(el) => {
                                      copyFunc(el, userinfo.login);
                                    }}
                                    src={copy}
                                    alt=""
                                  />
                                </div>
                              </div>
                              <span className="!font-Montserrat">
                                {userinfo.login}
                              </span>
                            </div>
                            <div className="info-item">
                              <div className="wrapper flex gap-2">
                                <h4>Password</h4>

                                <div className="icon-wrapper relative before:absolute before:content-['Copied'] before:text-black before:py-1 before:px-2.5 before:text-xs before:rounded-lg before:bg-primary before:left-[50%] before:-top-[130%] before:opacity-0 before:invisible transition-all duration-200">
                                  <img
                                    className="w-4 opacity-70 cursor-pointer hover:opacity-40 transition duration-150"
                                    onClick={(el) => {
                                      copyFunc(el, userinfo.password);
                                    }}
                                    src={copy}
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div className="pass-show flex h-[24px] w-[85px] ">
                                {passVisible ? (
                                  <span className="!font-Montserrat">
                                    {userinfo.password}
                                  </span>
                                ) : (
                                  <span className="!text-2xl">********</span>
                                )}

                                <div className="pass-icon ml-4 mt-1">
                                  <AiFillEye
                                    onClick={() => setPassVisible(false)}
                                    className={`icon w-[14px] h-[14px] fill-white cursor-pointer ${
                                      passVisible ? "" : "hidden"
                                    }`}
                                  />
                                  <AiFillEyeInvisible
                                    onClick={() => setPassVisible(true)}
                                    className={`icon w-[14px] h-[14px] fill-white cursor-pointer ${
                                      !passVisible ? "" : "hidden"
                                    }`}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="info-item">
                              <div className="wrapper flex gap-2">
                                <h4>Server</h4>
                                <div className="icon-wrapper relative before:absolute before:content-['Copied'] before:text-black before:py-1 before:px-2.5 before:text-xs before:rounded-lg before:bg-primary before:left-[50%] before:-top-[130%] before:opacity-0 before:invisible transition-all duration-200">
                                  <img
                                    className="w-4 opacity-70 cursor-pointer hover:opacity-40 transition duration-150"
                                    onClick={(el) => {
                                      copyFunc(el, userinfo.server);
                                    }}
                                    src={copy}
                                    alt=""
                                  />
                                </div>
                              </div>
                              <span className="!font-Montserrat">
                                {userinfo.server}
                              </span>
                            </div>
                            <div className="info-item ">
                              <div className="wrapper flex gap-2">
                                <h4>Balance</h4>
                              </div>
                              <span className="!font-Montserrat">
                                ${userinfo.balance}
                              </span>
                            </div>

                            <div className="info-item !hidden">
                              <div className="wrapper flex gap-2">
                                <h4>Platform</h4>
                              </div>
                              <a href="#" className="text-primary underline">
                                {userinfo.platform}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* card */}
                <div className=" rounded-2xl p-[25px] card-border h-full md:col-span-3 ">
                  <div className="title text-lg font-semibold mb-5">Timing</div>
                  <div className="wrap grid gap-2">
                    <div>
                      <span className="text-[16px] font-bold">Start Date:</span>{" "}
                      <span>Sep 25, 2022</span>
                    </div>
                    <div>
                      <span className="text-[16px] font-bold">End Date:</span>{" "}
                      <span>Oct 25, 2022</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trading Overview */}
          <div className="treading-overview mt-10">
            <TradingOverview />
          </div>
        </div>
      </div>
    </main>
  );
}
