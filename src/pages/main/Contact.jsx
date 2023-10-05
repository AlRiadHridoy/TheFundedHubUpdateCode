import Navbar from "../../components/main/Navbar";
import Footer from "../../components/main/Footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import ContactForm from "../../components/ContactForm";
import SocialIcons from "../../components/SocialIcons";

export default function Contact() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Navbar />
      <section className="contact bg-dark relative pt-32 sm:pt-48 pb-28 sm:pb-44 purple-shadow">
        <div className="container z-10 relative">
          <div className="wrapper flex items-center justify-center w-full">
            <div className="content grid md:grid-cols-3 gap-10 max-w-[75rem] w-full">
              {/* left */}
              <div className="left md:col-span-1">
                <div className="heading grid gap-2">
                  <div className="wrap">
                    <h3 className="text-3xl text-wht-gradient">Contact Us</h3>
                  </div>

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
              <div className="right md:col-span-2">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
