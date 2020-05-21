import React, { useState, useEffect } from "react";
import { Auth } from "aws-amplify";

const EditUserProfile = ({
  boundUpdateUserProfile,
  profile,
  isToggle,
  setIsToggle,
}) => {
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    const getUsername = async () => {
      const useAuth = await Auth.currentUserInfo();
      const gotUser = await useAuth.username;
      setUsername(gotUser);
    };
    getUsername();
  }, []);

  console.log(Auth);
  console.log("Profile from EditUserProf page", profile);

  let firstnameInput, lastnameInput, emailInput, bioInput, githubInput;

  return (
    <div>
      <form
        style={styles.formStyle}
        onSubmit={(e) => {
          e.preventDefault();
          boundUpdateUserProfile &&
            boundUpdateUserProfile({
              username: username,
              firstname: firstnameInput.value,
              lastname: lastnameInput.value,
              email: emailInput.value,
              bio: bioInput.value,
              github: githubInput.value,
              avatar: avatar,
            });
          setIsToggle(!isToggle);
        }}
      >
        <input
          id="firstname"
          type="text"
          defaultValue={profile.firstname}
          ref={(node) => (firstnameInput = node)}
        />
        <input
          id="lastname"
          type="text"
          defaultValue={profile.lastname}
          ref={(node) => (lastnameInput = node)}
        />
        <input
          id="email"
          type="text"
          defaultValue={profile.email}
          ref={(node) => (emailInput = node)}
        />
        <textarea
          id="bio"
          type="text"
          defaultValue={profile.bio}
          ref={(node) => (bioInput = node)}
        ></textarea>
        <input
          id="github"
          type="text"
          defaultValue={profile.github}
          ref={(node) => (githubInput = node)}
        />
        {/* render image, give file ßtype input to update, give default image if none selected */}
        <input
          type="file"
          accept="image/*"
          id="s3-avatar"
          onChange={(e) => {
            setAvatar(e.target.files[0]);
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EditUserProfile;

const styles = {
  formStyle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};
