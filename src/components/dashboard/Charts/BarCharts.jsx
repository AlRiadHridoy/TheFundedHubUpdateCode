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
                left: 0,
                bottom: 5,
              }}
            >
              <defs>
                <linearGradient id="positive" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="5%" stopColor="#0c1ad5" stopOpacity={1} />
                  <stop offset="95%" stopColor="#0c1ad5" stopOpacity={0.1} />
                </linearGradient>

                <linearGradient id="negative" x1="0" x2="0" y1="1" y2="0">
                  <stop offset="5%" stopColor="#0c1ad5" stopOpacity={1} />
                  <stop offset="95%" stopColor="#0c1ad5" stopOpacity={0.1} />
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
              <Tooltip />
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
