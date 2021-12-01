import axios from "axios";


class fetchAverageSession {
    constructor(props) {
      super(props);
  
      //   this.state = { firstName: "" };
      const userid = "18";
  
      axios
        .get("http://localhost:3000/user/" + userid + "average-sessions")
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

  export default fetchAverageSession