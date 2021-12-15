import axios from "axios";

/**
 * class used to fetch the user data from the backend service
 */
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

  /**
   * adds a visitor to the list
   * @param {React.Component} visitor
   */
  setVisitor(visitor) {
    this.state.visitor.push(visitor);
  }

  /**
   * gets the first name
   * @returns the first name
   */
  getFirstName() {
    return this.state.firstName;
  }

  /**
   * gets the number of calories
   *
   * @returns the number of calories
   */
  getCalorieCount() {
    return this.state.calorieCount;
  }
  /**
   * gets number of proteins
   *
   * @returns the number of proteins
   */
  getProteinsCount() {
    return this.state.proteinCount;
  }
  /**
   * get number of carbs
   *
   * @returns the number of carbs
   */
  getCarbohydrateCount() {
    return this.state.carbohydrateCount;
  }
  /**
   * get number of lipids
   *
   * @returns the number of lipids
   */
  getLipidCount() {
    return this.state.lipidCount;
  }
  /**
   * get the current day score
   *
   * @returns the current day score
   */
  getTodayScore() {
    return this.state.todayScore;
  }
}

export default FetchUserData;
