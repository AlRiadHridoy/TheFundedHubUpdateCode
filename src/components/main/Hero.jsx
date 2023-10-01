import { Link } from "react-router-dom";
import desktop from "../../assets/images/desktop.webp";
import desktopShadow from "../../assets/images/desktop-shadow.png";

import MotionX from "../../ui/MotionX";
export default function Hero() {
  return (
    <main className="main relative pt-16 md:pt-36">
      <div className="container relative">
        <div className="wrapper z-10 relative grid grid-cols-2 md:gap-12 sm:pt-12">
          {/* left content */}
          <div className="left-content hidden md:block w-full relative">
            <div className="desktop-img absolute inset-0 h-full w-full">
              <MotionX delay={0.5}>
                <img
                  className="absolute -top-[5rem] -right-[2rem] min-w-[40rem] globe-rotate z-0"
                  src={desktop}
                  alt="mobile"
                />
                {/* shadow */}
                <div className="shadow hidden absolute -bottom-[2.8rem] left-0 right-0 min-w-full">
                  <img src={desktopShadow} alt="shadow" />
                </div>
              </MotionX>
            </div>
          </div>
          {/* right content */}
          <div className="right-content flex flex-col sm:gap-5 relative z-1 mt-1.5">
            <MotionX
              delay={1}
              className="heading grid gap-2 justify-end items-center md:text-center font-medium text-wht-gradient"
            >
              <h1 className="xs:leading-[0.95] text-3xl exs:text-[2rem] xs:text-[2.4rem] sm:text-[3rem] md:text-[3.2rem] xl:text-[4rem] font-codeProLight tracking-tighter text-center w-full md:text-start text-wht-gradient z-10 relative hidden sm:inline-block">
                Becoming a
                <b className="font-codePro">
                  {" "}
                  full time <br /> trader
                </b>{" "}
                has never <br /> been easier.
              </h1>
            </MotionX>

            {/* mobile version img */}
            <div className="mbl-img pb-10 pt-6 flex justify-center sm:-mt-2.5 md:hidden relative">
              <img
                className="max-w-[30rem] w-full globe-rotate z-0 sm:-ml-10"
                src={desktop}
                alt="mobile"
              />
              {/* shadow */}
              <div className="shadow absolute bottom-0 left-0 right-0 min-w-full">
                <img src={desktopShadow} alt="shadow" />
              </div>
            </div>
            {/* mobile heading */}
            <div className="mobile-heading sm:hidden">
              <MotionX
                delay={1}
                className="heading grid gap-2 justify-end items-center md:text-center font-medium text-wht-gradient"
              >
                <h1 className="xs:leading-[0.95] text-3xl exs:text-[2rem] xs:text-[2.25rem] sm:text-[4rem] md:text-[4rem] xl:text-[4.4rem] font-codeProLight tracking-tighter w-full md:text-start text-wht-gradient z-10 relative pt-4 ">
                  Becoming a
                  <b className="font-codePro">
                    {" "}
                    full time <br /> trader
                  </b>{" "}
                  has never <br /> been easier.
                </h1>
              </MotionX>
            </div>

            <div className="botton-content font-Montserrat grid w-full gap-5 max-w-4xl md:text-left z-10 relative mt-4 md:mt-0">
              <MotionX delay={1.25}>
                <p className="font-light font-Montserrat  text-[1.05rem] max-w-[30rem]">
                  Customize your challenge, get funded with our capital and earn
                  up to 90% profit split plus a fixed monthly salary. We take
                  all the trading risks.
                </p>
              </MotionX>
            </div>
          </div>
        </div>
        <div className="wrap flex sm:justify-center mt-6 sm:mt-10 md:mt-24">
          <div className="btns grid sm:grid-cols-2 gap-4 sm:gap-6 justify-start items-end">
            <div className="btn flex font-extrabold flex-shrink-0 h-[55px] sm:h-[45px] w-[230px] sm:w-[265px]">
              <Link to="/login" className="glowing-btn">
                Get Funded Now
              </Link>
            </div>

            <div className="btn flex font-extrabold flex-shrink-0">
              <a
                target="__blank"
                href="https://discord.com/invite/96Mq2M2gdB"
                className="uppercase font-base flex justify-center items-center h-[55px] sm:h-[45px] w-[210px] sm:w-[240px] text-white border-primary rounded-3xl whitespace-nowrap font-Montserrat font-semibold text-[0.8rem] discglow-btn"
              >
                Join our Discord
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
