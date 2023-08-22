import { useEffect } from "react";
import Navbar from "../../components/main/Navbar";
import Footer from "../../components/main/Footer";
import { useLocation } from "react-router-dom";

export default function RiskDisclosure() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Navbar />
      <main className="privacy pb-28 pt-32 sm:pt-44 border-b border-gray-400/20 purple-shadow">
        <div className="container relative">
          <div className="wrapper font-light grid gap-6 z-10 relative max-w-[65rem] m-auto">
            <div className="heading text-center">
              <h2 className="text-3xl font-codeProBold">Risk Disclosure</h2>
            </div>

            <div className="content grid gap-5">
              <p>
                The Funded Hub&apos;s content is intended to be generic in
                nature. A recommendation, endorsement, or sponsorship of any
                security, company, or fund is not intended by the
                Company`&apos;s information. Lesser-known clients or consumers
                may not be represented in testimonials on the Company&apos;s
                websites. The Company, its partners, representatives, agents,
                employees, and contractors accept no responsibility or liability
                for any use or misuse of such information.
              </p>

              <p>
                <div>
                  Futures and FX trading are not suitable for all investors.
                </div>
                An investor may lose all or part of their initial investment.
                Trading should only be done with risk capital—money that can be
                lost without endangering one&apos;s financial stability or
                lifestyle. This is not a solicitation or offer to buy or sell
                futures, options, or forex. Past performance does not guarantee
                future results.
              </p>

              <p>
                There are some restrictions under CFTC Rule 4.41 - Hypothetical
                or simulated performance outcomes Simulated outcomes do not
                represent actual trading. Because the deals were not actually
                performed, the outcomes may have under-or over-compensated for
                market conditions like lack of liquidity. Simulated trading
                programs are generally created with the advantage of hindsight.
                Notification that any account will or is likely to generate such
                profit or loss is made.
              </p>

              <p>
                <div>Risky Warning:</div>
                Margin trading CFDs include a high level of risk and are not
                suited for all investors. Before trading CFDs, you should
                carefully assess your trading objectives, experience, and risk
                appetite. You could lose more than your initial investment, so
                don&apos;t deposit anything you can&apos;t afford to lose.
                Understand the hazards and take precautions to manage them.
              </p>
              <p>
                The site may contain links to third-party websites. Information
                or materials posted on sites connected to our site have not been
                reviewed by our company and are not our responsibility. By
                linking to a third-party website, the Company is not endorsing
                or recommending any of the third-product parties or This
                site&apos;s content is solely for informational purposes. It
                should not be construed as an offer or solicitation in any area
                where such action is prohibited or as a suggestion to purchase,
                sell, or otherwise deal with any particular currency or precious
                metal trade. You should exit this site immediately if you are
                unsure about your local currency and spot metal trading laws.
              </p>
              <p>
                It is advised to be aware of any local laws. Before trading
                currencies or metals, you should seek independent financial,
                legal, and tax counsel. This site does not constitute advice
                from the Company or any of its affiliates, directors, officers,
                or employees.
              </p>
              <p>
                Any person in any nation or territory where such distribution or
                usage would be contrary to local law or regulation is prohibited
                from using the Company&apos;s services.
              </p>
              <p>
                We want to sharpen your trading style more than ever. We believe
                that you will perform the best when you are within your comfort
                zone. So you’re allowed to trade with any trading style that you
                like most. We aim to get the best out of you and once you trade
                freely. We all will grow together. So choose your trading plan
                wisely.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
