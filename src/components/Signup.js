import React, { Component } from "react";
import SignupForm from './SignupForm'

export class Signup extends Component {
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
        <h1>Sign up</h1>
        <SignupForm handleSuccessfulAuth={this.handleSuccessfulAuth}/>
      </div>
    );
  }
}

export default Signup;
