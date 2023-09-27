import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function BarCharts({ data, percent }) {
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="customTooltip">
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              opacity: "0.9",
              zIndex: "-1",
              top: "0",
              left: "0",
              borderRadius: "10px",
              padding: "10px 20px 10px 20px",
            }}
          />
          <p className="intro pt-2 pb-6">{label}</p>
          <p className="label">
            {`${payload[0].name} : `}
            <span style={{ color: payload[0].value >= 0 ? "green" : "red" }}>
              {payload[0].value}
            </span>
          </p>
        </div>
      );
    }

    return null;
  };
  return (
    <>
      <div className={"barChart w-full"}>
        <div className={"charts-wrapper"}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <defs>
                <linearGradient id="positive" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="5%" stopColor="#C7B3FC" stopOpacity={0.9} />
                  <stop offset="95%" stopColor="#C7B3FC" stopOpacity={0.1} />
                </linearGradient>

                <linearGradient id="negative" x1="0" x2="0" y1="1" y2="0">
                  <stop offset="5%" stopColor="#C7B3FC" stopOpacity={0.9} />
                  <stop offset="95%" stopColor="#C7B3FC" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="10 10" vertical={false} />

              <XAxis
                dataKey="name"
                type="category"
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                domain={[-3, 5]}
                tickFormatter={(value) =>
                  `${value} ${percent === 1 ? "%" : ""}`
                }
              />
              <Tooltip
                cursor={{ fill: "transparent" }}
                labelStyle={{ color: "gray" }}
                itemStyle={{ color: "white", fontWeight: "500" }}
                content={<CustomTooltip />}
              />
              <ReferenceLine y={0} stroke="#fff" />
              <Bar dataKey="return">
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={
                      entry?.return >= 0 ? "url(#positive)" : "url(#negative)"
                    }
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}

export default BarCharts;
