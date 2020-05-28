import React, { useEffect, useState } from "react";

import UpdateUserProfileContainer from "../containers/UpdateUserProfileContainer";
import UserProfileInputContainer from "../containers/UserProfileInputContainer";
import defaultAvatar from "../assets/avatar-png-transparent-4.png";

const Profile = ({ s3Avatar, profile, isToggle, setIsToggle, linkGithub }) => {
  // console.log("UserProf component s3", s3Avatar);  **Is URL**
  return (
    <div style={styles.profileMaster}>
      <div style={styles.profileCard}>
        <h3> User Profile Info for {profile.username} </h3>
        {profile.avatar === "" ? (
          <div>
            <img src={defaultAvatar} style={styles.avatar} />
          </div>
        ) : (
          <div>
            <img src={s3Avatar} style={styles.avatar} />
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
    </div>
  );
};

const UserProfile = ({ s3Avatar, profile, status, boundGetUserProfile }) => {
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
          s3Avatar={s3Avatar}
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
  profileMaster: {
    display: "flex",
    justifyContent: "center",
  },
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
