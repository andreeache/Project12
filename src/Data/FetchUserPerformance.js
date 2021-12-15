import axios from "axios";

/**
 * class used to fetch the performance data for a user from the backend
 */
class fetchUserPerformance {
  /**
   * 
   * @param {string} userId the id of the user 
   */
  constructor(userId) {
    this.state = { visitor: [], data: [], kind: [] }

    //   this.state = { firstName: "" };
    const userid = "18";

    axios
      .get("http://localhost:3000/user/" + userid + "/performance")
      .then((response) => this.setInitialState(response))
      .catch((error) => console.error(error))
  }

  setInitialState(response) {
    this.state.data = response.data.data.data
    this.state.kind = response.data.data.kind
    for (let i = 0; i < this.state.visitor.length; i++) {
      this.state.visitor[i].setState({ doRefresh: 1 })
    }
  }

  /**
   * adds a visitor to the list
   * @param {React.Component} visitor 
   */
  setVisitor(visitor) {
    this.state.visitor.push(visitor)
  }

  /**
   * gets the kind of performance measure
   * 
   * @returns kind of performance measure
   */
  getUserPerformanceType() {
    return this.state.kind;
  }

  /**
   * gets the performance data
   * 
   * @returns the performance data
   */
  getUserPerformanceData() {
    return this.state.data;
  }
}

export default fetchUserPerformance;
