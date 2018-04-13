// @flow
import React, { Component } from "react";
import ReactDOM from "react-dom";

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
    return this.props.data.posts.map(this_post => (
      <PostComponent
        key={this_post.id}
        post={this_post}
        users={this.props.data.users}
        getUserFunction={getUserByID}
      />
    ));
  }
}

function PostComponent(props: {
  post: Post,
  users: Array<User>,
  getUserFunction: (Array<User>, string) => ?User
}) {
  let { post } = props;
  let post_user = props.getUserFunction(props.users, post.userId);
  return (
    <div>
      <img src={post.imageUrl} alt={post.description} />
      <p>{post_user ? post_user.username : "Anonymus"}</p>
    </div>
  );
}

// This just exports the variables so we can test them with jest
export { PostComponent, App, getUserByID };
