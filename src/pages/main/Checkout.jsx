import { useEffect, useState } from "react";
import Navbar from "../../components/main/Navbar";
import Footer from "../../components/main/Footer";
import { tick } from "../../ui/images";
import { Link } from "react-router-dom";
import { Country, State } from "country-state-city";
import { RxCross1 } from "react-icons/rx";
import { FaRegUserCircle } from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";
import googlePay from "../../assets/images/google-pay.png";
import applePay from "../../assets/images/apple-pay.png";
import btcPay from "../../assets/images/btc-pay.png";

export default function Checkout() {
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState("John");
  const [email, setEmail] = useState("info@mailaddress.com");

  const [getCountry, setGetCountry] = useState("");
  const [getStates, setGetStates] = useState([]);
  // current year
  const year = new Date().getFullYear();
  const years = [year];

  for (let i = 1; i < 18; i++) {
    years.push(year + i);
  }

  const allCountry = Country.getAllCountries();

  useEffect(() => {
    setGetStates([]);
    allCountry.forEach((country) => {
      if (country.name === getCountry) {
        setGetStates(State.getStatesOfCountry(country.isoCode));
      }
    });
  }, [getCountry]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setModalOpen(true);
  };
  return (
    <>
      <Navbar />
      <section className="py-32 lg:py-44 relative purple-shadown">
        <div className="container z-10 relative">
          <div className="wrapper flex justify-center items-center">
            <div className="heading">
              <h1 className="text-3xl xs:text-[2rem] xs:leading-[0.95] md:text-[2.2rem] font-codePro tracking-tighter">
                CheckOut
              </h1>
            </div>
          </div>

          <div className="checkout-form grid gap-8">
            {/* Top */}
            <div className="top mt-10">
              <div className="head flex flex-col xs:flex-row justify-between items-center gap-5 bg-main-bg/50 py-4 px-6 rounded-xl">
                <div className="left">
                  <span className="text-[0.9rem] xs:text-base font-codePro">
                    1 X Challenge $100,000 <br /> Evaluation Program
                  </span>
                </div>
                {/* right */}
                <div className="right">
                  <span className="price sm:text-xl text-[0.9rem] xs:text-base  font-codePro">
                    $ 527,00
                  </span>
                </div>
              </div>
            </div>

            {/* Forms */}
            <form
              onSubmit={(e) => handleSubmit(e)}
              className="forms grid gap-10 md:gap-0 md:grid-cols-12 bg-main-bg/50 p-6 md:p-8 lg:p-10  rounded-2xl"
            >
              {/* left form */}
              <div className="md:col-span-6 grid  gap-8 justify-start items-center">
                <div className="payment grid justify-center gap-2 w-full">
                  <div className="head flex justify-center">
                    <h4>Express Payment</h4>
                  </div>

                  {/* methods */}
                  <div className="methonds flex justify-center items-center gap-2">
                    {/* method */}
                    <div className="method">
                      <img
                        className="max-w-[6rem] w-full cursor-pointer"
                        src={applePay}
                        alt="pay-with-apple"
                      />
                    </div>
                    {/* method */}
                    <div className="method">
                      <img
                        className="max-w-[6rem] w-full cursor-pointer"
                        src={googlePay}
                        alt="pay-with-google"
                      />
                    </div>
                    {/* method */}
                    <div className="method">
                      <img
                        className="max-w-[6rem] w-full cursor-pointer"
                        src={btcPay}
                        alt="pay-with-btc"
                      />
                    </div>
                  </div>
                </div>
                {/* billings */}
                <div className="billings mt-3">
                  <div className="head">
                    <h2 className="text-lg xs:text-[1.2rem] xs:leading-[0.95] md:text-[1.35rem] font-codePro tracking-tighter">
                      Billing Details
                    </h2>

                    <div className="inputs grid gap-6 mt-4 sm:mt-8">
                      {/* name */}
                      <div className="name grid xs:grid-cols-2 gap-4">
                        {/* fname */}
                        <div className="fname">
                          <input
                            name="fname"
                            className="name w-full focus:outline-primary/70 bg-main-bg/20 border-none outline outline-2 outline-primary/30 py-2 px-4  placeholder:text-[0.9rem] rounded-xl transition-all duration-200"
                            type="text"
                            placeholder="Name"
                            required
                          />
                        </div>
                        {/* suname */}
                        <div className="surname">
                          <input
                            name="surname"
                            onChange={(e) => setName(e.target.value)}
                            className="name w-full focus:outline-primary/70 bg-main-bg/20 border-none outline outline-2 outline-primary/30 py-2 px-4  placeholder:text-[0.9rem] rounded-xl transition-all duration-200"
                            type="text"
                            placeholder="Surname"
                            required
                          />
                        </div>
                      </div>
                      {/* email */}
                      <div className="email">
                        <input
                          name="email"
                          onChange={(e) => setEmail(e.target.value)}
                          className="name w-full focus:outline-primary/70 bg-main-bg/20 border-none outline outline-2 outline-primary/30 py-2 px-4  placeholder:text-[0.9rem] rounded-xl transition-all duration-200"
                          type="email"
                          placeholder="Email"
                          required
                        />
                      </div>
                      {/* address */}
                      <div className="address">
                        <input
                          name="address"
                          className="name w-full focus:outline-primary/70 bg-main-bg/20 border-none outline outline-2 outline-primary/30 py-2 px-4  placeholder:text-[0.9rem] rounded-xl transition-all duration-200"
                          type="text"
                          placeholder="Address"
                          required
                        />
                      </div>
                      {/* city */}
                      <div className="city">
                        <input
                          name="city"
                          className="name w-full focus:outline-primary/70 bg-main-bg/20 border-none outline outline-2 outline-primary/30 py-2 px-4  placeholder:text-[0.9rem] rounded-xl transition-all duration-200"
                          type="text"
                          placeholder="City"
                          required
                        />
                      </div>

                      <div className="country-info flex flex-col sm:flex-row gap-4">
                        {/* country */}
                        <select
                          id="country"
                          name="country"
                          onChange={(e) => setGetCountry(e.target.value)}
                          className="form-control w-full focus:outline-primary/70 border-none outline outline-2 outline-primary/30 py-2 px-4 transition-all duration-200 bg-light/20 rounded-xl"
                        >
                          <option defaultChecked>Country</option>
                          {allCountry.map((country, index) => {
                            return (
                              <option key={index} value={country.name}>
                                {country.name}
                              </option>
                            );
                          })}
                        </select>
                        {/* state */}
                        <select
                          id="state"
                          name="state"
                          disabled={!getStates.length}
                          className="form-control w-full focus:outline-primary/70 border-none outline outline-2 outline-primary/30 py-2 px-4 transition-all duration-200 bg-main-bg/20 rounded-xl"
                        >
                          <option defaultChecked>State</option>
                          {getStates.map((state, index) => {
                            return (
                              <option key={index} value={state.name}>
                                {state.name}
                              </option>
                            );
                          })}
                        </select>

                        {/* zip */}
                        <input
                          name="zip"
                          className="name w-full focus:outline-primary/70 bg-main-bg/20 border-none outline outline-2 outline-primary/30 py-2 px-4  placeholder:text-[0.9rem] rounded-xl transition-all duration-200"
                          type="number"
                          placeholder="ZIP"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* line */}
              <div className="wrapper col-span-1 flex justify-center">
                <div className="line h-[3px] md:h-full bg-primary/10 w-full md:w-[0.1rem] rounded-full"></div>
              </div>
              {/* right form */}
              <div className="md:col-span-5">
                <div className="head">
                  <h3 className="text-xl">Card Details</h3>
                </div>

                {/* inputs */}
                <div className="inputs grid gap-6 mt-8">
                  {/* name holder */}
                  <div className="name-holder">
                    <input
                      name="Cardholder"
                      className="Cardholder w-full focus:outline-primary/70 bg-main-bg/20 border-none outline outline-2 outline-primary/30 py-2 px-4  placeholder:text-[0.9rem] rounded-xl transition-all duration-200"
                      type="text"
                      placeholder="Cardholder Name"
                      required
                    />
                  </div>
                  {/* card number */}
                  <div className="card-number">
                    <input
                      name="card-number"
                      className="name w-full focus:outline-primary/70 bg-main-bg/20 border-none outline outline-2 outline-primary/30 py-2 px-4  placeholder:text-[0.9rem] rounded-xl transition-all duration-200"
                      type="text"
                      placeholder="8593 - 8292 - 0493 - 9483"
                      required
                    />
                  </div>
                  {/* date $ code */}
                  <div className="date-code grid grid-cols-3 sm:grid-cols-4 gap-4 mt-2">
                    {/* month */}
                    <select
                      id="month"
                      name="month"
                      className="month w-full focus:outline-primary/70 bg-main-bg/20 border-none outline outline-2 outline-primary/30 py-2 px-4  placeholder:text-[0.9rem] rounded-xl transition-all duration-200"
                      required
                    >
                      <option defaultValue="month">Month</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                    </select>

                    {/* Year */}
                    <select
                      id="year"
                      name="year"
                      className="month w-full focus:outline-primary/70 bg-main-bg/20 border-none outline outline-2 outline-primary/30 py-2 px-4  placeholder:text-[0.9rem] rounded-xl transition-all duration-200"
                      required
                    >
                      <option defaultValue="Year">Year</option>
                      {years.map((y) => {
                        return (
                          <option key={y} value={y}>
                            {y}
                          </option>
                        );
                      })}
                    </select>

                    {/* space */}
                    <div className="hidden sm:inline-block"></div>

                    {/* code */}
                    <div className="code">
                      <input
                        name="month"
                        className="month w-full focus:outline-primary/70 bg-main-bg/20 border-none outline outline-2 outline-primary/30 py-2 px-4  placeholder:text-[0.9rem] rounded-xl transition-all duration-200 placeholder:text-center "
                        type="text"
                        placeholder="CVC"
                        required
                      />
                    </div>
                  </div>

                  {/* coupon code */}
                  <div className="coupon-code mt-10 relative">
                    {/* coupon */}
                    <input
                      name="coupon"
                      className="coupon w-full focus:outline-primary/70 bg-main-bg/20 border-none outline outline-2 outline-primary/30 py-2 px-4  placeholder:text-[0.9rem] rounded-xl transition-all duration-200"
                      type="text"
                      placeholder="Coupon Code"
                      required
                    />
                    {/* arrow */}
                    <div className="arrow">
                      <HiArrowNarrowRight className="text-primary/50 text-[1.6rem] absolute top-1/2 transform -translate-y-1/2 right-4" />
                    </div>
                  </div>

                  {/* fees */}
                  <div className="fees flex gap-3 text-base sm:text-[1.2rem] md:text-[1.3rem]">
                    <h4 className="title">Refundable Fee:</h4>
                    <h4 className="price"> $ 527,00</h4>
                  </div>

                  <div className="btn flex">
                    <div className="wrap grd-btn-wht rounded-3xl">
                      <button
                        type="submit"
                        className=" flex px-6 py-2 rounded-3xl"
                      >
                        Confirm and Proceed
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Modal */}
        <div
          className={`modal fixed inset-0 z-[99] flex justify-center items-center overflow-hidden ${
            modalOpen ? "visible opacity-100" : "invisible opacity-0"
          }`}
        >
          <div
            className={`bg absolute inset-0 w-full h-full ${
              modalOpen
                ? "opacity-100 backdrop-blur-xl "
                : "opacity-0 backdrop-blur-none"
            }`}
            onClick={() => setModalOpen(false)}
          ></div>

          <div
            className={`box relative m-6 min-h-[300px] max-w-[600px] w-full text-main dark:text-white bg-light-gray dark:bg-main-bg transition-all duration-300 rounded-3xl z-[999] px-6 ${
              modalOpen ? "visible opacity-100" : "invisible opacity-0"
            }`}
          >
            {/* Tick */}
            <div className="tick pt-5 sm:pt-8 pb-5 sm:pb-8 md:pb-12 flex justify-center items-center">
              <img
                className={`max-w-[3.5rem] exs:max-w-[4rem] sm:max-w-[5rem] md:max-w-[5.5rem] transition-all duration-500 opacity-50 ${
                  modalOpen ? "scale-100" : "scale-0"
                }`}
                src={tick}
                alt="tick"
              />
            </div>

            {/* content */}
            <div className="content grid justify-center items-center text-center gap-4 sm:gap-6 md:gap-8">
              <h2 className="name text-xl exs:text-2xl sm:text-3xl md:text-4xl">
                Welcome to the Hub, {name}!
              </h2>
              {/* text */}
              <em className="text-base font-Montserrat">
                You are in our Hub and you&apos;ll receive soon your Metatrader
                5 Credentials via Email
              </em>

              {/* Registerd email */}
              <div className="registerd rounded-xl mb-6  py-2 px-5 w-full max-w-[30rem] m-auto">
                <div className="usermail text-white rounded-lg border-2 border-primary/40 px-4 py-3 flex justify-center items-center gap-4">
                  <FaRegUserCircle className="h-6 w-6" />
                  <div className="mail">
                    <em className="font-Montserrat break-all text-[0.9rem] xs:text-base">
                      {email}
                    </em>
                  </div>
                </div>
                {/* goto home */}
                <div className="mt-6 grid gap-0 text-main dark:text-white">
                  <Link to="/" className="underline font-Montserrat">
                    Back to HomePage
                  </Link>
                </div>
              </div>
            </div>
            {/* cross */}
            <div className="cross" onClick={() => setModalOpen(false)}>
              <RxCross1 className="absolute cursor-pointer text-xl sm:text-2xl text-dim-gray right-4 sm:right-6 md:right-8 top-4 sm:top-6 md:top-8" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
