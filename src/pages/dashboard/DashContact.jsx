import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import SocialIcons from "../../components/SocialIcons";
import ContactForm from "../../components/ContactForm";

export default function DashContact() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <main className="contact content-wrapper pt-16 sm:pb-6 sm:pt-24 min-h-screen bg-black  purple-shadow-dash">
      <div className="px-6 py-[20px] z-10 relative md:ml-1">
        <div className="breadcrumb-wrap">
          <div className="breadcrumb-title">Contact</div>
        </div>
        <div className="wrapper flex items-center w-full relative">
          <div className="content grid md:grid-cols-3 gap-10 w-full">
            {/* left */}
            <div className="left md:col-span-1 break-all ">
              <div className="heading grid gap-2">
                <p>
                  Questions? Doubts? <br /> Please contact us anytime and our
                  team will take care of you!
                </p>
              </div>

              <div className="mt-5">
                <SocialIcons />
              </div>
            </div>
            {/* Right */}
            <div className="right md:col-span-2 max-w-[50rem] w-full">
              <ContactForm clr={"dash-bar-clr"} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
