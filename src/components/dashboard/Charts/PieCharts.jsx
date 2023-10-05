import { useCallback, useState } from "react";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Sector,
} from "recharts";

const renderActiveShape = (props) => {
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
  } = props;

  return (
    <g>
      <rect
        x={cx - 65}
        y={cy - 35}
        rx="20"
        ry="20"
        width="130"
        height="70"
        style={{ fill: "none", stroke: fill, strokeDasharray: "6" }}
      />
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        <tspan x={cx} dy="-0.2em" fill="white">
          {payload.name}
        </tspan>
        <tspan x={cx} dy="1.4em">
          {"("} {parseFloat(percent * 100).toFixed(2)} {"% )"}
        </tspan>
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        cornerRadius={10}
        fill={fill}
      />
    </g>
  );
};
function PieCharts({ pieData }) {
  const { data, color } = pieData;

  const [activeIndex, setActiveIndex] = useState(-1);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  const onPieLeave = useCallback(
    (_, index) => {
      setActiveIndex(-1);
    },
    [setActiveIndex]
  );

  return (
    <>
      <div className={"pieChart max-h-[450px] h-full"}>
        <div className={"charts-wrapper"}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <defs>
                {data?.map((entry, index) => (
                  <linearGradient
                    id={`myGradient${index + entry.name}`}
                    key={entry + index}
                  >
                    <stop
                      offset="0%"
                      stopColor={color[index % color?.length].start}
                      stopOpacity={1}
                    />
                    <stop
                      offset="100%"
                      stopColor={color[index % color?.length].end}
                      stopOpacity={0.9}
                    />
                  </linearGradient>
                ))}
              </defs>
              <Legend
                iconType="circle"
                layout="horizontal"
                verticalAlign="top"
                align="center"
              />
              <Pie
                activeIndex={activeIndex}
                activeShape={renderActiveShape}
                data={data}
                innerRadius={80}
                outerRadius={120}
                fill="#8884d8"
                cornerRadius={10}
                paddingAngle={6}
                dataKey="value"
                stroke="none"
                label
                onMouseEnter={onPieEnter}
                onMouseLeave={onPieLeave}
              >
                {data?.map((entry, index) => (
                  <Cell
                    style={{
                      outline: "none",
                      opacity: activeIndex < 0 ? "1" : "0.5",
                    }}
                    key={`cell-${index}`}
                    fill={`url(#myGradient${index + entry.name})`}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}

export default PieCharts;
