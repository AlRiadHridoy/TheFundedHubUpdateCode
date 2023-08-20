import { useEffect, useState } from "react";

import { arrow } from "../ui/images";

export default function PriceCollapse({
  data,
  state,
  close,

  identity,
  priceChange,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [val, setVal] = useState(data[0]);

  const onchage = (item) => {
    setVal(item);
    setIsOpen(false);
    if (state) {
      state(item);
    }
  };

  useEffect(() => {
    if (close !== identity) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }, [close]);

  useEffect(() => {
    setVal(data[0]);
  }, [priceChange]);

  return (
    <>
      <div className="relative">
        <select
          id="option"
          name="option"
          onChange={(e) => onchage(e.target.value)}
          className="form-control focus:outline-primary/70 border-none outline outline-1 sm:outline-2 outline-primary/30 h-[2.2rem] px-2 xs:px-3 md:px-4 transition-all duration-200 bg-light/20 rounded-xl w-[7rem] xs:w-[9rem] md:w-[9.5rem] capitalize text-[0.9rem] font-Montserrat font-medium relative z-10"
        >
          {data.map((option, index) => {
            return (
              <option key={index + option} value={option}>
                {option}
              </option>
            );
          })}
        </select>
        {/* arrow */}
        <div className="arrow absolute right-[0.55rem] top-1/2 transform -translate-y-1/2">
          <img className="w-[0.9rem]" src={arrow} alt="arrow" />
        </div>
      </div>
    </>
  );
}
