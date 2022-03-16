import "../styles/Objectives.css"
import React from "react"
import PropTypes from "prop-types"

import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

/**
 * converts day of month to day of week
 *
 * @param {int} day represents the day of the month
 * @returns the initial letter in the day of the week
 */
const dayOfWeekFormatter = (day) => {
  const daysOfWeek = ["M", "T", "W", "T", "F", "S", "S"]
  return daysOfWeek[(day - 1) % 7]
}

/**
 * the object that renders the objectives section
 */
class Objectives extends React.Component {
  constructor(props) {
    super(props)

    props.averageSession.setVisitor(this)
    this.state = { sessions: [] }
  }

  /**
   *
   * @param {ContentType<TValue, TName>} descriptor that contains the tooltip payload
   * @returns the div with duration
   */
  CustomTooltip(descriptor) {
    if (descriptor.active) {
      return (
        <>
          <div className="average-speed">
            <p>{descriptor.payload[0].value}min</p>
          </div>
        </>
      )
    }
    return null
  }

  /**
   * the render function
   *
   * @returns the rendered div
   */
  render() {
    let averageSession = this.state.sessions

    return (
      <ResponsiveContainer width="30%" height="40%">
        <LineChart
          width={300}
          height={265}
          data={averageSession}
          margin={{
            top: 20,
            right: 10,
            left: 10,
            bottom: 0,
          }}
          style={{
            background:
              "linear-gradient(to right, #FF0000 72%, #E60001 72% 100%)",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.0212249)",
            borderRadius: "5px",
          }}
        >
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            tick={{
              fill: "rgba(255,255,255,0.5)",
              fontSize: "12px",
              fontWeight: "500",
            }}
            tickMargin={5}
            tickFormatter={dayOfWeekFormatter}
            interval="preserveStartEnd"
          />
          <Legend
            iconSize={0}
            align="left"
            verticalAlign="top"
            payload={[
              {
                value: "Average speed of your sessions",
                type: "line",
                id: "ID01",
                color: "#f0f0f0",
                fontSize: "62px",
              },
            ]}
          />
          <Tooltip content={this.CustomTooltip} />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#f0f0f0"
            fill="#f0f0f0"
            dot={false}
            activeDot={{
              r: 4,
              fill: "white",
              strokeWidth: 8,
              stroke: "rgba(255, 255, 255, 0.23)",
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    )
  }
}

Objectives.propTypes = {
  sessions: PropTypes.array,
}
export default Objectives
