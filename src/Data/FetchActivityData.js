import axios from "axios";

/** This class fetches daily activity data from the backend service */
class fetchActivityData {
  /**
   *
   * @param {string} userId contains the user id used to query the backend
   */
  constructor(userId) {
    this.state = { sessions: [], visitor: [] };

    axios
      .get("http://localhost:3000/user/" + userId + "/activity")
      .then((response) => this.setInitialState(response))
      .catch((error) => console.error(error));
  }

  setInitialState(response) {
    this.state.sessions = response.data.data.sessions;
    for (let i = 0; i < this.state.visitor.length; i++) {
      this.state.visitor[i].setState({ doRefresh: 1 });
    }
  }

  /**
   * adds a visitor to the visitor list
   *
   * @param {React.Component} visitor the visitor
   */
  setVisitor(visitor) {
    this.state.visitor.push(visitor);
  }

  /**
   * gets the user session
   *
   * @returns the user session
   */
  getUserSession() {
    return this.state.sessions;
  }
}

export default fetchActivityData;
