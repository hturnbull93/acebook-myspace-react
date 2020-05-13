import React, { Component } from 'react'

export class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { sent: "" }
  }
  sendForm = (event) => {
    if(event) event.preventDefault()
    this.setState({ sent: "Success"})
  }
  
  render() {
    return (
      <div>
        <h1>Sign up</h1>
        <form onSubmit={this.sendForm}>
          <input type="text" name="firstName"/>
          <input type="text" name="lastName"/>
          <input type="text" name="email"/>
          <input type="text" name="password"/>
          <input type="submit" className="submit"/>
        </form>
    <div>{this.state.sent}</div>
      </div>
    )
  }
}

export default Signup
