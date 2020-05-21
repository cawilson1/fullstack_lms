import React, { useEffect, useState } from "react";
import UpdateUserProfileContainer from "../containers/UpdateUserProfileContainer";

const UserProfile = ({ profile, boundGetUserProfile }) => {
  const [isToggle, setIsToggle] = useState(true);

  useEffect(() => {
    boundGetUserProfile();
  }, []);

  return isToggle ? (
    <div>
      <h3> User Profile Info for {profile.username} </h3>
      <p>firstname: {profile.firstname}</p>
      <p>lastname: {profile.lastname}</p>
      <p>etc...</p>
      <button onClick={() => setIsToggle(!isToggle)}> Edit </button>
    </div>
  ) : (
    <UpdateUserProfileContainer
      profile={profile}
      isToggle={isToggle}
      setIsToggle={setIsToggle}
    />
  );
};

export default UserProfile;
