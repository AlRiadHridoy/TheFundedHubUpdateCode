import { useState } from "react";

import { BsDownload } from "react-icons/bs";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function Billing() {
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
    <main className="content-wrapper pt-16 sm:pb-6 sm:pt-24 min-h-screen bg-black  purple-shadow-dash">
      <div className="inner-content px-6">
        <div className="breadcrumb-wrap relative z-10">
          <div className="breadcrumb-title md:hidden">
            <svg
              className="breadcrumb-icon"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path>
            </svg>
            Billing
          </div>
        </div>
        <div className="dashboard-wrapper relative">
          <div className="flex flex-wrap mx-[-15px]">
            <div className="w-full px-[15px]">
              <div className="flex flex-wrap mx-[-15px]">
                <div className="w-full px-[15px]">
                  {/* Content */}
                  <div className="content">
                    <div className="tabs-wrap">
                      {/* History */}
                      <div className={`payment-method h-full text-center `}>
                        {billingData === "" ? (
                          <p>No history found!</p>
                        ) : (
                          <div className="billing-data dash-home-bg px-8 py-4 ">
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
                                        <div className="paid py-2 text-center rounded-xl bg-grn text-white w-[4.5rem]">
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
                        )}
                      </div>
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
