import React from "react";

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
            posts: [...result],
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
            <article key={post.id}>
              <p>{post.created_at}</p>
              <p>{post.message}</p>
            </article>
          ))}
        </section>
      );
    }
  }
}

export default Postlist;
