import "../styles/TopNav.css";
import Logo from "../assets/Logo.png";

const TopNav = () => {
  return (
    <div className="topNav">
      
      <div className="logo">
          <img src={Logo} alt="SportSee" />   
      </div>

      <ul className="tabs">
        <li className="tab-link">
          Home
        </li>
        <li className="tab-link">
          Profile
        </li>
        <li className="tab-link">
          Settings
        </li>
        <li className="tab-link">
          Community
        </li>
        
      </ul>
    </div>
  );
};

export default TopNav;
