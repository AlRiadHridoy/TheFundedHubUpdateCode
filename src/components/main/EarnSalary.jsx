// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import MotionX from "../../ui/MotionX";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Navigation } from "swiper";
import { circle } from "../../ui/images";

export default function EarnSalary() {
  return (
    <div className="content-bottom w-full relative z-10 grid gap-6 pt-20">
      {/* top */}
      <div className="top text-start 2xl:px-36 relative z-10">
        <h2 className="font-medium text-2xl xs:text-[1.7rem] tracking-tight text-wht-gradient">
          Earn a monthly Salary
        </h2>

        {/* Paras */}
        <div className="paras grid gap-5 mt-2">
          <p>
            Earn a monthly salary as soon as you qualify for the scaling plan,
            bringing you closer to your dream of becoming a full-time trader.
            All the funded traders who successfully complete Challenge Phases 1
            & 2 and receive a live funded account are eligible for a Monthly
            Salary, provided they meet certain conditions.
          </p>
        </div>
      </div>
      {/* bottom */}
      <div className="bottom relative z-10 text-lg font-black  lg:flex justify-center items-center gap-5 w-full">
        <div className="items hidden md:grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 justify-center items-center text-[0.9rem] text-center">
          {/* item */}
          <div className="wrap scale-100 hover:scale-105 transition-all duration-200">
            <MotionX
              delay={0.25}
              cls="item flex flex-col gap-5 justify-center items-center text-base sm:text-lg  home-bg-clr-shadow border border-all/20 rounded-2xl py-4 px-4 md:border-none"
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
            </MotionX>
          </div>
          {/* item */}
          <div className="wrap scale-100 hover:scale-105 transition-all duration-200 ">
            <MotionX
              delay={0.5}
              cls="item flex flex-col gap-5 justify-center items-center text-base sm:text-lg  home-bg-clr-shadow border border-all/20 rounded-2xl py-4 px-4 md:border-none"
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
            </MotionX>
          </div>
          {/* item */}
          <div className="wrap scale-100 hover:scale-105 transition-all duration-200 ">
            <MotionX
              delay={0.75}
              cls="item flex flex-col gap-5 justify-center items-center text-base sm:text-lg  home-bg-clr-shadow border border-all/20 rounded-2xl py-4 px-4 md:border-none"
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
            </MotionX>
          </div>
          {/* item */}
          <div className="wrap scale-100 hover:scale-105 transition-all duration-200 ">
            <MotionX
              right={true}
              delay={0.75}
              cls="item flex flex-col gap-5 justify-center items-center text-base sm:text-lg  home-bg-clr-shadow border border-all/20 rounded-2xl py-4 px-4  md:border-none"
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
            </MotionX>
          </div>
          {/* item */}
          <div className="wrap scale-100 hover:scale-105 transition-all duration-200 ">
            <MotionX
              right={true}
              delay={0.5}
              cls="item flex flex-col gap-5 justify-center items-center text-base sm:text-lg  home-bg-clr-shadow border border-all/20 rounded-2xl py-4 px-4 md:border-none"
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
            </MotionX>
          </div>
          {/* item */}
          <div className="wrap scale-100 hover:scale-105 transition-all duration-200 ">
            <MotionX
              right={true}
              delay={0.25}
              cls="item flex flex-col gap-5 justify-center items-center text-base sm:text-lg home-bg-clr-shadow border border-all/20 rounded-2xl py-4 px-4 md:border-none relative"
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
            </MotionX>
          </div>
        </div>

        {/* mobilde version */}
        <div className="salary-slider md:hidden flex flex-wrap gap-8 lg:gap-12 justify-center items-center -mx-[1.5rem] px-[1.5rem] w-[calc(100vw-1.5rem)] m-auto">
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
            {/* item */}
            <SwiperSlide className="item flex flex-col gap-8 justify-center items-center text-base sm:text-lg home-item-bg-clr rounded-3xl py-5 px-4 md:border-none max-w-[14rem] overflow-hidden card-shadow">
              {/* top */}
              <div className="top text-center">
                <h6 className="text-sm font-extralight">Balance</h6>
                <h5 className="font-codeProBold text-[1.1rem] mt-1">$5,000</h5>
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
            <SwiperSlide className="item flex flex-col gap-8 justify-center items-center text-base sm:text-lg home-item-bg-clr rounded-3xl py-5 px-4 md:border-none max-w-[14rem] overflow-hidden card-shadow">
              {/* top */}
              <div className="top text-center">
                <h6 className="text-sm font-extralight">Balance</h6>
                <h5 className="font-codeProBold text-[1.1rem] mt-1">$10,000</h5>
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
            <SwiperSlide className="item flex flex-col gap-8 justify-center items-center text-base sm:text-lg home-item-bg-clr rounded-3xl py-5 px-4 md:border-none max-w-[14rem] overflow-hidden card-shadow">
              {/* top */}
              <div className="top text-center">
                <h6 className="text-sm font-extralight">Balance</h6>
                <h5 className="font-codeProBold text-[1.1rem] mt-1">$25,000</h5>
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
            <SwiperSlide className="item flex flex-col gap-8 justify-center items-center text-base sm:text-lg home-item-bg-clr rounded-3xl py-5 px-4 md:border-none max-w-[14rem] overflow-hidden card-shadow">
              {/* top */}
              <div className="top text-center">
                <h6 className="text-sm font-extralight">Balance</h6>
                <h5 className="font-codeProBold text-[1.1rem] mt-1">$50,000</h5>
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
            <SwiperSlide className="item flex flex-col gap-8 justify-center items-center text-base sm:text-lg home-item-bg-clr rounded-3xl py-5 px-4 md:border-none max-w-[14rem] overflow-hidden card-shadow">
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
            <SwiperSlide className="item flex flex-col gap-8 justify-center items-center text-base sm:text-lg home-item-bg-clr rounded-3xl py-5 px-4 md:border-none max-w-[14rem] overflow-hidden card-shadow">
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
      </div>
      <div className="circle-shadow sm:hidden absolute opacity-30 top-[-30%] -left-[80%] w-full h-full min-w-[50rem]">
        <img src={circle} alt="circle-shadow" />
      </div>
    </div>
  );
}
