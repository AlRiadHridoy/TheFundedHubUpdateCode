import { useState } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { HiOutlineExclamationCircle } from "react-icons/hi";

import iconBalance from "../../assets/images/dashboard/icon/icon-balance.svg";
import iconEquity from "../../assets/images/dashboard/icon/icon-equity.svg";
import iconGrid from "../../assets/images/dashboard/icon/icon-grid.svg";
import lineChartDown from "../../assets/images/dashboard/icon/icon-line-chart-down.svg";
import MergeType from "../../assets/images/dashboard/icon/icon-merge-type.svg";
import VerticalAlign from "../../assets/images/dashboard/icon/icon-vertical-align-center.svg";
import lineChartUp from "../../assets/images/dashboard/icon/icon-line-chart-up.svg";
import Pagination from "@mui/material/Pagination";
import usePagination from "../../ui/usePagination";
import Stack from "@mui/material/Stack";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export default function TradingOverview() {
  let [page, setPage] = useState(1);
  const PER_PAGE = 5;

  const tradingData = [
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
  ];
  const count = Math.ceil(tradingData.length / PER_PAGE);
  const data = usePagination(tradingData, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    data.jump(p);
  };
  const detailsVal = [
    "$5.421,30",
    "$5.421,30",
    "$70.00",
    "-$20.00",
    "105",
    "Lots",
    "1:1,13",
    "42%",
  ];

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <main className="content-wrapper pt-16 sm:pb-6 sm:pt-24 bg-black purple-shadow-dash  z-[99]">
      <div className="inner-content px-6">
        <div className="breadcrumb-wrap">
          <div className="breadcrumb-title">
            <svg
              className="breadcrumb-icon"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"></path>
            </svg>
            Trading Overview
          </div>
          <h3 className="card-title text-xl mb-4">Trading Objectives</h3>
        </div>
        <div className="dashboard-wrapper flex flex-col gap-8 z-[99]">
          <div className="grid lg:grid-cols-8 gap-6 relative z-[99">
            <div className="w-full lg:col-span-5">
              <div className="flex flex-wrap">
                <div className="w-full">
                  <div className="relative z-10 grid gap-4">
                    <div className="content">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div className="w-full">
                          <div className="p-5 rounded-[15px] dash-home-bg backdrop-blur-3xl dash-home-bg">
                            <p className=" leading-[1.5] tracking-[-0.05px] mb-[20px] text-wht inline-block">
                              <div className="mr-1 inline-block font-medium">
                                Minimum Trading Days
                              </div>
                              <AiOutlineQuestionCircle className="inline-block" />
                            </p>
                            <p className="flex flex-wrap items-center justify-between  leading-[1.5] tracking-[-0.05px] mb-[15px] text-wht">
                              <span>Minimum</span>
                              <span>0 days</span>
                            </p>
                            <p className="flex flex-wrap items-center justify-between  leading-[1.5] tracking-[-0.05px] mb-[15px] text-wht">
                              <span>Current Result</span>
                              <span className="text-primary">11 days</span>
                            </p>
                            <p>
                              <span className="text-primary bg-primary/20 text-[14px] py-[6px] px-[16px] rounded-[5px]">
                                Ongoing
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="w-full">
                          <div className="p-5 rounded-[15px] dash-home-bg backdrop-blur-3xl dash-home-bg">
                            <p className=" leading-[1.5] tracking-[-0.05px] mb-[20px] text-wht inline-block">
                              <div className="mr-1 inline-block font-medium">
                                Daily Loss Limit
                              </div>
                              <AiOutlineQuestionCircle className=" inline-block" />
                            </p>
                            <p className="flex flex-wrap items-center justify-between  leading-[1.5] tracking-[-0.05px] mb-[15px] text-wht">
                              <span>Max. daily Loss</span>
                              <span>$250</span>
                            </p>
                            <p className="flex flex-wrap items-center justify-between  leading-[1.5] tracking-[-0.05px] mb-[15px] text-wht">
                              <span>Max. daily Loss recorded</span>
                              <span className="text-primary">$80</span>
                            </p>
                            <p>
                              <span className="text-primary bg-primary/20 text-[14px] py-[6px] px-[16px] rounded-[5px]">
                                Ongoing
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="w-full ">
                          <div className="p-5 rounded-[15px] dash-home-bg backdrop-blur-3xl dash-home-bg">
                            <p className=" leading-[1.5] tracking-[-0.05px] mb-[20px] text-wht inline-block ">
                              <div className="mr-1 inline-block font-medium">
                                Maximum Loss Limit
                              </div>
                              <AiOutlineQuestionCircle className=" inline-block" />
                            </p>
                            <p className="flex flex-wrap items-center justify-between  leading-[1.5] tracking-[-0.05px] mb-[15px] text-wht">
                              <span>Max. Loss</span>
                              <span>$600</span>
                            </p>
                            <p className="flex flex-wrap items-center justify-between  leading-[1.5] tracking-[-0.05px] mb-[15px] text-wht">
                              <span>Max. Loss recorded</span>
                              <span className="text-primary">$140</span>
                            </p>
                            <p>
                              <span className="text-primary bg-primary/20 text-[14px] py-[6px] px-[16px] rounded-[5px]">
                                Ongoing
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="w-full">
                          <div className="p-5 rounded-2xl dash-home-bg backdrop-blur-3xl dash-home-bg">
                            <div className="card-heading flex items-center mb-[20px]">
                              <div className="mr-1 inline-block font-medium">
                                Account Growth
                              </div>
                              <AiOutlineQuestionCircle className=" inline-block" />
                            </div>
                            <div className="content">
                              <p className=" text-[28px] text-center leading-[1.5] font-medium tracking-[-0.05px] py-[30px] text-wht">
                                8%
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap h-full mt-6">
                <div className="w-full">
                  <div className="card-wrap dash-home-bg mb-0 h-full">
                    <h3 className="card-title">Trading Growth Curve</h3>
                    <div className="content flex flex-col gap-3 justify-between ">
                      <div className="flex flex-wrap items-center justify-between  leading-[1.5] tracking-[-0.05px] text-wht">
                        <p className="inline-flex items-center">
                          <svg
                            className="inline-block w-[20px] h-[20px] mr-[5px] fill-white"
                            focusable="false"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                          </svg>
                          Max Permitted Loss
                        </p>
                        <p className="mt-2 /90 font-bold py-[6px] px-[16px] rounded-[5px]  bg-primary/40">
                          $600
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center justify-between  leading-[1.5] tracking-[-0.05px] text-wht">
                        <p className="inline-flex items-center">
                          <svg
                            className="inline-block w-[20px] h-[20px] mr-[5px] fill-white"
                            focusable="false"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                          </svg>
                          Today&apos;s Permitted Loss
                        </p>
                        <p className=" mt-2 font-bold py-[6px] px-[16px] rounded-[5px] /90 bg-primary/40">
                          $250
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center justify-between  leading-[1.5] tracking-[-0.05px] text-wht">
                        <p className="inline-flex items-center">
                          <svg
                            className="inline-block w-[20px] h-[20px] mr-[5px] fill-white"
                            focusable="false"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                          </svg>
                          Today&apos;s Permitted Loss Will Reset In
                        </p>
                        <p className=" mt-2 font-bold py-[6px] px-[16px] rounded-[5px] /90 bg-primary/40">
                          -2:56:29
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="!w-full lg:pl-[15px] font-Montserrat lg:col-span-3 relative z-[99]">
              <div className="card-wrap dash-home-bg h-full text-base">
                <h3 className="card-title">Details Stats</h3>
                <div className="content text-center grid gap-4">
                  <div className="stats-list flex flex-wrap items-center justify-between pb-4 border-b border-white/10">
                    <div>
                      <p className="inline-flex items-center leading-[1.5] tracking-[-0.05px] text-wht z-0">
                        <img
                          className="inline-block w-[20px] h-[20px] mr-[5px]"
                          src={iconEquity}
                          alt="icon"
                        />
                        Equity
                        <div className="wrap ml-1 exlamation relative group z-[20]">
                          <div className="hover-txt  absolute z-10">
                            The Equity reflects the real-time calculation of
                            your profit/loss. The Equity takes into account both
                            open and closed positions.
                          </div>
                          {"  "} <HiOutlineExclamationCircle />
                        </div>
                      </p>
                    </div>
                    <div className="numb leading-[1.5] tracking-[-0.05px] font-medium text-wht">
                      {detailsVal[0]}
                    </div>
                  </div>

                  <div className="stats-list flex flex-wrap items-center justify-between pb-4 border-b  border-white/10">
                    <div className="">
                      <p className="inline-flex items-center  leading-[1.5] tracking-[-0.05px] text-wht">
                        <img
                          className="inline-block w-[20px] h-[20px] mr-[5px]"
                          src={iconBalance}
                          alt="icon"
                        />
                        Balance
                        <div className="wrap ml-1 exlamation relative group z-[7]">
                          <div className="hover-txt  absolute z-10">
                            The Balance reflects your profit/loss from closed
                            positions.
                          </div>
                          {"  "} <HiOutlineExclamationCircle />
                        </div>
                      </p>
                    </div>
                    <div className="numb  leading-[1.5] tracking-[-0.05px] font-medium text-wht">
                      {detailsVal[1]}
                    </div>
                  </div>

                  <div className="stats-list flex flex-wrap items-center justify-between pb-4 border-b border-white/10">
                    <div className="">
                      <p className="inline-flex items-center  leading-[1.5] tracking-[-0.05px] text-wht">
                        <img
                          className="inline-block w-[20px] h-[20px] mr-[5px]"
                          src={lineChartUp}
                          alt="icon"
                        />
                        Avg. Winning Trade
                        <div className="wrap ml-1 exlamation relative group z-[6]">
                          <div className="hover-txt  absolute z-10">
                            The average amount of {detailsVal[2]} that you have
                            made from your winning trades.
                          </div>
                          {"  "} <HiOutlineExclamationCircle />
                        </div>
                      </p>
                    </div>
                    <div className="numb  leading-[1.5] tracking-[-0.05px] font-medium text-wht">
                      {detailsVal[2]}
                    </div>
                  </div>

                  <div className="stats-list flex flex-wrap items-center justify-between pb-4  border-b  border-white/10">
                    <div className="">
                      <p className="inline-flex items-center  leading-[1.5] tracking-[-0.05px] text-wht">
                        <img
                          className="inline-block w-[20px] h-[20px] mr-[5px]"
                          src={lineChartDown}
                          alt="icon"
                        />
                        Avg. Losing Trade
                        <div className="wrap ml-1 exlamation relative group z-[5]">
                          <div className="hover-txt  absolute z-10">
                            The average amount of {detailsVal[3]} that you have
                            lost from your losing trades.
                          </div>
                          {"  "} <HiOutlineExclamationCircle />
                        </div>
                      </p>
                    </div>
                    <div className="numb  leading-[1.5] tracking-[-0.05px] font-medium text-wht">
                      {detailsVal[3]}
                    </div>
                  </div>

                  <div className="stats-list flex flex-wrap items-center justify-between pb-4  border-b  border-white/10">
                    <div className="">
                      <p className="inline-flex items-center  leading-[1.5] tracking-[-0.05px] text-wht">
                        <img
                          className="inline-block w-[20px] h-[20px] mr-[5px]"
                          src={lineChartDown}
                          alt="icon"
                        />
                        Total n. of trades
                        <div className="wrap ml-1 exlamation relative group z-[4]">
                          <div className="hover-txt  absolute z-10">
                            Total number of trades taken in your trading cycle.
                          </div>
                          {"  "} <HiOutlineExclamationCircle />
                        </div>
                      </p>
                    </div>
                    <div className="numb  leading-[1.5] tracking-[-0.05px] font-medium text-wht">
                      {detailsVal[4]}
                    </div>
                  </div>

                  <div className="stats-list flex flex-wrap items-center justify-between pb-4  border-b  border-white/10">
                    <div className="">
                      <p className="inline-flex items-center  leading-[1.5] tracking-[-0.05px] text-wht">
                        <img
                          className="inline-block w-[20px] h-[20px] mr-[5px]"
                          src={iconGrid}
                          alt="icon"
                        />
                        Avg. lots
                        <div className="wrap ml-1 exlamation relative group z-[3]">
                          <div className="hover-txt  absolute z-10">
                            Total number of lots taken in your trading cycle.
                          </div>
                          {"  "} <HiOutlineExclamationCircle />
                        </div>
                      </p>
                    </div>
                    <div className="numb  leading-[1.5] tracking-[-0.05px] font-medium text-wht">
                      {detailsVal[5]}
                    </div>
                  </div>

                  <div className="stats-list flex flex-wrap items-center justify-between pb-4 border-b  border-white/10">
                    <div className="">
                      <p className="inline-flex items-center  leading-[1.5] tracking-[-0.05px] text-wht">
                        <img
                          className="inline-block w-[20px] h-[20px] mr-[5px]"
                          src={VerticalAlign}
                          alt="icon"
                        />
                        Average RRR
                        <div className="wrap ml-1 exlamation relative group z-[2]">
                          <div className="hover-txt  absolute z-10">
                            This shows the ratio between the average loss and
                            average profit of your account position. RRR alone
                            does not necessarily signify a profitable trading
                            system if not considered together with Win rate.
                          </div>
                          {"  "} <HiOutlineExclamationCircle />
                        </div>
                      </p>
                    </div>
                    <div className="numb  leading-[1.5] tracking-[-0.05px] font-medium text-wht">
                      {detailsVal[6]}
                    </div>
                  </div>

                  <div className="stats-list flex flex-wrap items-center justify-between">
                    <div className="">
                      <p className="inline-flex items-center  leading-[1.5] tracking-[-0.05px] text-wht">
                        <img
                          className="inline-block w-[20px] h-[20px] mr-[5px]"
                          src={MergeType}
                          alt="icon"
                        />
                        Win Rate
                        <div className="wrap ml-1 exlamation relative group z-[1]">
                          <div className="hover-txt  absolute z-10">
                            The number of trades won over the number of trades
                            taken.
                          </div>
                          {"  "} <HiOutlineExclamationCircle />
                        </div>
                      </p>
                    </div>
                    <div className="numb  leading-[1.5] tracking-[-0.05px] font-medium  text-wht">
                      {detailsVal[7]}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap mx-[-15px] z-0">
            <div className="w-full px-[15px]">
              <div className="card-wrap dash-home-bg">
                <div className="card-heading flex items-center justify-between mb-[20px]">
                  <h3 className="card-title !mb-0">Trading History</h3>
                </div>
                <div className="content">
                  <div className="trading-wrap overflow-x-auto">
                    <div className="responsive-wrap min-w-[1200px]">
                      <div className="heading grid grid-cols-[50px_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] gap-[10px] border-b border-[#000]/10 py-[10px]">
                        <p className="  text-[16px] leading-[1.5] font-semibold tracking-[-0.05px] text-wht">
                          SN
                        </p>
                        <p className="inline-flex items-center  text-[16px] leading-[1.5] font-semibold tracking-[-0.05px] text-wht">
                          Open Time
                        </p>
                        <p className="inline-flex items-center  text-[16px] leading-[1.5] font-semibold tracking-[-0.05px] text-wht">
                          Open Price
                        </p>
                        <p className="inline-flex items-center  text-[16px] leading-[1.5] font-semibold tracking-[-0.05px] text-wht">
                          Close Time
                        </p>
                        <p className="inline-flex items-center  text-[16px] leading-[1.5] font-semibold tracking-[-0.05px] text-wht">
                          Close Price
                        </p>
                        <p className="inline-flex items-center  text-[16px] leading-[1.5]  font-semibold tracking-[-0.05px] text-wht">
                          lots
                        </p>
                        <p className="inline-flex items-center  text-[16px] leading-[1.5]  font-semibold tracking-[-0.05px] text-wht">
                          Profit
                        </p>
                        <p className="inline-flex items-center  text-[16px] leading-[1.5]  font-semibold tracking-[-0.05px] text-wht">
                          Commission
                        </p>
                        <p className="inline-flex items-center  text-[16px] leading-[1.5]  font-semibold tracking-[-0.05px] text-wht">
                          Swap
                        </p>
                        <p className="inline-flex items-center  text-[16px] leading-[1.5]  font-semibold tracking-[-0.05px] text-wht">
                          Symbol
                        </p>
                        <p className="inline-flex items-center  text-[16px] leading-[1.5]  font-semibold tracking-[-0.05px] text-wht">
                          Type
                        </p>
                      </div>

                      {/* items */}
                      {data.currentData().map((m, index) => {
                        return (
                          <div
                            key={m}
                            className="content grid items-center grid-cols-[50px_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] gap-[10px] border-b border-[#000]/10 py-[10px]"
                          >
                            <p className="text-[14px]  leading-[1.5] tracking-[-0.05px] text-wht">
                              {index + 1}
                            </p>
                            <p className="text-[14px]  leading-[1.5] tracking-[-0.05px] text-wht">
                              2022.01.01 08:01:47
                            </p>
                            <p className="text-[14px]  leading-[1.5] tracking-[-0.05px] text-wht">
                              47199.83
                            </p>
                            <p className="text-[14px]  leading-[1.5] tracking-[-0.05px] text-wht">
                              2022.01.01 08:10:02
                            </p>
                            <p className="text-[14px]  leading-[1.5] tracking-[-0.05px] text-wht">
                              47254.29
                            </p>
                            <p className="text-[14px]  leading-[1.5] tracking-[-0.05px] text-wht">
                              1
                            </p>
                            <p className="text-[14px]  leading-[1.5] tracking-[-0.05px] text-wht">
                              $54.46
                            </p>
                            <p className="text-[14px]  leading-[1.5] tracking-[-0.05px] text-wht">
                              -$236.00
                            </p>
                            <p className="text-[14px]  leading-[1.5] tracking-[-0.05px] text-wht">
                              0
                            </p>
                            <p className="text-[14px]  leading-[1.5] tracking-[-0.05px] text-wht">
                              BTCUSD
                            </p>
                            <p className="text-[14px]  leading-[1.5] tracking-[-0.05px] text-wht">
                              Buy
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* pagination */}
          <div className="pagination mt-4 flex justify-center">
            <ThemeProvider theme={darkTheme}>
              <Stack spacing={2}>
                <Pagination
                  count={count}
                  page={page}
                  shape="rounded"
                  variant="outlined"
                  color="secondary"
                  onChange={handleChange}
                />
              </Stack>
            </ThemeProvider>
          </div>
        </div>
      </div>
    </main>
  );
}
