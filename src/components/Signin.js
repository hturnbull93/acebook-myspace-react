import React, { Component } from "react";
import SigninForm from './SigninForm'

export class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = { sent: "" };
  }

  render() {
    return (
      <div>
        <h1>Sign in</h1>
        <SigninForm/>
      </div>
    );
  }
}

export default Signin;
