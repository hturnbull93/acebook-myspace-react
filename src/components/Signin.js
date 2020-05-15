import React, { Component } from "react";
import SigninForm from './SigninForm'

export class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = { sent: "" };

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
  }
  handleSuccessfulAuth(data) {
    // TODO update parent component
    this.props.handleLogin(data);
    this.props.history.push("/posts");
  }
  render() {
    return (
      <div>
        <h1>Sign in</h1>
        <SigninForm handleSuccessfulAuth={this.handleSuccessfulAuth}/>
      </div>
    );
  }
}

export default Signin;
