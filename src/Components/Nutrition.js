import "../styles/Nutrition.css";
import React from "react";
import calories from "../assets/calories-icon.png";
import proteins from "../assets/protein-icon.png";
import carbs from "../assets/carbs-icon.png";
import lipids from "../assets/fat-icon.png";


class Nutrition extends React.Component {
  constructor(props) {
    super(props)

    props.userData.setVisitor(this);
    this.state = { userData: props.userData }
  }

  render() {
    let calorieCount = this.state.userData.getCalorieCount()
    let proteinCount = this.state.userData.getProteinsCount()
    let carbohydrateCount = this.state.userData.getCarbohydrateCount()
    let lipidCount = this.state.userData.getLipidCount()

  return (
    <div className="nutrition">
      <div className="nutrition-card">
        <div className="nutrition-icon">
          <img src={calories} alt="Calories Icon" />
        </div>
        <div className="nutrition-data">
          {calorieCount}
          <h6>Calories</h6>
        </div>
      </div>
      <div className="nutrition-card">
        <div className="nutrition-icon">
          <img src={proteins} alt="Proteins Icon" />
        </div>
        <div className="nutrition-data">
          {proteinCount}g
          <h6>Proteins</h6>
        </div>
      </div>
      <div className="nutrition-card">
        <div className="nutrition-icon">
          <img src={carbs} alt="Carbs Icon" />
        </div>
        <div className="nutrition-data">
          {carbohydrateCount}g
          <h6>Carbs</h6>
        </div>
      </div>
      <div className="nutrition-card">
        <div className="nutrition-icon">
          <img src={lipids} alt="Lipids Icon" />
        </div>
        <div className="nutrition-data">
          {lipidCount}g
          <h6>Lipids</h6>
        </div>
      </div>
    </div>
  )
}
}

export default Nutrition;
