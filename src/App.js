import React, { useEffect, useState } from "react";
import "./App.css";
import { Router } from "@reach/router";
import { Auth } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
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

function App() {
  // const [isProfile, setIsProfile] = useState(false);
  const [profileUsername, setProfileUsername] = useState("");

  // useEffect(() => {
  //   const checkProfileExists = async () => {
  //     let userInfo = await Auth.currentUserInfo();
  //    if (!userInfo) {
  //         navigate("sign_in");
  //       }
  //     let userName = await userInfo.username;
  //     // console.log("meow", userName);
  //     try {
  //       let checkDb = await axios({
  //         method: "get",
  //         url: `https://s9alxvtcob.execute-api.us-east-1.amazonaws.com/dev/user?username=${userName}`,
  //       });
  //       console.log("CheckDb response", checkDb.data[0][0].username);
  //     } catch (error) {
  //       console.error(error);
  //       navigate("create_profile");
  //     }
  //   };
  //   checkProfileExists();
  // }, []);

  return (
    <div className="App">
      {/* <NavContainer /> */}
      <NavDrawer />
      <div style={styles.universal}>
        <Router>
          <UserProfileContainer path="profile" />
          <UserProfileInputContainer path="create_profile" />
          <Landing path="home" />
          <SignIn path="sign_in" />
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
