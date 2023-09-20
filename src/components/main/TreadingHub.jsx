import { dashboard } from "../../ui/images";
import MotionX from "../../ui/MotionX";
import MotionY from "../../ui/MotionY";

export default function TreadingHub() {
  return (
    <section className="dashboard relative pt-20 sm:pt-28">
      <div className="container">
        <div className="wrapper relative z-20 grid gap-8 sm:gap-12 justify-center items-center">
          <div className="heading flex flex-col justify-center sm:items-center md:text-center">
            <MotionX delay={0.1}>
              <h2 className="text-2xl xs:text-[1.7rem] tracking-tight text-wht-gradient font-medium">
                Personal trading Hub
              </h2>
            </MotionX>
            <MotionX delay={0.2}>
              <p className="max-w-[55rem] mt-2">
                To easily track your performance, you will have access to your
                own personal trading Hub to monitor your trading data and stats
                in real-time. This helps you to avoid breaching the trading
                rules during the challenge and while you’re a TFH funded trader.
              </p>
            </MotionX>
          </div>

          <MotionY delay={0.4} cls="dashboard-img z-10 relative">
            <img
              className="md:max-w-[90%] m-auto rounded-2xl"
              src={dashboard}
              alt="dashboard"
            />
          </MotionY>
        </div>
      </div>
    </section>
  );
}
