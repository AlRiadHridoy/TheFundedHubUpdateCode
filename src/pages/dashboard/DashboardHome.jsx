import { useEffect } from "react";
// import ApexChart from "../../components/dashboard/ApexChart";
import { useLocation } from "react-router-dom";
import { PiSuitcaseSimpleFill } from "react-icons/pi";
import { BiDollar, BiTime } from "react-icons/bi";
import { RiStackLine } from "react-icons/ri";
import {
  AiOutlineAppstore,
  AiOutlinePercentage,
  AiOutlinePieChart,
} from "react-icons/ai";
import {
  BsGraphUpArrow,
  BsGraphDownArrow,
  BsCurrencyPound,
} from "react-icons/bs";
import { MdMenuOpen } from "react-icons/md";
import LineCharts from "../../components/dashboard/Charts/LineChart";
import BarCharts from "../../components/dashboard/Charts/BarCharts";
import RadialBarCharts from "../../components/dashboard/Charts/RadialBarCharts";
import PieCharts from "../../components/dashboard/Charts/PieCharts";

export default function NewDashboard() {
  const { pathname } = useLocation();

  const weeklyData = [
    {
      name: "Mon",
      return: -1.75,
    },
    {
      name: "Tue",
      return: 2.9,
    },
    {
      name: "Wed",
      return: 3.2,
    },
    {
      name: "Thu",
      return: 0.7,
    },
    {
      name: "Fri",
      return: 4.8,
    },
    {
      name: "Sat",
      return: 0,
    },
    {
      name: "Sun",
      return: -2.1,
    },
  ];
  const profitData = [
    {
      name: "00:00-00:05",
      return: 540,
    },
    {
      name: "00:05-00:15",
      return: -125,
    },

    {
      name: "00:60-00:75",
      return: -300,
    },
    {
      name: "00:75-00:90",
      return: 200,
    },
  ];
  const buySellData = [
    {
      name: "Sell",
      return: -50,
    },
    {
      name: "Buy",
      return: 505,
    },
  ];

  // pie chart
  const symbolAllocationData = {
    data: [
      { name: "US30.cash", value: 30.3 },
      { name: "US100.cash", value: 34.6 },
      { name: "GER30.cash", value: 33.7 },
      { name: "BTC", value: 1.4 },
    ],
    color: [
      { start: "#be185d", end: "#ec4899" },
      { start: "#6b21a8", end: "#a855f7" },
      { start: "#1e40af", end: "#6366f1" },
      { start: "#0e7490", end: "#22d3ee" },
    ],
  };
  const buysellPie = {
    data: [
      { name: "Sell", value: 30 },
      { name: "Buy", value: 70 },
    ],
    color: [
      { start: "#ef4444", end: "#b91c1c" },
      { start: "#84cc16", end: "#15803d" },
    ],
  };
  const symbolData = [
    {
      name: "GBPUSD.tff",
      return: 800,
    },
    {
      name: "XAUUSD",
      return: 95,
    },
    {
      name: "XAGUSD",
      return: -40,
    },
  ];

  const dailySummaryData = [
    {
      time: "Sep 12, 2023 ",
      trade: "18 ",
      lots: "0.90 ",
      result: "£94.10 ",
    },
    {
      time: "Sep 12, 2023 ",
      trade: "18 ",
      lots: "0.90 ",
      result: "£94.10 ",
    },
    {
      time: "Sep 12, 2023 ",
      trade: "18 ",
      lots: "0.90 ",
      result: "£94.10 ",
    },
    {
      time: "Sep 12, 2023 ",
      trade: "18 ",
      lots: "0.90 ",
      result: "-£94.10 ",
    },
    {
      time: "Sep 12, 2023 ",
      trade: "18 ",
      lots: "0.90 ",
      result: "£94.10 ",
    },
    {
      time: "Sep 12, 2023 ",
      trade: "18 ",
      lots: "0.90 ",
      result: "-£94.10 ",
    },
    {
      time: "Sep 12, 2023 ",
      trade: "18 ",
      lots: "0.90 ",
      result: "£94.10 ",
    },
    {
      time: "Sep 12, 2023 ",
      trade: "18 ",
      lots: "0.90 ",
      result: "£94.10 ",
    },
    {
      time: "Sep 12, 2023 ",
      trade: "18 ",
      lots: "0.90 ",
      result: "-£94.10 ",
    },
    {
      time: "Sep 12, 2023 ",
      trade: "18 ",
      lots: "0.90 ",
      result: "£94.10 ",
    },
    {
      time: "Sep 12, 2023 ",
      trade: "18 ",
      lots: "0.90 ",
      result: "£94.10 ",
    },
    {
      time: "Sep 12, 2023 ",
      trade: "18 ",
      lots: "0.90 ",
      result: "-£94.10 ",
    },
  ];

  const historyData = [
    {
      open: " Sep 12, 2023, 8:49:31 PM",
      Action: "sell",
      Symbol: "XAUUSD",
      Volume: "0.05",
      OpenPrice: "1912.6400",
      Close: "Sep 12, 2023, 10:14:08 PM",
      ClosePrice: "1914.7100",
      Duration: "01:24:37",
      Swap: "£0.00",
      Commission: "-£0.28",
      Profit: "-£8.01",
      Pip: "-207.0",
    },
    {
      open: " Sep 12, 2023, 8:49:31 PM",
      Action: "sell",
      Symbol: "XAUUSD",
      Volume: "0.05",
      OpenPrice: "1912.6400",
      Close: "Sep 12, 2023, 10:14:08 PM",
      ClosePrice: "1914.7100",
      Duration: "01:24:37",
      Swap: "£0.00",
      Commission: "-£0.28",
      Profit: "-£8.01",
      Pip: "-207.0",
    },
    {
      open: " Sep 12, 2023, 8:49:31 PM",
      Action: "buy",
      Symbol: "XAUUSD",
      Volume: "0.05",
      OpenPrice: "1912.6400",
      Close: "Sep 12, 2023, 10:14:08 PM",
      ClosePrice: "1914.7100",
      Duration: "01:24:37",
      Swap: "£0.00",
      Commission: "-£0.28",
      Profit: "£8.01",
      Pip: "207.0",
    },
    {
      open: " Sep 12, 2023, 8:49:31 PM",
      Action: "sell",
      Symbol: "XAUUSD",
      Volume: "0.05",
      OpenPrice: "1912.6400",
      Close: "Sep 12, 2023, 10:14:08 PM",
      ClosePrice: "1914.7100",
      Duration: "01:24:37",
      Swap: "£0.00",
      Commission: "-£0.28",
      Profit: "-£8.01",
      Pip: "-207.0",
    },
    {
      open: " Sep 12, 2023, 8:49:31 PM",
      Action: "sell",
      Symbol: "XAUUSD",
      Volume: "0.05",
      OpenPrice: "1912.6400",
      Close: "Sep 12, 2023, 10:14:08 PM",
      ClosePrice: "1914.7100",
      Duration: "01:24:37",
      Swap: "£0.00",
      Commission: "-£0.28",
      Profit: "-£8.01",
      Pip: "-207.0",
    },
    {
      open: " Sep 12, 2023, 8:49:31 PM",
      Action: "buy",
      Symbol: "XAUUSD",
      Volume: "0.05",
      OpenPrice: "1912.6400",
      Close: "Sep 12, 2023, 10:14:08 PM",
      ClosePrice: "1914.7100",
      Duration: "01:24:37",
      Swap: "£0.00",
      Commission: "-£0.28",
      Profit: "£8.01",
      Pip: "207.0",
    },
    {
      open: " Sep 12, 2023, 8:49:31 PM",
      Action: "buy",
      Symbol: "XAUUSD",
      Volume: "0.05",
      OpenPrice: "1912.6400",
      Close: "Sep 12, 2023, 10:14:08 PM",
      ClosePrice: "1914.7100",
      Duration: "01:24:37",
      Swap: "£0.00",
      Commission: "-£0.28",
      Profit: "£8.01",
      Pip: "207.0",
    },
    {
      open: " Sep 12, 2023, 8:49:31 PM",
      Action: "buy",
      Symbol: "XAUUSD",
      Volume: "0.05",
      OpenPrice: "1912.6400",
      Close: "Sep 12, 2023, 10:14:08 PM",
      ClosePrice: "1914.7100",
      Duration: "01:24:37",
      Swap: "£0.00",
      Commission: "-£0.28",
      Profit: "£8.01",
      Pip: "207.0",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main className="new-dashboard relative pt-16 sm:pb-6 sm:pt-24 bg-black">
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
          <div className="dashboard-wrapper z-10 grid gap-6 font-Montserrat font-normal text-sm">
            <div className="head flexf flex-col xs:flex-row gap-6 justify-between hidden">
              <div className="left flex  items-center gap-4">
                <div className="symbol bg-blu p-2.5 sm:p-3 rounded-full">
                  <BsCurrencyPound className="text-2xl" />
                </div>
                <h2 className="relative text-wht-gradient text-2xl sm:text-3xl">
                  Account
                </h2>
              </div>

              {/* create */}
              <div className="right flex items-center">
                <span>
                  <span className="text-gry">Created</span>: Aug 30, 2023
                </span>
              </div>
            </div>
            {/* balance chart */}
            <div className="wrap grid md:grid-cols-3 gap-6">
              <div className="balance-chart col-span-2 hidden">
                {/* ReChart section */}
                <div className="ApexChart relative z-10 grid gap-4 dash-home-bg rounded-xl mt-6 md:mt-0">
                  {/* rechart */}
                  <div className="min-h-[300px] sm:h-[280px] md:min-h-[420px] rounded-xl py-4 md:p-6 pr-4 md:mt-4"></div>
                </div>
              </div>

              {/* line chart */}
              <div className="chart-wrap md:col-span-2 grid gap-4 mt-1">
                <div className="wrap">
                  <div className="head text-[1.4rem] leading-6 text-wht-gradient">
                    Balance Chart
                  </div>
                </div>
                <div className="dash-home-bg overflow-hidden w-full max-h-full">
                  <LineCharts />
                </div>
              </div>
              {/* Funded Account */}
              <div className="right md:col-span-1 grid gap-4">
                <div className="top flex gap-4 justify-between items-center">
                  <div className="head text-[1.4rem] leading-6 text-wht-gradient">
                    Account Details
                  </div>

                  <div className="pas bg-grn p-1 px-2.5 rounded-2xl text-white">
                    passed
                  </div>
                </div>
                <div className="wrap text-sm h-full grid gap-6">
                  <div className="dash-home-bg grid gap-6 py-6 px-4">
                    <div className="txt flex gap-4 justify-between">
                      <div className="name text-gry">Deposit:</div>
                      <div className="value">£10,000.00</div>
                    </div>
                    <div className="txt flex gap-4 justify-between">
                      <div className="name text-gry">Start date:</div>
                      <div className="value">Aug 11, 2023, 6:20:20 PM</div>
                    </div>
                    <div className="txt flex gap-4 justify-between">
                      <div className="name text-gry">Broker:</div>
                      <div className="value">BlackBull</div>
                    </div>
                    <div className="txt flex gap-4 justify-between">
                      <div className="name text-gry">Platform:</div>
                      <div className="value">MetaTrader 5</div>
                    </div>
                  </div>
                  {/* second part */}
                  <div className="dash-home-bg grid gap-6 py-6 px-4">
                    <div className="txt flex gap-4 justify-between">
                      <div className="name text-gry">Balance:</div>
                      <div className="value">£10,425.05</div>
                    </div>
                    <div className="txt flex gap-4 justify-between">
                      <div className="name text-gry">Equity:</div>
                      <div className="value">£10,425.05</div>
                    </div>
                    <div className="txt flex gap-4 justify-between">
                      <div className="name text-gry">Last update:</div>
                      <div className="value">Sep 10, 2023, 5:06:47 PM</div>
                    </div>
                    <div className="txt flex gap-4 justify-between">
                      <div className="name text-gry">Created:</div>
                      <div className="value">Sep 10, 2023</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* options */}
            <div className="wrap grid sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-5 text-sm pt-2 text-center">
              <div className="dash-home-bg p-4">
                <div className="top text-[0.8rem] flex justify-center gap-2">
                  <div className="text-gry">Balance</div>
                  {/* <div className="text-green-500 ">+£425.05</div> */}
                </div>

                <div className="val font-bold">£10,425.05</div>
              </div>
              <div className="dash-home-bg p-4">
                <div className="top text-[0.8rem] flex justify-center gap-2">
                  <div className="text-gry">Equity</div>
                  {/* <div className="text-green-500 ">+£425.05</div> */}
                </div>

                <div className="val font-bold">£10,425.05</div>
              </div>

              <div className="dash-home-bg p-4">
                <div className="top text-[0.8rem] flex justify-center gap-2">
                  <div className="text-gry">Today’s Permitted Loss</div>
                </div>

                <div className="val font-bold">Not available</div>
              </div>

              <div className="dash-home-bg p-4">
                <div className="top text-[0.8rem] flex justify-center gap-2">
                  <div className="text-gry">Max. Permitted Loss</div>
                </div>

                <div className="val font-bold">Not available</div>
              </div>
              <div className="dash-home-bg p-4">
                <div className="top text-[0.8rem] flex justify-center gap-2">
                  <div className="text-gry">Today&apos;s Profit</div>
                </div>

                <div className="val font-bold">£0.00</div>
              </div>
            </div>

            {/* two side */}
            <div className="wrap mt-8">
              <div className="head text-[1.4rem] leading-6 text-wht-gradient">
                Objectives
              </div>

              <div className="items mt-4 grid sm:grid-cols-2 gap-4">
                <div className="item dash-home-bg p-5">
                  <div className="top flex justify-between items-center border-b border-primary/10 pb-4">
                    <div className="txt flex gap-4 items-center">
                      <div className="pas bg-grn p-1.5 px-2.5 rounded-2xl text-white">
                        passed
                      </div>
                      <div>Max Daily Loss</div>
                    </div>

                    <div className="val">£500.00</div>
                  </div>

                  {/* bottom */}
                  <div className="bottom flex gap-4 justify-between pt-3">
                    <div className="text-gry">Result:</div>
                    <div> -£237.76</div>
                  </div>
                </div>

                <div className="item dash-home-bg p-5">
                  <div className="top flex justify-between items-center border-b border-primary/10 pb-4">
                    <div className="txt flex gap-4 items-center">
                      <div className="pas bg-grn p-1.5 px-2.5 rounded-2xl text-white">
                        passed
                      </div>
                      <div>Max Loss</div>
                    </div>

                    <div className="val">£1,000.00</div>
                  </div>

                  {/* bottom */}
                  <div className="bottom flex gap-4 justify-between pt-3">
                    <div className="text-gry">Result:</div>
                    <div> -£223.76</div>
                  </div>
                </div>
              </div>
            </div>
            {/* middle */}
            <div className="middle mt-8 text-xs">
              <div className="wrap grid md:grid-cols-5 gap-6 ">
                <div className="left md:col-span-2 flex flex-col gap-4">
                  <div className="wrap flex ">
                    <div className="head text-[1.4rem] leading-6 text-wht-gradient">
                      Daily Summary
                    </div>
                  </div>
                  <div className="dash-home-bg px-3 py-4 h-full">
                    <table>
                      <thead>
                        <tr className="border-b border-primary">
                          <th align="left">Time</th>
                          <th align="left">Trades</th>
                          <th align="left">Lots</th>
                          <th align="left">Result</th>
                        </tr>
                      </thead>
                      <tbody className="text-gry">
                        {dailySummaryData.map((item, index) => (
                          <tr key={item.trade + index}>
                            <td>
                              <span> {item.time} </span>
                            </td>
                            <td>
                              <span> {item.trade} </span>
                            </td>
                            <td>
                              <span> {item.lots} </span>
                            </td>
                            <td>
                              <span
                                className={`${
                                  item.result.indexOf("-") === -1
                                    ? "text-grn"
                                    : "text-danger"
                                }`}
                              >
                                {" "}
                                {item.result}{" "}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Barchart Chart */}
                <div className="right md:col-span-3 grid gap-4">
                  <div className="wrap">
                    <div className="head text-[1.4rem] leading-6 text-wht-gradient">
                      Daily Returns
                    </div>
                  </div>
                  <div className="chart dash-home-bg py-4 max-h-full">
                    <BarCharts data={weeklyData} percent={1} />
                  </div>
                </div>
              </div>
            </div>
            {/* win & bar chart */}
            <div className="win-loss mt-8 text-xs">
              <div className="wrap flex flex-col md:grid md:grid-cols-2 gap-6 ">
                <div className="left flex flex-col gap-4">
                  <div className="wrap">
                    <div className="head text-[1.4rem] leading-6 text-wht-gradient">
                      Wins & Losses
                    </div>
                  </div>
                  <div className="dash-home-bg px-3 py-4 h-[580px]  sm:h-full w-full">
                    <RadialBarCharts />
                  </div>
                </div>

                {/* Barchart Chart */}
                <div className="right  grid gap-4">
                  <div className="wrap flex">
                    <div className="head text-[1.4rem] leading-6 text-wht-gradient">
                      Profit by Holding time
                    </div>
                  </div>
                  <div className="chart dash-home-bg py-4">
                    <BarCharts data={profitData} />
                  </div>
                </div>
              </div>
            </div>
            {/* Statistics */}
            <div className="statistics mt-8">
              <div className="wrap">
                <div className="head text-[1.4rem] leading-6 text-wht-gradient">
                  Statistics
                </div>
              </div>

              <div className="wrap mt-4">
                <div className="items grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  <div className="item dash-home-bg p-4 flex gap-4 justify-center items-center text-center">
                    <div className="left">
                      <h5 className="text-gry">Best trade</h5>
                      <span>£27.17</span>
                    </div>

                    {/* right */}
                    <div className="right hidden">
                      <div className="icon">
                        <PiSuitcaseSimpleFill />
                      </div>
                    </div>
                  </div>

                  {/* item */}
                  <div className="item dash-home-bg p-4 flex gap-4 justify-center items-center text-center">
                    <div className="left">
                      <h5 className="text-gry">Worst trade</h5>
                      <span>-£26.27</span>
                    </div>

                    {/* right */}
                    <div className="right hidden">
                      <div className="icon">
                        <BiDollar />
                      </div>
                    </div>
                  </div>
                  {/* item */}
                  <div className="item dash-home-bg p-4 flex gap-4 justify-center items-center text-center">
                    <div className="left">
                      <h5 className="text-gry">No. of trades</h5>
                      <span>158</span>
                    </div>

                    {/* right */}
                    <div className="right hidden">
                      <div className="icon">
                        <RiStackLine />
                      </div>
                    </div>
                  </div>

                  {/* item */}
                  <div className="item dash-home-bg p-4 flex gap-4 justify-center items-center text-center">
                    <div className="left">
                      <h5 className="text-gry">Lots</h5>
                      <span>7.57</span>
                    </div>

                    {/* right */}
                    <div className="right hidden">
                      <div className="icon">
                        <AiOutlineAppstore />
                      </div>
                    </div>
                  </div>

                  {/* item */}
                  <div className="item dash-home-bg p-4 flex gap-4 justify-center items-center text-center">
                    <div className="left">
                      <h5 className="text-gry">Win rate</h5>
                      <span>75%</span>
                    </div>

                    {/* right */}
                    <div className="right hidden">
                      <div className="icon">
                        <AiOutlinePercentage />
                      </div>
                    </div>
                  </div>
                  {/* item */}
                  <div className="item dash-home-bg p-4 flex gap-4 justify-center items-center text-center">
                    <div className="left">
                      <h5 className="text-gry">Average win</h5>
                      <span>£8.70</span>
                    </div>

                    {/* right */}
                    <div className="right hidden">
                      <div className="icon">
                        <BsGraphUpArrow />
                      </div>
                    </div>
                  </div>
                  {/* item */}
                  <div className="item dash-home-bg p-4 flex gap-4 justify-center items-center text-center">
                    <div className="left">
                      <h5 className="text-gry">Average loss</h5>
                      <span>-£8.78</span>
                    </div>

                    {/* right */}
                    <div className="right hidden">
                      <div className="icon">
                        <BsGraphDownArrow />
                      </div>
                    </div>
                  </div>
                  {/* item */}
                  <div className="item dash-home-bg p-4 flex gap-4 justify-center items-center text-center">
                    <div className="left">
                      <h5 className="text-gry">Average RRR</h5>
                      <span>0.99</span>
                    </div>

                    {/* right */}
                    <div className="right hidden">
                      <div className="icon">
                        <MdMenuOpen />
                      </div>
                    </div>
                  </div>
                  {/* item */}
                  <div className="item dash-home-bg p-4 flex gap-4 justify-center items-center text-center">
                    <div className="left">
                      <h5 className="text-gry">Expectancy</h5>
                      <span>£4.44</span>
                    </div>

                    {/* right */}
                    <div className="right hidden">
                      <div className="icon">
                        <BiTime />
                      </div>
                    </div>
                  </div>
                  {/* item */}
                  <div className="item dash-home-bg p-4 flex gap-4 justify-center items-center text-center">
                    <div className="left">
                      <h5 className="text-gry">Profit factor</h5>
                      <span>3.10</span>
                    </div>

                    {/* right */}
                    <div className="right hidden">
                      <div className="icon">
                        <AiOutlinePieChart />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Buy / Sell & Direction Allocation
             */}
            <div className="buy-sell mt-8 text-xs">
              <div className="wrap grid md:grid-cols-12 gap-6">
                {/* Barchart Chart */}
                <div className="left flex flex-col gap-4 col-span-7">
                  <div className="wrap">
                    <div className="head text-[1.4rem] leading-6 text-wht-gradient">
                      Buy / Sell
                    </div>
                  </div>
                  <div className="dash-home-bg px-3 py-4  h-full ">
                    <BarCharts data={buySellData} />
                  </div>
                </div>
                {/* pie chart */}
                <div className="right flex flex-col gap-4 col-span-5">
                  <div className="wrap">
                    <div className="head text-[1.4rem] leading-6 text-wht-gradient">
                      Direction Allocation
                    </div>
                  </div>
                  <div className="chart dash-home-bg py-4 h-full">
                    <PieCharts pieData={buysellPie} />
                  </div>
                </div>
              </div>
            </div>
            {/* Symbol & Symbol Allocation */}
            <div className="symbol mt-8 text-xs">
              <div className="wrap grid md:grid-cols-12 gap-6">
                <div className="left flex flex-col gap-4 col-span-7">
                  <div className="wrap">
                    <div className="head text-[1.4rem] leading-6 text-wht-gradient">
                      Symbol
                    </div>
                  </div>
                  <div className="dash-home-bg px-3 py-4  h-full w-full">
                    <BarCharts data={symbolData} />
                  </div>
                </div>

                {/* Barchart Chart */}
                <div className="right flex flex-col gap-4 col-span-5">
                  <div className="wrap">
                    <div className="head text-[1.4rem] leading-6 text-wht-gradient">
                      Symbol Allocation
                    </div>
                  </div>
                  <div className="chart dash-home-bg py-4 h-full">
                    <PieCharts pieData={symbolAllocationData} />
                  </div>
                </div>
              </div>
            </div>
            {/* history */}
            <div className="history mt-8">
              <div className="head text-[1.4rem] leading-6 text-wht-gradient">
                History
              </div>

              <div className="wrap mt-4 dash-home-bg px-3 py-4 h-[400px] overflow-y-scroll">
                <div className="w-full m-auto max-w-[80vw] md:max-w-[70vw] overflow-x-scroll pr-10 pb-10">
                  <table className="">
                    <thead>
                      <tr className="border-b border-primary">
                        <th align="left">Open</th>
                        <th align="left">Action</th>
                        <th align="left">Symbol</th>
                        <th align="left">Volume</th>
                        <th align="left">Open price</th>
                        <th align="left">Close</th>
                        <th align="left">Close price</th>
                        <th align="left">Duration</th>
                        <th align="left">Swap</th>
                        <th align="left">Commission</th>
                        <th align="left">Profit</th>
                        <th align="left">Pip</th>
                      </tr>
                    </thead>

                    {/* tbody */}
                    <tbody>
                      {historyData.map((data, i) => (
                        <tr key={data.open + i}>
                          <td>
                            <span> {data.open} </span>
                          </td>
                          <td>
                            <span
                              className={`${
                                data.Action === "buy"
                                  ? "text-grn"
                                  : "text-danger"
                              } capitalize`}
                            >
                              {" "}
                              {data.Action}{" "}
                            </span>
                          </td>
                          <td>
                            <span> {data.Symbol} </span>
                          </td>
                          <td>
                            <span> {data.Volume}</span>
                          </td>
                          <td>
                            <span> {data.OpenPrice} </span>
                          </td>
                          <td>
                            <span> {data.Close}</span>
                          </td>
                          <td>
                            <span> {data.ClosePrice} </span>
                          </td>
                          <td>
                            <span> {data.Duration} </span>
                          </td>
                          <td>
                            <span> {data.Swap} </span>
                          </td>
                          <td>
                            <span> {data.Commission} </span>
                          </td>
                          <td>
                            <span
                              className={`${
                                data.Profit.indexOf("-") === -1
                                  ? "text-grn"
                                  : "text-danger"
                              } capitalize`}
                            >
                              {" "}
                              {data.Profit}
                            </span>
                          </td>
                          <td>
                            <span
                              className={`${
                                data.Pip.indexOf("-") === -1
                                  ? "text-grn"
                                  : "text-danger"
                              } capitalize`}
                            >
                              {" "}
                              {data.Pip}{" "}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
