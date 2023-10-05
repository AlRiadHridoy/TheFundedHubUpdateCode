import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../../components/main/Footer";
import Navbar from "../../components/main/Navbar";

export default function TermCondition() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Navbar />
      <main className="terms-condition bg-dark pb-28 pt-32 sm:pt-44 border-b border-gray-400/20 purple-shadow">
        <div className="container relative">
          <div className="wrapper font-light grid gap-6 z-10 relative max-w-[65rem] m-auto">
            <div className="heading text-center">
              <h2 className="text-3xl font-codeProBold">Terms of Service</h2>
            </div>
            <div className="content grid gap-5">
              <h4 className="text-xl">Overview</h4>
              <p>
                By using our site and/or purchasing something from us, you
                participate in our &apos;Service&apos; and agree to be bound by
                the following terms and conditions (&apos;Terms of
                Service&apos;, &apos;Terms&apos;), as well as any other terms
                and conditions and policies linked herein and/or accessible
                through a hyperlink. These Terms of Service apply to all users
                of the site, including but not limited to browsers, vendors,
                consumers, merchants, and/or content creators.
              </p>
              <p>
                Please carefully read these Terms of Service before accessing or
                using our website. You agree to be bound by these Terms of
                Service by accessing or using any portion of the site. You may
                not visit the website or use any services if you do not agree to
                all of the terms and conditions of this agreement. Acceptance is
                solely restricted to these Terms of Service if these Terms of
                Service are deemed an offer. The Services are only available to
                those over the age of 18 who live in the countries where the
                Services are provided.
                <br />
                Any additional features or tools added to the existing site
                (within the given accounts area) will be subject to the Terms of
                Service as well. The most recent version of the Terms of Service
                will be seen on this page at any time. By making updates and/or
                modifications to our website, we retain the right to update,
                amend, or replace any portion of these Terms of Service. It is
                your right and obligation to check this page for updates on a
                regular basis. Your continued use or access to the website after
                such modifications are posted implies acceptance of those
                changes.
              </p>
              <p>
                IN ACCORDANCE WITH APPLICABLE LAWS, NONE OF THE SERVICES
                PROVIDED TO YOU BY THE PROVIDER CAN BE CONSIDERED INVESTMENT
                SERVICES. THE PROVIDER DOES NOT GIVE OR PROVIDE TO YOU ANY
                GUIDANCE, INSTRUCTIONS, OR INFORMATION ABOUT HOW OR IN WHAT
                MANNER YOU SHOULD PERFORM TRANSACTIONS WHEN USING THE SERVICES
                OR OTHERWISE, OR ANY OTHER SIMILAR INFORMATION ABOUT THE
                INVESTMENT TOOLS TRADED, AND THE PROVIDER DOES NOT ACCEPT ANY
                SUCH GUIDANCE, INSTRUCTIONS, OR INFORMATION FROM YOU. NEITHER
                THE SERVICES NOR THE RECOMMENDATIONS CONSTITUTE INVESTMENT
                ADVICE.THE PROVIDER&apos;S EMPLOYEES, STAFF, AND REPRESENTATIVES
                ARE NOT AUTHORIZED TO GIVE INVESTMENT ADVICE OR RECOMMENDATIONS.
                IF ANY INFORMATION OR STATEMENT OF THE PROVIDER&apos;S
                EMPLOYEES, STAFF, OR REPRESENTATIVES IS INTERPRETED AS
                INVESTMENT ADVICE OR RECOMMENDATIONS, THE PROVIDER EXPLICITLY
                DISCLAIMS THAT SUCH INFORMATION OR STATEMENT IS INVESTMENT
                ADVICE OR RECOMMENDATIONS AND SHALL NOT BE RESPONSIBLE FOR THEM.
              </p>
              <p>
                We may give third parties access to our website in order to
                debug and/or maintain issues with our website, database, or
                infrastructure. After the scope of work is undertaken, these
                accesses are monitored and restricted. ALL PAYMENTS ARE FINAL
                AND ONLY FOR THE PURPOSE OF EVALUATION.
              </p>
              <p>
                You must pay registration fees in order to have access to the
                TheFundedHub (THE FUNDED HUB GLOBAL LLP) platform, models, and
                services. If the service has begun (i.e the client has started
                trading and/or the client has not successfully completed the
                Evaluation, the customer is not entitled to a refund of the
                registration fee, Evaluation Program that are part of the
                TheFundedHub offer are not due a refund.
              </p>
              <p>
                <div className="font-semibold">
                  Section 1 - Terms of Online Registration
                </div>
                In signing these Terms of Service, you officially confirm that
                you are of legal age in your state or province of residence, or
                that you are of legal age and have given us your permission to
                allow any of your minor children to use this site. As a
                condition of using the Service, you agree that you will not
                engage in any illegal or unauthorized activity (including but
                not limited to copyright laws). Your Services will be terminated
                immediately if you violate any of the Terms.
              </p>
              <p>
                <div className="font-semibold">
                  Section 2 – General Conditions
                </div>
                We have the right to refuse service to anyone at any time for
                any reason. You acknowledge that your content (except credit
                card information) may be conveyed unencrypted and may entail (a)
                transmissions across different networks, and (b) modifications
                to conform and adapt to the technical requirements of connecting
                networks or devices. Whenever credit card information is sent
                over a network, it is always encrypted. Without our explicit
                written consent, you undertake not to replicate, duplicate,
                copy, sell, resell, or exploit any component of the Service, use
                of the Service, or access to the Service or any contact on the
                website through which the service is offered. The titles in this
                agreement are given solely for convenience and have no bearing
                on the Terms.
              </p>
              <p>
                <div className="font-semibold">
                  Section 3 – Information Accuracy, Completeness, and Timeliness
                </div>
                We make every effort to assure that the information we give is
                reliable; nevertheless, the information is also provided by
                third parties, and we are not responsible if the material on
                this site is not accurate, full, or up to date. This site&apos;s
                content is intended for general information purposes only and
                should not be relied on or used as the only basis for making
                choices without contacting primary, more accurate, more
                complete, or more current sources of information. Any reliance
                on the information on this site is entirely at your own risk. To
                reduce your risk, you may always send an email to
                <a href="mailto: info@thefundedhub.com" className="underline">
                  info@thefundedhub.com
                </a>{" "}
                with your inquiries. This website may contain historical
                information. Historical material is, by definition, out of date
                and is given only for your convenience. We retain the right to
                change the contents of this site at any time, but we are under
                no obligation to update any of the material on our site. You
                acknowledge that it is your obligation to keep track of changes
                to our website.
              </p>
              <p>
                <div className="font-semibold">
                  Section 4 – Changes to the Service and Prices
                </div>
                Our product prices are subject to change without notice. We
                retain the right to alter or discontinue the Service (accounts
                offered) (or any part or content thereof) at any time and
                without notice. We will not be accountable to you or any third
                person if the Service is modified, priced, suspended, or
                discontinued.
              </p>
              <p>
                <div className="font-semibold">
                  Section 5 – Products or Services (if applicable)
                </div>
                We retain the right, but not the obligation, to limit our
                product or service sales to any individual, geographic location,
                or jurisdiction. On a case-by-case basis, we may exercise this
                power. We have the right to limit the number of products or
                services we offer at any time. All product descriptions and
                prices are subject to change at our sole discretion at any time
                without notice. At any moment, we have the right to discontinue
                any product. Any offer made on this site for a product or
                service is invalid where prohibited. We don&apos;t promise that
                the quality of any items, services, information, or other
                material you buy or get from us will match your expectations, or
                that any flaws in the Service will be rectified.
              </p>
              <p>
                <div className="font-semibold">
                  Section 6 – Account Information and Billing Accuracy
                </div>
                We have the right to reject any order placed with us. We reserve
                the right, in our sole discretion, to limit or cancel the number
                of items purchased per person, per household, or per order.
                Orders placed by or under the same customer account, the same
                payment card, and/or orders using the same billing and/or
                delivery address may be subject to these limitations. If we
                alter or cancel an order, we may attempt to tell you by
                contacting the e-mail address and/or billing address/phone
                number supplied at the time the transaction was placed. We have
                the right to limit or prohibit orders that appear to be placed
                by dealers, resellers, or unlicensed distributors at our sole
                discretion. For any purchases made at our site, you agree to
                provide current, complete, and accurate purchase and account
                information. You agree to keep your account and other
                information up to date, including your email address, credit
                card numbers, and expiry dates so that we can process
                transactions and contact you as required.
              </p>
              <p>
                <div className="font-semibold">
                  Section 7 – Additional Resources
                </div>
                We may offer you access to third-party tools over which we have
                no control or involvement. You understand and agree that we
                provide access to such tools &apos;as is&apos; and &apos;as
                available,&apos; with no warranties, representations, or
                obligations of any kind, and without any endorsement. We accept
                no liability originating from or related to your use of optional
                third-party tools. Any use of optional tools made available
                through the site is solely at your own risk and discretion, and
                you should ensure that you are acquainted with and approve of
                the conditions under which the tools are made available by the
                relevant third-party source (s). We may also provide new
                services and/or features on the website in the future
                (including, the release of new tools and resources). These Terms
                of Service will apply to any additional features and/or
                services.
              </p>
              <p>
                <div className="font-semibold">Section 8 – External Links</div>
                Third-party materials may be included in certain content,
                products, and services offered via our Service. Third-party
                links on our site may take you to websites that are not
                associated with us. We are not responsible for reviewing or
                assessing the content or accuracy, and we make no warranty and
                accept no liability or obligation for any third-party materials
                or websites, or for any other materials, products, or services
                provided by third parties. We are not responsible for any risk
                or damages resulting from the purchase or use of goods,
                services, resources, materials, or other transactions conducted
                in connection with any third-party websites. Please carefully
                research and understand the third-rules parties and procedures
                before engaging in any transaction. Third-party product
                complaints, claims, concerns, or inquiries should be directed to
                the third party.
              </p>
              <p>
                <div className="font-semibold">
                  Section 9 – Comments, Feedback, and Other Submissions from
                  Users
                </div>
                If you send us creative ideas, suggestions, proposals, plans, or
                other materials (collectively, &apos;comments&apos;), whether
                online, by email, by postal mail, or otherwise (collectively,
                &apos;comments&apos;), you agree that we may, at any time,
                without restriction, edit, copy, publish, distribute, translate,
                and otherwise use any comments that you forward to us in any
                medium. We are not and will not be obligated to (1) keep any
                comments confidential; (2) compensate for any remarks; or (3)
                reply to any comments.
              </p>
              <p>
                We may, but are under no obligation to, monitor, edit, or delete
                material that we consider to be illegal, offensive, threatening,
                libelous, defamatory, pornographic, obscene, or otherwise
                objectionable, or that infringes any party&apos;s intellectual
                property or these Terms of Service.
              </p>
              <p>
                You agree that your comments will not infringe on any third
                rights, parties including copyright, trademark, privacy,
                personality, or any other personal or property right. You
                further agree that your comments will not contain libelous or
                otherwise illegal, abusive, or obscene content, nor will they
                contain any computer virus or other malware that might interfere
                with the functioning of the Service or any connected website.
                You may not use a fraudulent e-mail address, pose as someone
                other than yourself, or otherwise mislead us or third parties
                about the origin of any remarks. Any comments you make, as well
                as their correctness, are completely your responsibility. We
                accept no responsibility or liability for any remarks posted by
                you or any other party.
              </p>
              <p>
                <div className="font-semibold">
                  Section 10 – Personal Information
                </div>
                Our Privacy Policy governs the submission of personal data
                through the website.
              </p>
              <p>
                <div className="font-semibold">
                  Section 11 – Errors, Inaccuracies, and Omissions
                </div>
                On rare occasions, information on our site or in the Service may
                contain typographical errors, inaccuracies, or omissions
                relating to product descriptions, price, promotions, offers,
                product shipping charges, transit times, or availability. If any
                information in the Service or on any connected website is
                erroneous, we have the right to remedy any mistakes,
                inaccuracies, or omissions, and to modify or update information
                or cancel orders at any time without prior notice (including
                after you have submitted your order). Except as required by law,
                we make no commitment to update, revise, or clarify anything in
                the Service or on any connected website, including, without
                limitation, price information. There is no specific update or
                refresh date applied in the Service or on any associated website
                to indicate that all information in the Service or on any
                related website has been edited or updated.
              </p>
              <p>
                <div className="font-semibold">
                  Section 12 – Restricted Uses
                </div>
                You are prohibited from using the site or its content: (a) for
                any illegal purpose; (b) to solicit others to perform or
                participate in any unlawful acts; (c) to violate any regional
                and global, federal, provincial, or state regulations, rules,
                laws, or state regulations; (d) to infringe upon or violate our
                intellectual rights or the intellectual property rights of
                others; and (e) to infringe upon or infringe our intellectual
                rights or the intellectual property rights of others.(e) to
                harass, misuse, insult, harm, besmirch, slander, disparage,
                intimidate, or discriminate due to gender, sexual orientation,
                faith, ethnic background, race, age, national or ethnic origin,
                or incapacity; (f) to submit misinformation; (g) to upload or
                transmit viruses or any other type of malicious code that will
                or may be used to affect the functionality or operation of the
                Service or any related website, other websites, or the Internet;
                (h) to submit false or misleadingFor breaching any of the
                prohibited uses, we retain the right to suspend your usage of
                the Service or any connected website.
              </p>
              <p>
                <div className="font-semibold">
                  Section 13 - Unauthorized trading practices
                </div>
                <ul className=" list-disc ml-8 grid gap-5">
                  <li>
                    It is prohibited for the Customer to intentionally or
                    unintentionally use trading strategies that take advantage
                    of errors in the Services, such as inaccuracies in displayed
                    prices or delays in their updates.
                  </li>

                  <li>
                    The Customer is not permitted to execute trades using an
                    external or slow data feed.
                  </li>
                  <li>
                    The Customer is prohibited from engaging, either alone or in
                    cooperation with others, in any trades or combination of
                    trades across connected accounts or accounts held with
                    different TheFundedHub entities, if the purpose of such
                    trades is to manipulate trading. Examples of such
                    manipulation include entering into opposite positions
                    simultaneous
                  </li>
                  <li>
                    The Customer is prohibited from conducting trades that
                    violate the terms and conditions of TheFundedHub. Any trades
                    that go against these terms and conditions are not allowed.
                    The Customer must comply with the rules set by TheFundedHub
                    and the Trading Platform when using the Services
                  </li>
                  <li>
                    Do not use any software, artificial intelligence, ultra-high
                    speed, or mass data entry that could manipulate or abuse our
                    systems or services, or give you an unfair advantage.
                  </li>
                  <li>
                    The Customer is prohibited from performing gap trading by
                    opening trades during scheduled major global news,
                    macroeconomic events, or corporate reports or earnings that
                    may affect the relevant financial market for trading
                    financial instruments.
                  </li>
                  <li>
                    The customer is not allowed to perform trades that are
                    inconsistent with the way trading is typically carried out
                    in the forex or any other financial market. They should also
                    avoid any activities that may cause financial or other harm
                    to TheFundedHub Trading, such as over-leveraging,
                    over-exposure, making one-sided bets, or account rolling. If
                    the customer engages in any of these activities, it may
                    raise valid concerns that they are intentionally harming
                    TheFundedHub Trading.
                  </li>
                  <li>
                    As one of our customers, you should be aware of this and
                    acknowledge that all of our services are intended solely for
                    personal use by the customer. As a result, only you may
                    access your TheFundedHub Account and execute transactions.
                    Hence, you should not, and you therefore do not,
                    <ul className="inner-li mt-5 grid gap-5 ml-5">
                      <li className="relative before:absolute before:-left-[1rem] before:top-1/2 before:content-[''] before:h-[0.3rem] before:w-[0.3rem] before:rounded-full before:border">
                        Neither you nor any third party shall participate in or
                        collaborate with any third party to have such third
                        party execute trades for you, whether such third party
                        is a private individual or a professional, or permit
                        access to or trading on your TheFundedHub Account by any
                        third party;
                      </li>
                      <li className="relative before:absolute before:-left-[1rem] before:top-1/2 before:content-[''] before:h-[0.3rem] before:w-[0.3rem] before:rounded-full before:border">
                        Access any third-party TheFundedHub Account, trade on
                        behalf of any third-party, or conduct any account
                        management or similar services where you commit to
                        trade, run, or manage the TheFundedHub Account on behalf
                        of another user, whether professionally or otherwise.
                      </li>
                    </ul>
                  </li>
                  <li className="marker:text-transparent ml-5">
                    Additionally, you agree not to abuse the Services by
                    engaging in trades that do not adhere to market-accepted
                    risk management guidelines for trading on financial markets.
                    This includes, among other things, the following actions:
                    (i)opening positions with sizes that are noticeably larger
                    than those of your other trades, whether on this account or
                    another one of yours; (ii) opening positions with numbers
                    that are noticeably smaller or larger than those of your
                    other trades, whether on this account or another one of
                    yours.(iii) Using high level of margin.
                  </li>
                  <li className="marker:text-transparent ml-5">
                    TheFundedHub reserves the right to determine, at its own
                    discretion, whether certain trades, practices, strategies or
                    situations are Forbidden Trading Practices.
                  </li>
                  <li className="marker:text-transparent ml-5">
                    It is advised that all TheFundedHub clients adhere to the
                    following trading guidelines also. Otherwise, TheFundedHub
                    won&apos;t be held responsible for whatever repercussions it
                    chooses to have.
                    <ul className="mt-5 ml-5 text-wht inner-li">
                      <li className="relative before:absolute before:-left-[1rem] before:top-1/2 before:content-[''] before:h-[0.3rem] before:w-[0.3rem] before:rounded-full before:border">
                        During KYC it’s strictly recommended to provide right
                        information and not to manipulate or try to impersonate
                        others. It is also advised not to use any VPS/VPN during
                        KYC verification.
                      </li>
                    </ul>
                  </li>
                  <li className="marker:text-transparent ml-5">
                    If the Customer engages in any of the prohibited trading
                    practices mentioned above or does not follow the guidelines,
                    TheFundedHub may pause or terminate payout. TheFundedHub may
                    also remove any trades that violate the prohibition from the
                    Customer&apos;s trading history and not count their results
                    in the profits and losses achieved by the demo trading.
                    Furthermore, TheFundedHub Trading reserves the right to
                    cancel the Customer&apos;s TheFundedHub Account immediately
                    and terminate this Agreement, and/or reduce the offered
                    leverage on products to 1:5 or lower on any or all of the
                    Customer&apos;s accounts. If any or all of the prohibited
                    trading practices are performed on one or more TheFundedHub
                    Accounts of one Customer or multiple Customers, or by
                    combining trading on TheFundedHub Account and trading
                    through Evaluation Services (i.e. TheFundedHub Demo phase-1
                    or Phase-2), then TheFundedHub Trading has the right to
                    cancel all TheFundedHub Accounts and terminate respective
                    agreements, used for or involved in the prohibited trading
                    practices.
                  </li>
                </ul>
              </p>
              <p>
                <div className="font-semibold">
                  Section 14 – Limitation of Liability; Disclaimer of Warranties
                </div>
                <p>
                  TheFundedHub does not promise, represent, or assure that your
                  use of our service will be error-free, speedy, secure, or
                  uninterrupted. We do not represent that the results that may
                  be achieved from the use of the service will be accurate or
                  trustworthy. You accept that we may suspend the service for an
                  extended amount of time or terminate it at any moment, with or
                  without notice to you. You expressly acknowledge that your use
                  of the service, or inability to utilize it, is at your own
                  risk. The service and all products and services delivered to
                  you via the service are provided &apos;as is&apos; and
                  &apos;as available for your use, without any express or
                  implied representation, warranties, or conditions of any kind,
                  including all implied warranties or conditions of
                  merchantability, merchantable quality, fitness for a
                  particular purpose, durability, title, and
                  non-infringement.TheFundedHub, our directors, officers,
                  employees, affiliates, agents, contractors, interns,
                  suppliers, service providers, or licensors shall in no event
                  be liable for any injury, loss, claim, or any direct,
                  indirect, incidental, punitive, special, or consequential
                  damages of any kind, including, without limitation, lost
                  profits, lost revenue, lost savings, loss of data, replacement
                  costs, or any similar damages, whether based in contract, tort
                  (including negligence), strict liability, or otherwise, or any
                  loss or damage of any kind incurred as a result of the use of
                  the service or any content (or product) posted, transmitted,
                  or otherwise made available via the service, even if advised
                  of their possibility. Because certain states or countries do
                  not allow the exclusion or limitation of responsibility for
                  consequential or incidental damages, our liability shall be
                  limited to the fullest extent permissible by law in such
                  states or jurisdictions.
                </p>
              </p>
              <p>
                <div className="font-semibold">
                  Section 15 – Indemnification
                </div>
                <p>
                  You indemnify and hold, uphold, and retain Intellimeter and
                  our parent, subsidiaries, affiliates, partners, officers,
                  directors, agents, contractors, licensors, service providers,
                  subcontractors, suppliers, interns, and employees harmless
                  from any claim or demand made by any third party due to or
                  arising out of your breach of these Terms of Service or the
                  documents they incorporate by reference or your violation of
                  any law or regulation.
                </p>
              </p>
              <p>
                <div className="font-semibold">Section 16 – Severability</div>
                <p>
                  If any provision of these Terms of Service is found to be
                  unlawful, void, or unenforceable, that provision shall be
                  enforced to the fullest extent permitted by applicable law,
                  and the unenforceable portion shall be deemed severed from
                  these Terms of Service; however, such determination shall have
                  no bearing on the validity and enforceability of the remaining
                  provisions.
                </p>
              </p>
              <p>
                <div className="font-semibold">Section 17 – Termination</div>
                For all reasons, the parties&apos; responsibilities and
                liabilities accrued prior to the termination date will survive
                the termination of this agreement. Unless and until either you
                or us terminate these Terms of Service, they will remain in
                force. You may terminate these Terms of Service at any time by
                telling us that you no longer want to utilize our Services or by
                discontinuing your usage of our website.
              </p>
              <p>
                We may also terminate this agreement at any time without notice
                if you fail, or we suspect you have failed, to comply with any
                term or provision of these Terms of Service, and you will remain
                liable for all amounts due up to and including the date of
                termination; and/or accordingly deny you access to our Services
                (or any part thereof).
              </p>
              <p>
                <div className="font-semibold">Section 18 – Refund Policy</div>
                By sending an e-mail to{" "}
                <a href="mailto: info@thefundedhub.com" className="underline">
                  info@thefundedhub.com
                </a>
                , the Customer may request the termination of the Client Section
                at any time. Sending a request to cancel the Client Section is
                regarded as a request by the Customer to terminate the contract,
                with the Customer losing access to the Services, including the
                Client Section and Trading Platform. The Provider will send an
                email to the Customer to confirm receipt of the request, at
                which point the contractual relationship between the Customer
                and the Provider will be dissolved. The Customer is not entitled
                to a refund of any fees previously paid or other expenditures
                spent in this situation.
              </p>
              <p>
                If the Customer engages in any of the forbidden practices
                repeatedly, and the Provider has previously notified the
                Customer thereof, the Provider may prevent the Customer from
                accessing all Services or their parts, including access to the
                Client Section and Trading Platform, without any compensation.
                In such a case, the Customer is not entitled to a refund of the
                fees paid. After paying the fee for the selected option of the
                TheFundedHub program, the Customer will receive the relevant
                login data for the Trading Platform at the e-mail address
                provided by the Customer or in the Client Section. The Customer
                activates the account by receiving the account credential. IF
                YOU ARE A CONSUMER, YOU ACKNOWLEDGE THAT, BY OPENING THE FIRST
                TRADE, YOU EXPRESSLY DEMAND THE PROVIDER TO COMPLETE THE
                SERVICES BEFORE THE EXPIRY OF THE PERIOD FOR WITHDRAWAL FROM THE
                CONTRACT, WHICH AFFECTS YOUR RIGHT TO WITHDRAW FROM THE
                CONTRACT. If you do not activate the TheFundedHub account within
                30 calendar days of the date on which it was made available to
                you, your access to it will be suspended. You can request the
                renewal of access by sending an e-mail to{" "}
                <a href="mailto: info@thefundedhub.com" className="underline">
                  info@thefundedhub.com
                </a>{" "}
                within 3 days of the initial suspension, otherwise, we will
                terminate the provision of the Services without any right to a
                refund of the fee.
              </p>
              <p>
                If the Customer files an unjustifiable complaint about the paid
                fee or disputes the paid fee with the Customer&apos;s bank or
                payment service provider (e.g., through chargeback services,
                dispute services, or other similar services), on the basis of
                which an annulment, cancellation, or refund of the fee or any
                part thereof is requested, the Provider reserves the right, at
                its sole discretion, to stop providing any services to the
                Customer and refuse any future provision of any services.
              </p>
              <p>
                Both the Customer and TheFundedHub mutually commit to conducting
                their dealings and interactions with fairness and respect. They
                shall refrain from causing harm to each other&apos;s reputation
                or legitimate interests, both during and after the trading
                period. Any disagreements or disputes that may arise between
                them will be resolved in accordance with the terms of this
                Agreement and the applicable legal framework.
              </p>
              <p>
                If you do not begin trading within 7 days after registering, you
                may request a refund. It should be noted that after the trader
                has begun trading on the account, the fees are non-refundable.
                This includes both full and partial refunds.
              </p>
              <p>
                <div className="font-semibold">
                  Section 19 – Entire Agreement
                </div>
                We shall not be deemed to have waived any right or provision of
                these Terms of Service if we fail to exert or enforce such right
                or provision. These Terms of Service, as well as any policies or
                operating rules posted by us on this site or in relation to The
                Service, represent the entire agreement and understanding
                between you and us and govern your use of the Service,
                superseding any prior or contemporaneous agreements,
                communications, and proposals, whether oral or written, between
                you and us (including, but not limited to, any prior versions of
                the Terms of Service). Any ambiguity in the interpretation of
                these Terms of Service should not be interpreted against the
                party who drafted them.
              </p>
              <p>
                <div className="font-semibold">Section 20 – Governing Law</div>
                <p>
                  These Terms of Service, as well as any additional agreements
                  under which we give you Services, are regulated and construed
                  in accordance with the user&apos;s legal jurisdiction.
                </p>
              </p>
              <p>
                <div className="font-semibold">Section 21 – Local Law</div>
                It&apos;s recommended to know your local regulations if there
                are any. You&apos;re taking service as per your own risk and
                responsibilities. By declaring that you are over 18 years old
                and thereby TheFundedHub isn&apos;t responsible for any action
                taken by its customer. If there is any violation of local law,
                you are solely responsible for this.
              </p>
              <p>
                <div className="font-semibold">
                  Section 22– Changes to Terms of Service
                </div>
                The user&apos;s legal jurisdiction governs and is construed in
                line with these Terms of Service and any other agreements
                whereby we provide you Services.
              </p>
              <p>
                <div className="font-semibold">
                  Section 23 – Contact Information
                </div>
                27 Old Gloucester Street, London, United Kingdom, WC1N 3AX.
              </p>
              <p>
                <div></div>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
