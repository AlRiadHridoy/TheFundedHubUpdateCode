import { useState } from "react";
import Pagination from "@mui/material/Pagination";
import usePagination from "../../ui/usePagination";
import Stack from "@mui/material/Stack";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { HiOutlineExclamationCircle } from "react-icons/hi";

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
    <>
      <div className="breadcrumb-wrap z-50">
        <h3 className="card-title text-xl mb-4">Trading Objectives</h3>
      </div>
      <div className="dashboard-wrapper flex flex-col gap-8">
        <div className="grid lg:grid-cols-8 gap-5">
          <div className="w-full lg:col-span-5">
            {/* content */}
            <div className="grid gap-5 sm:grid-cols-2 h-full">
              <div className="w-full">
                <div className="p-5 rounded-[15px] card-border backdrop-blur-3xl card-border h-full">
                  <p className=" leading-[1.5] tracking-[-0.05px] mb-[20px] text-wht inline-block">
                    <div className="mr-1 inline-block font-medium">
                      Minimum Trading Days
                    </div>
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
                <div className="p-5 rounded-[15px] card-border backdrop-blur-3xl card-border h-full">
                  <p className=" leading-[1.5] tracking-[-0.05px] mb-[20px] text-wht inline-block">
                    <div className="mr-1 inline-block font-medium">
                      Daily Loss Limit
                    </div>
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
                <div className="p-5 rounded-[15px] card-border backdrop-blur-3xl card-border h-full">
                  <p className=" leading-[1.5] tracking-[-0.05px] mb-[20px] text-wht inline-block ">
                    <div className="mr-1 inline-block font-medium">
                      Maximum Loss Limit
                    </div>
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
                <div className="p-5 rounded-2xl card-border backdrop-blur-3xl card-border h-full">
                  <div className="card-heading flex items-center mb-[20px]">
                    <div className="mr-1 inline-block font-medium">
                      Trading Growth Curve
                    </div>
                  </div>
                  <div className="content grid gap-2">
                    <div className="flex flex-wrap items-center justify-between  leading-[1.5] tracking-[-0.05px] text-wht">
                      <p className="inline-flex items-center">
                        Max Permitted Loss
                      </p>
                      <p>$600</p>
                    </div>

                    <div className="flex flex-wrap items-center justify-between  leading-[1.5] tracking-[-0.05px] text-wht">
                      <p className="inline-flex items-center">
                        Today&apos;s Permitted Loss
                      </p>
                      <p>$250</p>
                    </div>

                    <div className="flex  justify-between items-center  leading-[1.5] tracking-[-0.05px] text-wht">
                      <p className="inline-flex items-center">
                        Today&apos;s Permitted Loss Will Reset In
                      </p>
                      <p className="text-primary">-2:56:29</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flexf flex-wrap h-full mt-6 hidden">
              <div className="w-full">
                <div className="card-wrap card-border mb-0">
                  <h3 className="card-title">Trading Growth Curve</h3>
                  <div className="content grid gap-3">
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
                      <p className="mt-2 font-bold py-[6px] px-[16px] rounded-[5px] /90 bg-primary/40">
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

          <div className="lg:pl-[15px] font-Montserrat lg:col-span-3 relative z-30">
            <div className="p-6 rounded-xl card-border h-full text-base">
              <h3 className="font-bold pb-3 hidden">Details Stats</h3>
              <div className="content text-center grid gap-[0.7rem]">
                <div className="stats-list flex flex-wrap items-center justify-between pb-[0.7rem] border-b border-white/10">
                  <div>
                    <p className="inline-flex items-center leading-[1.5] tracking-[-0.05px] text-wht z-0">
                      Equity
                      <div className="wrap ml-1 exlamation relative group z-[20]">
                        <div className="hover-txt  absolute z-10">
                          The Equity reflects the real-time calculation of your
                          profit/loss. The Equity takes into account both open
                          and closed positions.
                        </div>
                        {"  "} <HiOutlineExclamationCircle />
                      </div>
                    </p>
                  </div>
                  <div className="numb leading-[1.5] tracking-[-0.05px] font-medium text-wht">
                    {detailsVal[0]}
                  </div>
                </div>

                <div className="stats-list flex flex-wrap items-center justify-between pb-[0.7rem] border-b  border-white/10">
                  <div className="">
                    <p className="inline-flex items-center  leading-[1.5] tracking-[-0.05px] text-wht">
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

                <div className="stats-list flex flex-wrap items-center justify-between pb-[0.7rem]  border-b  border-white/10">
                  <div className="">
                    <p className="inline-flex items-center  leading-[1.5] tracking-[-0.05px] text-wht">
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

                <div className="stats-list flex flex-wrap items-center justify-between pb-[0.7rem]  border-b  border-white/10">
                  <div className="">
                    <p className="inline-flex items-center  leading-[1.5] tracking-[-0.05px] text-wht">
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

                <div className="stats-list flex flex-wrap items-center justify-between pb-[0.7rem]  border-b  border-white/10">
                  <div className="">
                    <p className="inline-flex items-center  leading-[1.5] tracking-[-0.05px] text-wht">
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

                <div className="stats-list flex flex-wrap items-center justify-between pb-[0.7rem]  border-b  border-white/10">
                  <div className="">
                    <p className="inline-flex items-center  leading-[1.5] tracking-[-0.05px] text-wht">
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

                <div className="stats-list flex flex-wrap items-center justify-between pb-[0.7rem] border-b  border-white/10">
                  <div className="">
                    <p className="inline-flex items-center  leading-[1.5] tracking-[-0.05px] text-wht">
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

        <div className="flex flex-wrap mx-[-15px]">
          <div className="w-full px-[15px]">
            <div className="card-wrap card-border">
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
        <div className="pagination flex justify-center">
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
    </>
  );
}
