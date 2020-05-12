import React, { Component } from 'react'
import Posts from "./posts.js";


export class PostPage extends Component {
  render() {
    return (
      <div>
        <h1>Posts</h1>
        <Posts/>
      </div>
    );
  }
}

export default PostPage
