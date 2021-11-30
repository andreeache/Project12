import "../styles/RadarChart.css";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import USER_PERFORMANCE from "./db";

let myData = [];
for (let i = 0; i < USER_PERFORMANCE[0]["data"].length; i++) {
  const oldKind = USER_PERFORMANCE[0]["data"][i]["kind"];

  let e = {};
  e["kind"] = USER_PERFORMANCE[0]["kind"][oldKind];
  e["kind"] = e["kind"].charAt(0).toUpperCase() + e["kind"].slice(1)
  e["value"] = USER_PERFORMANCE[0]["data"][i]["value"];
  myData.push(e);
}

const RadarChartData = () => {
  return (
    <ResponsiveContainer width="30%" height="40%">
      <RadarChart cx="50%" cy="50%" outerRadius="65%" data={myData} 
      style={{
        backgroundColor: "#282D30",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.0212249)",
        borderRadius: "5px",
  
        
      }}>
        
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" tick={{
              fill: "#FFFFFF",
              fontWeight: "500",
              fontSize: "12px",
              lineHeigt: "24px",
            }}/>
        <Radar
          name="Radar"
          dataKey="value"
          stroke="#FF0101B2"
          fill="#FF0101B2"
          fillOpacity={1}
          
        
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default RadarChartData;
