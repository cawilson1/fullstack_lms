import React, { useEffect, useState } from "react";
import "./App.css";
import { Router } from "@reach/router";
import { Auth } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import axios from "axios";

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
  const [isProfile, setIsProfile] = useState(false);

  useEffect(() => {
    const checkProfileExists = async () => {
      let userInfo = await Auth.currentUserInfo();
      let userName = await userInfo.username;
      console.log("meow", userName);
      let checkDb = await axios({
        method: "get",
        url: `https://s9alxvtcob.execute-api.us-east-1.amazonaws.com/dev/user?username=${userName}`,
      });
      if (checkDb) {
        console.log("true", true);
        return setIsProfile(true);
      } else {
        console.log("false", false);
        return setIsProfile(false);
      }
    };
    checkProfileExists();
  }, []);

  return (
    <div className="App">
      <NavContainer />
      <div style={styles.universal}>
        <Header />
        {isProfile ? (
          <Router>
            <UserProfileContainer
              path="profile"
              isProfile={isProfile}
              setisProfile={setIsProfile}
            />
            <UserProfileInputContainer path="create_profile" />
            <Landing path="/" />
            <ResourcesListContainer path="resource_list" />
            <ResourceInputContainer path="resource_input" />
            <PostsListContainer path="post_list" />
            <Post path="post" />
            <PostInputContainer path="post_input" />
          </Router>
        ) : (
          <UserProfileInputContainer path="create_profile" />
        )}
        {/* <Router>
          <UserProfileContainer path="profile" />
          <Landing path="/" />
          <ResourcesListContainer path="resource_list" />
          <ResourceInputContainer path="resource_input" />
          <PostsListContainer path="post_list" />
          <Post path="post" />
          <PostInputContainer path="post_input" />
        </Router> */}
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
