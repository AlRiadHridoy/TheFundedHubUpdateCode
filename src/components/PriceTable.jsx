import { useState, useEffect } from "react";
import axios from "axios";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper";
import { Link } from "react-router-dom";

// arrow svg
import { arrow } from "../ui/images";

// trader
import metaTraderFive from "../assets/images/meta-trader-5.webp";
import metaTraderFour from "../assets/images/meta-trader-4.webp";

export default function PriceTable({ clr }) {
  // choose balance
  const [chooseBalance, setChooseBalance] = useState("200000");
  const [tradingPeriod, setTradingPeriod] = useState("0-0");
  const [tradingDays, setTradingDays] = useState("0-0");
  const [dailyLoss, setDailyLoss] = useState("5");
  const [overallLoss, setOverallloss] = useState("12");
  const [profitTarget, setProfitTarget] = useState("10-5");

  // navigate to payment page
  const [totalPrice, setTotalPrice] = useState(0);
  const [activeTrade, setActiveTrade] = useState("meta-5");

  const priceValues = {
    5000: {
      maxDailyLossVal: ["$ 250 (5%)", "$ 200 (4%)"],
      maxOverallLossVal: ["$ 600 (12%)", "$ 500 (10%)", "$ 400 (8%)"],
      profitTargetVal: ["$ 500 (10%)", "$ 400 (8%)", "$ 250 (5%)"],
      monthlySalaryVal: ["$ 50.00/Month"],
    },
    10000: {
      maxDailyLossVal: ["$ 500 (5%)", "$ 400 (4%)"],
      maxOverallLossVal: ["$ 1,200 (12%)", "$ 1,000 (10%)", "$ 800 (8%)"],
      profitTargetVal: ["$ 1,000 (10%)", "$ 800 (8%)", "$ 500 (5%)"],
      monthlySalaryVal: ["$ 100.00/Month"],
    },
    25000: {
      maxDailyLossVal: ["$ 1,250 (5%)", "$ 1,000 (4%)"],
      maxOverallLossVal: ["$ 3,000 (12%)", "$ 2,500 (10%)", "$ 2,000 (8%)"],
      profitTargetVal: ["$ 2,500 (10%)", "$ 2,000 (8%)", "$ 1,250 (5%)"],
      monthlySalaryVal: ["$ 250.00/Month"],
    },
    50000: {
      maxDailyLossVal: ["$ 2,500 (5%)", "$ 2,000 (4%)"],
      maxOverallLossVal: ["$ 6,000 (12%)", "$ 5,000 (10%)", "$ 4,000 (8%)"],
      profitTargetVal: ["$ 5,000 (10%)", "$ 4,000 (8%)", "$ 2,500 (5%)"],
      monthlySalaryVal: ["$ 500.00/Month"],
    },
    100000: {
      maxDailyLossVal: ["$ 5,000 (5%)", "$ 4,000 (4%)"],
      maxOverallLossVal: ["$ 12,000 (12%)", "$ 10,000 (10%)", "$ 8,000 (8%)"],
      profitTargetVal: ["$ 10,000 (10%)", "$ 8,000 (8%)", "$ 5,000 (5%)"],
      monthlySalaryVal: ["$ 1000.00/Month"],
    },
    200000: {
      maxDailyLossVal: ["$ 10,000 (5%)", "$ 8,000 (4%)"],
      maxOverallLossVal: ["$ 24,000 (12%)", "$ 20,000 (10%)", "$ 16,000 (8%)"],
      profitTargetVal: ["$ 20,000 (10%)", "$ 16,000 (8%)", "$ 10,000 (5%)"],
      monthlySalaryVal: ["$ 2000.00/Month"],
    },
  };

  // Get Price values
  useEffect(() => {
    const url = `https://development-api.thefundedhub.com/v1/website/prices?phaseCount=2&startingCapital=${chooseBalance}&minimumTradingDays=${tradingDays}&maximumTradingDays=${tradingPeriod}&profitTargetPercentage=${profitTarget}&maximumDailyLossPercentage=${dailyLoss}&maximumTotalLossPercentage=${overallLoss}`;
    axios
      .get(url)
      .then((response) => {
        setTotalPrice(response.data.totalPrice);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, [
    chooseBalance,
    dailyLoss,
    overallLoss,
    profitTarget,
    tradingDays,
    tradingPeriod,
  ]);

  // purchage request
  const purchageRequest = () => {
    axios
      .post("https://development-api.thefundedhub.com/v1/website/purchases", {
        email: "johndoe@mail.com",
        firstName: "John",
        lastName: "doe",
        paymentProvider: "STRIPE",
        platform: "MT5",
        phaseCount: "2",
        startingCapital: chooseBalance,
        minimumTradingDays: tradingDays,
        maximumTradingDays: tradingPeriod,
        profitTargetPercentage: profitTarget,
        maximumDailyLossPercentage: dailyLoss,
        maximumTotalLossPercentage: overallLoss,
      })
      .then((response) => {
        window.location.replace(response.data.data.paymentUrl);
      });
  };

  return (
    <div id="price-table" className="price-table">
      {/* Desktop version */}
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
                    chooseBalance === "5000"
                      ? "border-primary"
                      : "border-primary/10"
                  }`}
                  onClick={() => setChooseBalance("5000")}
                >
                  $ 5,000
                </button>
              </div>

              <div className="price">
                <button
                  className={`w-[5.5rem] py-2.5 rounded-mds border-b-2 leading-[0.7] ${
                    chooseBalance === "10000"
                      ? "border-primary"
                      : "border-primary/10"
                  }`}
                  onClick={() => setChooseBalance("10000")}
                >
                  $ 10,000
                </button>
              </div>

              <div className="price">
                <button
                  className={`w-[5.5rem] py-2.5 rounded-mds border-b-2 leading-[0.7] ${
                    chooseBalance === "25000"
                      ? "border-primary"
                      : "border-primary/10"
                  }`}
                  onClick={() => setChooseBalance("25000")}
                >
                  $ 25,000
                </button>
              </div>

              <div className="price">
                <button
                  className={`w-[5.5rem] py-2.5 rounded-mds border-b-2 leading-[0.7] ${
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
          <div
            className={`right-inside p-5 rounded-3xl col-span-2 h-full ${clr}`}
          >
            <div className="heading">
              <h3 className="font-light">
                <b className="font-bold">Step 2: </b> Choose your Platform
              </h3>
            </div>
            {/* Tranders */}
            <div className="tranders flex gap-3 items-center w-full mt-2 relative z-30">
              <div
                className={`img scale-105 transition-all duration-200 py-2 px-6 rounded-3xl bg-light/30 relative group ${
                  activeTrade === "meta-4"
                    ? "border-primary"
                    : "border-transparent "
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
                  activeTrade === "meta-5"
                    ? "border-primary"
                    : "border-transparent "
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
            <span className="col-span-2 flex justify-center items-center">
              -
            </span>
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
            <span className="col-span-2 flex justify-center items-center">
              -
            </span>
          </div>

          <div className="item grid grid-cols-10 gap-6 px-4 py-3 border-b border-primary/10 text-center relative z-[5]">
            <span className="col-span-4 text-start mt-[0.13rem]">
              Leverage:
            </span>
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
        <div
          className={`bottom flex justify-between py-7 px-12 rounded-3xl ${clr}`}
        >
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
      </div>
      {/* Mobile version */}
      <div className="mobile-content relative z-20 lg:hidden flex flex-wrap justify-start items-center mt-2">
        <div className="top font-medium w-full">
          <div className="heading flex justify-center">
            {/* prices */}
            <div className="prices grid grid-cols-3 gap-2">
              <div className="price">
                <button
                  className={`w-full p-3 xs:px-5 rounded-mdg text-[0.95] ex:text-base transition-all duration-300 leading-[0.7] whitespace-nowrap border rounded-full bg-light/40 relative before:absolute before:w-full before:h-full before:inset-0 before:rounded-full font-Montserrat price-btn-shadow ${
                    chooseBalance === "5000"
                      ? "border-primary"
                      : "border-primary/10"
                  }`}
                  onClick={() => setChooseBalance("5000")}
                >
                  $ 5,000
                </button>
              </div>
              <div className="price">
                <button
                  className={`w-full p-3 xs:px-5 rounded-mdg text-[0.95] ex:text-base transition-all duration-300 leading-[0.7] whitespace-nowrap border rounded-full bg-light/40 relative before:absolute before:w-full before:h-full before:inset-0 before:rounded-full font-Montserrat price-btn-shadow ${
                    chooseBalance === "10000"
                      ? "border-primary"
                      : "border-primary/10"
                  }`}
                  onClick={() => setChooseBalance("10000")}
                >
                  $ 10,000
                </button>
              </div>

              <div className="price">
                <button
                  className={`w-full p-3 xs:px-5 rounded-mdg text-[0.95] ex:text-base transition-all duration-300 leading-[0.7] whitespace-nowrap border rounded-full bg-light/40 relative before:absolute before:w-full before:h-full before:inset-0 before:rounded-full font-Montserrat price-btn-shadow ${
                    chooseBalance === "25000"
                      ? "border-primary"
                      : "border-primary/10"
                  }`}
                  onClick={() => setChooseBalance("25000")}
                >
                  $ 25,000
                </button>
              </div>

              <div className="price">
                <button
                  className={`w-full p-3 xs:px-5 rounded-mdg text-[0.95] ex:text-base transition-all duration-300 leading-[0.7] whitespace-nowrap border rounded-full bg-light/40 relative before:absolute before:w-full before:h-full before:inset-0 before:rounded-full font-Montserrat price-btn-shadow ${
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
                  className={`w-full p-3 xs:px-5 rounded-mdg text-[0.95] ex:text-base transition-all duration-300 leading-[0.7] whitespace-nowrap border rounded-full bg-light/40 relative before:absolute before:w-full before:h-full before:inset-0 before:rounded-full font-Montserrat price-btn-shadow ${
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
                  className={`w-full p-3 xs:px-5 rounded-mdg text-[0.95] ex:text-base transition-all duration-300 leading-[0.7] whitespace-nowrap border rounded-full bg-light/40 relative before:absolute before:w-full before:h-full before:inset-0 before:rounded-full font-Montserrat price-btn-shadow ${
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
        {/* Tranders */}
        <div className="tranders grid items-center w-full relative z-30">
          <p className="mt-7 ml-5 relative before:absolute before:w-2 before:h-2 before:bg-white before:left-[-1rem] before:rounded-full before:top-1/2 before:transform before:-translate-y-1/2">
            {" "}
            <b className="font-bold">Step 2:</b> {"  "}Customize your Platform:
          </p>
          <div className="wrap flex justify-center gap-3 mt-4">
            <div
              className={`img scale-100 hover:scale-105 transition-all duration-200 py-2 px-6 rounded-3xl bg-light/30 relative price-btn-shadow  ${
                activeTrade === "meta-4"
                  ? "border-primary"
                  : "border-transparent "
              }`}
              // onClick={() => setActiveTrade("meta-4")}
            >
              <img
                className="max-w-[7rem] w-full opacity-[0.87]f opacity-60 price-btn-shadow"
                src={metaTraderFour}
                alt="scop-markets"
              />
              <div className="absolute transition-all duration-200  left-1/2 transform -translate-x-1/2 whitespace-nowrap -bottom-[1rem]">
                <h6 className="text-[0.65rem]">Available Soon!</h6>
              </div>
            </div>
            <div
              className={`img transition-all duration-200 py-2 px-6 rounded-3xl bg-light/60 border hover:border-primary price-btn-shadow ${
                activeTrade === "meta-5"
                  ? "border-primary"
                  : "border-transparent"
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
          <p className="mt-10 ml-5 relative before:absolute before:w-2 before:h-2 before:bg-white before:left-[-1rem] before:rounded-full before:top-1/2 before:transform before:-translate-y-1/2">
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
              <div className="phase1 pt-2 pb-6 item grid gap-3 border border-primary/20 rounded-3xl home-item-bg-clr h-full card-shadow">
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
                            <img
                              className="w-[0.9rem]"
                              src={arrow}
                              alt="arrow"
                            />
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
                      <span className="sm:w-[136px] flex justify-center">
                        1:100
                      </span>
                    </div>
                  </div>

                  <div className="item flex justify-between gap-6 items-center">
                    <span>
                      Monthly <b className="font-bold"> Salary </b>:
                    </span>
                    <div>
                      <span className="sm:w-[136px] flex justify-center">
                        -
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* slide */}
            <SwiperSlide>
              <div className="phase-2 pt-2 pb-6 item grid gap-3 border border-primary/20 rounded-3xl home-item-bg-clr h-full card-shadow">
                <div className="heading pb-3 mt-2 ">
                  <h3 className="px-5 text-center m-auto max-w-[10rem] border-b-2 border-primary/30 pb-3 font-codeProBold font-extrabold">
                    Phase 2
                  </h3>
                </div>
                <div className="items grid gap-6 px-4">
                  <div className="item flex justify-between gap-6 items-center">
                    <span>
                      Trading
                      <b className="font-bold"> Period</b>:
                    </span>
                    <div>
                      <div className="wrap flex gap-2 justify-center items-center relative z-[10]">
                        <div className="col-span-2 flex justify-center items-center sm:w-[136px]">
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
                    <span className="priceVal inline-flex justify-center items-center sm:w-[136px]">
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
                      <span className="priceVal sm:w-[136px] flex justify-center">
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
                      <span className="priceVal sm:w-[136px] flex justify-center">
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

                    <span className="priceVal sm:w-[136px] flex justify-center">
                      {priceValues[chooseBalance].profitTargetVal[2]}
                    </span>
                  </div>

                  <div className="item flex justify-between gap-6 items-center">
                    <span>Leverage:</span>
                    <div>
                      <span className="sm:w-[136px] flex justify-center">
                        1:100
                      </span>
                    </div>
                  </div>

                  <div className="item flex justify-between gap-6 items-center">
                    <span>
                      Monthly <b className="font-bold"> Salary </b>:
                    </span>
                    <div>
                      <span className="sm:w-[136px] flex justify-center">
                        -
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* slide */}
            <SwiperSlide>
              <div className="funded pt-2 pb-6 item grid gap-3 border border-primary/20 rounded-3xl home-item-bg-clr h-full card-shadow">
                <div className="heading pb-3 mt-2 ">
                  <h3 className="px-5 text-center m-auto max-w-[10rem] border-b-2 border-primary/30 pb-3 font-codeProBold font-extrabold">
                    Funded
                  </h3>
                </div>
                <div className="items grid gap-6 px-4">
                  <div className="item flex justify-between gap-6 items-center">
                    <span>
                      Trading
                      <b className="font-bold"> Period</b>:
                    </span>
                    <div>
                      <span className="w-[122px] flex justify-center">
                        Unlimited
                      </span>
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
                      <span className="w-[122px] flex justify-center">
                        1:100
                      </span>
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

        <div className="wrap mt-6 grid sm:grid-cols-2 justify-center items-center gap-4 w-full">
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
      </div>
    </div>
  );
}
