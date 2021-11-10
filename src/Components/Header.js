import "../styles/Header.css";

const Header = () => {
    return (
        <div>
            <div className="header">
        <h1 className="header-text">
          Hello <span className="user-name">User Name</span>
        </h1>
        <p className="user-message">
          Congratulations! You reached yesterday’s goal! 👏
        </p>
      </div>
        </div>
    )
}

export default Header;
