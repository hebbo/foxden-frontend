// @flow
import React, { Component } from "react";
import ReactDOM from "react-dom";
import foxesData from "./data/foxes.json";

type Props = { data: FoxData };

type FoxData = {
  posts: Array<Post>,
  users: Array<User>
};

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

class App extends Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return this.props.data.posts.map(post => this.renderPost(post));
  }

  renderPost(post: Post) {
    return <img src={post.imageUrl} />;
  }
}

const appRoot = document.getElementById("root");
appRoot && ReactDOM.render(<App data={foxesData} />, appRoot);
