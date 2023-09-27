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
          className="price-table-select"
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
