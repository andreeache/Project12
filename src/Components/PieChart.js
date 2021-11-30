import "../styles/PieChart.css";

import {
  PieChart,
  Pie,
  Legend,
  Label,
  Cell,
  ResponsiveContainer,
} from "recharts";

const data = [
  { id: 12, todayScore: 12 },
  { id: 18, todayScore: 4 },
];

const renderLabel = ({ viewBox }) => {
  const { cx, cy } = viewBox;
  return (
    <>
      {" "}
      <text x={cx - 20} y={cy - 5}>
        <tspan
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            fontFamily: "Roboto",
            margin: { top: "100px" },
          }}
        >
          {data[0].todayScore}%
        </tspan>
      </text>
      <text x={cx - 20} y={cy + 15}>
        <tspan
          style={{
            fontSize: "16px",
            fill: "grey",
            fontWeight: "bold",
            fontFamily: "Roboto",
            margin: { top: "100px" },
          }}
        >
          of your
        </tspan>
      </text>
      <text x={cx - 20} y={cy + 35}>
        <tspan
          style={{
            fontSize: "16px",
            fontWeight: "bold",
            fill: "grey",
            fontFamily: "Roboto",
            margin: { top: "100px" },
          }}
        >
          goal
        </tspan>
      </text>
    </>
  );
};

const PieChartGraph = () => {
  return (
    <ResponsiveContainer width="30%" height="40%">
      <PieChart width={730} height={250}>
        <Legend
          iconSize={0}
          align="left"
          verticalAlign="top"
          payload={[
            {
              value: "Score",
              type: "line",
              id: "ID01",
              color: "#20253A",
              fontSize: "22px",
            },
          ]}
        />
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          dataKey="todayScore"
          innerRadius={70}
          outerRadius={80}
          startAngle={180}
          endAngle={540}
        >
          {data.map((entry, index) => {
            if (index === 1) {
              return <Cell key={`cell-${index}`} fill="#FF0000" />;
            }
            return (
              <Cell
                key={`cell-${index}`}
                fill="#f3f6f9
          "
              />
            );
          })}

          <Label
            value={data[0].todayScore}
            position="center"
            fill="grey"
            style={{
              fontSize: "26px",
              lineHeight: "26px",
              fontWeight: "bold",
              fontFamily: "Roboto",
            }}
            content={renderLabel}
          />
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartGraph;
