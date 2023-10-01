{
  /* Mobile version */
}
<div className="mobile-content relative z-20 lg:hidden flex flex-wrap justify-start items-center mt-6">
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
    <p className="mt-12 ml-5 relative before:absolute before:w-2 before:h-2 before:bg-white before:left-[-1rem] before:rounded-full before:top-1/2 before:transform before:-translate-y-1/2">
      {" "}
      <b className="font-bold">Step 2:</b> {"  "}Customize your Platform:
    </p>
    <div className="wrap flex justify-center gap-3 mt-7">
      <div
        className={`img scale-100 hover:scale-105 transition-all duration-200 py-2 px-6 rounded-3xl bg-light/60 border hover:border-primary ${
          activeTrade === "meta-4" ? "border-primary" : "border-transparent "
        }`}
        onClick={() => setActiveTrade("meta-4")}
      >
        <img
          className="max-w-[7rem] w-full opacity-[0.87]"
          src={metaTraderFour}
          alt="scop-markets"
        />
      </div>
      <div
        className={`img scale-100 hover:scale-105 transition-all duration-200 py-2 px-6 rounded-3xl bg-light/60 border hover:border-primary ${
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
      className="flex flex-wrap gap-8 md:gap-10 justify-center items-center w-full px-3 xs:px-6 mt-[1.875rem] text-white"
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
            </div>

            <div className="item flex justify-between gap-6 items-center relative z-[9]">
              <span>
                Min. Trading
                <b className="font-bold"> Days</b>:
              </span>
              <span className="priceVal inline-flex justify-center items-center">
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
                  4444444444
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
                  4444444444
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
                <span className="w-[122px] flex justify-center">
                  4444444444
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
          4444444444
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
