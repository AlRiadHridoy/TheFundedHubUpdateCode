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

export default function EarnSalary() {
  const truthy = screen.width >= 680 ? true : false;
  return (
    <div className="content-bottom w-full relative z-10 grid gap-8 pt-20 md:pt-24">
      {/* top */}
      <div className="top text-start 2xl:px-36">
        <MotionX delay={0.1}>
          <h2 className="font-medium text-2xl xs:text-[1.7rem] tracking-tight text-wht-gradient">
            Earn a monthly Salary
          </h2>
        </MotionX>
        {/* Paras */}
        <MotionX delay={0.2}>
          <div className="paras grid gap-5 mt-2">
            <p>
              Earn a monthly salary as soon as you qualify for the scaling plan,
              bringing you closer to your dream of becoming a full-time trader.
              All the funded traders who successfully complete Challenge Phases
              1 & 2 and receive a live funded account are eligible for a Monthly
              Salary, provided they meet certain conditions.
            </p>
          </div>
        </MotionX>
      </div>
      {/* bottom */}
      <div className="bottom relative z-10 text-lg font-black md:flex justify-center items-center gap-5 w-full">
        {truthy ? (
          <div className="items grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 justify-center items-center text-[0.9rem] text-center">
            {/* item */}
            <div className="wrap scale-100 hover:scale-105 transition-all duration-200">
              <MotionY
                delay={0.1}
                cls="item flex flex-col gap-5 justify-center items-center text-base sm:text-lg bg-main-bg/90  md:bg-[#2B2C30]/[17%] border border-all/20 rounded-2xl py-4 px-4 md:border-none"
              >
                {/* top */}
                <div className="top text-center">
                  <h6 className="text-xs font-extralight">Balance</h6>
                  <h5 className="font-codeProBold">$5,000</h5>
                </div>
                {/* Bottom */}
                <div className="bottom">
                  <h5 className="font-codeProBold">
                    $50.00 /{" "}
                    <span className=" font-codePro font-extralight text-base">
                      Month
                    </span>
                  </h5>
                  <h6 className="text-sm font-codePro font-extralight text-center">
                    Salary
                  </h6>
                </div>
              </MotionY>
            </div>
            {/* item */}
            <div className="wrap scale-100 hover:scale-105 transition-all duration-200">
              <MotionY
                delay={0.2}
                cls="item flex flex-col gap-5 justify-center items-center text-base sm:text-lg bg-main-bg/90  md:bg-[#2B2C30]/[17%] border border-all/20 rounded-2xl py-4 px-4 md:border-none"
              >
                {/* top */}
                <div className="top text-center">
                  <h6 className="text-xs font-extralight">Balance</h6>
                  <h5 className="font-codeProBold">$10,000</h5>
                </div>
                {/* Bottom */}
                <div className="bottom">
                  <h5 className="font-codeProBold">
                    $100.00 /{" "}
                    <span className=" font-codePro font-extralight text-base">
                      Month
                    </span>
                  </h5>
                  <h6 className="text-sm font-codePro font-extralight text-center">
                    Salary
                  </h6>
                </div>
              </MotionY>
            </div>
            {/* item */}
            <div className="wrap scale-100 hover:scale-105 transition-all duration-200">
              <MotionY
                delay={0.3}
                cls="item flex flex-col gap-5 justify-center items-center text-base sm:text-lg bg-main-bg/90  md:bg-[#2B2C30]/[17%] border border-all/20 rounded-2xl py-4 px-4 md:border-none"
              >
                {/* top */}
                <div className="top text-center">
                  <h6 className="text-xs font-extralight">Balance</h6>
                  <h5 className="font-codeProBold">$25,000</h5>
                </div>
                {/* Bottom */}
                <div className="bottom">
                  <h5 className="font-codeProBold">
                    $250.00 /{" "}
                    <span className=" font-codePro font-extralight text-base">
                      Month
                    </span>
                  </h5>
                  <h6 className="text-sm font-codePro font-extralight text-center">
                    Salary
                  </h6>
                </div>
              </MotionY>
            </div>
            {/* item */}
            <div className="wrap scale-100 hover:scale-105 transition-all duration-200">
              <MotionY
                delay={0.4}
                cls="item flex flex-col gap-5 justify-center items-center text-base sm:text-lg bg-main-bg/90  md:bg-[#2B2C30]/[17%] border border-all/20 rounded-2xl py-4 px-4  md:border-none"
              >
                {/* top */}
                <div className="top text-center">
                  <h6 className="text-xs font-extralight">Balance</h6>
                  <h5 className="font-codeProBold">$50,000</h5>
                </div>
                {/* Bottom */}
                <div className="bottom">
                  <h5 className="font-codeProBold">
                    $500.00 /{" "}
                    <span className="font-codePro font-extralight text-base">
                      Month
                    </span>
                  </h5>
                  <h6 className="text-sm font-codePro font-extralight text-center">
                    Salary
                  </h6>
                </div>
              </MotionY>
            </div>
            {/* item */}
            <div className="wrap scale-100 hover:scale-105 transition-all duration-200">
              <MotionY
                delay={0.5}
                cls="item flex flex-col gap-5 justify-center items-center text-base sm:text-lg bg-main-bg/90  md:bg-[#2B2C30]/[17%] border border-all/20 rounded-2xl py-4 px-4 md:border-none"
              >
                {/* top */}
                <div className="top text-center">
                  <h6 className="text-xs font-extralight">Balance</h6>
                  <h5 className="font-codeProBold">$100,000</h5>
                </div>
                {/* Bottom */}
                <div className="bottom">
                  <h5 className="font-codeProBold">
                    $1000.00 /{" "}
                    <span className=" font-codePro font-extralight text-base">
                      Month
                    </span>
                  </h5>
                  <h6 className="text-sm font-codePro font-extralight text-center">
                    Salary
                  </h6>
                </div>
              </MotionY>
            </div>
            {/* item */}
            <div className="wrap scale-100 hover:scale-105 transition-all duration-200">
              <MotionY
                delay={0.5}
                cls="item flex flex-col gap-5 justify-center items-center text-base sm:text-lg bg-main-bg/90  md:bg-[#2B2C30]/[17%] border border-all/20 rounded-2xl py-4 px-4 md:border-none"
              >
                {/* top */}
                <div className="top text-center">
                  <h6 className="text-xs font-extralight">Balance</h6>
                  <h5 className="font-codeProBold">$200,000</h5>
                </div>
                {/* Bottom */}
                <div className="bottom">
                  <h5 className="font-codeProBold">
                    $2000.00 /{" "}
                    <span className=" font-codePro font-extralight text-base">
                      Month
                    </span>
                  </h5>
                  <h6 className="text-sm font-codePro font-extralight text-center">
                    Salary
                  </h6>
                </div>
              </MotionY>
            </div>
          </div>
        ) : (
          <div className="salary-slider sm:hidden flex flex-wrap gap-8 md:gap-12 justify-center items-center overflow-hidden -mx-[1.5rem] px-[1.5rem] w-screen">
            <Swiper
              loop
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
              {/* item */}
              <SwiperSlide className="item flex flex-col gap-8 justify-center items-center text-base sm:text-lg bg-main-bg/90  md:bg-[#2B2C30]/[17%] border border-all/20 rounded-3xl py-5 px-4 md:border-none max-w-[14rem] overflow-hidden">
                {/* top */}
                <div className="top text-center">
                  <h6 className="text-sm font-extralight">Balance</h6>
                  <h5 className="font-codeProBold text-[1.1rem] mt-1">
                    $5,000
                  </h5>
                </div>
                {/* Bottom */}
                <div className="bottom">
                  <h5 className="font-codeProBold text-[1.1rem]">
                    $50.00 /{" "}
                    <span className=" font-codePro font-extralight text-base">
                      Month
                    </span>
                  </h5>
                  <h6 className="text-sm font-codePro font-extralight text-center">
                    Salary
                  </h6>
                </div>
              </SwiperSlide>
              {/* item */}
              <SwiperSlide className="item flex flex-col gap-8 justify-center items-center text-base sm:text-lg bg-main-bg/90  md:bg-[#2B2C30]/[17%] border border-all/20 rounded-3xl py-5 px-4 md:border-none max-w-[14rem] overflow-hidden">
                {/* top */}
                <div className="top text-center">
                  <h6 className="text-sm font-extralight">Balance</h6>
                  <h5 className="font-codeProBold text-[1.1rem] mt-1">
                    $10,000
                  </h5>
                </div>
                {/* Bottom */}
                <div className="bottom">
                  <h5 className="font-codeProBold text-[1.1rem]">
                    $100.00 /{" "}
                    <span className=" font-codePro font-extralight text-base">
                      Month
                    </span>
                  </h5>
                  <h6 className="text-sm font-codePro font-extralight text-center">
                    Salary
                  </h6>
                </div>
              </SwiperSlide>
              {/* item */}
              <SwiperSlide className="item flex flex-col gap-8 justify-center items-center text-base sm:text-lg bg-main-bg/90  md:bg-[#2B2C30]/[17%] border border-all/20 rounded-3xl py-5 px-4 md:border-none max-w-[14rem] overflow-hidden">
                {/* top */}
                <div className="top text-center">
                  <h6 className="text-sm font-extralight">Balance</h6>
                  <h5 className="font-codeProBold text-[1.1rem] mt-1">
                    $25,000
                  </h5>
                </div>
                {/* Bottom */}
                <div className="bottom">
                  <h5 className="font-codeProBold text-[1.1rem]">
                    $250.00 /{" "}
                    <span className="font-codePro font-extralight text-base">
                      Month
                    </span>
                  </h5>
                  <h6 className="text-sm font-codePro font-extralight text-center">
                    Salary
                  </h6>
                </div>
              </SwiperSlide>
              {/* item */}
              <SwiperSlide className="item flex flex-col gap-8 justify-center items-center text-base sm:text-lg bg-main-bg/90  md:bg-[#2B2C30]/[17%] border border-all/20 rounded-3xl py-5 px-4 md:border-none max-w-[14rem] overflow-hidden">
                {/* top */}
                <div className="top text-center">
                  <h6 className="text-sm font-extralight">Balance</h6>
                  <h5 className="font-codeProBold text-[1.1rem] mt-1">
                    $50,000
                  </h5>
                </div>
                {/* Bottom */}
                <div className="bottom">
                  <h5 className="font-codeProBold text-[1.1rem]">
                    $500.00 /{" "}
                    <span className="font-codePro font-extralight text-base">
                      Month
                    </span>
                  </h5>
                  <h6 className="text-sm font-codePro font-extralight text-center">
                    Salary
                  </h6>
                </div>
              </SwiperSlide>
              {/* item */}
              <SwiperSlide className="item flex flex-col gap-8 justify-center items-center text-base sm:text-lg bg-main-bg/90  md:bg-[#2B2C30]/[17%] border border-all/20 rounded-3xl py-5 px-4 md:border-none max-w-[14rem] overflow-hidden">
                {/* top */}
                <div className="top text-center">
                  <h6 className="text-sm font-extralight">Balance</h6>
                  <h5 className="font-codeProBold text-[1.1rem] mt-1">
                    $100,000
                  </h5>
                </div>
                {/* Bottom */}
                <div className="bottom">
                  <h5 className="font-codeProBold text-[1.1rem]">
                    $1000.00 /{" "}
                    <span className="font-codePro font-extralight text-base">
                      Month
                    </span>
                  </h5>
                  <h6 className="text-sm font-codePro font-extralight text-center">
                    Salary
                  </h6>
                </div>
              </SwiperSlide>
              {/* item */}
              <SwiperSlide className="item flex flex-col gap-8 justify-center items-center text-base sm:text-lg bg-main-bg/90  md:bg-[#2B2C30]/[17%] border border-all/20 rounded-3xl py-5 px-4 md:border-none max-w-[14rem] overflow-hidden">
                {/* top */}
                <div className="top text-center">
                  <h6 className="text-sm font-extralight">Balance</h6>
                  <h5 className="font-codeProBold text-[1.1rem] mt-1">
                    $200,000
                  </h5>
                </div>
                {/* Bottom */}
                <div className="bottom">
                  <h5 className="font-codeProBold text-[1.1rem]">
                    $2000.00 /{" "}
                    <span className="font-codePro font-extralight text-base">
                      Month
                    </span>
                  </h5>
                  <h6 className="text-sm font-codePro font-extralight text-center">
                    Salary
                  </h6>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        )}
      </div>
    </div>
  );
}
