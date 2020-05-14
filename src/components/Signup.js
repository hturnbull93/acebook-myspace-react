import React, { Component } from "react";
import SignupForm from './SignupForm'

export class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { sent: "" };
  }

  render() {
    return (
      <div>
        <h1>Sign up</h1>
        <SignupForm/>
      </div>
    );
  }
}

export default Signup;
