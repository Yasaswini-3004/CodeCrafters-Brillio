import { Component } from "react";
import { Link } from "react-router-dom";
import "./NavbarStyles.css";
import React from "react";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      jobDropdownVisible: false,
    };
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  toggleJobDropdown = () => {
    this.setState({ jobDropdownVisible: !this.state.jobDropdownVisible });
  };

  handleLogout = () => {
    // Perform logout action here (e.g., clear user session, reset state, etc.)
    // Redirect to AuthContainer after logout
    // You can use any method for redirection, here's an example using window.location:
    window.location.href = "/"; // Redirects to AuthContainer
  };

  render() {
    return (
      <>
        <nav>
          <Link to="/">
            <img
              id="im"
              src="https://www.brillio.com/wp-content/themes/brillio/assets/images/logo/Brillio_Secondary-Logo.svg"
              alt="Brillio"
            ></img>
          </Link>
          <div>
            <ul
              id="navbar"
              className={this.state.clicked ? "#navbar active" : "#navbar"}
            >
              {/* {/* <li><a className = "active" href="index.html">About Brillio</a></li>*/}
              {/* <li><a href="index.html">Let's Connect</a></li>
                        <li><a href="index.html">Careers</a></li> */}
              <li className="nav-button">
                <button onClick={this.toggleJobDropdown}>
                  Jobs
                  <i
                    className={
                      this.state.jobDropdownVisible
                        ? "fas fa-caret-up"
                        : "fas fa-caret-down"
                    }
                  ></i>
                </button>
                <ul
                  className={
                    this.state.jobDropdownVisible
                      ? "dropdown-content active"
                      : "dropdown-content"
                  }
                >
                  <li>
                    <Link to="/Jobdetails">View Jobs</Link>
                  </li>
                  <li>
                    <Link to="/Form">Upload Jobs</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/UploadFiles">Upload Resume</Link>
              </li>
              {/* <li>
                <Link to="/my_profile"><i className="fa fa-user" aria-hidden="true"></i></Link>
              </li> */}
              <li className="nav-button">
                <button onClick={this.toggleJobDropdown}>
                <Link to="/my_profile"><i className="fa fa-user" aria-hidden="true"></i></Link>
                  {/* <i
                    className={
                      this.state.jobDropdownVisible
                        ? "fas fa-caret-up"
                        : "fas fa-caret-down"
                    }
                  ></i> */}
                </button>
                <ul
                  className={
                    this.state.jobDropdownVisible
                      ? "dropdown-content active"
                      : "dropdown-content"
                  }
                >
                  <li>
                    <Link to="">My Profile</Link>
                  </li>
                  <li className="nav-button">
                    <button onClick={this.handleLogout}>
                      Logout
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div id="mobile" onClick={this.handleClick}>
            <i
              id="bar"
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
