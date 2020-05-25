import React, { useEffect, useState } from "react";
import { navigate } from "@reach/router";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import { Auth } from "aws-amplify";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import downtown from "../assets/stockChs.jpg";
import JRSHarbor from "../assets/harborJRSlogo.jpg";
import defaultAvatar from "../assets/avatar-png-transparent-4.png";

export default function Nav({ firstname, lastname, avatar, boundLoadProfile }) {
  const classes = useStyles();
  const [username, setUsername] = useState("");

  useEffect(() => {
    const getUsername = async () => {
      const useAuth = await Auth.currentUserInfo();
      const gotUser = await useAuth.username;
      setUsername(gotUser);
    };
    getUsername();
  }, []);

  // useEffect(() => {
  //   const loadProfile = async () => {
  //     await boundLoadProfile();
  //   };
  //   loadProfile();
  // }, []);

  //Profile undefined here, need to bring in from somewhere for avatar switch...
  console.log("Profile stuff", firstname, avatar);
  console.log("AUTH ANYWHERE", Auth);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        {/* <div className={classes.avatarContainer}>
          {avatar && avatar === "" ? (
            <img src={defaultAvatar} className={classes.avatar} />
          ) : (
            <img src={avatar} className={classes.avatar} />
          )}
        </div> */}
        <div className={classes.welcome}>Welcome, {username}!</div>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <MenuList>
              <MenuItem className={classes.list} onClick={() => navigate("/")}>
                Home
              </MenuItem>
              <MenuItem
                className={classes.list}
                onClick={() => navigate("profile")}
              >
                My Profile
              </MenuItem>
              <MenuItem
                className={classes.list}
                onClick={() => navigate("create_profile")}
              >
                {" "}
                Create Profile
              </MenuItem>
              <MenuItem
                className={classes.list}
                onClick={() => navigate("post_list")}
              >
                Posts
              </MenuItem>
              <MenuItem
                className={classes.list}
                onClick={() => navigate("post_input")}
              >
                Create Post
              </MenuItem>
              <MenuItem
                className={classes.list}
                onClick={() => navigate("resource_list")}
              >
                Resources
              </MenuItem>
              <MenuItem
                className={classes.list}
                onClick={() => navigate("resource_input")}
              >
                Add Resource
              </MenuItem>
              <div className={classes.signOut}>
                <AmplifySignOut />
              </div>
            </MenuList>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  avatarContainer: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    border: "2px solid black",
    margin: "auto",
  },
  avatar: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    margin: "auto",
    backgroundImage: `url(${defaultAvatar})`,
    background: "white",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  },
  welcome: {
    fontSize: "32px",
    margin: "8px",
  },
  list: {
    textDecoration: "none",
  },
  root: {
    display: "flex",
    flexGrow: 1,
    minWidth: "20vw",
    position: "fixed",
    top: 0,
    left: 0,
    // background: `url(${downtown})`,
  },
  // menuButton: {
  //   marginRight: theme.spacing(2),
  // },
  title: {
    height: "100vh",
  },
  signOut: {
    maxWidth: "10vw",
  },
}));
