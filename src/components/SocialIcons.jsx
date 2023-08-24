import x from "../assets/images/x.webp";
import discord from "../assets/images/discord.webp";
import instagram from "../assets/images/instagram.webp";

export default function SocialIcons() {
  return (
    <div className="logos flex gap-4">
      <a
        target="__blank"
        href="https://www.instagram.com/fundedhub/"
        className="lo-8 w-[1.5rem] hover:opacity-70 transition-all duration-300 flex justify-center items-center"
      >
        <img className="w-full" src={instagram} alt="Instagram" />
      </a>
      <a
        target="__blank"
        href="https://twitter.com/TheFundedHub"
        className="logo w-[1.5rem] hover:opacity-70 transition-all duration-300 flex justify-center items-center"
      >
        <img className="w-full" src={x} alt="X" />
      </a>
      <a
        target="__blank"
        href="https://discord.com/invite/96Mq2M2gdB"
        className="logo w-[1.9rem] hover:opacity-70 transition-all duration-300 flex justify-center items-center"
      >
        <img className="w-full" src={discord} alt="discord" />
      </a>
    </div>
  );
}
