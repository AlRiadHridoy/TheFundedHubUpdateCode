// Dashboard Images
import thumbHistory from "../../assets/images/dashboard/thumb/thumb-11.png";
// Tranding overview
import bitcoin from "../../assets/images/dashboard/icon/bitcoin.svg";
import deel from "../../assets/images/dashboard/icon/deel.svg";
import usdt from "../../assets/images/dashboard/icon/usdt.svg";

export default function Withdraw() {
  return (
    <main className="content-wrapper pt-16 sm:pb-6 sm:pt-24 bg-black purple-shadown-dash">
      <div className="inner-content px-6">
        <div className="breadcrumb-wrap">
          <div className="breadcrumb-title">
            <svg
              className="breadcrumb-icon"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"></path>
            </svg>
            Withdraw
          </div>
        </div>
        <div className="dashboard-wrapper relative">
          <div className="flex flex-wrap relative">
            <div className="w-full">
              <div className="flex flex-wrap">
                <div className="w-full">
                  <div className="content relative mb-[30px]">
                    <div className="flex relative z-10 flex-wrap justify-center mx-[-15px]">
                      <div className="xl:w-4/12 lg:w-4/12 md:w-6/12 w-full px-[15px]">
                        <div className="p-[30px] rounded-[15px] mb-[30px] card-border backdrop-blur-3xl card-border">
                          <h3 className="xl:text-[24px] text-[20px] font-semibold leading-[1.185] tracking-[-0.05px] mb-[20px] text-wht">
                            Account Profit
                          </h3>
                          <p className=" xl:text-[16px] text-[15px] leading-[1.5] tracking-[-0.05px] mb-[20px] text-wht/70">
                            Your account profit from your current trading cycle.
                          </p>
                          <p className="text-blu text-[34px] font-semibold leading-[1.185] tracking-[-0.24px]">
                            $0.00
                          </p>
                        </div>
                      </div>
                      <div className="xl:w-4/12 lg:w-4/12 md:w-6/12 w-full px-[15px]">
                        <div className="p-[30px] rounded-[15px] mb-[30px] card-border backdrop-blur-3xl card-border">
                          <h3 className=" xl:text-[24px] text-[20px] font-semibold leading-[1.185] tracking-[-0.05px] mb-[20px]">
                            Withdrawable Profit
                          </h3>
                          <p className="xl:text-[16px] text-[15px] leading-[1.5] tracking-[-0.05px] mb-[20px] text-wht/70">
                            Withdrawable profit at the end of your trading
                            cycle.
                          </p>
                          <p className="text-primary text-[34px] font-semibold leading-[1.185] tracking-[-0.24px]">
                            $0.00
                          </p>
                        </div>
                      </div>
                      <div className="xl:w-4/12 lg:w-4/12 md:w-6/12 w-full px-[15px]">
                        <div className="p-[30px] rounded-[15px] mb-[30px] card-border backdrop-blur-3xl card-border">
                          <h3 className="xl:text-[24px] text-[20px] font-semibold leading-[1.185] tracking-[-0.05px] mb-[20px] text-wht">
                            Total Account Growth
                          </h3>
                          <p className="xl:text-[16px] text-[15px] leading-[1.5] tracking-[-0.05px] mb-[20px] text-wht/70">
                            Total Account Growth Percentage You&apos;ve Reached
                          </p>
                          <p className="text-[34px] font-semibold leading-[1.185] tracking-[-0.24px] text-wht">
                            0%
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap relative z-10">
                      <div className="w-full">
                        <div className="flex flex-wrap items-center justify-between p-[30px] rounded-[15px] card-border backdrop-blur-3xl card-border">
                          <div className="left">
                            <h3 className="lg:text-[24px] text-[18px] font-semibold leading-[1.185] tracking-[-0.05px] mb-[20px] text-wht">
                              Payment Methods
                            </h3>
                            <div className="flex flex-wrap gap-[15px] py-[5px]">
                              <img className="w-[60px]" src={deel} alt="icon" />
                              <img
                                className="w-[60px]"
                                src={bitcoin}
                                alt="icon"
                              />
                              <img className="w-[60px]" src={usdt} alt="icon" />
                            </div>
                          </div>
                          <div className="right md:mt-0 mt-8">
                            <a
                              href="#"
                              className="font-Montserrat text-sm font-bold py-2.5 sm:py-4 px-8 dash-btn transition-all duration-200 rounded-3xl text-wht"
                            >
                              Withdraw Request
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

          <div className="flex flex-wrap relative">
            <div className="w-full">
              <div className="card-wrap card-border">
                <div className="card-heading flex items-center justify-between mb-[20px]">
                  <h3 className="card-title !mb-0">Withdraw History</h3>
                </div>
                <div className="content">
                  <div className="withdraw-history text-center py-[40px]">
                    <div className="thumb inline-block mb-[24px]">
                      <img src={thumbHistory} alt="thumb" />
                    </div>
                    <p>No history found!</p>
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
