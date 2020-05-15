import React, { Component } from "react";
import PostForm from "./PostForm.js";

export class CreatePost extends Component {
  constructor(props) {
    super(props);
  }

  handlePostSubmit(data) {
    // TODO update parent component
    this.props.history.push("/posts");
  }

  render() {
    return (
      <div>
        <h1>Create a Post</h1>
        <PostForm
          userId={this.props.userId}
          handlePostSubmit={this.handlePostSubmit}
        />
      </div>
    );
  }
}

export default CreatePost;
