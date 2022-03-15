import axios from "axios"

/**
 * class used to fetch the user data from the backend service
 */
class FetchUserData {
  constructor(userId) {
    this.firstName = ""
    this.todayScore = 0
    this.visitor = []

    axios
      .get("http://localhost:3000/user/" + userId)
      .then((response) => this.setInitialState(response))
      .catch((error) => console.error(error))
  }

  setInitialState(response) {
    this.firstName = response.data.data.userInfos.firstName
    this.calorieCount = response.data.data.keyData.calorieCount
    this.proteinCount = response.data.data.keyData.proteinCount
    this.carbohydrateCount = response.data.data.keyData.carbohydrateCount
    this.lipidCount = response.data.data.keyData.lipidCount
    this.todayScore = response.data.data.score

    for (let i = 0; i < this.visitor.length; i++) {
      this.visitor[i].setState({ doRefresh: 1 })
    }
  }

  /**
   * adds a visitor to the list
   * @param {React.Component} visitor
   */
  setVisitor(visitor) {
    this.visitor.push(visitor)
  }

  /**
   * gets the first name
   * @returns the first name
   */
  getFirstName() {
    return this.firstName
  }

  /**
   * gets the number of calories
   *
   * @returns the number of calories
   */
  getCalorieCount() {
    return this.calorieCount
  }
  /**
   * gets number of proteins
   *
   * @returns the number of proteins
   */
  getProteinsCount() {
    return this.proteinCount
  }
  /**
   * get number of carbs
   *
   * @returns the number of carbs
   */
  getCarbohydrateCount() {
    return this.carbohydrateCount
  }
  /**
   * get number of lipids
   *
   * @returns the number of lipids
   */
  getLipidCount() {
    return this.lipidCount
  }
  /**
   * get the current day score
   *
   * @returns the current day score
   */
  getTodayScore() {
    return this.todayScore
  }
}

export default FetchUserData
