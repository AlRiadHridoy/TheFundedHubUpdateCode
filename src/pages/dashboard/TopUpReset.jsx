import { thumbHistory } from "../../ui/images";

export default function TopUpReset() {
  return (
    <main className="content-wrapper pt-16 sm:pb-6 sm:pt-24 bg-black  purple-shadow-dash">
      <div className="inner-content px-6 min-h-screen">
        <div className="dashboard-wrapper">
          <div className="flex flex-wrap">
            <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 !gap-4">
              <div className="">
                <div className="flex flex-col justify-between h-full p-5 rounded-lg relative z-10 overflow-hidden card-border backdrop-blur-3xl card-border">
                  <div className="content">
                    <div className="card-heading flex items-center justify-between mb-[20px]">
                      <h3 className="card-title text-xl">Top Up</h3>
                    </div>
                    <p className="xl:text-[18px] text-[16px] leading-[1.5] tracking-[-0.05px] mb-[40px] text-wht/70">
                      Traders will get an opportunity to bring back their
                      account balance to the initial amount. Applicable if you
                      have not violated any of the drawdown rules. Once you top
                      up your account, your trading cycle will also reset. To
                      know more{" "}
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
                      Top Up Request
                    </a>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="flex flex-col justify-between h-full p-5 rounded-lg relative z-10 overflow-hidden card-border backdrop-blur-3xl card-border">
                  <div className="content">
                    <div className="card-heading flex items-center justify-between mb-[20px]">
                      <h3 className="card-title text-xl">Reset</h3>
                    </div>
                    <p className="text-dark xl:text-[18px] text-[16px] leading-[1.5] tracking-[-0.05px] mb-[40px] text-wht/70">
                      If a trader violates the rules his/her account will be
                      suspended. Prop dashboard will give him/her the
                      opportunity to continue with the program at a discounted
                      price/cost. This re-registration cost is also known as the
                      &quot;Reset&quot; fee since the trader will be provided
                      with a new account and his trading cycle will be reset. To
                      know more{" "}
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
                      Reset Request
                    </a>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="card-wrap card-border h-full">
                  <div className="card-heading flex items-center justify-between mb-[20px]">
                    <h3 className="card-title !mb-0">Top Up & Reset History</h3>
                  </div>
                  <div className="content h-full flex justify-center items-center">
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
      </div>
    </main>
  );
}
