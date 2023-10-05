import { Link } from "react-router-dom";
import desktop from "../../assets/images/desktop.webp";
import { circle } from "../../ui/images";

import MotionX from "../../ui/MotionX";
export default function Hero() {
  return (
    <main className="main relative pt-16 md:pt-36 md:pb-14">
      <div className="container relative">
        <div className="wrapper z-10 relative grid lg:grid-cols-2 md:gap-12 sm:pt-12">
          {/* left content */}
          <div className="left-content hidden lg:block w-full relative">
            <div className="desktop-img absolute inset-0 h-full w-full">
              <MotionX delay={0.5}>
                <img
                  className="absolute -top-[5.5rem] -right-[2rem] min-w-[35rem] xl:min-w-[40rem] globe-rotate z-0"
                  src={desktop}
                  alt="mobile"
                />
              </MotionX>
            </div>
          </div>
          {/* right content */}
          <div className="right-content flex flex-col sm:gap-5 relative z-1 mt-1.5">
            <MotionX
              delay={0.75}
              right={true}
              className="heading grid gap-2 justify-end items-center lg:text-center font-medium text-wht-gradient"
            >
              <h1 className="xs:leading-[0.95] text-3xl exs:text-[1.8rem] xs:text-[2.1rem] sm:text-[3rem] md:text-[3.2rem] xl:text-[4rem] font-codeProLight tracking-tighter text-center w-full md:text-start z-10 relative mt-6 md:m-0">
                <b className="font-codePro">Empowering</b> Traders, One{" "}
                <b className="font-codePro">Step</b> at a Time.
              </h1>
            </MotionX>

            {/* mobile version img */}
            <div className="mbl-img flex justify-center sm:-mt-2.5 lg:hidden relative">
              <img
                className="max-w-[50rem] w-[120%]  sm:w-full globe-rotate z-0 sm:-ml-10"
                src={desktop}
                alt="mobile"
              />
            </div>
            <div className="botton-content font-Montserrat grid w-full gap-5 max-w-4xl md:text-left z-10 relative -mt-2">
              <MotionX right={true} delay={1}>
                <p className="font-light font-Montserrat  text-[1.05rem] max-w-[30rem]">
                  Customize your challenge, get funded with our capital and earn
                  up to 90% profit split plus a fixed monthly salary. We take
                  all the trading risks.
                </p>
              </MotionX>
            </div>
            <div className="wrap flex relative z-20 mt-6 sm:mt-1">
              <div className="btns grid sm:grid-cols-2 gap-6 sm:gap-6 sm:justify-start items-end">
                <div className="btn flex font-extrabold flex-shrink-0 h-[55px] sm:h-[45px] w-[230px] sm:w-[240px]">
                  <Link to="/login" className="glowing-btn">
                    Get Funded Now
                  </Link>
                </div>

                <div className="btn flex font-extrabold flex-shrink-0">
                  <a
                    target="__blank"
                    href="https://discord.gg/thefundedhub"
                    className="uppercase font-base flex justify-center items-center h-[55px] sm:h-[45px] w-[210px] sm:w-[230px] text-white border-primary rounded-3xl whitespace-nowrap font-Montserrat font-semibold text-[0.8rem] discglow-btn"
                  >
                    Join our Discord
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wrap hidden fflex sm:justify-center mt-6 sm:mt-10 md:mt-24 relative z-20">
          <div className="btns grid sm:grid-cols-2 gap-4 sm:gap-6 justify-start items-end">
            <div className="btn flex font-extrabold flex-shrink-0 h-[55px] sm:h-[45px] w-[230px] sm:w-[265px]">
              <Link to="/login" className="glowing-btn">
                Get Funded Now
              </Link>
            </div>

            <div className="btn flex font-extrabold flex-shrink-0">
              <a
                target="__blank"
                href="https://discord.gg/thefundedhub"
                className="uppercase font-base flex justify-center items-center h-[55px] sm:h-[45px] w-[210px] sm:w-[240px] text-white border-primary rounded-3xl whitespace-nowrap font-Montserrat font-semibold text-[0.8rem] discglow-btn"
              >
                Join our Discord
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* shadow */}
      <div className="circle-shadow sm:hidden absolute opacity-50 top-[1%] -right-[40%] w-full h-full min-w-[50rem]">
        <img src={circle} alt="circle-shadow" />
      </div>
    </main>
  );
}
