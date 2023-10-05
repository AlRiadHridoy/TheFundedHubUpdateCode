import { thumbHistory } from "../../ui/images";
import { useState, useEffect, useRef } from "react";
import { BsDownload } from "react-icons/bs";
import { arrow } from "../../ui/images";
export default function TopUpReset() {
  const [paraHeight, setparaHeight] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const refferance = useRef(null);

  useEffect(() => {
    setparaHeight(refferance.current.clientHeight);
  }, [isOpen]);
  const billingData = [
    {
      accountSize: "£10,000",
      ProformaNo: "18056525",
      date1: "6 Mar 2022",
      date2: "7 Mar 2022",
      amount: "€155.00",
    },
    {
      accountSize: "£10,000",
      ProformaNo: "18056525",
      date1: "6 Mar 2022",
      date2: "7 Mar 2022",
      amount: "€155.00",
    },
    {
      accountSize: "£10,000",
      ProformaNo: "18056525",
      date1: "6 Mar 2022",
      date2: "7 Mar 2022",
      amount: "€155.00",
    },
    {
      accountSize: "£10,000",
      ProformaNo: "18056525",
      date1: "6 Mar 2022",
      date2: "7 Mar 2022",
      amount: "€155.00",
    },
    {
      accountSize: "£10,000",
      ProformaNo: "18056525",
      date1: "6 Mar 2022",
      date2: "7 Mar 2022",
      amount: "€155.00",
    },
  ];
  return (
    <main className="content-wrapper pt-16 sm:pb-6 sm:pt-24 bg-black  purple-shadow-dash">
      <div className="inner-content px-6 min-h-screen">
        <div className="dashboard-wrapper">
          <div className="flex flex-wrap">
            <div className="w-full grid sm:grid-cols-2 !gap-4">
              <div className="flex flex-col justify-between h-full p-5 rounded-3xl relative z-10 overflow-hidden dash-home-bg backdrop-blur-3xl dash-home-bg">
                <div className="content">
                  <div className="card-heading flex items-center justify-between mb-[20px]">
                    <h3 className="card-title text-xl">Funded Reset</h3>
                  </div>
                  <p className="xl:text-[18px] text-[16px] leading-[1.5] tracking-[-0.05px] mb-[40px] text-wht/70">
                    Traders will get an opportunity to bring back their account
                    balance to the initial amount. Applicable if you have not
                    violated any of the drawdown rules. Once you top up your
                    account, your trading cycle will also reset. To know more{" "}
                    <a href="#" className="underline">
                      click
                    </a>
                  </p>
                  <p className="xl:text-[18px] text-[16px] leading-[1.5] tracking-[-0.05px] mb-[20px]">
                    *** You must close the running trades if you have any***
                  </p>
                </div>

                {/* btn */}
                <div className="btn flex justify-center">
                  <a
                    href="#"
                    className="capitalize font-Montserrat text-sm font-bold py-4 px-12 dash-btn rounded-3xl"
                  >
                    Reset Request
                  </a>
                </div>
              </div>

              <div className="flex flex-col justify-between h-full p-5 rounded-3xl relative z-10 overflow-hidden dash-home-bg backdrop-blur-3xl dash-home-bg">
                <div className="content">
                  <div className="card-heading flex items-center justify-between mb-[20px]">
                    <h3 className="card-title text-xl">Free Retry</h3>
                  </div>
                  <p className="text-dark xl:text-[18px] text-[16px] leading-[1.5] tracking-[-0.05px] mb-[40px] text-wht/70">
                    If a trader violates the rules his/her account will be
                    suspended. Prop dashboard will give him/her the opportunity
                    to continue with the program at a discounted price/cost.
                    This re-registration cost is also known as the
                    &quot;Reset&quot; fee since the trader will be provided with
                    a new account and his trading cycle will be reset. To know
                    more{" "}
                    <a href="#" className="underline">
                      click here
                    </a>
                  </p>
                  <p className="text-dark xl:text-[18px] text-[16px] leading-[1.5] tracking-[-0.05px] mb-[20px] text-wht/70">
                    *** You must close the running trades if you have any***
                  </p>
                </div>

                {/* btn */}
                <div className="btn flex justify-center">
                  <a
                    href="#"
                    className="capitalize font-Montserrat text-sm font-bold py-4 px-12 dash-btn rounded-3xl"
                  >
                    Free Retry Request
                  </a>
                </div>
              </div>

              <div className="h-full col-span-full mt-6">
                <div className="flex flex-wrap relative">
                  <div className="w-full">
                    <div className="card-wrap dash-bar-clr rounded-3xl">
                      <div
                        className="card-heading flex items-center justify-between cursor-pointer"
                        onClick={() => setIsOpen(!isOpen)}
                      >
                        <h3 className="text-[1.1rem] font-Montserrat font-semibold leading-[1.185] tracking-[-0.05px]">
                          Reset & Free Retry History
                        </h3>

                        <div className="arrow">
                          <img
                            className={`max-w-[1.4rem] transform-gpu transition-all duration-300 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                            src={arrow}
                            alt="arrow"
                          />
                        </div>
                      </div>
                      {billingData.length !== 0 ? (
                        <article className="rounded-xl">
                          <div
                            style={{
                              maxHeight: isOpen ? paraHeight + "px" : "0",
                            }}
                            className={`width-content transition-all duration-300 overflow-hidden`}
                          >
                            <div ref={refferance} className="wrapper pt-4">
                              <div className="billing-data bg-transparent px-3 py-4 overflow-y-scroll">
                                <div className="m-auto max-w-[1200px] overflow-x-scroll whitespace-nowrap pb-6">
                                  <table className="font-Montserrat w-full">
                                    <thead>
                                      <tr className="whitespace-nowrap">
                                        <th align="left">Funded challenge</th>
                                        <th align="left">Dates</th>
                                        <th align="left">Amount</th>
                                        <th align="left">Account</th>
                                        <th align="left">status</th>
                                        <th align="left">Invoice</th>
                                      </tr>
                                    </thead>

                                    {/* tbody */}
                                    <tbody>
                                      {billingData.map((data, i) => (
                                        <tr key={data.open + i}>
                                          <td>
                                            <div>
                                              <div className="nm text-all">
                                                Funded challenge
                                              </div>
                                              <div className="acnt-sizes flex gap-1">
                                                <div className="text-gry">
                                                  Account size:
                                                </div>
                                                {data.accountSize}
                                              </div>
                                              <div className="perf flex gap-1">
                                                <div className="text-gry">
                                                  Proforma no.:
                                                </div>
                                                {data.ProformaNo}
                                              </div>
                                            </div>
                                          </td>

                                          <td>
                                            <div className="dates">
                                              <div className="date1">
                                                {data.date1}
                                              </div>
                                              <div className="date2">
                                                {data.date2}
                                              </div>
                                            </div>
                                          </td>

                                          <td>
                                            <div className="amount">
                                              {data.amount}
                                            </div>
                                          </td>

                                          <td>
                                            <div>Funded</div>
                                            <div>MT5</div>
                                          </td>

                                          <td>
                                            <div className="paid py-2 text-center rounded-xl bg-grn text-white">
                                              paid
                                            </div>
                                          </td>

                                          <td>
                                            <div className="invoice flex justify-center items-center">
                                              <BsDownload className=" cursor-pointer" />
                                            </div>
                                          </td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      ) : (
                        <div className="content h-full flex justify-center items-center">
                          <div className="withdraw-history text-center py-[40px]">
                            <div className="thumb inline-block mb-[24px]">
                              <img src={thumbHistory} alt="thumb" />
                            </div>
                            <p>No history found!</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
