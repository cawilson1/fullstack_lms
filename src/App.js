import React from "react";
import "./App.css";
import { Router, Link } from "@reach/router";
// import { API, graphqlOperation } from "aws-amplify";
// import { createResource } from "./graphql/mutations";
import { Auth } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";

import Header from "./components/Header";
import Nav from "./components/Nav";
import EditUserProfile from "./components/EditUserProfile";
import Post from "./components/Post";
import PostInput from "./components/PostInput";
import PostsList from "./components/PostsList";
import Resource from "./components/Resource";
import ResourceInputContainer from "./containers/ResourceInputContainer";
import ResourcesListContainer from "./containers/ResourcesListContainer";
import PostInputContainer from "./containers/PostInputContainer";
import PostsListContainer from "./containers/PostsListContainer";
import UserProfileContainer from "./containers/UserProfileContainer";
import UserProfileInputContainer from "./containers/UserProfileInputContainer";

// async function getUserName() {
//   try {
//     const currentUN = await Auth.currentUserInfo();
//     console.log("auth", Auth, "UN", currentUN);
//   } catch (error) {
//     console.error(error);
//   }
// }

function App() {
  // Auth.currentUserInfo();
  // getUserName();
  return (
    <div className="App">
      <Header />
      <Nav />
      <Router>
        <UserProfileContainer path="profile" />
        <UserProfileInputContainer path="create_profile" />
        <EditUserProfile path="profile_edit" />
        {/* </Profile> */}
        <ResourcesListContainer path="/" />
        {/* <Resource path="resource" /> */}
        <ResourceInputContainer path="resource_input" />
        {/* </ResourcesListContainer> */}
        <PostsListContainer path="post_list" />
        {/* <PostsList path="post_list" /> */}
        <Post path="post" />
        <PostInputContainer path="post_input" />
        {/* <PostInput path="post_input" /> */}
        {/* </PostsListContainer> */}
      </Router>
    </div>
  );
}

export default withAuthenticator(App);
