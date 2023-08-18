import { useEffect } from "react";
import Navbar from "../../components/main/Navbar";
import Footer from "../../components/main/Footer";
import { Link, useLocation } from "react-router-dom";

export default function CookiePolicy() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Navbar />
      <main className="cookie pb-28 pt-32 sm:pt-44 border-b border-gray-400/20 purple-shadown">
        <div className="container relative">
          <div className="wrapper font-light grid gap-6 z-10 relative max-w-[65rem] m-auto">
            <div className="heading text-center">
              <h2 className="text-3xl font-codeProBold">Cookie Policy</h2>
            </div>

            <div className="content grid gap-5">
              <p>
                When displaying content, advertisements and other
                functionalities on the{" "}
                <Link to="/" className="underline">
                  www.thefundedhub.com
                </Link>{" "}
                website (the “Website”) various technologies are used to collect
                and process personal data, including cookies. You will find
                details concerning this method of processing in this Cookie
                Policy.
              </p>

              {/* order list */}
              <ul className="">
                <span>
                  In this Cookie Policy, you will find information regarding the
                  following:
                </span>
                <li>
                  1) Who is the operator of the Website and whom to contact?
                </li>
                <li>2) What technologies do we use and what are cookies?</li>
                <li>3) How to set up the use of cookies on the Website?</li>
                <li>4) How to set up cookies in the web browser?</li>
                <li>5) What cookies do we use on the Website?</li>
                <li>6) What are your rights and how can you exercise them</li>
                <li></li>
              </ul>

              <p>
                If you have any questions relating to the processing of your
                personal data, including cookies in connection with the
                operation of the Website, and to exercise your rights, you can
                contact us at{" "}
                <a href="mailto: info@thefundedhub.com" className="underline">
                  info@thefundedhub.com
                </a>
              </p>

              <span>
                We and some third parties process personal data using cookies
                and other technologies on the Website
              </span>

              <p>
                <div>WHAT TECHNOLOGIES DO WE USE AND WHAT ARE COOKIES?</div>
                Cookies are small files that are stored on your device and that
                help us collect information about your activities. In
                particular, cookies allow us to remember your settings,
                preferences, and your access data, provide targeted content and
                marketing communications, and analyses the operation of the
                Website. Cookies may come from us or from third parties whose
                services we use. In addition to cookies, we may also process
                your IP address, which is a unique number assigned to a computer
                or other device communicating via the internet protocol, and
                analytical scripts, which are small pieces of a computer code
                through which users and their behavior on websites can be
                tracked.
              </p>
              <p>
                <div>HOW TO SET UP THE USE OF COOKIES ON THE WEBSITE?</div>
                You can set up your preferences in your web browser and also in
                your operating system. Some parts of the Website are designed to
                work with the use of cookies. If you reject some cookies, it may
                affect the use of some features on the Website or parts of it.
              </p>
              <p>
                <div>HOW TO SET UP COOKIES IN THE WEB BROWSER?</div>
                You can set up the storage of cookies on your device in your web
                browser. You can set up your browser to accept all cookies,
                reject them, or indicate when a cookie is being sent, at any
                time. For more information and options, see the operating system
                settings of your device.
              </p>
              <ul>
                <span>
                  Most browsers automatically accept cookies by default. You can
                  get more information about setting up cookies for the most
                  common browsers here:
                </span>
                <li>Google Chrome</li>
                <li>Internet Explorer</li>
                <li>Microsoft Edge</li>
                <li>Mozilla Firefox</li>
                <li>Opera</li>
                <li>Safari</li>
              </ul>

              <span>
                You can also delete cookies from your device’s memory at any
                time. For more information, access your browser or operating
                system.
              </span>

              <p>
                <div>WHAT COOKIES DO WE USE ON THE WEBSITE?</div>
                <span>
                  We use the following types of cookies on the Website:
                </span>
                <ul className="grid gap-5 mt-5">
                  <li>
                    <div>➔ Necessary basic cookies:</div>
                    These cookies allow you to browse the Website and use its
                    functionalities. Through these cookies, we also ensure the
                    security and administration of the Website. Enabling these
                    cookies is automatic and cannot be turned off, as they are
                    necessary for the operation of the Website. We only keep the
                    necessary basic cookies for the duration of your current
                    session.
                  </li>
                  <li>
                    <div>➔ Functional cookies:</div> Thanks to these cookies, we
                    are able to provide you with a better user experience when
                    using the Website and services. For example, this type of
                    cookie will ensure that the information displayed when you
                    visit the Website corresponds to your preferences and your
                    previous settings. We store functional cookies for the
                    period specified for individual cookies in the list under
                    the link below or until the withdrawal of consent.
                  </li>
                  <li>
                    <div>➔ Analytical cookies:</div> Thanks to these cookies, we
                    obtain information on how our Website and services are used.
                    These cookies allow us, for example, to find out that you
                    have visited the Website before, or to monitor which parts
                    of the Website you use most often. We use third-party tools
                    for analytics. We store analytical cookies for the period
                    specified for individual cookies in the list under the link
                    below or until the withdrawal of consent.
                  </li>
                  <li>
                    <div>➔ Advertising cookies: </div>Through these cookies, we
                    and our partners can offer you targeted advertising, for
                    example, based on the collection of information about the
                    services that you have viewed or ordered on the Website or
                    other websites. The Website may also display content from
                    third-party websites or services, and third-party cookies
                    may be stored on your device. The storage and use of those
                    cookies is administered by third parties based on their own
                    rules, which you will find in their privacy policies. We
                    store advertising cookies for the period specified for
                    individual cookies in the list under the link below or until
                    the withdrawal of consent. A list of all cookies that we use
                    is available here.
                  </li>
                  <li>
                    <div>
                      What are your rights and how can you exercise them?
                    </div>
                    You can withdraw your consent to the processing of certain
                    cookies by deleting them in the settings of your web
                    browser. You can exercise other rights specified below by
                    sending a request to{" "}
                    <a
                      href="mailto: info@thefundedhub.com"
                      className="underline"
                    >
                      info@thefundedhub.com
                    </a>
                  </li>
                </ul>
              </p>

              <p>
                <div>Right of access to personal data</div>
                You can ask us at any time to send you a confirmation as to
                whether or not your personal data are being processed. If we
                process your data, we will provide you with further details on
                the processing. If you request it, we will also provide you with
                a copy of the personal data processed. Please note that the
                first copy is free of charge, but any following copy will be
                provided for a small fee.
              </p>

              <p>
                <div>Right to rectification of personal data</div>
                If we process your personal data inaccurately, you can notify us
                of this fact, and we will rectify the inaccurate personal data
                without undue delay. If you register on the Website, you will be
                able to rectify and amend your personal data yourself by editing
                your user account
              </p>

              <p>
                <div>
                  Right to erasure of personal data (“right to be forgotten”)
                </div>
                You have the right to obtain from us erasure of personal data
                concerning you without undue delay in the following cases: If
                the data are no longer necessary in relation to the purposes for
                which we have collected or otherwise processed them; If you
                withdraw your consent to their processing and, at the same time,
                there will be no other legal ground for their processing (this
                only applies in the cases where we process personal data on the
                basis of your consent);
                <br />
                If you object and there are no overriding legitimate grounds for
                the processing, or if you object to the processing for direct
                marketing purposes; or
                <br />
                If your personal data are processed unlawfully.
              </p>

              <p>
                We will not be able to act on the request for erasure of
                personal data if their processing is necessary for exercising
                the right of freedom of expression and information, for
                compliance with any of our legal obligations, for the
                performance of a task carried out in the public interest, for
                the establishment, exercise, or defense of our legal claims, or
                for other reasons provided for by law.
              </p>

              <p>
                <div>Right to restriction of processing</div>
                In cases stated in article 18 of the GDPR, you have the right to
                obtain from us restriction of processing of your personal data
                for a certain period.
              </p>

              <p>
                Right to data portability and to the provision of data in a
                machine-readable format In the case of automated processing
                based on your consent or performance of the contract, you have
                the right to receive the data in a structured, commonly used and
                machine-readable format and to have them transmitted by us to
                another personal data controller. <br /> Right to object <br />{" "}
                If we process personal data on the basis of our legitimate
                interest, you have the right to object to such processing. If
                you file such an objection, we will not be able to process your
                personal data unless we demonstrate compelling legitimate
                grounds for the processing, which override your interests or
                rights and freedoms, or for the establishment, exercise or
                defense of our legal claims. In case we process your personal
                data for marketing purposes about our products and services, we
                will terminate the processing without undue delay upon receipt
                of the objection. In such a case, we will no longer be able to
                send you offers of our products and services.
              </p>

              <p>
                If processing is based on your consent, you have the right to
                withdraw that consent at any time. Withdrawal of consent does
                not affect the lawfulness of processing based on the consent
                given before its withdrawal.
              </p>
              <p>
                <div>
                  Right not to be the subject of automated decision-making
                </div>
                Except where processing is necessary for entering into, or
                performance of, a contract, where this is permitted by
                applicable law, or based on your express consent, you have the
                right not to be the subject of any decision which is based
                solely on automated processing, including profiling, which
                produces legal effects concerning you or similarly affects you
                to a significant extent.
              </p>
              <p>
                <div>
                  Right to lodge a complaint with the supervisory authority{" "}
                </div>
                If you believe that we are processing your data in violation of
                the relevant legal regulations, you can lodge a complaint with
                the relevant supervisory authority.
              </p>
              <p>
                <div></div>
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
