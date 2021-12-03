import "../styles/PieChart.css"
import React from "react"

import {
  PieChart,
  Pie,
  Legend,
  Label,
  Cell,
  ResponsiveContainer,
} from "recharts";


class PieChartGraph extends React.Component {
  constructor(props) {
    super(props);

    // fix this so it doesn't point to the axios instance anymore
    this.renderLabel = this.renderLabel.bind(this);
    this.state = { userData: props.userData };
    props.userData.setVisitor(this);
  }

  renderLabel({ viewBox }) {
    const { cx, cy } = viewBox;
    const todayScore = this.state.userData.getTodayScore();

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
            {todayScore * 100}%
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
  }

  render() {
    const todayScore = [
      { todayScore: this.state.userData.getTodayScore() },
      { todayScore: 1 - this.state.userData.getTodayScore() },
    ];

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
            data={todayScore}
            cx="50%"
            cy="50%"
            dataKey="todayScore"
            innerRadius={70}
            outerRadius={80}
            startAngle={90}
            endAngle={540}
          >
            <Cell key={`cell-1`} fill="#FF0000" />
            <Cell key={`cell`} fill="#f3f6f9" />

            <Label content={this.renderLabel} />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  }
}

export default PieChartGraph;
