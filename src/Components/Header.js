import "../styles/Header.css";
import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);

    props.userData.setVisitor(this);
    this.state = { userData: props.userData };
  }

  render() {
    let userName = this.state.userData.getFirstName();
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
    );
  }
}
export default Header;
