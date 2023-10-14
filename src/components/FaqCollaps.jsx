import { useEffect, useState, useRef } from "react";

import { arrow } from "../ui/images";

export default function FaqCollaps({ heading, para, fls }) {
  const [paraHeight, setparaHeight] = useState(0);
  const [isOpen, setIsOpen] = useState(fls);
  const refferance = useRef(null);

  useEffect(() => {
    setparaHeight(refferance.current.clientHeight);
  }, [isOpen]);

  return (
    <article className="dash-home-bg rounded-xl global-shadow ">
      <header
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between cursor-pointer py-3 px-4"
      >
        <h3 className="text-[0.9rem] xs:text-base font-Montserrat font-semibold">
          <div
            dangerouslySetInnerHTML={{
              __html: heading,
            }}
          />
        </h3>

        <div className="arrow flex justify-center items-center ml-3">
          <img
            className={`max-w-[1.4rem] transform-gpu transition-all duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
            src={arrow}
            alt="arrow"
          />
        </div>
      </header>

      <div
        style={{ maxHeight: isOpen ? paraHeight + "px" : "0" }}
        className={`faq-content transition-all duration-300 overflow-hidden`}
      >
        <div ref={refferance} className="wrapper">
          <div className="text-[0.9rem] xs:text-base px-4 pb-5 pt-4 border-t border-primary/20">
            <div
              className="faq-collaps"
              dangerouslySetInnerHTML={{
                __html: para,
              }}
            />

            {/* temporrayr ************************************* */}
            <div className="faq-collaps hidden">
              <div className="paras">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
