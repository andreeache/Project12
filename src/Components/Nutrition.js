import "../styles/Nutrition.css";
import calories from "../assets/calories-icon.png";
import proteins from "../assets/protein-icon.png";
import carbs from "../assets/carbs-icon.png";
import lipids from "../assets/fat-icon.png";

const Nutrition = () => {
  return (
    <div className="nutrition">
      <div className="nutrition-card">
        <div className="nutrition-icon">
          <img src={calories} alt="Calories Icon" />
        </div>
        <div className="nutrition-data">
          1,930kCal
          <h6>Calories</h6>
        </div>
      </div>
      <div className="nutrition-card">
        <div className="nutrition-icon">
          <img src={proteins} alt="Proteins Icon" />
        </div>
        <div className="nutrition-data">
          155g
          <h6>Proteins</h6>
        </div>
      </div>
      <div className="nutrition-card">
        <div className="nutrition-icon">
          <img src={carbs} alt="Carbs Icon" />
        </div>
        <div className="nutrition-data">
          290g
          <h6>Carbs</h6>
        </div>
      </div>
      <div className="nutrition-card">
        <div className="nutrition-icon">
          <img src={lipids} alt="Lipids Icon" />
        </div>
        <div className="nutrition-data">
          50g
          <h6>Lipids</h6>
        </div>
      </div>
    </div>
  );
};

export default Nutrition;
