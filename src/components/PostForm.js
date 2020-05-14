import React, { Component } from "react";

export class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        message: "",
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
        <label htmlFor="email">Email</label>
        <input
          type="textarea"
          name="message"
          onChange={this.handleInputChange}
          value={this.state.values.message}
          required
        />
      </form>
    );
  }
}

export default PostForm;
