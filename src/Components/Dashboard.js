import "../styles/Dashboard.css";
import SideNav from "./SideNav";
import Header from "./Header";
import Nutrition from "./Nutrition";
import Poids from "./Poids";





function Dashboard () {
return (
    <div className="dashboard">
         <SideNav/>
         <div className="main-dashboard">
       <Header/>
        <div className="dashboard-data">
        <div className="charts">
           <Poids />
            <div>Objectifs</div>
            <div>Radar</div>
            <div>KPI</div>
        </div>
        <Nutrition />
        </div>
        </div>
    </div>
   
)
}

export default Dashboard;