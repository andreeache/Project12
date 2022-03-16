import axios from "axios";

/** This class fetches the avergae session data from the backend service */

class fetchAverageSession {
  /**
   *
   * @param {string} userId contains the user id used to query the backend
   */
  constructor(userId) {
    this.visitors = []

    axios
      .get("http://localhost:3000/user/" + userId + "/average-sessions")
      .then((response) => this.setInitialState(response))
      .catch((error) => console.error(error));
  }

  setInitialState(response) {
    for (let i = 0; i < this.visitors.length; i++) {
      this.visitors[i].setState({ sessions: response.data.data.sessions })
    }
  }

  /**
   * adds a visitor to the list
   * @param {React.Component} visitor
   */
   setVisitor(visitor) {
    this.visitors.push(visitor)
  }
}

export default fetchAverageSession;
