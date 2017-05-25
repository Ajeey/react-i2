import React, { Component } from 'react';
import './App.css';
import Header from './header/Header.js';
import Login from './login/Login.js';
import List from './list/List.js';
import Strings from './strings/strings.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.checkIfLoggedIn();
  }

  checkIfLoggedIn() {
    let token = window.localStorage.getItem(Strings.localStorageKey);
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
    localStorage.removeItem(Strings.localStorageKey);
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
