import { TickerTape } from "react-ts-tradingview-widgets";

const styles = {
  parent: {
    display: "none",
  },
};

export default function TradingWdget() {
  const data = [
    {
      proName: "FOREXCOM:SPXUSD",
      title: "S&P 500",
    },
    {
      proName: "FOREXCOM:NSXUSD",
      title: "US 100",
    },
    {
      proName: "BITSTAMP:BTCUSD",
      title: "Bitcoin",
    },
    {
      proName: "BITSTAMP:ETHUSD",
      title: "Ethereum",
    },
    {
      description: "EURUSD",
      proName: "FX:EURUSD",
    },
    {
      description: "GBPUSD",
      proName: "FX:GBPUSD",
    },
    {
      description: "AUDUSD",
      proName: "FX:AUDUSD",
    },
  ];


  return (
    <div className="ticker-widget pt-12 sm:pt-16 relative z-10">
      <div className="lg:container sm:px-6 lg:px-0 m-auto">
        <div className="wrapper backdrop-blur-3xl widget bg-main-bg/30">
          <TickerTape
            colorTheme="dark"
            copyrightStyles={styles}
            displayMode="regular"
            isTransparent={true}
            symbols={data}
          />
        </div>
      </div>
    </div>
  );
}
