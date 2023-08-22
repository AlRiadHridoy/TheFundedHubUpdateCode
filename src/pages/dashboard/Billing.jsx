import { useState } from "react";
import PriceTable from "../../components/PriceTable";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function Billing() {
  const [planSwap, setPlanSwap] = useState(true);

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
                      <ul className="flex flex-wrap justify-center items-center gap-[20px] mb-[40px] relative z-10">
                        {/* My plan */}
                        <li className="inline-block group">
                          <button
                            className={`px-[30px] py-[12px] rounded-2xl shadow-[0_4px_10px_rgba(255,255,255,0.02)]  flex gap-2 ${
                              planSwap ? "bg-blu" : ""
                            }`}
                            onClick={() => setPlanSwap(!planSwap)}
                          >
                            Get Funded
                          </button>
                        </li>
                        {/* Payment history */}
                        <li className="inline-block mr-[10px]">
                          <button
                            className={`flex gap-2 items-center px-[30px] py-[12px] rounded-2xl shadow-[0_4px_10px_rgba(255,255,255,0.02)] ${
                              !planSwap ? "bg-blu" : ""
                            }`}
                            onClick={() => setPlanSwap(!planSwap)}
                          >
                            Payment History
                          </button>
                        </li>
                      </ul>
                      <div className="">
                        <div className="tab-content tab-space">
                          {/* Prices */}
                          <div
                            className={`prices relative  ${
                              planSwap ? "" : "hidden"
                            }`}
                          >
                            <PriceTable />
                          </div>
                        </div>

                        {/* History */}
                        <div
                          className={`payment-method h-full text-center py-[40px] ${
                            !planSwap ? "" : "hidden"
                          }`}
                        >
                          <p>No history found!</p>
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
    </main>
  );
}
