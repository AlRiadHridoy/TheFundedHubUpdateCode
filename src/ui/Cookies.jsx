import { useState } from "react";
import { RxCross1 } from "react-icons/rx";

export default function Cookies() {
  const [cookieToggle, setCookieToggle] = useState(true);
  return (
    <>
      {cookieToggle ? (
        <div className="cookies fixed bottom-[2rem] z-[99999] w-full left-0 right-0">
          <div className="container">
            <div className="wrapper">
              <div className="content relative p-5 max-w-[450px] bg-light/[17%] backdrop-blur-3xl rounded-3xl border-2 border-light">
                <div className="top text-center sm:text-start">
                  <h3 className="font-medium text-xl sm:text-[1.7rem] tracking-tight text-wht-gradient pr-10">
                    This website uses cookies
                  </h3>
                </div>

                {/* bottom */}
                <div className="bottom grid gap-6 mt-3 text-center sm:text-start">
                  <p className="lg:col-span-2 text-xs sm:text-sm">
                    This website uses cookies to help you navigate, as well as
                    to provide a better user experience and analyze the use of
                    our products and services.
                  </p>

                  <div className="btns flex flex-col xs:flex-row justify-center sm:justify-end gap-4">
                    <div
                      onClick={() => setCookieToggle(false)}
                      className="btn flex justify-center sm:justify-end items-center sm:col-span-1 cursor-pointer"
                    >
                      <div className="uppercase font-Montserrat text-sm font-semibold py-2 sm:py-3 w-[9.5rem] sm:w-[11rem] border-wht border text-wht rounded-3xl text-center flex justify-center items-center">
                        Disagree
                      </div>
                    </div>
                    <div
                      onClick={() => setCookieToggle(false)}
                      className="btn flex justify-center sm:justify-end items-center sm:col-span-1 cursor-pointer"
                    >
                      <div className="uppercase font-Montserrat text-sm font-semibold py-2 sm:py-3 rounded-3xl w-[9.5rem] sm:w-[11rem] text-center bg-white text-main-bg hover:opacity-80 transition-all duration-200">
                        I Agree
                      </div>
                    </div>
                  </div>
                </div>

                {/* cross */}
                <div className="wrap" onClick={() => setCookieToggle(false)}>
                  <div className="cross p-2 absolute cursor-pointer text-xl sm:text-xl text-dim-gray right-4 top-4 z-50">
                    <RxCross1 />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
