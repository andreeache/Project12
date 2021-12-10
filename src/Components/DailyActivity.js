import "../styles/DailyActivity.css";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
  ReferenceArea,
} from "recharts";

// @ts-check


/** This is a description of the day formater function. 
 * @param {integer} day data format from the backend
 * @return {integer} displays data according to the current day of the month
*/
const dayFormatter = (day) => {
  return parseInt(String(day).slice(-2));
};

const CustomTooltip = ({ payload, active }) => {
  if (active && payload != null) {
    console.log(payload);

    return (
      <>
        <div className="tooltip">
          <p>{payload[0].value}kg</p>
          <p>{payload[1].value}Kcal</p>
        </div>
      </>
    );
  }
  return null;
};

/** A class for Daily Activities management */
class DailyActivity extends React.Component {
  /**
   * @param  {} props containing activityData
   */
  constructor(props) {
    super(props);

    props.activityData.setVisitor(this);
    this.state = { activityData: props.activityData };
  }

  /** the object render function */
  render() {
    let userSession = this.state.activityData.getUserSession();

    return (
      <div className="DailyActivity">
        <h4>Daily Activity</h4>

        <BarChart
          width={835}
          height={320}
          data={userSession}
          margin={{
            top: 20,
            right: 5,
            left: 20,
            bottom: 5,
          }}
          barCategoryGap={35}
          barGap={8}
        >
          <CartesianGrid strokeDasharray="2 2" vertical={0} />
          <XAxis dataKey="day" tickFormatter={dayFormatter} />
          <YAxis dataKey="calories" orientation="right" padding={{ top: 20 }} />
          <Tooltip
            cursor={{ fill: "#e0e0e0" }}
            label="abc"
            content={<CustomTooltip />}
          />

          <Legend
            verticalAlign="top"
            align="right"
            height={40}
            iconType="circle"
            iconSize={8}
            payload={[
              { value: "Weight (kg)", type: "bar", id: "kilogram" },
              {
                value: "Burned calories (kCal)",
                type: "bar",
                id: "calories",
                color: "red",
              },
            ]}
          />
          <Bar
            dataKey="kilogram"
            barSize={10}
            fill=" #282D30"
            radius={[50, 50, 0, 0]}
          />
          <Bar
            dataKey="calories"
            barSize={10}
            fill="#E60000"
            radius={[50, 50, 0, 0]}
          />
        </BarChart>
      </div>
    );
  }
}
export default DailyActivity;
