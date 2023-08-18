import MotionX from "../../ui/MotionX";
import { discord, mobile } from "../../ui/images";

export default function Discord() {
  return (
    <section className="discord pt-24 relative">
      <div className="container relative z-10">
        {/* Desktop version */}
        <div className="wrapper relative hidden sm:flex gap-8 justify-evenly items-center md:px-6">
          <div className="left grid flex-col justify-center items-center sm:items-start gap-6">
            <div className="img flex justify-start items-center">
              <MotionX delay={0.1}>
                <img
                  className="sm:w-[20rem] md:w-[25rem] w-full opacity-80
                  "
                  src={discord}
                  alt="discord"
                />
              </MotionX>
            </div>

            <div className="w-full grid justify-center sm:justify-start gap-3">
              <MotionX delay={0.2}>
                <p className="max-w-[30rem] text-center sm:text-start">
                  Trading is certainly not easy! Interact with other traders and
                  discuss about the markets, strategies and stay up to date with
                  all the TFH official announcements.
                </p>
              </MotionX>
              <MotionX delay={0.3}>
                <div className="mt-2 btn uppercase flex justify-center sm:justify-start">
                  <a
                    target="__blank"
                    href="https://discord.gg/GVXNaVTr"
                    className="uppercase font-base flex h-full justify-center items-center py-3 px-10 text-black border-primary rounded-3xl whitespace-nowrap font-Montserrat font-semibold text-[0.8rem] grd-btn max-w-[228px]"
                  >
                    Join our Discord
                  </a>
                </div>
              </MotionX>
            </div>
          </div>

          {/* right */}
          <div className="right relative z-10">
            <MotionX delay={0.3}>
              <img
                className="max-w-[30rem] w-full relative z-10 opacity-80"
                src={mobile}
                alt=""
              />
            </MotionX>
          </div>
        </div>

        {/* Mobile version */}
        <div className="left relative grid sm:hidden flex-col justify-center items-center sm:items-start gap-3">
          <MotionX delay={0.1}>
            <div className="img flex justify-center items-center relative z-10">
              <img
                className="max-w-[20rem] w-full opacity-80"
                src={discord}
                alt="discord"
              />
            </div>
          </MotionX>

          <div className="w-full grid justify-center sm:justify-start gap-3 relative z-10">
            <MotionX delay={0.2}>
              <p className="max-w-[30rem] text-center sm:text-start font-Montserrat">
                Trading is certainly not easy! Interact with other traders and
                discuss about the markets, strategies and stay up to date with
                all the TFH official announcements.
              </p>
            </MotionX>
            <MotionX delay={0.3}>
              <div className="mt-2 btn uppercase flex justify-center items-center">
                <a
                  target="__blank"
                  href="https://discord.gg/GVXNaVTr"
                  className="uppercase max-w-[228px] h-[48px] font-Montserrat text-center text-xs font-bold grd-btn-wht rounded-3xl w-full text-main-bg flex justify-center items-center"
                >
                  Join our Discord
                </a>
              </div>
            </MotionX>
          </div>
        </div>
      </div>
    </section>
  );
}
