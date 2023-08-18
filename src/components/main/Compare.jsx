import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { arrow, mainLogo } from "../../ui/images";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { EffectCoverflow, Navigation } from "swiper";
import MotionX from "../../ui/MotionX";
import MotionY from "../../ui/MotionY";

export default function Compare() {
  const [compare, setCompare] = useState("FTMO");
  // const names = [
  //   "THE FUNDEDHUB",
  //   "FTMO",
  //   "MY FOREX FUNDS",
  //   "TRUE FOREX FUNDS",
  //   "FUNDEDNEXT",
  // ];

  const values = {
    FTMO: [
      "100K Evaluation",
      "5% Daily | 10% Total",
      "4 Day",
      "Unlimited",
      "10% - 5%",
      "Only in Swing Acc.",
      "No",
      "$600",
    ],
    "MY FOREX FUNDS": [
      "100K Evaluation",
      "5% Daily | 12% Total",
      "5 Day",
      "Unlimited",
      "8% - 5%",
      "Yes",
      "No",
      "$499",
    ],
    "TRUE FOREX FUNDS": [
      "100K Evaluation",
      "5% Daily | 10% Total",
      "5 Day",
      "Unlimited",
      "8% - 5%",
      "Yes",
      "No",
      "$660",
    ],
    FUNDEDNEXT: [
      "100K Evaluation",
      "5% Daily | 10% Total",
      "5 Day",
      "30-60 days",
      "10% - 5%",
      "Yes",
      "No",
      "$549",
    ],
  };

  return (
    <section className="compare relative pt-20 sm:pt-28">
      <div className="container relative">
        <div className="wrapper relative z-20 grid gap-8 sm:gap-12">
          <div className="heading relative z-20 flex flex-col justify-center sm:items-center md:text-center gap-5 md:gap-8">
            <MotionX delay={0.1}>
              <h2 className="text-2xl xs:text-[1.7rem] tracking-tight text-wht-gradient font-medium">
                Compare your options
              </h2>
            </MotionX>

            <MotionX delay={0.2}>
              {/* buttons */}
              <div className="buttons grid grid-cols-2 sm:grid-cols-4 gap-5 md:gap-8 text-center justify-center items-center max-w-[20rem] m-auto sm:max-w-none">
                <button
                  className={`button py-2 px-3 font-semibold transition-all duration-200 text-wht text-[0.7rem] cursor-pointer border-b-2 ${
                    compare === "FTMO" ? "border-primary" : "border-primary/30"
                  }
              `}
                  onClick={() => setCompare("FTMO")}
                >
                  FTMO
                </button>
                <button
                  className={`button py-2 px-3 font-semibold transition-all duration-200 text-wht text-[0.7rem] cursor-pointer border-b-2 ${
                    compare === "MY FOREX FUNDS"
                      ? "border-primary"
                      : "border-primary/30"
                  }
              `}
                  onClick={() => setCompare("MY FOREX FUNDS")}
                >
                  MY FOREX FUNDS
                </button>
                <button
                  className={`button py-2 px-3 font-semibold transition-all duration-200 text-wht text-[0.7rem] cursor-pointer border-b-2 ${
                    compare === "TRUE FOREX FUNDS"
                      ? "border-primary"
                      : "border-primary/30"
                  }
              `}
                  onClick={() => setCompare("TRUE FOREX FUNDS")}
                >
                  TRUE FOREX FUNDS
                </button>
                <button
                  className={`button py-2 px-3 font-semibold transition-all duration-200 text-wht text-[0.7rem] cursor-pointer border-b-2 ${
                    compare === "FUNDEDNEXT"
                      ? "border-primary"
                      : "border-primary/30"
                  }
              `}
                  onClick={() => setCompare("FUNDEDNEXT")}
                >
                  FUNDEDNEXT
                </button>
              </div>
            </MotionX>
          </div>
          {/* content */}
          <div className="content relative z-10 hidden md:grid sm:grid-cols-2 m-auto gap-10 max-w-[55rem] w-full">
            {/* item */}
            <div className="wrap scale-100 hover:scale-[1.03] transition-all duration-200 relative z-10">
              <MotionY delay={0.1} cls={""}>
                <div className="item bg-main-bg/90  md:bg-[#2B2C30]/[17%] py-4 px-4 rounded-2xl border sm:border-none border-primary/10">
                  {/* head */}
                  <div className="head flex items-center font-Montserrat font-bold bg-primary/10 p-2 rounded-2xl h-[60px]">
                    <img className="w-40" src={mainLogo} alt="main-logo" />
                  </div>
                  <b></b>
                  {/* paras */}
                  <div className="paras grid gap-3 py-8">
                    <span>
                      <b>100K Evaluation</b>
                    </span>
                    <span>
                      Maximum Drawdown - <b>5% Daily | 12% Total</b>
                    </span>
                    <span>
                      Minimum Trading Days - <b>Up to 0 Days</b>
                    </span>
                    <span>
                      Trading Period - <b>Up to Unlimited</b>
                    </span>

                    <span>
                      Targets Profit - <b> 8% & 5%</b>
                    </span>
                    <span>
                      Hold Trade On Weekends - <b>Yes</b>
                    </span>
                    <span>
                      Monthly Salary - <b>$1,000</b>
                    </span>
                    <span>
                      Price - <b>$569</b>
                    </span>
                  </div>
                </div>
              </MotionY>
            </div>
            {/* item */}
            <div className="wrap scale-100 hover:scale-[1.03] transition-all duration-200 relative z-10">
              <MotionY delay={0.2} cls={""}>
                <div className="item bg-main-bg/90  md:bg-[#2B2C30]/[17%] py-4 px-4 rounded-2xl border sm:border-none border-primary/10">
                  {/* head */}
                  <div className="head flex items-center font-Montserrat bg-primary/10 py-2 px-4 rounded-2xl text-xl font-bold h-[60px]">
                    {compare}
                  </div>
                  {/* paras */}

                  <div className="paras grid gap-3 py-8">
                    <span>
                      <b>100K Evaluation</b>
                    </span>
                    <span>
                      Maximum Drawdown - <b>{values[compare][1]}</b>
                    </span>
                    <span>
                      Minimum Trading Days - <b>{values[compare][2]}</b>
                    </span>
                    <span>
                      Trading Period - <b>{values[compare][3]}</b>
                    </span>

                    <span>
                      Targets Profit - <b>{values[compare][4]}</b>
                    </span>
                    <span>
                      Hold Trade On Weekends - <b>{values[compare][5]}</b>
                    </span>
                    <span>
                      Monthly Salary - <b>{values[compare][6]}</b>
                    </span>
                    <span>
                      Price - <b>{values[compare][7]}</b>
                    </span>
                  </div>
                </div>
              </MotionY>
            </div>
          </div>
          {/* mobile content */}
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
            className="content relative z-10 grid md:hidden md:grid-cols-2 m-auto gap-10 w-full max-w-[100vw]"
          >
            {/* item */}
            <SwiperSlide className="item relative z-10 bg-main-bg/90 sm:bg-main-bg/90  md:bg-[#2B2C30]/[17%] py-4 px-4 md:px-6 rounded-2xl border sm:border-none border-primary/10 max-w-[30rem]">
              {/* head */}
              <div className="head flex items-center font-Montserrat font-bold bg-primary/10 p-2 rounded-2xl h-[60px]">
                <img className="w-40" src={mainLogo} alt="main-logo" />
              </div>
              {/* paras */}
              <div className="paras grid gap-3 py-8">
                <span>
                  <b>100K Evaluation</b>
                </span>

                <span>
                  Maximum Drawdown - <b>4% Daily | 8% Total</b>
                </span>
                <span>
                  Payout Split - <b>80/20</b>
                </span>
                <span>
                  Minimum Trading Days - <b>5 Day</b>
                </span>
                <span>
                  Time Period For Evaluation - <b>45 & 45 Days</b>
                </span>
                <span>
                  Targets Profit - <b> 8% & 5%</b>
                </span>
                <span>
                  Hold Trade On Weekends - <b>Yes</b>
                </span>
                <span>
                  Price - <b>$475</b>
                </span>
              </div>

              {/* arrow */}
              <div className="compare-arrow hidden absolute  text-primary top-1/2 transform -translate-y-1/2 right-0 opacity-50">
                <img className="w-12 -rotate-90" src={arrow} alt="" />
              </div>
            </SwiperSlide>
            {/* item */}
            <SwiperSlide className="item relative z-10 bg-main-bg/90 sm:bg-main-bg/90  md:bg-[#2B2C30]/[17%] py-4 px-4 md:px-6 rounded-2xl border sm:border-none border-primary/10 max-w-[30rem]">
              {/* head */}
              <div className="head flex items-center font-Montserrat bg-primary/10 py-2 px-4 rounded-2xl text-xl font-bold h-[60px]">
                {compare}
              </div>
              {/* paras */}
              <div className="paras grid gap-3 py-8">
                <span>
                  Account Size & Model - <b>{values[compare][0]}</b>
                </span>
                <span>
                  Price - <b>{values[compare][1]}</b>
                </span>
                <span>
                  Maximum Drawdown - <b>{values[compare][2]}</b>
                </span>
                <span>
                  Payout Split - <b> {values[compare][3]}</b>
                </span>
                <span>
                  Minimum Trading Days - <b>{values[compare][4]}</b>
                </span>
                <span>
                  Time Period For Evaluation - <b>{values[compare][5]}</b>
                </span>
                <span>
                  Targets Profit - <b>{values[compare][6]}</b>
                </span>
                <span>
                  Hold Trade On Weekends - <b>{values[compare][7]}</b>
                </span>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
