import { useState, useEffect, useRef } from "react";
import { BsDownload } from "react-icons/bs";
import { arrow } from "../../ui/images";
export default function Withdraw() {
  const [paraHeight, setparaHeight] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [withdraw, setWithdraw] = useState(0);
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

  const changeWithdraw = (e) => {
    if (e > 2832) return setWithdraw(2832);
    if (e < 0) return setWithdraw(0);
    setWithdraw(e);
  };

  return (
    <main className="content-wrapper pt-16 sm:pb-6 sm:pt-24 bg-black purple-shadow-dash min-h-screen">
      <div className="inner-content px-6">
        <div className="dashboard-wrapper relative">
          <div className="flex flex-wrap relative">
            <div className="w-full">
              <div className="flex flex-wrap">
                <div className="w-full">
                  <div className="content relative mb-[30px]">
                    <div className="flex relative z-10 flex-wrap justify-center mx-[-15px]">
                      <div className="xl:w-4/12 lg:w-4/12 md:w-6/12 w-full px-[15px]">
                        <div className="p-6 rounded-[2rem] mb-[30px] dash-bar-clr backdrop-blur-3xl dash-bar-clr">
                          <h3 className="text-xl md:text-[1.4rem] font-Montserrat font-semibold leading-[1.185] tracking-[-0.05px] mb-[20px] text-wht">
                            Account Profit
                          </h3>
                          <p className="xl:text-[16px] text-[15px] leading-[1.5] tracking-[-0.05px] mb-[20px] text-wht/70">
                            Your account profit from your current trading cycle.
                          </p>
                          <p className="text-blu text-[34px] font-semibold leading-[1.185] tracking-[-0.24px]">
                            $1000.00
                          </p>
                        </div>
                      </div>
                      <div className="xl:w-4/12 lg:w-4/12 md:w-6/12 w-full px-[15px]">
                        <div className="p-6 rounded-[2rem] mb-[30px] dash-bar-clr backdrop-blur-3xl dash-bar-clr">
                          <h3 className=" text-xl md:text-[1.4rem] font-Montserrat font-semibold leading-[1.185] tracking-[-0.05px] mb-[20px]">
                            Withdrawable Profit
                          </h3>
                          <p className="xl:text-[16px] text-[15px] leading-[1.5] tracking-[-0.05px] mb-[20px] text-wht/70">
                            Withdrawable profit at the end of your trading
                            cycle.
                          </p>
                          <p className="text-primary text-[34px] font-semibold leading-[1.185] tracking-[-0.24px]">
                            $2832.00
                          </p>
                        </div>
                      </div>
                      <div className="xl:w-4/12 lg:w-4/12 md:w-6/12 w-full px-[15px]">
                        <div className="p-6 rounded-[2rem] mb-[30px] dash-bar-clr backdrop-blur-3xl dash-bar-clr">
                          <h3 className="text-xl md:text-[1.4rem] font-Montserrat font-semibold leading-[1.185] tracking-[-0.05px] mb-[20px] text-wht">
                            Withdraw Request
                          </h3>
                          <p className="xl:text-[16px] text-[15px] leading-[1.5] tracking-[-0.05px] mb-[20px] text-wht/70">
                            Total Account Growth Percentage You&apos;ve Reached
                          </p>
                          <div className="wrap flex justify-between items-center gap-2">
                            <div className="left flex items-center border border-primary/10 text-white rounded-3xl py-2 px-3 text-[1.4rem]">
                              $
                              <input
                                type="number"
                                onChange={(e) => changeWithdraw(e.target.value)}
                                value={withdraw}
                                className="bg-transparent w-16 focus:outline-none"
                              />
                              <div className="static-value font-bold text-primary">
                                / $2832
                              </div>
                            </div>
                            <div className="btn ">
                              <a
                                className="uppercase hidden sm:inline-block font-Montserrat text-sm font-bold py-3 px-7 dash-btn rounded-3xl"
                                href="/dashboard/billing"
                              >
                                Get your payout
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap relative">
            <div className="w-full">
              <div className="card-wrap dash-bar-clr rounded-[2rem]">
                <div
                  className="card-heading flex items-center justify-between cursor-pointer"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <h3 className="text-[1.1rem] font-Montserrat font-semibold leading-[1.185] tracking-[-0.05px]">
                    Withdraw History
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
                <article className="dash-home-bg rounded-xl">
                  <div
                    style={{ maxHeight: isOpen ? paraHeight + "px" : "0" }}
                    className={`width-content transition-all duration-300 overflow-hidden`}
                  >
                    <div ref={refferance} className="wrapper">
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
                                      <div className="date1">{data.date1}</div>
                                      <div className="date2">{data.date2}</div>
                                    </div>
                                  </td>

                                  <td>
                                    <div className="amount">{data.amount}</div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
