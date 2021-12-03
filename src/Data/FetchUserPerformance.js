import axios from "axios";

class fetchUserPerformance {
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

  setVisitor(visitor) {
    this.state.visitor.push(visitor)
  }

  getUserPerformanceType() {
    return this.state.kind;
  }
  getUserPerformanceData() {
    return this.state.data;
  }
}

export default fetchUserPerformance;
