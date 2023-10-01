import { useEffect, useState } from "react";
import Navbar from "../../components/main/Navbar";
import Footer from "../../components/main/Footer";

export default function Checkout() {
  return (
    <>
      <Navbar />
      <section className="py-32 lg:py-44 relative purple-shadow">
        <div className="container z-10 relative">
          <div className="wrapper flex justify-center items-center"></div>
        </div>

        {/* Modal */}
        <div
          className={`modal fixed inset-0 z-[99] flex justify-center items-center overflow-hidden ${
            modalOpen ? "visible opacity-100" : "invisible opacity-0"
          }`}
        >
          <div
            className={`bg absolute inset-0 w-full h-full ${
              modalOpen
                ? "opacity-100 backdrop-blur-xl "
                : "opacity-0 backdrop-blur-none"
            }`}
            onClick={() => setModalOpen(false)}
          ></div>

          <div
            className={`box relative m-6 min-h-[300px] max-w-[600px] w-full text-main dark:text-white bg-light-gray dark:bg-main-bg transition-all duration-300 rounded-3xl z-[999] px-6 ${
              modalOpen ? "visible opacity-100" : "invisible opacity-0"
            }`}
          >
            {/* Tick */}
            <div className="tick pt-5 sm:pt-8 pb-5 sm:pb-8 md:pb-12 flex justify-center items-center">
              <img
                className={`max-w-[3.5rem] exs:max-w-[4rem] sm:max-w-[5rem] md:max-w-[5.5rem] transition-all duration-500 opacity-50 ${
                  modalOpen ? "scale-100" : "scale-0"
                }`}
                src={tick}
                alt="tick"
              />
            </div>

            {/* content */}
            <div className="content grid justify-center items-center text-center gap-4 sm:gap-6 md:gap-8">
              <h2 className="name text-xl exs:text-2xl sm:text-3xl md:text-4xl">
                Welcome to the Hub, {name}!
              </h2>
              {/* text */}
              <em className="text-base font-Montserrat">
                You are in our Hub and you&apos;ll receive soon your Metatrader
                5 Credentials via Email
              </em>

              {/* Registerd email */}
              <div className="registerd rounded-xl mb-6  py-2 px-5 w-full max-w-[30rem] m-auto">
                <div className="usermail text-white rounded-lg border-2 border-primary/40 px-4 py-3 flex justify-center items-center gap-4">
                  <FaRegUserCircle className="h-6 w-6" />
                  <div className="mail">
                    <em className="font-Montserrat break-all text-[0.9rem] xs:text-base">
                      {email}
                    </em>
                  </div>
                </div>
                {/* goto home */}
                <div className="mt-6 grid gap-0 text-main dark:text-white">
                  <Link to="/" className="underline font-Montserrat">
                    Back to HomePage
                  </Link>
                </div>
              </div>
            </div>
            {/* cross */}
            <div className="cross" onClick={() => setModalOpen(false)}>
              <RxCross1 className="absolute cursor-pointer text-xl sm:text-2xl text-dim-gray right-4 sm:right-6 md:right-8 top-4 sm:top-6 md:top-8" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
