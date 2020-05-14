import React, { Component } from "react";

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
    const res = await fetch("/example-posts.json", {
      method: "POST",
      body: JSON.stringify(this.state.values),
      headers: {
        "Content-Type": "application/json",
      },
    });
    this.setState({ isSubmitting: false });
    const data = await res.json();
    !data.hasOwnProperty("error")
      ? this.setState({ message: data.success })
      : this.setState({ message: data.error, isError: true });
  };

  render() {
    return (
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
    );
  }
}

export default SignupForm;
