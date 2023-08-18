import aud from "../../assets/images/dashboard/flug/AUD.svg";
import cad from "../../assets/images/dashboard/flug/CAD.svg";
import chf from "../../assets/images/dashboard/flug/CHF.svg";
import cny from "../../assets/images/dashboard/flug/CNY.svg";
import eur from "../../assets/images/dashboard/flug/EUR.svg";
import gbp from "../../assets/images/dashboard/flug/GBP.svg";
import jpy from "../../assets/images/dashboard/flug/JPY.svg";
import nzd from "../../assets/images/dashboard/flug/NZD.svg";
import usd from "../../assets/images/dashboard/flug/USD.svg";

export default function NewsCalendar() {
  return (
    <main className="content-wrapper pt-16 sm:pb-6 sm:pt-24 bg-black purple-shadown-dash">
      <div className="calender-header py-[150px] px-[15px] xl:ml-[-20px] text-center">
        <h2 className="text-wht text-[26px] font-bold mb-[15px]">
          Economic Calendar
        </h2>
        <p className="text-wht md:text-[18px] text-[16px] font-light leading-[1.5]">
          View our interactive economic calendar for important events and
          releases
        </p>
      </div>
      <div className="inner-content px-6">
        <div className="dashboard-wrapper">
          <div className="flex flex-wrap mx-[-15px]">
            <div className="w-full px-[15px]">
              <div className="hidden lg:flex border-1 relative -mt-[55px] gap-3 2xl:px-16 px-8 rounded-md shadow-[0_4px_10px_rgba(64,123,255,0.13)] py-9 justify-evenly bg-main-bg">
                <div className="false border-[0.542308px] cursor-pointer border-[#EBEBEB] max-w-[97px] lg:w-[97px] w-3/12 hover:!border-purple-dark bg-white items-center flex justify-evenly h-[38px] rounded-md">
                  <div className="w-[30px] relative h-[30px] shadow-[0px_4px_15px_rgba(0, 0, 0, 0.06)] border-[1px] border-[#EBEBEB] rounded-full bg-[#fff]">
                    <div className="w-[16px] h-[16px] absolute -top-[6%] left-[21%] transform translatex-[50%] translate-y-[50%] bg-[#635BFD] rounded-full"></div>
                  </div>
                  <p className="font-rubik text-[#7e7e7e] text-[15px]">ALL</p>
                </div>
                <div className="false border-[0.542308px] cursor-pointer border-[#EBEBEB] max-w-[97px] lg:w-[97px] w-3/12 hover:!border-purple-dark bg-white items-center flex justify-evenly h-[38px] rounded-md">
                  <img
                    className="w-[26px] h-[26px] rounded-full"
                    src={nzd}
                    alt="flug"
                  />
                  <p className="font-rubik text-[#7e7e7e] text-[15px]">NZD</p>
                </div>
                <div className="false border-[0.542308px] cursor-pointer border-[#EBEBEB] max-w-[97px] lg:w-[97px] w-3/12 hover:!border-purple-dark bg-white items-center flex justify-evenly h-[38px] rounded-md">
                  <img
                    className="w-[26px] h-[26px] rounded-full"
                    src={aud}
                    alt="flug"
                  />
                  <p className="font-rubik text-[#7e7e7e] text-[15px]">AUD</p>
                </div>
                <div className="false border-[0.542308px] cursor-pointer border-[#EBEBEB] max-w-[97px] lg:w-[97px] w-3/12 hover:!border-purple-dark bg-white items-center flex justify-evenly h-[38px] rounded-md">
                  <img
                    className="w-[26px] h-[26px] rounded-full"
                    src={cad}
                    alt="flug"
                  />
                  <p className="font-rubik text-[#7e7e7e] text-[15px]">CAD</p>
                </div>
                <div className="false border-[0.542308px] cursor-pointer border-[#EBEBEB] max-w-[97px] lg:w-[97px] w-3/12 hover:!border-purple-dark bg-white items-center flex justify-evenly h-[38px] rounded-md">
                  <img
                    className="w-[26px] h-[26px] rounded-full"
                    src={eur}
                    alt="flug"
                  />
                  <p className="font-rubik text-[#7e7e7e] text-[15px]">EUR</p>
                </div>
                <div className="false border-[0.542308px] cursor-pointer border-[#EBEBEB] max-w-[97px] lg:w-[97px] w-3/12 hover:!border-purple-dark bg-white items-center flex justify-evenly h-[38px] rounded-md">
                  <img
                    className="w-[26px] h-[26px] rounded-full"
                    src={gbp}
                    alt="flug"
                  />
                  <p className="font-rubik text-[#7e7e7e] text-[15px]">GBP</p>
                </div>
                <div className="false border-[0.542308px] cursor-pointer border-[#EBEBEB] max-w-[97px] lg:w-[97px] w-3/12 hover:!border-purple-dark bg-white items-center flex justify-evenly h-[38px] rounded-md">
                  <img
                    className="w-[26px] h-[26px] rounded-full"
                    src={usd}
                    alt="flug"
                  />
                  <p className="font-rubik text-[#7e7e7e] text-[15px]">USD</p>
                </div>
                <div className="false border-[0.542308px] cursor-pointer border-[#EBEBEB] max-w-[97px] lg:w-[97px] w-3/12 hover:!border-purple-dark bg-white items-center flex justify-evenly h-[38px] rounded-md">
                  <img
                    className="w-[26px] h-[26px] rounded-full"
                    src={chf}
                    alt="flug"
                  />
                  <p className="font-rubik text-[#7e7e7e] text-[15px]">CHF</p>
                </div>
                <div className="false border-[0.542308px] cursor-pointer border-[#EBEBEB] max-w-[97px] lg:w-[97px] w-3/12 hover:!border-purple-dark bg-white items-center flex justify-evenly h-[38px] rounded-md">
                  <img
                    className="w-[26px] h-[26px] rounded-full"
                    src={jpy}
                    alt="flug"
                  />
                  <p className="font-rubik text-[#7e7e7e] text-[15px]">JPY</p>
                </div>
                <div className="false border-[0.542308px] cursor-pointer border-[#EBEBEB] max-w-[97px] lg:w-[97px] w-3/12 hover:!border-purple-dark bg-white items-center flex justify-evenly h-[38px] rounded-md">
                  <img
                    className="w-[26px] h-[26px] rounded-full"
                    src={cny}
                    alt="flug"
                  />
                  <p className="font-rubik text-[#7e7e7e] text-[15px]">CNY</p>
                </div>
              </div>

              <div className="hidden lg:flex px-12  rounded-md py-8 filterWith mt-[30px] shadow-[0_4px_10px_rgba(64,123,255,0.13)] flex-wrap bg-main-bg">
                <div className="w-[38%] 2xl:pr-16 pr-8">
                  <h3 className="font-bold font-rubik text-xl pb-4 text-wht">
                    Days
                  </h3>
                  <div className="grid 2xl:grid-cols-[1fr_1fr_1fr] grid-cols-[1fr_1fr] gap-6 text-center">
                    <div className="border border-[#EBEBEB] px-[15px] py-[10px] rounded-[5px]  transition-all duration-300 ease-linear hover:border-primary hover:text-primary cursor-pointer text-wht">
                      Sunday
                    </div>
                    <div className="border border-[#EBEBEB] px-[15px] py-[10px] rounded-[5px]  transition-all duration-300 ease-linear hover:border-primary hover:text-primary cursor-pointer text-wht">
                      Monday
                    </div>
                    <div className="border border-[#EBEBEB] px-[15px] py-[10px] rounded-[5px]  transition-all duration-300 ease-linear hover:border-primary hover:text-primary cursor-pointer text-wht">
                      Tuesday
                    </div>
                    <div className="border border-[#EBEBEB] px-[15px] py-[10px] rounded-[5px]  transition-all duration-300 ease-linear hover:border-primary hover:text-primary cursor-pointer text-wht">
                      Wednesday
                    </div>
                    <div className="border border-[#EBEBEB] px-[15px] py-[10px] rounded-[5px]  transition-all duration-300 ease-linear hover:border-primary hover:text-primary cursor-pointer text-wht">
                      Thursday
                    </div>
                    <div className="border border-[#EBEBEB] px-[15px] py-[10px] rounded-[5px]  transition-all duration-300 ease-linear hover:border-primary hover:text-primary cursor-pointer text-wht">
                      Friday
                    </div>
                  </div>
                </div>
                <div className="w-[30%] 2xl:px-16 px-8 2xl:mr-16 mr-8 border-l-[1px] border-r-[1px] border-[#EFEFEF]">
                  <h3 className="font-bold  font-rubik text-xl pb-4 text-wht">
                    Impact
                  </h3>
                  <div className="grid 2xl:grid-cols-[1fr_1fr] grid-cols-1 gap-6">
                    <label
                      className="flex flex-wrap justify-center items-center px-[10px] py-[10px] border border-[#3b82f6] bg-[#3b82f6]/10 rounded-full cursor-pointer bg-[#3b82f6]"
                      htmlFor="low"
                    >
                      <span className="mr-2  text-base font-medium shadow-badge text-wht">
                        Low
                      </span>
                      <input
                        className="w-[14px] h-[14px] cursor-pointer"
                        readOnly
                        type="checkbox"
                        id="low"
                      />
                    </label>
                    <label
                      className="flex flex-wrap justify-center items-center px-[10px] py-[10px] border border-[#f89b63] bg-[#f89b63]/10 rounded-full cursor-pointer bg-[#f89b63]"
                      htmlFor="medium"
                    >
                      <span className="mr-2  text-base font-medium shadow-badge text-wht">
                        Medium
                      </span>
                      <input
                        className="w-[14px] h-[14px] cursor-pointer"
                        readOnly
                        type="checkbox"
                        id="medium"
                      />
                    </label>
                    <label
                      className="flex flex-wrap justify-center items-center px-[10px] py-[10px] border border-[#e60a16] bg-[#e60a16]/10 rounded-full cursor-pointer bg-[#e60a16]"
                      htmlFor="high"
                    >
                      <span className="mr-2  text-base font-medium shadow-badge text-wht">
                        High
                      </span>
                      <input
                        className="w-[14px] h-[14px] cursor-pointer"
                        readOnly
                        type="checkbox"
                        id="high"
                      />
                    </label>
                    <label
                      className="flex flex-wrap justify-center items-center px-[10px] py-[10px] border border-primary bg-primary/10 rounded-full cursor-pointer bg-primary"
                      htmlFor="holiday"
                    >
                      <span className="mr-2  text-base font-medium shadow-badge text-wht">
                        Holiday
                      </span>
                      <input
                        className="w-[14px] h-[14px] cursor-pointer"
                        readOnly
                        type="checkbox"
                        id="holiday"
                      />
                    </label>
                  </div>
                </div>
                <div className="2xl:w-[22%] w-[28%]">
                  <h3 className="font-bold  font-rubik text-xl pb-4 text-wht">
                    Restrictions
                  </h3>
                  <div className="flex flex-wrap gap-6">
                    <label
                      className="flex flex-wrap justify-center items-center px-[30px] py-[10px] border border-[#e60a16] bg-[#e60a16]/10 rounded-full cursor-pointer bg-[#e60a16]"
                      htmlFor="restrictions"
                    >
                      <span className="mr-2  text-base font-medium shadow-badge text-wht">
                        Restrictions
                      </span>
                      <input
                        className="w-[14px] h-[14px] cursor-pointer"
                        readOnly
                        type="checkbox"
                        id="restrictions"
                      />
                    </label>
                    <label
                      className="flex flex-wrap justify-center items-center px-[30px] py-[10px] border border-[#ebebeb] bg-[#ebebeb]/10 rounded-full cursor-pointer bg-[#ebebeb]"
                      htmlFor="no-restrictions"
                    >
                      <span className="mr-2  text-base font-medium shadow-badge ">
                        No Restrictions
                      </span>
                      <input
                        className="w-[14px] h-[14px] cursor-pointer"
                        readOnly
                        type="checkbox"
                        id="no-restrictions"
                      />
                    </label>
                  </div>
                </div>
              </div>

              <div className="mt-[30px] mb-[80px]">
                <div className="table-wrap overflow-x-auto w-full">
                  <div className="table-responsive 2xl:w-full w-[1400px]">
                    <div className="t-head flex border-[1px] border-primary/50 py-3.5 px-2 rounded-md">
                      <div className="w-[13%] 2xl:pl-[20px]">
                        <h3 className="font-semibold text-wht">IMPACT</h3>
                      </div>
                      <div className="w-[30%]">
                        <h3 className="font-semibold text-wht">EVENT</h3>
                      </div>
                      <div className="w-[15%]">
                        <h3 className="font-semibold text-wht">CURRENCY</h3>
                      </div>
                      <div className="w-[14%] flex items-center">
                        <h3 className="pr-2  font-semibold text-wht">DATE</h3>
                        <div className="relative cursor-pointer group">
                          <svg
                            className="fill-white/70"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>
                          </svg>
                          <div className="absolute bg-gray-900 text-wht font-rubik whitespace-nowrap p-2 rounded top-[calc(100%+10px)] left-[50%] -translate-x-1/2 before:absolute before:content-[''] before:w-[10px] before:h-[10px] before:bg-gray-900 before:rotate-45 before:top-[-5px] before:left-[50%] before:translate-x-[-50%] hidden group-hover:block">
                            GMT +6
                          </div>
                        </div>
                      </div>
                      <div className="w-[13%] text-center">
                        <h3 className=" font-semibold text-wht">FORECAST</h3>
                      </div>
                      <div className="w-[13%] text-center">
                        <h3 className=" font-semibold text-wht">PREVIOUS</h3>
                      </div>
                    </div>
                    <div className="t-body">
                      <div className="t-row flex items-center px-[10px] py-[15px] border border-primary/50">
                        <div className="w-[13%] 2xl:pl-[20px]">
                          <button className=" text-[16px] font-semibold px-[30px] py-[6px] border border-primary bg-primary/10 rounded-full cursor-pointer text-wht">
                            Holiday
                          </button>
                        </div>
                        <div className="w-[30%]">
                          <p className=" text-wht">Bank Holiday</p>
                        </div>
                        <div className="w-[15%]">
                          <div className="inline-flex items-center px-[10px] py-[5px] bg-white rounded-[5px]">
                            <img
                              className="w-[26px] h-[26px] rounded-full mr-[5px]"
                              src={aud}
                              alt="flug"
                            />
                            <p className="">AUD</p>
                          </div>
                        </div>
                        <div className="w-[14%] flex items-center justify-between">
                          <p className=" text-wht">3rd Oct, 04:00 AM</p>
                          <button>
                            <svg
                              className="fill-white"
                              width="37"
                              height="37"
                              viewBox="0 0 37 37"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M25 10H24V9C24 8.73478 23.8946 8.48043 23.7071 8.29289C23.5196 8.10536 23.2652 8 23 8C22.7348 8 22.4804 8.10536 22.2929 8.29289C22.1054 8.48043 22 8.73478 22 9V10H16V9C16 8.73478 15.8946 8.48043 15.7071 8.29289C15.5196 8.10536 15.2652 8 15 8C14.7348 8 14.4804 8.10536 14.2929 8.29289C14.1054 8.48043 14 8.73478 14 9V10H13C12.2044 10 11.4413 10.3161 10.8787 10.8787C10.3161 11.4413 10 12.2044 10 13V25C10 25.7956 10.3161 26.5587 10.8787 27.1213C11.4413 27.6839 12.2044 28 13 28H25C25.7956 28 26.5587 27.6839 27.1213 27.1213C27.6839 26.5587 28 25.7956 28 25V13C28 12.2044 27.6839 11.4413 27.1213 10.8787C26.5587 10.3161 25.7956 10 25 10ZM13 12H14V13C14 13.2652 14.1054 13.5196 14.2929 13.7071C14.4804 13.8946 14.7348 14 15 14C15.2652 14 15.5196 13.8946 15.7071 13.7071C15.8946 13.5196 16 13.2652 16 13V12H22V13C22 13.2652 22.1054 13.5196 22.2929 13.7071C22.4804 13.8946 22.7348 14 23 14C23.2652 14 23.5196 13.8946 23.7071 13.7071C23.8946 13.5196 24 13.2652 24 13V12H25C25.2652 12 25.5196 12.1054 25.7071 12.2929C25.8946 12.4804 26 12.7348 26 13V17H12V13C12 12.7348 12.1054 12.4804 12.2929 12.2929C12.4804 12.1054 12.7348 12 13 12ZM25 26H13C12.7348 26 12.4804 25.8946 12.2929 25.7071C12.1054 25.5196 12 25.2652 12 25V19H26V25C26 25.2652 25.8946 25.5196 25.7071 25.7071C25.5196 25.8946 25.2652 26 25 26Z"></path>
                              <path d="M15 23C15.5523 23 16 22.5523 16 22C16 21.4477 15.5523 21 15 21C14.4477 21 14 21.4477 14 22C14 22.5523 14.4477 23 15 23Z"></path>
                              <path d="M23 21H19C18.7348 21 18.4804 21.1054 18.2929 21.2929C18.1054 21.4804 18 21.7348 18 22C18 22.2652 18.1054 22.5196 18.2929 22.7071C18.4804 22.8946 18.7348 23 19 23H23C23.2652 23 23.5196 22.8946 23.7071 22.7071C23.8946 22.5196 24 22.2652 24 22C24 21.7348 23.8946 21.4804 23.7071 21.2929C23.5196 21.1054 23.2652 21 23 21Z"></path>
                            </svg>
                          </button>
                        </div>
                        <div className="w-[13%]">
                          <p className=" text-center text-wht"></p>
                        </div>
                        <div className="w-[13%]">
                          <p className=" text-center text-wht"></p>
                        </div>
                      </div>
                      <div className="t-row flex items-center px-[10px] py-[15px] border border-primary/50 ">
                        <div className="w-[13%] 2xl:pl-[20px]">
                          <button className=" text-[16px] font-semibold px-[30px] py-[6px] border border-[#3b82f6] bg-[#3b82f6]/10 rounded-full cursor-pointer text-wht">
                            Low
                          </button>
                        </div>
                        <div className="w-[30%]">
                          <p className=" text-wht">
                            Tankan Manufacturing Index
                          </p>
                        </div>
                        <div className="w-[15%]">
                          <div className="inline-flex items-center px-[10px] py-[5px] bg-white rounded-[5px]">
                            <img
                              className="w-[26px] h-[26px] rounded-full mr-[5px]"
                              src={jpy}
                              alt="flug"
                            />
                            <p className="">JPY</p>
                          </div>
                        </div>
                        <div className="w-[14%] flex items-center justify-between">
                          <p className=" text-wht">3rd Oct, 04:00 AM</p>
                          <button>
                            <svg
                              className="fill-white"
                              width="37"
                              height="37"
                              viewBox="0 0 37 37"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M25 10H24V9C24 8.73478 23.8946 8.48043 23.7071 8.29289C23.5196 8.10536 23.2652 8 23 8C22.7348 8 22.4804 8.10536 22.2929 8.29289C22.1054 8.48043 22 8.73478 22 9V10H16V9C16 8.73478 15.8946 8.48043 15.7071 8.29289C15.5196 8.10536 15.2652 8 15 8C14.7348 8 14.4804 8.10536 14.2929 8.29289C14.1054 8.48043 14 8.73478 14 9V10H13C12.2044 10 11.4413 10.3161 10.8787 10.8787C10.3161 11.4413 10 12.2044 10 13V25C10 25.7956 10.3161 26.5587 10.8787 27.1213C11.4413 27.6839 12.2044 28 13 28H25C25.7956 28 26.5587 27.6839 27.1213 27.1213C27.6839 26.5587 28 25.7956 28 25V13C28 12.2044 27.6839 11.4413 27.1213 10.8787C26.5587 10.3161 25.7956 10 25 10ZM13 12H14V13C14 13.2652 14.1054 13.5196 14.2929 13.7071C14.4804 13.8946 14.7348 14 15 14C15.2652 14 15.5196 13.8946 15.7071 13.7071C15.8946 13.5196 16 13.2652 16 13V12H22V13C22 13.2652 22.1054 13.5196 22.2929 13.7071C22.4804 13.8946 22.7348 14 23 14C23.2652 14 23.5196 13.8946 23.7071 13.7071C23.8946 13.5196 24 13.2652 24 13V12H25C25.2652 12 25.5196 12.1054 25.7071 12.2929C25.8946 12.4804 26 12.7348 26 13V17H12V13C12 12.7348 12.1054 12.4804 12.2929 12.2929C12.4804 12.1054 12.7348 12 13 12ZM25 26H13C12.7348 26 12.4804 25.8946 12.2929 25.7071C12.1054 25.5196 12 25.2652 12 25V19H26V25C26 25.2652 25.8946 25.5196 25.7071 25.7071C25.5196 25.8946 25.2652 26 25 26Z"></path>
                              <path d="M15 23C15.5523 23 16 22.5523 16 22C16 21.4477 15.5523 21 15 21C14.4477 21 14 21.4477 14 22C14 22.5523 14.4477 23 15 23Z"></path>
                              <path d="M23 21H19C18.7348 21 18.4804 21.1054 18.2929 21.2929C18.1054 21.4804 18 21.7348 18 22C18 22.2652 18.1054 22.5196 18.2929 22.7071C18.4804 22.8946 18.7348 23 19 23H23C23.2652 23 23.5196 22.8946 23.7071 22.7071C23.8946 22.5196 24 22.2652 24 22C24 21.7348 23.8946 21.4804 23.7071 21.2929C23.5196 21.1054 23.2652 21 23 21Z"></path>
                            </svg>
                          </button>
                        </div>
                        <div className="w-[13%]">
                          <p className=" text-center text-wht">11</p>
                        </div>
                        <div className="w-[13%]">
                          <p className=" text-center text-wht">9</p>
                        </div>
                      </div>
                      <div className="t-row flex items-center px-[10px] py-[15px] border border-primary/50 ">
                        <div className="w-[13%] 2xl:pl-[20px]">
                          <button className=" text-[16px] font-semibold px-[30px] py-[6px] border border-[#3b82f6] bg-[#3b82f6]/10 rounded-full cursor-pointer text-wht">
                            Low
                          </button>
                        </div>
                        <div className="w-[30%]">
                          <p className=" text-wht">
                            Tankan Non-Manufacturing Index
                          </p>
                        </div>
                        <div className="w-[15%]">
                          <div className="inline-flex items-center px-[10px] py-[5px] bg-white rounded-[5px]">
                            <img
                              className="w-[26px] h-[26px] rounded-full mr-[5px]"
                              src={jpy}
                              alt="flug"
                            />
                            <p className="">JPY</p>
                          </div>
                        </div>
                        <div className="w-[14%] flex items-center justify-between">
                          <p className=" text-wht">3rd Oct, 04:00 AM</p>
                          <button>
                            <svg
                              className="fill-white"
                              width="37"
                              height="37"
                              viewBox="0 0 37 37"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M25 10H24V9C24 8.73478 23.8946 8.48043 23.7071 8.29289C23.5196 8.10536 23.2652 8 23 8C22.7348 8 22.4804 8.10536 22.2929 8.29289C22.1054 8.48043 22 8.73478 22 9V10H16V9C16 8.73478 15.8946 8.48043 15.7071 8.29289C15.5196 8.10536 15.2652 8 15 8C14.7348 8 14.4804 8.10536 14.2929 8.29289C14.1054 8.48043 14 8.73478 14 9V10H13C12.2044 10 11.4413 10.3161 10.8787 10.8787C10.3161 11.4413 10 12.2044 10 13V25C10 25.7956 10.3161 26.5587 10.8787 27.1213C11.4413 27.6839 12.2044 28 13 28H25C25.7956 28 26.5587 27.6839 27.1213 27.1213C27.6839 26.5587 28 25.7956 28 25V13C28 12.2044 27.6839 11.4413 27.1213 10.8787C26.5587 10.3161 25.7956 10 25 10ZM13 12H14V13C14 13.2652 14.1054 13.5196 14.2929 13.7071C14.4804 13.8946 14.7348 14 15 14C15.2652 14 15.5196 13.8946 15.7071 13.7071C15.8946 13.5196 16 13.2652 16 13V12H22V13C22 13.2652 22.1054 13.5196 22.2929 13.7071C22.4804 13.8946 22.7348 14 23 14C23.2652 14 23.5196 13.8946 23.7071 13.7071C23.8946 13.5196 24 13.2652 24 13V12H25C25.2652 12 25.5196 12.1054 25.7071 12.2929C25.8946 12.4804 26 12.7348 26 13V17H12V13C12 12.7348 12.1054 12.4804 12.2929 12.2929C12.4804 12.1054 12.7348 12 13 12ZM25 26H13C12.7348 26 12.4804 25.8946 12.2929 25.7071C12.1054 25.5196 12 25.2652 12 25V19H26V25C26 25.2652 25.8946 25.5196 25.7071 25.7071C25.5196 25.8946 25.2652 26 25 26Z"></path>
                              <path d="M15 23C15.5523 23 16 22.5523 16 22C16 21.4477 15.5523 21 15 21C14.4477 21 14 21.4477 14 22C14 22.5523 14.4477 23 15 23Z"></path>
                              <path d="M23 21H19C18.7348 21 18.4804 21.1054 18.2929 21.2929C18.1054 21.4804 18 21.7348 18 22C18 22.2652 18.1054 22.5196 18.2929 22.7071C18.4804 22.8946 18.7348 23 19 23H23C23.2652 23 23.5196 22.8946 23.7071 22.7071C23.8946 22.5196 24 22.2652 24 22C24 21.7348 23.8946 21.4804 23.7071 21.2929C23.5196 21.1054 23.2652 21 23 21Z"></path>
                            </svg>
                          </button>
                        </div>
                        <div className="w-[13%]">
                          <p className=" text-center text-wht">13</p>
                        </div>
                        <div className="w-[13%]">
                          <p className=" text-center text-wht">13</p>
                        </div>
                      </div>
                      <div className="t-row flex items-center px-[10px] py-[15px] border border-primary/50 ">
                        <div className="w-[13%] 2xl:pl-[20px]">
                          <button className=" text-[16px] font-semibold px-[30px] py-[6px] border border-[#3b82f6] bg-[#3b82f6]/10 rounded-full cursor-pointer text-wht">
                            Low
                          </button>
                        </div>
                        <div className="w-[30%]">
                          <p className=" text-wht">BOJ Summary of Opinions</p>
                        </div>
                        <div className="w-[15%]">
                          <div className="inline-flex items-center px-[10px] py-[5px] bg-white rounded-[5px]">
                            <img
                              className="w-[26px] h-[26px] rounded-full mr-[5px]"
                              src={jpy}
                              alt="flug"
                            />
                            <p className="">JPY</p>
                          </div>
                        </div>
                        <div className="w-[14%] flex items-center justify-between">
                          <p className=" text-wht">3rd Oct, 04:00 AM</p>
                          <button>
                            <svg
                              className="fill-white"
                              width="37"
                              height="37"
                              viewBox="0 0 37 37"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M25 10H24V9C24 8.73478 23.8946 8.48043 23.7071 8.29289C23.5196 8.10536 23.2652 8 23 8C22.7348 8 22.4804 8.10536 22.2929 8.29289C22.1054 8.48043 22 8.73478 22 9V10H16V9C16 8.73478 15.8946 8.48043 15.7071 8.29289C15.5196 8.10536 15.2652 8 15 8C14.7348 8 14.4804 8.10536 14.2929 8.29289C14.1054 8.48043 14 8.73478 14 9V10H13C12.2044 10 11.4413 10.3161 10.8787 10.8787C10.3161 11.4413 10 12.2044 10 13V25C10 25.7956 10.3161 26.5587 10.8787 27.1213C11.4413 27.6839 12.2044 28 13 28H25C25.7956 28 26.5587 27.6839 27.1213 27.1213C27.6839 26.5587 28 25.7956 28 25V13C28 12.2044 27.6839 11.4413 27.1213 10.8787C26.5587 10.3161 25.7956 10 25 10ZM13 12H14V13C14 13.2652 14.1054 13.5196 14.2929 13.7071C14.4804 13.8946 14.7348 14 15 14C15.2652 14 15.5196 13.8946 15.7071 13.7071C15.8946 13.5196 16 13.2652 16 13V12H22V13C22 13.2652 22.1054 13.5196 22.2929 13.7071C22.4804 13.8946 22.7348 14 23 14C23.2652 14 23.5196 13.8946 23.7071 13.7071C23.8946 13.5196 24 13.2652 24 13V12H25C25.2652 12 25.5196 12.1054 25.7071 12.2929C25.8946 12.4804 26 12.7348 26 13V17H12V13C12 12.7348 12.1054 12.4804 12.2929 12.2929C12.4804 12.1054 12.7348 12 13 12ZM25 26H13C12.7348 26 12.4804 25.8946 12.2929 25.7071C12.1054 25.5196 12 25.2652 12 25V19H26V25C26 25.2652 25.8946 25.5196 25.7071 25.7071C25.5196 25.8946 25.2652 26 25 26Z"></path>
                              <path d="M15 23C15.5523 23 16 22.5523 16 22C16 21.4477 15.5523 21 15 21C14.4477 21 14 21.4477 14 22C14 22.5523 14.4477 23 15 23Z"></path>
                              <path d="M23 21H19C18.7348 21 18.4804 21.1054 18.2929 21.2929C18.1054 21.4804 18 21.7348 18 22C18 22.2652 18.1054 22.5196 18.2929 22.7071C18.4804 22.8946 18.7348 23 19 23H23C23.2652 23 23.5196 22.8946 23.7071 22.7071C23.8946 22.5196 24 22.2652 24 22C24 21.7348 23.8946 21.4804 23.7071 21.2929C23.5196 21.1054 23.2652 21 23 21Z"></path>
                            </svg>
                          </button>
                        </div>
                        <div className="w-[13%]">
                          <p className=" text-center text-wht"></p>
                        </div>
                        <div className="w-[13%]">
                          <p className=" text-center text-wht"></p>
                        </div>
                      </div>
                      <div className="t-row flex items-center px-[10px] py-[15px] border border-primary/50">
                        <div className="w-[13%] 2xl:pl-[20px]">
                          <button className=" text-[16px] font-semibold px-[30px] py-[6px] border border-primary bg-primary/10 rounded-full cursor-pointer text-wht">
                            Holiday
                          </button>
                        </div>
                        <div className="w-[30%]">
                          <p className=" text-wht">Bank Holiday</p>
                        </div>
                        <div className="w-[15%]">
                          <div className="inline-flex items-center px-[10px] py-[5px] bg-white rounded-[5px]">
                            <img
                              className="w-[26px] h-[26px] rounded-full mr-[5px]"
                              src={aud}
                              alt="flug"
                            />
                            <p className="">AUD</p>
                          </div>
                        </div>
                        <div className="w-[14%] flex items-center justify-between">
                          <p className=" text-wht">3rd Oct, 04:00 AM</p>
                          <button>
                            <svg
                              className="fill-white"
                              width="37"
                              height="37"
                              viewBox="0 0 37 37"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M25 10H24V9C24 8.73478 23.8946 8.48043 23.7071 8.29289C23.5196 8.10536 23.2652 8 23 8C22.7348 8 22.4804 8.10536 22.2929 8.29289C22.1054 8.48043 22 8.73478 22 9V10H16V9C16 8.73478 15.8946 8.48043 15.7071 8.29289C15.5196 8.10536 15.2652 8 15 8C14.7348 8 14.4804 8.10536 14.2929 8.29289C14.1054 8.48043 14 8.73478 14 9V10H13C12.2044 10 11.4413 10.3161 10.8787 10.8787C10.3161 11.4413 10 12.2044 10 13V25C10 25.7956 10.3161 26.5587 10.8787 27.1213C11.4413 27.6839 12.2044 28 13 28H25C25.7956 28 26.5587 27.6839 27.1213 27.1213C27.6839 26.5587 28 25.7956 28 25V13C28 12.2044 27.6839 11.4413 27.1213 10.8787C26.5587 10.3161 25.7956 10 25 10ZM13 12H14V13C14 13.2652 14.1054 13.5196 14.2929 13.7071C14.4804 13.8946 14.7348 14 15 14C15.2652 14 15.5196 13.8946 15.7071 13.7071C15.8946 13.5196 16 13.2652 16 13V12H22V13C22 13.2652 22.1054 13.5196 22.2929 13.7071C22.4804 13.8946 22.7348 14 23 14C23.2652 14 23.5196 13.8946 23.7071 13.7071C23.8946 13.5196 24 13.2652 24 13V12H25C25.2652 12 25.5196 12.1054 25.7071 12.2929C25.8946 12.4804 26 12.7348 26 13V17H12V13C12 12.7348 12.1054 12.4804 12.2929 12.2929C12.4804 12.1054 12.7348 12 13 12ZM25 26H13C12.7348 26 12.4804 25.8946 12.2929 25.7071C12.1054 25.5196 12 25.2652 12 25V19H26V25C26 25.2652 25.8946 25.5196 25.7071 25.7071C25.5196 25.8946 25.2652 26 25 26Z"></path>
                              <path d="M15 23C15.5523 23 16 22.5523 16 22C16 21.4477 15.5523 21 15 21C14.4477 21 14 21.4477 14 22C14 22.5523 14.4477 23 15 23Z"></path>
                              <path d="M23 21H19C18.7348 21 18.4804 21.1054 18.2929 21.2929C18.1054 21.4804 18 21.7348 18 22C18 22.2652 18.1054 22.5196 18.2929 22.7071C18.4804 22.8946 18.7348 23 19 23H23C23.2652 23 23.5196 22.8946 23.7071 22.7071C23.8946 22.5196 24 22.2652 24 22C24 21.7348 23.8946 21.4804 23.7071 21.2929C23.5196 21.1054 23.2652 21 23 21Z"></path>
                            </svg>
                          </button>
                        </div>
                        <div className="w-[13%]">
                          <p className=" text-center text-wht"></p>
                        </div>
                        <div className="w-[13%]">
                          <p className=" text-center text-wht"></p>
                        </div>
                      </div>
                      <div className="t-row flex items-center px-[10px] py-[15px] border border-primary/50 ">
                        <div className="w-[13%] 2xl:pl-[20px]">
                          <button className=" text-[16px] font-semibold px-[30px] py-[6px] border border-[#3b82f6] bg-[#3b82f6]/10 rounded-full cursor-pointer text-wht">
                            Low
                          </button>
                        </div>
                        <div className="w-[30%]">
                          <p className=" text-wht">
                            Tankan Manufacturing Index
                          </p>
                        </div>
                        <div className="w-[15%]">
                          <div className="inline-flex items-center px-[10px] py-[5px] bg-white rounded-[5px]">
                            <img
                              className="w-[26px] h-[26px] rounded-full mr-[5px]"
                              src={jpy}
                              alt="flug"
                            />
                            <p className="">JPY</p>
                          </div>
                        </div>
                        <div className="w-[14%] flex items-center justify-between">
                          <p className=" text-wht">3rd Oct, 04:00 AM</p>
                          <button>
                            <svg
                              className="fill-white"
                              width="37"
                              height="37"
                              viewBox="0 0 37 37"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M25 10H24V9C24 8.73478 23.8946 8.48043 23.7071 8.29289C23.5196 8.10536 23.2652 8 23 8C22.7348 8 22.4804 8.10536 22.2929 8.29289C22.1054 8.48043 22 8.73478 22 9V10H16V9C16 8.73478 15.8946 8.48043 15.7071 8.29289C15.5196 8.10536 15.2652 8 15 8C14.7348 8 14.4804 8.10536 14.2929 8.29289C14.1054 8.48043 14 8.73478 14 9V10H13C12.2044 10 11.4413 10.3161 10.8787 10.8787C10.3161 11.4413 10 12.2044 10 13V25C10 25.7956 10.3161 26.5587 10.8787 27.1213C11.4413 27.6839 12.2044 28 13 28H25C25.7956 28 26.5587 27.6839 27.1213 27.1213C27.6839 26.5587 28 25.7956 28 25V13C28 12.2044 27.6839 11.4413 27.1213 10.8787C26.5587 10.3161 25.7956 10 25 10ZM13 12H14V13C14 13.2652 14.1054 13.5196 14.2929 13.7071C14.4804 13.8946 14.7348 14 15 14C15.2652 14 15.5196 13.8946 15.7071 13.7071C15.8946 13.5196 16 13.2652 16 13V12H22V13C22 13.2652 22.1054 13.5196 22.2929 13.7071C22.4804 13.8946 22.7348 14 23 14C23.2652 14 23.5196 13.8946 23.7071 13.7071C23.8946 13.5196 24 13.2652 24 13V12H25C25.2652 12 25.5196 12.1054 25.7071 12.2929C25.8946 12.4804 26 12.7348 26 13V17H12V13C12 12.7348 12.1054 12.4804 12.2929 12.2929C12.4804 12.1054 12.7348 12 13 12ZM25 26H13C12.7348 26 12.4804 25.8946 12.2929 25.7071C12.1054 25.5196 12 25.2652 12 25V19H26V25C26 25.2652 25.8946 25.5196 25.7071 25.7071C25.5196 25.8946 25.2652 26 25 26Z"></path>
                              <path d="M15 23C15.5523 23 16 22.5523 16 22C16 21.4477 15.5523 21 15 21C14.4477 21 14 21.4477 14 22C14 22.5523 14.4477 23 15 23Z"></path>
                              <path d="M23 21H19C18.7348 21 18.4804 21.1054 18.2929 21.2929C18.1054 21.4804 18 21.7348 18 22C18 22.2652 18.1054 22.5196 18.2929 22.7071C18.4804 22.8946 18.7348 23 19 23H23C23.2652 23 23.5196 22.8946 23.7071 22.7071C23.8946 22.5196 24 22.2652 24 22C24 21.7348 23.8946 21.4804 23.7071 21.2929C23.5196 21.1054 23.2652 21 23 21Z"></path>
                            </svg>
                          </button>
                        </div>
                        <div className="w-[13%]">
                          <p className=" text-center text-wht">11</p>
                        </div>
                        <div className="w-[13%]">
                          <p className=" text-center text-wht">9</p>
                        </div>
                      </div>
                      <div className="t-row flex items-center px-[10px] py-[15px] border border-primary/50 ">
                        <div className="w-[13%] 2xl:pl-[20px]">
                          <button className=" text-[16px] font-semibold px-[30px] py-[6px] border border-[#3b82f6] bg-[#3b82f6]/10 rounded-full cursor-pointer text-wht">
                            Low
                          </button>
                        </div>
                        <div className="w-[30%]">
                          <p className=" text-wht">
                            Tankan Non-Manufacturing Index
                          </p>
                        </div>
                        <div className="w-[15%]">
                          <div className="inline-flex items-center px-[10px] py-[5px] bg-white rounded-[5px]">
                            <img
                              className="w-[26px] h-[26px] rounded-full mr-[5px]"
                              src={jpy}
                              alt="flug"
                            />
                            <p className="">JPY</p>
                          </div>
                        </div>
                        <div className="w-[14%] flex items-center justify-between">
                          <p className=" text-wht">3rd Oct, 04:00 AM</p>
                          <button>
                            <svg
                              className="fill-white"
                              width="37"
                              height="37"
                              viewBox="0 0 37 37"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M25 10H24V9C24 8.73478 23.8946 8.48043 23.7071 8.29289C23.5196 8.10536 23.2652 8 23 8C22.7348 8 22.4804 8.10536 22.2929 8.29289C22.1054 8.48043 22 8.73478 22 9V10H16V9C16 8.73478 15.8946 8.48043 15.7071 8.29289C15.5196 8.10536 15.2652 8 15 8C14.7348 8 14.4804 8.10536 14.2929 8.29289C14.1054 8.48043 14 8.73478 14 9V10H13C12.2044 10 11.4413 10.3161 10.8787 10.8787C10.3161 11.4413 10 12.2044 10 13V25C10 25.7956 10.3161 26.5587 10.8787 27.1213C11.4413 27.6839 12.2044 28 13 28H25C25.7956 28 26.5587 27.6839 27.1213 27.1213C27.6839 26.5587 28 25.7956 28 25V13C28 12.2044 27.6839 11.4413 27.1213 10.8787C26.5587 10.3161 25.7956 10 25 10ZM13 12H14V13C14 13.2652 14.1054 13.5196 14.2929 13.7071C14.4804 13.8946 14.7348 14 15 14C15.2652 14 15.5196 13.8946 15.7071 13.7071C15.8946 13.5196 16 13.2652 16 13V12H22V13C22 13.2652 22.1054 13.5196 22.2929 13.7071C22.4804 13.8946 22.7348 14 23 14C23.2652 14 23.5196 13.8946 23.7071 13.7071C23.8946 13.5196 24 13.2652 24 13V12H25C25.2652 12 25.5196 12.1054 25.7071 12.2929C25.8946 12.4804 26 12.7348 26 13V17H12V13C12 12.7348 12.1054 12.4804 12.2929 12.2929C12.4804 12.1054 12.7348 12 13 12ZM25 26H13C12.7348 26 12.4804 25.8946 12.2929 25.7071C12.1054 25.5196 12 25.2652 12 25V19H26V25C26 25.2652 25.8946 25.5196 25.7071 25.7071C25.5196 25.8946 25.2652 26 25 26Z"></path>
                              <path d="M15 23C15.5523 23 16 22.5523 16 22C16 21.4477 15.5523 21 15 21C14.4477 21 14 21.4477 14 22C14 22.5523 14.4477 23 15 23Z"></path>
                              <path d="M23 21H19C18.7348 21 18.4804 21.1054 18.2929 21.2929C18.1054 21.4804 18 21.7348 18 22C18 22.2652 18.1054 22.5196 18.2929 22.7071C18.4804 22.8946 18.7348 23 19 23H23C23.2652 23 23.5196 22.8946 23.7071 22.7071C23.8946 22.5196 24 22.2652 24 22C24 21.7348 23.8946 21.4804 23.7071 21.2929C23.5196 21.1054 23.2652 21 23 21Z"></path>
                            </svg>
                          </button>
                        </div>
                        <div className="w-[13%]">
                          <p className=" text-center text-wht">13</p>
                        </div>
                        <div className="w-[13%]">
                          <p className=" text-center text-wht">13</p>
                        </div>
                      </div>
                      <div className="t-row flex items-center px-[10px] py-[15px] border border-primary/50 !border-l-[8px] !border-l-[#e60a16] !bg-[#e60a16]/10">
                        <div className="w-[13%] 2xl:pl-[20px]">
                          <button className=" text-[16px] font-semibold px-[30px] py-[6px] border border-[#e60a16] bg-[#e60a16]/10 rounded-full cursor-pointer text-wht">
                            High
                          </button>
                        </div>
                        <div className="w-[30%]">
                          <p className=" text-wht">CPI m/m</p>
                        </div>
                        <div className="w-[15%]">
                          <div className="inline-flex items-center px-[10px] py-[5px] bg-white rounded-[5px]">
                            <img
                              className="w-[26px] h-[26px] rounded-full mr-[5px]"
                              src={chf}
                              alt="flug"
                            />
                            <p className="">CHF</p>
                          </div>
                        </div>
                        <div className="w-[14%] flex items-center justify-between">
                          <p className=" text-wht">3rd Oct, 04:00 AM</p>
                          <button>
                            <svg
                              className="fill-white"
                              width="37"
                              height="37"
                              viewBox="0 0 37 37"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M25 10H24V9C24 8.73478 23.8946 8.48043 23.7071 8.29289C23.5196 8.10536 23.2652 8 23 8C22.7348 8 22.4804 8.10536 22.2929 8.29289C22.1054 8.48043 22 8.73478 22 9V10H16V9C16 8.73478 15.8946 8.48043 15.7071 8.29289C15.5196 8.10536 15.2652 8 15 8C14.7348 8 14.4804 8.10536 14.2929 8.29289C14.1054 8.48043 14 8.73478 14 9V10H13C12.2044 10 11.4413 10.3161 10.8787 10.8787C10.3161 11.4413 10 12.2044 10 13V25C10 25.7956 10.3161 26.5587 10.8787 27.1213C11.4413 27.6839 12.2044 28 13 28H25C25.7956 28 26.5587 27.6839 27.1213 27.1213C27.6839 26.5587 28 25.7956 28 25V13C28 12.2044 27.6839 11.4413 27.1213 10.8787C26.5587 10.3161 25.7956 10 25 10ZM13 12H14V13C14 13.2652 14.1054 13.5196 14.2929 13.7071C14.4804 13.8946 14.7348 14 15 14C15.2652 14 15.5196 13.8946 15.7071 13.7071C15.8946 13.5196 16 13.2652 16 13V12H22V13C22 13.2652 22.1054 13.5196 22.2929 13.7071C22.4804 13.8946 22.7348 14 23 14C23.2652 14 23.5196 13.8946 23.7071 13.7071C23.8946 13.5196 24 13.2652 24 13V12H25C25.2652 12 25.5196 12.1054 25.7071 12.2929C25.8946 12.4804 26 12.7348 26 13V17H12V13C12 12.7348 12.1054 12.4804 12.2929 12.2929C12.4804 12.1054 12.7348 12 13 12ZM25 26H13C12.7348 26 12.4804 25.8946 12.2929 25.7071C12.1054 25.5196 12 25.2652 12 25V19H26V25C26 25.2652 25.8946 25.5196 25.7071 25.7071C25.5196 25.8946 25.2652 26 25 26Z"></path>
                              <path d="M15 23C15.5523 23 16 22.5523 16 22C16 21.4477 15.5523 21 15 21C14.4477 21 14 21.4477 14 22C14 22.5523 14.4477 23 15 23Z"></path>
                              <path d="M23 21H19C18.7348 21 18.4804 21.1054 18.2929 21.2929C18.1054 21.4804 18 21.7348 18 22C18 22.2652 18.1054 22.5196 18.2929 22.7071C18.4804 22.8946 18.7348 23 19 23H23C23.2652 23 23.5196 22.8946 23.7071 22.7071C23.8946 22.5196 24 22.2652 24 22C24 21.7348 23.8946 21.4804 23.7071 21.2929C23.5196 21.1054 23.2652 21 23 21Z"></path>
                            </svg>
                          </button>
                        </div>
                        <div className="w-[13%]">
                          <p className=" text-center text-wht">0.1%</p>
                        </div>
                        <div className="w-[13%]">
                          <p className=" text-center text-wht">0.3%</p>
                        </div>
                      </div>
                      <div className="t-row flex items-center px-[10px] py-[15px] border border-primary/50">
                        <div className="w-[13%] 2xl:pl-[20px]">
                          <button className=" text-[16px] font-semibold px-[30px] py-[6px] border border-primary bg-primary/10 rounded-full cursor-pointer text-wht">
                            Holiday
                          </button>
                        </div>
                        <div className="w-[30%]">
                          <p className=" text-wht">Bank Holiday</p>
                        </div>
                        <div className="w-[15%]">
                          <div className="inline-flex items-center px-[10px] py-[5px] bg-white rounded-[5px]">
                            <img
                              className="w-[26px] h-[26px] rounded-full mr-[5px]"
                              src={aud}
                              alt="flug"
                            />
                            <p className="">AUD</p>
                          </div>
                        </div>
                        <div className="w-[14%] flex items-center justify-between">
                          <p className=" text-wht">3rd Oct, 04:00 AM</p>
                          <button>
                            <svg
                              className="fill-white"
                              width="37"
                              height="37"
                              viewBox="0 0 37 37"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M25 10H24V9C24 8.73478 23.8946 8.48043 23.7071 8.29289C23.5196 8.10536 23.2652 8 23 8C22.7348 8 22.4804 8.10536 22.2929 8.29289C22.1054 8.48043 22 8.73478 22 9V10H16V9C16 8.73478 15.8946 8.48043 15.7071 8.29289C15.5196 8.10536 15.2652 8 15 8C14.7348 8 14.4804 8.10536 14.2929 8.29289C14.1054 8.48043 14 8.73478 14 9V10H13C12.2044 10 11.4413 10.3161 10.8787 10.8787C10.3161 11.4413 10 12.2044 10 13V25C10 25.7956 10.3161 26.5587 10.8787 27.1213C11.4413 27.6839 12.2044 28 13 28H25C25.7956 28 26.5587 27.6839 27.1213 27.1213C27.6839 26.5587 28 25.7956 28 25V13C28 12.2044 27.6839 11.4413 27.1213 10.8787C26.5587 10.3161 25.7956 10 25 10ZM13 12H14V13C14 13.2652 14.1054 13.5196 14.2929 13.7071C14.4804 13.8946 14.7348 14 15 14C15.2652 14 15.5196 13.8946 15.7071 13.7071C15.8946 13.5196 16 13.2652 16 13V12H22V13C22 13.2652 22.1054 13.5196 22.2929 13.7071C22.4804 13.8946 22.7348 14 23 14C23.2652 14 23.5196 13.8946 23.7071 13.7071C23.8946 13.5196 24 13.2652 24 13V12H25C25.2652 12 25.5196 12.1054 25.7071 12.2929C25.8946 12.4804 26 12.7348 26 13V17H12V13C12 12.7348 12.1054 12.4804 12.2929 12.2929C12.4804 12.1054 12.7348 12 13 12ZM25 26H13C12.7348 26 12.4804 25.8946 12.2929 25.7071C12.1054 25.5196 12 25.2652 12 25V19H26V25C26 25.2652 25.8946 25.5196 25.7071 25.7071C25.5196 25.8946 25.2652 26 25 26Z"></path>
                              <path d="M15 23C15.5523 23 16 22.5523 16 22C16 21.4477 15.5523 21 15 21C14.4477 21 14 21.4477 14 22C14 22.5523 14.4477 23 15 23Z"></path>
                              <path d="M23 21H19C18.7348 21 18.4804 21.1054 18.2929 21.2929C18.1054 21.4804 18 21.7348 18 22C18 22.2652 18.1054 22.5196 18.2929 22.7071C18.4804 22.8946 18.7348 23 19 23H23C23.2652 23 23.5196 22.8946 23.7071 22.7071C23.8946 22.5196 24 22.2652 24 22C24 21.7348 23.8946 21.4804 23.7071 21.2929C23.5196 21.1054 23.2652 21 23 21Z"></path>
                            </svg>
                          </button>
                        </div>
                        <div className="w-[13%]">
                          <p className=" text-center text-wht"></p>
                        </div>
                        <div className="w-[13%]">
                          <p className=" text-center text-wht"></p>
                        </div>
                      </div>
                      <div className="t-row flex items-center px-[10px] py-[15px] border border-primary/50 ">
                        <div className="w-[13%] 2xl:pl-[20px]">
                          <button className=" text-[16px] font-semibold px-[30px] py-[6px] border border-[#3b82f6] bg-[#3b82f6]/10 rounded-full cursor-pointer text-wht">
                            Low
                          </button>
                        </div>
                        <div className="w-[30%]">
                          <p className=" text-wht">
                            Tankan Manufacturing Index
                          </p>
                        </div>
                        <div className="w-[15%]">
                          <div className="inline-flex items-center px-[10px] py-[5px] bg-white rounded-[5px]">
                            <img
                              className="w-[26px] h-[26px] rounded-full mr-[5px]"
                              src={jpy}
                              alt="flug"
                            />
                            <p className="">JPY</p>
                          </div>
                        </div>
                        <div className="w-[14%] flex items-center justify-between">
                          <p className=" text-wht">3rd Oct, 04:00 AM</p>
                          <button>
                            <svg
                              className="fill-white"
                              width="37"
                              height="37"
                              viewBox="0 0 37 37"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M25 10H24V9C24 8.73478 23.8946 8.48043 23.7071 8.29289C23.5196 8.10536 23.2652 8 23 8C22.7348 8 22.4804 8.10536 22.2929 8.29289C22.1054 8.48043 22 8.73478 22 9V10H16V9C16 8.73478 15.8946 8.48043 15.7071 8.29289C15.5196 8.10536 15.2652 8 15 8C14.7348 8 14.4804 8.10536 14.2929 8.29289C14.1054 8.48043 14 8.73478 14 9V10H13C12.2044 10 11.4413 10.3161 10.8787 10.8787C10.3161 11.4413 10 12.2044 10 13V25C10 25.7956 10.3161 26.5587 10.8787 27.1213C11.4413 27.6839 12.2044 28 13 28H25C25.7956 28 26.5587 27.6839 27.1213 27.1213C27.6839 26.5587 28 25.7956 28 25V13C28 12.2044 27.6839 11.4413 27.1213 10.8787C26.5587 10.3161 25.7956 10 25 10ZM13 12H14V13C14 13.2652 14.1054 13.5196 14.2929 13.7071C14.4804 13.8946 14.7348 14 15 14C15.2652 14 15.5196 13.8946 15.7071 13.7071C15.8946 13.5196 16 13.2652 16 13V12H22V13C22 13.2652 22.1054 13.5196 22.2929 13.7071C22.4804 13.8946 22.7348 14 23 14C23.2652 14 23.5196 13.8946 23.7071 13.7071C23.8946 13.5196 24 13.2652 24 13V12H25C25.2652 12 25.5196 12.1054 25.7071 12.2929C25.8946 12.4804 26 12.7348 26 13V17H12V13C12 12.7348 12.1054 12.4804 12.2929 12.2929C12.4804 12.1054 12.7348 12 13 12ZM25 26H13C12.7348 26 12.4804 25.8946 12.2929 25.7071C12.1054 25.5196 12 25.2652 12 25V19H26V25C26 25.2652 25.8946 25.5196 25.7071 25.7071C25.5196 25.8946 25.2652 26 25 26Z"></path>
                              <path d="M15 23C15.5523 23 16 22.5523 16 22C16 21.4477 15.5523 21 15 21C14.4477 21 14 21.4477 14 22C14 22.5523 14.4477 23 15 23Z"></path>
                              <path d="M23 21H19C18.7348 21 18.4804 21.1054 18.2929 21.2929C18.1054 21.4804 18 21.7348 18 22C18 22.2652 18.1054 22.5196 18.2929 22.7071C18.4804 22.8946 18.7348 23 19 23H23C23.2652 23 23.5196 22.8946 23.7071 22.7071C23.8946 22.5196 24 22.2652 24 22C24 21.7348 23.8946 21.4804 23.7071 21.2929C23.5196 21.1054 23.2652 21 23 21Z"></path>
                            </svg>
                          </button>
                        </div>
                        <div className="w-[13%]">
                          <p className=" text-center text-wht">11</p>
                        </div>
                        <div className="w-[13%]">
                          <p className=" text-center text-wht">9</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="t-navigation flex items-center justify-end mt-[40px]">
                  <button className="inline-block text-center w-[45px] h-[48px]  text-[16px] font-semibold bg-[#f1f1f1] rounded-[5px] ml-[10px]">
                    <svg
                      className="inline-block"
                      width="7"
                      height="15"
                      viewBox="0 0 7 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5.83749 14.0013C5.68809 14.0018 5.54048 13.9688 5.4055 13.9048C5.27052 13.8407 5.15161 13.7473 5.05749 13.6313L0.227488 7.63125C0.0804062 7.45232 0 7.22788 0 6.99625C0 6.76463 0.0804062 6.54018 0.227488 6.36125L5.22749 0.361252C5.39723 0.157036 5.64114 0.0286112 5.90556 0.0042315C6.16999 -0.0201482 6.43327 0.0615137 6.63749 0.231252C6.8417 0.400991 6.97013 0.644902 6.99451 0.909329C7.01889 1.17375 6.93723 1.43704 6.76749 1.64125L2.29749 7.00125L6.61749 12.3613C6.73977 12.508 6.81745 12.6868 6.84133 12.8763C6.86521 13.0659 6.83429 13.2583 6.75223 13.4308C6.67018 13.6034 6.54042 13.7488 6.37831 13.8499C6.2162 13.9509 6.02852 14.0035 5.83749 14.0013Z"></path>
                    </svg>
                  </button>
                  <button className="inline-block text-center w-[45px] h-[48px] text-wht text-[16px] font-semibold bg-primary rounded-[5px] ml-[10px]">
                    1
                  </button>
                  <button className="inline-block text-center w-[45px] h-[48px]  text-[16px] font-semibold bg-[#f1f1f1] rounded-[5px] ml-[10px]">
                    2
                  </button>
                  <button className="inline-block text-center w-[45px] h-[48px]  text-[16px] font-semibold bg-[#f1f1f1] rounded-[5px] ml-[10px]">
                    3
                  </button>
                  <button className="inline-block text-center w-[45px] h-[48px]  text-[16px] font-semibold bg-[#f1f1f1] rounded-[5px] ml-[10px]">
                    4
                  </button>
                  <button className="inline-block text-center w-[45px] h-[48px]  text-[16px] font-semibold bg-[#f1f1f1] rounded-[5px] ml-[10px]">
                    <svg
                      className="inline-block"
                      width="7"
                      height="15"
                      viewBox="0 0 7 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1.16251 0.998748C1.31191 0.99824 1.45952 1.03121 1.5945 1.09524C1.72948 1.15927 1.84839 1.25273 1.94251 1.36875L6.77251 7.36875C6.91959 7.54768 7 7.77212 7 8.00375C7 8.23537 6.91959 8.45982 6.77251 8.63875L1.77251 14.6387C1.60277 14.843 1.35886 14.9714 1.09444 14.9958C0.83001 15.0201 0.566729 14.9385 0.362512 14.7687C0.158296 14.599 0.0298715 14.3551 0.00549173 14.0907C-0.018888 13.8262 0.0627732 13.563 0.232512 13.3587L4.70251 7.99875L0.382513 2.63875C0.26023 2.49196 0.182552 2.31322 0.158673 2.12367C0.134793 1.93412 0.16571 1.7417 0.247766 1.56917C0.329822 1.39665 0.459582 1.25123 0.621692 1.15014C0.783803 1.04905 0.971478 0.996516 1.16251 0.998748Z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
