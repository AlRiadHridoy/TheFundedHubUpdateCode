import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";

function PieCharts({data}) {

  return (
    <>
      <div className={"pieChart "}>
        <div className={"charts-wrapper"}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Legend
                iconType="circle"
                layout="horizontal"
                verticalAlign="top"
                align="center"
              />
              <Pie
                data={data}
                innerRadius={80}
                outerRadius={120}
                fill="#8884d8"
                cornerRadius={10}
                paddingAngle={6}
                dataKey="value"
                label
              >
                {data?.map((entry, index) => (
                  <Cell key={`cell-${index}`} />
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
