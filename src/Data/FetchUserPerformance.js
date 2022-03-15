import axios from "axios"

/**
 * class used to fetch the performance data for a user from the backend
 */
class fetchUserPerformance {
  /**
   *
   * @param {string} userId the id of the user
   */
  constructor(userId) {
    this.visitor = []
    axios
      .get("http://localhost:3000/user/" + userId + "/performance")
      .then((response) => this.setInitialState(response))
      .catch((error) => console.error(error))
  }

  setInitialState(response) {
    for (let i = 0; i < this.visitor.length; i++) {
      this.visitor[i].setState({
        performanceType: response.data.data.kind,
        performanceData: response.data.data.data,
      })
    }
  }

  /**
   * adds a visitor to the list
   * @param {React.Component} visitor
   */
  setVisitor(visitor) {
    this.visitor.push(visitor)
  }
}

export default fetchUserPerformance
