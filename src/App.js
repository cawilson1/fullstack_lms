import React from "react";
import "./App.css";
import { Router, Link } from "@reach/router";

import Header from "./components/Header";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile";
import Post from "./components/Post";
import PostInput from "./components/PostInput";
import PostsList from "./components/PostsList";
import Resource from "./components/Resource";
import ResourceInput from "./components/ResourceInput";
import ResourceList from "./components/ResourceList";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Router>
        <Profile path="profile" />
        <EditProfile path="profile_edit" />
        {/* </Profile> */}
        <ResourceList path="/" />
        <Resource path="resource" />
        <ResourceInput path="resource_input" />
        {/* </ResourceList> */}
        <PostsList path="post_list" />
        <Post path="post" />
        <PostInput path="post_input" />
        {/* </PostsList> */}
      </Router>
    </div>
  );
}

export default App;
