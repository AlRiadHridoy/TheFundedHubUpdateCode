import { useEffect } from "react";
import ApexChart from "../../components/dashboard/ApexChart";
import { useLocation } from "react-router-dom";
import { PiSuitcaseSimpleFill } from "react-icons/pi";
import { BiDollar, BiTime } from "react-icons/bi";
import { RiStackLine } from "react-icons/ri";
import {
  AiOutlineAppstore,
  AiOutlinePercentage,
  AiOutlinePieChart,
} from "react-icons/ai";
import { BsGraphUpArrow, BsGraphDownArrow } from "react-icons/bs";
import { MdMenuOpen } from "react-icons/md";
// import DonutChart from "../../components/dashboard/Charts/DonutChart";
import LineCharts from "../../components/dashboard/Charts/LineChart";
export default function NewDashboard() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main className="new-dashboard relative pt-16 sm:pb-6 sm:pt-24 bg-black purple-shadow-dash">
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
            <div className="head flex gap-6 justify-between">
              <div className="left flex gap-4">
                <div className="symbol"></div>
                <h2 className="relative">Account</h2>
              </div>

              {/* create */}
              <div className="right">
                <span>Created:Aug 30, 2023</span>
              </div>
            </div>
            {/* balance chart */}
            <div className="wrap grid grid-cols-3 gap-4">
              <div className="balance-chart col-span-2">
                {/* ApexChart section */}
                <div className="ApexChart relative z-10 grid gap-4 card-border rounded-xl mt-6 md:mt-0">
                  {/* ApexChart */}
                  <div className="min-h-[300px] sm:h-[280px] md:min-h-[420px] rounded-xl py-4 md:p-6 pr-4 md:mt-4">
                    <ApexChart />
                  </div>
                </div>
              </div>
              {/* Funded Account */}
              <div className="right col-span-1">
                <div className="top flex gap-4 justify-between items-center hidden">
                  <h3>Funded Account</h3>
                  <span>passed</span>
                </div>
                <div className="wrap card-border pt-8 px-4 fmt-4 text-sm h-full">
                  <div className=" grid gap-8">
                    <div className="txt flex gap-4 justify-between">
                      <div className="name text-gry">Deposit:</div>
                      <div className="value">£10,000.00</div>
                    </div>
                    <div className="txt flex gap-4 justify-between">
                      <div className="name text-gry">Start date:</div>
                      <div className="value">Aug 30, 2023, 6:10:29 PM</div>
                    </div>
                    <div className="txt flex gap-4 justify-between">
                      <div className="name text-gry">Broker:</div>
                      <div className="value">True Proprietary Funds Kft.</div>
                    </div>
                    <div className="txt flex gap-4 justify-between">
                      <div className="name text-gry">Platform:</div>
                      <div className="value">MetaTrader 5</div>
                    </div>
                    <div className="txt flex gap-4 justify-between">
                      <div className="name text-gry">Balance:</div>
                      <div className="value">£10,701.27</div>
                    </div>
                    <div className="txt flex gap-4 justify-between">
                      <div className="name text-gry">Equity:</div>
                      <div className="value">£10,701.27</div>
                    </div>
                    <div className="txt flex gap-4 justify-between">
                      <div className="name text-gry">Last update:</div>
                      <div className="value">Sep 13, 2023, 2:02:58 PM</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* options */}
            <div className="wrap grid grid-cols-5 gap-5 text-sm pt-2">
              <div className="card-border p-4">
                <div className="top text-[0.8rem] flex justify-between gap-1">
                  <div className="text-gry">Balance</div>
                  <div className="text-green-500 ">+£701.27</div>
                </div>

                <div className="val font-bold">£10,701.27</div>
              </div>
              <div className="card-border p-4">
                <div className="top text-[0.8rem] flex justify-between gap-1">
                  <div className="text-gry">Equity</div>
                  <div className="text-green-500 ">+£701.27</div>
                </div>

                <div className="val font-bold">£10,701.27</div>
              </div>

              <div className="card-border p-4">
                <div className="top text-[0.8rem] flex justify-between gap-1">
                  <div className="text-gry">Today’s Permitted Loss</div>
                </div>

                <div className="val font-bold">Not available</div>
              </div>

              <div className="card-border p-4">
                <div className="top text-[0.8rem] flex justify-between gap-1">
                  <div className="text-gry">Max. Permitted Loss</div>
                </div>

                <div className="val font-bold">Not available</div>
              </div>
              <div className="card-border p-4">
                <div className="top text-[0.8rem] flex justify-between gap-1">
                  <div className="text-gry">Today&apos;s Profit</div>
                </div>

                <div className="val font-bold">£0.00</div>
              </div>
            </div>

            {/* two side */}
            <div className="wrap mt-8">
              <div className="head text-2xl">Trading Objectives</div>

              <div className="items mt-4 grid sm:grid-cols-2 gap-4">
                <div className="item card-border p-5">
                  <div className="top flex justify-between items-center border-b border-primary/10 pb-4">
                    <div className="txt flex gap-4 items-center">
                      <div className="pas bg-grn p-1 px-2 rounded-2xl text-white">
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

                <div className="item card-border p-5">
                  <div className="top flex justify-between items-center border-b border-primary/10 pb-4">
                    <div className="txt flex gap-4 items-center">
                      <div className="pas bg-grn p-1 px-2 rounded-2xl text-white">
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
              <div className="wrap grid grid-cols-5 gap-4 ">
                <div className="left col-span-2 ">
                  <div className="head text-xl">Daily Summary</div>
                  <div className="card-border px-3 py-4 mt-4 h-full">
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
                        <tr>
                          <td>
                            <span> Sep 12, 2023 </span>
                          </td>
                          <td>
                            <span> 18 </span>
                          </td>
                          <td>
                            <span> 0.90 </span>
                          </td>
                          <td>
                            <span className="text-grn"> £94.10 </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span> Sep 11, 2023 </span>
                          </td>
                          <td>
                            <span> 39 </span>
                          </td>
                          <td>
                            <span> 1.95 </span>
                          </td>
                          <td>
                            <span className="text-grn"> £143.30 </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span> Sep 8, 2023 </span>
                          </td>
                          <td>
                            <span> 24 </span>
                          </td>
                          <td>
                            <span> 1.20 </span>
                          </td>
                          <td>
                            <span className="text-grn"> £117.43 </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span> Sep 7, 2023 </span>
                          </td>
                          <td>
                            <span> 20 </span>
                          </td>
                          <td>
                            <span> 1.00 </span>
                          </td>
                          <td>
                            <span className="text-grn"> £125.79 </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span> Sep 6, 2023 </span>
                          </td>
                          <td>
                            <span> 17 </span>
                          </td>
                          <td>
                            <span> 0.83 </span>
                          </td>
                          <td>
                            <span className="text-grn"> £247.56 </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span> Sep 5, 2023 </span>
                          </td>
                          <td>
                            <span> 7 </span>
                          </td>
                          <td>
                            <span> 0.31 </span>
                          </td>
                          <td>
                            <span className="text-grn"> £75.30 </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span> Sep 4, 2023 </span>
                          </td>
                          <td>
                            <span> 8 </span>
                          </td>
                          <td>
                            <span> 0.26 </span>
                          </td>
                          <td>
                            <span className="text-danger"> -£24.72 </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span> Sep 1, 2023 </span>
                          </td>
                          <td>
                            <span> 7 </span>
                          </td>
                          <td>
                            <span> 0.22 </span>
                          </td>
                          <td>
                            <span className="text-grn"> £14.97 </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span> Aug 31, 2023 </span>
                          </td>
                          <td>
                            <span> 11 </span>
                          </td>
                          <td>
                            <span> 0.55 </span>
                          </td>
                          <td>
                            <span className="text-danger"> -£237.76 </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span> Aug 30, 2023 </span>
                          </td>
                          <td>
                            <span> 7 </span>
                          </td>
                          <td>
                            <span> 0.35 </span>
                          </td>
                          <td>
                            <span className="block text-grn"> £145.30 </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Donut Chart */}
                <div className="right col-span-3">
                  <div className="head text-xl">Symbol Allocation</div>
                  <div className="chart mt-4 card-border py-4">
                    <LineCharts />
                  </div>
                </div>
              </div>
            </div>

            {/* Statistics */}
            <div className="statistics mt-8">
              <div className="head text-xl">Statistics</div>

              <div className="wrap mt-4">
                <div className="items grid grid-cols-5 gap-4">
                  <div className="item card-border p-4 flex gap-4 justify-between items-center">
                    <div className="left">
                      <h5 className="text-gry">Best trade</h5>
                      <span>£27.17</span>
                    </div>

                    {/* right */}
                    <div className="right">
                      <div className="icon">
                        <PiSuitcaseSimpleFill />
                      </div>
                    </div>
                  </div>

                  {/* item */}
                  <div className="item card-border p-4 flex gap-4 justify-between items-center">
                    <div className="left">
                      <h5 className="text-gry">Worst trade</h5>
                      <span>-£26.27</span>
                    </div>

                    {/* right */}
                    <div className="right">
                      <div className="icon">
                        <BiDollar />
                      </div>
                    </div>
                  </div>
                  {/* item */}
                  <div className="item card-border p-4 flex gap-4 justify-between items-center">
                    <div className="left">
                      <h5 className="text-gry">No. of trades</h5>
                      <span>158</span>
                    </div>

                    {/* right */}
                    <div className="right">
                      <div className="icon">
                        <RiStackLine />
                      </div>
                    </div>
                  </div>

                  {/* item */}
                  <div className="item card-border p-4 flex gap-4 justify-between items-center">
                    <div className="left">
                      <h5 className="text-gry">Lots</h5>
                      <span>7.57</span>
                    </div>

                    {/* right */}
                    <div className="right">
                      <div className="icon">
                        <AiOutlineAppstore />
                      </div>
                    </div>
                  </div>

                  {/* item */}
                  <div className="item card-border p-4 flex gap-4 justify-between items-center">
                    <div className="left">
                      <h5 className="text-gry">Win rate</h5>
                      <span>75%</span>
                    </div>

                    {/* right */}
                    <div className="right">
                      <div className="icon">
                        <AiOutlinePercentage />
                      </div>
                    </div>
                  </div>
                  {/* item */}
                  <div className="item card-border p-4 flex gap-4 justify-between items-center">
                    <div className="left">
                      <h5 className="text-gry">Average win</h5>
                      <span>£8.70</span>
                    </div>

                    {/* right */}
                    <div className="right">
                      <div className="icon">
                        <BsGraphUpArrow />
                      </div>
                    </div>
                  </div>
                  {/* item */}
                  <div className="item card-border p-4 flex gap-4 justify-between items-center">
                    <div className="left">
                      <h5 className="text-gry">Average loss</h5>
                      <span>-£8.78</span>
                    </div>

                    {/* right */}
                    <div className="right">
                      <div className="icon">
                        <BsGraphDownArrow />
                      </div>
                    </div>
                  </div>
                  {/* item */}
                  <div className="item card-border p-4 flex gap-4 justify-between items-center">
                    <div className="left">
                      <h5 className="text-gry">Average RRR</h5>
                      <span>0.99</span>
                    </div>

                    {/* right */}
                    <div className="right">
                      <div className="icon">
                        <MdMenuOpen />
                      </div>
                    </div>
                  </div>
                  {/* item */}
                  <div className="item card-border p-4 flex gap-4 justify-between items-center">
                    <div className="left">
                      <h5 className="text-gry">Expectancy</h5>
                      <span>£4.44</span>
                    </div>

                    {/* right */}
                    <div className="right">
                      <div className="icon">
                        <BiTime />
                      </div>
                    </div>
                  </div>
                  {/* item */}
                  <div className="item card-border p-4 flex gap-4 justify-between items-center">
                    <div className="left">
                      <h5 className="text-gry">Profit factor</h5>
                      <span>3.10</span>
                    </div>

                    {/* right */}
                    <div className="right">
                      <div className="icon">
                        <AiOutlinePieChart />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Direction Allocation */}
            <div className="direction-allocation"></div>

            {/* history */}
            <div className="history mt-8">
              <div className="head text-xl">History</div>

              <div className="wrap mt-4 card-border px-3 py-4">
                <div className="table overflow-scroll">
                  <table>
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
                      <tr>
                        <td>
                          <span> Sep 12, 2023, 8:49:31 PM </span>
                        </td>
                        <td>
                          <span> Buy </span>
                        </td>
                        <td>
                          <span> XAUUSD </span>
                        </td>
                        <td>
                          <span> 0.05 </span>
                        </td>
                        <td>
                          <span> 1912.6400 </span>
                        </td>
                        <td>
                          <span> Sep 12, 2023, 10:14:08 PM </span>
                        </td>
                        <td>
                          <span> 1914.7100 </span>
                        </td>
                        <td>
                          <span> 01:24:37 </span>
                        </td>
                        <td>
                          <span> £0.00 </span>
                        </td>
                        <td>
                          <span> -£0.28 </span>
                        </td>
                        <td>
                          <span> £8.01 </span>
                        </td>
                        <td>
                          <span> 207.0 </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span> Sep 12, 2023, 8:45:50 PM </span>
                        </td>
                        <td>
                          <span> Buy </span>
                        </td>
                        <td>
                          <span> XAUUSD </span>
                        </td>
                        <td>
                          <span> 0.05 </span>
                        </td>
                        <td>
                          <span> 1913.2600 </span>
                        </td>
                        <td>
                          <span> Sep 12, 2023, 10:14:08 PM </span>
                        </td>
                        <td>
                          <span> 1914.7100 </span>
                        </td>
                        <td>
                          <span> 01:28:18 </span>
                        </td>
                        <td>
                          <span> £0.00 </span>
                        </td>
                        <td>
                          <span> -£0.28 </span>
                        </td>
                        <td>
                          <span> £5.53 </span>
                        </td>
                        <td>
                          <span> 145.0 </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span> Sep 12, 2023, 8:44:29 PM </span>
                        </td>
                        <td>
                          <span> Buy </span>
                        </td>
                        <td>
                          <span> XAUUSD </span>
                        </td>
                        <td>
                          <span> 0.05 </span>
                        </td>
                        <td>
                          <span> 1913.6000 </span>
                        </td>
                        <td>
                          <span> Sep 12, 2023, 10:14:08 PM </span>
                        </td>
                        <td>
                          <span> 1914.7100 </span>
                        </td>
                        <td>
                          <span> 01:29:38 </span>
                        </td>
                        <td>
                          <span> £0.00 </span>
                        </td>
                        <td>
                          <span> -£0.28 </span>
                        </td>
                        <td>
                          <span> £4.17 </span>
                        </td>
                        <td>
                          <span> 111.0 </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span> Sep 12, 2023, 8:43:39 PM </span>
                        </td>
                        <td>
                          <span> Buy </span>
                        </td>
                        <td>
                          <span> XAUUSD </span>
                        </td>
                        <td>
                          <span> 0.05 </span>
                        </td>
                        <td>
                          <span> 1913.8900 </span>
                        </td>
                        <td>
                          <span> Sep 12, 2023, 10:14:08 PM </span>
                        </td>
                        <td>
                          <span> 1914.7100 </span>
                        </td>
                        <td>
                          <span> 01:30:28 </span>
                        </td>
                        <td>
                          <span> £0.00 </span>
                        </td>
                        <td>
                          <span> -£0.28 </span>
                        </td>
                        <td>
                          <span> £3.00 </span>
                        </td>
                        <td>
                          <span> 82.0 </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span> Sep 12, 2023, 6:28:40 PM </span>
                        </td>
                        <td>
                          <span> Buy </span>
                        </td>
                        <td>
                          <span> XAUUSD </span>
                        </td>
                        <td>
                          <span> 0.05 </span>
                        </td>
                        <td>
                          <span> 1909.1500 </span>
                        </td>
                        <td>
                          <span> Sep 12, 2023, 8:33:39 PM </span>
                        </td>
                        <td>
                          <span> 1913.2800 </span>
                        </td>
                        <td>
                          <span> 02:04:58 </span>
                        </td>
                        <td>
                          <span> £0.00 </span>
                        </td>
                        <td>
                          <span> -£0.28 </span>
                        </td>
                        <td>
                          <span> £16.28 </span>
                        </td>
                        <td>
                          <span> 413.0 </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span> Sep 12, 2023, 6:24:28 PM </span>
                        </td>
                        <td>
                          <span> Buy </span>
                        </td>
                        <td>
                          <span> XAUUSD </span>
                        </td>
                        <td>
                          <span> 0.05 </span>
                        </td>
                        <td>
                          <span> 1909.6700 </span>
                        </td>
                        <td>
                          <span> Sep 12, 2023, 8:33:35 PM </span>
                        </td>
                        <td>
                          <span> 1913.5700 </span>
                        </td>
                        <td>
                          <span> 02:09:07 </span>
                        </td>
                        <td>
                          <span> £0.00 </span>
                        </td>
                        <td>
                          <span> -£0.28 </span>
                        </td>
                        <td>
                          <span> £15.35 </span>
                        </td>
                        <td>
                          <span> 390.0 </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span> Sep 12, 2023, 6:20:54 PM </span>
                        </td>
                        <td>
                          <span> Buy </span>
                        </td>
                        <td>
                          <span> XAUUSD </span>
                        </td>
                        <td>
                          <span> 0.05 </span>
                        </td>
                        <td>
                          <span> 1910.0500 </span>
                        </td>
                        <td>
                          <span> Sep 12, 2023, 8:33:44 PM </span>
                        </td>
                        <td>
                          <span> 1913.2100 </span>
                        </td>
                        <td>
                          <span> 02:12:49 </span>
                        </td>
                        <td>
                          <span> £0.00 </span>
                        </td>
                        <td>
                          <span> -£0.28 </span>
                        </td>
                        <td>
                          <span> £12.39 </span>
                        </td>
                        <td>
                          <span> 316.0 </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span> Sep 12, 2023, 6:11:13 PM </span>
                        </td>
                        <td>
                          <span> Sell </span>
                        </td>
                        <td>
                          <span> XAUUSD </span>
                        </td>
                        <td>
                          <span> 0.05 </span>
                        </td>
                        <td>
                          <span> 1911.8600 </span>
                        </td>
                        <td>
                          <span> Sep 12, 2023, 6:11:39 PM </span>
                        </td>
                        <td>
                          <span> 1912.0300 </span>
                        </td>
                        <td>
                          <span> 00:00:26 </span>
                        </td>
                        <td>
                          <span> £0.00 </span>
                        </td>
                        <td>
                          <span> -£0.28 </span>
                        </td>
                        <td>
                          <span> -£0.96 </span>
                        </td>
                        <td>
                          <span> -17.0 </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span> Sep 12, 2023, 6:09:10 PM </span>
                        </td>
                        <td>
                          <span> Buy </span>
                        </td>
                        <td>
                          <span> XAUUSD </span>
                        </td>
                        <td>
                          <span> 0.05 </span>
                        </td>
                        <td>
                          <span> 1910.6900 </span>
                        </td>
                        <td>
                          <span> Sep 12, 2023, 8:34:51 PM </span>
                        </td>
                        <td>
                          <span> 1913.9000 </span>
                        </td>
                        <td>
                          <span> 02:25:41 </span>
                        </td>
                        <td>
                          <span> £0.00 </span>
                        </td>
                        <td>
                          <span> -£0.28 </span>
                        </td>
                        <td>
                          <span> £12.59 </span>
                        </td>
                        <td>
                          <span> 321.0 </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span> Sep 12, 2023, 6:07:20 PM </span>
                        </td>
                        <td>
                          <span> Buy </span>
                        </td>
                        <td>
                          <span> XAUUSD </span>
                        </td>
                        <td>
                          <span> 0.05 </span>
                        </td>
                        <td>
                          <span> 1911.4000 </span>
                        </td>
                        <td>
                          <span> Sep 12, 2023, 8:34:56 PM </span>
                        </td>
                        <td>
                          <span> 1914.2000 </span>
                        </td>
                        <td>
                          <span> 02:27:36 </span>
                        </td>
                        <td>
                          <span> £0.00 </span>
                        </td>
                        <td>
                          <span> -£0.28 </span>
                        </td>
                        <td>
                          <span> £10.94 </span>
                        </td>
                        <td>
                          <span> 280.0 </span>
                        </td>
                      </tr>
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
