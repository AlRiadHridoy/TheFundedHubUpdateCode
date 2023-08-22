import { useEffect } from "react";
import { BsDiscord, BsInstagram, BsTwitter } from "react-icons/bs";
import Footer from "../../components/main/Footer";
import Navbar from "../../components/main/Navbar";
import { useLocation } from "react-router-dom";

export default function ReportProblem() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Navbar />
      <section className="contact relative pb-28 pt-32 sm:pt-44 sm:pb-44 purple-shadow">
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
                {/* Form */}
                <form className="grid gap-6 sm:gap-8 md:gap-10 px-4 py-6 sm:p-8 relative z-10 rounded-xl bg-main-bg/70 border-primary">
                  <div className="head">
                    <h3 className="text-xl sm:text-2xl">Contact Us</h3>
                  </div>
                  <div className="inputs grid sm:grid-cols-2 gap-6">
                    {/* name */}
                    <div className="name">
                      <input
                        name="name"
                        className="name w-full focus:outline-primary/70 bg-main-bg/[75%] border-none outline outline-2 outline-primary/30 py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200 sm:max-w-[22rem]"
                        type="text"
                        placeholder="Name"
                      />
                    </div>
                    {/* surname */}
                    <div className="surname">
                      <input
                        name="surname"
                        className="name w-full focus:outline-primary/70 bg-main-bg/[75%] border-none outline outline-2 outline-primary/30 py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200 sm:max-w-[22rem]"
                        type="text"
                        placeholder="Surname"
                      />
                    </div>
                    {/* email */}
                    <div className="email">
                      <input
                        name="email"
                        className="name w-full focus:outline-primary/70 bg-main-bg/[75%] border-none outline outline-2 outline-primary/30 py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200 sm:max-w-[22rem]"
                        type="email"
                        placeholder="Email"
                      />
                    </div>

                    {/* subject */}
                    <div className="subject">
                      <input
                        name="subject"
                        className="name w-full focus:outline-primary/70 bg-main-bg/[75%] border-none outline outline-2 outline-primary/30 py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200 sm:max-w-[22rem]"
                        type="text"
                        placeholder="Subject"
                      />
                    </div>
                  </div>
                  {/* textarea */}
                  <div className="textarea">
                    <textarea
                      className="focus:outline-primary/70 bg-main-bg/[75%] border-none outline outline-2 outline-primary/30 p-4 rounded-xl transition-all duration-200 w-full min-h-[10rem] sm:min-h-[12rem] md:min-h-[15rem]"
                      name="comment"
                      id="comment"
                      placeholder="Comment"
                    ></textarea>
                  </div>

                  <div className="login-btn flex justify-center items-center">
                    <button className="py-2.5 px-16 transition-all duration-300 rounded-3xl font-Montserrat font-semibold grd-btn-wht pink-glowing-btn">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
