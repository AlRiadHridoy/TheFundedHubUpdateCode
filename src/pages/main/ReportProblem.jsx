import { useEffect } from "react";
import SocialIcons from "../../components/SocialIcons";
import Footer from "../../components/main/Footer";
import Navbar from "../../components/main/Navbar";
import { useLocation } from "react-router-dom";
import Contactform from "../../components/Contactform";

export default function ReportProblem() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Navbar />
      <section className="contact bg-dark relative pb-28 pt-32 sm:pt-44 sm:pb-44 purple-shadow">
        <div className="container z-10 relative">
          <div className="wrapper flex items-center w-full">
            <div className="content grid md:grid-cols-3 gap-10 max-w-[75rem] w-full m-auto">
              {/* left */}
              <div className="left md:col-span-1 break-all ">
                <div className="heading grid gap-2">
                  <h3 className="text-3xl">Report a Problem</h3>
                  <p>
                    Did you notice any bug or technical error? <br /> Please let
                    us know!
                  </p>
                </div>

                <div className="mt-5">
                  <SocialIcons />
                </div>
              </div>
              {/* Right */}
              <div className="right md:col-span-2">
                <Contactform header={"Contact Us"} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
