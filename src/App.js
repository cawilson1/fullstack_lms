import React, { useEffect, useState } from "react";
import "./App.css";
import { Router } from "@reach/router";
import { Auth } from "aws-amplify";
import { AmplifyAuthenticator, withAuthenticator } from "@aws-amplify/ui-react";
import axios from "axios";
import { navigate } from "@reach/router";

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
import NavDrawer from "./components/NavDrawer";
import SignIn from "./components/SignIn";

function App({ usernameApp, boundLoadProfile }) {
  const [username, setUsername] = useState(null);

  // const getUsername = async () => {
  //   let userInfo = await Auth.currentUserInfo();
  //   console.log("APP AUTH1", Auth.currentUserInfo());
  //   console.log("inside the try");
  //   let userName = await userInfo.username;
  //   console.log("setting userName", userName);
  //   return userName;
  // };

  const callBoundLoad = async () => {
    console.log("inside the callBoundLoad");
    try {
      boundLoadProfile && boundLoadProfile();
      console.log("hit the boundLoadProfile");
    } catch (error) {
      console.error("Cannot find user", error);
    }
  };

  useEffect(() => {
    callBoundLoad();
  }, []);

  // setUsername(getUsername());

  return (
    // <AmplifyAuthenticator>
    <div className="App">
      <NavContainer />
      {/* <div>
          {usernameApp == null ? (
            <UserProfileInputContainer path="create_profile" />
          ) : ( */}
      <Router>
        <UserProfileContainer path="profile" />
        <UserProfileInputContainer path="create_profile" />
        <Landing path="/" />
        {/* <SignIn path="/" /> */}
        <ResourcesListContainer path="resource_list" />
        <ResourceInputContainer path="resource_input" />
        <PostsListContainer path="post_list" />
        <Post path="post" />
        <PostInputContainer path="post_input" />
      </Router>
      {/* )}
        </div> */}
    </div>
    // </AmplifyAuthenticator>
  );
}

export default withAuthenticator(App);

const styles = {
  universal: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "10vw",
    marginRight: "10vw",
    marginTop: "10vw",
    justifyContent: "center",
  },
};

{
  /* {isProfile ? (
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
        ) : ( */
}
{
  /* <UserProfileInputContainer path="create_profile" />
        )} */
}
