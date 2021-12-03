import "../styles/RadarChart.css"
import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";


class RadarChartData extends React.Component {
  constructor(props) {
    super(props);

    props.userPerformance.setVisitor(this);
    this.state = { userPerformance: props.userPerformance}
  }

  render() {
    let myData = this.state.userPerformance.getUserPerformanceData();
    for (let i = 0; i < myData.length; i++) {
      const oldKind = myData[i]["kind"];
      let newkind = this.state.userPerformance.getUserPerformanceType()[String(oldKind)]
      myData[i]["newkind"] = newkind.charAt(0).toUpperCase() + newkind.slice(1)
    } 

  return (
    <ResponsiveContainer width="30%" height="40%">
      <RadarChart cx="50%" cy="50%" outerRadius="65%" data={myData} 
      style={{
        backgroundColor: "#282D30",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.0212249)",
        borderRadius: "5px",
  
        
      }}>
        
        <PolarGrid />
        <PolarAngleAxis dataKey={"newkind"} tick={{
              fill: "#FFFFFF",
              fontWeight: "500",
              fontSize: "12px",
              lineHeigt: "24px",
            }}/>
        <Radar
          name="Radar"
          dataKey={"value"}
          stroke="#FF0101B2"
          fill="#FF0101B2"
          fillOpacity={1}
          
        
        />
      </RadarChart>
    </ResponsiveContainer>
  )
}
}
export default RadarChartData;
