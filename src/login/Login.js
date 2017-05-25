import React, { Component } from 'react';
import "./Login.css";
import axios from 'axios';
import Spinner from '../spinner/Spinner.js';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      "email": '', 
      "password": '', 
      "isLoading": false,
      "isError": false
    };
  }

  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }

  setLoadingState(value) {
    this.setState({
      isLoading: value
    });
  }

  showLoadingSpinner() {
    if(this.state.isLoading) {
      return <Spinner />;
    }
  }

  showError() {
    if(this.state.isError) {
      return "Email or password incorrect! Please try again."
    }
  }

  handleLogin(e) {
    e.preventDefault();
    var self = this;

    this.setLoadingState(true);
    self.setLoginError(false);

    axios.post("https://i2x-challenge.herokuapp.com/core/login/", {
      email: this.state.email,
      password: this.state.password
    })
    .then(function (response) {
      self.setLoadingState(false);

      self.saveTokenInLS(response.data.token);
      self.updateAppState(response.data.token);

    })
    .catch(function (error) {
      self.setLoadingState(false);
      self.setLoginError(true);
      console.error(error);
    });
  }

  setLoginError(value) {
    this.setState({
      "isError": value
    })
  }

  updateAppState(token) {
    this.props.updateLoginState({
      isLoggedIn: true,
      token: token
    });
  }

  saveTokenInLS(token) {
    window.localStorage.setItem("i2x_auth_token", token);
  }

  render() {
    return (
      <div className="login-container">
        <form onSubmit={this.handleLogin.bind(this)}>
          <input className="custom-input" required autoFocus type="email" value={this.state.value} onChange={this.handleEmailChange.bind(this)} placeholder="Email" />
          <input className="custom-input" required type="password" value={this.state.password} onChange={this.handlePasswordChange.bind(this)} placeholder="Password" />
          <div className="action-block">
            <button className="login-button" type="submit">Login</button>
            { this.showLoadingSpinner() }
          </div>
          <p className="error-msg" >{ this.showError() }</p>
        </form>
      </div>
    );
  }
}

export default Login;
