import React from "react";
import "./App.css";
import { Router, Link } from "@reach/router";
// import { API, graphqlOperation } from "aws-amplify";
// import { createResource } from "./graphql/mutations";
import { Auth } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";

import Header from "./components/Header";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile";
import Post from "./components/Post";
import PostInput from "./components/PostInput";
import PostsList from "./components/PostsList";
import Resource from "./components/Resource";
import ResourceInputContainer from "./containers/ResourceInputContainer";
import ResourcesListContainer from "./containers/ResourcesListContainer";

function App() {
  console.log("auth", Auth, "current auth user", Auth.user);
  return (
    <div className="App">
      <Header />
      <Nav />
      <Router>
        <Profile path="profile" />
        <EditProfile path="profile_edit" />
        {/* </Profile> */}
        <ResourcesListContainer path="/" />
        {/* <Resource path="resource" /> */}
        <ResourceInputContainer path="resource_input" />
        {/* </ResourceList> */}
        <PostsList path="post_list" />
        <Post path="post" />
        <PostInput path="post_input" />
        {/* </PostsList> */}
      </Router>
    </div>
  );
}

export default withAuthenticator(App);
