import axios from "axios";


class fetchActivityData {
    constructor(props) {
      super(props);
  
      //   this.state = { firstName: "" };
      const userid = "18";
  
      axios
        .get("http://localhost:3000/user/" + userid + "activity")
        .then((response) => this.setInitialState(response))
        .catch((error) => console.error(error));
    }
  
    setInitialState(response) {
      this.setState({
        sessions: response.data.data.sessions
      });
    }
    getUserSession() {
      return this.state.sessions
    }
  }

  export default fetchActivityData