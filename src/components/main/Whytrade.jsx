import MotionX from "../../ui/MotionX";

export default function Whytrade() {
  return (
    <div className="content-bottom relative z-10 grid md:grid-cols-2 justify-center gap-16 md:gap-24 pt-16 sm:pt-20 md:pt-24 2xl:px-36">
      {/* left */}
      <div className="left relative z-10">
        <MotionX delay={0.1}>
          <h2 className="font-medium text-2xl xs:text-[1.7rem]  tracking-tight text-wht-gradient">
            Why trade with us?
          </h2>
        </MotionX>
        <MotionX delay={0.3}>
          {/* Paras */}
          <div className="paras grid gap-5 mt-2">
            <p>
              At TheFundedHub we care about your success providing you with
              state-of-the-art technologies, a great trading environment and
              scaling plan up to $600k in funding. You can trade overnight,
              overweek, all the news without restrictions and you can even use
              your Exprert Advisor!
            </p>
          </div>
        </MotionX>
      </div>

      {/* right */}
      <div className="right relative z-10">
        <MotionX delay={0.1}>
          <h2 className="font-medium text-2xl xs:text-[1.7rem] tracking-tight text-wht-gradient">
            Scale your account
          </h2>
        </MotionX>
        {/* Paras */}
        <MotionX delay={0.2}>
          <div className="paras grid gap-5 mt-2">
            <p>
              Achieve a profit of at least 10% within a 4 month period while
              funded and if at least 2 of those 4 months were profitable, we
              will increase your account size by 25% of the original account
              size, up to $600k.
            </p>
          </div>
        </MotionX>
      </div>
    </div>
  );
}
