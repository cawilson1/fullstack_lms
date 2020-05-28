import React, { useEffect, useState } from "react";
import UpdateUserProfileContainer from "../containers/UpdateUserProfileContainer";
import defaultAvatar from "../assets/avatar-png-transparent-4.png";
import UserProfileInputContainer from "../containers/UserProfileInputContainer";

const Profile = ({ profile, isToggle, setIsToggle, linkGithub }) => {
  return (
    <div style={styles.profileCard}>
      <h3> User Profile Info for {profile.username} </h3>
      {profile.avatar === "" ? (
        <div>
          <img src={defaultAvatar} style={styles.avatar} />
        </div>
      ) : (
        <div>
          <img src={profile.avatar} style={styles.avatar} />
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
  );
};

const UserProfile = ({ profile, status, boundGetUserProfile }) => {
  const [isToggle, setIsToggle] = useState(true);
  const linkGithub = () => {
    window.location.assign(profile.github);
  };
  useEffect(() => {
    boundGetUserProfile();
  }, []);
  return profile !== undefined ? (
    status === "GET_PROFILE_SUCCESS" ? (
      isToggle ? (
        <Profile
          isToggle={isToggle}
          setIsToggle={setIsToggle}
          linkGithub={linkGithub}
          profile={profile}
        />
      ) : (
        <UpdateUserProfileContainer
          profile={profile}
          isToggle={isToggle}
          setIsToggle={setIsToggle}
        />
      )
    ) : (
      <p>Loading</p>
    )
  ) : (
    <UserProfileInputContainer profile={profile} />
  );
};
const styles = {
  profileCard: {
    boxShadow: "0 4px 8px 0 silver",
    transition: "0.3s",
    width: "50vw",
    padding: "2px 16px",
    justifyContent: "center",
  },
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
  },
};
export default UserProfile;
