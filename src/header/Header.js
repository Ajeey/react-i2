import React, { Component } from 'react';
import "./Header.css";

class Header extends Component {
  
  logout() {
    this.props.logout();
  }

  renderLoggedInState() {
    return <button className="logout-button" onClick={this.logout.bind(this)}>Logout</button>
  }

  renderNotLoggedInState() {
    return ""; //<button>Login</button> 
  }

  renderLoginOrLogout() {
    if(this.props.isLoggedIn) {
      return this.renderLoggedInState();
    } else {
      return this.renderNotLoggedInState();
    }
  }

  render() {
    return (
      <div className="header">
      	<div className="logo">
          i2x
        </div>
        <div className="login-wrapper">
          { this.renderLoginOrLogout() }
        </div>
      </div>
    );
  }
}

export default Header;
