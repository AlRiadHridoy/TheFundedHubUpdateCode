import MotionX from "../../ui/MotionX";
import { discord } from "../../ui/images";
import x from "../../assets/images/x.png";
export default function Discord() {
  return (
    <section className="discord pt-24 relative">
      <div className="container relative z-10">
        {/* Desktop version */}
        <div className="wrapper relative flex flex-col md:flex-row gap-8 justify-center items-center md:px-6">
          <div className="wrap"></div>
          {/* left */}
          <div className="left grid flex-col justify-center items-center sm:items-start gap-6 max-w-[25rem] px-6 py-8 rounded-3xl bg-[#2B2C30]/[17%] h-full">
            <div className="img flex justify-center items-center">
              <MotionX delay={0.1}>
                <img
                  className="sm:w-[12rem] md:w-[15rem] w-full opacity-80
                  "
                  src={discord}
                  alt="discord"
                />
              </MotionX>
            </div>

            <div className="w-full grid justify-center gap-3">
              <MotionX delay={0.2}>
                <p className="max-w-[30rem] text-center">
                  Trading is certainly not easy! Interact with other traders and
                  discuss about the markets, strategies and stay up to date with
                  all the TFH official announcements.
                </p>
              </MotionX>
              <MotionX delay={0.3}>
                <div className="mt-8 btn uppercase flex justify-center">
                  <a
                    target="__blank"
                    href="https://discord.com/invite/96Mq2M2gdB"
                    className="uppercase font-base flex h-full justify-center items-center py-3 px-10 text-white border-primary rounded-3xl whitespace-nowrap font-Montserrat font-semibold text-[0.8rem]  max-w-[228px] discglow-btn"
                  >
                    Join our Discord
                  </a>
                </div>
              </MotionX>
            </div>
          </div>
          {/* right */}
          <div className="right grid flex-col justify-center items-center sm:items-start gap-6 max-w-[25rem] px-6 py-8 rounded-3xl bg-[#2B2C30]/[17%] h-full">
            <div className="img flex justify-center items-center h-[186px]">
              <MotionX delay={0.1}>
                <img
                  className="sm:w-[12rem] md:w-[15rem] w-full opacity-80
                  "
                  src={x}
                  alt="x"
                />
              </MotionX>
            </div>

            <div className="w-full grid justify-center gap-3">
              <MotionX delay={0.2}>
                <p className="max-w-[30rem] text-center">
                  Trading is certainly not easy! Interact with other traders and
                  discuss about the markets, strategies and stay up to date with
                  all the TFH official announcements.
                </p>
              </MotionX>
              <MotionX delay={0.3}>
                <div className="mt-8 btn uppercase flex justify-center">
                  <a
                    target="__blank"
                    href="https://twitter.com/TheFundedHub"
                    className="uppercase font-base flex h-full justify-center items-center py-3 px-10 text-white border-primary rounded-3xl whitespace-nowrap font-Montserrat font-semibold text-[0.8rem]  max-w-[228px] twtglow-btn"
                  >
                    Join us on Twitter
                  </a>
                </div>
              </MotionX>
            </div>
          </div>

          {/* right */}
          <div className="right relative z-10 hidden">
            <MotionX delay={0.3}>
              <img
                className="max-w-[30rem] w-full relative z-10"
                src={x}
                alt=""
              />
            </MotionX>
          </div>
        </div>
      </div>
    </section>
  );
}
