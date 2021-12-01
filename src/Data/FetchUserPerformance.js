import axios from "axios";

class fetchUserPerformance {
  constructor(props) {
    super(props);

    //   this.state = { firstName: "" };
    const userid = "18";

    axios
      .get("http://localhost:3000/user/" + userid + "performance")
      .then((response) => this.setInitialState(response))
      .catch((error) => console.error(error));
  }

  setInitialState(response) {
    this.setState({
      kind: response.data.data.kind,
      data: response.data.data.data,
    });
  }
  getUserPerformanceType() {
    return this.state.kind;
  }
  getUserPerformanceData() {
    return this.state.data;
  }
}

export default fetchUserPerformance;
