import { Link } from "react-router-dom";
import { footerBg, mainLogo } from "../../ui/images";
import { BsTwitter, BsInstagram, BsDiscord } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Footer() {
  const [active, setActive] = useState("");
  const { pathname } = useLocation();

  useEffect(() => {
    setActive(pathname);
  }, []);

  console.log(pathname, active);

  return (
    <footer className="footer relative bg-black sm:bg-main-bg pt-12 pb-5 z-40">
      <div className="container relative z-10">
        {/* Footer Desktop */}
        <div className="footer-desktop hidden lg:grid gap-10">
          <div className="top flex justify-between">
            <div className="left ">
              <Link to="/" className="main-logo flex gap-1">
                <img
                  className="max-w-[10rem]"
                  src={mainLogo}
                  alt="TheFundedHub"
                />
              </Link>
            </div>

            {/* middle */}
            <div className="middle grid gap-6 justify-end items-center">
              <div className="item flex justify-center items-center">
                <ul className="flex font-Montserrat font-medium gap-4 flex-wrap md:flex-nowrap">
                  <li>
                    <Link
                      onClick={() => setActive("/terms-condition")}
                      to="/terms-condition"
                      className={`text-sm  hover:text-white transition-all duration-300 ${
                        active === "/terms-condition"
                          ? "text-white"
                          : "text-white/40"
                      }`}
                    >
                      Terms and Condition
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => setActive("/privacy-policy")}
                      to="/privacy-policy"
                      className={`text-sm  hover:text-white transition-all duration-300 ${
                        active === "/privacy-policy"
                          ? "text-white"
                          : "text-white/40"
                      }`}
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => setActive("/cookie-policy")}
                      to="/cookie-policy"
                      className={`text-sm  hover:text-white transition-all duration-300 ${
                        active === "/cookie-policy"
                          ? "text-white"
                          : "text-white/40"
                      }`}
                    >
                      Cookie Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => setActive("/risk-disclosure")}
                      to="/risk-disclosure"
                      className={`text-sm  hover:text-white transition-all duration-300 ${
                        active === "/risk-disclosure"
                          ? "text-white"
                          : "text-white/40"
                      }`}
                    >
                      Risk Disclosure
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => setActive("/report-problem")}
                      to="/report-problem"
                      className={`text-sm  hover:text-white transition-all duration-300 ${
                        active === "/report-problem"
                          ? "text-white"
                          : "text-white/40"
                      }`}
                    >
                      Report a problem
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="item">
                <div className="info grid text-center">
                  <span className="uppercase text-sm font-codePro">
                    THE FUNDED HUB GLOBAL LLP
                  </span>
                  <span className="text-sm">
                    27 Old Gloucester Street, London, United Kingdom, WC1N 3AX
                  </span>
                </div>
              </div>
            </div>

            {/* right */}
            <div className="right">
              {/* logos */}
              <div className="logos flex justify-center items-center gap-4">
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
          </div>

          <div className="bottom">
            <div className="hidden sm:block bottom-content text-center">
              <p className="text-[0.65rem] font-light">
                The Funded Hub is a brand owned by THE FUNDED HUB GLOBAL LLP
                (Company number: OC448629)
              </p>
              <p className="text-[0.65rem] font-light mt-2">
                The Funded Hub is a brand owned by THE FUNDED HUB GLOBAL LLP.
                All information available on this site is intended solely for
                the study purposes related to trading on financial markets and
                does not serve in any way as a specific investment
                recommendation, business recommendation, investment opportunity
                analysis or similar general recommendation regarding the trading
                of investment instruments. Trading in financial markets is a
                high-risk activity and it is advised not to risk more than one
                can afford to lose! THE FUNDED HUB GLOBAL LLP does not provide
                any of the investment services listed in the Capital Market
                Undertakings Act No. 256/2004 Coll. The information on this site
                is not directed at residents in any country or jurisdiction
                where such distribution or use would be contrary to local laws
                or regulations. Either The Funded Hub and THE FUNDED HUB GLOBAL
                LLP is not a broker and do not accept deposits. The offered
                technical solution for the The Funded Hub MT5 platforms and data
                feed are powered by our institutional liquidity providers.
              </p>
            </div>
          </div>
        </div>
        {/* Footer Mobile */}
        <div className="footer-mobile grid gap-6 lg:hidden">
          <div className="flex justify-between gap-4">
            <div className="logo flex justify-center items-center">
              <Link to="/" className="main-logo flex gap-1">
                <img
                  className="max-w-[8rem]"
                  src={mainLogo}
                  alt="TheFundedHub"
                />
              </Link>
            </div>
            {/* logos */}
            <div className="logos flex justify-center items-center gap-4">
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
          {/* content */}
          <div className="content grid gap-8 mt-4">
            <div className="top">
              <div className="items gap-4">
                <div className="item grid justify-center items-center">
                  <ul className="flex flex-wrap gap-4 justify-center items-center">
                    <li>
                      <Link
                        onClick={() => setActive("/terms-condition")}
                        to="/terms-condition"
                        className={` ${
                          active === "/terms-condition"
                            ? "text-white"
                            : "text-white/40"
                        } hover:text-white`}
                      >
                        Term and Condition
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setActive("/privacy-policy")}
                        to="/privacy-policy"
                        className={` ${
                          active === "/privacy-policy"
                            ? "text-white"
                            : "text-white/40"
                        } hover:text-white`}
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setActive("/ookie-policy")}
                        to="/cookie-policy"
                        className={` ${
                          active === "/cookie-policy"
                            ? "text-white"
                            : "text-white/40"
                        } hover:text-white`}
                      >
                        Cookie Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setActive("/risk-disclosure")}
                        to="/risk-disclosure"
                        className={` ${
                          active === "/risk-disclosure"
                            ? "text-white"
                            : "text-white/40"
                        } hover:text-white`}
                      >
                        Risk Disclosure
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setActive("/report-problem")}
                        to="/report-problem"
                        className={` ${
                          active === "/report-problem"
                            ? "text-white"
                            : "text-white/40"
                        } hover:text-white`}
                      >
                        Report a problem
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* last item */}
                <div className="item mt-12 text-center col-span-full">
                  <div className="info grid">
                    <span className="uppercase text-[0.9rem] font-codePro">
                      THE FUNDED HUB GLOBAL LLP
                    </span>
                    <span className="text-sm font-Montserrat">
                      27 Old Gloucester Street, London, United Kingdom, WC1N 3AX
                    </span>
                  </div>
                </div>
              </div>

              {/* bottom */}
            </div>
            <div className="bottom text-center">
              <p className="text-[0.65rem] font-light">
                The Funded Hub is a brand owned by THE FUNDED HUB GLOBAL LLP
                (Company number: OC448629)
              </p>
              <p className="text-[0.65rem] font-light mt-2">
                The Funded Hub is a brand owned by THE FUNDED HUB GLOBAL LLP.
                All information available on this site is intended solely for
                the study purposes related to trading on financial markets and
                does not serve in any way as a specific investment
                recommendation, business recommendation, investment opportunity
                analysis or similar general recommendation regarding the trading
                of investment instruments. Trading in financial markets is a
                high-risk activity and it is advised not to risk more than one
                can afford to lose! THE FUNDED HUB GLOBAL LLP does not provide
                any of the investment services listed in the Capital Market
                Undertakings Act No. 256/2004 Coll. The information on this site
                is not directed at residents in any country or jurisdiction
                where such distribution or use would be contrary to local laws
                or regulations. Either The Funded Hub and THE FUNDED HUB GLOBAL
                LLP is not a broker and do not accept deposits. The offered
                technical solution for the The Funded Hub MT5 platforms and data
                feed are powered by our institutional liquidity providers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
