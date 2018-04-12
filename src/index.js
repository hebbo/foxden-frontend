// @flow
import React, { Component } from "react";
import ReactDOM from "react-dom";
import foxesData from "./data/foxes.json";

type Post = {
  id: string,
  userId: string,
  imageUrl: string,
  description: string
};

type User = {
  id: string,
  username: string
};

type FoxData = {
  posts: Array<Post>,
  users: Array<User>
};

type Props = { data: FoxData };

class App extends Component<Props, {}> {
  render() {
    return this.props.data.posts.map(post => this.renderPost(post));
  }

  renderPost(post: Post) {
    return <img src={post.imageUrl} key={post.id} alt={post.description} />;
  }
}

const appRoot = document.getElementById("root");
appRoot && ReactDOM.render(<App data={foxesData} />, appRoot);
