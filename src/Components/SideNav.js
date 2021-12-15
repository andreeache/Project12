import "../styles/SideNav.css";
import resting from "../assets/icon-resting.png";
import swimming from "../assets/icon-swimming.png";
import cycling from "../assets/icon-cycling.png";
import lifting from "../assets/icon-lifting.png";

/**
 * Side navigation bar, implemented as a function
 * @returns the DIV to render
 */
const SideNav = () => {
  return (
    <div className="sideNav">
      <img src={resting} alt="Resting icon" className="side-icon" />
      <img src={swimming} alt="Swimming icon" className="side-icon" />
      <img src={cycling} alt="Cycling icon" className="side-icon" />
      <img src={lifting} alt="Weightlifting icon" className="side-icon" />
      <div className="copyright">Copyright, SportSee 2020</div>
    </div>
  );
};

export default SideNav;
