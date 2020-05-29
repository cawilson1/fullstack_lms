import React, { useEffect, useState } from "react";
import "./App.css";
import { Router } from "@reach/router";
import { withAuthenticator } from "@aws-amplify/ui-react";

import Post from "./components/Post";
import ResourceInputContainer from "./containers/ResourceInputContainer";
import ResourcesListContainer from "./containers/ResourcesListContainer";
import PostInputContainer from "./containers/PostInputContainer";
import PostsListContainer from "./containers/PostsListContainer";
import UserProfileContainer from "./containers/UserProfileContainer";
import UserProfileInputContainer from "./containers/UserProfileInputContainer";
import NavContainer from "./containers/NavContainer";
import Landing from "./components/Landing";

function App({ usernameApp, boundLoadProfile }) {
  const [username, setUsername] = useState(null);

  const callBoundLoad = async () => {
    // console.log("inside the callBoundLoad");
    try {
      boundLoadProfile && boundLoadProfile();
      // console.log("hit the boundLoadProfile");
    } catch (error) {
      console.error("Cannot find user", error);
    }
  };

  useEffect(() => {
    callBoundLoad();
  }, []);

  return (
    <div className="App">
      <NavContainer />
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
  );
}

export default withAuthenticator(App);

const styles = {
  universal: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "60vw",
    marginRight: "10vw",
    marginTop: "10vw",
    justifyContent: "center",
  },
};
