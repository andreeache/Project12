import "../styles/Dashboard.css";
import SideNav from "./SideNav";
import Header from "./Header";
import Nutrition from "./Nutrition";
import DailyActivity from "./DailyActivity";
import Objectives from "./Objectives";
import RadarChartData from "./RadarChart";
import PieChartGraph from "./PieChart";
import FetchUserData from "../Data/FetchUserData";

function Dashboard() {
  let userData = new FetchUserData("18");

  return (
    <div className="dashboard">
      <SideNav />
      <div className="main-dashboard">
        <Header userData={userData} />
        <div className="dashboard-data">
          <div className="charts">
            <DailyActivity />
            <Objectives />
            <RadarChartData />
            <PieChartGraph userData={userData}/>
          </div>
          <Nutrition userData={userData} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
