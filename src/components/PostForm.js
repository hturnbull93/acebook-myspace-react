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
    const res = await fetch("http://localhost:3001/api/v1/posts", {
      method: "POST",
      body: JSON.stringify(this.state.values),
      headers: {
        "Content-Type": "application/json",
      },
    });
    this.setState({ isSubmitting: false });
    const data = await res.json();
    if (!data.hasOwnProperty("error")) {
      this.setState({ message: data.success })
      window.location.href = 'http://localhost:3000/posts';
    } else {
      this.setState({ message: data.error, isError: true })
    }
  };

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <label htmlFor="message">Create Post</label>
        <input
          type="textarea"
          name="message"
          onChange={this.handleInputChange}
          value={this.state.values.message}
          required
        />
        <input type="submit" className="submit" />
      </form>
    );
  }
}

export default PostForm;
