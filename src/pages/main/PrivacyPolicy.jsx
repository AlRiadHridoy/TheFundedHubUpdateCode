import { useEffect } from "react";
import Navbar from "../../components/main/Navbar";
import Footer from "../../components/main/Footer";
import { useLocation } from "react-router-dom";

export default function PrivacyPolicy() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Navbar />
      <main className="privacy bg-dark pb-28 pt-32 sm:pt-44 border-b border-gray-400/20 purple-shadow">
        <div className="container relative">
          <div className="wrapper font-light grid gap-6 z-10 relative max-w-[65rem] m-auto">
            <div className="heading text-center">
              <h2 className="text-3xl font-codeProBold">Privacy Policy</h2>
            </div>

            <div className="content grid gap-5">
              <p>
                When you use our services, we collect and store personal data
                about you. This Privacy Statement (the &apos;Policy&apos;)
                informs you of the methods used to handle your personal data.
                <br />
                Information about the following is included in this Privacy
                Policy:
              </p>

              <p>
                <div>
                  How do you get in touch with the person in charge of your
                  personal data?
                </div>
                <ul>
                  <li>
                    In what ways do we obtain and what information do we gather
                    about you?
                  </li>
                  <li>
                    How do we make use of the information you provide about
                    yourself?
                  </li>
                  <li>
                    How do we keep our customers&apos; personal information safe
                    and secure?
                  </li>
                  <li>We share your personal information with whom?</li>
                  <li>
                    What about international organizations and third countries?
                  </li>
                  <li>
                    When it comes to enforcing your rights, how do you go about
                    it?
                  </li>
                </ul>
              </p>

              <p>
                <div>
                  Who is the controller of your personal data and whom to
                  contact?
                </div>
                The controller of personal data is THE FUNDED HUB GLOBAL LLP
                with its registered office at 27 Old Gloucester Street, London,
                United Kingdom, WC1N 3AX you can contact AC THE FUNDED HUB
                GLOBAL LLP at{" "}
                <a href="mailto: info@thefundedhub.com" className="underline">
                  info@thefundedhub.com
                </a>{" "}
                regarding any questions and the exercise of rights relating to
                the processing of your personal data.
              </p>

              <p>
                <div>
                  What and how do we collect personal information about you?
                </div>
                The information in this part is meant to give you a broad
                overview of how and what types of personal data we acquire from
                you. Personal data includes any information that can be used to
                identify or connect you to a specific individual.
              </p>

              <p>
                When you use our services, you provide us with much of the
                information we need to know about you. In particular, this
                includes:
              </p>
              <p>
                Specifically, whether you sign up for an account, provide
                personal information, place an order, participate in an event or
                project, or connect with us via customer service or social
                media. Identification and contact data include your name;
                surname; phone number; e-mail; postal address; date of birth;
                username and password; and any warranty claims you may have
                made. Payment data include your bank account information; and
                other data, such as records of communication between you and our
                company or information about any warranty claims.
              </p>

              <p>
                Your personal information that we automatically gather when you
                utilize our products or services. Among these are information
                about your device (such as your IP address), information about
                how you use a website (such as the time and date of your visit
                and the country from which you accessed the website), and
                information about how you use a service (such as the login and
                logout information, your account settings, the value of your
                fictitious capital, your account currency, business strategy)
              </p>

              <p>
                If you choose to link your social networking accounts to your
                account on the website, third parties may give us information
                about you. Examples of these third parties include the providers
                of trading platforms on which you choose to trade using our
                services. Financial data (such as kind of instrument, time of
                starting and closing a trade), as well as data from social
                networks (such as profit or loss), are included (user name,
                profile picture, e-mail address associated with the account on
                the social network). For details on how trading platform
                providers and social network operators use your personal
                information for their own purposes, please refer to their
                privacy policies.
              </p>

              <p>
                <div>
                  Do you know what we do with the information you provide us?
                </div>
                This is how we make use of personally identifiable information:
              </p>

              <p>
                <div>Creating a user account and signing up:</div>
                In order to utilize the services, you must register on the
                website and create an account, and we use your personal data for
                this purpose
              </p>

              <p>
                <div>Personal information:</div>
                Your name, email address, and phone number are required to
                identify you and get in touch with you.
              </p>

              <p>
                <div>
                  The legal justification for the processing of personal data:
                </div>
              </p>

              <p>
                You must provide your personal data to us in order for us to
                register your user account, as we cannot do so without it.
                <br />
                Providing services, exercising contractual rights and
                responsibilities, and so on:
                <br />
                We need to process your personal data in order to offer you our
                services, i.e. to give you appropriate access, tools, and
                assistance, and to conduct transactions. As a rule of thumb, the
                following should be followed:
              </p>

              <p>
                Personal data includes name, address, phone number, email
                address, payment information, information about how the service
                is used, information about simulated transactions, and
                information from social media profiles that you choose to link
                to your account on the website. <br />
                Legitimate interest or fulfillment of a contract under which we
                provide our services are both sufficient legal grounds for
                processing. We retain your personal information for a short
                amount of time after we no longer provide you with services. The
                processing is necessary to preserve and defend our rights, which
                are based on our legitimate interests.
              </p>

              <p>
                <div>
                  Promotion of our products and services or participation in
                  events:
                </div>
                The marketing messages we send to our existing and former
                customers will be based on our products and services. Commercial
                communications may also be sent to you, to the extent to which
                you have given us your permission. To make it easy for you to
                discontinue receiving business communications, each email
                received will be clearly labelled as business communication and
                include a link that allows you to do so. As a rule of thumb, the
                following should be followed:
              </p>

              <p>
                <div>Personal information</div>
                <div>Contact information and identification:</div>
                The legal justification for the processing of personal data:
                <br />
                If you have used our services, we may occasionally contact you
                with marketing materials because we have a genuine interest in
                staying in touch with those who have used our services. If you
                agree to allow us to use your personal data for marketing
                reasons, we will do so.
              </p>

              <p>
                <div>Personal information:</div>
                If you contact us via social media, we collect your name, email
                address, phone number, and other personal information.
              </p>

              <p>
                <div>
                  The legal justification for the processing of personal data:
                </div>
                Our legitimate interest in processing data is to keep our
                customers happy and to make our services more useful to them.
                Your personal data may be processed in order for us to create,
                test, improve, and secure some of our services if you utilise
                them. As a rule of thumb, the following should be followed:
              </p>

              <p>
                <div>Personal information:</div>
                Personal information, such as your name, address, phone number,
                and email address, as well as information about your device, the
                website, and your use of the services.
              </p>

              <p>
                <div>
                  The legal justification for the processing of personal data:
                </div>
                Our legitimate interest in processing data is to make our
                services better.
              </p>
              <p>
                <div>Analytics:</div>
                We employ consumer behavior analysis to learn more about how our
                website and services are being used. As a rule of thumb, the
                following should be followed:
              </p>
              <p>
                <div>Personal information:</div>
                Personal information, such as your name, address, phone number,
                and email address, as well as information about your device,
                your use of the website, and the results of your simulated
                trades.
              </p>
              <p>
                <div>
                  The legal justification for the processing of personal data:
                </div>
                Our legitimate interest in processing data is to learn more
                about our customers&apos; buying habits and preferences.
              </p>

              <p>
                <div>How do we keep our personal information safe?</div>
                Personal data is stored on computers and other devices in an
                encrypted database. Organizational and technical safeguards have
                been put in place to protect the data that we collect and handle
                from unauthorized access, modification, disclosure, or
                destruction.
              </p>
              <p>
                <div>How long does it take us to process your information?</div>
                As stated above, personal data are only processed as necessary
                to accomplish the stated goals and for as long as is required by
                law. It is then destroyed or anonymized after that. For the
                following periods of time, we collect and use personal
                information:
                <br />
                The processing of personal data is limited to the duration
                necessary to carry out the agreement and to execute the
                parties&apos; rights and obligations under it, such as handling
                complaints, resolving damage claims, or engaging in legal
                action.
                <br />
                if you don&apos;t give us permission to send you business
                communications, we keep your personal data for a maximum of 5
                years from the end of your last contract with us or until you
                object or unsubscribe from the business communications; if we
                need to fulfill our legal obligations, we keep your personal
                data for the period set out by the relevant law;
              </p>
              <p>
                <div>Third parties use of your information:</div>
                In order to deliver our services, we make your data available or
                transmit it to the following people:
              </p>
              <p>
                Simulated trades are made possible by your trading platform
                provider Website and service providers (such as other companies
                in the group, cloud service providers, payment system operators,
                financial institutions, service and support providers, IT
                companies, marketing and communication agencies, consultants,
                and postal service providers), as well as other third parties
              </p>
              <p>
                In addition, we may send your personal information to parties
                for whom you have given your permission, as well as in
                circumstances where we are legally required to do so. The
                recipients of your personal data are contractually required to
                protect your information in accordance with applicable laws and
                to use it only in line with our instructions in accordance with
                the terms of their contract with us.
              </p>
              <p>
                As data controllers, third parties gather personal information
                for their own ends. Personal data will be processed in
                accordance with their own guidelines in this situation.
              </p>
              <p>
                <div>Your rights:</div>Send a request to{" "}
                <a href="mailto: info@thefundedhub.com" className="underline">
                  info@thefundedhub.com
                </a>{" "}
                to exercise all of your rights, including the right to withdraw
                your permission. As a user, you have the following rights when
                it comes to personal data:
              </p>
              <p>
                <div>The right to access personal information:</div>
                Whenever you want to know if your personal information is being
                used, you can ask us to give you a confirmation letter. If we do
                anything with your data, we&apos;ll let you know about it. The
                personal data we collect and use will be made available to you
                if you request it. The first copy is free, however, subsequent
                copies can be purchased for a nominal cost. <br />
                Individuals have the right to have their personal information
                corrected. Please contact us if your personal data is
                incorrectly processed and we will correct it as soon as
                possible. If you sign up for an account on the Website, you will
                be able to edit and correct your personal information.
              </p>
              <p>
                The &apos;right to be forgotten&apos; (right to deletion of
                personal data)
                <br />
                In the following circumstances, you have the right to have your
                personal data deleted from our systems immediately: As soon as
                the data gathered or otherwise processed is no longer required
                for the stated purposes, Your consent to their processing will
                be revoked if you do so and there is no other legal basis for
                their processing (this only applies in circumstances where we
                treat personal data on your consent). Processing for direct
                marketing reasons, if you object to the processing and there are
                no overriding legal grounds;
                <br />
                Please contact us if your personal data is incorrectly processed
                and we will correct it as soon as possible. If you sign up for
                an account on the Website, you will be able to edit and correct
                your personal information.
              </p>
              <p>
                <div>
                  The &apos;right to be forgotten&apos; (right to deletion of
                  personal data):
                </div>
                In the following circumstances, you have the right to have your
                personal data deleted from our systems immediately: As soon as
                the data gathered or otherwise processed is no longer required
                for the stated purposes, Your consent to their processing will
                be revoked if you do so and there is no other legal basis for
                their processing (this only applies in circumstances where we
                treat personal data on your consent). Processing for direct
                marketing reasons, if you object to the processing and there are
                no overriding legal grounds; <br />
                If you believe that your personal data has been improperly
                processed, please contact us. <br />
                When a request is made for personal data to be erased, we will
                not be able to do so if their processing is necessary for
                exercising the right to freedom of expression and information;
                compliance with any of our legal obligations; performance of a
                task carried out in the public interest; establishment, exercise
                or defense of our legal claims; or other reasons permitted by
                law.
              </p>
              <p>
                <div>The right to limit the use of data:</div>
                Article 18 of the GDPR gives you the right to request a
                temporary halt to the processing of your personal data.
                Possession and use of information in a machine-readable format,
                as well as the right to access to such data When we process your
                personal information through automatic means, you have the right
                to receive the data in a structured, commonly used, and
                machine-readable format and to have it transferred to another
                personal data controller.
              </p>
              <p>
                <div>The right to express one&apos;s views:</div>
                You have the right to object to the processing of your personal
                data if we do so because it is in our legitimate interests to do
                so. Our ability to process your personal data is restricted if
                you raise an objection, and we must show that the processing is
                necessary to establish, exercise, or defend our legal claims and
                we have a compelling legitimate interest in doing so.
              </p>
              <p>
                If you object to our use of your personal data for marketing
                purposes, we shall immediately stop doing so. Our ability to
                send you offers for our products and services will be terminated
                if you do this.
              </p>
              <span>The ability to revoke consent</span>

              <p>
                You have the right to revoke your consent at any time if the
                processing is based on that consent. The lawfulness of
                processing based on prior consent is unaffected by the
                withdrawal of consent.
              </p>
              <p>
                <div>
                  The right not to be subjected to automated decision-making
                  processes:
                </div>
                You have the right not to be the subject of any decision based
                purely on automated processing, including profiling, that
                generates legal effects concerning you or otherwise affects you
                to a significant extent, unless this is permitted by relevant
                legislation or based on your express consent.
              </p>

              <p>
                The right to file a complaint with the governmental agency
                responsible for investigating complaints.
              </p>

              <p>
                You can file a complaint with the relevant supervisory authority
                if you believe that we are misusing your personal information.
                Our headquarters are located at this location.
              </p>

              <p>
                <div>Requirements to be met:</div>
                We reserve the right to amend this policy at any time, but we
                will notify you of any such change. A copy of this policy can be
                found in your Client Section. Use of your own affiliate link
                shall not count as affiliate commission.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
