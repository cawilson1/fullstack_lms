import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import { Auth } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";

import Header from "./components/Header";
import Post from "./components/Post";
import ResourceInputContainer from "./containers/ResourceInputContainer";
import ResourcesListContainer from "./containers/ResourcesListContainer";
import PostInputContainer from "./containers/PostInputContainer";
import PostsListContainer from "./containers/PostsListContainer";
import UserProfileContainer from "./containers/UserProfileContainer";
import UserProfileInputContainer from "./containers/UserProfileInputContainer";
import NavContainer from "./containers/NavContainer";
import Landing from "./components/Landing";

function App() {
  return (
    <div className="App">
      <NavContainer />
      <div style={styles.universal}>
        <Header />
        <Router>
          <UserProfileContainer path="profile" />
          <UserProfileInputContainer path="create_profile" />
          <Landing path="/" />
          <ResourcesListContainer path="resource_list" />
          <ResourceInputContainer path="resource_input" />
          <PostsListContainer path="post_list" />
          <Post path="post" />
          <PostInputContainer path="post_input" />
        </Router>
      </div>
    </div>
  );
}

export default withAuthenticator(App);

const styles = {
  universal: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "20vw",
    justifyContent: "center",
  },
};
