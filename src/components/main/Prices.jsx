import PriceTable from "../../components/PriceTable";
import MotionX from "../../ui/MotionX";
import MotionY from "../../ui/MotionY";

export default function Prices() {
  return (
    <section className="prices relative pt-20 sm:pt-32">
      <div className="container relative">
        <div className="wrapper relative z-20 grid 2xl:px-36">
          <div className="heading flex flex-col sm:text-center">
            <MotionX delay={0.1}>
              <h2 className="text-2xl xs:text-[1.7rem] text-wht-gradient">
                Get Funded Now
              </h2>
            </MotionX>
            <MotionX delay={0.2}>
              <p className="mt-2 hidden sm:block">
                Choose your favorite account size, start trading, earn
                profit-splits and scale.
              </p>
              <p className="sm:hidden mt-2 ml-5 relative before:absolute before:w-2 before:h-2 before:bg-white before:left-[-1rem] before:rounded-full before:top-1/2 before:transform before:-translate-y-1/2">
                {" "}
                <b className="font-bold">Step 1:</b> Choose your balance:
              </p>
            </MotionX>
          </div>
          <div className="wrap sm:max-w-[70rem] sm:w-full sm:m-auto sm:pt-4">
            <MotionY>
              <PriceTable />
            </MotionY>
          </div>
        </div>
      </div>
    </section>
  );
}
