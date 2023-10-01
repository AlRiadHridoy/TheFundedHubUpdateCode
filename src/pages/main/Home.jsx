import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Prices from "../../components/main/Prices";
import Navbar from "../../components/main/Navbar";
import Evaluation from "../../components/main/Evaluation";
import TreadingHub from "../../components/main/TreadingHub";
import SocialConnect from "../../components/main/SocialConnect";
import Footer from "../../components/main/Footer";
import Benefits from "../../components/main/Benefits";
import Hero from "../../components/main/Hero";
import FAQ from "../../components/main/FAQ";
import TradingWdget from "../../ui/TradingWdget";
import Compare from "../../components/main/Compare";

export default function Home() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="purple-shadow bg-black sm:bg-[#030307] h-screenf">
      <Navbar />
      <Hero />
      <TradingWdget />
      <Evaluation />
      <Benefits />
      <Compare />
      <TreadingHub />
      <Prices />
      <SocialConnect />
      <FAQ />
      <Footer />

      <div className="hidden h-0 w-0 opacity-0 left-0 visible md:invisible"></div>

      <script src="./js/script.js"></script>
    </div>
  );
}
