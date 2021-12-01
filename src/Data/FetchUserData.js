import axios from "axios";

class FetchUserData {
  constructor(userId) {
    this.state = { firstName: "", todayScore: 0, visitor: [] };

    axios
      .get("http://localhost:3000/user/" + userId)
      .then((response) => this.setInitialState(response))
      .catch((error) => console.error(error));
  }

  setInitialState(response) {
    this.state.firstName = response.data.data.userInfos.firstName;
    this.state.calorieCount = response.data.data.keyData.calorieCount;
    this.state.proteinCount = response.data.data.keyData.proteinCount;
    this.state.carbohydrateCount = response.data.data.keyData.carbohydrateCount;
    this.state.lipidCount = response.data.data.keyData.lipidCount;
    this.state.todayScore = response.data.data.score;

    for (let i = 0; i < this.state.visitor.length; i++) {
      this.state.visitor[i].setState({ doRefresh: 1 });
    }
  }

  setVisitor(visitor) {
    this.state.visitor.push(visitor);
  }

  getFirstName() {
    return this.state.firstName;
  }
  getCalorieCount() {
    return this.state.calorieCount;
  }
  getProteinsCount() {
    return this.state.proteinCount;
  }
  getCarbohydrateCount() {
    return this.state.carbohydrateCount;
  }
  getLipidCount() {
    return this.state.lipidCount;
  }
  getTodayScore() {
    return this.state.todayScore;
  }
}

export default FetchUserData;
