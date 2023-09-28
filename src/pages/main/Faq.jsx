import Navbar from "../../components/main/Navbar";
import Footer from "../../components/main/Footer";
import ContactForm from "../../components/ContactForm";

import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import SocialIcons from "../../components/SocialIcons";
import FaqCollaps from "../../components/FaqCollaps";

export default function Faq() {
  const [option, setOption] = useState("Started");
  const { pathname } = useLocation();

  const collapsInfo = {
    Started: [
      [
        "What is The Funded Hub?",
        `<div className="paras">
                  <p>Become a TFH Trader and Grow Your Profits:</p>
                  <ul>
                    <li>
                      Skilled Funded Traders is seeking experienced traders to
                      join their team.
                    </li>
                  </ul>
                </div>
                <div className="paras">
                  <p>Evaluation and Placement Process:</p>
                  <ul>
                    <li>
                      We follow a 2-Step evaluation process to assess trader
                      skills and potential.
                    </li>
                    <li>
                      Successful completion of the evaluation grants traders a
                      seat in our Proprietary Trading Firm.
                    </li>
                    <li>
                      Traders will remotely manage funds and grow their accounts
                      through our scaling plan.
                    </li>
                  </ul>
                </div>
                <div className="paras">
                  <p>Profit Sharing and Loss Coverage:</p>
                  <ul>
                    <li>
                      Funded traders are eligible to retain up to 90% of the
                      profits they generate on funded accounts.
                    </li>
                    <li>
                      In the event of losses the company covers them, providing
                      traders with risk protection.
                    </li>
                  </ul>
                </div>
              </div>`,
      ],
      [
        "How Do I Get Started",
        ` <div className="paras">
                  <b>How to Become a Funded Trader - Step-by-Step Guide</b>
                  <p>Step 1: Visit the Pricing Section:</p>
                  <ul>
                    <li>Go to the home page of our trading platform.</li>
                    <li>
                      Click any of the “Get Funded Now” buttons or the “Client
                      Area” button at the top.
                    </li>
                    <li>
                      Sign-up to gain access to your personal private area and
                      follow the instructions during the registration.
                    </li>
                    <li>
                      In your private area press the “Start new Challenge”
                      button at the top or navigate to the “Billing” section.
                    </li>
                  </ul>
                </div>
                <div className="paras">
                  <p>Step 2: Choose Your Challenge Size:</p>
                  <ul>
                    <li>
                      From the available options, customize the challenge as
                      suits you best.
                    </li>
                  </ul>
                </div>
                <div className="paras">
                  <p>Step 3: Proceed to Checkout and Make Payment:</p>
                  <ul>
                    <li>Add the chosen challenge to your cart.</li>
                    <li>Proceed to the checkout page.</li>
                    <li>
                      Make the payment for the challenge using either
                      credit/debit card or cryptocurrency (ETH, USDC, or DAI on
                      the ERC-20 network).
                    </li>
                  </ul>
                </div>
                <div className="paras">
                  <p>Step 4: Account Credentials and Access:</p>
                  <ul>
                    <li>
                      After payment, you will receive a welcome email within a
                      few minutes to a couple of hours.
                    </li>
                    <li>The email will contain your account credentials.</li>
                    <li>
                      You can now access the trading platform and dashboard
                      using these credentials.
                    </li>
                    <li>
                      Please note that payments via Coinbase Commerce orders may
                      take longer, as they need to be confirmed on the
                      blockchain.
                    </li>
                  </ul>
                </div>
                <div className="paras">
                  <p>Important Note on Cryptocurrency Payment:</p>
                  <ul>
                    <li>
                      We only accept ETH, USDC, and DAI on the ERC-20 network.
                    </li>
                    <li>
                      Sending these cryptocurrencies on any other network
                      besides ERC-20 will result in non-receipt of payment.
                    </li>
                    <li>
                      Unsupported cryptocurrency recovery is not possible, so
                      ensure you use the correct network.
                    </li>
                  </ul>
                </div>
                <div className="paras">
                  <p>Step 5: Review Challenge Rules:</p>
                  <ul>
                    <li>
                      Before starting the challenge, thoroughly review all the
                      rules and guidelines.
                    </li>
                    <li>
                      In case of any doubts, reach out to our live support for
                      clarification.
                    </li>
                  </ul>
                </div>
                <div className="paras">
                  <p>Step 6: KYC/AML Screening:</p>
                  <ul>
                    <li>
                      All funded accounts are subject to a KYC/AML screening
                      before issuance.
                    </li>
                    <li>
                      Ensure you can provide a valid form of ID and proof of
                      address issued within the last 90 days.
                    </li>
                    <li>
                      This step is essential to avoid delays in receiving your
                      funded account if you successfully complete the evaluation
                      phase.
                    </li>
                  </ul>
                  <span>
                    By following these steps, you can register and become one of
                    our funded traders, gaining access to exciting trading
                    opportunities.
                  </span>
                </div>`,
      ],
      [
        "Receiving Your Account",
        `<div className="paras">
                  <b>Receiving Your Trading Account - Timelines and Support</b>
                  <p>Phase 1 Account:</p>
                  <ul>
                    <li>
                      After payment completion, processing of Phase 1 Challenge
                      account begins.
                    </li>
                    <li>
                      Expect to receive your account credentials in less than 5
                      minutes.
                    </li>
                    <li>
                      Check spam or promotional folders if the email is not
                      found initially.
                    </li>
                    <li>
                      If the email is still not located, and you have a
                      confirmed purchase notification, contact our support team
                      via live chat or email.
                    </li>
                  </ul>
                </div>
                <div className="paras">
                  <p>Phase 2 Account:</p>
                  <ul>
                    <li>
                      Phase 2 accounts can take up to 24 hours to be sent.
                    </li>
                    <li>
                      An automated account review is conducted during this
                      period for compliance purposes.
                    </li>
                    <li>
                      The review ensures any violations during Phase 1 are
                      addressed.
                    </li>
                  </ul>
                  <span>By adhering to these timelines and reaching out to our support team if necessary, you can ensure a seamless and efficient process in obtaining your trading account for the desired challenge phase.</span>
                </div>`,
      ],
      [
        "How many accounts can I trade & is there a maximum account size that I can trade?",
        ` <div className="paras">
                  <b>Maximum Capital Allocation for Skilled Funded Traders</b>
                  <p>Active Challenge Accounts Limit:</p>
                  <ul>
                    <li>
                      The Funded Hub members are allowed to have a maximum of
                      $600,000 in active challenge accounts.
                    </li>
                  </ul>
                </div>
                <div className="paras">
                  <p>Active Funded Accounts Limit:</p>
                  <ul>
                    <li>
                      Members can have a maximum of $600,000 in active funded
                      accounts.
                    </li>
                  </ul>
                </div>
                <div className="paras">
                  <p>Clarification on Funded Accounts Trading Limit:</p>
                  <ul>
                    <li>
                      Traders can only trade up to $600,000 in active funded
                      accounts simultaneously.
                    </li>
                    <li>
                      However, traders can have an additional $800,000 in
                      challenge accounts (Phase-1 and Phase-2) alongside the
                      $400,000 max in active funded accounts.
                    </li>
                  </ul>
                </div>
                <div className="paras">
                  <p>Refund Policy for Exceeding Funded Account Limit:</p>
                  <ul>
                    <li>
                      If a trader trades more than $600,000 in active funded
                      accounts at any given time, they will only be refunded for
                      funded accounts that have not been traded.
                    </li>
                    <li>
                      If the funded account that exceeds the $600,000 limit has
                      already been traded, no refund will be provided, and the
                      account will be breached.
                    </li>
                  </ul>
                </div>
                <div className="paras">
                  <p>No Impact on Scaling Plan:</p>
                  <ul>
                    <li>
                      The Maximum Capital Allocation policy does not affect the
                      Scaling Plan.
                    </li>
                  </ul>
                </div>`,
      ],
      [
        "Am I authorized to use a VPN?",
        `<div className="paras">
                  <b>Sole Traders and VPN/VPS Usage Policy</b>
                  <p>Sole Trader Requirement:</p>
                  <ul>
                    <li>
                      All participants in our challenge and funded programs must
                      be the sole traders of their accounts, as stated in our
                      Terms and Conditions.
                    </li>
                  </ul>
                </div>
                <div className="paras">
                  <p>Discouragement of VPN/VPS:</p>
                  <ul>
                    <li>
                      We discourage the use of a VPN or VPS to access trading
                      accounts due to the impact on data tracking in our
                      internal systems.
                    </li>
                    <li>
                      This practice is usually followed by any service that
                      prohibits multiple users on a single account.
                    </li>
                  </ul>
                </div>
                <div className="paras">
                  <p>Permissible Use of VPN/VPS:</p>
                  <ul>
                    <li>
                      It is permissible to use a VPN or VPS; however, if
                      potentially malicious activity is detected on your
                      account, the use of a VPN or VPS will be a significant
                      factor in assessing any violations of our terms and
                      conditions.
                    </li>
                  </ul>
                </div>
                <div className="paras">
                  <p>Compliance with Terms and Conditions:</p>
                  <ul>
                    <li>
                      We kindly request all participants to ensure compliance
                      with our Terms and Conditions, including refraining from
                      having multiple users trade on a single account.
                    </li>
                  </ul>
                </div>
                <div className="paras">
                  <p>Prohibited during KYC/AML Verification:</p>
                  <ul>
                    <li>
                      Connecting to Virtual Private Networks (&quot;VPN&quot;)
                      and Virtual Private Servers (&quot;VPS&quot;) during the
                      KYC/AML verification process is strictly prohibited.
                    </li>
                  </ul>
                </div>
                <div className="paras">
                  <p>Consequences of VPS/VPN Usage during KYC/AML:</p>
                  <ul>
                    <li>
                      If you are connected to a VPS or VPN while completing the
                      KYC process, your account may not receive funding.
                    </li>
                    <li>
                      If it is discovered that you completed the KYC/AML process
                      using a VPS or VPN, your funded account may be disabled or
                      breached.
                    </li>
                  </ul>
                  <span>
                    <p>Note</p>: The above information is subject to change. Please
                    refer to the latest updates on our official website or
                    contact our support team for any queries.
                  </span>
                </div>
                <div className="paras">
                  <p>Contact Options:</p>
                  <ul>
                    <li>
                      Live Chat: Open a conversation on your dashboard <i href="#">here</i>:
                    </li>
                    <li>
                      Email: Contact us by email with general account-related
                      queries: 
                      <a href="mailto: support@thefundedhub.com">
                        support@thefundedhub.com
                      </a>
                    </li>
                  </ul>
                </div>`,
      ],
    ],

    Evaluation: [
      ["Can I have more than one challenge?", ``],
      ["Is there any restrictions on trading?", ``],
    ],

    TFH: [
      ["Do you offer Leverage?", ``],
      ["Can I hold trades over the weekend?", ``],

      ["Can I have more than one challenge?", ``],
      ["Is there any restrictions on trading?", ``],
    ],

    Billing: [
      ["Do you offer Leverage?", ``],
      ["Can I hold trades over the weekend?", ``],
      ["Can I hold trades over the weekend?", ``],
      ["Is there any restrictions on trading?", ``],
    ],
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Navbar />
      <section className="faq relative purple-shadow pt-16 sm:pt-28">
        <div className="container relative">
          <div className="wrapper relative pb-24 sm:pb-36 md:pb-44 w-full grid gap-16 xs:gap-20 md:gap-32 max-w-[75rem] m-auto">
            {/* Top content */}
            <div className="top-content py-10 md:py-20 relative">
              <div className="header grid relative">
                <div className="">
                  <h1 className="text-2xl xs:text-[1.65rem] xs:leading-[0.95] md:text-[1.6rem] font-codePro !leading-8 capitalize mt-2 text-wht-gradient">
                    Frequently asked questions
                  </h1>
                </div>
              </div>

              <div className="content grid md:grid-cols-12 gap-12 mt-10 relative faq-content">
                {/* left */}
                <div className="left md:col-span-3 relative">
                  <div className="options sm:mr-[1rem] flex flex-wrap xs:grid grid-cols-2 md:grid-cols-1 gap-3 relative">
                    {/* option */}
                    <div
                      className={`option text-center text-sm sm:text-base py-2 sm:py-3 md:py-2.5 rounded-xl border-[3px] bg-[#545454]/[15%] backdrop-blur-3xl cursor-pointer relative transition-all duration-200 before:transition-all before:duration-200 ${
                        option === "Started"
                          ? "border-primary/30 before:opacity-40"
                          : "border-transparent before:opacity-0 hover:border-primary/40"
                      }`}
                      onClick={() => setOption("Started")}
                    >
                      <h5 className="px-3 sm:px-5">Getting Started</h5>
                    </div>
                    {/* option */}
                    <div
                      className={`option text-center text-sm sm:text-base py-2 sm:py-3 md:py-2.5 rounded-xl border-[3px] bg-[#545454]/[15%] backdrop-blur-3xl cursor-pointer relative transition-all duration-200 before:transition-all before:duration-200 ${
                        option === "Evaluation"
                          ? "border-primary/30 before:opacity-40"
                          : "border-transparent before:opacity-0 hover:border-primary/40"
                      }`}
                      onClick={() => setOption("Evaluation")}
                    >
                      <h5 className="px-3 sm:px-5">Evaluation Program</h5>
                    </div>
                    {/* option */}
                    <div
                      className={`option text-center text-sm sm:text-base py-2 sm:py-3 md:py-2.5 rounded-xl border-[3px] bg-[#545454]/[15%] backdrop-blur-3xl cursor-pointer relative transition-all duration-200 before:transition-all before:duration-200 ${
                        option === "TFH"
                          ? "border-primary/30 before:opacity-40"
                          : "border-transparent before:opacity-0 hover:border-primary/40"
                      }`}
                      onClick={() => setOption("TFH")}
                    >
                      <h5 className="px-3 sm:px-5">TFH Funded</h5>
                    </div>
                    {/* option */}
                    <div
                      className={`option text-center text-sm sm:text-base py-2 sm:py-3 md:py-2.5 rounded-xl border-[3px] bg-[#545454]/[15%] backdrop-blur-3xl cursor-pointer relative transition-all duration-200 before:transition-all before:duration-200 ${
                        option === "Billing"
                          ? "border-primary/30 before:opacity-40"
                          : "border-transparent before:opacity-0 hover:border-primary/40"
                      }`}
                      onClick={() => setOption("Billing")}
                    >
                      <h5 className="px-3 sm:px-5">Order and Billing</h5>
                    </div>
                  </div>
                </div>
                {/* right */}
                <div className="right faq-collaps md:col-span-9 flex flex-col gap-4 relative">
                  {collapsInfo[option].map((item, index) => (
                    <FaqCollaps
                      key={index + option}
                      heading={item[0]}
                      para={item[1]}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* bottom-cotent */}
            <div className="flex items-center relative">
              <div className="content grid md:grid-cols-3 gap-10  w-full">
                {/* left */}
                <div className="left md:col-span-1 break-all relative">
                  <div className="heading grid gap-2">
                    <div className="wrap">
                      <h3 className="text-3xl text-wht-gradient">Contact Us</h3>
                    </div>
                    <p>
                      Questions? Doubts? <br /> Please contact us anytime and
                      our team will take care of you!
                    </p>
                  </div>

                  <div className="mt-5">
                    <SocialIcons />
                  </div>
                </div>
                {/* Right */}
                <div className="right md:col-span-2 relative">
                  {/* Form */}
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
