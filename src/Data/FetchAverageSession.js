import axios from "axios"


class fetchAverageSession {
  constructor(userId) {
    this.state = { sessions: [], visitor: [] }
  
      axios
        .get("http://localhost:3000/user/" + userId + "/average-sessions")
        .then((response) => this.setInitialState(response))
        .catch((error) => console.error(error))
    }
  
    setInitialState(response) {
      this.state.sessions = response.data.data.sessions;
      for (let i = 0; i < this.state.visitor.length; i++) {
        this.state.visitor[i].setState({ doRefresh: 1 })
      }
    }

    setVisitor(visitor) {
      this.state.visitor.push(visitor)
    }

    getAverageSession() {
      return this.state.sessions
    }
  }

  export default fetchAverageSession