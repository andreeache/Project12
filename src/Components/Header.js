import "../styles/Header.css"
import PropTypes from "prop-types"
import React from "react"
import FetchUserData from "../Data/FetchUserData"

/**
 * A class for the Dashboard header
 *
 */
class Header extends React.Component {
  constructor(props) {
    super(props)
    props.userData.setVisitor(this)
    this.state = { userData: props.userData }
  }

  /** the object render function */
  render() {
    let userName = this.state.userData.getFirstName()
    return (
      <div>
        <div className="header">
          <h1 className="header-text">
            Hello <span className="user-name">{userName}</span>
          </h1>
          <p className="user-message">
            Congratulations! You reached yesterday’s goal! 👏
          </p>
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  userData: PropTypes.instanceOf(FetchUserData),
}
export default Header
