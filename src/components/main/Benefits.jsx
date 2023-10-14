import { circle } from "../../ui/images";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import MotionX from "../../ui/MotionX";

// trader
import blackBull from "../../assets/images/BlackBull-logo.png";

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
        <div className="wrapper grid gap-6 relative z-30">
          <div className="heading z-10 relative flex flex-col justify-center sm:items-center sm:text-center">
            <h2 className="font-medium text-2xl xs:text-[1.7rem] tracking-tight text-wht-gradient">
              The Funded Hub Benefits
            </h2>

            <div className="paras mt-2">
              <p>
                We are partnering up directly with a regulated liquidity
                provider to offer you unbeatable trading conditions. <br /> Our
                accounts will let you trade in an excellent environment with
                tight spreads and lighting-fast execution.
              </p>
            </div>
          </div>

          <div className="Contents w-full grid">
            {/* Desktop Version */}
            <div className="w-full max-w-screen hidden md:flex justify-center items-center relative">
              <div className="items grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 relative z-10">
                <div className="wrap scale-100 hover:scale-105 transition-all duration-200 bottom-shadow ">
                  {/* Item */}
                  <MotionX
                    delay={0.5}
                    cls="item py-5 px-4 rounded-3xl relative z-10 h-full max-w-[16.8rem] home-item-bg-clr"
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
                  </MotionX>
                </div>

                <div className="wrap scale-100 hover:scale-105 transition-all duration-200 bottom-shadow">
                  {/* Item */}
                  <MotionX
                    delay={0.75}
                    cls="item py-5 px-4 rounded-3xl relative z-10 h-full max-w-[16.8rem] home-item-bg-clr"
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
                  </MotionX>
                </div>

                <div className="wrap scale-100 hover:scale-105 transition-all duration-200 bottom-shadow">
                  {/* Item */}
                  <MotionX
                    delay={1}
                    cls="item py-5 px-4 rounded-3xl relative z-10 h-full max-w-[16.8rem] home-item-bg-clr"
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
                      Various payment methods, including Bank transfer, PayPal,
                      and Crypto. Once your payout is approved, get your money
                      in a flash!
                    </p>
                  </MotionX>
                </div>
                <div className="wrap scale-100 hover:scale-105 transition-all duration-200 bottom-shadow">
                  {/* Item */}
                  <MotionX
                    right={true}
                    delay={0.5}
                    cls="item py-5 px-4 rounded-3xl relative z-10 h-full max-w-[16.8rem] home-item-bg-clr"
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
                  </MotionX>
                </div>

                <div className="wrap scale-100 hover:scale-105 transition-all duration-200 bottom-shadow">
                  {/* Item */}
                  <MotionX
                    right={true}
                    delay={0.75}
                    cls="item py-5 px-4 rounded-3xl relative z-10 h-full max-w-[16.8rem] home-item-bg-clr"
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
                      you might need.
                    </p>
                  </MotionX>
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
            <div className="md:hidden flex flex-wrap gap-8 md:gap-12 justify-center items-center -mx-[1.5rem] px-[1.5rem] sm:-mx-[3rem] sm:px-[3rem] w-screen relative ">
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
                <SwiperSlide className="item py-5 px-4 home-item-bg-clr rounded-3xl relative z-10 h-full max-w-[17rem] overflow-hidden card-shadow">
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
                <SwiperSlide className="item py-5 px-4 home-item-bg-clr rounded-3xl relative z-10 h-full max-w-[17rem] overflow-hidden card-shadow">
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
                <SwiperSlide className="item py-5 px-4 home-item-bg-clr rounded-3xl relative z-10 h-full max-w-[17rem] overflow-hidden card-shadow">
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
                    Various payment methods, including Bank transfer, PayPal,
                    and Crypto. Once your payout is approved, get your money in
                    a flash!
                  </p>
                </SwiperSlide>

                {/* Item */}
                <SwiperSlide className="item py-5 px-4 home-item-bg-clr rounded-3xl relative z-10 h-full max-w-[17rem] overflow-hidden card-shadow">
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
                <SwiperSlide className="item py-5 px-4 home-item-bg-clr rounded-3xl relative z-10 h-full max-w-[17rem] overflow-hidden card-shadow">
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

            {/* trande area */}
            {/* desktop */}
            <div className="trade mt-20 sm:mt-12">
              <div className="hidden sm:grid gap-6 md:grid-cols-7 rounded-3xl p-6 justify-center items-center max-w-[64rem] m-auto bottom-shadow text-center sm:text-start scale-100 hover:scale-[1.02] transition-all duration-300">
                <div className="left md:col-span-5">
                  <h4 className="font-medium text-2xl xs:text-[1.7rem] tracking-tight text-wht-gradient">
                    Regulated Broker
                  </h4>
                  <p className="pt-2">
                    Trade with lightning fast execution speed on a trusted &
                    regulated broker Ranked #1 forex broker in execution speed
                    by CompareForexBrokers.com
                  </p>
                </div>

                {/* right */}
                <div className="right md:col-span-2  flex flex-col justify-center items-center md:mt-4">
                  <img
                    className="max-w-[16rem] w-full "
                    src={blackBull}
                    alt="black-bull"
                  />
                </div>
              </div>
              {/* mobile */}
              <div className="sm:hidden grid gap-2.5 md:grid-cols-7 items-center ">
                <div className="left">
                  <h4 className="font-medium text-2xl xs:text-[1.7rem] tracking-tight text-wht-gradient">
                    Regulated Broker
                  </h4>
                  <p className="pt-2">
                    Trade with lightning fast execution speed on a trusted &
                    regulated broker Ranked #1 forex broker in execution speed
                    by CompareForexBrokers.com
                  </p>
                </div>

                {/* right */}
                <div className="right">
                  <img
                    className="max-w-[13rem] w-full opacity-70"
                    src={blackBull}
                    alt="black-bull"
                  />
                </div>
              </div>
            </div>

            <EarnSalary />
          </div>
        </div>
      </div>
    </section>
  );
}
