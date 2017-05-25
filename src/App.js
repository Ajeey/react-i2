import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Footer from './footer/Footer.js';
import Header from './header/Header.js';
import Login from './login/Login.js';
import List from './list/List.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.checkIfLoggedIn();
  }

  checkIfLoggedIn() {
    let token = window.localStorage.getItem("i2x_auth_token");
    if(token) {
      this.state = {
        isLoggedIn: true,
        token: token
      };
    } else {
      this.state = {
        isLoggedIn: false,
        token: null
      };
    }
  }

  updateLoginState(data) {
    console.log("login state changed", data);
    this.setState({
      token: data.token,
      isLoggedIn: data.isLoggedIn
    });
  }

  renderLoginOrList() {
    if(this.state.isLoggedIn) {
      return <List token={this.state.token} />
    } else {
      return <Login updateLoginState={ this.updateLoginState.bind(this) } />
    }
  }

  logoutUser() {
    localStorage.removeItem("i2x_auth_token");
    this.setState({
      token: null,
      isLoggedIn: false
    });
  }

  render() {
    return (
      <div className="App">
        <Header isLoggedIn={this.state.isLoggedIn} logout={this.logoutUser.bind(this)} />
        { this.renderLoginOrList() }
      </div>
    );
  }
}

export default App;
