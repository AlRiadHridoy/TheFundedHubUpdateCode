import { circle } from "../../ui/images";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import MotionX from "../../ui/MotionX";
import MotionY from "../../ui/MotionY";

// trader
import metaTraderFive from "../../assets/images/meta-trader-5.webp";
import metaTraderFour from "../../assets/images/meta-trader-4.webp";
import blackBull from "../../assets/images/BBM-Partners.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Navigation } from "swiper";
import EarnSalary from "./EarnSalary";

export default function Benefits() {
  return (
    <section className="benefits relative md:m-auto pt-20 sm:pt-24">
      <div className="container">
        <div className="wrapper grid gap-8 relative z-30">
          <div className="heading z-10 relative flex flex-col justify-center sm:items-center sm:text-center">
            <MotionX delay={0.1}>
              <h2 className="font-medium text-2xl xs:text-[1.7rem] tracking-tight text-wht-gradient">
                The Funded Hub Benefits
              </h2>
            </MotionX>

            <MotionX delay={0.2}>
              <div className="paras mt-2">
                <p>
                  We are partnering up directly with a regulated liquidity
                  provider to offer you unbeatable trading conditions. <br />{" "}
                  Our accounts will let you trade in an excellent environment
                  with tight spreads and lighting-fast execution.
                </p>
              </div>
            </MotionX>
          </div>

          <div className="Contents w-full grid">
            {/* Desktop Version */}
            <div className="w-full max-w-screen hidden lg:flex justify-center items-center relative">
              <div className="items grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 relative z-10">
                <div className="wrap scale-100 hover:scale-105 transition-all duration-200">
                  {/* Item */}
                  <MotionY
                    delay={0.1}
                    cls="item py-5 px-4 bg-main-bg/90  md:bg-[#2B2C30]/[17%] rounded-3xl relative z-10 h-full max-w-[16.8rem]"
                  >
                    <div className="head text-base">
                      <h5>
                        <div className="font-codeProBold inline-block">
                          Craft
                        </div>{" "}
                        your challenge
                      </h5>
                    </div>
                    {/* para */}
                    <p className="text-sm mt-3">
                      All other prop firms with the same rules? With us you can
                      customize basically everything; from the trading period to
                      the target profits to the max drawdown.
                    </p>
                  </MotionY>
                </div>

                <div className="wrap scale-100 hover:scale-105 transition-all duration-200">
                  {/* Item */}
                  <MotionY
                    delay={0.2}
                    cls="item py-5 px-4 bg-main-bg/90  md:bg-[#2B2C30]/[17%] rounded-3xl relative z-10 h-full max-w-[16.8rem]"
                  >
                    <div className="head text-base">
                      <h5>
                        Earn a fixed{" "}
                        <div className="font-codeProBold inline-block">
                          salary
                        </div>
                      </h5>
                    </div>
                    {/* para */}
                    <p className="text-sm mt-3">
                      You&apos;re investing time trading for us and we want to
                      reward your skills and efforts! Earn a fixed monthly
                      salary based on your account balance.
                    </p>
                  </MotionY>
                </div>

                <div className="wrap scale-100 hover:scale-105 transition-all duration-200">
                  {/* Item */}
                  <MotionY
                    delay={0.3}
                    cls="item py-5 px-4 bg-main-bg/90  md:bg-[#2B2C30]/[17%] rounded-3xl relative z-10 h-full max-w-[16.8rem]"
                  >
                    <div className="head text-base">
                      <h5>
                        <div className="font-codeProBold inline-block">
                          Lightning-fast
                        </div>{" "}
                        Payouts
                      </h5>
                    </div>
                    {/* para */}
                    <p className="text-sm mt-3">
                      We work with DEEL to ensure the smoothest withdrawal
                      experience to all our traders. Once the payout is
                      approved, get your money in a flash!
                    </p>
                  </MotionY>
                </div>
                <div className="wrap scale-100 hover:scale-105 transition-all duration-200">
                  {/* Item */}
                  <MotionY
                    delay={0.4}
                    cls="item py-5 px-4 bg-main-bg/90  md:bg-[#2B2C30]/[17%] rounded-3xl relative z-10 h-full max-w-[16.8rem]"
                  >
                    <div className="head text-base">
                      <h5>
                        <div className="font-codeProBold inline-block">
                          Regulated
                        </div>{" "}
                        brokers only
                      </h5>
                    </div>
                    {/* para */}
                    <p className="text-sm mt-3">
                      Our traders deserve the best, only! We&apos;re thrilled to
                      be partnering with BlackBull to offer you the best trading
                      conditions in the market.
                    </p>
                  </MotionY>
                </div>

                <div className="wrap scale-100 hover:scale-105 transition-all duration-200">
                  {/* Item */}
                  <MotionY
                    delay={0.5}
                    cls="item py-5 px-4 bg-main-bg/90  md:bg-[#2B2C30]/[17%] rounded-3xl relative z-10 h-full max-w-[16.8rem]"
                  >
                    <div className="head text-base">
                      <h5>
                        {" "}
                        <div className="font-codeProBold inline-block">
                          24/5
                        </div>{" "}
                        dedicated support
                      </h5>
                    </div>

                    {/* para */}
                    <p className="text-sm mt-3">
                      Any question or concern? We got you! Our team of traders
                      and engineers is available 24/5 to help you with anything
                      you might need, even on Whatsapp!
                    </p>
                  </MotionY>
                </div>
              </div>

              {/* cirlce */}
              <img
                className="cirlce sm:hidden absolute -top-[200%] -left-[18%]  w-[70rem] rotate-[80deg] opacity-[0.1]"
                src={circle}
                alt="circle"
              />
              {/* cirlce */}
              <img
                className="cirlce sm:hidden absolute -top-[100%] -right-[20%]  w-[50rem] rotate-[20deg] opacity-[0.05]"
                src={circle}
                alt="circle"
              />
            </div>

            {/* Mobile version */}
            <div className="sm:hidden flex flex-wrap gap-8 md:gap-12 justify-center items-center -mx-[1.5rem] px-[1.5rem] w-screen relative">
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
                className="flex flex-wrap gap-8 md:gap-10 justify-center items-center w-full"
              >
                {/* Item */}
                <SwiperSlide className="item py-5 px-4 bg-main-bg/90  md:bg-[#2B2C30]/[17%] rounded-3xl relative z-10 h-full max-w-[17rem] border-all/20 border overflow-hidden">
                  <div className="head text-base">
                    <h5>
                      <div className="font-codeProBold inline-block">Craft</div>{" "}
                      your challenge
                    </h5>
                  </div>
                  {/* para */}
                  <p className="text-sm mt-3">
                    All other prop firms with the same rules? With us you can
                    customize basically everything; from the trading period to
                    the target profits to the max drawdown.
                  </p>
                </SwiperSlide>

                {/* Item */}
                <SwiperSlide className="item py-5 px-4 bg-main-bg/90  md:bg-[#2B2C30]/[17%] rounded-3xl relative z-10 h-full max-w-[17rem] border-all/20 border overflow-hidden">
                  <div className="head text-base">
                    <h5>
                      Earn a fixed{" "}
                      <div className="font-codeProBold inline-block">
                        salary
                      </div>
                    </h5>
                  </div>

                  {/* para */}
                  <p className="text-sm mt-3">
                    You&apos;re investing time trading for us and we want to
                    reward your skills and efforts! Earn a fixed monthly salary
                    based on your account balance.
                  </p>
                </SwiperSlide>

                {/* Item */}
                <SwiperSlide className="item py-5 px-4 bg-main-bg/90  md:bg-[#2B2C30]/[17%] rounded-3xl relative z-10 h-full max-w-[17rem] border-all/20 border overflow-hidden">
                  <div className="head text-base">
                    <h5>
                      <div className="font-codeProBold inline-block">
                        Lightning-fast
                      </div>{" "}
                      Payouts
                    </h5>
                  </div>
                  {/* para */}
                  <p className="text-sm mt-3">
                    NWe work with DEEL to ensure the smoothest withdrawal
                    experience to all our traders. Once the payout is approved,
                    get your money in a flash!
                  </p>
                </SwiperSlide>

                {/* Item */}
                <SwiperSlide className="item py-5 px-4 bg-main-bg/90  md:bg-[#2B2C30]/[17%] rounded-3xl relative z-10 h-full max-w-[17rem] border-all/20 border overflow-hidden">
                  <div className="head text-base">
                    <h5>
                      <div className="font-codeProBold inline-block">
                        Regulated
                      </div>{" "}
                      brokers only
                    </h5>
                  </div>
                  {/* para */}
                  <p className="text-sm mt-3">
                    Our traders deserve the best, only! We&apos;re thrilled to
                    be partnering with BlackBull to offer you the best trading
                    conditions in the market.
                  </p>
                </SwiperSlide>
                {/* Item */}
                <SwiperSlide className="item py-5 px-4 bg-main-bg/90  md:bg-[#2B2C30]/[17%] rounded-3xl relative z-10 h-full max-w-[17rem] border-all/20 border overflow-hidden">
                  <div className="head text-base">
                    <h5>
                      <div className="font-codeProBold inline-block">24/5</div>{" "}
                      dedicated support
                    </h5>
                  </div>
                  {/* para */}
                  <p className="text-sm mt-3">
                    Any question or concern? We got you! Our team of traders and
                    engineers is available 24/5 to help you with anything you
                    might need, even on Whatsapp!
                  </p>
                </SwiperSlide>
              </Swiper>
            </div>

            {/* trade logos */}
            <div className="trade-logos flex justify-center sm:justify-end mt-8 w-full">
              <div className="logos flex gap-4 items-center bg-black/[37%] py-2 xs:py-3 px-6 sm:px-12 rounded-full">
                <div className="logo">
                  <img
                    className="max-w-[8rem] w-full"
                    src={blackBull}
                    alt="Black-bull"
                  />
                </div>
                <div className="logo">
                  <img
                    className="max-w-[8rem] w-full"
                    src={metaTraderFour}
                    alt="meta-trader-4"
                  />
                </div>
                <div className="logo">
                  <img
                    className="max-w-[8rem] w-full"
                    src={metaTraderFive}
                    alt="meta-trader-5"
                  />
                </div>
              </div>
            </div>

            {/* Content Top */}
            <div className="content-top"></div>

            <EarnSalary />
          </div>
        </div>
      </div>
    </section>
  );
}
