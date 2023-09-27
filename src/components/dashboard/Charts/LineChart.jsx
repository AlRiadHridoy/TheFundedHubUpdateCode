import { useState } from "react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import "./chart.css";

function LineCharts() {
  const [dataState, setDataState] = useState("Per Trade"); //Change data visual

  const data1 = [
    { XAUUSD: "0", date: "20 Sep 2023", Balance: "195.000" },
    { XAUUSD: "29", date: "21 Sep 2023", Balance: "217.336" },
    { XAUUSD: "51", date: "22 Sep 2023", Balance: "196.724" },
    { XAUUSD: "65", date: "23 Sep 2023", Balance: "221.533" },
    { XAUUSD: "87", date: "24 Sep 2023", Balance: "193.716" },
    { XAUUSD: "97", date: "25 Sep 2023", Balance: "196.444" },
    { XAUUSD: "110", date: "26 Sep 2023", Balance: "203.723" },
    { XAUUSD: "999", date: "20 Oct 2023", Balance: "201.075" },
    { XAUUSD: "1010", date: "27 Oct 2023", Balance: "209.012" },
    { XAUUSD: "1011", date: "28 Oct 2023", Balance: "211.507" },
    { XAUUSD: "1012", date: "29 Oct 2023", Balance: "217.470" },
  ];

  const data2 = [
    { XAUUSD: "0", date: "20 Sep 2023", Balance: "195.000" },
    { XAUUSD: "29", date: "21 Sep 2023", Balance: "217.336" },
    { XAUUSD: "920", date: "6 Oct 2023", Balance: "211.414" },
    { XAUUSD: "921", date: "7 Oct 2023", Balance: "193.438" },
    { XAUUSD: "97", date: "25 Sep 2023", Balance: "196.444" },
    { XAUUSD: "110", date: "26 Sep 2023", Balance: "203.723" },
    { XAUUSD: "232", date: "27 Sep 2023", Balance: "200.487" },
    { XAUUSD: "375", date: "28 Sep 2023", Balance: "209.204" },
    { XAUUSD: "443", date: "29 Sep 2023", Balance: "223.989" },
    { XAUUSD: "575", date: "30 Sep 2023", Balance: "210.055" },
    { XAUUSD: "1010", date: "27 Oct 2023", Balance: "209.012" },
    { XAUUSD: "1011", date: "28 Oct 2023", Balance: "211.507" },
    { XAUUSD: "1012", date: "29 Oct 2023", Balance: "217.470" },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="customTooltip">
          <p className="intro pb-4">{payload[0]?.payload?.date}</p>
          <p className=" pb-4 text-white">XAUUSD : {label}</p>
          <p className="label">{`${payload[0].name} : ${payload[0].value}`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className={"lineChart h-full w-full"}>
      {/* <h3>Balance Chart</h3> */}
      <div className={"charts-wrapper"}>
        <div className={"buttons"}>
          <div>
            <h3
              className={dataState === "Per Trade" ? "active" : ""}
              onClick={() => setDataState("Per Trade")}
            >
              Per Trade
            </h3>
            <h3
              className={dataState === "Daily" ? "active" : ""}
              onClick={() => setDataState("Daily")}
            >
              Daily
            </h3>
          </div>
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={dataState === "Per Trade" ? data1 : data2}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <defs>
              <linearGradient id="colorTrade" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#C7B3FC" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#C7B3FC" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis axisLine={true} tickLine={true} dataKey="XAUUSD" />
            <YAxis
              axisLine={false}
              tickLine={false}
              domain={[190.0, 225.0]}
              type="number"
            />
            <Tooltip
              cursor={{ opacity: "0.4", stroke: "#C7B3FC" }}
              content={<CustomTooltip />}
            />
            <Area
              type="monotone"
              dataKey="Balance"
              stroke="#C7B3FC"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorTrade)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default LineCharts;
