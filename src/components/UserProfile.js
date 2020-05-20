import React, { useEffect } from "react";

const UserProfile = ({ profile, boundGetUserProfile }) => {
  useEffect(() => {
    boundGetUserProfile();
  }, []);

  return <h3> User Profile Info </h3>;
};

export default UserProfile;
