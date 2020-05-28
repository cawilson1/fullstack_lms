import React, { useEffect, useState } from "react";
import UpdateUserProfileContainer from "../containers/UpdateUserProfileContainer";
import defaultAvatar from "../assets/avatar-png-transparent-4.png";
import rogerRabbit from "../assets/rogerRabbit.jpeg";

const UserProfile = ({ profile, status, boundGetUserProfile }) => {
  const [isToggle, setIsToggle] = useState(true);

  const linkGithub = () => {
    window.location.assign(profile.github);
  };

  useEffect(() => {
    boundGetUserProfile();
  }, [isToggle]);

  return status === "GET_PROFILE_SUCCESS" ? (
    isToggle ? (
      <div style={styles.profileCard}>
        <h3> User Profile Info for {profile.username} </h3>
        {/* {profile.avatar === "" ? (
          <div>
            <img src={defaultAvatar} style={styles.avatar} />
          </div>
        ) : ( */}
        <div>
          <img
            src={require("../assets/rogerRabbit.jpeg")}
            style={styles.avatar}
          />
        </div>
        {/* )} */}
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
    <p>Loading...</p>
  );
};

const styles = {
  profileCard: {
    boxShadow: "0 4px 8px 0 silver",
    transition: "0.3s",
    width: "50vw",
    padding: "20px 20px",
    marginLeft: "10vw",
  },
  linkButton: {
    border: "none",
  },
  avatar: {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    border: "2px solid black",
    margin: "auto",
  },
};

export default UserProfile;
