import { Link } from "react-router-dom";

import SingleFAQ from "./SingleFAQ";
import MotionX from "../../ui/MotionX";
import MotionY from "../../ui/MotionY";

export default function FAQ() {
  const headings = [
    `Do you offer  Leverage?`,
    `Do you offer  Leverage?`,
    `Do you offer  Leverage?`,
    `Do you offer  Leverage?`,
  ];

  const paras = [
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, saepe necessitatibus totam corrupti,Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, saepe necessitatibus totam corrupti,Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, saepe necessitatibus totam corrupti,Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla,",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, saepe necessitatibus totam corrupti,",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, saepe necessitatibus totam corrupti,",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, saepe necessitatibus totam corrupti,",
  ];

  return (
    <section className="faq relative pt-28">
      <div className="container relative z-10">
        <div className="wrapper grid gap-8 justify-center items-center">
          <div className="heading flex flex-col gap-2 justify-center items-center text-center">
            <MotionX delay={0.1}>
              <h2 className="font-medium text-2xl xs:text-[1.7rem] tracking-tight text-wht-gradient">
                FAQ
              </h2>
            </MotionX>

            <div className="paras">
              <MotionX delay={0.2}>
                <p className="fo">
                  If you don&apos;t find an answer in the frequently asked
                  questions don&apos;t hesitate to{" "}
                  <Link to="/contact" className="underline font-semibold">
                    contact us
                  </Link>
                </p>
              </MotionX>
            </div>
          </div>

          <div className="articles md:max-w-[60rem] m-auto grid gap-5">
            {headings.map((heading, index) => (
              <MotionY key={index} delay={index / 10} cls={""}>
                <SingleFAQ heading={heading} para={paras[index]} />
              </MotionY>
            ))}
          </div>

          <div className="readmore flex justify-center mb-12 xs:mb-24 md:mb-32">
            <Link
              to="faq"
              className="text-xs x:text-sm font-bold py-2 px-10 border-2 border-primary/20 rounded-3xl"
            >
              Visit FAQ Page
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
