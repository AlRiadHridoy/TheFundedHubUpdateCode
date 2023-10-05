{
  /* Mobile version */
}

<div className="mobile-content relative z-20 lg:hidden flex flex-wrap justify-start items-center mt-2">
  <div className="top font-medium w-full">
    <div className="heading flex justify-center">
      {/* prices */}
      <div className="prices grid grid-cols-3 gap-2 xs:gap-4">
        <div className="price">
          <button
            className={`w-full py-3 px-2 xs:p-3 rounded-mdg text-[0.95] ex:text-base transition-all duration-300 leading-[0.7] whitespace-nowrap border-b-2 ${
              chooseBalance === "5000" ? "border-primary" : "border-primary/10"
            }`}
            onClick={() => setChooseBalance("5000")}
          >
            $ 5,000
          </button>
        </div>
        <div className="price">
          <button
            className={`w-full py-3 px-2 xs:p-3 rounded-mdg text-[0.95] ex:text-base transition-all duration-300 leading-[0.7] whitespace-nowrap border-b-2 ${
              chooseBalance === "10000" ? "border-primary" : "border-primary/10"
            }`}
            onClick={() => setChooseBalance("10000")}
          >
            $ 10,000
          </button>
        </div>

        <div className="price">
          <button
            className={`w-full py-3 px-2 xs:p-3 rounded-mdg text-[0.95] ex:text-base transition-all duration-300 leading-[0.7] whitespace-nowrap border-b-2 ${
              chooseBalance === "25000" ? "border-primary" : "border-primary/10"
            }`}
            onClick={() => setChooseBalance("25000")}
          >
            $ 25,000
          </button>
        </div>

        {/* price-wrapper */}
        <div className="price-wrapper col-span-full flex justify-center items-center gap-2 xs:gap-4">
          <div className="price">
            <button
              className={`w-full py-3 px-2 xs:p-3 rounded-mdg text-[0.95] ex:text-base transition-all duration-300 leading-[0.7] whitespace-nowrap border-b-2 ${
                chooseBalance === "50000"
                  ? "border-primary"
                  : "border-primary/10"
              }`}
              onClick={() => setChooseBalance("50000")}
            >
              $ 50,000
            </button>
          </div>

          <div className="price">
            <button
              className={`w-full py-3 px-2 xs:p-3 rounded-mdg text-[0.95] ex:text-base transition-all duration-300 leading-[0.7] whitespace-nowrap border-b-2 ${
                chooseBalance === "100000"
                  ? "border-primary"
                  : "border-primary/10"
              }`}
              onClick={() => setChooseBalance("100000")}
            >
              $ 100,000
            </button>
          </div>
          <div className="price">
            <button
              className={`w-full py-3 px-2 xs:p-3 rounded-mdg text-[0.95] ex:text-base transition-all duration-300 leading-[0.7] whitespace-nowrap border-b-2 ${
                chooseBalance === "200000"
                  ? "border-primary"
                  : "border-primary/10"
              }`}
              onClick={() => setChooseBalance("200000")}
            >
              $ 200,000
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Tranders */}
  <div className="tranders grid items-center w-full relative z-30">
    <p className="mt-7 ml-5 relative before:absolute before:w-2 before:h-2 before:bg-white before:left-[-1rem] before:rounded-full before:top-1/2 before:transform before:-translate-y-1/2">
      {" "}
      <b className="font-bold">Step 2:</b> {"  "}Customize your Platform:
    </p>
    <div className="wrap flex justify-center gap-3 mt-4">
      <div
        className={`img scale-100 hover:scale-105 transition-all duration-200 py-2 px-6 rounded-3xl bg-light/30 relative ${
          activeTrade === "meta-4" ? "border-primary" : "border-transparent "
        }`}
        // onClick={() => setActiveTrade("meta-4")}
      >
        <img
          className="max-w-[7rem] w-full opacity-[0.87]f opacity-60"
          src={metaTraderFour}
          alt="scop-markets"
        />
        <div className="absolute transition-all duration-200  left-1/2 transform -translate-x-1/2 whitespace-nowrap -bottom-[1rem]">
          <h6 className="text-[0.65rem]">Available Soon!</h6>
        </div>
      </div>
      <div
        className={`img transition-all duration-200 py-2 px-6 rounded-3xl bg-light/60 border hover:border-primary ${
          activeTrade === "meta-5" ? "border-primary" : "border-transparent "
        }`}
        onClick={() => setActiveTrade("meta-5")}
      >
        <img
          className="max-w-[7rem] w-full opacity-[0.87]"
          src={metaTraderFive}
          alt="meta-trader-5"
        />
      </div>
    </div>
  </div>
  <div className="step w-full">
    <p className="mt-12 ml-5 relative before:absolute before:w-2 before:h-2 before:bg-white before:left-[-1rem] before:rounded-full before:top-1/2 before:transform before:-translate-y-1/2">
      {" "}
      <b className="font-bold">Step 3:</b> {"  "}Customize your Challenge:
    </p>
  </div>
  <div className="flex flex-wrap gap-8 md:gap-12 justify-center items-center -mx-[1.5rem] px-[1.5rem] w-screen sm:w-[70vw] sm:m-auto relative z-20">
    {/* slider */}
    <Swiper
      navigation={true}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      modules={[Navigation]}
      spaceBetween={30}
      className="flex flex-wrap gap-8 md:gap-10 justify-center items-center w-full px-3 xs:px-6 mt-4 text-white"
    >
      {/* slide */}
      <SwiperSlide>
        <div className="phase1 pt-2 pb-6 item grid gap-3 border border-primary/30 rounded-3xl bg-main-bg/90 h-full">
          <div className="heading pb-3 mt-2 ">
            <h3 className="px-5 text-center m-auto max-w-[10rem] border-b-2 border-primary/30 pb-3 font-codeProBold font-extrabold">
              Phase 1
            </h3>
          </div>
          <div className="items grid gap-4 px-4">
            <div className="item flex justify-between gap-6 items-center">
              <span>
                Trading
                <b className="font-bold"> Period</b>:
              </span>
              <div>
                <div className="wrap flex gap-2 justify-center items-center relative z-[10]">
                  <div className="wrap relative">
                    <select
                      id="treading-period"
                      name="treading-period"
                      onChange={(e) => setTradingPeriod(e.target.value)}
                      className="price-table-select"
                    >
                      <option value="0-0">Unlimited</option>
                      <option value="45-45">45 Days</option>
                      <option value="30-60">30 Days</option>
                    </select>
                    {/* arrow */}
                    <div className="arrow absolute right-[0.55rem] top-1/2 transform -translate-y-1/2">
                      <img className="w-[0.9rem]" src={arrow} alt="arrow" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="item flex justify-between gap-6 items-center relative z-[9]">
              <span>
                Min. Trading
                <b className="font-bold"> Days</b>:
              </span>
              <div className="wrap relative">
                <select
                  id="treading-period"
                  name="treading-period"
                  onChange={(e) => setTradingDays(e.target.value)}
                  className="price-table-select"
                >
                  <option value="0-0">0 Days</option>
                  <option value="3-3">3 Days</option>
                  <option value="5-5">5 Days</option>
                </select>
                {/* arrow */}
                <div className="arrow absolute right-[0.55rem] top-1/2 transform -translate-y-1/2">
                  <img className="w-[0.9rem]" src={arrow} alt="arrow" />
                </div>
              </div>
            </div>

            <div className="item flex justify-between gap-6 items-center relative z-[8]">
              <span>
                Max
                <b className="font-bold"> Daily </b> Loss:
              </span>
              <div>
                <span className="priceVal inline-flex justify-center items-center relative">
                  <select
                    id="daily-loss"
                    name="daily-loss"
                    onChange={(e) => setDailyLoss(e.target.value)}
                    className="price-table-select"
                  >
                    <option value="5">
                      {priceValues[chooseBalance].maxDailyLossVal[0]}
                    </option>
                    <option value="4">
                      {priceValues[chooseBalance].maxDailyLossVal[1]}
                    </option>
                  </select>
                  {/* arrow */}
                  <div className="arrow absolute right-[0.55rem] top-1/2 transform -translate-y-1/2">
                    <img className="w-[0.9rem]" src={arrow} alt="arrow" />
                  </div>
                </span>
              </div>
            </div>

            <div className="item flex justify-between gap-6 items-center relative z-[7]">
              <span>
                Max
                <b className="font-bold"> Overall </b> Loss:
              </span>
              <div>
                <span className="priceVal inline-flex justify-center items-center relative">
                  <select
                    id="daily-loss"
                    name="daily-loss"
                    onChange={(e) => setOverallloss(e.target.value)}
                    className="price-table-select"
                  >
                    <option value="12">
                      {priceValues[chooseBalance].maxOverallLossVal[0]}
                    </option>
                    <option value="10">
                      {priceValues[chooseBalance].maxOverallLossVal[1]}
                    </option>
                    <option value="8">
                      {priceValues[chooseBalance].maxOverallLossVal[2]}
                    </option>
                  </select>
                  {/* arrow */}
                  <div className="arrow absolute right-[0.55rem] top-1/2 transform -translate-y-1/2">
                    <img className="w-[0.9rem]" src={arrow} alt="arrow" />
                  </div>
                </span>
              </div>
            </div>

            <div className="item flex justify-between gap-6 items-center relative z-[6]">
              <span>
                Profit <b className="font-bold"> Target </b>:
              </span>
              <div>
                <span className="priceVal inline-flex justify-center items-center relative">
                  <select
                    id="daily-loss"
                    name="daily-loss"
                    onChange={(e) => setProfitTarget(e.target.value)}
                    className="price-table-select"
                  >
                    <option value="10-5">
                      {priceValues[chooseBalance].profitTargetVal[0]}
                    </option>
                    <option value="8-5">
                      {priceValues[chooseBalance].profitTargetVal[1]}
                    </option>
                  </select>
                  {/* arrow */}
                  <div className="arrow absolute right-[0.55rem] top-1/2 transform -translate-y-1/2">
                    <img className="w-[0.9rem]" src={arrow} alt="arrow" />
                  </div>
                </span>
              </div>
            </div>

            <div className="item flex justify-between gap-6 items-center">
              <span>Leverage:</span>
              <div>
                <span className="w-[136px] flex justify-center">1:100</span>
              </div>
            </div>

            <div className="item flex justify-between gap-6 items-center">
              <span>
                Monthly <b className="font-bold"> Salary </b>:
              </span>
              <div>
                <span className="w-[136px] flex justify-center">-</span>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      {/* slide */}
      <SwiperSlide>
        <div className="phase2 pt-2 pb-6 item grid gap-3 border border-primary/30 rounded-3xl bg-main-bg/90 h-full">
          <div className="heading pb-3 mt-2 ">
            <h3 className="px-5 text-center m-auto max-w-[10rem] border-b-2 border-primary/30 pb-3 font-codeProBold font-extrabold">
              Phase 2
            </h3>
          </div>
          <div className="items grid gap-4 px-4">
            <div className="item flex justify-between gap-6 items-center">
              <span>
                Trading
                <b className="font-bold"> Period</b>:
              </span>
              <div>
                <div className="wrap flex gap-2 justify-center items-center relative z-[10]">
                  <div className="col-span-2 flex justify-center items-center w-[136px]">
                    <span className="priceVal">
                      {tradingPeriod === "0-0"
                        ? "Unlimited"
                        : tradingPeriod === "45-45"
                        ? "45 Days"
                        : "60 Days"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="item flex justify-between gap-6 items-center relative z-[9]">
              <span>
                Min. Trading
                <b className="font-bold"> Days</b>:
              </span>
              <span className="priceVal inline-flex justify-center items-center w-[136px]">
                {tradingDays === "0-0"
                  ? "0 Days"
                  : tradingDays === "3-3"
                  ? "3 Days"
                  : "5 Days"}
              </span>
            </div>

            <div className="item flex justify-between gap-6 items-center">
              <span>
                Max
                <b className="font-bold"> Daily </b> Loss:
              </span>
              <div>
                <span className="priceVal w-[136px] flex justify-center">
                  <span className="priceVal inline-flex justify-center items-center">
                    {dailyLoss === "5"
                      ? priceValues[chooseBalance].maxDailyLossVal[0]
                      : priceValues[chooseBalance].maxDailyLossVal[1]}
                  </span>
                </span>
              </div>
            </div>

            <div className="item flex justify-between gap-6 items-center">
              <span>
                Max
                <b className="font-bold"> Overall </b> Loss:
              </span>
              <div>
                <span className="priceVal w-[136px] flex justify-center">
                  <span>
                    {overallLoss === "12"
                      ? priceValues[chooseBalance].maxOverallLossVal[0]
                      : overallLoss === "10"
                      ? priceValues[chooseBalance].maxOverallLossVal[1]
                      : priceValues[chooseBalance].maxOverallLossVal[2]}
                  </span>
                </span>
              </div>
            </div>

            <div className="item flex justify-between gap-6 items-center">
              <span>
                Profit
                <b className="font-bold"> target </b>:
              </span>

              <span className="priceVal w-[136px] flex justify-center">
                {priceValues[chooseBalance].profitTargetVal[2]}
              </span>
            </div>

            <div className="item flex justify-between gap-6 items-center">
              <span>Leverage:</span>
              <div>
                <span className="w-[136px] flex justify-center">1:100</span>
              </div>
            </div>

            <div className="item flex justify-between gap-6 items-center">
              <span>
                Monthly <b className="font-bold"> Salary </b>:
              </span>
              <div>
                <span className="w-[136px] flex justify-center">-</span>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      {/* slide */}
      <SwiperSlide>
        <div className="funded pt-2 pb-6 item grid gap-3 border border-primary/30 rounded-3xl bg-main-bg/90 h-full">
          <div className="heading pb-3 mt-2 ">
            <h3 className="px-5 text-center m-auto max-w-[10rem] border-b-2 border-primary/30 pb-3 font-codeProBold font-extrabold">
              Funded
            </h3>
          </div>
          <div className="items grid gap-4 px-4">
            <div className="item flex justify-between gap-6 items-center">
              <span>
                Trading
                <b className="font-bold"> Period</b>:
              </span>
              <div>
                <span className="w-[122px] flex justify-center">Unlimited</span>
              </div>
            </div>

            <div className="item flex justify-between gap-6 items-center">
              <span>
                Min. Trading
                <b className="font-bold"> Days</b>:
              </span>
              <span className="w-[122px] flex justify-center">-</span>
            </div>

            <div className="item flex justify-between gap-6 items-center">
              <span>
                Max
                <b className="font-bold"> Daily </b> Loss:
              </span>
              <div>
                <span className="w-[122px] flex justify-center">
                  {dailyLoss === "5"
                    ? priceValues[chooseBalance].maxDailyLossVal[0]
                    : priceValues[chooseBalance].maxDailyLossVal[1]}
                </span>
              </div>
            </div>

            <div className="item flex justify-between gap-6 items-center">
              <span>
                Max
                <b className="font-bold"> Overall </b> Loss:
              </span>
              <div>
                <span className="w-[122px] flex justify-center">
                  <span>
                    {overallLoss === "12"
                      ? priceValues[chooseBalance].maxOverallLossVal[0]
                      : overallLoss === "10"
                      ? priceValues[chooseBalance].maxOverallLossVal[1]
                      : priceValues[chooseBalance].maxOverallLossVal[2]}
                  </span>
                </span>
              </div>
            </div>

            <div className="item flex justify-between gap-6 items-center">
              <span>
                Profit
                <b className="font-bold"> Target </b>:
              </span>
              <span className="w-[122px] flex justify-center">-</span>
            </div>

            <div className="item flex justify-between gap-6 items-center">
              <span>Leverage:</span>
              <div>
                <span className="w-[122px] flex justify-center">1:100</span>
              </div>
            </div>

            <div className="item flex justify-between gap-6 items-center">
              <span>
                Monthly <b className="font-bold"> Salary </b>:
              </span>
              <div>
                <span className="w-[122px] whitespace-nowrap flex justify-center">
                  {priceValues[chooseBalance].monthlySalaryVal[0]}
                </span>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>

  <div className="wrap  mt-10 grid sm:grid-cols-2 justify-center items-center gap-4 w-full">
    <div className="flex justify-center">
      <div className="refund flex items-center justify-center">
        <span className="!text-lg">Refundable fee: </span>
        <h4 className="text-[1.5rem] font-Montserrat font-extrabold ml-4">
          $ {totalPrice}
        </h4>
      </div>
    </div>

    <div className="btn flex w-full justify-center">
      <Link
        to="/login"
        className="font-Montserrat text-xs font-bold py-4 px-12  rounded-3xl glowing-btn uppercase"
      >
        Get Funded Now
      </Link>
    </div>
  </div>
</div>;

{
  /* Desktop version */
}
<div className="desktop-content relative z-[999] hidden lg:grid gap-2 w-full backdrop-blur-3xl rounded-2xl font-Montserrat">
  {/* Left side */}
  <div className="left grid grid-cols-5 items-center justify-start gap-2  font-medium">
    {/* left-inside */}
    <div
      className={`heading grid col-span-3 gap-5 p-5 h-full rounded-3xl ${clr}`}
    >
      <h3 className="font-light">
        <b className="font-bold">Step 1: </b> Choose your Balance
      </h3>
      <div className="prices flex flex-wrap gap-4">
        <div className="price">
          <button
            className={`w-[5.5rem] py-2.5 rounded-mds border-b-2 leading-[0.7] ${
              chooseBalance === "5000" ? "border-primary" : "border-primary/10"
            }`}
            onClick={() => setChooseBalance("5000")}
          >
            $ 5,000
          </button>
        </div>

        <div className="price">
          <button
            className={`w-[5.5rem] py-2.5 rounded-mds border-b-2 leading-[0.7] ${
              chooseBalance === "10000" ? "border-primary" : "border-primary/10"
            }`}
            onClick={() => setChooseBalance("10000")}
          >
            $ 10,000
          </button>
        </div>

        <div className="price">
          <button
            className={`w-[5.5rem] py-2.5 rounded-mds border-b-2 leading-[0.7] ${
              chooseBalance === "25000" ? "border-primary" : "border-primary/10"
            }`}
            onClick={() => setChooseBalance("25000")}
          >
            $ 25,000
          </button>
        </div>

        <div className="price">
          <button
            className={`w-[5.5rem] py-2.5 rounded-mds border-b-2 leading-[0.7] ${
              chooseBalance === "50000" ? "border-primary" : "border-primary/10"
            }`}
            onClick={() => setChooseBalance("50000")}
          >
            $ 50,000
          </button>
        </div>

        <div className="price">
          <button
            className={`w-[5.5rem] py-2.5 rounded-mds border-b-2 leading-[0.7] ${
              chooseBalance === "100000"
                ? "border-primary"
                : "border-primary/10"
            }`}
            onClick={() => setChooseBalance("100000")}
          >
            $ 100,000
          </button>
        </div>
        <div className="price">
          <button
            className={`w-[5.5rem] py-2.5 rounded-mds border-b-2 leading-[0.7] ${
              chooseBalance === "200000"
                ? "border-primary"
                : "border-primary/10"
            }`}
            onClick={() => setChooseBalance("200000")}
          >
            $ 200,000
          </button>
        </div>
      </div>
    </div>
    {/* right-inside */}
    <div className={`right-inside p-5 rounded-3xl col-span-2 h-full ${clr}`}>
      <div className="heading">
        <h3 className="font-light">
          <b className="font-bold">Step 2: </b> Choose your Platform
        </h3>
      </div>
      {/* Tranders */}
      <div className="tranders flex gap-3 items-center w-full mt-2 relative z-30">
        <div
          className={`img scale-105 transition-all duration-200 py-2 px-6 rounded-3xl bg-light/30 relative group ${
            activeTrade === "meta-4" ? "border-primary" : "border-transparent "
          }`}
          // onClick={() => setActiveTrade("meta-4")}
        >
          <img
            className="max-w-[7rem] w-full relative opacity-20"
            src={metaTraderFour}
            alt="scop-markets"
          />
          <div className="coming-soon absolute transition-all duration-200 opacity-0 group-hover:opacity-100 left-1/2 transform -translate-x-1/2 whitespace-nowrap -bottom-[1rem]">
            <h6 className="text-[0.65rem]">Available Soon!</h6>
          </div>
        </div>
        <div
          className={`img scale-100 hover:scale-105 transition-all duration-200 py-2 px-6 rounded-3xl bg-light/60 border hover:border-primary cursor-pointer ${
            activeTrade === "meta-5" ? "border-primary" : "border-transparent "
          }`}
          onClick={() => setActiveTrade("meta-5")}
        >
          <img
            className="max-w-[7rem] w-full opacity-[0.87]"
            src={metaTraderFive}
            alt="meta-trader-5"
          />
        </div>
      </div>
    </div>
  </div>

  {/* Table */}
  <div className={`grid rounded-3xl w-full p-7 ${clr}`}>
    <div className="heading mb-8">
      <h3>
        <b className="font-bold">Step 3:</b> Customize your Challenge
      </h3>
    </div>
    <div className="item grid grid-cols-10 gap-6 px-4 py-3 border-b border-primary/10 text-center relative z-[50]">
      <span className="col-span-4 text-start flex items-center gap-1">
        Trading <b className="font-bold"> Period </b>:
      </span>
      <div className="col-span-2 relative before:absolute before:font-bold before:content-['Phase_1'] flex justify-center before:-top-10 before:text-[0.9rem] whitespace-nowrap !font-normal">
        <div className="wrap relative">
          <select
            id="treading-period"
            name="treading-period"
            onChange={(e) => setTradingPeriod(e.target.value)}
            className="price-table-select"
          >
            <option value="0-0">Unlimited</option>
            <option value="45-45">45 Days</option>
            <option value="30-60">30 Days</option>
          </select>
          {/* arrow */}
          <div className="arrow absolute right-[0.55rem] top-1/2 transform -translate-y-1/2">
            <img className="w-[0.9rem]" src={arrow} alt="arrow" />
          </div>
        </div>
      </div>

      <div className="col-span-2 flex justify-center">
        <div className="relative before:absolute before:font-bold before:content-['Phase_2'] flex justify-center before:-top-10 before:text-[0.9rem] font-normal whitespace-nowrap">
          <div className="col-span-2 flex justify-center items-center">
            <span className="priceVal">
              {tradingPeriod === "0-0"
                ? "Unlimited"
                : tradingPeriod === "45-45"
                ? "45 Days"
                : "60 Days"}
            </span>
          </div>
        </div>
      </div>
      <span className="col-span-2 relative before:absolute before:font-bold before:content-['Funded'] before:-top-10 flex justify-center items-center">
        Unlimited
      </span>
    </div>

    <div className="item grid grid-cols-10 gap-6 px-4 py-3 border-b border-primary/10 text-center relative z-40">
      <span className="col-span-4 text-start flex items-center gap-1">
        Minimum Trading <b className="font-bold"> Days</b>:
      </span>
      <span className="col-span-2 flex justify-center ">
        <div className="wrap relative">
          <select
            id="treading-period"
            name="treading-period"
            onChange={(e) => setTradingDays(e.target.value)}
            className="price-table-select"
          >
            <option value="0-0">0 Days</option>
            <option value="3-3">3 Days</option>
            <option value="5-5">5 Days</option>
          </select>
          {/* arrow */}
          <div className="arrow absolute right-[0.55rem] top-1/2 transform -translate-y-1/2">
            <img className="w-[0.9rem]" src={arrow} alt="arrow" />
          </div>
        </div>
      </span>
      <span className="col-span-2 flex justify-center">
        <span className="priceVal inline-flex justify-center items-center">
          {tradingDays === "0-0"
            ? "0 Days"
            : tradingDays === "3-3"
            ? "3 Days"
            : "5 Days"}
        </span>
      </span>
      <span className="col-span-2 flex justify-center items-center">-</span>
    </div>

    <div className="item grid grid-cols-10 gap-6 px-4 py-3 border-b border-primary/10 text-center relative z-30">
      <span className="col-span-4 text-start mt-[0.13rem] flex items-center gap-1">
        Max <b className="font-bold"> Daily </b> Loss:
      </span>
      <div className="col-span-2 ">
        <span className="priceVal inline-flex justify-center items-center relative">
          <select
            id="daily-loss"
            name="daily-loss"
            onChange={(e) => setDailyLoss(e.target.value)}
            className="price-table-select"
          >
            <option value="5">
              {priceValues[chooseBalance].maxDailyLossVal[0]}
            </option>
            <option value="4">
              {priceValues[chooseBalance].maxDailyLossVal[1]}
            </option>
          </select>
          {/* arrow */}
          <div className="arrow absolute right-[0.55rem] top-1/2 transform -translate-y-1/2">
            <img className="w-[0.9rem]" src={arrow} alt="arrow" />
          </div>
        </span>
      </div>
      <div className="col-span-2 flex justify-center items-center">
        <span className="priceVal inline-flex justify-center items-center">
          {dailyLoss === "5"
            ? priceValues[chooseBalance].maxDailyLossVal[0]
            : priceValues[chooseBalance].maxDailyLossVal[1]}
        </span>
      </div>
      <div className="col-span-2 flex justify-center items-center gap-1">
        <span className="priceVal inline-flex justify-center items-center">
          {dailyLoss === "5"
            ? priceValues[chooseBalance].maxDailyLossVal[0]
            : priceValues[chooseBalance].maxDailyLossVal[1]}
        </span>
      </div>
    </div>

    <div className="item grid grid-cols-10 gap-6 px-4 py-3 border-b border-primary/10 text-center relative z-20 ">
      <span className="col-span-4 text-start pt-[0.1rem] flex items-center gap-1">
        Max <b className="font-bold">Overall </b> Loss:
      </span>
      <div className="col-span-2">
        <span className="priceVal inline-flex justify-center items-center relative">
          <select
            id="daily-loss"
            name="daily-loss"
            onChange={(e) => setOverallloss(e.target.value)}
            className="price-table-select"
          >
            <option value="12">
              {priceValues[chooseBalance].maxOverallLossVal[0]}
            </option>
            <option value="10">
              {priceValues[chooseBalance].maxOverallLossVal[1]}
            </option>
            <option value="8">
              {priceValues[chooseBalance].maxOverallLossVal[2]}
            </option>
          </select>
          {/* arrow */}
          <div className="arrow absolute right-[0.55rem] top-1/2 transform -translate-y-1/2">
            <img className="w-[0.9rem]" src={arrow} alt="arrow" />
          </div>
        </span>
      </div>
      <div className="col-span-2 flex justify-center items-center">
        <span className="priceVal inline-flex justify-center items-center">
          <span>
            {overallLoss === "12"
              ? priceValues[chooseBalance].maxOverallLossVal[0]
              : overallLoss === "10"
              ? priceValues[chooseBalance].maxOverallLossVal[1]
              : priceValues[chooseBalance].maxOverallLossVal[2]}
          </span>
        </span>
      </div>
      <div className="col-span-2 flex justify-center items-center gap-1">
        <span className="priceVal inline-flex justify-center items-center">
          {overallLoss === "12"
            ? priceValues[chooseBalance].maxOverallLossVal[0]
            : overallLoss === "10"
            ? priceValues[chooseBalance].maxOverallLossVal[1]
            : priceValues[chooseBalance].maxOverallLossVal[2]}
        </span>
      </div>
    </div>

    <div className="item grid grid-cols-10 gap-6 px-4 py-3 border-b border-primary/10 text-center relative z-10">
      <span className="col-span-4 text-start mt-[0.13rem] flex items-center gap-1">
        Profit <b className="font-bold">Target</b>:
      </span>
      <div className="col-span-2">
        <span className="priceVal inline-flex justify-center items-center relative">
          <select
            id="daily-loss"
            name="daily-loss"
            onChange={(e) => setProfitTarget(e.target.value)}
            className="price-table-select"
          >
            <option value="10-5">
              {priceValues[chooseBalance].profitTargetVal[0]}
            </option>
            <option value="8-5">
              {priceValues[chooseBalance].profitTargetVal[1]}
            </option>
          </select>
          {/* arrow */}
          <div className="arrow absolute right-[0.55rem] top-1/2 transform -translate-y-1/2">
            <img className="w-[0.9rem]" src={arrow} alt="arrow" />
          </div>
        </span>
      </div>

      <div className="col-span-2 flex justify-center items-center gap-1">
        <span className="priceVal inline-flex justify-center items-center">
          {priceValues[chooseBalance].profitTargetVal[2]}
        </span>
      </div>
      <span className="col-span-2 flex justify-center items-center">-</span>
    </div>

    <div className="item grid grid-cols-10 gap-6 px-4 py-3 border-b border-primary/10 text-center relative z-[5]">
      <span className="col-span-4 text-start mt-[0.13rem]">Leverage:</span>
      <div className="col-span-2">
        <span className="priceVal inline-flex justify-center items-center">
          1:100
        </span>
      </div>
      <div className="col-span-2">
        <span className="priceVal inline-flex justify-center items-center">
          1:100
        </span>
      </div>
      <div className="col-span-2">
        <span className="priceVal inline-flex justify-center items-center">
          1:100
        </span>
      </div>
    </div>
    <div className="item grid grid-cols-10 gap-6 px-4 py-3 border-b border-primary/10 text-center relative z-[0]">
      <span className="col-span-4 text-start mt-[0.13rem]">
        Monthly <b className="font-bold">Salary</b>:
      </span>
      <div className="col-span-2">
        <span className="priceVal inline-flex justify-center items-center">
          -
        </span>
      </div>
      <div className="col-span-2">
        <span className="priceVal inline-flex justify-center items-center">
          -
        </span>
      </div>
      <div className="col-span-2">
        <span className="priceVal inline-flex justify-center items-center">
          {priceValues[chooseBalance].monthlySalaryVal[0]}
        </span>
      </div>
    </div>
  </div>

  {/* bottom */}
  <div className={`bottom flex justify-between py-7 px-12 rounded-3xl ${clr}`}>
    <div className="wrap grid gap-1">
      <div className="refund flex items-center">
        <b className="text-lg font-codePro">Refundable fee:</b>
        <h4 className="text-[1.4rem] font-extrabold ml-4 w-28">
          $ {totalPrice}
        </h4>
      </div>
      {/* text */}
      <div className=" font-Montserrat text-sm">
        Or pay in 4 installments from{" "}
        <span className="font-bold">${totalPrice / 4}</span> / Month
      </div>
    </div>

    <div className="btn flex justify-start items-center">
      <div onClick={purchageRequest} className="glowing-btn">
        Get Funded Now
      </div>
    </div>
  </div>
</div>;


{
    "idToken": {
        "jwtToken": "eyJraWQiOiJLaE5ja3NOZUttY2x5S0RaQU9WS2ZZMDl5S0RPeFNMOThRN3Qrb0VGclBVPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJlMzQ0NzgyMi0xMGYxLTcwNjEtN2QwNC0xNzc1YjkwYjYwNTMiLCJjb2duaXRvOmdyb3VwcyI6WyJVU0VSIl0sImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtY2VudHJhbC0xLmFtYXpvbmF3cy5jb21cL2V1LWNlbnRyYWwtMV9GdHBpN0k1VHUiLCJwaG9uZV9udW1iZXJfdmVyaWZpZWQiOmZhbHNlLCJjb2duaXRvOnVzZXJuYW1lIjoiZ2FyYTMyYUBnbWFpbC5jb20iLCJnaXZlbl9uYW1lIjoiZmlyc3QiLCJvcmlnaW5fanRpIjoiOTlkZDU1MWEtMzRmMi00NDU4LWI1Y2YtNTcyMWI5NDg3MGZkIiwiYXVkIjoiNDRybm4zZWo5YjA0cjM1Y21idW01amgzdHUiLCJldmVudF9pZCI6IjZjYTNmYWMwLTI5ZDYtNGQ0My04M2FhLTUyNDQ0YjY5YzliOSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjk2MjQxMjkzLCJleHAiOjE2OTYyNDQ4OTMsImlhdCI6MTY5NjI0MTI5MywiZmFtaWx5X25hbWUiOiJsYXN0IiwianRpIjoiNjc2ZmI5MDMtM2ZiYi00ODAzLWJhMjktYjk0NjFjM2EyM2VlIiwiZW1haWwiOiJnYXJhMzJhQGdtYWlsLmNvbSJ9.Yy4ct8SRZtoK9UZg_rZ5Oj2XkBKJlk30_CfqNP1iUi8yDh2HAzoRXsZcOKm5wZJPdMGOZBGz1VLsMReGTRtsSHKC0L0g6xED-4nqwgd3Rxs6AQzL1JlhqkvaRXJWBJQkP5NOe4PnifT87eHYEIpAWaTJKUvEGt7cOd23LoStfORnScpvTJVzD-l2TUYoFJ5Bl1iqE_QscIYZW8DYr-86CfNy6iyw-EfaB9uegPlsdme3Xs-ZvnsaU1_6LKWSALpAszrtDnym2bxMr5M9dQPZibR2ibtcLkNNCEMW0EDhBFtY75F5GNC0jbaXInmkwMpmbEuwx_sIraQvMJXHN3pdJg",
        "payload": {
            "sub": "e3447822-10f1-7061-7d04-1775b90b6053",
            "cognito:groups": [
                "USER"
            ],
            "email_verified": true,
            "iss": "https://cognito-idp.eu-central-1.amazonaws.com/eu-central-1_Ftpi7I5Tu",
            "phone_number_verified": false,
            "cognito:username": "gara32a@gmail.com",
            "given_name": "first",
            "origin_jti": "99dd551a-34f2-4458-b5cf-5721b94870fd",
            "aud": "44rnn3ej9b04r35cmbum5jh3tu",
            "event_id": "6ca3fac0-29d6-4d43-83aa-52444b69c9b9",
            "token_use": "id",
            "auth_time": 1696241293,
            "exp": 1696244893,
            "iat": 1696241293,
            "family_name": "last",
            "jti": "676fb903-3fbb-4803-ba29-b9461c3a23ee",
            "email": "gara32a@gmail.com"
        }
    },
    "refreshToken": {
        "token": "eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.kOf53ehHJphVTjnWjQPgB_uO_9dcPp8j3B16Pqca1nCgVbQ9QEN4dL23u3IgSdRQ1bY6DOpxeE4XufUAKuA6LcwMZxRSIBPOsaWkwUyQexBOQORI7u6BRZoOSg9X4ORyj4MuQ4HyhKWlToUP2PUvS-X00JQ-VEGlXRnOEosU1XHxSJzDNsVS9cAktA3AoKt9vIhkM8DZFSGIY89r_1_Kvtmcaoq63LZJR3yWJS_ahPE6U819zE2dTagWZN1o7f85_qnOK-O0sUxnybQJ3Kz7l1ou5cDsUXiHD1W379fssIzJ6u_bfodHYFeUJFXhTUkbBzsCqtSTmEjQdQLRmRzvKQ.fjZprWy_Yw4Ru9PE.LM9iZOnBag9IGFCEUZxWd5GDZCp1rou2IOzQd-D98TWCz72RjMDiLEjsBbGa-rL8yGV-GB54YfQzNt2efcaEHsFwMV67I2TMStcw7xVK6jC-fdeOspcktgqD_gtYp8q-MhyKh0TybUMWgeXl-9k5sV8qHzK5yR83tfFPA5v4DGN2y8R1MMf1idsoUhpbDpy5rkXUn3e_140OTIC5jOqoXkv70fXpsiUt4lqrinfriK2vYfrr_qr-czNnwOUicK9NBdjUev6C3OTONkl5025oT8oYg5JoYvCSbRT7gezgn5oosCOGKpua9UK-Z2k4DCbWzlD7blEKdJ6IL5ZBLJgbiGzEEN2fO_cBIWbwqWT77P14M4gxYsVNcjHJLw0M7J3c2thhv1TuyViFGmdhviOHR8wwWWMKvI9Llsyj3PV5KfJIYl682FygiirTtE0BYZbY8lDxE6B9QaPaXE2j7DW6rNv6PEC8p17W8hSJHWjxcipQEauX6owBpjcXXUnvMEp2Y4v9WSTJCelPg58gbNoSWgVcajoXhJqdu9_tbYQUJo_6gRbcAcxlH7Pnc2kwDCw5ug-NhflqLs3zNY20maKiMPBLfMBS_MuX84qc0qJASEIlFfrjNanZEHTInDwFR4QYomVg0IA8aUdhKYH6ywYBjPNrBPNhZ5dpGkVQmBcQlEAbP-9RXm1sIjTtG777Q39LSrcZmtmVXucG-RQ7NbSDh6mIZVWNQSqTzw5hPFrEaXEisPTsMfjw5VX5s7oxVY6BJXG64XM-TucBSEv-wc9Ar1ILhY_n1u6IX1TbwgQMYs1UBobJyVtUb43IorC-AqklKOV_91EKOUMy2poSBOu9xiSKfLGnE4yVC47RSku1Oq0sxFCnC9IMoElCbFf6FBPAsdvZgy9uXrIo90jMvwYZ9s6RH5r8c4oDCPnNoyyBGd_3Gql3j3buxOFHdkUrmUcteUagU7FJKX1d8RD2aYvSP6pigPKMN5NxggOYJus8i7OADDagKdrUrluh3Y-wxqMM28TJtQ7SFij_XgccG20zwScVhjIxPyoAlz3kuDJw959HizqbonW39b68HmW0Zor5NCmcJc2U1Y90OBB89JsQBTN9UmPoEKXfHVNKrQPzEy6XOrDOPMD0pmVHtf1WAkJQKZr_DGB-LXH2WMtaIYIggKbPtUtmfIFDINYvWJ9PnmBSsNLz8lvHcY3tJ9xElZtOC_GG2iRhKHLYaCP75qBVPVtqWAiaPrRB9N9CFq4P9aOqEk288wdY_7CcK_vY5RmIjbR_-hDtKCAWYRUEyt8826HPBBGQh2pSbmg.l_J6toBYtft7HJHNkezxJw"
    },
    "accessToken": {
        "jwtToken": "eyJraWQiOiJHaTlJbVVYVVRHWEdaaFNYdTJpMzdkOVVtMjBZMTBrVGRjSzZvSTdFNWs0PSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJlMzQ0NzgyMi0xMGYxLTcwNjEtN2QwNC0xNzc1YjkwYjYwNTMiLCJjb2duaXRvOmdyb3VwcyI6WyJVU0VSIl0sImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS1jZW50cmFsLTEuYW1hem9uYXdzLmNvbVwvZXUtY2VudHJhbC0xX0Z0cGk3STVUdSIsImNsaWVudF9pZCI6IjQ0cm5uM2VqOWIwNHIzNWNtYnVtNWpoM3R1Iiwib3JpZ2luX2p0aSI6Ijk5ZGQ1NTFhLTM0ZjItNDQ1OC1iNWNmLTU3MjFiOTQ4NzBmZCIsImV2ZW50X2lkIjoiNmNhM2ZhYzAtMjlkNi00ZDQzLTgzYWEtNTI0NDRiNjljOWI5IiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJhd3MuY29nbml0by5zaWduaW4udXNlci5hZG1pbiIsImF1dGhfdGltZSI6MTY5NjI0MTI5MywiZXhwIjoxNjk2MjQ0ODkzLCJpYXQiOjE2OTYyNDEyOTMsImp0aSI6IjIzOTlkMzg5LTY0YmMtNDAxOC04YjgzLThhZmI2YTkzMDk2ZiIsInVzZXJuYW1lIjoiZ2FyYTMyYUBnbWFpbC5jb20ifQ.nclpJ8Y6Cbo0TUPQBBXpvqTzEHij50BG3xjuEAHh1YGvRcLkFnN7aua832yBad9iecIRRFKyXSBj7P0Gtl6-4ZUB-tlb3EYV12APui1R4wnkEmtWVCvhyvB67FXvRvXjRomlAOet-5o4VQwfFQXrFQk92u79loi5YrJrusmSseXFdAsseCIJDtSt7GaIKwGnWa21Wj1aWeHDqQuO6GN5x4i-g8lroKqFUJJ6IFtyHN8aiaPX5UbiNGw0Qb3_gyseuS6b931YCyebeiCF37XNg3QzWhxGgn35BXvYVX014KnY_qjk0JL3RpzR7uxO5oCwDAlCN6BfdhMQdpo9vlK1DA",
        "payload": {
            "sub": "e3447822-10f1-7061-7d04-1775b90b6053",
            "cognito:groups": [
                "USER"
            ],
            "iss": "https://cognito-idp.eu-central-1.amazonaws.com/eu-central-1_Ftpi7I5Tu",
            "client_id": "44rnn3ej9b04r35cmbum5jh3tu",
            "origin_jti": "99dd551a-34f2-4458-b5cf-5721b94870fd",
            "event_id": "6ca3fac0-29d6-4d43-83aa-52444b69c9b9",
            "token_use": "access",
            "scope": "aws.cognito.signin.user.admin",
            "auth_time": 1696241293,
            "exp": 1696244893,
            "iat": 1696241293,
            "jti": "2399d389-64bc-4018-8b83-8afb6a93096f",
            "username": "gara32a@gmail.com"
        }
    },
    "clockDrift": 0
}

{
    "username": "gara32a@gmail.com",
    "pool": {
        "userPoolId": "eu-central-1_Ftpi7I5Tu",
        "clientId": "44rnn3ej9b04r35cmbum5jh3tu",
        "client": {
            "endpoint": "https://cognito-idp.eu-central-1.amazonaws.com/",
            "fetchOptions": {}
        },
        "advancedSecurityDataCollectionFlag": true,
        "storage": {
            "CognitoIdentityServiceProvider.44rnn3ej9b04r35cmbum5jh3tu.gara32a@gmail.com.accessToken": "eyJraWQiOiJHaTlJbVVYVVRHWEdaaFNYdTJpMzdkOVVtMjBZMTBrVGRjSzZvSTdFNWs0PSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJlMzQ0NzgyMi0xMGYxLTcwNjEtN2QwNC0xNzc1YjkwYjYwNTMiLCJjb2duaXRvOmdyb3VwcyI6WyJVU0VSIl0sImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS1jZW50cmFsLTEuYW1hem9uYXdzLmNvbVwvZXUtY2VudHJhbC0xX0Z0cGk3STVUdSIsImNsaWVudF9pZCI6IjQ0cm5uM2VqOWIwNHIzNWNtYnVtNWpoM3R1Iiwib3JpZ2luX2p0aSI6IjAxY2RjNDA0LWUxNWYtNGIxYi04MTE1LTAzMzFjODU0NjMzZiIsImV2ZW50X2lkIjoiMjc4MDJmZDMtNzNmYy00N2Q2LWFjNGUtMDNmMGIwYTc2NTQ5IiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJhd3MuY29nbml0by5zaWduaW4udXNlci5hZG1pbiIsImF1dGhfdGltZSI6MTY5NjI0MzQ0OSwiZXhwIjoxNjk2MjQ3MDQ5LCJpYXQiOjE2OTYyNDM0NDksImp0aSI6Ijg0NzA4MjBjLWM3YzgtNGNhYi1hNzU4LWJmOWM5NzEwMWJlNiIsInVzZXJuYW1lIjoiZ2FyYTMyYUBnbWFpbC5jb20ifQ.N1clRXn03JymNvkEAlM5UNwnPwkE7GvxtZL3mn080T0w1yKUgY_28rolLCm8Nlhlaq0EEdQXKANtNsn-MW8qux9W7rJmYCR0XwOwWt7hFuCISMTCm4y1n8hgZL904t1Iyjk6k0YApFOBZLBx3oo0LOMhwE0CK49LprmaCaAK9KHl-DCUtEowjHrM8_WXtN8kCI2l5wfiTvnfcAe71_G1u1iw44hqxmdNQyZxMnjh-D7dWatPDI_jfKapD4Rzzzs-lfDeZiH2dFt2QekhobjBpm_qpykxslWEo0U6VjdEqjT0FSV51b4lWMnJE5AICC2ZKiwjmfIgFs_eBIYNmOOQHg",
            "theme": "light",
            "CognitoIdentityServiceProvider.44rnn3ej9b04r35cmbum5jh3tu.gara32a@gmail.com.idToken": "eyJraWQiOiJLaE5ja3NOZUttY2x5S0RaQU9WS2ZZMDl5S0RPeFNMOThRN3Qrb0VGclBVPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJlMzQ0NzgyMi0xMGYxLTcwNjEtN2QwNC0xNzc1YjkwYjYwNTMiLCJjb2duaXRvOmdyb3VwcyI6WyJVU0VSIl0sImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtY2VudHJhbC0xLmFtYXpvbmF3cy5jb21cL2V1LWNlbnRyYWwtMV9GdHBpN0k1VHUiLCJwaG9uZV9udW1iZXJfdmVyaWZpZWQiOmZhbHNlLCJjb2duaXRvOnVzZXJuYW1lIjoiZ2FyYTMyYUBnbWFpbC5jb20iLCJnaXZlbl9uYW1lIjoiZmlyc3QiLCJvcmlnaW5fanRpIjoiMDFjZGM0MDQtZTE1Zi00YjFiLTgxMTUtMDMzMWM4NTQ2MzNmIiwiYXVkIjoiNDRybm4zZWo5YjA0cjM1Y21idW01amgzdHUiLCJldmVudF9pZCI6IjI3ODAyZmQzLTczZmMtNDdkNi1hYzRlLTAzZjBiMGE3NjU0OSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjk2MjQzNDQ5LCJleHAiOjE2OTYyNDcwNDksImlhdCI6MTY5NjI0MzQ0OSwiZmFtaWx5X25hbWUiOiJsYXN0IiwianRpIjoiMDkyN2U2MmUtNTllOS00NWM1LWIyZTAtNDJkYWUzZTE3ZjNhIiwiZW1haWwiOiJnYXJhMzJhQGdtYWlsLmNvbSJ9.tZ-oxlbt512cFjUWVSVPJg0iPg-AuReDcu7hNbJBAyXw_PvG2dkE782Tz85OtibUePGEZ9eqdgUd7pG_ug3NeSWEmitFyC68q2jnjvIieN6dYzeEYzI1PV6cHWOshD1LfJOMkX5yzWs588KsjdQOnOpWiHJljlJ8M9UwrYP9dlvEhLHCM6qMEupEJFLIIrOQ7fgHDunmXSefY_4STQCQ-8D0BKnpdDLIZew-UY4cUXDqitd_ZcQebjEn9y-BAV5u6EvuLv44JfFW7H8QmQUsz6ep6Pmz5lgM7EzzQojys9Z5XV5qOYXGbkkoUAVlWrXCmkRD4G5ROJsTCBstRn4eDw",
            "friends_with_mate": "true",
            "CognitoIdentityServiceProvider.44rnn3ej9b04r35cmbum5jh3tu.gara32a@gmail.com.clockDrift": "-1",
            "CognitoIdentityServiceProvider.44rnn3ej9b04r35cmbum5jh3tu.LastAuthUser": "gara32a@gmail.com",
            "CognitoIdentityServiceProvider.44rnn3ej9b04r35cmbum5jh3tu.gara32a@gmail.com.refreshToken": "eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.1CCoZ_rqH5RQY53TXK40aKdvGy1JtvjHNlOHw1zrkc-s1KxS8urGEK_o4kPlLZm4HdvTZntt3sG4JcjE0kOyXnkpowtyGVQNK1cbF0GsFL7v-uQwoDu4JWjvP8gngHlvAw3nSCgvhfPX1o-uPBZQiVUC98PP6emry4nVF8xU8UroFIeoDjmJHpeKwD_BM4naGAoTiL1aupEseMNvU5v5FIcpvoSnTXqoUQvDn7k999_l7o9sCBkmpaloXc6p3fsFw7zY-yUXsC2Cu2-bDrFOZRrafXzglAP16vGY3sqhIkZENBk7_XFB_5zOUolksD1bgPx13xfjuOGaJUInaPcx6A.vd8BsXVzArj8APX9.EujY921IIWaqILJTBFn08IrfFsmeXEbMKBRHmBC9WIY-_NO_UqmjbRzl9myePPIyXeHK5VQrL9NzZcFaLZVN6G9e4WDn9a7B9ZWTSWDkRZ5G5u9IA3fLbLwTLQ1Qg6o3ZSGMPM5xkoViz3eVe1rDEXOwTY-fX7vfzCpAoXTydQP1LiH4EHPl2LcIofXhsM0A7AqZK5gOB2PVjLD7VOqNY_5DORpfHrYV0mc9jLEFz6Qf7Dc2RaeUZ6FGxOYzIEIZfOZdxmusLYxjsAb2xZHRju-LSq70lhUlBc5rFpT0ii3HWI5_ZthAylKzkV3-kpmAOq1AyterUJ_sRWCsfN1yO1nyVkLkCotPwsMJ7ZLuFE9IkyM1cOeKhk0irwnl5y2NeiCnDHlyaBjfnKXV84YVU6TCKVJkkbLO20btB2ILKpDOx1X-uZGg0wfrqfvHl_Cu_fWQi4Y9C7tLVtUe-ybdDS9l2L-cesuWfOtewF_HHvmX1eSanZSRCaPfDU-gfzmYhWX01ryF3TwihLX0y27FmqRYoTku975lIC1auxO1t1lJVdU2hDFqWwzjVXMeANHDZIktPWfqbYsH597LnbbG6ZbXJ_3HnrKfzPJKvF3PimmNsrfqNC28A2rUOjvoHZyAF_X3Z_EcoANaCVbfLdnFYSUb72EouGpKVle5CjtDdls2jkqdlxaRwuQqCXWsNOGb4_q4S5iCaouY7JKWr9nD406xlVrljDPbTCtwSbIaHO-ibApN1niEVll_POkSVohoFAQy81dYWB8tRVVqS4sP_PhLAxHvTGSq1gm9I-uHgH2AyBNW7bJ4Y8WvZqSux9Dje3EvQMdc7G9w0RCpBrU9VkJU1iuRaJ5RKhqRHYcrLcVvu8yrdC4KWXcrj8zEnJwlEOXsK6IvUz1KZHw75nY6i9ls1x2kQZjDvCtQJwzsLYHM0z6pUft9GYcMcMMfzD1dln_HP8BQMZPW73TiNGe4Fvz1g-IDP9_ieAsbAU50n2TQKKnF0xIU6MIbg4_ttm4BI1q6J0sSHbSrNmeSKYEbiMSq0x-qqWjaVX1g8zmqLPk9s5T3DLA4LPiD2R1ApDFDdhRzhJt9HCiKi3cPp_50ROPB2_-WaLKWEkJGj7nBDArreqXTB8lxkKAyx3plFKCMRe9E5IqNv_JFeTyGRlmfda19nOfkchKlwviIXPoPvNqhcsRyKi3v6sOL0mSqfRVqqKnmaOIZOu9L8i6sCQ1Bnwa2nq7n0gX0PQZ0APOLtsUqeRFcIImh6szzKZAZTN4raQuDW4YXBgkksMkRGpxlw6-RE8uhrJvM0BU.vHU8adnWthnmAtANcP0zig",
            "vueuse-color-scheme": "auto"
        }
    },
    "Session": null,
    "client": {
        "endpoint": "https://cognito-idp.eu-central-1.amazonaws.com/",
        "fetchOptions": {}
    },
    "signInUserSession": null,
    "authenticationFlowType": "USER_SRP_AUTH",
    "storage": {
        "CognitoIdentityServiceProvider.44rnn3ej9b04r35cmbum5jh3tu.gara32a@gmail.com.accessToken": "eyJraWQiOiJHaTlJbVVYVVRHWEdaaFNYdTJpMzdkOVVtMjBZMTBrVGRjSzZvSTdFNWs0PSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJlMzQ0NzgyMi0xMGYxLTcwNjEtN2QwNC0xNzc1YjkwYjYwNTMiLCJjb2duaXRvOmdyb3VwcyI6WyJVU0VSIl0sImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS1jZW50cmFsLTEuYW1hem9uYXdzLmNvbVwvZXUtY2VudHJhbC0xX0Z0cGk3STVUdSIsImNsaWVudF9pZCI6IjQ0cm5uM2VqOWIwNHIzNWNtYnVtNWpoM3R1Iiwib3JpZ2luX2p0aSI6IjAxY2RjNDA0LWUxNWYtNGIxYi04MTE1LTAzMzFjODU0NjMzZiIsImV2ZW50X2lkIjoiMjc4MDJmZDMtNzNmYy00N2Q2LWFjNGUtMDNmMGIwYTc2NTQ5IiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJhd3MuY29nbml0by5zaWduaW4udXNlci5hZG1pbiIsImF1dGhfdGltZSI6MTY5NjI0MzQ0OSwiZXhwIjoxNjk2MjQ3MDQ5LCJpYXQiOjE2OTYyNDM0NDksImp0aSI6Ijg0NzA4MjBjLWM3YzgtNGNhYi1hNzU4LWJmOWM5NzEwMWJlNiIsInVzZXJuYW1lIjoiZ2FyYTMyYUBnbWFpbC5jb20ifQ.N1clRXn03JymNvkEAlM5UNwnPwkE7GvxtZL3mn080T0w1yKUgY_28rolLCm8Nlhlaq0EEdQXKANtNsn-MW8qux9W7rJmYCR0XwOwWt7hFuCISMTCm4y1n8hgZL904t1Iyjk6k0YApFOBZLBx3oo0LOMhwE0CK49LprmaCaAK9KHl-DCUtEowjHrM8_WXtN8kCI2l5wfiTvnfcAe71_G1u1iw44hqxmdNQyZxMnjh-D7dWatPDI_jfKapD4Rzzzs-lfDeZiH2dFt2QekhobjBpm_qpykxslWEo0U6VjdEqjT0FSV51b4lWMnJE5AICC2ZKiwjmfIgFs_eBIYNmOOQHg",
        "theme": "light",
        "CognitoIdentityServiceProvider.44rnn3ej9b04r35cmbum5jh3tu.gara32a@gmail.com.idToken": "eyJraWQiOiJLaE5ja3NOZUttY2x5S0RaQU9WS2ZZMDl5S0RPeFNMOThRN3Qrb0VGclBVPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJlMzQ0NzgyMi0xMGYxLTcwNjEtN2QwNC0xNzc1YjkwYjYwNTMiLCJjb2duaXRvOmdyb3VwcyI6WyJVU0VSIl0sImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtY2VudHJhbC0xLmFtYXpvbmF3cy5jb21cL2V1LWNlbnRyYWwtMV9GdHBpN0k1VHUiLCJwaG9uZV9udW1iZXJfdmVyaWZpZWQiOmZhbHNlLCJjb2duaXRvOnVzZXJuYW1lIjoiZ2FyYTMyYUBnbWFpbC5jb20iLCJnaXZlbl9uYW1lIjoiZmlyc3QiLCJvcmlnaW5fanRpIjoiMDFjZGM0MDQtZTE1Zi00YjFiLTgxMTUtMDMzMWM4NTQ2MzNmIiwiYXVkIjoiNDRybm4zZWo5YjA0cjM1Y21idW01amgzdHUiLCJldmVudF9pZCI6IjI3ODAyZmQzLTczZmMtNDdkNi1hYzRlLTAzZjBiMGE3NjU0OSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjk2MjQzNDQ5LCJleHAiOjE2OTYyNDcwNDksImlhdCI6MTY5NjI0MzQ0OSwiZmFtaWx5X25hbWUiOiJsYXN0IiwianRpIjoiMDkyN2U2MmUtNTllOS00NWM1LWIyZTAtNDJkYWUzZTE3ZjNhIiwiZW1haWwiOiJnYXJhMzJhQGdtYWlsLmNvbSJ9.tZ-oxlbt512cFjUWVSVPJg0iPg-AuReDcu7hNbJBAyXw_PvG2dkE782Tz85OtibUePGEZ9eqdgUd7pG_ug3NeSWEmitFyC68q2jnjvIieN6dYzeEYzI1PV6cHWOshD1LfJOMkX5yzWs588KsjdQOnOpWiHJljlJ8M9UwrYP9dlvEhLHCM6qMEupEJFLIIrOQ7fgHDunmXSefY_4STQCQ-8D0BKnpdDLIZew-UY4cUXDqitd_ZcQebjEn9y-BAV5u6EvuLv44JfFW7H8QmQUsz6ep6Pmz5lgM7EzzQojys9Z5XV5qOYXGbkkoUAVlWrXCmkRD4G5ROJsTCBstRn4eDw",
        "friends_with_mate": "true",
        "CognitoIdentityServiceProvider.44rnn3ej9b04r35cmbum5jh3tu.gara32a@gmail.com.clockDrift": "-1",
        "CognitoIdentityServiceProvider.44rnn3ej9b04r35cmbum5jh3tu.LastAuthUser": "gara32a@gmail.com",
        "CognitoIdentityServiceProvider.44rnn3ej9b04r35cmbum5jh3tu.gara32a@gmail.com.refreshToken": "eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.1CCoZ_rqH5RQY53TXK40aKdvGy1JtvjHNlOHw1zrkc-s1KxS8urGEK_o4kPlLZm4HdvTZntt3sG4JcjE0kOyXnkpowtyGVQNK1cbF0GsFL7v-uQwoDu4JWjvP8gngHlvAw3nSCgvhfPX1o-uPBZQiVUC98PP6emry4nVF8xU8UroFIeoDjmJHpeKwD_BM4naGAoTiL1aupEseMNvU5v5FIcpvoSnTXqoUQvDn7k999_l7o9sCBkmpaloXc6p3fsFw7zY-yUXsC2Cu2-bDrFOZRrafXzglAP16vGY3sqhIkZENBk7_XFB_5zOUolksD1bgPx13xfjuOGaJUInaPcx6A.vd8BsXVzArj8APX9.EujY921IIWaqILJTBFn08IrfFsmeXEbMKBRHmBC9WIY-_NO_UqmjbRzl9myePPIyXeHK5VQrL9NzZcFaLZVN6G9e4WDn9a7B9ZWTSWDkRZ5G5u9IA3fLbLwTLQ1Qg6o3ZSGMPM5xkoViz3eVe1rDEXOwTY-fX7vfzCpAoXTydQP1LiH4EHPl2LcIofXhsM0A7AqZK5gOB2PVjLD7VOqNY_5DORpfHrYV0mc9jLEFz6Qf7Dc2RaeUZ6FGxOYzIEIZfOZdxmusLYxjsAb2xZHRju-LSq70lhUlBc5rFpT0ii3HWI5_ZthAylKzkV3-kpmAOq1AyterUJ_sRWCsfN1yO1nyVkLkCotPwsMJ7ZLuFE9IkyM1cOeKhk0irwnl5y2NeiCnDHlyaBjfnKXV84YVU6TCKVJkkbLO20btB2ILKpDOx1X-uZGg0wfrqfvHl_Cu_fWQi4Y9C7tLVtUe-ybdDS9l2L-cesuWfOtewF_HHvmX1eSanZSRCaPfDU-gfzmYhWX01ryF3TwihLX0y27FmqRYoTku975lIC1auxO1t1lJVdU2hDFqWwzjVXMeANHDZIktPWfqbYsH597LnbbG6ZbXJ_3HnrKfzPJKvF3PimmNsrfqNC28A2rUOjvoHZyAF_X3Z_EcoANaCVbfLdnFYSUb72EouGpKVle5CjtDdls2jkqdlxaRwuQqCXWsNOGb4_q4S5iCaouY7JKWr9nD406xlVrljDPbTCtwSbIaHO-ibApN1niEVll_POkSVohoFAQy81dYWB8tRVVqS4sP_PhLAxHvTGSq1gm9I-uHgH2AyBNW7bJ4Y8WvZqSux9Dje3EvQMdc7G9w0RCpBrU9VkJU1iuRaJ5RKhqRHYcrLcVvu8yrdC4KWXcrj8zEnJwlEOXsK6IvUz1KZHw75nY6i9ls1x2kQZjDvCtQJwzsLYHM0z6pUft9GYcMcMMfzD1dln_HP8BQMZPW73TiNGe4Fvz1g-IDP9_ieAsbAU50n2TQKKnF0xIU6MIbg4_ttm4BI1q6J0sSHbSrNmeSKYEbiMSq0x-qqWjaVX1g8zmqLPk9s5T3DLA4LPiD2R1ApDFDdhRzhJt9HCiKi3cPp_50ROPB2_-WaLKWEkJGj7nBDArreqXTB8lxkKAyx3plFKCMRe9E5IqNv_JFeTyGRlmfda19nOfkchKlwviIXPoPvNqhcsRyKi3v6sOL0mSqfRVqqKnmaOIZOu9L8i6sCQ1Bnwa2nq7n0gX0PQZ0APOLtsUqeRFcIImh6szzKZAZTN4raQuDW4YXBgkksMkRGpxlw6-RE8uhrJvM0BU.vHU8adnWthnmAtANcP0zig",
        "vueuse-color-scheme": "auto"
    },
    "keyPrefix": "CognitoIdentityServiceProvider.44rnn3ej9b04r35cmbum5jh3tu",
    "userDataKey": "CognitoIdentityServiceProvider.44rnn3ej9b04r35cmbum5jh3tu.gara32a@gmail.com.userData"
}