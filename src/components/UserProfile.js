import React, { useEffect, useState } from "react";
import UpdateUserProfileContainer from "../containers/UpdateUserProfileContainer";

const UserProfile = ({ profile, boundGetUserProfile }) => {
  const [isToggle, setIsToggle] = useState(true);

  const linkGithub = () => {
    window.location.assign(profile.github);
  };

  useEffect(() => {
    boundGetUserProfile();
  }, []);

  return isToggle ? (
    <div>
      <h3> User Profile Info for {profile.username} </h3>
      {/* <p> TINY AVATAR HERE?</p> */}
      <p>First: {profile.firstname}</p>
      <p>Last: {profile.lastname}</p>
      <p>Email:{profile.email}</p>
      <button style={styles.linkButton} onClick={() => linkGithub()}>
        {profile.github}
      </button>
      <p>Bio: {profile.bio}</p>
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

const styles = {
  linkButton: {
    border: "none",
  },
};

export default UserProfile;
