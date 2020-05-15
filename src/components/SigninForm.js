import React, { Component } from "react";

export class SigninForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
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
    const res = await fetch("http://localhost:3001/api/v1/sessions", {
      method: "POST",
      body: JSON.stringify(this.state.values),
      headers: {
        "Content-Type": "application/json",
      },
    });
    this.setState({ isSubmitting: false });
    const data = await res.json();
    if (data.status === "created") {
      this.setState({ message: data.status })
      this.props.handleSuccessfulAuth(data)
    } else {
      this.setState({ message: data.status, isError: true })
    }
  };
  render() {
    let errorMessage = this.state.message === 401 ? "Incorrect email or password" : ""
    return (
      <div>
      <form onSubmit={this.submitForm}>
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

export default SigninForm;
