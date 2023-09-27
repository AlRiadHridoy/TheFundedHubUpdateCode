import PriceTable from "../../components/PriceTable";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function StartNewChallenge() {
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
                      <div className="">
                        <div className="tab-content tab-space">
                          {/* Prices */}
                          <div
                            className={`prices relative  
                            }`}
                          >
                            <PriceTable clr={"dash-bar-clr"} />
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
      </div>
    </main>
  );
}
