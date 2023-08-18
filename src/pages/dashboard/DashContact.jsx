import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import { BsDiscord, BsInstagram, BsTwitter } from "react-icons/bs";

import { MdPermContactCalendar } from "react-icons/md";
import ContactForm from "../../components/ContactForm";

export default function DashContact() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <main className="contact content-wrapper pt-16 sm:pb-6 sm:pt-24 min-h-screen bg-black  purple-shadown-dash">
      <div className="px-6 py-[20px] z-10 relative">
        <div className="breadcrumb-wrap">
          <div className="breadcrumb-title ">
            <MdPermContactCalendar className="breadcrumb-icon" />
            Contact
          </div>
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

              {/* logos */}
              <div className="logos flex gap-4 mt-5">
                <a
                  target="__blank"
                  href="https://discord.gg/GVXNaVTr"
                  className="logo h-8 w-8 rounded-md bg-white/[62%] hover:bg-wht transition-all duration-300 flex justify-center items-center"
                >
                  <BsDiscord className="text-main-bg h-5 w-5 " />
                </a>
                <a
                  target="__blank"
                  href="https://www.instagram.com/fundedhub/"
                  className="logo h-8 w-8 rounded-full bg-white/[62%] hover:bg-wht transition-all duration-300 flex justify-center items-center"
                >
                  <BsInstagram className="text-main-bg h-5 w-5 " />
                </a>
                <a
                  target="__blank"
                  href="https://twitter.com/TheFundedHub"
                  className="logo h-8 w-8 rounded-full bg-white/[62%] hover:bg-wht transition-all duration-300 flex justify-center items-center"
                >
                  <BsTwitter className="text-main-bg h-5 w-5 " />
                </a>
              </div>
            </div>
            {/* Right */}
            <div className="right md:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
