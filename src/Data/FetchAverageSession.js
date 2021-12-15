import axios from "axios";
import React from "react";

/** This class fetches the avergae session data from the backend service */

class fetchAverageSession {
  /**
   *
   * @param {string} userId contains the user id used to query the backend
   */
  constructor(userId) {
    this.state = { sessions: [], visitor: [] };

    axios
      .get("http://localhost:3000/user/" + userId + "/average-sessions")
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
   * adds a visitor to the list
   * @param {React.Component} visitor
   */
  setVisitor(visitor) {
    this.state.visitor.push(visitor);
  }

  /**
   * get the session array
   *
   * @returns returns the session arraylist
   */
  getAverageSession() {
    return this.state.sessions;
  }
}

export default fetchAverageSession;
