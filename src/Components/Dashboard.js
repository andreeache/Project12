import "../styles/Dashboard.css";
import SideNav from "./SideNav";
import Header from "./Header";
import Nutrition from "./Nutrition";
import DailyActivity from "./DailyActivity";
import Objectives from "./Objectives";
import RadarChartData from "./RadarChart";
import PieChartGraph from "./PieChart";

function Dashboard() {
  return (
    <div className="dashboard">
      <SideNav />
      <div className="main-dashboard">
        <Header />
        <div className="dashboard-data">
          <div className="charts">
            <DailyActivity />
            <Objectives />
            <RadarChartData />
            <PieChartGraph / >
          </div>
          <Nutrition />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
