import { AiOutlineLock } from "react-icons/ai";

import one from "../../assets/images/certificates/PHASE1-PASSED.png";
import two from "../../assets/images/certificates/PHASE2-PASSED.png";
import three from "../../assets/images/certificates/FIRST-PAYOUT.png";
import four from "../../assets/images/certificates/SECOND-AND-OTHER-PAYOUT.png";
import five from "../../assets/images/certificates/PERSONAL-RECORD.png";
import six from "../../assets/images/certificates/MAX-ALLOCATED.png";

const certificates = [one, two, three, four, five, six];

export default function Certificate() {
  return (
    <main className="certificate relative pt-16 sm:pb-6 sm:pt-24 min-h-screen bg-black  purple-shadow-dash">
      <div className="content-wrapper relative">
        <div className="inner-content px-6 relative">
          {/* locks */}
          <div className="certificates grid sm:grid-cols-2 lg:grid-cols-3 gap-4 fmd:mx-w-[80%] 2xl:fmax-w-[70rem]">
            {certificates.map((certi, index) => {
              return (
                <div className="item relative rounded-2xl border-2 border-primary/40 overflow-hidden" key={index}>
                  <div className="img relative after:absolute after:inset-0 after:bg-main-bg/80 after:h-full after:w-full">
                    <img
                      className="w-full"
                      src={certi}
                      alt={"certificate-" + index}
                    />
                  </div>
                  <div className="lock flex flex-col gap-4 justify-center items-center absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                    <AiOutlineLock className="text-[3.2rem]" />

                    <div className="btn whitespace-nowrap dash-btn py-2 px-9 rounded-3xl cursor-pointer">
                      {index === 0 || index === 1
                        ? `PHASE ${index + 1}`
                        : index === 2
                        ? "FIRST PAYOUT"
                        : index === 3
                        ? "NEW PAYOUT"
                        : index === 4
                        ? "YOUR RECORD"
                        : "MAX ALLOCATED"}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
