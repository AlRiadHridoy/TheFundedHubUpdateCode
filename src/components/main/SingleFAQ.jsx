/* eslint-disable react/prop-types */
import { useEffect, useState, useRef } from "react";

import { arrow } from "../../ui/images";

export default function SingleFAQ({ heading, para }) {
  const [paraHeight, setparaHeight] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const refferance = useRef(null);

  useEffect(() => {
    setparaHeight(refferance.current.clientHeight);
  }, [isOpen]);

  return (
    <article className="border border-primary/[15%] rounded-2xl">
      <header
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between cursor-pointer py-3 px-4"
      >
        <h3 className="text-[0.9rem] xs:text-base">
          <div
            dangerouslySetInnerHTML={{
              __html: heading,
            }}
          />
        </h3>

        <div className="arrow flex justify-center items-center ml-3">
          <img
            className={`max-w-[1.2rem] transform-gpu transition-all duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
            src={arrow}
            alt="arrow"
          />
        </div>
      </header>

      <div
        style={{ maxHeight: isOpen ? paraHeight + "px" : "0" }}
        className={`content transition-all duration-300 overflow-hidden`}
      >
        <p
          ref={refferance}
          className=" peraH mt-2 text-[0.9rem] xs:text-base pb-6 px-4"
        >
          {para}
        </p>
      </div>
    </article>
  );
}
