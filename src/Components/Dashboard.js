import "../styles/Dashboard.css";
import SideNav from "./SideNav";
import Header from "./Header";
import Nutrition from "./Nutrition";
import DailyActivity from "./DailyActivity";
import Objectives from "./Objectives";
import RadarChartData from "./RadarChart";
import PieChartGraph from "./PieChart";
import FetchUserData from "../Data/FetchUserData";
import fetchActivityData from "../Data/FetchActivityData";
import fetchAverageSession from "../Data/FetchAverageSession";
import fetchUserPerformance from "../Data/FetchUserPerformance";
import { useParams } from "react-router-dom";

/**
 * The main view port
 * 
 * @returns a div with the main dashboard and the sidebar navigation
 */
function Dashboard() {
  const { userId } = useParams();

  let userData = new FetchUserData(userId);
  let activityData = new fetchActivityData(userId);
  let averageSession = new fetchAverageSession(userId);
  let userPerformance = new fetchUserPerformance(userId);

  return (
    <div className="dashboard">
      <SideNav />
      <div className="main-dashboard">
        <Header userData={userData} />
        <div className="dashboard-data">
          <div className="charts">
            <DailyActivity activityData={activityData} />
            <Objectives averageSession={averageSession} />
            <RadarChartData userPerformance={userPerformance} />
            <PieChartGraph userData={userData} />
          </div>
          <Nutrition userData={userData} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

