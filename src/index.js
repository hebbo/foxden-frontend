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

function getUserByID(users: Array<User>, id: string): ?User {
  return users.find(user => user.id === id) || null;
}

class App extends Component<Props, {}> {
  render() {
    return this.props.data.posts.map(post => this.renderPost(post));
  }

  renderPost(post: Post) {
    let post_user = getUserByID(this.props.data.users, post.userId);
    return (
      <div>
        <img src={post.imageUrl} key={post.id} alt={post.description} />
        <p>{post_user ? post_user.username : "Anonymus"}</p>
      </div>
    );
  }
}

const appRoot = document.getElementById("root");
appRoot && ReactDOM.render(<App data={foxesData} />, appRoot);
