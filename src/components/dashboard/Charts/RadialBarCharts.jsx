import React from "react";
import {
  Legend,
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts";

function RadialBarCharts() {

  let data = [
    {
      name: "Sunday",
      wins: 1,
      losses: 13,
      fill: "purple",
    },
    {
      name: "Saturday",
      wins: 0,
      losses: 0,
      fill: "blue",
    },
    {
      name: "Friday",
      wins: 94,
      losses: 76,
      fill: "orange",
    },
    {
      name: "Thursday",
      wins: 118,
      losses: 52,
      fill: "pink",
    },
    {
      name: "Wednesday",
      wins: 131,
      losses: 86,
      fill: "purple",
    },
    {
      name: "Tuesday",
      wins: 166,
      losses: 136,
      fill: "yellow",
    },
    {
      name: "Monday",
      wins: 61,
      losses: 78,
      fill: "green",
    },
  ];

  data = data?.map((value) => ({
    ...value,
    winRate: (value?.wins / (value?.wins + value?.losses)) * 100 || 0,
  }));
  return (
    <div className={"radialChart h-full w-full"}>
      <div className={"charts-wrapper"}>
        <ResponsiveContainer width="100%" height="100%">
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
              innerRadius="30%"
              outerRadius={window.innerWidth <= 480 ? "100%" : "140%"}
              data={data}
              startAngle={90}
              endAngle={window.innerWidth <= 820 ? 450 : 360}
              barSize={5}
            >
              <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
              <RadialBar
                minAngle={15}
                background={{ fill: "#424242" }}
                dataKey="winRate"
                cornerRadius={30}
                legendType="circle"
              />
              <Legend
                iconSize={10}
                width={120}
                height={140}
                layout="vertical"
                verticalAlign="top"
                align="center"
                content={(props) => {
                  const { payload } = props;
                  const size = payload?.length - 1;
                  return (
                    <table
                      className="recharts-default-legend"
                      style={{
                        padding: "0px",
                        margin: "0px",
                        textAlign: "left",
                      }}
                    >
                      <tbody>
                        {payload?.map((value, index) => (
                          <tr
                            key={index}
                            className="recharts-legend-item legend-item-0"
                          >
                            <td>
                              <svg
                                className="recharts-surface"
                                width="10"
                                height="10"
                                viewBox="0 0 32 32"
                                style={{
                                  display: "inline-block",
                                  verticalAlign: "middle",
                                  marginRight: "4px",
                                }}
                              >
                                <title></title>
                                <desc></desc>
                                <path
                                  fill={payload[size - index]?.color}
                                  cx="16"
                                  cy="16"
                                  className="recharts-symbols"
                                  transform="translate(16, 16)"
                                  d="M16,0A16,16,0,1,1,-16,0A16,16,0,1,1,16,0"
                                ></path>
                              </svg>
                              <span
                                className="recharts-legend-item-text"
                                style={{ color: payload[size - index]?.color }}
                              >
                                {`${payload[size - index]?.value}: `}
                              </span>
                            </td>
                            <td>
                              <span style={{ marginLeft: "10px" }}>
                                Wins: {payload[size - index]?.payload?.wins}
                              </span>
                            </td>
                            <td>
                              <span style={{ marginLeft: "10px" }}>
                                Losses: {payload[size - index]?.payload?.losses}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  );
                }}
              />
            </RadialBarChart>
          </ResponsiveContainer>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default RadialBarCharts;
