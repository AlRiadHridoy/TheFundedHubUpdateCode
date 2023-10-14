import { useState } from "react";
import FaqCollaps from "./main/FaqCollaps";

export default function FaqContent() {
  const [option, setOption] = useState("Rules");

  const collapsInfo = {
    Rules: [
      [
        "Do you offer <span>Leverage</span>?",
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      ],
      [
        "Can I hold trades over the <span>weekend</span>?",
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      ],
      [
        "Can I have <span>more</span> than one challenge?",
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      ],
      [
        "Is there any <span>restrictions</span> on trading?",
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      ],
      [
        "Can I have <span>more</span> than one challenge?",
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      ],
      [
        "Is there any <span>restrictions</span> on trading?",
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      ],
    ],

    Evaluation: [
      [
        "Can I have more than one challenge?",
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      ],
      [
        "Is there any restrictions on trading?",
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      ],
    ],

    TFH: [
      [
        "Do you offer Leverage?",
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      ],
      [
        "Can I hold trades over the weekend?",
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      ],

      [
        "Can I have more than one challenge?",
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      ],
      [
        "Is there any restrictions on trading?",
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      ],
    ],

    TradingRules: [
      [
        "Do you offer Leverage?",
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      ],
      [
        "Can I hold trades over the weekend?",
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      ],
      [
        "Can I hold trades over the weekend?",
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      ],
      [
        "Is there any restrictions on trading?",
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      ],
    ],
    Billing: [
      [
        "Do you offer Leverage?",
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      ],
      [
        "Can I hold trades over the weekend?",
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      ],
      [
        "Can I hold trades over the weekend?",
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      ],
      [
        "Is there any restrictions on trading?",
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      ],
    ],
  };
  return (
    <div className="top-content relative faq-content">
      <div className="header grid relative">
        <h1 className="text-2xl xs:text-[1.65rem] xs:leading-[0.95] md:text-[1.6rem] font-codePro !leading-8 capitalize mt-2">
          Frequently asked questions
        </h1>
      </div>

      <div className="content grid md:grid-cols-12 gap-12 mt-10 md:mt-20 relative">
        {/* left */}
        <div className="left md:col-span-3 relative">
          <div className="options mr-[1rem] flex flex-wrap md:grid gap-3 relative">
            {/* option */}
            <div
              className={`option py-2 sm:py-3 md:py-[1rem] rounded-xl  border-[3px] bg-[#2B2C30]/[17%] backdrop-blur-3xl cursor-pointer relative transition-all duration-200 before:transition-all before:duration-200 ${
                option === "Rules"
                  ? "border-primary/80 before:opacity-100"
                  : "border-transparent before:opacity-0 hover:border-primary/40"
              }`}
              onClick={() => setOption("Rules")}
            >
              <h5 className="px-3 sm:px-5">Rules</h5>
            </div>
            {/* option */}
            <div
              className={`option py-2 sm:py-3 md:py-[1rem] rounded-xl  border-[3px] bg-[#2B2C30]/[17%] backdrop-blur-3xl cursor-pointer relative transition-all duration-200 before:transition-all before:duration-200 ${
                option === "Evaluation"
                  ? "border-primary/80 before:opacity-100"
                  : "border-transparent before:opacity-0 hover:border-primary/40"
              }`}
              onClick={() => setOption("Evaluation")}
            >
              <h5 className="px-3 sm:px-5">Evaluation Program</h5>
            </div>
            {/* option */}
            <div
              className={`option py-2 sm:py-3 md:py-[1rem] rounded-xl  border-[3px] bg-[#2B2C30]/[17%] backdrop-blur-3xl cursor-pointer relative transition-all duration-200 before:transition-all before:duration-200 ${
                option === "TFH"
                  ? "border-primary/80 before:opacity-100"
                  : "border-transparent before:opacity-0 hover:border-primary/40"
              }`}
              onClick={() => setOption("TFH")}
            >
              <h5 className="px-3 sm:px-5">TFH Funded</h5>
            </div>
            {/* option */}
            <div
              className={`option py-2 sm:py-3 md:py-[1rem] rounded-xl  border-[3px] bg-[#2B2C30]/[17%] backdrop-blur-3xl cursor-pointer relative transition-all duration-200 before:transition-all before:duration-200 ${
                option === "TradingRules"
                  ? "border-primary/80 before:opacity-100"
                  : "border-transparent before:opacity-0 hover:border-primary/40"
              }`}
              onClick={() => setOption("TradingRules")}
            >
              <h5 className="px-3 sm:px-5">Trading Rules</h5>
            </div>
            {/* option */}
            <div
              className={`option py-2 sm:py-3 md:py-[1rem] rounded-xl  border-[3px] bg-[#2B2C30]/[17%] backdrop-blur-3xl cursor-pointer relative transition-all duration-200 before:transition-all before:duration-200 ${
                option === "Billing"
                  ? "border-primary/80 before:opacity-100"
                  : "border-transparent before:opacity-0 hover:border-primary/40"
              }`}
              onClick={() => setOption("Billing")}
            >
              <h5 className="px-3 sm:px-5">Order and Billing</h5>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="right faq-collaps md:col-span-9 flex flex-col gap-4 relative">
          {collapsInfo[option].map((item, index) => (
            <FaqCollaps key={index + option} heading={item[0]} para={item[1]} />
          ))}
        </div>
      </div>
    </div>
  );
}
