import "../styles/Objectives.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";
const data = [
  {
    day: 1,
    sessionLength: 30,
  },
  {
    day: 2,
    sessionLength: 23,
  },
  {
    day: 3,
    sessionLength: 45,
  },
  {
    day: 4,
    sessionLength: 50,
  },
  {
    day: 5,
    sessionLength: 0,
  },
  {
    day: 6,
    sessionLength: 0,
  },
  {
    day: 7,
    sessionLength: 60,
  },
];

const CustomTooltip = ({payload, active}) => {
  if (active) {
      return (
          <>
          <div className="average-speed">
              <p>{payload[0].value}min</p>
          </div>
          </>
      )
  }
  return null
}

const dayOfWeekFormatter =(day) => {
  const daysOfWeek = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
  return daysOfWeek[(day - 1) % 7]
}


const Objectives = () => {
  return (
    <ResponsiveContainer width="30%" height="40%">
      <LineChart
        width={300}
        height={265}
        data={data}
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
        <XAxis dataKey="day"
        tickLine={false}
        axisLine={false}
        tick={{
          fill: "rgba(255,255,255,0.5)",
          fontSize: "12px",
          fontWeight: "500",
        }}
        tickMargin={5}
        tickFormatter={dayOfWeekFormatter}
        interval="preserveStartEnd" />
        <Legend 
         iconSize={0}
        align="left" verticalAlign="top"
        payload={[{ value: 'Average speed of your sessions', type: 'line', id: 'ID01', color: "#f0f0f0", fontSize: "62px" }]}
        />
        <Tooltip 
        content={<CustomTooltip />}/>
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
  );
};

export default Objectives;
