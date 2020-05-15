import React from "react";
import moment from "moment";

class Postlist extends React.Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      posts: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3001/api/v1/posts")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            posts: [...result.posts],
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, posts } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <section>
          {posts.map((post) => (
            <article className="post" key={post.id}>
              <p>{moment(post.created_at).format('MMMM Do YYYY, h:mm a')}</p>
              <p>{post.message}</p>
              <p>{post.first_name}</p>
            </article>
          ))}
        </section>
      );
    }
  }
}

export default Postlist;
