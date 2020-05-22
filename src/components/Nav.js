import React from "react";
import { Link } from "@reach/router";
import { AmplifySignOut } from "@aws-amplify/ui-react";

const Nav = () => {
  return (
    <>
      <Link to="profile">Profile</Link>{" "}
      <Link to="create_profile"> Create Profile</Link>{" "}
      <Link to="profile_edit">Edit Profile</Link>{" "}
      <Link to="post_list">Posts</Link> <Link to="post_input">Create Post</Link>{" "}
      <Link to="/">Resources</Link>{" "}
      <Link to="resource_input">Add Resource</Link> <AmplifySignOut />
    </>
  );
};

export default Nav;
