import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, NavLink } from 'react-router-dom';


export class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      },
      isSubmitting: false,
      isError: false,
    };
  }

  handleInputChange = (e) =>
    this.setState({
      values: { ...this.state.values, [e.target.name]: e.target.value },
    });

  submitForm = async (e) => {
    if (e) e.preventDefault();
    this.setState({ isSubmitting: true });
    const res = await fetch("http://localhost:3001/api/v1/registrations", {
      method: "POST",
      body: JSON.stringify(this.state.values),
      headers: {
        "Content-Type": "application/json",
      },
    });
    this.setState({ isSubmitting: false });
    const data = await res.json();
    if (data.status !== 500 ) {
      this.setState({ message: data.success })
      window.location.href = 'http://localhost:3000/posts';
    } else {
      this.setState({ message: data.status, isError: true })
    }

  };

  render() {
    let errorMessage = this.state.isError ? "Email is already in use" : ""
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            onChange={this.handleInputChange}
            value={this.state.values.firstName}
            required
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            onChange={this.handleInputChange}
            value={this.state.values.lastName}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            onChange={this.handleInputChange}
            value={this.state.values.email}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            onChange={this.handleInputChange}
            value={this.state.values.password}
            required
          />
          <input type="submit" className="submit" />
        </form>
        <div>{errorMessage}</div>
      </div>
    );
  }
}

export default SignupForm;
