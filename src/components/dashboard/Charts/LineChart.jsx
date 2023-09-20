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

  const data = [
    { name: "0", trade: "195.000" },
    { name: "29", trade: "217.336" },

    { name: "51", trade: "196.724" },

    { name: "65", trade: "221.533" },
    { name: "87", trade: "193.716" },

    { name: "97", trade: "196.444" },

    { name: "110", trade: "203.723" },

    { name: "232", trade: "200.487" },

    { name: "375", trade: "209.204" },
    { name: "443", trade: "223.989" },
    { name: "575", trade: "210.055" },
    { name: "582", trade: "209.955" },
    { name: "813", trade: "209.105" },

    { name: "835", trade: "210.495" },

    { name: "873", trade: "197.494" },

    { name: "919", trade: "199.551" },
    { name: "920", trade: "211.414" },
    { name: "921", trade: "193.438" },

    { name: "959", trade: "212.408" },

    { name: "965", trade: "221.238" },
    { name: "989", trade: "193.585" },
    { name: "990", trade: "195.057" },
    { name: "991", trade: "223.899" },
    { name: "992", trade: "191.320" },
    { name: "993", trade: "219.202" },
    { name: "994", trade: "222.008" },
    { name: "995", trade: "201.866" },
    { name: "996", trade: "223.095" },
    { name: "997", trade: "193.869" },
  ];
  return (
    <div className={"lineChart h-full w-full"}>
      {/* <h3>Balance Chart</h3> */}
      <div className={"charts-wrapper"}>
        <div className={"buttons"}>
          <div>
            <h3
              style={{
                textDecoration: dataState === "Per Trade" ? "underline" : "",
              }}
              onClick={() => setDataState("Per Trade")}
            >
              Per Trade
            </h3>
            <h3
              style={{
                textDecoration: dataState === "Daily" ? "underline" : "",
              }}
              onClick={() => setDataState("Daily")}
            >
              Daily
            </h3>
          </div>
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 25, left: 20, bottom: 5 }}
          >
            <defs>
              <linearGradient id="colorTrade" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#151b68" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#151b68" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis axisLine={false} tickLine={false} dataKey="name" />
            <YAxis
              axisLine={false}
              tickLine={false}
              domain={[190.0, 225.0]}
              type="number"
            />
            <Tooltip />
            <Area
              type="linear"
              dataKey="trade"
              stroke="#0014ff"
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
