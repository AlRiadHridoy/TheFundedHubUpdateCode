import { useState } from "react";

import "./waitlist.css";
// eslint-disable-next-line react/prop-types
export default function SuccessModal({}) {
  const [status, setStatus] = useState(true);

  return (
    <div
      className={`modal fixed inset-0 z-[999] transition-all duration-100 flex justify-center items-center ${
        status ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div className="scroll h-screen">
        <div className="wrap overflow-hidden rounded-3xl h-full  sm:h-unset overflow-y-scroll sm:overflow-y-auto sm:flex justify-center items-center">
          <div
            className={`box relative max-w-[42rem] w-full text-main text-wht bg-light-gra transition-all bg-blu/90 border border-primary/10 backdrop-blur-3xl duration-300 rounded-xl z-[999] py-6 my-3 px-6 overflow-hidden p-6 ${
              status ? "visible opacity-100" : "invisible opacity-0"
            }`}
          >
            <div className="loading h-2  absolute top-0 left-0 right-0">
              <div className="load h-2 bg-primary/70"></div>
            </div>
            <div className="subscribe text-2xl">
              <h1>You have successfully subscribe to the waitlist :)</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
