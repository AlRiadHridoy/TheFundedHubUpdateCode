// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import MotionX from "../../ui/MotionX";
import MotionY from "../../ui/MotionY";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Navigation } from "swiper";

export default function Evaluation() {
  return (
    <section className="evaluation relative pt-12 sm:pt-16">
      <div className="container relative">
        <div className="wrapper relative z-40">
          <div className="heading flex flex-col justify-center sm:items-center sm:text-center">
            <MotionX delay={0.1}>
              <h2 className="font-medium text-2xl xs:text-[1.7rem] tracking-tight text-wht-gradient">
                Evaluation Program
              </h2>
            </MotionX>

            <MotionX delay={0.2}>
              <div className="paras mt-2">
                <p>
                  Prove your trading skills by passing our two phases Evaluation
                  Program. <br /> Configure your own target profits and drawdown
                  limits, follow simple rules and start trading with our
                  capital. <br /> You earn up to 90% of the profits.
                </p>
              </div>
            </MotionX>
          </div>

          {/* Desktop version */}
          <div className="cards relative z-30 hidden lg:flex gap-8 md:gap-12 justify-center items-center mt-10">
            {/* card */}
            <div className="img scale-100 hover:scale-[1.03] transition-all duration-200  w-full max-w-[20rem]">
              <MotionY
                delay={0.4}
                cls="card flex flex-col gap-4 py-4 pb-6 px-2 rounded-3xl bg-main-bg/90  md:bg-[#2B2C30]/[17%] social-shadow border-all/20 border w-full max-w-[20rem]"
              >
                <div className="card-top py-4 px-3 rounded-xl evaluation-grnt flex gap-2 justify-between items-center text-black">
                  <div className="left max-w-[10rem]">
                    <h4 className="font-codeProBold">Phase 1</h4>
                    <span className="text-sm flex font-codePro font-light">
                      Starting your Evaluation process
                    </span>
                  </div>
                  <div className="right grid">
                    <div className="percent">
                      <h3 className="font-codeProBold text-3xl text-end">8%</h3>
                      <span className="flex justify-end text-[0.7rem] font-codePro text-end">
                        Target Profit
                      </span>
                    </div>
                  </div>
                </div>

                <div className="card-middle grid gap-5 px-4 font-light">
                  <p className="text-base font-light font-Montserrat">
                    Trading Period
                    <span className="text-base font-bold"> Unlimited</span>
                  </p>
                  <p className="text-base font-light font-Montserrat">
                    <span className="text-base font-bold">5</span> Minimum
                    Trading Days
                  </p>
                  <p className="text-base font-light font-Montserrat">
                    <span className="text-base font-bold">5%</span> Maximum
                    Daily Loss
                  </p>
                  <p className="text-base font-light font-Montserrat">
                    <span className="text-base font-bold">12%</span> Maximum
                    Overall Loss
                  </p>
                  <p className="text-base font-light font-Montserrat">
                    Registration fee
                  </p>
                </div>

                <div className="card-bottom mt-4 flex justify-center items-center text-center">
                  <a
                    href="#price-table"
                    className="uppercase font-Montserrat text-xs font-bold px-8 transition-all duration-200 rounded-3xl py-3 opacity-100 hover:opacity-[75%] discglow-btn"
                  >
                    Customize Challenge
                  </a>
                </div>
              </MotionY>
            </div>

            {/* card */}
            <div className="img scale-100 hover:scale-[1.03] transition-all duration-200  w-full max-w-[20rem]">
              <MotionY
                delay={0.5}
                cls="card flex flex-col gap-4 py-4 pb-6 px-2 rounded-3xl bg-main-bg/90  md:bg-[#2B2C30]/[17%] social-shadow border-all/20 border w-full max-w-[20rem]"
              >
                <div className="card-top py-4 px-3 rounded-xl evaluation-grnt flex gap-2 justify-between items-center text-black">
                  <div className="left max-w-[10rem]">
                    <h4 className="font-codeProBold">Phase 2</h4>
                    <span className="text-sm flex font-codePro font-light">
                      One step away to be a TFH Funded Trader
                    </span>
                  </div>
                  <div className="right grid">
                    <div className="percent">
                      <h3 className="font-codeProBold text-3xl text-end">5%</h3>
                      <span className="flex justify-end text-[0.7rem] font-codePro text-end">
                        Target Profit
                      </span>
                    </div>
                  </div>
                </div>

                <div className="card-middle grid gap-5 px-4 font-light">
                  <p className="text-base font-light font-Montserrat">
                    Trading Period
                    <span className="text-base font-bold"> Unlimited</span>
                  </p>
                  <p className="text-base font-light font-Montserrat">
                    <span className="text-base font-bold">5</span> Minimum
                    Trading Days
                  </p>
                  <p className="text-base font-light font-Montserrat">
                    <span className="text-base font-bold">5%</span> Maximum
                    Daily Loss
                  </p>
                  <p className="text-base font-light font-Montserrat">
                    <span className="text-base font-bold">12%</span> Maximum
                    Overall Loss
                  </p>
                  <p className="text-base font-light font-Montserrat">-</p>
                </div>

                <div className="card-bottom mt-4 flex justify-center items-center text-center">
                  <a
                    href="#price-table"
                    className="uppercase font-Montserrat text-xs font-bold px-8 transition-all duration-200 rounded-3xl py-3 opacity-100 hover:opacity-[75%] discglow-btn"
                  >
                    Customize Challenge
                  </a>
                </div>
              </MotionY>
            </div>

            {/* card */}
            <div className="img scale-100 hover:scale-[1.03] transition-all duration-200  w-full max-w-[20rem]">
              <MotionY
                delay={0.6}
                cls="card flex flex-col gap-4 py-4 pb-6 px-2 rounded-3xl bg-main-bg/90  md:bg-[#2B2C30]/[17%] social-shadow border-all/20 border w-full max-w-[20rem]"
              >
                <div className="card-top py-4 px-3 rounded-xl evaluation-grnt flex gap-2 justify-between items-center text-black">
                  <div className="left max-w-[10rem]">
                    <h4 className="font-codeProBold">Funded</h4>
                    <span className="text-sm flex font-codePro font-light">
                      Trade with our <br /> funds in the Hub
                    </span>
                  </div>
                  <div className="right grid">
                    <div className="percent">
                      <h3 className="font-codeProBold text-3xl text-end relative before:absolute before:content-['up_to'] before:font-codePro before:-top-1/2 before:text-xs">
                        90/10
                      </h3>
                      <span className="flex justify-end text-[0.7rem] font-codePro text-end">
                        Profit Share
                      </span>
                    </div>
                  </div>
                </div>

                <div className="card-middle grid gap-5 px-4 font-light">
                  <p className="text-base font-light font-Montserrat">
                    Trading Period
                    <span className="text-base font-bold"> Unlimited</span>
                  </p>
                  <p className="text-base font-light font-Montserrat">
                    <span className="text-base font-bold">5</span> Minimum
                    Trading Days
                  </p>
                  <p className="text-base font-light font-Montserrat">
                    <span className="text-base font-bold">5%</span> Maximum
                    Daily Loss
                  </p>
                  <p className="text-base font-light font-Montserrat">
                    <span className="text-base font-bold">12%</span> Maximum
                    Overall Loss
                  </p>

                  <p className="text-base font-light font-Montserrat">
                    Refundable registration fee
                  </p>
                </div>

                <div className="card-bottom mt-4 flex justify-center items-center text-center">
                  <a
                    href="#price-table"
                    className="uppercase font-Montserrat text-xs font-bold px-8 transition-all duration-200 rounded-3xl py-3 opacity-100 hover:opacity-[75%] discglow-btn"
                  >
                    Customize Challenge
                  </a>
                </div>
              </MotionY>
            </div>
          </div>

          {/* Mobile version */}
          <div className="cards lg:hidden flex flex-wrap gap-8 md:gap-12 justify-center items-center mt-8">
            <Swiper
              navigation={true}
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              modules={[EffectCoverflow, Navigation]}
              className="evaluation-slider flex flex-wrap gap-8 md:gap-10 justify-center md:justify-between items-center w-full"
            >
              {/* card */}
              <SwiperSlide className="flex justify-center items-center max-w-[27.125rem]">
                <div className="card flex flex-col gap-4 py-4 px-2 rounded-3xl bg-main-bg/90  md:bg-[#2B2C30]/[17%] border-all/20 border w-full max-w-[27.125rem]">
                  <div className="card-top py-4 px-3 rounded-xl evaluation-grnt flex gap-2 justify-between items-center text-black">
                    <div className="left max-w-[10rem]">
                      <h4 className="font-codeProBold">Phase 1</h4>
                      <span className="text-sm flex font-codePro font-light">
                        Starting your Evaluation process
                      </span>
                    </div>
                    <div className="right grid">
                      <div className="percent">
                        <h3 className="font-codeProBold text-3xl text-end">
                          8%
                        </h3>
                        <span className="flex justify-end text-[0.7rem] font-codePro text-end">
                          Target Profit
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="card-middle grid gap-5 px-4 font-light">
                    <p className="text-base font-light font-Montserrat">
                      Trading Period
                      <span className="text-base font-bold"> Unlimited</span>
                    </p>
                    <p className="text-base font-light font-Montserrat">
                      <span className="text-base font-bold">5</span> Minimum
                      Trading Days
                    </p>
                    <p className="text-base font-light font-Montserrat">
                      <span className="text-base font-bold">5%</span> Maximum
                      Daily Loss
                    </p>
                    <p className="text-base font-light font-Montserrat">
                      <span className="text-base font-bold">12%</span> Maximum
                      Overall Loss
                    </p>

                    <p className="text-base font-light font-Montserrat">
                      Registration fee
                    </p>
                  </div>

                  <div className="card-bottom mt-4 flex justify-center items-center text-center">
                    <a
                      href="#price-table"
                      className="capitalize bg-primary/20 font-base flex justify-center items-center py-2 px-8 rounded-lg whitespace-nowrap font-codePro font-light text-base"
                    >
                      Customize Challenge
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              {/* card */}
              <SwiperSlide className="flex justify-center items-center max-w-[27.125rem]">
                <div className="card flex flex-col gap-4 py-4 px-2 rounded-3xl bg-main-bg/90  md:bg-[#2B2C30]/[17%] border-all/20 border w-full max-w-[27.125rem]">
                  <div className="card-top py-4 px-3 rounded-xl evaluation-grnt flex gap-2 justify-between items-center text-black">
                    <div className="left max-w-[10rem]">
                      <h4 className="font-codeProBold">Phase 2</h4>
                      <span className="text-sm flex font-codePro font-light">
                        One step away to be our Funded Trader
                      </span>
                    </div>
                    <div className="right grid">
                      <div className="percent">
                        <h3 className="font-codeProBold text-3xl text-end">
                          5%
                        </h3>
                        <span className="flex justify-end text-[0.7rem] font-codePro text-end">
                          Target Profit
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="card-middle grid gap-5 px-4 font-light">
                    <p className="text-base font-light font-Montserrat">
                      Trading Period
                      <span className="text-base font-bold"> Unlimited</span>
                    </p>
                    <p className="text-base font-light font-Montserrat">
                      <span className="text-base font-bold">5</span> Minimum
                      Trading Days
                    </p>
                    <p className="text-base font-light font-Montserrat">
                      <span className="text-base font-bold">5%</span> Maximum
                      Daily Loss
                    </p>
                    <p className="text-base font-light font-Montserrat">
                      <span className="text-base font-bold">12%</span> Maximum
                      Overall Loss
                    </p>

                    <p className="text-base font-light font-Montserrat">-</p>
                  </div>

                  <div className="card-bottom mt-4 flex justify-center items-center text-center">
                    <a
                      href="#price-table"
                      className="capitalize bg-primary/20 font-base flex justify-center items-center py-2 px-8 rounded-lg whitespace-nowrap font-codePro font-light text-base"
                    >
                      Customize Challenge
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              {/* card */}
              <SwiperSlide className="flex justify-center items-center max-w-[27.125rem]">
                <div className="card flex flex-col gap-4 py-4 px-2 rounded-3xl bg-main-bg/90  md:bg-[#2B2C30]/[17%] border-all/20 border w-full max-w-[27.125rem]">
                  <div className="card-top py-4 px-3 rounded-xl evaluation-grnt flex gap-2 justify-between items-center text-black">
                    <div className="left max-w-[10rem]">
                      <h4 className="font-codeProBold">Funded</h4>
                      <span className="text-sm flex font-codePro font-light">
                        Trade with our <br /> funds in the Hub
                      </span>
                    </div>
                    <div className="right grid">
                      <div className="percent">
                        <h3 className="font-codeProBold text-3xl text-end">
                          90/10
                        </h3>
                        <span className="flex justify-end text-[0.7rem] font-codePro text-end">
                          Profit Share
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="card-middle grid gap-5 px-4 font-light">
                    <p className="text-base font-light font-Montserrat">
                      Trading Period
                      <span className="text-base font-bold"> Unlimited</span>
                    </p>
                    <p className="text-base font-light font-Montserrat">
                      <span className="text-base font-bold">NO</span> Minimum
                      Trading Days
                    </p>
                    <p className="text-base font-light font-Montserrat">
                      <span className="text-base font-bold">5%</span> Maximum
                      Daily Loss
                    </p>
                    <p className="text-base font-light font-Montserrat">
                      <span className="text-base font-bold">12%</span> Minimum
                      Trading Days
                    </p>
                    <p className="text-base font-light font-Montserrat">
                      Refundable registration fee
                    </p>
                  </div>

                  <div className="card-bottom mt-4 flex justify-center items-center text-center">
                    <a
                      href="#price-table"
                      className="capitalize bg-primary/20 font-base flex justify-center items-center py-2 px-8 rounded-lg whitespace-nowrap font-codePro font-light text-base"
                    >
                      Customize Challenge
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
