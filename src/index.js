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
    return this.props.data.posts.map(this_post => (
      <PostComponent
        key={this_post.id}
        post={this_post}
        users={this.props.data.users}
        getUserFunction={this.getUserByID}
      />
    ));
  }

  getUserByID(users: Array<User>, id: string): ?User {
    return users.find(user => user.id === id) || null;
  }
}

function PostComponent(props: {
  post: Post,
  users: Array<User>,
  getUserFunction: (Array<User>, string) => ?User
}) {
  let post_user = props.getUserFunction(props.users, props.post.userId);
  return (
    <div>
      <img src={props.post.imageUrl} alt={props.post.description} />
      <p>{post_user ? post_user.username : "Anonymus"}</p>
    </div>
  );
}

const appRoot = document.getElementById("root");
appRoot && ReactDOM.render(<App data={foxesData} />, appRoot);
