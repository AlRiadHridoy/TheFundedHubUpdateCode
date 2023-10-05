import MotionX from "../../ui/MotionX";

import x from "../../assets/images/x.png";
import instagram from "../../assets/images/instagram.png";
import discord from "../../assets/images/discord.png";
export default function SocialConnect() {
  return (
    <section className="discord pt-24 relative">
      <div className="container relative z-10">
        <div className="heading z-10 relative flex flex-col justify-center sm:items-center sm:text-center">
          <div className="heading flex flex-col justify-center sm:items-center sm:text-center">
            <h2 className="font-medium text-2xl xs:text-[1.7rem] tracking-tight text-wht-gradient">
              Let’s Connect!
            </h2>

            <div className="paras mt-2 max-w-[60rem]">
              <p>
                To ensure you&apos;re always in the know about TFH&apos;s
                official updates and news, don&apos;t forget to follow us on our
                social pages! Stay tuned for the latest developments.
              </p>
            </div>
          </div>
        </div>
        {/* Cards  */}
        <div className="items relative grid md:grid-cols-2 lg:grid-cols-3f gap-7 justify-center max-w-[50rem] fmax-w-[74rem] w-full m-auto items-center md:px-6 mt-8">
          {/* Discord */}
          <MotionX
            delay={0.5}
            cls="grid gap-2 px-6 py-8 rounded-3xl discord-bg h-full social-shadow max-w-[360px]"
          >
            <div className="img flex justify-center items-center relative h-[150px]">
              <img
                className="sm:max-w-[12rem] md:max-w-[30rem] w-full absolute top-[2rem] left-0
                  "
                src={discord}
                alt="discord"
              />
            </div>

            {/* text */}
            <div className="w-full grid justify-center gap-3 -mt-2">
              <p className="text-center">
                Trading is a challenge! Join our Discord for market discussions,
                strategies, and Friday night gaming sessions!
              </p>
            </div>

            {/* btn */}
            <div className="wrap self-end">
              <div className="mt-4 btn uppercase flex justify-center self-end">
                <a
                  target="__blank"
                  href="https://discord.gg/thefundedhub"
                  className="uppercase font-base flex h-full justify-center items-center py-3 px-10 text-white border-primary rounded-3xl whitespace-nowrap font-Montserrat font-semibold text-[0.8rem]  max-w-[228px] discglow-btn"
                >
                  Join our Discord
                </a>
              </div>
            </div>
          </MotionX>
          {/* X */}
          <MotionX
            delay={0.5}
            right={true}
            cls="grid gap-4 px-6  py-8 rounded-3xl x-bg h-full social-shadow max-w-[360px]"
          >
            <div className="img flex justify-center items-center relative h-[150px]">
              <img
                className="sm:max-w-[12rem] md:max-w-[30rem] w-full absolute top-[0.5rem] left-0
                  "
                src={x}
                alt="x"
              />
            </div>

            <div className="w-full grid justify-center gap-3">
              <p className="text-center">
                To ensure you&apos;re always in the know about TFH&apos;s
                official updates and news, don&apos;t forget to follow us on
                Twitter! Stay tuned for the latest developments.
              </p>

              <div className="mt-4 btn uppercase flex justify-center">
                <a
                  target="__blank"
                  href="https://twitter.com/TheFundedHub"
                  className="uppercase font-base flex h-full justify-center items-center py-3 px-10 text-white border-primary rounded-3xl whitespace-nowrap font-Montserrat font-semibold text-[0.8rem]  max-w-[228px] twtglow-btn"
                >
                  Join us on Twitter
                </a>
              </div>
            </div>
          </MotionX>
          {/* instagram */}
          <MotionX
            delay={0.5}
            right={true}
            cls="gridf hidden gap-4 px-6 pt-2 pb-8 rounded-3xl h-full insta-bg social-shadow max-w-[360px]"
          >
            <div className="img flex justify-center items-center">
              <img
                className="sm:max-w-[12rem] md:max-w-[12rem] w-full opacity-80
                  "
                src={instagram}
                alt="instagram"
              />
            </div>

            <div className="w-full grid justify-center gap-3">
              <p className="text-center">
                Trading is certainly not easy! Interact with other traders and
                discuss about the markets, strategies and stay up to date with
                all the TFH official announcements.
              </p>

              <div className="mt-4 btn uppercase flex justify-center">
                <a
                  target="__blank"
                  href="https://www.instagram.com/fundedhub/"
                  className="uppercase font-base flex h-full justify-center items-center py-3 px-10 text-white border-primary rounded-3xl whitespace-nowrap font-Montserrat font-semibold text-[0.8rem] max-w-[228px] insta-glowing-btn"
                >
                  Join us on Instagram
                </a>
              </div>
            </div>
          </MotionX>
        </div>
      </div>
    </section>
  );
}
