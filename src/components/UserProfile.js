import React, { useEffect, useState } from "react";
import UpdateUserProfileContainer from "../containers/UpdateUserProfileContainer";
import defaultAvatar from "../assets/avatar-png-transparent-4.png";

const UserProfile = ({ profile, status, boundGetUserProfile }) => {
  const [isToggle, setIsToggle] = useState(true);

  const linkGithub = () => {
    window.location.assign(profile.github);
  };

  console.log(profile, "PROFILE");

  useEffect(() => {
    boundGetUserProfile();
  }, []);

  return status === "GET_PROFILE_SUCCESS" ? (
    isToggle ? (
      <div>
        <h3> User Profile Info for {profile.username} </h3>
        {profile.avatar === "" ? (
          <div style={styles.avatar}>
            <img src={defaultAvatar} />
          </div>
        ) : (
          <div style={styles.avatar}>
            <img src={profile.avatar} />
          </div>
        )}
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
    )
  ) : (
    <p>Loading</p>
  );
};

const styles = {
  linkButton: {
    border: "none",
  },
  avatar: {
    verticalAlign: "middle",
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    border: "2px solid black",
    margin: "auto",
    // background: `url(${defaultAvatar})`,
  },
};

export default UserProfile;
